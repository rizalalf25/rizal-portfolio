import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/lib/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      <header className="border-b border-stone-200 bg-white/50">
        <Container className="py-14 sm:py-20">
          <Link
            href="/projects"
            className="text-sm font-medium text-emerald-800 hover:underline"
          >
            ← All work
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
            {project.domain} · {project.year}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600">
            {project.summary}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {project.impact.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-stone-500">
                  {item.label}
                </dt>
                <dd className="mt-1 font-serif text-3xl font-bold text-emerald-700">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                {project.problem}
              </p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                {project.approach}
              </p>
            </section>
            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Impact
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {project.impact.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs uppercase tracking-wider text-stone-500">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-serif text-3xl font-bold text-emerald-700 sm:text-4xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <aside className="h-fit rounded-xl border border-stone-200 bg-white p-6 lg:sticky lg:top-24">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
              Tools
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-stone-500">
              {project.outcome}
            </p>
          </aside>
        </div>

        {others.length > 0 ? (
          <section className="mt-16 border-t border-stone-200 pt-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              More work
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="block rounded-xl border border-stone-200 bg-white p-5 transition hover:border-emerald-800/30"
                  >
                    <p className="text-xs uppercase tracking-wider text-emerald-800">
                      {p.domain}
                    </p>
                    <p className="mt-2 font-serif text-lg font-semibold text-stone-900">
                      {p.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </article>
  );
}
