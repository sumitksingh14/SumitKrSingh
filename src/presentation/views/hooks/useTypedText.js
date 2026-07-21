import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that cycles through an array of strings with a typing effect.
 *
 * @param {string[]} strings - Array of strings to cycle through
 * @param {Object} options
 * @param {number} options.typingSpeed - Ms per character typed, default 80
 * @param {number} options.deletingSpeed - Ms per character deleted, default 40
 * @param {number} options.pauseTime - Ms to pause after full word, default 2000
 * @returns {{ displayText: string, isTyping: boolean }}
 */
export const useTypedText = (strings = [], options = {}) => {
  const { typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000 } = options;

  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentString = strings[stringIndex] || '';

  const tick = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      if (charIndex < currentString.length) {
        setDisplayText(currentString.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        // Finished typing — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting backward
      if (charIndex > 0) {
        setDisplayText(currentString.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        // Finished deleting — move to next string
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }
  }, [charIndex, currentString, isDeleting, isPaused, pauseTime, strings.length]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return { displayText, isTyping: !isDeleting && charIndex < currentString.length };
};
