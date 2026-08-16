import { getIcon } from '../../../utils/iconMap';
import { useStatsViewModel } from '../../viewmodels/useStatsViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './StatsBanner.css';

const StatsBanner = () => {
  const { stats, loading } = useStatsViewModel();

  if (loading) return null;

  return (
    <section className="stats-section">
      <div className="container">
        <ScrollReveal>
          <div className="stats-grid">
            {stats.map((stat, idx) => {
              const IconComponent = getIcon(stat.iconStr);
              return (
                <div key={idx} className="stat-item">
                  <div className="stat-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsBanner;
