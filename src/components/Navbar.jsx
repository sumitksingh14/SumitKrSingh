import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollTo('home')}>
          <span className="logo-text">SKS<span className="logo-dot">.</span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('home')}>Home</button>
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('about')}>About me</button>
          <button onClick={() => scrollTo('portfolio')}>Portfolio</button>
          <button onClick={() => scrollTo('contact')}>Contact me</button>
        </div>

        <div className="navbar-actions">
          <a href="mailto:sumit.kr.singh14@gmail.com" className="btn btn-primary hire-btn">
            Hire Me
          </a>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
