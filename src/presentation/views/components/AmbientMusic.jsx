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

  // Chord frequencies for a soft ambient pad (C major 7th voicing)
  const chordFrequencies = [130.81, 164.81, 196.00, 246.94, 329.63];

  const createAmbientSound = useCallback(() => {
    if (audioCtxRef.current) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Master gain — starts silent
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Create soft oscillators for each note in the chord
    const oscs = chordFrequencies.map((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      // Slight detune for warmth
      osc.detune.value = (i - 2) * 3;

      // Individual gain for mixing
      const oscGain = ctx.createGain();
      oscGain.gain.value = 0.06 - i * 0.008; // Lower notes louder

      // Low-pass filter for softness
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400 + i * 50;
      filter.Q.value = 0.5;

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();

      return osc;
    });

    oscillatorsRef.current = oscs;
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
