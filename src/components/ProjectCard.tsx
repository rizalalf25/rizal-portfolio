import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ProjectGlyph } from "./ProjectGlyph";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant?: "default" | "feature";
  className?: string;
};

function Arrow() {
  return (
    <span
      aria-hidden
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-signal group-hover:bg-signal group-hover:text-ink-950"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export function ProjectCard({ project, index, variant = "default", className = "" }: ProjectCardProps) {
  const feature = variant === "feature";
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`card card-glow group flex flex-col overflow-hidden hover:-translate-y-1 hover:bg-white/[0.035] ${className}`}
    >
      <div
        className={`relative border-b border-line bg-[radial-gradient(ellipse_at_top,rgba(52,216,238,0.08),transparent_70%)] ${
          feature ? "h-56 sm:h-72 lg:h-auto lg:min-h-72 lg:flex-1" : "h-40"
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
        />
        <ProjectGlyph
          slug={project.slug}
          className={`absolute inset-0 m-auto h-full w-full p-5 ${feature ? "max-w-[520px]" : "max-w-[340px]"} opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100`}
        />
        <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-signal">{num}</span>
          <span className="text-dim">/</span>
          <span className="text-muted">{project.domain}</span>
        </div>
        <span className="absolute right-5 top-5 font-mono text-[11px] text-dim">{project.year}</span>
      </div>

      <div className={`flex flex-col ${feature ? "p-7 sm:p-8" : "flex-1 p-6"}`}>
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-display text-fg ${
              feature ? "text-[2.1rem] leading-[1.05] sm:text-[2.6rem]" : "text-[1.75rem] leading-[1.08]"
            }`}
          >
            {project.title}
          </h3>
          <Arrow />
        </div>
        <p className={`mt-3 text-muted ${feature ? "max-w-xl text-[16px]" : "line-clamp-3 text-[15px]"} leading-relaxed`}>
          {project.summary}
        </p>

        <div className="mt-auto pt-6">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-ink-900 px-4 py-3">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim">{m.label}</dt>
                <dd className="mt-1 text-[15px] font-medium text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.slice(0, feature ? 5 : 3).map((tool) => (
            <li key={tool} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
