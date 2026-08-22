import React from 'react';
import { devvyhacPersonalInfo } from '../data/devvyhacPortfolioData';
import './DevvyhacHero.css';

export default function DevvyhacHero({ onOpenContact }) {
  return (
    <section className="ds-hero-section" id="hero">
      <div className="ds-container ds-hero-container">
        {/* Left Column: Headline, Bio, CTA & Stats */}
        <div className="ds-hero-left">
          {/* Badge */}
          <div className="ds-hero-badge">
            <span>{devvyhacPersonalInfo.role}</span>
          </div>

          {/* Main Headline */}
          <h1 className="ds-hero-headline">
            Got an idea?
            <br />
            Let’s make it real.
          </h1>

          {/* Description */}
          <p className="ds-hero-desc">
            I design and build software that solves real problems,
            <br />
            and I love what I do.
          </p>

          {/* CTA Link */}
          <div className="ds-hero-cta">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="ds-hero-chat-link"
            >
              {devvyhacPersonalInfo.ctaText}
            </a>
          </div>

          {/* Bottom Stats Row */}
          <div className="ds-hero-stats-row">
            {devvyhacPersonalInfo.stats.map((stat, idx) => (
              <div key={idx} className="ds-stat-item">
                <span className="ds-stat-num">{stat.value}</span>
                <div className="ds-stat-text">
                  {stat.lines.map((line, lIdx) => (
                    <span key={lIdx} className="ds-stat-line">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual, Dark concentric backdrop, Hooded Figure & Floating 3D Badges */}
        <div className="ds-hero-right">
          <div className="ds-hero-visual-wrapper">
            {/* Background Dark Radial Backdrop */}
            <div className="ds-hero-circle-backdrop" />
            <div className="ds-hero-circle-backdrop-inner" />

            {/* Central Developer Portrait */}
            <div className="ds-hero-image-frame">
              <img
                src="/assets/abdulqudus-hero.jpg"
                alt="Abdulqudus Ismail (Devvyhac) - Backend Developer & Systems Engineer"
                className="ds-hero-portrait-img"
              />
              <div className="ds-hero-vignette" />
            </div>

            {/* Floating 3D Tech Badges */}
            {/* 1. Go / Golang Badge (Left / Lower chest) */}
            <div className="ds-floating-badge ds-badge-angular animate-float" title="Go / Golang">
              <div className="badge-disc">
                <svg viewBox="0 0 100 100" className="badge-svg">
                  <path
                    d="M15,50 C15,36 28,26 44,26 C54,26 62,31 67,38 L54,46 C51,41 47,38 43,38 C35,38 29,43 29,50 C29,57 35,62 43,62 C49,62 53,58 55,54 L42,54 L42,44 L69,44 C70,47 70,51 70,54 C70,64 61,74 44,74 C28,74 15,64 15,50 Z"
                    fill="#00ADD8"
                  />
                  <text
                    x="75"
                    y="72"
                    fill="#00ADD8"
                    fontFamily="'Space Mono', monospace"
                    fontWeight="bold"
                    fontSize="32"
                  >
                    o
                  </text>
                </svg>
              </div>
            </div>

            {/* 2. C# / .NET Badge (Top Right) */}
            <div className="ds-floating-badge ds-badge-python animate-float-delayed" title="C# / .NET 8">
              <div className="badge-disc small-disc">
                <svg viewBox="0 0 100 100" className="badge-svg">
                  <polygon
                    points="50,10 86,30 86,70 50,90 14,70 14,30"
                    fill="none"
                    stroke="#9B4F96"
                    strokeWidth="7"
                  />
                  <text
                    x="48"
                    y="63"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="'Space Mono', monospace"
                    fontWeight="bold"
                    fontSize="34"
                  >
                    C#
                  </text>
                </svg>
              </div>
            </div>

            {/* 3. Docker Badge (Bottom Right) */}
            <div className="ds-floating-badge ds-badge-js animate-float-reverse" title="Docker Container Infrastructure">
              <div className="badge-disc large-disc">
                <svg viewBox="0 0 100 100" className="badge-svg">
                  {/* Docker Container Grid */}
                  <rect x="22" y="38" width="10" height="10" rx="1.5" fill="#2496ED" />
                  <rect x="36" y="38" width="10" height="10" rx="1.5" fill="#2496ED" />
                  <rect x="50" y="38" width="10" height="10" rx="1.5" fill="#2496ED" />
                  <rect x="36" y="25" width="10" height="10" rx="1.5" fill="#2496ED" />
                  <rect x="50" y="25" width="10" height="10" rx="1.5" fill="#2496ED" />
                  <rect x="50" y="12" width="10" height="10" rx="1.5" fill="#2496ED" />
                  {/* Docker Whale Body */}
                  <path
                    d="M10,54 C16,54 20,58 26,58 C32,58 36,52 46,52 C56,52 64,56 74,56 C80,56 86,52 92,48 C88,64 74,74 52,74 C30,74 16,66 10,54 Z"
                    fill="#2496ED"
                  />
                </svg>
              </div>
            </div>

            {/* Neon Accent Dot */}
            <div className="ds-neon-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
