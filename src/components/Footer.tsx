import Link from "next/link";
import { Container } from "./Container";
import { LocalTime } from "./LocalTime";
import { site } from "@/lib/skills";

const sitemap = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-line bg-ink-900/60">
      <Container className="pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow">Currently</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
              Building AlphaRadar and Kuanta, studying for CSA, and taking a
              small number of scoped automation projects.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-[15px] text-fg underline decoration-line-strong underline-offset-[6px] transition hover:text-signal hover:decoration-signal"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Index</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-muted transition hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-3 space-y-2 text-[15px]">
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-fg">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-fg">
                  GitHub ↗
                </a>
              </li>
              <li className="pt-2 font-mono text-xs uppercase tracking-[0.14em] text-dim">
                {site.location} · <LocalTime />
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="font-display mt-16 select-none text-[clamp(3.2rem,13vw,11rem)] leading-[0.85] tracking-[-0.03em] text-white/[0.06]"
        >
          Rizal Alfiansyah
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 font-mono text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Built with Next.js.</p>
          <a href="#main" className="transition hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
