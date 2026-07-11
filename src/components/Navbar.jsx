import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { exportPortfolioResumePdf } from '../utils/exportResumePdf';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExportPdf = async () => {
    setIsExporting(true);
    try {
      await exportPortfolioResumePdf({ selector: '#pdf-content' });
    } catch (error) {
      console.error('Resume export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <span className="logo-text">&lt;SKS /&gt;</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button className="nav-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('skills')}>Skill</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('testimonials')}>Testimonials</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <div className="nav-divider" />
          <button
            type="button"
            className="btn btn-outline export-pdf-btn"
            onClick={handleExportPdf}
            disabled={isExporting}
            aria-busy={isExporting}
          >
            {isExporting ? 'Exporting…' : 'Export Profile PDF'}
          </button>
          <a href="/resume.pdf" download className="btn btn-primary download-cv-btn">
            <Download size={16} />
            Download CV
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
