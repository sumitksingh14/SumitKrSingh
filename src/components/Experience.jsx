import './Experience.css';

const experiences = [
  {
    company: 'NiCE Interactive Solutions',
    title: 'Technical Program Manager',
    period: 'Jan 2024 – Present',
    points: [
      'Leading the enterprise API Guardrails Program — standardising API design, security, lifecycle & governance.',
      'Built the organisation\'s first API monetisation model, cutting review cycles by 30–50%.',
      'Coordinating cross-functional teams across engineering, product, and business stakeholders.',
    ],
  },
  {
    company: 'Johnson Controls / Various Clients',
    title: 'Senior Technical Program Manager',
    period: 'Jan 2020 – Dec 2023',
    points: [
      'End-to-end technical & functional delivery of US-based retail mobile applications.',
      'Coordinated iOS, Android & QA resources with active stakeholder management.',
      'Managed the full delivery lifecycle for a UK-based Fintech platform on React Native & Node.js.',
    ],
  },
  {
    company: 'Capgemini',
    title: 'Senior Manager – Mobile Delivery',
    period: 'Jun 2013 – Dec 2019',
    points: [
      'Led digital transformation for The Cooperative Bank, mapping Kony to Native (Swift & Kotlin).',
      'Established Mobile Centre of Excellence and drove end-to-end technical delivery.',
      'Delivered multiple concurrent mobile programmes with Agile methodologies.',
      'Technical Architect for CitiBank\'s digital mobile project across iOS, Android & React Native.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Experience</span>
          <p className="section-subtitle center-text">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card card">
              <div className="exp-logo-col">
                <div className="exp-logo-placeholder">
                  {exp.company.charAt(0)}
                </div>
              </div>
              <div className="exp-content-col">
                <h3 className="exp-title">{exp.title}</h3>
                <ul className="exp-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-date-col">
                <p className="exp-period">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
