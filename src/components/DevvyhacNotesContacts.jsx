import React, { useState } from 'react';
import { devvyhacNotes, devvyhacPersonalInfo } from '../data/devvyhacPortfolioData';
import { ArrowUpRight, Send, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import './DevvyhacNotesContacts.css';

export default function DevvyhacNotesContacts({ onOpenContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="ds-notes-contacts-wrapper">
      {/* 1. NOTES SECTION */}
      <section className="ds-section ds-notes-section" id="notes">
        <div className="ds-container">
          {/* Header */}
          <div className="ds-notes-header">
            <h2 className="ds-notes-title">Notes &amp; Insights</h2>
            <p className="ds-notes-subtitle">
              Thoughts on backend architecture, systems engineering &amp; socket networks
            </p>
          </div>

          {/* Notes Grid */}
          <div className="ds-notes-grid">
            {devvyhacNotes.map((note) => (
              <article key={note.id} className="ds-note-card">
                <div className="note-top-meta">
                  <span className="note-category">{note.category}</span>
                  <div className="note-time-info">
                    <span>{note.date}</span>
                    <span className="meta-dot">·</span>
                    <span>{note.readTime}</span>
                  </div>
                </div>

                <h3 className="note-card-title">{note.title}</h3>
                <p className="note-card-snippet">{note.snippet}</p>

                <div className="note-card-footer">
                  <span className="note-read-link">
                    Read Article <ArrowUpRight size={15} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CONTACTS SECTION */}
      <section className="ds-section ds-contacts-section" id="contacts">
        <div className="ds-container">
          <div className="ds-contacts-grid">
            {/* Left Contact Info */}
            <div className="ds-contacts-info-col">
              <span className="ds-contacts-tag">GET IN TOUCH</span>
              <h2 className="ds-contacts-title">
                Let's discuss
                <br />
                your next project.
              </h2>
              <p className="ds-contacts-desc">
                Have an exciting project, backend architecture challenge, or collaboration in mind? Feel free to reach out directly or send a message.
              </p>

              <div className="ds-contacts-details">
                <div className="contact-detail-item">
                  <Mail size={18} className="contact-icon" />
                  <a href={`mailto:${devvyhacPersonalInfo.socials.email}`} className="contact-value">
                    {devvyhacPersonalInfo.socials.email}
                  </a>
                </div>
                <div className="contact-detail-item">
                  <MapPin size={18} className="contact-icon" />
                  <span className="contact-value">Ilorin, Nigeria · Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="ds-contacts-form-col">
              <div className="ds-form-card">
                {submitted ? (
                  <div className="ds-form-success">
                    <CheckCircle2 size={48} className="success-icon" />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="ds-contact-form">
                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="alex@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject / Project Type</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Front-End Development / Design System"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Tell me about your project goals and timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="ds-submit-btn">
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
