import {
  MonitorSmartphone,
  Settings2,
  Layout,
  Users,
  GitBranch,
  Shield,
} from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <MonitorSmartphone size={36} />,
    title: 'Mobile Delivery',
    description:
      'End-to-end delivery of iOS, Android & React Native applications, from architecture to production launch.',
  },
  {
    icon: <Settings2 size={36} />,
    title: 'Program Management',
    description:
      'Orchestrating complex, large-scale programs with strong governance, risk management & cross-functional execution.',
  },
  {
    icon: <Layout size={36} />,
    title: 'Technical Architecture',
    description:
      'Solution design, platform strategy & scalable architecture across MVC, MVP, MVVM & VIPER patterns.',
  },
  {
    icon: <Users size={36} />,
    title: 'Team Leadership',
    description:
      'Building & mentoring high-performing distributed teams aligned with business goals and delivery timelines.',
  },
  {
    icon: <GitBranch size={36} />,
    title: 'Agile Coaching',
    description:
      'Implementing Agile & Scrum methodologies to optimise workflows, sprint delivery & release cadence.',
  },
  {
    icon: <Shield size={36} />,
    title: 'API Governance',
    description:
      'Standardising API design, security, lifecycle, monetisation & automated governance across the enterprise.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">What I Offer</p>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle center-text">
            Bridging deep technical expertise with strategic leadership to deliver
            high-impact digital products and programmes.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
