import { projects, experiences, skills, thoughts, testimonials, stats, certifications } from '../sources/mockData';

export class PortfolioRepository {
  getProjects() {
    // Simulating an asynchronous data fetch
    return Promise.resolve(projects);
  }

  getExperiences() {
    return Promise.resolve(experiences);
  }

  getSkills() {
    return Promise.resolve(skills);
  }

  getTestimonials() {
    return Promise.resolve(testimonials);
  }

  getStats() {
    return Promise.resolve(stats);
  }

  getCertifications() {
    return Promise.resolve(certifications);
  }

  getThoughtOfTheDay() {
    // Pick a thought based on today's date so it changes daily
    const today = new Date();
    const dayIndex = (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate()) % thoughts.length;
    return Promise.resolve(thoughts[dayIndex]);
  }

  getRandomThoughts(count = 3) {
    // Get multiple random thoughts for the carousel
    const shuffled = [...thoughts].sort(() => 0.5 - Math.random());
    return Promise.resolve(shuffled.slice(0, count));
  }
}

