import React from 'react';
import { devvyhacProjects } from '../data/devvyhacPortfolioData';
import { ExternalLink, Globe, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './TechIcons';
import './DevvyhacWorks.css';

export default function DevvyhacWorks({ onOpenAllProjects, onOpenContact, onSelectProject }) {
  const relayledger = devvyhacProjects.find((p) => p.id === 'relayledger');
  const goTcp = devvyhacProjects.find((p) => p.id === 'go-tcp-chat');
  const empire = devvyhacProjects.find((p) => p.id === 'tradefy-empire');
  const syncvault = devvyhacProjects.find((p) => p.id === 'syncvault');

  return (
    <section className="ds-section ds-works-section" id="works">
      <div className="ds-container">
        {/* Section Header */}
        <div className="ds-works-header">
          <h2 className="ds-works-title">Latest Works</h2>
          <p className="ds-works-subtitle">
            Reliable systems, concurrent socket networks &amp; production platforms
          </p>
        </div>

        {/* Staggered Masonry Layout (Left Column with Go TCP & SyncVault, Right Column with RelayLedger & Empire) */}
        <div className="ds-works-grid">
          {/* Left Column: Go TCP/TLS Chat (Offset) & SyncVault */}
          <div className="ds-works-left-col">
            {/* 1. Go TCP/TLS Chat */}
            {goTcp && (
              <div
                className="ds-work-card ds-work-lewis ds-work-gotcp"
                onClick={() => onSelectProject && onSelectProject(goTcp)}
              >
                <div className="ds-work-card-header">
                  <div className="ds-work-title-wrap">
                    <h3 className="ds-work-name">{goTcp.title}</h3>
                    {goTcp.github && (
                      <a
                        href={goTcp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ds-card-direct-link"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub Repository"
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <div className="ds-work-tags">
                    {goTcp.tags.map((tag) => (
                      <span key={tag} className="ds-work-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ds-work-media-container">
                  <img
                    src={goTcp.image}
                    alt={goTcp.title}
                    className="ds-work-img"
                  />
                  <div className="ds-work-hover-overlay">
                    <div className="ds-hover-actions">
                      <span className="ds-work-view-btn">View Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. SyncVault */}
            {syncvault && (
              <div
                className="ds-work-card ds-work-syncvault"
                onClick={() => onSelectProject && onSelectProject(syncvault)}
              >
                <div className="ds-work-card-header">
                  <div className="ds-work-title-wrap">
                    <h3 className="ds-work-name">{syncvault.title}</h3>
                    {syncvault.github && (
                      <a
                        href={syncvault.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ds-card-direct-link"
                        onClick={(e) => e.stopPropagation()}
                        title="GitHub Repository"
                      >
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>

                  <div className="ds-work-tags">
                    {syncvault.tags.map((tag) => (
                      <span key={tag} className="ds-work-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ds-work-media-container">
                  <img
                    src={syncvault.image}
                    alt={syncvault.title}
                    className="ds-work-img"
                  />
                  <div className="ds-work-hover-overlay">
                    <div className="ds-hover-actions">
                      <span className="ds-work-view-btn">View Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Left All Projects Link & NDA Note */}
            <div className="ds-works-bottom-info">
              <button
                type="button"
                onClick={onOpenAllProjects}
                className="ds-all-projects-link"
              >
                ALL PROJECTS
              </button>

              <div className="ds-nda-notice">
                <span>* Some systems &amp; repositories are private or proprietary,</span>
                <span>
                  to request codebase review or demo walkthrough,{' '}
                  <a
                    href="#contacts"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenContact();
                    }}
                    className="ds-contact-inline-link"
                  >
                    contact me
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: RelayLedger (Top) and Tradefy / Empire (Bottom) */}
          <div className="ds-works-right-col">
            {/* 1. RelayLedger */}
            {relayledger && (
              <div
                className="ds-work-card ds-work-finaco ds-work-relayledger"
                onClick={() => onSelectProject && onSelectProject(relayledger)}
              >
                <div className="ds-work-card-header">
                  <div className="ds-work-title-wrap">
                    <h3 className="ds-work-name name-mint">{relayledger.title}</h3>
                    {relayledger.liveDemo && (
                      <a
                        href={relayledger.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ds-card-direct-link link-mint"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Hosted Service (relayledger.vercel.app)"
                      >
                        <Globe size={14} />
                        <span>Live Service</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  <div className="ds-work-tags">
                    {relayledger.tags.map((tag) => (
                      <span key={tag} className="ds-work-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ds-work-media-container">
                  <img
                    src={relayledger.image}
                    alt={relayledger.title}
                    className="ds-work-img"
                  />
                  <div className="ds-work-hover-overlay">
                    <div className="ds-hover-actions">
                      {relayledger.liveDemo && (
                        <a
                          href={relayledger.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ds-work-live-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe size={15} />
                          <span>Open Live App</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      <span className="ds-work-view-btn">Case Study</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Tradefy / Empire */}
            {empire && (
              <div
                className="ds-work-card ds-work-focus ds-work-empire"
                onClick={() => onSelectProject && onSelectProject(empire)}
              >
                <div className="ds-work-card-header">
                  <div className="ds-work-title-wrap">
                    <h3 className="ds-work-name">{empire.title}</h3>
                    {empire.liveDemo && (
                      <a
                        href={empire.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ds-card-direct-link link-mint"
                        onClick={(e) => e.stopPropagation()}
                        title="Live Hosted E-Commerce Platform (tradefy.netlify.app)"
                      >
                        <Globe size={14} />
                        <span>Live Store</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  <div className="ds-work-tags">
                    {empire.tags.map((tag) => (
                      <span key={tag} className="ds-work-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ds-work-media-container">
                  <img
                    src={empire.image}
                    alt={empire.title}
                    className="ds-work-img"
                  />
                  <div className="ds-work-hover-overlay">
                    <div className="ds-hover-actions">
                      {empire.liveDemo && (
                        <a
                          href={empire.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ds-work-live-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe size={15} />
                          <span>Open Live Store</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                      <span className="ds-work-view-btn">Case Study</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
