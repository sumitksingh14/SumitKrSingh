import { FolderGit2, ArrowUpRight } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "Program Manager (CX), API Guardrails",
    client: "NiCE Interactive Solutions",
    points: [
      "Led enterprise API Guardrails Program, standardizing API design, security, and lifecycle processes.",
      "Implemented automated API governance and security checks, cutting review cycles by 30–50%.",
      "Built the organization's first API monetization model including pricing, metering, and billing workflows.",
      "Established unified API lifecycle workflows for publishing, versioning, and retirement.",
      "Delivered API usage analytics dashboards to support adoption and monetization decisions."
    ]
  },
  {
    title: "Technical Project Manager",
    client: "Johnson Controls",
    points: [
      "Led the end-to-end technical and functional delivery of a US-based retail mobile application.",
      "Maintained active communication with clients, managed cross-functional technical teams, and oversaw project financials.",
      "Acted as a liaison between business and technology stakeholders to align objectives.",
      "Directed the integration of innovative technological solutions, resulting in measurable gains in operational productivity.",
      "Oversaw and coordinated iOS, Android, and QA resources to ensure seamless workflows."
    ]
  },
  {
    title: "Technical Project Manager",
    client: "Nomo Fintech",
    points: [
      "Overseeing & Managing Technical & Functional delivery of UK-based Fintech mobile platform.",
      "Active client communication, Management of technical team, managing finances.",
      "Developed suggestions for technical process improvements to optimize resources.",
      "Managing React Native, Node.JS, Automation & Salesforce resources."
    ]
  },
  {
    title: "Technical Architect",
    client: "CITIBank, NA",
    points: [
      "Led a Digital Mobile Project across iOS, Android, React Native, and AngularJS platforms.",
      "Solution Design & Architecture Management.",
      "Technical Delivery Oversight and Project Technical Reviews.",
      "Requirement Analysis & Understanding."
    ]
  },
  {
    title: "Lead Mobile Applications",
    client: "The Cooperative Bank, UK",
    points: [
      "Lead a digital transformation journey mapping existing Kony implementation to all new Native Implementation.",
      "Utilized latest Swift and Kotlin-based development for iOS & Android applications.",
      "Technical Delivery Management and Solution design.",
      "Setting up Mobile Center of Excellence (CoE)."
    ]
  }
];

const Projects = () => {
  return (
    <div className="projects page-enter-active">
      <div className="section-header">
        <h2 className="section-title">Key <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">A showcase of high-impact programs and successful digital transformations.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card project-card">
            <div className="project-header">
              <div className="project-icon">
                <FolderGit2 size={24} />
              </div>
              <a href="#" className="project-link">
                <ArrowUpRight size={20} />
              </a>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-client">{project.client}</p>
            <ul className="project-points">
              {project.points.map((point, pIdx) => (
                <li key={pIdx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
