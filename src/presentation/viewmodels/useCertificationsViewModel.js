import { useState, useEffect } from 'react';
import { PortfolioRepository } from '../../data/repositories/PortfolioRepository';
import { GetCertificationsUseCase } from '../../domain/usecases/GetCertificationsUseCase';

export const useCertificationsViewModel = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const repository = new PortfolioRepository();
      const useCase = new GetCertificationsUseCase(repository);
      const data = await useCase.execute();
      setCertifications(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return { certifications, loading };
};
