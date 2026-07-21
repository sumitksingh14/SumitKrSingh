import { ScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">About me</span>
        </div>

        <div className="about-grid">
          {/* Left: Photo */}
          <ScrollReveal>
            <div className="about-photo-col">
              <div className="about-photo-wrap">
                <img
                  src="/sumit_casual.png"
                  alt="Full pose of Sumit Kumar Singh"
                  className="about-photo"
                  loading="lazy"
                />
                <div className="about-photo-offset" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <ScrollReveal delay={150}>
            <div className="about-content">
              <h2 className="about-heading">Curious about me? Here you have it:</h2>

              <p className="about-text">
                I'm a seasoned{' '}
                <strong>Technical Program Manager</strong> and mobile delivery
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

              <p className="about-text">
                When I'm not managing complex programmes, you'll find me exploring the latest in
                mobile technology, contributing to open-source, or mentoring aspiring engineers.
                I'm passionate about building products that make a real difference.
              </p>

              <p className="about-text">
                Finally, some quick bits about me:
              </p>

              <div className="about-quick-facts">
                <ul className="about-list">
                  <li>Masters in Computer Applications</li>
                  <li>16+ years in tech industry</li>
                </ul>
                <ul className="about-list">
                  <li>Agile & Scrum practitioner</li>
                  <li>Program Management & Mobile Technology Specialist</li>
                </ul>
              </div>

              <p className="about-text">
                I'm always open to exciting opportunities and collaborations. Feel free to reach
                out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
