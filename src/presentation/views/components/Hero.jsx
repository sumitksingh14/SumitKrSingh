import { ArrowDown, Code2, Download, Mail, MapPin, PhoneCall } from 'lucide-react';
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

const domains = ['Fintech', 'Banking', 'Insurance', 'Retail', 'Enterprise'];

const Hero = () => {
  const { displayText } = useTypedText(roles, {
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseTime: 2200,
  });

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">

        {/* ── Left: Content ── */}
        <div className="hero-content">

          {/* Intro label */}
          <div className="hero-intro-label fade-up">
            <span className="hero-intro-dot" />
            Available for new opportunities
          </div>

          {/* Heading */}
          <div className="hero-text-block fade-up">
            <h1 className="hero-heading">
              Hi, I&apos;m{' '}
              <span className="hero-name-highlight">Sumit Kumar Singh</span>{' '}
              <span className="animate-waving-hand">👋</span>
            </h1>

            {/* Typed role */}
            <div className="hero-role-row">
              <span className="hero-role-prefix">I&apos;m a</span>
              <h2 className="hero-typed-role">
                <span className="typed-text">{displayText}</span>
                <span className="typed-cursor" aria-hidden="true">|</span>
              </h2>
            </div>

            <p className="hero-description">
              I am a <strong>Technical Program Manager</strong> and digital delivery leader
              with <strong>16+ years of experience</strong> leading complex mobile, fintech,
              banking, and platform-modernization programs. I bring together technical depth
              in <strong>iOS, Android, React Native, APIs, and scalable architecture</strong> with
              pragmatic program leadership across distributed engineering teams.
            </p>
            <p className="hero-description">
              I currently lead concurrent, high-visibility programs spanning a UK fintech
              platform and a US retail mobile application. My focus is building predictable
              delivery: clarifying priorities, managing risk and budgets, aligning
              stakeholders, and helping teams ship high-quality outcomes on time.
            </p>
            <p className="hero-description">
              Across engagements with <strong>Citi, The Co-operative Bank UK, Johnson Controls,
                NiCE Interactive Solutions, and Nomo Fintech</strong>, I have led digital
              transformation, mobile modernization, and API governance initiatives —
              including reducing API review cycles by 30–50%, establishing an API
              monetization model, and building delivery practices for teams of 10–40+ engineers.
            </p>
            <p className="hero-description hero-description--highlight">
              I am particularly interested in senior program management and consulting
              opportunities in <strong>fintech, digital lending, API platforms, and
                enterprise modernization</strong>.
            </p>
          </div>

          {/* Domain chips */}
          <div className="hero-domains fade-up">
            <span className="hero-domains-label">Industries:</span>
            {domains.map((d) => (
              <span key={d} className="hero-domain-chip">{d}</span>
            ))}
          </div>

          {/* Meta info */}
          <div className="hero-info fade-up">
            <div className="hero-info-row">
              <MapPin size={16} className="hero-info-icon" />
              <span>Pune, India</span>
            </div>
            <div className="hero-info-row">
              <PhoneCall size={16} className="hero-info-icon" />
              <a href="tel:+919870778070">+91 98707 78070</a>
            </div>
            <div className="hero-info-row">
              <div className="availability-dot-wrap">
                <span className="availability-dot-ping" />
                <span className="availability-dot" />
              </div>
              <span>Actively exploring senior leadership roles</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hero-ctas fade-up">
            <a href="#work" className="btn btn-primary hero-btn-primary">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline hero-btn-outline"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials fade-up">
            <a
              href="https://linkedin.com/in/sumitsingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="https://github.com/sumitksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Code2 size={22} />
            </a>
            <a
              href="mailto:sumit.kr.singh14@gmail.com"
              className="icon-btn"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="hero-visual fade-up" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="hero-photo-wrap">
            <img
              src="/sumitsingh.png"
              alt="Headshot of Sumit Kumar Singh"
              className="hero-photo"
              width="360"
              height="360"
              style={{ objectPosition: 'top center' }}
            />
            {/* Bottom badge: experience */}
            <div className="hero-photo-badge hero-badge-bottom">
              <span className="hero-badge-value">16+</span>
              <span className="hero-badge-label">Yrs Experience</span>
            </div>
            {/* Top badge: projects */}
            <div className="hero-photo-badge hero-badge-top">
              <span className="hero-badge-value">50+</span>
              <span className="hero-badge-label">Projects Delivered</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
