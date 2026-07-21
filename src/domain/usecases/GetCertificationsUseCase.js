export class GetCertificationsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getCertifications();
  }
}
