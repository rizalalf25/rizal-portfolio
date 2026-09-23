/**
 * Small abstract line drawings, one per project. Purely decorative —
 * they suggest the shape of each system, not real data.
 */
type GlyphProps = { slug: string; className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ProjectGlyph({ slug, className = "" }: GlyphProps) {
  const common = {
    viewBox: "0 0 240 140",
    className: `text-signal ${className}`,
    "aria-hidden": true,
  };

  switch (slug) {
    case "alpharadar":
      // Radar sweep over concentric rings with blips
      return (
        <svg {...common}>
          <defs>
            <radialGradient id="g-radar" cx="120" cy="70" r="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.28" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[18, 36, 54].map((r) => (
            <circle key={r} cx="120" cy="70" r={r} {...stroke} opacity={0.35} />
          ))}
          <path d="M66 70h108M120 16v108" {...stroke} opacity={0.2} />
          <path d="M120 70 L170 38 A60 60 0 0 1 180 70 Z" fill="url(#g-radar)" />
          <path d="M120 70 L170 38" {...stroke} />
          <circle cx="152" cy="52" r="2.6" fill="currentColor" />
          <circle cx="96" cy="94" r="2" fill="currentColor" opacity={0.6} />
          <circle cx="140" cy="100" r="1.6" fill="currentColor" opacity={0.45} />
        </svg>
      );
    case "kuanta":
      // Staircase (curriculum) resolving into a smooth curve
      return (
        <svg {...common}>
          <path d="M30 118h24v-18h24v-18h24v-18" {...stroke} opacity={0.45} />
          <path d="M102 64 C140 64 150 30 210 24" {...stroke} />
          <path d="M30 124h180" {...stroke} opacity={0.2} />
          {[54, 78, 102].map((x, i) => (
            <circle key={x} cx={x} cy={100 - i * 18} r="2.4" fill="currentColor" opacity={0.5 + i * 0.2} />
          ))}
          <text x="170" y="52" fill="currentColor" fontSize="15" fontStyle="italic" opacity={0.7} fontFamily="serif">
            σ
          </text>
        </svg>
      );
    case "idx-agentic-research":
      // Source docs → agent node → structured note
      return (
        <svg {...common}>
          {[36, 62, 88].map((y) => (
            <rect key={y} x="28" y={y} width="34" height="18" rx="3" {...stroke} opacity={0.5} />
          ))}
          <path d="M62 45 C90 45 96 70 112 70 M62 71 H112 M62 97 C90 97 96 70 112 70" {...stroke} opacity={0.45} />
          <circle cx="124" cy="70" r="12" {...stroke} />
          <circle cx="124" cy="70" r="3" fill="currentColor" />
          <path d="M136 70 H164" {...stroke} strokeDasharray="3 4" />
          <rect x="166" y="44" width="46" height="52" rx="4" {...stroke} />
          <path d="M175 58h28M175 68h22M175 78h26" {...stroke} opacity={0.5} />
        </svg>
      );
    case "bmri-csa-lab":
      // Bars with a ratio line
      return (
        <svg {...common}>
          <path d="M30 120h180" {...stroke} opacity={0.25} />
          {[
            [44, 62],
            [74, 54],
            [104, 72],
            [134, 66],
            [164, 84],
            [194, 78],
          ].map(([x, h]) => (
            <rect key={x} x={x - 8} y={120 - h} width="16" height={h} rx="2" fill="currentColor" opacity={0.14} />
          ))}
          <path d="M44 62 L74 70 L104 48 L134 54 L164 34 L194 40" {...stroke} />
          {[44, 74, 104, 134, 164, 194].map((x, i) => (
            <circle key={x} cx={x} cy={[62, 70, 48, 54, 34, 40][i]} r="2.2" fill="currentColor" />
          ))}
        </svg>
      );
    default:
      // Automation flow: trigger → steps → done
      return (
        <svg {...common}>
          <circle cx="40" cy="70" r="10" {...stroke} />
          <path d="M50 70h26" {...stroke} />
          <rect x="76" y="56" width="36" height="28" rx="6" {...stroke} />
          <path d="M112 70h20" {...stroke} />
          <path d="M132 70 l12 -14 l12 14 l-12 14 z" {...stroke} />
          <path d="M156 70 C170 70 170 44 184 44 M156 70 C170 70 170 96 184 96" {...stroke} opacity={0.6} />
          <rect x="184" y="34" width="24" height="20" rx="4" {...stroke} opacity={0.6} />
          <rect x="184" y="86" width="24" height="20" rx="4" {...stroke} />
          <path d="M190 96 l4 4 l8 -8" {...stroke} />
        </svg>
      );
  }
}
