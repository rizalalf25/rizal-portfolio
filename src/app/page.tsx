import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site, skillGroups } from "@/lib/skills";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const highlights = skillGroups.flatMap((g) => g.skills).slice(0, 9);

  return (
    <>
      <section className="border-b border-stone-200">
        <Container className="py-10 sm:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
            {site.role} · {site.location}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-500">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-medium text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              View selected work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-emerald-700 px-5 text-sm font-medium text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
                Selected work
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900">
                Case studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-emerald-800 hover:underline sm:inline"
            >
              All projects →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-white/60">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
            Capabilities
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-stone-900">
            How I help teams
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
            From metric definitions and SQL models to experiment readouts and
            ops dashboards—analysis that changes what a team does next week,
            not just what they report.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {highlights.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
              >
                {skill}
              </li>
            ))}
          </ul>
          <Link
            href="/skills"
            className="mt-6 inline-block text-sm font-medium text-emerald-800 hover:underline"
          >
            Full skills list →
          </Link>
        </Container>
      </section>
    </>
  );
}
