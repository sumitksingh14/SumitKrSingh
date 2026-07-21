import { Code2, Mail, MapPin, PhoneCall } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import { useTypedText } from '../hooks/useTypedText';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

const roles = [
  'Technical Program Manager',
  'Mobile Delivery Leader',
  'Solution Architect',
  'Engineering Leader',
];

const Hero = () => {
  const { displayText } = useTypedText(roles, {
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseTime: 2200,
  });

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        {/* Left: Content */}
        <div className="hero-content">
          <div className="hero-text-block fade-up">
            <h1 className="hero-heading">
              Hi, I'm Sumit <span className="animate-waving-hand">👋</span>
            </h1>
            <h2 className="hero-typed-role">
              <span className="typed-text">{displayText}</span>
              <span className="typed-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="hero-description">
              I&apos;m a results-driven Program Manager &amp; Mobile Technical
              Delivery Leader with over 16 years of experience in driving
              complex, multi-team programs and delivering scalable mobile
              solutions for global enterprises. I specialize in orchestrating
              end-to-end delivery across iOS, Android, and React Native
              platforms, leveraging expertise in mobile architecture, agile
              execution, and cross-functional leadership.
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
            <div className="hero-info-row">
              <PhoneCall size={24} className="hero-info-icon" />
              <a href='tel:+919870778070'>+91 9870778070</a>
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
              <LinkedinIcon size={24} />
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
