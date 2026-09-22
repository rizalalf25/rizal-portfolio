import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-stone-200 bg-white p-6 transition duration-150 hover:-translate-y-0.5 hover:border-emerald-700/30 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
    >
      <div className="mb-4 flex flex-wrap gap-6 border-b border-stone-200 pb-4">
        {project.metrics.map((m) => (
          <div key={m.label} className="min-w-0">
            <p className="font-serif text-2xl font-bold text-emerald-700">
              {m.value}
            </p>
            <p className="text-[13px] text-stone-500">{m.label}</p>
          </div>
        ))}
      </div>
      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-700">
        {project.title}
      </h3>
      <p className="mt-2 line-clamp-1 text-base text-stone-500">
        {project.outcome}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-full bg-stone-100 px-3 py-1 text-[13px] text-stone-900"
          >
            {tool}
          </li>
        ))}
      </ul>
    </Link>
  );
}
