import './Experience.css';

const experiences = [
  {
    company: 'Xoriant Corporation Pvt. Ltd.',
    title: 'Technical Manager',
    period: 'Jun 2024 – Present',
    points: [
      'Program Manager delivering complex, large-scale initiatives for leading service providers through strong governance and cross-functional execution.',
      'Managed parallel projects including a UK fintech platform and a US retail mobile app as Technical Project Manager.',
      'Led distributed developer teams to consistently deliver high-quality, on-time releases.',
      'Maintained direct client communication, driving alignment, clarity, and timely decision-making.',
      'Optimized resource planning, resolved team conflicts, and ensured balanced workloads.',
    ],
  },
  {
    company: 'Capgemini Technology Services India Ltd.',
    title: 'Senior Manager',
    period: 'Oct 2013 – Jun 2024',
    points: [
      'Led technical and managerial aspects of mobile application projects for Banking, Insurance, and E-commerce domains.',
      'Managed the full delivery lifecycle for a UK-based Fintech platform on React Native & Node.js.',
      'Led digital transformation for The Cooperative Bank, mapping Kony to Native (Swift & Kotlin) implementation.',
      'Established Mobile Centre of Excellence and drove end-to-end technical delivery.',
      'Delivered multiple concurrent mobile programmes with Agile methodologies, exceeding client expectations.',
    ],
  },
  {
    company: 'IGATE Global Solutions',
    title: 'Senior Software Engineer',
    period: 'Jan 2011 – Sep 2013',
    points: [
      'Developed high-quality iOS applications for clients in the Banking and Insurance domains.',
      'Collaborated with cross-functional teams to translate client requirements into user-friendly mobile solutions.',
      'Conducted thorough testing and debugging, ensuring high performance and seamless user experiences.',
      'Managed project timelines using Agile methodologies, consistently meeting deadlines.',
      'Actively participated in code reviews, providing feedback to improve code quality and maintainability.',
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
