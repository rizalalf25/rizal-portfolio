import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { HeroPanel } from "@/components/HeroPanel";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { experienceTimeline, principles } from "@/lib/about";
import { projects } from "@/lib/projects";
import { site, skillGroups, tickerItems } from "@/lib/skills";

export default function HomePage() {
  const [lead, ...rest] = projects;
  const secondary = rest.slice(0, 2);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative">
        <Container className="grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div>
            <p className="rise inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.03] py-1.5 pl-2 pr-4 font-mono text-[11.5px] uppercase tracking-[0.12em] text-muted">
              <span className="live-dot grid h-2 w-2 place-items-center rounded-full bg-up" aria-hidden />
              {site.role} · {site.location}
            </p>

            <h1
              className="rise font-display mt-8 text-[clamp(3rem,8.4vw,6.4rem)] leading-[0.94] tracking-[-0.025em] text-fg"
              style={{ ["--delay" as string]: "80ms" }}
            >
              Building AI &amp; quant systems{" "}
              <span className="italic text-gradient">for markets.</span>
            </h1>

            <p
              className="rise mt-8 max-w-xl text-[18px] leading-relaxed text-muted"
              style={{ ["--delay" as string]: "160ms" }}
            >
              I&apos;m <span className="text-fg">{site.name}</span>—decision
              tools, literacy products, and reliable automation that turn noisy
              market data into a clear next action.
            </p>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-3"
              style={{ ["--delay" as string]: "240ms" }}
            >
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[15px] font-medium text-ink-950 transition hover:bg-signal"
              >
                View selected work
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-[15px] text-fg transition hover:border-fg"
              >
                About me
              </Link>
            </div>

            <dl
              className="rise mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6"
              style={{ ["--delay" as string]: "320ms" }}
            >
              {[
                { k: "Projects", v: String(projects.length).padStart(2, "0") },
                { k: "Markets", v: "03" },
                { k: "Weekly cap", v: "<10h" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">{s.k}</dt>
                  <dd className="font-display mt-1 text-4xl text-fg">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rise relative" style={{ ["--delay" as string]: "200ms" }}>
            <div aria-hidden className="absolute -inset-4 -z-10 sm:-inset-8 rounded-[40px] bg-signal/10 blur-3xl" />
            <HeroPanel />
          </div>
        </Container>

        <Marquee items={tickerItems} />
      </section>

      {/* ---------------- Selected work ---------------- */}
      <section className="relative">
        <Container className="pt-24 sm:pt-32">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end" data-reveal>
            <SectionHeading
              as="h2"
              index="01"
              eyebrow="Selected work"
              title={
                <>
                  Real projects, <span className="italic text-muted">honest metrics.</span>
                </>
              }
            />
            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-2 text-[15px] text-muted transition hover:text-fg"
            >
              All {projects.length} projects
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <div data-reveal className="lg:row-span-2">
              <ProjectCard project={lead} index={0} variant="feature" className="h-full" />
            </div>
            {secondary.map((p, i) => (
              <div key={p.slug} data-reveal style={{ ["--delay" as string]: `${(i + 1) * 90}ms` }}>
                <ProjectCard project={p} index={i + 1} className="h-full" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className="relative">
        <Container className="pt-28 sm:pt-36">
          <div data-reveal>
            <SectionHeading
              as="h2"
              index="02"
              eyebrow="How I work"
              title={
                <>
                  Process first. <span className="italic text-muted">Then the shiny parts.</span>
                </>
              }
            />
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line md:grid-cols-3">
            {principles.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ ["--delay" as string]: `${i * 90}ms` }}
                className="group relative bg-ink-950 p-7 transition-colors hover:bg-ink-900 sm:p-8"
              >
                <span className="font-mono text-[12px] text-signal">0{i + 1}</span>
                <h3 className="font-display mt-10 text-[2rem] leading-[1.05] text-fg">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.body}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100"
                />
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Capabilities + path ---------------- */}
      <section className="relative">
        <Container className="grid gap-16 pt-28 sm:pt-36 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal>
            <SectionHeading
              as="h2"
              index="03"
              eyebrow="Capabilities"
              title={
                <>
                  A stack for <span className="italic text-muted">decision systems.</span>
                </>
              }
            />
            <div className="mt-10 space-y-8">
              {skillGroups.map((g) => (
                <div key={g.category}>
                  <p className="eyebrow">{g.category}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.skills.slice(0, 5).map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-[14px] text-fg/90 transition hover:border-signal/50 hover:text-signal"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/skills" className="group mt-10 inline-flex items-center gap-2 text-[15px] text-muted transition hover:text-fg">
              Full skills list
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div data-reveal style={{ ["--delay" as string]: "120ms" }}>
            <p className="eyebrow flex items-center gap-3">
              <span className="text-signal">04</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              Path
            </p>
            <ol className="relative mt-8 border-l border-line">
              {experienceTimeline.map((item) => (
                <li key={item.title} className="relative pb-9 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border border-signal bg-ink-950"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">{item.period}</p>
                  <h3 className="mt-2 text-[17px] font-medium leading-snug text-fg">{item.title}</h3>
                  <p className="mt-1 text-[14px] text-dim">{item.org}</p>
                </li>
              ))}
            </ol>
            <Link href="/about" className="group mt-10 inline-flex items-center gap-2 text-[15px] text-muted transition hover:text-fg">
              Read the full story
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
