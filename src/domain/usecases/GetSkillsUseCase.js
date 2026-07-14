export class GetSkillsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getSkills();
  }
}
