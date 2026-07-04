import { CheckCircle2, Code2, Cpu, Layout, Layers, Box, MonitorSmartphone, Target, Users, Settings } from 'lucide-react';
import './Skills.css';

const technicalSkills = [
  {
    category: "Mobile Platforms",
    icon: <MonitorSmartphone size={24} />,
    skills: ["iOS", "Android", "React Native", "Hybrid Apps"]
  },
  {
    category: "Programming Languages",
    icon: <Code2 size={24} />,
    skills: ["Swift", "Kotlin", "Java", "Objective-C", "JavaScript"]
  },
  {
    category: "Tools & Frameworks",
    icon: <Settings size={24} />,
    skills: ["Xcode", "Android Studio", "RESTful APIs", "Git", "Agile/Scrum"]
  },
  {
    category: "Architectural Patterns",
    icon: <Layout size={24} />,
    skills: ["MVC", "MVP", "MVVM", "VIPER"]
  },
  {
    category: "Domain Expertise",
    icon: <Box size={24} />,
    skills: ["Fintech", "Banking", "Insurance", "E-commerce"]
  }
];

const managementSkills = [
  "Program Management & Governance",
  "Technical Project Planning & Execution",
  "End-to-End Software Delivery",
  "Agile & Scrum Methodologies",
  "Scalable Architecture Design",
  "Team Mentorship & Performance Management",
  "Stakeholder Communication & Reporting",
  "Client Relationship Management"
];

const Skills = () => {
  return (
    <div className="skills page-enter-active">
      <div className="section-header">
        <h2 className="section-title">Core <span className="gradient-text">Competencies</span></h2>
        <p className="section-subtitle">Bridging the gap between deep technical expertise and strategic management.</p>
      </div>

      <div className="skills-grid">
        <div className="skills-column">
          <h3 className="column-title">
            <Cpu className="text-accent" /> Technical Skills
          </h3>
          <div className="tech-cards">
            {technicalSkills.map((section, idx) => (
              <div key={idx} className="glass-card skill-card">
                <div className="skill-header">
                  <div className="icon-wrapper">{section.icon}</div>
                  <h4>{section.category}</h4>
                </div>
                <div className="tags">
                  {section.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h3 className="column-title">
            <Target className="text-accent" /> Project Management
          </h3>
          <div className="glass-card pm-card">
            <ul className="pm-list">
              {managementSkills.map((skill, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
