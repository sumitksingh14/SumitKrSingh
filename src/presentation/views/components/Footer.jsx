import { Copyright } from 'lucide-react';
import LiveDateTime from './LiveDateTime';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          <Copyright size={16} className="footer-icon" />
          {new Date().getFullYear()} | Designed and coded with ❤️ by Sumit Kumar Singh
        </p>
        <LiveDateTime />
      </div>
    </footer>
  );
};

export default Footer;
