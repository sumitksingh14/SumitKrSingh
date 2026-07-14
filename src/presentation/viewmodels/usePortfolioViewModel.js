import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetProjectsUseCase } from '../../domain/usecases/GetProjectsUseCase';

export const usePortfolioViewModel = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const repository = new PortfolioRepository();
      const getProjectsUseCase = new GetProjectsUseCase(repository);
      const data = await getProjectsUseCase.execute();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading };
};
