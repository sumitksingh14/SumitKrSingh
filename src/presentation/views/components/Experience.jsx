import './Experience.css';
import { useExperienceViewModel } from '../../viewmodels/useExperienceViewModel';

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
          <p className="section-subtitle center-text">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card card">
              <div className="exp-logo-col">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-logo-image"
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
              <div className="exp-content-col">
                <h3 className="exp-title">{exp.title}</h3>
                <ul className="exp-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-date-col">
                <p className="exp-period">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
