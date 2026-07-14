import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetExperiencesUseCase } from '../../domain/usecases/GetExperiencesUseCase';

export const useExperienceViewModel = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      const repository = new PortfolioRepository();
      const getExperiencesUseCase = new GetExperiencesUseCase(repository);
      const data = await getExperiencesUseCase.execute();
      setExperiences(data);
      setLoading(false);
    };

    fetchExperiences();
  }, []);

  return { experiences, loading };
};
