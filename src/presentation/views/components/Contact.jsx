import { Mail, Phone, Copy, Check, Code2, Link2 } from 'lucide-react';
import { useContactViewModel } from '../../viewmodels/useContactViewModel';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  const { emailCopied, phoneCopied, copyEmail, copyPhone } = useContactViewModel();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle center-text">
            What's next? Feel free to reach out to me if you are looking for a
            delivery leader, have a query, or simply want to connect.
          </p>
        </div>

        <ScrollReveal>
          <div className="contact-center">
            {/* Email */}
            <div className="contact-row">
              <Mail size={24} className="contact-row-icon" />
              <h3 className="contact-value">sumit.kr.singh14@gmail.com</h3>
              <button
                className="icon-btn copy-btn"
                onClick={copyEmail}
                aria-label="Copy email"
              >
                {emailCopied ? <Check size={24} /> : <Copy size={24} />}
              </button>
            </div>

            {/* Phone */}
            <div className="contact-row">
              <Phone size={24} className="contact-row-icon" />
              <h3 className="contact-value">+91 98707 78070</h3>
              <button
                className="icon-btn copy-btn"
                onClick={copyPhone}
                aria-label="Copy phone"
              >
                {phoneCopied ? <Check size={24} /> : <Copy size={24} />}
              </button>
            </div>

            {/* Social */}
            <div className="contact-social-block">
              <p className="contact-social-text">
                You may also find me on these platforms!
              </p>
              <div className="contact-social-icons">
                <a
                  href="https://github.com/sumitksingh14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub"
                >
                  <Code2 size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/sumitsingh14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                  <Link2 size={24} />
                </a>
                <a
                  href="mailto:sumit.kr.singh14@gmail.com"
                  className="icon-btn"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
