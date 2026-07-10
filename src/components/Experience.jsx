import './Experience.css';

const experiences = [
  {
    company: 'Xoriant Corporation Pvt. Ltd',
    logo: '/xoriant_logo.jpg',
    title: 'Technical Manager -Xoriant Corporation Pvt. Ltd',
    period: 'Jun 2024 – Present',
    points: [
      'Program Manager / Technical Project Manager with a track record of delivering large‑scale, complex digital initiatives for global service providers through governance frameworks, agile execution, and cross‑functional leadership.',
      'Directed parallel programs including a UK fintech platform and a US retail mobile app, ensuring end‑to‑end technical and functional delivery across high‑visibility engagements.',
      'Led distributed developer teams across geographies, driving on‑time, high‑quality releases that consistently met client and business objectives.',
      'Served as Mobile Technical Architect & Subject Matter Expert (SME), overseeing native Android/iOS development, API/service integration, and mobile app publishing, delivering scalable, secure, and compliant solutions.',
      'Maintained direct client and stakeholder communication, ensuring alignment, clarity, and timely decision‑making with executive sponsors.',
      'Implemented resource optimization strategies, resolved conflicts, and balanced workloads to maximize team productivity and morale.',
      'Managed effort estimation, financial tracking, and project budgets, keeping initiatives within scope, schedule, and cost constraints.',
      'Championed delivery excellence and governance practices, enabling successful execution of multi‑team fintech and retail programs.',
    ],
  },
  {
    company: 'Capgemini Technology Services India Ltd',
    logo: '/capgemini_logo.jpg',
    title: 'Senior Manager - Capgemini Technology Services India Ltd',
    period: 'Oct 2013 – Jun 2024',
    points: [
      'Program Manager / Technical Project Manager leading the technical and managerial delivery of mobile application projects, ensuring successful outcomes and high client satisfaction.',
      'Fostered collaboration and teamwork across distributed teams, cultivating a positive work environment that enhanced productivity and accelerated delivery.',
      'Drove the design and development of innovative mobile solutions leveraging iOS, Android, and React Native technologies, ensuring scalability, performance, and security.',
      'Implemented agile methodologies to manage multiple concurrent projects, consistently meeting deadlines and exceeding stakeholder expectations.',
      'Communicated effectively with stakeholders and executive sponsors, providing regular updates, addressing concerns promptly, and driving alignment on priorities.',
      'Maintained comprehensive project documentation, enabling knowledge transfer, continuity, and governance compliance across engagements.',
      'Acted as Mobile Technical Architect & SME, guiding technical decisions, API/service integrations, and mobile app publishing to deliver robust, enterprise‑grade solutions.',
    ],
  },
  {
    company: 'IGATE Global Solutions.',
    logo: '/igate_logo.jpg',
    title: 'Senior Software Engineer - IGATE Global Solutions',
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
    company: 'Mobicule Technology Pvt. Ltd',
    logo: '/mobicule_logo.jpg',
    title: 'Programmer Analyst - Mobicule Technology Pvt. Ltd',
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
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-logo-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="exp-logo-placeholder" style={{ display: 'none' }}>
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
