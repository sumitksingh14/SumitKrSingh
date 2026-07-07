import { User } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Senior Director, Engineering',
    company: 'Global Fintech Company',
    quote:
      'Sumit consistently delivers complex mobile programmes on time and within budget. His ability to bridge technical and business stakeholders is exceptional. He transformed our mobile delivery processes.',
  },
  {
    name: 'VP of Product',
    company: 'UK Banking Client',
    quote:
      'Working with Sumit was a game-changer for our digital transformation. His deep understanding of mobile architecture combined with strong programme governance made him an invaluable partner.',
  },
  {
    name: 'CTO',
    company: 'Retail Technology Platform',
    quote:
      'Sumit brought structure and clarity to our multi-platform mobile programme. His leadership style inspires teams to deliver their best work while maintaining high quality standards.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Testimonials</span>
          <p className="section-subtitle center-text">
            Nice things people have said about me:
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card card">
              <div className="testimonial-avatar">
                <User size={32} />
              </div>
              <p className="testimonial-quote">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="testimonial-author">
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-company">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
