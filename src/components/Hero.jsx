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
            <p className="hero-description">
              I'm a seasoned Technical Program Manager &amp; Mobile Delivery Leader with
              16+ years delivering end-to-end iOS, Android &amp; React Native solutions
              for global enterprises in Fintech, Banking &amp; Insurance. I bridge deep
              technical expertise with strategic leadership to consistently deliver
              high-impact digital products.
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
              <p>Available for new projects</p>
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
              src="/profile.jpg"
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
