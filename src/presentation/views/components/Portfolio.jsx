import { useState } from 'react';
import { ExternalLink, Building2, Clock, Users, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import './Portfolio.css';
import { usePortfolioViewModel } from '../../viewmodels/usePortfolioViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';

const Portfolio = () => {
  const { projects, loading } = usePortfolioViewModel();
  const [expandedIdx, setExpandedIdx] = useState(null);

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  const toggleExpand = (idx) => {
    setExpandedIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle center-text">
            Noteworthy programs and products I have delivered — click any card to see key outcomes.
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project, idx) => {
            const isExpanded = expandedIdx === idx;
            const isReversed = idx % 2 !== 0;

            return (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className={`project-card card ${isReversed ? 'reversed' : ''} ${isExpanded ? 'expanded' : ''}`}>
                  {/* ── Image Column ── */}
                  <div className="project-image-col">
                    <div className="project-index-badge">{String(idx + 1).padStart(2, '0')}</div>
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

                  {/* ── Content Column ── */}
                  <div className="project-content-col">
                    {/* Header Row */}
                    <div className="project-header">
                      <div className="project-header-top">
                        {project.role && (
                          <span className="project-role">{project.role}</span>
                        )}
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                    </div>

                    {/* Meta Row: client, duration, team */}
                    <div className="project-meta">
                      {project.client && (
                        <span className="project-meta-item">
                          <Building2 size={13} />
                          {project.client}
                        </span>
                      )}
                      {project.duration && (
                        <span className="project-meta-item">
                          <Clock size={13} />
                          {project.duration}
                        </span>
                      )}
                      {project.teamSize && (
                        <span className="project-meta-item">
                          <Users size={13} />
                          {project.teamSize}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="project-desc">{project.description}</p>

                    {/* Impact Metrics */}
                    {project.impact && project.impact.length > 0 && (
                      <div className="project-impact">
                        {project.impact.map((m, mIdx) => (
                          <div key={mIdx} className="impact-metric">
                            <span className="impact-value">{m.value}</span>
                            <span className="impact-label">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="project-tags">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag">{tag}</span>
                      ))}
                    </div>

                    {/* Expand Toggle */}
                    {project.outcomes && project.outcomes.length > 0 && (
                      <button
                        className="project-outcomes-toggle"
                        onClick={() => toggleExpand(idx)}
                        aria-expanded={isExpanded}
                      >
                        <TrendingUp size={15} />
                        {isExpanded ? 'Hide Key Outcomes' : 'View Key Outcomes'}
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    )}

                    {/* Collapsible Outcomes */}
                    <div className={`project-outcomes-wrap ${isExpanded ? 'open' : ''}`}>
                      <div className="project-outcomes">
                        <p className="outcomes-heading">Key Outcomes</p>
                        <ul className="outcomes-list">
                          {project.outcomes?.map((o, oIdx) => (
                            <li key={oIdx} className="outcome-item">
                              <span className="outcome-bullet" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* External Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link icon-btn"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink size={20} />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
