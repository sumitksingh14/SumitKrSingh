export class GetExperiencesUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getExperiences();
  }
}
