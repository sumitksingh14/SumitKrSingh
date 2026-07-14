import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetSkillsUseCase } from '../../domain/usecases/GetSkillsUseCase';

export const useSkillsViewModel = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const repository = new PortfolioRepository();
      const getSkillsUseCase = new GetSkillsUseCase(repository);
      const data = await getSkillsUseCase.execute();
      setSkills(data);
      setLoading(false);
    };

    fetchSkills();
  }, []);

  return { skills, loading };
};
