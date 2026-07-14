import { projects, experiences, skills } from '../sources/mockData';

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
}
