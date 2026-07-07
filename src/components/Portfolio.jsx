import { ExternalLink } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    title: 'API Guardrails Program',
    description:
      'Led enterprise API Guardrails Program — standardised API design, security, lifecycle & built the organisation\'s first API monetisation model cutting review cycles by 30–50%.',
    tags: ['Program Management', 'API Design', 'Governance', 'Security', 'Monetisation'],
    link: null,
  },
  {
    title: 'US Retail Mobile App',
    description:
      'End-to-end technical & functional delivery of a US-based retail mobile application, coordinating iOS, Android & QA resources with active stakeholder management.',
    tags: ['iOS', 'Android', 'Retail', 'Stakeholder Management', 'QA'],
    link: null,
  },
  {
    title: 'Nomo Fintech Platform',
    description:
      'Technical Project Manager for a UK-based Fintech mobile platform built on React Native & Node.js, managing the full delivery lifecycle and client relationship.',
    tags: ['React Native', 'Node.js', 'Fintech', 'Agile', 'UK Banking'],
    link: null,
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Work</span>
          <p className="section-subtitle center-text">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project, idx) => (
            <div key={idx} className={`project-card card ${idx % 2 !== 0 ? 'reversed' : ''}`}>
              <div className="project-image-col">
                <div className="project-image-placeholder">
                  <span className="project-image-text">{project.title}</span>
                </div>
              </div>
              <div className="project-content-col">
                <h3 className="project-title">{project.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
