import { ExternalLink } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    title: 'OneHub Mobile App (Enterprise Digital Workspace)',
    image: '/images/projects/onehub.png',
    description:
      'Led the end-to-end delivery of a secure enterprise mobile platform for Catalent, integrating Salesforce and Azure AD. Orchestrated architecture, managed cross-functional teams, and ensured engineering excellence via CI/CD, automated testing, and strict security compliance.',
    tags: ['Solution Architecture', 'Mobile Enterprise', 'Azure AD', 'Salesforce', 'Technical Leadership'],
    link: null,
  },
  {
    title: 'Shoppertrack Retail App',
    image: '/images/projects/shoppertrack.png',
    description:
      'Managed technical and functional delivery of a US-based retail mobile app for Johnson Controls. Aligned business objectives with technology execution, optimizing resource utilization and managing cross-functional iOS, Android, and QA teams.',
    tags: ['Technical Project Management', 'iOS', 'Android', 'Stakeholder Management', 'QA'],
    link: null,
  },
  {
    title: 'Enterprise API Guardrails & Monetization',
    image: '/images/projects/api_guardrails.png',
    description:
      'Spearheaded the API Guardrails Program at NiCE Interactive Solutions, building the first API monetization model and automating governance. Reduced review cycles by 50% and improved developer experience through centralized documentation and analytics dashboards.',
    tags: ['API Governance', 'Monetization Strategy', 'Program Management', 'Security', 'Developer Experience'],
    link: null,
  },
  {
    title: 'Nomo Fintech Platform',
    image: '/images/projects/nomo_fintech.png',
    description:
      'Directed delivery of a UK-based Fintech mobile platform built on React Native and Node.js. Managed client relationships, financial budgeting, and technical process improvements that optimized resources and increased overall delivery efficiency.',
    tags: ['Fintech', 'React Native', 'Node.js', 'Delivery Management', 'Process Optimization'],
    link: null,
  },
  {
    title: 'Citibank Digital Mobile Framework',
    image: '/images/projects/citibank.png',
    description:
      'Architected and led the digital mobile transformation for Citibank across iOS, Android, React Native, and AngularJS. Oversaw solution design, technical delivery, and architectural reviews while coordinating multifaceted development activities.',
    tags: ['Mobile Architecture', 'Solution Design', 'Banking & Finance', 'React Native', 'Client Management'],
    link: null,
  },
  {
    title: 'The Cooperative Bank Mobile Transformation',
    image: '/images/projects/coop_bank.png',
    description:
      'Directed the digital migration from a legacy Kony implementation to a modern native Swift and Kotlin architecture. Established a Mobile Center of Excellence (CoE) and managed end-to-end technical delivery and solution design.',
    tags: ['Digital Transformation', 'Native iOS & Android', 'Swift & Kotlin', 'Mobile CoE', 'Banking Apps'],
    link: null,
  },
  {
    title: 'iCAT2 Timesheet & Expense App',
    description:
      'Developed an iOS mobile application for a leading US-based manufacturing and finance client, enabling field engineers to efficiently log time and expenses directly into enterprise systems.',
    tags: ['iOS Development', 'Enterprise Mobility', 'Field Service'],
    link: null,
  },
  {
    title: 'Chubb FNOL (First Notice of Loss)',
    description:
      'Engineered an iOS application for a US-based insurance firm, allowing users to immediately notify the insurer of losses or damage, available natively on the US App Store.',
    tags: ['iOS Development', 'Insurance Tech', 'Consumer App'],
    link: null,
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Work</span>
          <p className="section-subtitle center-text">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project, idx) => (
            <div key={idx} className={`project-card card ${idx % 2 !== 0 ? 'reversed' : ''}`}>
              <div className="project-image-col">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="project-image-text">{project.title}</span>
                  </div>
                )}
              </div>
              <div className="project-content-col">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link icon-btn"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
