import { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    title: 'API Guardrails Program',
    client: 'NiCE Interactive Solutions',
    tags: ['Management', 'API'],
    category: 'management',
    year: '2024',
    description:
      'Led enterprise API Guardrails Program — standardised API design, security, lifecycle & built the organisation\'s first API monetisation model cutting review cycles by 30–50%.',
  },
  {
    title: 'US Retail Mobile App',
    client: 'Johnson Controls',
    tags: ['Mobile', 'iOS', 'Android'],
    category: 'mobile',
    year: '2023',
    description:
      'End-to-end technical & functional delivery of a US-based retail mobile application, coordinating iOS, Android & QA resources with active stakeholder management.',
  },
  {
    title: 'Nomo Fintech Platform',
    client: 'Nomo Bank (UK)',
    tags: ['Fintech', 'React Native'],
    category: 'fintech',
    year: '2022',
    description:
      'Technical Project Manager for a UK-based Fintech mobile platform built on React Native & Node.js, managing the full delivery lifecycle and client relationship.',
  },
  {
    title: 'Digital Mobile Programme',
    client: 'CitiBank, NA',
    tags: ['Fintech', 'iOS', 'Android'],
    category: 'fintech',
    year: '2020',
    description:
      'Technical Architect leading a digital mobile project across iOS, Android, React Native & AngularJS — responsible for solution design and technical delivery oversight.',
  },
  {
    title: 'Native App Transformation',
    client: 'The Cooperative Bank, UK',
    tags: ['Mobile', 'iOS', 'Android'],
    category: 'mobile',
    year: '2019',
    description:
      'Led digital transformation mapping Kony implementation to Native (Swift & Kotlin), establishing Mobile Centre of Excellence and driving end-to-end technical delivery.',
  },
  {
    title: 'Multi-Platform Programme',
    client: 'Capgemini / Various',
    tags: ['Management', 'Mobile'],
    category: 'management',
    year: '2013–2024',
    description:
      'Senior Manager delivering multiple concurrent mobile programmes with Agile methodologies, fostering high-performing teams and consistently exceeding client expectations.',
  },
];

const tabs = ['All', 'Mobile', 'Fintech', 'Management'];

const Portfolio = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) =>
          p.category === active.toLowerCase()
        );

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle center-text">
            A selection of high-impact programmes and successful digital transformations
            spanning mobile, fintech and enterprise management.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${active === tab ? 'active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="portfolio-grid">
          {filtered.map((project, idx) => (
            <div key={idx} className="project-card card">
              <div className="project-card-top">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">{tag}</span>
                  ))}
                </div>
                <ExternalLink size={18} className="project-ext" />
              </div>

              <h3 className="project-title">{project.title}</h3>

              <div className="project-meta">
                <span className="project-client">
                  <MapPin size={13} /> {project.client}
                </span>
                <span className="project-year">
                  <Calendar size={13} /> {project.year}
                </span>
              </div>

              <p className="project-desc">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
