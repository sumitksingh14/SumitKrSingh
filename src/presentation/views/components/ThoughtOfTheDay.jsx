import { ChevronLeft, ChevronRight, Sparkles, Pen } from 'lucide-react';
import { useThoughtsViewModel } from '../../viewmodels/useThoughtsViewModel';
import './ThoughtOfTheDay.css';

const ThoughtOfTheDay = () => {
  const {
    allThoughts,
    activeIndex,
    loading,
    goToNext,
    goToPrev,
    goToIndex,
  } = useThoughtsViewModel();

  if (loading) {
    return (
      <section id="thoughts" className="section thoughts-section">
        <div className="container">
          <div className="thoughts-header">
            <span className="section-label">Thought of the Day</span>
            <p className="section-subtitle center-text">
              On engineering, leadership &amp; delivery
            </p>
          </div>
          <div className="thought-skeleton">
            <div className="thought-skeleton-card">
              <div className="skeleton-line w-full" />
              <div className="skeleton-line w-3-4" />
              <div className="skeleton-line w-1-2" />
              <div className="skeleton-line w-1-4" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="thoughts" className="section thoughts-section">
      <div className="container">
        <div className="thoughts-header">
          <span className="section-label">Thought of the Day</span>
          <p className="section-subtitle center-text">
            On engineering, leadership &amp; delivery
          </p>
        </div>

        <div className="thoughts-carousel">
          {allThoughts.map((thought, idx) => (
            <div
              key={idx}
              className={`thought-slide ${idx === activeIndex ? 'active' : ''}`}
            >
              <div className={`thought-card${thought.personal ? ' thought-card--personal' : ''}`}>
                <span className="thought-quote-mark">&ldquo;</span>
                {idx === 0 && (
                  <div className="thought-featured-badge">
                    <Sparkles /> Today&rsquo;s Pick
                  </div>
                )}
                {thought.personal && idx !== 0 && (
                  <div className="thought-personal-badge">
                    <Pen /> My Perspective
                  </div>
                )}
                <p className="thought-quote-text">
                  {thought.quote}
                </p>
                <div className="thought-author-block">
                  <div className="thought-author-divider" />
                  <span className="thought-author-name">{thought.author}</span>
                  <span className="thought-author-role">{thought.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thoughts-nav">
          <button
            className="thoughts-nav-btn"
            onClick={goToPrev}
            aria-label="Previous thought"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="thoughts-dots">
            {allThoughts.map((_, idx) => (
              <button
                key={idx}
                className={`thoughts-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => goToIndex(idx)}
                aria-label={`Go to thought ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="thoughts-nav-btn"
            onClick={goToNext}
            aria-label="Next thought"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThoughtOfTheDay;
