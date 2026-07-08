import { Code2, Link2, Mail, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-text-block fade-up">
            <h1 className="hero-heading">
              Hi, I'm Sumit <span className="animate-waving-hand">👋</span>
            </h1>
            <h3 className="hero-subheading">
              Technical Program Manager | Mobile Delivery Leader (iOS, Android,
              React Native) | 16+ Years Orchestrating Enterprise Mobile
              Portfolios &amp; Cross-Functional Engineering Teams. Specialist in
              Fintech, Banking, and Insurance Domains | Agile &amp; Scalable
              Architectures.
            </h3>
            <p className="hero-description">
              I&apos;m a results-driven Program Manager &amp; Mobile Technical
              Delivery Leader with over 16 years of experience in driving
              complex, multi-team programs and delivering scalable mobile
              solutions for global enterprises. I specialize in orchestrating
              end-to-end delivery across iOS, Android, and React Native
              platforms, leveraging expertise in mobile architecture, agile
              execution, and cross-functional leadership. My proven track record
              includes managing large, high-impact programs, optimizing
              delivery processes, and aligning engineering outcomes with
              business goals. I excel at executing multiple concurrent
              projects with a strong focus on quality, performance, and
              operational efficiency.
            </p>
          </div>

          <div className="hero-info fade-up">
            <div className="hero-info-row">
              <MapPin size={24} className="hero-info-icon" />
              <p>Pune, India</p>
            </div>
            <div className="hero-info-row">
              <div className="availability-dot-wrap">
                <span className="availability-dot-ping" />
                <span className="availability-dot" />
              </div>
              <p>Actively exploring new opportunities...</p>
            </div>
          </div>

          <div className="hero-socials fade-up">
            <a
              href="https://linkedin.com/in/sumitsingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Link2 size={24} />
            </a>
            <a
              href="https://github.com/sumitksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Code2 size={24} />
            </a>
            <a
              href="mailto:sumit.kr.singh14@gmail.com"
              className="icon-btn"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-visual fade-up">
          <div className="hero-photo-wrap">
            <img
              src="/sumitsingh.png"
              alt="Headshot of Sumit Kumar Singh"
              className="hero-photo"
            />
            <div className="hero-photo-offset" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
