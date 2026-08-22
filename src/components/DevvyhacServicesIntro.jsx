import React from 'react';
import {
  devvyhacPersonalInfo,
  devvyhacServices,
  clientLogos,
} from '../data/devvyhacPortfolioData';
import { Code2, Server, Database, Radio, Cpu, Layers } from 'lucide-react';
import './DevvyhacServicesIntro.css';

export default function DevvyhacServicesIntro({ onSelectService, onSelectProjects }) {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code2 size={22} className="service-card-icon" />;
      case 'server':
      case 'realtime':
        return <Server size={22} className="service-card-icon" />;
      case 'database':
      default:
        return <Database size={22} className="service-card-icon" />;
    }
  };

  return (
    <section className="ds-section ds-intro-section" id="services">
      <div className="ds-container">
        {/* Main 2-column Grid: Left 3 Cards, Right Intro Text */}
        <div className="ds-intro-grid">
          {/* Left Column: Stacked Service Cards */}
          <div className="ds-services-col">
            {devvyhacServices.map((service) => (
              <div
                key={service.id}
                className={`ds-service-card ${service.highlight ? 'card-highlight' : ''}`}
                onClick={() => onSelectProjects && onSelectProjects(service.id)}
              >
                <div className="service-card-header">
                  <h3 className={`service-card-title ${service.highlight ? 'title-mint' : ''}`}>
                    {service.title}
                  </h3>
                  <div className="service-icon-wrap">{renderIcon(service.icon)}</div>
                </div>

                <p className="service-card-desc">{service.description}</p>

                <div className="service-card-footer">
                  <span className="service-projects-count">
                    {service.projectsCount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Introduce Bio */}
          <div className="ds-introduce-col">
            <span className="ds-introduce-tag">
              {devvyhacPersonalInfo.introduceTag}
            </span>

            <h2 className="ds-introduce-title">
              Hello! I'm Abdulqudus
              <br />
              Ismail <span className="title-handle">(Devvyhac)</span>
            </h2>

            <p className="ds-introduce-philosophy">
              {devvyhacPersonalInfo.introducePhilosophy}
            </p>

            <p className="ds-introduce-desc">
              {devvyhacPersonalInfo.introduceDescription}
            </p>
          </div>
        </div>

        {/* Core Technologies & Ecosystem Logos Bar */}
        <div className="ds-logos-banner">
          <div className="ds-logos-grid">
            {clientLogos.map((logo) => (
              <div key={logo.id} className={`ds-client-logo-item logo-${logo.type}`}>
                {logo.id === 'dotnet' && (
                  <div className="logo-blb-box">
                    <span className="blb-badge">.NET</span>
                    <div className="blb-text">
                      <span>ASP.NET CORE</span>
                      <span>ENTERPRISE API</span>
                      <span>RUNTIME</span>
                    </div>
                  </div>
                )}

                {logo.id === 'golang' && (
                  <div className="logo-cw-box">
                    <span className="cw-symbol">Go</span>
                    <span className="cw-name">concurrency &amp; sockets</span>
                  </div>
                )}

                {logo.id === 'postgres' && (
                  <div className="logo-serenity-box">
                    <span className="serenity-crest">PG</span>
                    <span className="serenity-text">POSTGRESQL ACID</span>
                  </div>
                )}

                {logo.id === 'docker' && (
                  <div className="logo-artchive-box">
                    <span className="artchive-name">DOCKER</span>
                    <span className="artchive-sub">CONTAINERS &amp; CI/CD</span>
                  </div>
                )}

                {logo.id === 'react-vite' && (
                  <div className="logo-innovations-box">
                    <svg viewBox="0 0 40 40" width="24" height="24" className="innovations-icon">
                      <circle cx="20" cy="20" r="4" fill="currentColor" />
                      <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 20 20)" />
                      <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 20 20)" />
                    </svg>
                    <div className="innovations-text">
                      <span>REACT + VITE</span>
                      <span>FAST CLIENT UIs</span>
                    </div>
                  </div>
                )}

                {logo.id === 'typescript' && (
                  <div className="logo-neuton-box">
                    <span className="neuton-name">TYPESCRIPT</span>
                    <span className="neuton-sub">TYPE-SAFE CLIENTS</span>
                  </div>
                )}

                {logo.id === 'zuri-i4g' && (
                  <div className="logo-papillon-box">
                    <span className="papillon-name">Zuri x i4G</span>
                    <span className="papillon-sub">Backend Engineering</span>
                  </div>
                )}

                {logo.id === 'farm-apropos' && (
                  <div className="logo-habits-box">
                    <span className="habits-name">Farm Apropos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
