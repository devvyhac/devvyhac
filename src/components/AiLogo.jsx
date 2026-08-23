import React from 'react';

/**
 * AiLogoIcon - Custom high-precision vector SVG of Abdulqudus Ismail's "Ai" monogram logo
 */
export function AiLogoIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`ai-logo-icon ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-label="Abdulqudus Ismail Logo"
    >
      <defs>
        <linearGradient id="aiMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#55e6a5" />
          <stop offset="100%" stopColor="#3cd692" />
        </linearGradient>
      </defs>

      {/* --- LETTER 'A' STROKES & GEOMETRY --- */}
      {/* Outer Left Leg & Apex */}
      <path
        d="M 14 94 L 49 17 L 55 17 L 86 94 L 71 94 L 62 70 L 35 70 L 26 94 Z"
        stroke="#55e6a5"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Inner Cutout Stroke */}
      <path
        d="M 40 58 L 52 30 L 64 58 Z"
        stroke="#55e6a5"
        strokeWidth="3.5"
        strokeLinejoin="round"
        opacity="0.35"
      />

      {/* --- CIRCUIT NETWORK & NODES INSIDE 'A' --- */}
      {/* Crossbar to Upper Apex Node */}
      <line x1="43" y1="62" x2="48" y2="38" stroke="#55e6a5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="38" r="4.2" fill="#55e6a5" />

      {/* Right Branch Node Line */}
      <line x1="48" y1="38" x2="63" y2="52" stroke="#55e6a5" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="63" cy="52" r="3.8" fill="#55e6a5" />

      {/* Lower Branch Line */}
      <line x1="63" y1="52" x2="68" y2="72" stroke="#55e6a5" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="68" cy="72" r="3.5" fill="#55e6a5" />

      {/* --- FACETED MESH POLYGONS (Lower Right of 'A') --- */}
      <polygon points="63,52 76,68 68,72" fill="#55e6a5" opacity="0.45" />
      <polygon points="68,72 76,68 83,92 70,92" fill="#55e6a5" opacity="0.8" />
      <polygon points="43,62 63,52 68,72" fill="#55e6a5" opacity="0.55" />
      <polygon points="43,62 68,72 58,92 42,92" fill="#55e6a5" opacity="0.35" />
      <polygon points="58,92 68,72 72,92" fill="#55e6a5" opacity="0.65" />

      {/* --- LETTER 'i' --- */}
      {/* 'i' Dot (Angled Parallelogram/Rhombus) */}
      <polygon
        points="96,26 110,17 110,25 96,34"
        fill="url(#aiMintGrad)"
      />

      {/* 'i' Vertical Stem */}
      <path
        d="M 96 42 L 110 42 L 110 94 L 96 94 Z"
        fill="#55e6a5"
      />

      {/* 'i' Internal Circuit Accent */}
      <line x1="96" y1="68" x2="103" y2="56" stroke="#121316" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="103" cy="56" r="3" fill="#121316" />
      <polygon points="96,74 110,84 110,94 96,94" fill="#3cd692" opacity="0.9" />
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
