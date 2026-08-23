import React, { useState, useEffect } from 'react';
import { Search, X, Menu, Mail } from 'lucide-react';
import { TwitterIcon, GithubIcon } from './TechIcons';
import { AiBrand } from './AiLogo';
import './DevvyhacNavbar.css';

export default function DevvyhacNavbar({
  activeSection = 'services',
  onNavigate,
  onOpenSearch,
  onToggleDrawer,
  drawerOpen,
  onOpenContact,
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'specialties', label: 'Specialties', isSpecial: true },
    { id: 'works', label: 'Works', isSpecial: false },
    { id: 'cv', label: 'CV / Experience', isSpecial: false },
    { id: 'notes', label: 'Notes', isSpecial: false },
    { id: 'contacts', label: 'Contacts', isSpecial: false },
  ];

  return (
    <header className={`ds-navbar ${scrolled ? 'ds-navbar-scrolled' : ''}`}>
      <div className="ds-navbar-container">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('hero');
          }}
          className="ds-brand-link"
          aria-label="Abdulqudus Ismail Home"
        >
          <AiBrand iconSize={32} />
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="ds-nav-links">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.id ||
              (link.id === 'specialties' && activeSection === 'hero');
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className={`ds-nav-link ${isActive ? 'active' : ''}`}
              >
                {isActive ? (
                  <span className="active-brackets">
                    &lt; <span className="active-label">{link.label}</span> &gt;
                  </span>
                ) : (
                  link.label
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Section: Desktop Social Icons & Search | Mobile Hamburger */}
        <div className="ds-nav-right">
          {/* Desktop Socials & Search Group */}
          <div className="ds-nav-socials-desktop">
            <a
              href="https://github.com/devvyhac"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-nav-icon-link"
              aria-label="GitHub Profile"
              title="GitHub (devvyhac)"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://x.com/0xlism"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-nav-icon-link"
              aria-label="Twitter / X Profile"
              title="Twitter / X (@0xlism)"
            >
              <TwitterIcon size={18} />
            </a>

            <a
              href="mailto:realdevvyhac@gmail.com"
              className="ds-nav-icon-link ds-gmail-link"
              aria-label="Send Email"
              title="Email (realdevvyhac@gmail.com)"
            >
              <Mail size={18} />
            </a>

            {/* Search circle button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="circle-btn search-btn"
              aria-label="Search"
              title="Search (Ctrl + K)"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Hamburger / Menu button (Only visible on mobile screens <= 900px) */}
          <button
            type="button"
            onClick={onToggleDrawer}
            className="circle-btn ds-mobile-menu-btn"
            aria-label="Toggle navigation menu"
            title={drawerOpen ? 'Close Menu' : 'Open Menu'}
          >
            {drawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
