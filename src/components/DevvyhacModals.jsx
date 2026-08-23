import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  ArrowRight,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  Layers,
  Sparkles,
  Globe,
  Terminal,
} from 'lucide-react';
import { TwitterIcon, GithubIcon } from './TechIcons';
import { AiBrand } from './AiLogo';
import {
  devvyhacProjects,
  devvyhacServices,
  devvyhacNotes,
  devvyhacAwards,
  devvyhacPersonalInfo,
} from '../data/devvyhacPortfolioData';
import './DevvyhacModals.css';

export default function DevvyhacModals({
  activeSection = 'services',
  searchOpen,
  onCloseSearch,
  drawerOpen,
  onCloseDrawer,
  contactOpen,
  onCloseContact,
  selectedProject,
  onCloseProject,
  allProjectsOpen,
  onCloseAllProjects,
  onNavigate,
  onSelectProject,
}) {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  const drawerNavLinks = [
    { id: 'specialties', label: 'Specialties' },
    { id: 'works', label: 'Works & Systems' },
    { id: 'cv', label: 'CV / Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'awards', label: 'Milestones' },
    { id: 'notes', label: 'Notes' },
    { id: 'contacts', label: 'Contacts' },
  ];

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Global ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) onCloseSearch();
        if (drawerOpen) onCloseDrawer();
        if (contactOpen) onCloseContact();
        if (selectedProject) onCloseProject();
        if (allProjectsOpen) onCloseAllProjects();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    searchOpen,
    drawerOpen,
    contactOpen,
    selectedProject,
    allProjectsOpen,
    onCloseSearch,
    onCloseDrawer,
    onCloseContact,
    onCloseProject,
    onCloseAllProjects,
  ]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.email || !contactForm.message) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ name: '', email: '', message: '' });
      onCloseContact();
    }, 2500);
  };

  // Filtered search results
  const searchResults = searchQuery.trim()
    ? [
        ...devvyhacProjects
          .filter(
            (p) =>
              p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
              p.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((p) => ({ ...p, resultType: 'Project', target: 'works' })),
        ...devvyhacServices
          .filter(
            (s) =>
              s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((s) => ({ ...s, resultType: 'Specialty', target: 'specialties' })),
        ...devvyhacNotes
          .filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((n) => ({ ...n, resultType: 'Note', target: 'notes' })),
      ]
    : [];

  return (
    <>
      {/* 1. SPOTLIGHT SEARCH MODAL */}
      {searchOpen && (
        <div className="ds-modal-backdrop" onClick={onCloseSearch}>
          <div className="ds-search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-search-header">
              <Search size={20} className="search-input-icon" />
              <input
                type="text"
                autoFocus
                placeholder="Search C#, Go, PostgreSQL, Webhooks, Docker, repos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ds-search-input"
              />
              <button
                type="button"
                onClick={onCloseSearch}
                className="ds-modal-close-btn"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            <div className="ds-search-body">
              {searchQuery.trim() === '' ? (
                <div className="ds-search-quick-links">
                  <span className="search-quick-title">Quick Navigation</span>
                  <div className="quick-links-row">
                    {['specialties', 'works', 'cv', 'testimonials', 'awards', 'notes', 'contacts'].map(
                      (sec) => (
                        <button
                          key={sec}
                          type="button"
                          className="quick-link-chip"
                          onClick={() => {
                            onNavigate(sec);
                            onCloseSearch();
                          }}
                        >
                          {sec === 'specialties' ? 'Specialties' : sec.charAt(0).toUpperCase() + sec.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="ds-search-results-list">
                  {searchResults.map((res, i) => (
                    <div
                      key={i}
                      className="ds-search-result-item"
                      onClick={() => {
                        if (res.resultType === 'Project') {
                          onSelectProject(res);
                        } else {
                          onNavigate(res.target);
                        }
                        onCloseSearch();
                      }}
                    >
                      <div className="result-type-badge">{res.resultType}</div>
                      <div className="result-title">{res.title}</div>
                      <ArrowRight size={14} className="result-arrow" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="ds-search-empty">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. NAVIGATION DRAWER OVERLAY */}
      <div
        className={`ds-modal-backdrop ds-drawer-backdrop ${drawerOpen ? 'ds-drawer-open' : ''}`}
        onClick={onCloseDrawer}
        aria-hidden={!drawerOpen}
      >
        <div className="ds-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="ds-drawer-header">
            <div className="drawer-brand-wrap" onClick={onCloseDrawer}>
              <AiBrand iconSize={26} />
            </div>
            <button
              type="button"
              onClick={onCloseDrawer}
              className="circle-btn"
              aria-label="Close drawer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="ds-drawer-body">
            <div className="drawer-status-pill">
              <span className="status-dot" />
              <span>Available for Backend Roles &amp; Contracts</span>
            </div>

            <nav className="drawer-nav-list">
              {drawerNavLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`drawer-nav-item ${isActive ? 'active-drawer-link' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                      onCloseDrawer();
                    }}
                  >
                    {isActive ? (
                      <span className="drawer-brackets">
                        &lt; <span className="drawer-active-text">{item.label}</span> &gt;
                      </span>
                    ) : (
                      item.label
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="drawer-bio-box">
              <p className="drawer-bio-quote">
                &ldquo;Got an idea? Let’s make it real. I engineer reliable backend systems, APIs, and real-time socket infrastructure in Go and C#/.NET.&rdquo;
              </p>
            </div>

            <div className="drawer-socials-section">
              <span className="drawer-section-title">CONNECT WITH ABDULQUDUS</span>
              <div className="drawer-socials-grid">
                <a
                  href="https://github.com/devvyhac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-social-card"
                >
                  <div className="drawer-social-icon-box">
                    <GithubIcon size={18} />
                  </div>
                  <div className="drawer-social-text">
                    <span className="social-name">GitHub</span>
                    <span className="social-handle">@devvyhac</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a
                  href="https://x.com/0xlism"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-social-card"
                >
                  <div className="drawer-social-icon-box">
                    <TwitterIcon size={18} />
                  </div>
                  <div className="drawer-social-text">
                    <span className="social-name">Twitter / X</span>
                    <span className="social-handle">@0xlism</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>

                <a
                  href="mailto:realdevvyhac@gmail.com"
                  className="drawer-social-card"
                >
                  <div className="drawer-social-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="drawer-social-text">
                    <span className="social-name">Gmail</span>
                    <span className="social-handle">realdevvyhac@gmail.com</span>
                  </div>
                  <ExternalLink size={14} className="social-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTACT / LET'S CHAT MODAL */}
      {contactOpen && (
        <div className="ds-modal-backdrop" onClick={onCloseContact}>
          <div className="ds-contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-modal-header">
              <div>
                <span className="modal-subtag">LET'S CHAT</span>
                <h3 className="modal-title">Get in Touch</h3>
              </div>
              <button
                type="button"
                onClick={onCloseContact}
                className="circle-btn"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {contactSuccess ? (
              <div className="modal-success-box">
                <CheckCircle2 size={48} className="modal-success-icon" />
                <h4>Message Received!</h4>
                <p>Thanks for reaching out. Abdulqudus will get back to you promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="modal-form">
                <div className="modal-form-group">
                  <label htmlFor="modal-name">Name</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-email">Email</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-message">Project or Inquiry Details</label>
                  <textarea
                    id="modal-message"
                    rows={4}
                    required
                    placeholder="Describe your backend architecture, contract, or full-time opportunity..."
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="ds-modal-submit-btn">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 4. ALL PROJECTS ARCHIVE MODAL */}
      {allProjectsOpen && (
        <div className="ds-modal-backdrop" onClick={onCloseAllProjects}>
          <div className="ds-archive-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-modal-header">
              <div>
                <span className="modal-subtag">ALL PROJECTS</span>
                <h3 className="modal-title">All Projects &amp; Systems</h3>
              </div>
              <button
                type="button"
                onClick={onCloseAllProjects}
                className="circle-btn"
                aria-label="Close archive modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="archive-square-grid">
              {devvyhacProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="archive-square-card"
                  onClick={() => {
                    onSelectProject(proj);
                  }}
                >
                  {/* Top Thumbnail Section (Dedicated Image & Links Area) */}
                  <div className="archive-card-thumb-wrap">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="archive-square-img"
                    />
                    <div className="archive-card-thumb-overlay" />

                    <span className="archive-square-category">{proj.category}</span>

                    <div className="archive-square-links">
                      {proj.liveDemo && (
                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive-card-icon-link"
                          title="Open Live Website / Platform"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe size={15} />
                        </a>
                      )}
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive-card-icon-link"
                          title="View GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom Info Section (Dedicated Project Name & View Action) */}
                  <div className="archive-card-bottom-info">
                    <h4 className="archive-square-title">{proj.title}</h4>
                    <div className="archive-square-footer">
                      <span className="archive-square-view">
                        <span>View Project</span>
                        <ArrowRight size={14} className="archive-square-arrow" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. PROJECT DETAIL / CASE STUDY MODAL */}
      {selectedProject && (
        <div className="ds-modal-backdrop ds-project-backdrop" onClick={onCloseProject}>
          <div className="ds-project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-modal-header">
              <div>
                <span className="modal-subtag">{selectedProject.category}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={onCloseProject}
                className="circle-btn"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="project-modal-scrollable-content">
              <div className="project-modal-media">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-img"
                />
              </div>

              <div className="project-modal-body">
                <div className="project-modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="project-modal-desc">{selectedProject.description}</p>

                {/* Action links */}
                <div className="project-modal-links-row">
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-modal-action-btn btn-primary"
                    >
                      <Globe size={16} />
                      <span>Live Platform Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-modal-action-btn btn-secondary"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Repository</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <div className="project-modal-actions">
                  <button
                    type="button"
                    onClick={() => {
                      onCloseProject();
                      if (allProjectsOpen) onCloseAllProjects();
                      onNavigate('contacts');
                    }}
                    className="ds-modal-submit-btn"
                  >
                    <span>Inquire about this architecture</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
