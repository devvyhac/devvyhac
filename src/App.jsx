import React, { useState, useEffect, useRef } from 'react';
import DevvyhacNavbar from './components/DevvyhacNavbar';
import DevvyhacHero from './components/DevvyhacHero';
import DevvyhacServicesIntro from './components/DevvyhacServicesIntro';
import DevvyhacWorks from './components/DevvyhacWorks';
import DevvyhacCvSection from './components/DevvyhacCvSection';
import DevvyhacTestimonials from './components/DevvyhacTestimonials';
import DevvyhacNotesContacts from './components/DevvyhacNotesContacts';
import DevvyhacFooter from './components/DevvyhacFooter';
import DevvyhacModals from './components/DevvyhacModals';

export default function App() {
  const [activeSection, setActiveSection] = useState('services');
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjectsOpen, setAllProjectsOpen] = useState(false);

  const isNavigatingRef = useRef(false);
  const navigateTimeoutRef = useRef(null);

  // Smooth scroll handler that immediately locks & syncs active state
  const handleNavigate = (sectionId) => {
    const targetSection = sectionId === 'hero' ? 'services' : sectionId;
    setActiveSection(targetSection);

    // Lock ScrollSpy while smooth scrolling so intermediate sections don't override
    isNavigatingRef.current = true;
    if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
    navigateTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Precise Bounding-Box ScrollSpy tracking visible section in real-time
  useEffect(() => {
    const sectionIds = [
      'hero',
      'services',
      'works',
      'cv',
      'testimonials',
      'awards',
      'notes',
      'contacts',
    ];

    let ticking = false;

    const handleScroll = () => {
      // If user clicked a navigation link, ignore scroll events until smooth scroll settles
      if (isNavigatingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const focusPoint = window.innerHeight * 0.38;
          const isNearBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 70;

          if (isNearBottom) {
            setActiveSection('contacts');
            ticking = false;
            return;
          }

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              // A section is active if the focus line (38% from top) is between its top and bottom bounds
              if (rect.top <= focusPoint && rect.bottom > focusPoint) {
                if (id === 'hero') {
                  setActiveSection('services');
                } else {
                  setActiveSection(id);
                }
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigateTimeoutRef.current) clearTimeout(navigateTimeoutRef.current);
    };
  }, []);

  return (
    <div className="ds-portfolio-app">
      {/* Top Fixed Navbar */}
      <DevvyhacNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onToggleDrawer={() => setDrawerOpen((prev) => !prev)}
        drawerOpen={drawerOpen}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <DevvyhacHero onOpenContact={() => setContactOpen(true)} />

        {/* 2. Introduce & 3 Specialties Cards + Logos Banner */}
        <DevvyhacServicesIntro
          onSelectProjects={() => handleNavigate('works')}
        />

        {/* 3. Latest Works Staggered Showcase */}
        <DevvyhacWorks
          onOpenAllProjects={() => setAllProjectsOpen(true)}
          onOpenContact={() => setContactOpen(true)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 4. Interactive CV & Experience Ledger */}
        <DevvyhacCvSection onOpenCvModal={() => setContactOpen(true)} />

        {/* 5. Testimonials with 3-client switcher & Milestones Ledger */}
        <DevvyhacTestimonials />

        {/* 6. Notes & Contacts Section */}
        <DevvyhacNotesContacts onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* Footer */}
      <DevvyhacFooter onNavigate={handleNavigate} />

      {/* Modals & Overlays */}
      <DevvyhacModals
        activeSection={activeSection}
        searchOpen={searchOpen}
        onCloseSearch={() => setSearchOpen(false)}
        drawerOpen={drawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
        contactOpen={contactOpen}
        onCloseContact={() => setContactOpen(false)}
        selectedProject={selectedProject}
        onCloseProject={() => setSelectedProject(null)}
        allProjectsOpen={allProjectsOpen}
        onCloseAllProjects={() => setAllProjectsOpen(false)}
        onNavigate={handleNavigate}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </div>
  );
}
