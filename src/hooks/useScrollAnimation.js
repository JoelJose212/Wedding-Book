import { useEffect, useRef } from 'react';

/**
 * Custom hook that observes elements with [data-animate] attribute
 * inside a container and adds 'visible' class when they enter viewport.
 *
 * @param {number} threshold - Intersection threshold (0-1)
 * @returns {React.RefObject} - Ref to attach to the container element
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = container.querySelectorAll('.animate-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
