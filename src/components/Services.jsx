import {
  Smartphone,
  MonitorSmartphone,
  Settings2,
  Layout,
  Users,
  GitBranch,
  Shield,
  Code2,
  Layers,
  Database,
  BarChart3,
  Globe,
  Kanban,
  MessageSquare,
  Cloud,
  FileCode2,
} from 'lucide-react';
import './Services.css';

const skills = [
  { icon: <Smartphone size={32} />, label: 'iOS' },
  { icon: <MonitorSmartphone size={32} />, label: 'Android' },
  { icon: <Code2 size={32} />, label: 'React Native' },
  { icon: <FileCode2 size={32} />, label: 'Swift' },
  { icon: <Layers size={32} />, label: 'Kotlin' },
  { icon: <Layout size={32} />, label: 'Architecture' },
  { icon: <Settings2 size={32} />, label: 'Program Management' },
  { icon: <Kanban size={32} />, label: 'Agile / Scrum' },
  { icon: <Users size={32} />, label: 'Leadership' },
  { icon: <Shield size={32} />, label: 'API Governance' },
  { icon: <GitBranch size={32} />, label: 'CI/CD' },
  { icon: <Database size={32} />, label: 'Databases' },
  { icon: <Cloud size={32} />, label: 'Cloud' },
  { icon: <BarChart3 size={32} />, label: 'Analytics' },
  { icon: <Globe size={32} />, label: 'REST APIs' },
  { icon: <MessageSquare size={32} />, label: 'Stakeholder Management' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Skills</span>
          <p className="section-subtitle center-text">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-label">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
