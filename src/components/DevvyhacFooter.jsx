import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { TwitterIcon, GithubIcon } from './TechIcons';
import { AiBrand } from './AiLogo';
import './DevvyhacFooter.css';

export default function DevvyhacFooter({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="ds-footer">
      <div className="ds-container ds-footer-container">
        <div className="ds-footer-left">
          <div className="footer-brand-wrap" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <AiBrand iconSize={28} />
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Abdulqudus Ismail (Devvyhac). Built with Go &amp; .NET engineering precision.
          </p>
        </div>

        <div className="ds-footer-links">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('services');
            }}
          >
            Specialties
          </a>
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('works');
            }}
          >
            Works
          </a>
          <a
            href="#cv"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('cv');
            }}
          >
            CV / Experience
          </a>
          <a
            href="#notes"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('notes');
            }}
          >
            Notes
          </a>
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contacts');
            }}
          >
            Contacts
          </a>
        </div>

        <div className="ds-footer-right">
          <div className="footer-socials">
            <a
              href="https://x.com/0xlism"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Twitter / X (@0xlism)"
              title="Twitter / X"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href="https://github.com/devvyhac"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub (devvyhac)"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="mailto:realdevvyhac@gmail.com"
              className="footer-social-btn"
              aria-label="Email (realdevvyhac@gmail.com)"
              title="Gmail"
            >
              <Mail size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
