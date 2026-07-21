import { ScrollReveal } from '../hooks/useScrollReveal';
import { useExperienceViewModel } from '../../viewmodels/useExperienceViewModel';
import './Experience.css';

const Experience = () => {
  const { experiences, loading } = useExperienceViewModel();

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Career Journey</h2>
          <p className="section-subtitle center-text">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-node">
                  <div className="timeline-dot" />
                </div>
                <div className="experience-card card">
                  <div className="exp-header">
                    <div className="exp-logo-col">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="exp-logo-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="exp-logo-placeholder" style={{ display: 'none' }}>
                        {exp.company.charAt(0)}
                      </div>
                    </div>
                    <div className="exp-header-text">
                      <h3 className="exp-title">{exp.title}</h3>
                      <p className="exp-period">{exp.period}</p>
                    </div>
                  </div>

                  {/* Highlight badges */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="exp-highlights">
                      {exp.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="exp-highlight-badge">{h}</span>
                      ))}
                    </div>
                  )}

                  <ul className="exp-points">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="exp-tech-tags">
                      {exp.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tag">{tech}</span>
                      ))}
                    </div>
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

export default Experience;
