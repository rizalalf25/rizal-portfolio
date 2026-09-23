import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CopyEmail } from "@/components/CopyEmail";
import { LocalTime } from "@/components/LocalTime";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for product collaboration, automation engagements, or markets-related work.`,
};

const include = [
  "What problem you are trying to solve",
  "Timeline and rough scope",
  "Whether you need agents/automation, product collaboration, or markets-related analysis",
  "Any constraints on stack or data access",
];

export default function ContactPage() {
  const mailto = `mailto:${site.email}?subject=Hello%20from%20your%20portfolio`;

  return (
    <Container className="pt-14 sm:pt-20">
      <div className="rise">
        <SectionHeading
          eyebrow="Contact"
          index="04"
          title={
            <>
              Let&apos;s <span className="italic text-gradient">talk.</span>
            </>
          }
          description="Open to thoughtfully scoped automation work, product collaboration, and conversations about markets tooling. Email is best for the first note—include a bit of context and I will reply within a few business days."
        />
      </div>

      <section
        className="rise card relative isolate mt-14 overflow-hidden p-7 sm:p-10"
        style={{ ["--delay" as string]: "120ms" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_90%_at_100%_0%,rgba(52,216,238,0.14),transparent_60%)]"
        />
        <p className="eyebrow">Email · preferred</p>
        <a
          href={mailto}
          className="mt-4 block break-all text-[clamp(1.5rem,4.6vw,3.4rem)] font-medium leading-[1.1] tracking-[-0.03em] text-fg transition hover:text-signal"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mailto}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-ink-950 transition hover:bg-white"
          >
            Write an email
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <CopyEmail email={site.email} />
        </div>
      </section>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          className="card card-glow group p-7 hover:-translate-y-1"
        >
          <p className="eyebrow">LinkedIn</p>
          <p className="font-display mt-6 text-[1.7rem] leading-tight text-fg">in/rizal-alfiansyah</p>
          <p className="mt-2 text-[14px] text-muted">Roles and professional context ↗</p>
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{ ["--delay" as string]: "90ms" }}
          className="card card-glow group p-7 hover:-translate-y-1"
        >
          <p className="eyebrow">GitHub</p>
          <p className="font-display mt-6 text-[1.7rem] leading-tight text-fg">@rizalalf25</p>
          <p className="mt-2 text-[14px] text-muted">Code and experiments ↗</p>
        </a>
        <div data-reveal style={{ ["--delay" as string]: "180ms" }} className="card p-7">
          <p className="eyebrow">Location</p>
          <p className="font-display mt-6 text-[1.7rem] leading-tight text-fg">{site.location}</p>
          <p className="mt-2 font-mono text-[13px] text-muted">
            Now <LocalTime /> · remote-friendly, Asia / Europe overlap
          </p>
        </div>
      </div>

      <section className="mt-24 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-20">
        <p className="eyebrow lg:pt-3" data-reveal>
          What to include
        </p>
        <ol className="border-t border-line">
          {include.map((item, i) => (
            <li
              key={item}
              data-reveal
              className="flex items-baseline gap-6 border-b border-line py-6"
            >
              <span className="font-mono text-[12px] text-signal">0{i + 1}</span>
              <span className="font-display text-[clamp(1.35rem,2.6vw,1.8rem)] leading-snug text-fg">{item}</span>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
