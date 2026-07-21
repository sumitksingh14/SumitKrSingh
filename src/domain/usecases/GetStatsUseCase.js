export class GetStatsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getStats();
  }
}
