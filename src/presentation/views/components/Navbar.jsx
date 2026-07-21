import { useState, useEffect, useCallback } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AmbientMusic from './AmbientMusic';
import { exportPortfolioResumePdf } from '../../../utils/exportResumePdf';
import './Navbar.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  const updateActiveSection = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = updateActiveSection();
    return cleanup;
  }, [updateActiveSection]);

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
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <AmbientMusic />
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

