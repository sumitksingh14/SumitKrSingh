import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that observes elements and triggers reveal animations
 * when they enter the viewport. Uses IntersectionObserver for performance.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Margin around root, default '0px 0px -60px 0px'
 * @returns {{ ref: React.RefObject, isRevealed: boolean }}
 */
export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = options;
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element); // Only trigger once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isRevealed };
};

/**
 * Helper component that wraps children with scroll-reveal animation.
 * Use this for simpler cases where you don't need the hook directly.
 */
export const ScrollReveal = ({ children, className = '', delay = 0, ...props }) => {
  const { ref, isRevealed } = useScrollReveal(props);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'revealed' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
