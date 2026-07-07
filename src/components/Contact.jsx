import { Mail, Phone, Copy, Check, Code2, Link2 } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const copyToClipboard = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Get in touch</span>
          <p className="section-subtitle center-text">
            What's next? Feel free to reach out to me if you are looking for a
            delivery leader, have a query, or simply want to connect.
          </p>
        </div>

        <div className="contact-center">
          {/* Email */}
          <div className="contact-row">
            <Mail size={24} className="contact-row-icon" />
            <h2 className="contact-value">sumit.kr.singh14@gmail.com</h2>
            <button
              className="icon-btn copy-btn"
              onClick={() => copyToClipboard('sumit.kr.singh14@gmail.com', setEmailCopied)}
              aria-label="Copy email"
            >
              {emailCopied ? <Check size={24} /> : <Copy size={24} />}
            </button>
          </div>

          {/* Phone */}
          <div className="contact-row">
            <Phone size={24} className="contact-row-icon" />
            <h2 className="contact-value">+91 98707 78070</h2>
            <button
              className="icon-btn copy-btn"
              onClick={() => copyToClipboard('+919870778070', setPhoneCopied)}
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
      </div>
    </section>
  );
};

export default Contact;
