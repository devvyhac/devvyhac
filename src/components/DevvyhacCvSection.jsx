import React from 'react';
import { fullCvData } from '../data/devvyhacPortfolioData';
import { Download, ExternalLink, Briefcase, GraduationCap, Code, Cpu, Terminal, Printer } from 'lucide-react';
import './DevvyhacCvSection.css';

export default function DevvyhacCvSection({ onOpenCvModal }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="ds-section ds-cv-section" id="cv">
      <div className="ds-container">
        {/* Section Header with Actions */}
        <div className="ds-cv-header-row">
          <div className="ds-cv-header-text">
            <span className="ds-cv-tag">CURRICULUM VITAE</span>
            <h2 className="ds-cv-title">Experience &amp; Engineering Track</h2>
            <p className="ds-cv-subtitle">
              Professional history building reliable backend architectures, socket daemons, and scalable APIs
            </p>
          </div>

          <div className="ds-cv-actions">
            <button
              type="button"
              disabled
              className="ds-cv-btn ds-cv-btn-primary ds-cv-btn-disabled"
              title="Print / PDF (Disabled)"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>
            <a
              href="https://github.com/devvyhac"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-cv-btn ds-cv-btn-secondary"
            >
              <Terminal size={16} />
              <span>GitHub Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 2-Column CV Layout */}
        <div className="ds-cv-body-grid">
          {/* Left Column: Work Experience Timeline */}
          <div className="ds-cv-left-col">
            <div className="cv-col-heading">
              <Briefcase size={20} className="cv-heading-icon" />
              <h3>Work Experience</h3>
            </div>

            <div className="cv-timeline">
              {fullCvData.experience.map((exp, idx) => (
                <div key={idx} className="cv-timeline-item">
                  <div className="cv-timeline-dot" />
                  <div className="cv-timeline-content">
                    <div className="cv-item-header">
                      <div>
                        <h4 className="cv-role">{exp.role}</h4>
                        <span className="cv-company">{exp.company}</span>
                      </div>
                      <span className="cv-period">{exp.period}</span>
                    </div>

                    <ul className="cv-points-list">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Matrix & Education */}
          <div className="ds-cv-right-col">
            {/* Technical Skills Matrix */}
            <div className="cv-skills-panel">
              <div className="cv-col-heading">
                <Code size={20} className="cv-heading-icon" />
                <h3>Technical Competencies</h3>
              </div>

              <div className="cv-skill-group">
                <span className="cv-skill-group-title">Languages</span>
                <div className="cv-skill-tags">
                  {fullCvData.skills.languages.map((s) => (
                    <span key={s} className="tech-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <span className="cv-skill-group-title">Backend &amp; Runtimes</span>
                <div className="cv-skill-tags">
                  {fullCvData.skills.backendFrameworks.map((s) => (
                    <span key={s} className="tech-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <span className="cv-skill-group-title">Systems, Sockets &amp; Networking</span>
                <div className="cv-skill-tags">
                  {fullCvData.skills.systemsNetworking.map((s) => (
                    <span key={s} className="tech-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cv-skill-group">
                <span className="cv-skill-group-title">Databases &amp; Infrastructure</span>
                <div className="cv-skill-tags">
                  {fullCvData.skills.databasesTools.map((s) => (
                    <span key={s} className="tech-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="cv-education-panel">
              <div className="cv-col-heading">
                <GraduationCap size={20} className="cv-heading-icon" />
                <h3>Education</h3>
              </div>

              {fullCvData.education.map((edu, idx) => (
                <div key={idx} className="cv-edu-item">
                  <h4 className="cv-edu-degree">{edu.degree}</h4>
                  <span className="cv-edu-school">{edu.school}</span>
                  <p className="cv-edu-notes">{edu.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
