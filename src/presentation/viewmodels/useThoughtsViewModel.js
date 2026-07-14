import { useState, useEffect, useCallback } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetThoughtOfTheDayUseCase, GetRandomThoughtsUseCase } from '../../domain/usecases/GetThoughtsUseCase';

export const useThoughtsViewModel = () => {
  const [featuredThought, setFeaturedThought] = useState(null);
  const [additionalThoughts, setAdditionalThoughts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      const repository = new PortfolioRepository();
      const getThoughtOfTheDay = new GetThoughtOfTheDayUseCase(repository);
      const getRandomThoughts = new GetRandomThoughtsUseCase(repository);

      const [featured, random] = await Promise.all([
        getThoughtOfTheDay.execute(),
        getRandomThoughts.execute(5),
      ]);

      setFeaturedThought(featured);
      setAdditionalThoughts(random);
      setLoading(false);
    };

    fetchThoughts();
  }, []);

  const allThoughts = featuredThought
    ? [featuredThought, ...additionalThoughts]
    : additionalThoughts;

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % allThoughts.length);
  }, [allThoughts.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + allThoughts.length) % allThoughts.length);
  }, [allThoughts.length]);

  const goToIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    if (allThoughts.length === 0) return;
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [goToNext, allThoughts.length]);

  return {
    featuredThought,
    additionalThoughts,
    allThoughts,
    activeIndex,
    loading,
    goToNext,
    goToPrev,
    goToIndex,
  };
};
