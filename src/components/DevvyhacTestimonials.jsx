import React, { useState } from 'react';
import { devvyhacTestimonials, devvyhacAwards } from '../data/devvyhacPortfolioData';
import { Star, Trophy, ExternalLink } from 'lucide-react';
import './DevvyhacTestimonials.css';

export default function DevvyhacTestimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentTestimonial = devvyhacTestimonials[activeIdx];

  return (
    <div className="ds-testimonials-awards-wrapper">
      {/* 1. TESTIMONIALS SECTION */}
      <section className="ds-section ds-testimonials-section" id="testimonials">
        <div className="ds-container">
          {/* Header */}
          <div className="ds-testimonials-header">
            <h2 className="ds-testimonials-title">Testimonials</h2>
            <p className="ds-testimonials-subtitle">What's clients say about me</p>
          </div>

          {/* Main Testimonial Card */}
          <div className="ds-testimonial-card">
            {/* Top Stars & Quote Watermark */}
            <div className="ds-card-top-row">
              <div className="ds-rating-stars">
                <div className="stars-group">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="star-icon"
                      fill="#55e6a5"
                      color="#55e6a5"
                    />
                  ))}
                </div>
                <span className="rating-text">{currentTestimonial.rating}</span>
              </div>

              {/* Watermark Quote Icon */}
              <div className="ds-quote-watermark" aria-hidden="true">
                <svg viewBox="0 0 100 100" width="60" height="60" className="quote-svg">
                  <path
                    d="M30 65c-8.28 0-15-6.72-15-15 0-16.57 13.43-30 30-30v10c-11.05 0-20 8.95-20 20h15v25H15V65h15zm45 0c-8.28 0-15-6.72-15-15 0-16.57 13.43-30 30-30v10c-11.05 0-20 8.95-20 20h15v25H60V65h15z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="ds-testimonial-quote">
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
          </div>

          {/* Interactive Client Switcher Tabs Row */}
          <div className="ds-client-tabs-container">
            <div className="ds-client-tabs-row">
              {devvyhacTestimonials.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`ds-client-tab-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="client-avatar-wrapper">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="client-avatar-img"
                      />
                    </div>

                    <div className="client-meta-info">
                      <h4 className="client-name">{item.name}</h4>
                      <p className="client-role-company">
                        {item.role},{' '}
                        <span className="company-highlight">{item.company}</span>
                      </p>
                    </div>

                    {/* Active Underline Indicator */}
                    {isActive && <div className="client-tab-active-indicator" />}
                  </button>
                );
              })}
            </div>
            {/* Background base divider track */}
            <div className="ds-client-tabs-track" />
          </div>
        </div>
      </section>

      {/* 2. AWARDS SECTION (matching bottom of Image 3) */}
      <section className="ds-section ds-awards-section" id="awards">
        <div className="ds-container">
          {/* Header */}
          <div className="ds-awards-header">
            <h2 className="ds-awards-title">Awards</h2>
            <p className="ds-awards-subtitle">
              Awards make my projects become valuable
            </p>
          </div>

          {/* Awards Grid / Ledger */}
          <div className="ds-awards-list">
            {devvyhacAwards.map((award) => (
              <div key={award.id} className="ds-award-item">
                <div className="award-year-col">
                  <span className="award-year">{award.year}</span>
                </div>

                <div className="award-main-col">
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-project">{award.project}</p>
                </div>

                <div className="award-org-col">
                  <span className="award-org">{award.organization}</span>
                  <span className="award-category">{award.category}</span>
                </div>

                <div className="award-badge-col">
                  <Trophy size={18} className="award-trophy-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
