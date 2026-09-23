const systems = [
  { name: "alpharadar", desc: "multi-market · paper desk", state: "daily", tone: "text-up" },
  { name: "kuanta", desc: "math-zero → quant", state: "public", tone: "text-signal" },
  { name: "idx-agent", desc: "filing → note · human gate", state: "active", tone: "text-up" },
  { name: "csa-lab", desc: "BMRI · NII / NIM / NPL", state: "study", tone: "text-amber" },
];

// Decorative line only — not real market data.
const spark =
  "M0 92 L22 86 L40 90 L58 74 L76 78 L94 62 L112 68 L130 50 L148 56 L166 40 L184 46 L202 30 L220 36 L238 22 L256 28 L274 14 L296 18";

export function HeroPanel() {
  return (
    <div className="card relative overflow-hidden rounded-[22px] bg-ink-900/80 shadow-[0_40px_120px_-40px_rgba(52,216,238,0.25)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-dim">~/rizal — systems</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-up">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-up" aria-hidden />
          building
        </span>
      </div>

      <div className="relative px-5 pt-5">
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">Process &gt; prediction</p>
          <p className="font-mono text-[11px] text-dim">illustrative</p>
        </div>
        <svg viewBox="0 0 296 104" className="mt-3 h-28 w-full" aria-hidden preserveAspectRatio="none">
          <defs>
            <linearGradient id="hero-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--signal)" stopOpacity="0.28" />
              <stop offset="1" stopColor="var(--signal)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[26, 52, 78].map((y) => (
            <line key={y} x1="0" x2="296" y1={y} y2={y} stroke="var(--line)" strokeDasharray="2 4" />
          ))}
          <path d={`${spark} L296 104 L0 104 Z`} fill="url(#hero-fill)" />
          <path
            d={spark}
            className="draw"
            style={{ ["--len" as string]: 420 }}
            fill="none"
            stroke="var(--signal)"
            strokeWidth="1.6"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="296" cy="18" r="3" fill="var(--signal)" />
        </svg>
      </div>

      <div className="border-t border-line px-5 py-4 font-mono text-[12.5px]">
        <p className="text-dim">
          <span className="text-signal">$</span> status --systems
        </p>
        <ul className="mt-3 space-y-2.5">
          {systems.map((s) => (
            <li key={s.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
              <span className={`${s.tone}`} aria-hidden>●</span>
              <span className="min-w-0 truncate">
                <span className="text-fg">{s.name}</span>
                <span className="text-dim"> · {s.desc}</span>
              </span>
              <span className={`rounded border border-line px-1.5 py-px text-[10.5px] uppercase tracking-wider ${s.tone}`}>
                {s.state}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-dim">
          <span className="text-signal">$</span> <span className="caret text-fg">▍</span>
        </p>
      </div>
    </div>
  );
}
