export class GetThoughtOfTheDayUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getThoughtOfTheDay();
  }
}

export class GetRandomThoughtsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute(count) {
    return this.repository.getRandomThoughts(count);
  }
}
