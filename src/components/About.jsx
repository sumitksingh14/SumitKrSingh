import { Download, CheckCircle2 } from 'lucide-react';
import './About.css';

const skills = [
  'iOS Development',
  'Android Development',
  'React Native',
  'Program Management',
  'Agile & Scrum',
  'Technical Architecture',
  'API Governance',
  'Stakeholder Management',
  'Team Leadership',
  'Fintech & Banking',
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Photo */}
          <div className="about-photo-col">
            <div className="about-photo-wrap">
              <img src="/profile.jpg" alt="Sumit Kumar Singh" className="about-photo" />
              <div className="about-photo-badge">
                <span className="badge-number">16+</span>
                <span className="badge-label">Years of<br />Experience</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <p className="section-label">Get To Know</p>
            <h2 className="section-title">About Me</h2>

            <p className="about-text">
              I am a seasoned <strong>Technical Program Manager</strong> and mobile delivery
              leader with over 16 years of experience building and shipping complex digital
              products across iOS, Android, and React Native platforms. I have led high-impact
              programmes for global enterprises in Fintech, Banking, and Insurance domains.
            </p>
            <p className="about-text">
              My approach combines deep hands-on technical knowledge with strong programme
              governance — bridging the gap between engineering teams and business stakeholders
              to consistently deliver on time and on budget. I thrive in leading distributed
              teams, defining scalable architectures, and transforming ambiguous challenges into
              well-structured, executable delivery plans.
            </p>

            {/* Skills Chips */}
            <div className="about-skills">
              {skills.map((skill, idx) => (
                <span key={idx} className="skill-chip">
                  <CheckCircle2 size={14} />
                  {skill}
                </span>
              ))}
            </div>

            <a href="/resume.pdf" download className="btn btn-primary about-cta">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
