import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetStatsUseCase } from '../../domain/usecases/GetStatsUseCase';

export const useStatsViewModel = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const repository = new PortfolioRepository();
      const getStatsUseCase = new GetStatsUseCase(repository);
      const data = await getStatsUseCase.execute();
      setStats(data);
      setLoading(false);
    };

    fetchStats();
  }, []);

  return { stats, loading };
};
