import { User, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Sumit Kumar Singh</h3>
          <p className="subtitle">Technical Program Manager</p>
        </div>
        
        <div className="footer-links">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
            <User size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:sumit.kr.singh14@gmail.com" className="social-link">
            <Mail size={20} />
            <span>sumit.kr.singh14@gmail.com</span>
          </a>
          <div className="social-link not-clickable">
            <Phone size={20} />
            <span>+91 9870778070</span>
          </div>
          <div className="social-link not-clickable">
            <MapPin size={20} />
            <span>Pune, India 411057</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sumit Kumar Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
