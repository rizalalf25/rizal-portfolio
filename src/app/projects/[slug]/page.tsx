import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ProjectGlyph } from "@/components/ProjectGlyph";
import { getAllProjectSlugs, getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const [titleMain, titleSub] = project.title.split(" — ");

  const sections = [
    { id: "problem", label: "Problem", body: project.problem },
    { id: "approach", label: "Approach", body: project.approach },
  ];

  return (
    <article>
      {/* ---------- Header ---------- */}
      <header>
        <Container className="pt-12 sm:pt-16">
          <div className="rise flex items-center justify-between font-mono text-[12px] text-dim">
            <Link href="/projects" className="group inline-flex items-center gap-2 transition hover:text-fg">
              <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
              All work
            </Link>
            <span>
              <span className="text-signal">{pad(idx + 1)}</span> / {pad(projects.length)}
            </span>
          </div>

          <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rise" style={{ ["--delay" as string]: "80ms" }}>
              <p className="eyebrow">
                {project.domain} · {project.year}
              </p>
              <h1 className="font-display mt-5 text-[clamp(2.9rem,7.5vw,5.75rem)] leading-[1.02] tracking-[-0.025em] text-fg">
                {titleMain}
                {titleSub ? (
                  <>
                    <br />
                    <span className="italic text-muted">{titleSub}</span>
                  </>
                ) : null}
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted">{project.summary}</p>
            </div>

            <div
              className="rise card relative hidden aspect-[4/3] overflow-hidden lg:block"
              style={{ ["--delay" as string]: "160ms" }}
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,216,238,0.12),transparent_70%)]"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)]"
              />
              <ProjectGlyph slug={project.slug} className="absolute inset-0 h-full w-full p-8" />
            </div>
          </div>

          <dl className="rise mt-14 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-3" style={{ ["--delay" as string]: "220ms" }}>
            {project.impact.map((item) => (
              <div key={item.label} className="bg-ink-900 px-6 py-5 sm:py-6">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">{item.label}</dt>
                <dd className="font-display mt-1.5 text-[1.7rem] leading-tight text-fg sm:text-[2rem]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      {/* ---------- Body ---------- */}
      <Container className="pt-20 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <aside className="h-fit space-y-10 lg:sticky lg:top-28">
            <nav aria-label="On this page" className="hidden lg:block">
              <p className="eyebrow">On this page</p>
              <ol className="mt-4 space-y-2 text-[14px]">
                {[...sections, { id: "outcome", label: "Outcome" }].map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-center gap-3 text-muted transition hover:text-fg">
                      <span className="font-mono text-[11px] text-dim group-hover:text-signal">{pad(i + 1)}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div>
              <p className="eyebrow">Tools</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-md border border-line px-2.5 py-1 font-mono text-[12px] text-muted">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">At a glance</p>
              <dl className="mt-4 divide-y divide-line border-y border-line text-[14px]">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-dim">{m.label}</dt>
                    <dd className="text-right text-fg">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <div className="max-w-[68ch] space-y-20">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} data-reveal className="scroll-mt-28">
                <p className="font-mono text-[12px] text-signal">{pad(i + 1)}</p>
                <h2 className="font-display mt-3 text-[2.5rem] leading-[1.05] text-fg">{s.label}</h2>
                <p className="mt-6 text-[17px] leading-[1.8] text-muted">
                  {s.body}
                </p>
              </section>
            ))}

            <section id="outcome" data-reveal className="scroll-mt-28">
              <p className="font-mono text-[12px] text-signal">{pad(sections.length + 1)}</p>
              <h2 className="font-display mt-3 text-[2.5rem] leading-[1.05] text-fg">Outcome</h2>
              <blockquote className="relative mt-8 border-l-2 border-signal pl-6">
                <p className="font-display text-[clamp(1.6rem,3.2vw,2.2rem)] italic leading-[1.25] text-fg">
                  {project.outcome}
                </p>
              </blockquote>
            </section>
          </div>
        </div>

        {/* ---------- Prev / next ---------- */}
        <nav aria-label="More projects" className="mt-28 grid gap-px overflow-hidden rounded-[22px] border border-line bg-line sm:grid-cols-2">
          {[
            { p: prev, dir: "Previous", align: "" },
            { p: next, dir: "Next", align: "sm:text-right" },
          ].map(({ p, dir, align }) => (
            <Link
              key={dir}
              href={`/projects/${p.slug}`}
              className={`group bg-ink-950 p-7 transition-colors hover:bg-ink-900 sm:p-9 ${align}`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                {dir === "Previous" ? "← " : ""}
                {dir} project
                {dir === "Next" ? " →" : ""}
              </p>
              <p className="font-display mt-3 text-[1.9rem] leading-[1.1] text-fg transition-colors group-hover:text-signal">
                {p.title.split(" — ")[0]}
              </p>
              <p className="mt-1 text-[14px] text-dim">{p.domain}</p>
            </Link>
          ))}
        </nav>
      </Container>

      <CtaBand />
    </article>
  );
}
