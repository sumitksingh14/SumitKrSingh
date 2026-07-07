import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link2, Code2 } from 'lucide-react';
import './Contact.css';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'sumit.kr.singh14@gmail.com',
    href: 'mailto:sumit.kr.singh14@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 98707 78070',
    href: 'tel:+919870778070',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Pune, India 411057',
    href: null,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:sumit.kr.singh14@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle center-text">
            Open to exciting opportunities, collaborations or just a good
            conversation. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Sidebar */}
          <div className="contact-info">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <p className="contact-info-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="contact-info-value link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contact-info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-socials">
              <a
                href="https://linkedin.com/in/sumitsingh14"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <Link2 size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/sumitksingh14"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="GitHub"
              >
                <Code2 size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form card" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                ✅ Email client opened! Message ready to send.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
