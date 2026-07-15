import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './AmbientMusic.css';

/**
 * Generates a soft ambient music loop using the Web Audio API.
 * No external audio files needed — produces gentle, dreamy pad sounds
 * that fade in when the user scrolls and fade out when idle.
 */
const AmbientMusic = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const scrollTimeoutRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Dreamy piano chord — C major 9th spread voicing
  const chordFrequencies = [
    130.81,  // C3
    164.81,  // E3
    196.00,  // G3
    246.94,  // B3
    293.66,  // D4
    329.63,  // E4
  ];

  const loopTimerRef = useRef(null);

  const createAmbientSound = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      gainNodeRef.current = audioCtxRef.current.createGain();
      gainNodeRef.current.gain.value = 0;
      gainNodeRef.current.connect(audioCtxRef.current.destination);
    }

    const audioCtx = audioCtxRef.current;

    // --- Realistic Piano Tone Generator ---
    // Uses additive synthesis with inharmonic partials, per-harmonic
    // decay envelopes, and a short noise burst for hammer attack.
    function createPianoNote(freq, startTime, destination, velocity = 0.35) {
      const noteGain = audioCtx.createGain();
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.connect(destination);

      // Number of harmonic partials to synthesize
      const numPartials = 8;
      // Piano inharmonicity coefficient (strings are slightly stiff)
      const B = 0.0004;
      // Amplitude rolloff per harmonic — higher partials are quieter
      const amplitudes = [1, 0.6, 0.4, 0.25, 0.15, 0.09, 0.05, 0.03];
      // Higher harmonics decay faster (simulates energy loss in real strings)
      const decayBase = 4.5; // seconds for the fundamental

      for (let n = 1; n <= numPartials; n++) {
        const osc = audioCtx.createOscillator();
        const partialGain = audioCtx.createGain();

        osc.type = 'sine';

        // Piano strings are slightly inharmonic: f_n = n * f0 * sqrt(1 + B * n^2)
        const partialFreq = n * freq * Math.sqrt(1 + B * n * n);
        osc.frequency.setValueAtTime(partialFreq, startTime);

        // Slight random detuning for warmth (+/- 0.5 cents)
        const detuneCents = (Math.random() - 0.5) * 1.0;
        osc.detune.setValueAtTime(detuneCents, startTime);

        const amp = (amplitudes[n - 1] || 0.02) * velocity;
        const decay = decayBase / (1 + (n - 1) * 0.35); // faster decay for upper partials

        // Per-partial envelope
        partialGain.gain.setValueAtTime(0, startTime);
        partialGain.gain.linearRampToValueAtTime(amp, startTime + 0.005); // ~5ms attack
        partialGain.gain.setTargetAtTime(amp * 0.6, startTime + 0.005, 0.08); // quick drop to sustain
        partialGain.gain.setTargetAtTime(0.0001, startTime + 0.1, decay * 0.4); // long exponential release

        osc.connect(partialGain);
        partialGain.connect(noteGain);

        osc.start(startTime);
        osc.stop(startTime + decay + 1);

        oscillatorsRef.current.push(osc);
      }

      // --- Hammer noise burst ---
      // Short burst of filtered noise simulates the mechanical strike
      const bufferLen = audioCtx.sampleRate * 0.06; // 60ms
      const noiseBuffer = audioCtx.createBuffer(1, bufferLen, audioCtx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferLen; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferLen * 0.15));
      }

      const noiseSrc = audioCtx.createBufferSource();
      noiseSrc.buffer = noiseBuffer;

      // Bandpass filter to keep the hammer click natural
      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.value = Math.min(freq * 4, 6000);
      noiseFilter.Q.value = 0.8;

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(velocity * 0.12, startTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.05);

      noiseSrc.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(noteGain);

      noiseSrc.start(startTime);

      // Master envelope for the whole note
      noteGain.gain.linearRampToValueAtTime(1.0, startTime + 0.005);
    }

    // Play the chord (one-shot), notes staggered for a soft arpeggiated feel
    function playChord() {
      const now = audioCtx.currentTime;
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.35, now);
      masterGain.connect(gainNodeRef.current);

      chordFrequencies.forEach((freq, i) => {
        const noteOffset = i * 0.08; // 80ms stagger between notes
        createPianoNote(freq, now + noteOffset, masterGain, 0.3);
      });
    }

    // Play immediately, then loop every 5s for continuous ambient feel
    playChord();
    loopTimerRef.current = setInterval(() => {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        playChord();
      }
    }, 5000);
  }, []);

  const fadeIn = useCallback(() => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    clearInterval(fadeIntervalRef.current);
    const targetVolume = 0.12;
    const step = 0.003;

    fadeIntervalRef.current = setInterval(() => {
      if (!gainNodeRef.current) return;
      const current = gainNodeRef.current.gain.value;
      if (current < targetVolume) {
        gainNodeRef.current.gain.value = Math.min(current + step, targetVolume);
      } else {
        clearInterval(fadeIntervalRef.current);
      }
    }, 50);

    setIsPlaying(true);
  }, []);

  const fadeOut = useCallback(() => {
    if (!gainNodeRef.current) return;

    clearInterval(fadeIntervalRef.current);
    const step = 0.002;

    fadeIntervalRef.current = setInterval(() => {
      if (!gainNodeRef.current) return;
      const current = gainNodeRef.current.gain.value;
      if (current > 0.001) {
        gainNodeRef.current.gain.value = Math.max(current - step, 0);
      } else {
        gainNodeRef.current.gain.value = 0;
        clearInterval(fadeIntervalRef.current);
        setIsPlaying(false);
      }
    }, 50);
  }, []);

  // Handle scroll events — fade in on scroll, fade out after idle
  useEffect(() => {
    if (isMuted || !hasInteracted) return;

    const handleScroll = () => {
      fadeIn();

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        fadeOut();
      }, 2000); // Fade out 2s after scrolling stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeoutRef.current);
      clearInterval(fadeIntervalRef.current);
    };
  }, [isMuted, hasInteracted, fadeIn, fadeOut]);

  const toggleMute = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      createAmbientSound();
      setIsMuted(false);
      return;
    }

    if (isMuted) {
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsMuted(false);
    } else {
      fadeOut();
      setIsMuted(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(loopTimerRef.current);
      oscillatorsRef.current.forEach((osc) => {
        try { osc.stop(); } catch (e) { /* already stopped */ }
      });
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      clearTimeout(scrollTimeoutRef.current);
      clearInterval(fadeIntervalRef.current);
    };
  }, []);

  return (
    <button
      className={`ambient-music-btn ${isPlaying && !isMuted ? 'playing' : ''}`}
      onClick={toggleMute}
      aria-label={isMuted ? 'Enable ambient scroll music' : 'Mute ambient music'}
      title={isMuted ? 'Enable ambient scroll music' : 'Mute ambient music'}
    >
      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      {!isMuted && isPlaying && (
        <span className="ambient-music-bars">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      )}
    </button>
  );
};

export default AmbientMusic;
