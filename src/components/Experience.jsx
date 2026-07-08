import './Experience.css';

const experiences = [
  {
    company: 'Xoriant Corporation Pvt. Ltd.',
    title: 'Technical Manager',
    period: 'Jun 2024 – Present',
    points: [
      'Leading complex, large-scale delivery initiatives for global clients with strong governance and cross-functional execution.',
      'Managed parallel programs spanning fintech and retail mobile platforms as a technical project manager.',
      'Led distributed development teams to deliver high-quality releases on time and within scope.',
      'Maintained direct client engagement and drove timely decisions across stakeholders.',
      'Optimized resource planning and ensured balanced workloads while tracking delivery budgets.',
    ],
  },
  {
    company: 'Capgemini Technology Services India Ltd.',
    title: 'Senior Manager',
    period: 'Oct 2013 – Jun 2024',
    points: [
      'Led technical and delivery management for mobile applications across Banking, Insurance, and Enterprise domains.',
      'Delivered a UK fintech platform on React Native and Node.js with a strong focus on quality and execution.',
      'Drove the digital transformation of The Co-operative Bank UK by modernizing Kony to native iOS and Android implementation.',
      'Established and scaled the Mobile Centre of Excellence to strengthen delivery practices and technical standards.',
      'Managed multiple concurrent programmes using Agile delivery frameworks while exceeding client expectations.',
    ],
  },
  {
    company: 'IGATE Global Solutions',
    title: 'Senior Software Engineer',
    period: 'Jan 2011 – Sep 2013',
    points: [
      'Developed and delivered high-quality mobile applications for Banking and Insurance clients.',
      'Worked closely with cross-functional teams to translate business requirements into intuitive user experiences.',
      'Performed rigorous testing and debugging to ensure reliability, performance, and smooth deployments.',
      'Contributed to code reviews and quality improvements to raise maintainability and delivery consistency.',
      'Supported Agile delivery with strong ownership of sprint commitments and timely issue resolution.',
    ],
  },
  {
    company: 'Mobicule Technology Pvt. Ltd.',
    title: 'Programmer Analyst',
    period: 'Jun 2010 – Jan 2011',
    points: [
      'Developed and deployed mobile applications for clients with focus on usability and business value.',
      'Collaborated with cross-functional teams to ensure smooth integration and application functionality.',
      'Conducted testing and debugging to improve reliability, performance, and release quality.',
      'Applied strong problem-solving skills to troubleshoot technical issues and support delivery goals.',
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
