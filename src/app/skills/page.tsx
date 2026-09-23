import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Analytics methods, data tooling, and collaboration skills used by Rizal Alfiansyah.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function SkillsPage() {
  return (
    <>
      <Container className="pt-14 sm:pt-20">
        <div className="rise">
          <SectionHeading
            eyebrow="Skills"
            index="02"
            title={
              <>
                Methods <span className="italic text-muted">&amp;</span> tooling.
              </>
            }
            description="A practical stack for shipping decision systems and market-literacy products: TypeScript and Python, Next.js, bots and agents, statement analysis, and delivery discipline."
          />
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <section
              key={group.category}
              data-reveal
              style={{ ["--delay" as string]: `${gi * 90}ms` }}
              className="card card-glow flex flex-col p-7"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="text-signal">{pad(gi + 1)}</span>
                <span className="text-dim">{pad(group.skills.length)} items</span>
              </div>
              <h2 className="font-display mt-8 text-[2.1rem] leading-[1.05] text-fg">{group.category}</h2>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {group.skills.map((skill, i) => (
                  <li key={skill} className="group flex items-center gap-4 py-3 text-[15px] text-fg/90">
                    <span className="font-mono text-[11px] text-dim transition group-hover:text-signal">{pad(i + 1)}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-28">
          <div data-reveal>
            <SectionHeading
              as="h2"
              eyebrow="Applied in"
              title={
                <>
                  Where the stack <span className="italic text-muted">actually ships.</span>
                </>
              }
            />
          </div>
          <ul className="mt-12 border-t border-line">
            {projects.map((p, i) => (
              <li key={p.slug} data-reveal>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid gap-4 border-b border-line py-6 transition-colors hover:bg-white/[0.02] md:grid-cols-[60px_1.1fr_1.4fr_40px] md:items-center md:px-3"
                >
                  <span className="font-mono text-[12px] text-dim group-hover:text-signal">{pad(i + 1)}</span>
                  <span className="font-display text-[1.6rem] leading-tight text-fg">{p.title.split(" — ")[0]}</span>
                  <span className="flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11.5px] text-muted">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span aria-hidden className="hidden text-right text-muted transition group-hover:translate-x-1 group-hover:text-signal md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <CtaBand />
    </>
  );
}
