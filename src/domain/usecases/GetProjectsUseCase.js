export class GetProjectsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getProjects();
  }
}
