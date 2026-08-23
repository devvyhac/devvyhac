import React from 'react';

/**
 * AiLogoIcon - Custom high-precision vector SVG of Abdulqudus Ismail's "Ai" monogram logo
 */
export function AiLogoIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ai-logo-icon ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-label="Abdulqudus Ismail Logo"
    >
      <defs>
        <linearGradient id="aiMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5bf0ab" />
          <stop offset="100%" stopColor="#3edb96" />
        </linearGradient>
      </defs>

      {/* =====================================================================
          1. LETTER 'A' (Left Glyphs & Traces)
          ===================================================================== */}
      {/* Top Apex Facet Shading */}
      <polygon points="39,15 49,15 45,28 35,26" fill="#55e6a5" opacity="0.5" />
      <polygon points="35,26 45,28 41,36 30,34" fill="#3edb96" opacity="0.35" />

      {/* Main 'A' Outer Frame */}
      <path
        d="M 8 92 L 39 15 L 49 15 L 70 92 L 56 92 L 50 71 L 24 71 L 18 92 Z"
        fill="#55e6a5"
      />

      {/* Inner Triangle Negative Space Cutout */}
      <polygon points="37,30 28,62 48,62" fill="#121316" />

      {/* Crossbar Definition Line */}
      <line x1="26" y1="62" x2="49" y2="62" stroke="#55e6a5" strokeWidth="2" />

      {/* Upper Circuit Trace & Node (Inner A) */}
      <line
        x1="32"
        y1="44"
        x2="52"
        y2="49"
        stroke="#55e6a5"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <circle cx="52" cy="49" r="4.2" fill="#55e6a5" />

      {/* Lower Circuit Trace & Node (Crossbar) */}
      <line
        x1="38"
        y1="64"
        x2="52"
        y2="64"
        stroke="#55e6a5"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <circle cx="52" cy="64" r="4.2" fill="#55e6a5" />

      {/* =====================================================================
          2. LETTER 'i' (Right Glyphs & Traces - Distinct Separation)
          ===================================================================== */}
      {/* 'i' Top Block/Dot (Angled Beveled Polygon) */}
      <polygon
        points="80,15 96,15 96,29 80,23"
        fill="#55e6a5"
      />
      <polygon
        points="80,15 88,15 80,23"
        fill="#3edb96"
        opacity="0.6"
      />

      {/* 'i' Vertical Circuit Trace with Top Node */}
      <line
        x1="85"
        y1="68"
        x2="85"
        y2="44"
        stroke="#55e6a5"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="85" cy="44" r="4.5" fill="#55e6a5" />

      {/* 'i' Right Vertical Border Line */}
      <line
        x1="96"
        y1="37"
        x2="96"
        y2="92"
        stroke="#55e6a5"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* 'i' Base Faceted Mesh */}
      <polygon points="80,92 85,68 96,78" fill="#55e6a5" opacity="0.45" />
      <polygon points="80,92 96,78 96,92" fill="#55e6a5" opacity="0.85" />
      <polygon points="80,92 85,68 85,92" fill="#3edb96" opacity="0.35" />
    </svg>
  );
}

/**
 * AiBrand - Full Wordmark + Monogram Logo
 */
export function AiBrand({ iconSize = 34, className = '', textClassName = '' }) {
  return (
    <div className={`ai-brand-wrap ${className}`}>
      <AiLogoIcon size={iconSize} />
      <span className={`ai-brand-text ${textClassName}`}>
        <strong className="ai-brand-first">Abdulqudus</strong>{' '}
        <span className="ai-brand-last">Ismail</span>
      </span>
    </div>
  );
}

export default AiBrand;
