"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { site } from "@/lib/skills";

// Drop the photo at public/rizal.jpg (portrait, ~4:5). Until then a monogram renders.
const PHOTO_SRC = "/rizal.jpg";
const MAX_TILT = 14; // degrees

const systems = [
  { name: "alpharadar", state: "daily", tone: "text-up" },
  { name: "kuanta", state: "public", tone: "text-signal" },
  { name: "idx-agent", state: "active", tone: "text-up" },
];

export function Portrait3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [photoOk, setPhotoOk] = useState(true);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = stageRef.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(px - 0.5) * 2 * MAX_TILT}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 2 * MAX_TILT}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
    el.dataset.active = "on";
  }

  function onPointerLeave() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.active;
  }

  return (
    <div
      ref={stageRef}
      className="portrait-stage relative mx-auto w-full max-w-[420px]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="portrait-float">
        <div className="portrait-card relative aspect-[4/5]">
          {/* Back layer: frame + hairline grid */}
          <div
            aria-hidden
            className="card absolute inset-0 overflow-hidden rounded-[28px] bg-ink-900/80 shadow-[0_40px_120px_-40px_rgba(52,216,238,0.35)]"
          >
            <div className="portrait-grid absolute inset-0" />
          </div>

          {/* Orbit ring floating behind the photo */}
          <div aria-hidden className="portrait-layer pointer-events-none absolute inset-0" style={{ ["--z" as string]: "-30px" }}>
            <div className="portrait-ring absolute left-1/2 top-[44%] aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </div>

          {/* Photo */}
          <div className="portrait-layer absolute inset-[7%] bottom-[18%]" style={{ ["--z" as string]: "50px" }}>
            <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-line-strong bg-ink-850">
              {photoOk ? (
                <Image
                  src={PHOTO_SRC}
                  alt={`Portrait of ${site.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 80vw"
                  className="object-cover object-top"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_35%,var(--signal-soft),transparent_70%)]">
                  <span className="font-display text-[7rem] leading-none text-gradient">RA</span>
                </div>
              )}
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/80 to-transparent" />
              <div aria-hidden className="portrait-glare absolute inset-0" />
            </div>
          </div>

          {/* Name plate */}
          <div className="portrait-layer absolute inset-x-[7%] bottom-[5%]" style={{ ["--z" as string]: "80px" }}>
            <p className="font-display text-[1.9rem] leading-none text-fg">{site.name}</p>
            <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              {site.role} · {site.location}
            </p>
          </div>

          {/* Floating status chip */}
          <div className="portrait-layer absolute right-2 top-[9%] sm:-right-6" style={{ ["--z" as string]: "110px" }}>
            <span className="flex items-center gap-1.5 rounded-full border border-line-strong bg-ink-900/90 px-3 py-1.5 font-mono text-[11px] text-up shadow-lg backdrop-blur">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-up" aria-hidden />
              building
            </span>
          </div>

          {/* Floating systems panel */}
          <div className="portrait-layer absolute left-2 top-[52%] sm:-left-8" style={{ ["--z" as string]: "130px" }}>
            <ul className="space-y-1.5 rounded-2xl border border-line-strong bg-ink-900/90 px-3.5 py-3 font-mono text-[11px] shadow-xl backdrop-blur">
              <li className="text-dim">
                <span className="text-signal">$</span> status
              </li>
              {systems.map((s) => (
                <li key={s.name} className="flex items-center gap-2">
                  <span className={s.tone} aria-hidden>●</span>
                  <span className="text-fg">{s.name}</span>
                  <span className={`ml-auto pl-3 uppercase tracking-wider ${s.tone}`}>{s.state}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
