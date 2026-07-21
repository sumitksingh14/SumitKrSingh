import { Copyright, Code2, Mail } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import LiveDateTime from './LiveDateTime';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <span className="footer-logo">&lt;SKS /&gt;</span>
          <div className="footer-social-icons">
            <a
              href="https://github.com/sumitksingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sumitsingh14"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:sumit.kr.singh14@gmail.com"
              className="icon-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-text">
            <Copyright size={14} className="footer-icon" />
            {new Date().getFullYear()} | Designed and coded with ❤️ by Sumit Kumar Singh
          </p>
          <LiveDateTime />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
