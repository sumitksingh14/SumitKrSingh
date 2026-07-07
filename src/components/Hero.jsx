import { Link2, Code2, Mail, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background decorative circles */}
      <div className="hero-bg-circle hero-bg-circle--1" />
      <div className="hero-bg-circle hero-bg-circle--2" />

      <div className="container hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <p className="hero-greeting fade-up">Hi I am</p>
          <h1 className="hero-name fade-up">Sumit Kumar Singh</h1>
          <h2 className="hero-title fade-up">
            Technical <span className="accent-text">Program Manager</span>
          </h2>

          <p className="hero-description fade-up">
            Results-driven Technical Program Manager &amp; Mobile Delivery Leader with
            16+ years delivering end-to-end iOS, Android &amp; React Native solutions
            for global enterprises in Fintech, Banking &amp; Insurance.
          </p>

          {/* Social Icons */}
          <div className="hero-socials fade-up">
            <a
              href="https://linkedin.com/in/sumitsingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Link2 size={20} />
            </a>
            <a
              href="https://github.com/sumitksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>
            <a
              href="mailto:sumit.kr.singh14@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* CTAs */}
          <div className="hero-actions fade-up">
            <a href="mailto:sumit.kr.singh14@gmail.com" className="btn btn-primary">
              Hire Me
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats fade-up">
            <div className="stat">
              <span className="stat-number">16+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">80+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-visual fade-up">
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring" />
            <div className="hero-photo-circle">
              <img src="/profile.jpg" alt="Sumit Kumar Singh" className="hero-photo" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={() => scrollToSection('services')} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
