"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

type Props = { projects: Project[] };

export function ProjectsGrid({ projects }: Props) {
  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.domain.split(" · ").forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.domain.split(" · ").includes(active));

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-12 flex flex-wrap gap-2">
        {tags.map((t) => {
          const on = t === active;
          const count =
            t === "All" ? projects.length : projects.filter((p) => p.domain.split(" · ").includes(t)).length;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(t)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[14px] transition ${
                on
                  ? "border-fg bg-fg text-ink-950"
                  : "border-line-strong text-muted hover:border-fg/60 hover:text-fg"
              }`}
            >
              {t}
              <span className={`font-mono text-[11px] ${on ? "text-ink-950/60" : "text-dim"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.indexOf(project)}
            className="h-full"
          />
        ))}
      </div>
    </>
  );
}
