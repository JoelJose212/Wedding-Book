import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for managing a slider with auto-play and manual navigation.
 *
 * @param {number} totalSlides - Total number of slides
 * @param {number} interval - Auto-play interval in ms (default 5000)
 * @returns {{ currentSlide, next, prev, goToSlide, progress }}
 */
export function useSlider(totalSlides, interval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current) {
      cancelAnimationFrame(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    clearTimers();
    startTimeRef.current = Date.now();
    setProgress(0);

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / interval) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(updateProgress);
      }
    };
    progressRef.current = requestAnimationFrame(updateProgress);

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, interval);
  }, [totalSlides, interval, clearTimers]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentSlide(index);
      startAutoPlay();
    },
    [startAutoPlay]
  );

  const next = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prev = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  useEffect(() => {
    startAutoPlay();
    return clearTimers;
  }, [currentSlide, startAutoPlay, clearTimers]);

  return { currentSlide, next, prev, goToSlide, progress };
}
