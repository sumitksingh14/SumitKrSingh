import { User, Quote } from 'lucide-react';
import { useTestimonialsViewModel } from '../../viewmodels/useTestimonialsViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const Testimonials = () => {
  const { testimonials, activeIndex, loading, goToIndex } = useTestimonialsViewModel();

  if (loading) {
    return <div className="loading-state">Loading...</div>;
  }

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle center-text">
            Nice things people have said about me:
          </p>
        </div>

        <ScrollReveal>
          <div className="testimonials-carousel">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card card">
                  <Quote size={32} className="testimonial-quote-icon" />
                  <p className="testimonial-quote">
                    {t.quote}
                  </p>
                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      <User size={24} />
                    </div>
                    <div className="testimonial-author">
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-company">{t.company}</p>
                      {t.relationship && (
                        <span className="testimonial-relationship">{t.relationship}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="testimonials-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testimonial-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
