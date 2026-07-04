import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home page-enter-active">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-header">
            <img src="/profile.jpg" alt="Sumit Kumar Singh" className="profile-image" />
            <div className="badge">16+ Years Experience</div>
          </div>
          <h1 className="hero-title">
            Driving scalable <span className="gradient-text">mobile solutions</span> & complex programs.
          </h1>
          <p className="hero-description">
            Results-driven Program Manager & Mobile Technical Delivery Leader expert in orchestrating end-to-end delivery across iOS, Android, and React Native platforms. Proven ability to align engineering outcomes with business objectives for global enterprises.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Key Projects <ArrowRight size={18} />
            </Link>
            <Link to="/experience" className="btn btn-secondary">
              Professional Journey
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-card stat-card">
            <h3 className="gradient-text">16+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="glass-card stat-card">
            <h3 className="gradient-text">5+</h3>
            <p>Global Enterprises</p>
          </div>
          <div className="glass-card stat-card">
            <h3 className="gradient-text">3</h3>
            <p>Core Platforms (iOS, Android, React Native)</p>
          </div>
          <div className="glass-card stat-card highlight">
            <h3>Fintech, Banking, Insurance</h3>
            <p>Domain Expertise</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
