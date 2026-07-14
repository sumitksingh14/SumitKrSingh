import * as Icons from 'lucide-react';
import './Services.css';
import { useSkillsViewModel } from '../../viewmodels/useSkillsViewModel';

const Skills = () => {
  const { skills, loading } = useSkillsViewModel();

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Skills</span>
          <p className="section-subtitle center-text">
            The skills, tools, and technologies I am proficient in:
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => {
            const IconComponent = Icons[skill.iconStr] || Icons.Code;
            return (
              <div key={idx} className="skill-item">
                <div className="skill-icon">
                  <IconComponent size={32} />
                </div>
                <p className="skill-label">{skill.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
