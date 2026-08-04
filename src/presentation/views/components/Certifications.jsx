import * as Icons from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { useCertificationsViewModel } from '../../viewmodels/useCertificationsViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

const Certifications = () => {
  const { certifications, loading } = useCertificationsViewModel();

  if (loading) return null;

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle center-text">
            Professional certifications validating my expertise across programme management, agile delivery, and AI.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => {
            const IconComponent = Icons[cert.iconStr] || Icons.Award;
            const isVerified = !!cert.verifyUrl;

            return (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div className={`cert-card card ${isVerified ? 'cert-card--verified' : ''}`}>

                  {/* Top: icon + badge */}
                  <div className="cert-card-header">
                    <div className="cert-icon-wrap">
                      <IconComponent size={22} />
                    </div>
                    <div className="cert-header-right">
                      {isVerified && (
                        <span className="cert-verified-badge">
                          <Icons.BadgeCheck size={13} />
                          Verified
                        </span>
                      )}
                      {cert.year && (
                        <span className="cert-year">{cert.year}</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="cert-name">{cert.name}</h3>
                  {cert.fullName && cert.fullName !== cert.name && (
                    <p className="cert-fullname">{cert.fullName}</p>
                  )}

                  {/* Issuer */}
                  <p className="cert-issuer">
                    <Icons.Building2 size={13} />
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  {cert.description && (
                    <p className="cert-description">{cert.description}</p>
                  )}

                  {/* Verify link */}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-link"
                      aria-label={`Verify certificate: ${cert.name}`}
                    >
                      <ExternalLink size={14} />
                      Verify Certificate
                    </a>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
