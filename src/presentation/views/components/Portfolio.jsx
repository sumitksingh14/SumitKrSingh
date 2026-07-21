import { ExternalLink } from 'lucide-react';
import './Portfolio.css';
import { usePortfolioViewModel } from '../../viewmodels/usePortfolioViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';

const Portfolio = () => {
  const { projects, loading } = usePortfolioViewModel();

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle center-text">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className={`project-card card ${idx % 2 !== 0 ? 'reversed' : ''}`}>
                <div className="project-image-col">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-image-placeholder">
                      <span className="project-image-text">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="project-content-col">
                  <h3 className="project-title">{project.title}</h3>
                  {project.role && (
                    <span className="project-role">{project.role}</span>
                  )}
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link icon-btn"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
