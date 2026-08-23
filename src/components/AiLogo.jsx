import React from 'react';

/**
 * AiLogoIcon - Custom high-precision vector SVG of Abdulqudus Ismail's "Ai" monogram logo
 */
export function AiLogoIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 115"
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

      {/* --- 1. APEX FACETED SHADING (Top of 'A') --- */}
      <polygon points="56,16 68,16 52,38" fill="#55e6a5" opacity="0.4" />
      <polygon points="44,28 56,16 52,38" fill="#55e6a5" opacity="0.85" />

      {/* --- 2. MAIN 'A' CONTOUR & FRAME --- */}
      {/* Outer Left Leg & Apex */}
      <path
        d="M 12 94 L 56 16 L 68 16 L 76 28 L 62 48 L 50 28 L 26 94 L 12 94 Z"
        fill="#55e6a5"
      />

      {/* Crossbar of 'A' */}
      <path
        d="M 32 70 L 64 70 L 64 64 L 35 64 Z"
        fill="#55e6a5"
      />

      {/* --- 3. CIRCUIT TRACES & NODES ON 'A' --- */}
      {/* Upper Circuit Trace (from inner left slope down-right) */}
      <line
        x1="40"
        y1="46"
        x2="74"
        y2="54"
        stroke="#55e6a5"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Upper Node Dot */}
      <circle cx="74" cy="54" r="5.2" fill="#55e6a5" />

      {/* Lower Circuit Trace (from crossbar rightwards) */}
      <line
        x1="52"
        y1="67"
        x2="68"
        y2="67"
        stroke="#55e6a5"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Lower Node Dot */}
      <circle cx="68" cy="67" r="5.2" fill="#55e6a5" />

      {/* --- 4. LOWER RIGHT LEG OF 'A' & JUNCTION --- */}
      <path
        d="M 48 70 L 62 94 L 72 94 L 56 68 Z"
        fill="#55e6a5"
      />

      {/* --- 5. LETTER 'i' --- */}
      {/* 'i' Top Block/Dot (Angled Beveled Polygon) */}
      <polygon
        points="88,18 104,18 104,36 88,26"
        fill="#55e6a5"
      />
      <polygon
        points="88,18 98,18 88,26"
        fill="#3edb96"
        opacity="0.65"
      />

      {/* 'i' Vertical Circuit Stem with Top Node */}
      <line
        x1="90"
        y1="72"
        x2="90"
        y2="44"
        stroke="#55e6a5"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* 'i' Top Node Dot */}
      <circle cx="90" cy="44" r="5.2" fill="#55e6a5" />

      {/* 'i' Right Vertical Border Line */}
      <path
        d="M 99 40 L 104 40 L 104 94 L 99 94 Z"
        fill="#55e6a5"
      />

      {/* --- 6. FACETED MESH (Bottom Base between 'A' and 'i') --- */}
      <polygon points="62,94 76,74 84,94" fill="#55e6a5" opacity="0.45" />
      <polygon points="76,74 90,72 88,94" fill="#55e6a5" opacity="0.8" />
      <polygon points="88,94 90,72 104,82 104,94" fill="#55e6a5" opacity="0.9" />
      <polygon points="76,74 90,72 104,82" fill="#3edb96" opacity="0.55" />
      <polygon points="62,94 72,94 76,74" fill="#55e6a5" opacity="0.7" />
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
