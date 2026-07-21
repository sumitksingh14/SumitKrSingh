import * as Icons from 'lucide-react';
import './Services.css';
import { useSkillsViewModel } from '../../viewmodels/useSkillsViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';

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
          <h2 className="section-title">Expertise & Tools</h2>
          <p className="section-subtitle center-text">
            The skills, tools, and technologies I am proficient in:
          </p>
        </div>

        <div className="skills-categories">
          {skills.map((category, catIdx) => (
            <ScrollReveal key={catIdx} delay={catIdx * 120}>
              <div className="skill-category">
                <h3 className="skill-category-title">{category.category}</h3>
                <div className="skills-grid">
                  {category.items.map((skill, idx) => {
                    const IconComponent = Icons[skill.iconStr] || Icons.Code;
                    return (
                      <div key={idx} className="skill-item">
                        <div className="skill-icon">
                          <IconComponent size={28} />
                        </div>
                        <p className="skill-label">{skill.label}</p>
                        {skill.proficiency && (
                          <div className="skill-bar-wrap">
                            <div
                              className="skill-bar"
                              style={{ width: `${skill.proficiency}%` }}
                              aria-label={`${skill.proficiency}% proficiency`}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
