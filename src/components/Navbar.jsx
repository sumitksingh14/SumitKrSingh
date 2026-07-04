import { NavLink } from 'react-router-dom';
import { Briefcase, Code, User, Grid } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <span className="gradient-text">Sumit K. Singh</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
            <User size={18} /> <span>Profile</span>
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Briefcase size={18} /> <span>Experience</span>
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Code size={18} /> <span>Skills</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            <Grid size={18} /> <span>Projects</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
