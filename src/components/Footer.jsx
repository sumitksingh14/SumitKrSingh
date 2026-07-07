import { Link2, Code2, Mail, Heart } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => scrollTo('home')}>
            <span className="logo-text">SKS<span className="logo-dot">.</span></span>
          </div>
          <p className="footer-tagline">
            Technical Program Manager &amp; Mobile Delivery Leader
          </p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com/in/sumitsingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="LinkedIn"
            >
              <Link2 size={18} />
            </a>
            <a
              href="https://github.com/sumitksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href="mailto:sumit.kr.singh14@gmail.com"
              className="footer-social"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="footer-nav-link">
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="footer-contact-col">
          <h4 className="footer-col-title">Contact</h4>
          <a href="mailto:sumit.kr.singh14@gmail.com" className="footer-contact-item">
            sumit.kr.singh14@gmail.com
          </a>
          <a href="tel:+919870778070" className="footer-contact-item">
            +91 98707 78070
          </a>
          <p className="footer-contact-item no-link">Pune, India 411057</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Sumit Kumar Singh. All rights reserved.</p>
          <p className="footer-made-with">
            Made with <Heart size={13} className="heart-icon" /> in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
