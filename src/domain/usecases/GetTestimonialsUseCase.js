export class GetTestimonialsUseCase {
  constructor(portfolioRepository) {
    this.repository = portfolioRepository;
  }

  execute() {
    return this.repository.getTestimonials();
  }
}
