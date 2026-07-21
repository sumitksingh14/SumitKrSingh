import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetTestimonialsUseCase } from '../../domain/usecases/GetTestimonialsUseCase';

export const useTestimonialsViewModel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const repository = new PortfolioRepository();
      const getTestimonialsUseCase = new GetTestimonialsUseCase(repository);
      const data = await getTestimonialsUseCase.execute();
      setTestimonials(data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToIndex = (index) => setActiveIndex(index);

  return { testimonials, activeIndex, loading, goToIndex };
};
