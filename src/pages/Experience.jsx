import { Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "Technical Manager",
    company: "Xoriant Corporation Pvt Ltd",
    location: "Pune, India",
    date: "June 2024 – Present",
    points: [
      "Program Manager experienced in delivering complex, large-scale initiatives for a leading service provider through strong governance and cross-functional execution.",
      "Managed parallel projects including a UK fintech platform and a US retail mobile app as Technical Project Manager.",
      "Oversaw end-to-end technical and functional delivery across multiple high-visibility programs.",
      "Led distributed developer teams to consistently deliver high-quality, on-time releases.",
      "Maintained direct client communication, driving alignment, clarity, and timely decision-making.",
      "Optimized resource planning, resolved team conflicts, and ensured balanced workloads.",
      "Managed effort estimates, financial tracking, and project budgets to keep initiatives on scope and schedule."
    ]
  },
  {
    role: "Senior Manager",
    company: "Capgemini Technology Services India Ltd",
    location: "Pune, India",
    date: "Oct 2013 - June 2024",
    points: [
      "Led technical and managerial aspects of mobile application projects, ensuring successful delivery and client satisfaction.",
      "Fostered collaboration and teamwork, creating a positive work environment that enhanced productivity.",
      "Drove the development of innovative mobile solutions using iOS, Android, and React Native technologies.",
      "Implemented agile methodologies to manage multiple projects simultaneously, meeting deadlines and exceeding expectations.",
      "Communicated effectively with stakeholders, providing regular updates and addressing concerns promptly.",
      "Maintained clear documentation, ensuring knowledge transfer and continuity in project execution."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "iGate Global Solutions",
    location: "Navi Mumbai, India",
    date: "Jan 2011 – Sep 2013",
    points: [
      "Developed high-quality iOS applications for clients in the Banking and Insurance domains.",
      "Collaborated with cross-functional teams to translate client requirements into user-friendly mobile solutions.",
      "Conducted thorough testing and debugging, ensuring high performance and seamless user experiences.",
      "Managed project timelines using agile methodologies, consistently meeting deadlines and exceeding client expectations.",
      "Actively participated in code reviews, providing feedback to improve code quality and maintainability."
    ]
  },
  {
    role: "Programmer Analyst",
    company: "Mobicule Technology Pvt Ltd",
    location: "Mumbai, India",
    date: "June 2010 – Jan 2011",
    points: [
      "Developed and deployed user-friendly mobile applications for clients, exceeding expectations.",
      "Collaborated with cross-functional teams to ensure seamless integration and functionality of mobile solutions.",
      "Conducted testing and debugging to ensure application reliability and performance.",
      "Demonstrated strong problem-solving skills in troubleshooting and resolving technical issues."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience page-enter-active">
      <div className="section-header">
        <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">Over 16 years of experience driving excellence in technical delivery.</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              
              <div className="meta-info">
                <span className="meta-item">
                  <Calendar size={16} /> {exp.date}
                </span>
                <span className="meta-item">
                  <MapPin size={16} /> {exp.location}
                </span>
              </div>

              <ul className="points-list">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
