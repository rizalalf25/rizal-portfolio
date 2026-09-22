import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutBackground,
  aboutIntro,
  experienceTimeline,
} from "@/lib/about";
import { site } from "@/lib/skills";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a builder and analyst based in ${site.location}.`,
};

export default function AboutPage() {
  const introParagraphs = aboutIntro.split("\n\n");

  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="About"
        title={site.name}
        description={`${site.role} based in ${site.location}—building AI and quant systems for markets, literacy products, and tightly scoped automation.`}
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6 text-base leading-relaxed text-zinc-400">
          {introParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p>{aboutBackground}</p>

          <h2 className="pt-4 font-serif text-2xl font-bold text-zinc-50">
            Experience
          </h2>
          <ol className="space-y-6">
            {experienceTimeline.map((item) => (
              <li
                key={item.period}
                className="border-l-2 border-cyan-400/30 pl-5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {item.period}
                </p>
                <p className="mt-1 font-serif text-lg font-semibold text-zinc-50">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-400">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="h-fit space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
              Snapshot
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-400">Role</dt>
                <dd className="text-right font-medium text-zinc-50">
                  {site.role}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-400">Experience</dt>
                <dd className="text-right font-medium text-zinc-50">
                  {site.years}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-400">Location</dt>
                <dd className="text-right font-medium text-zinc-50">
                  {site.location}
                </dd>
              </div>
            </dl>
          </div>
          <div className="border-t border-zinc-800 pt-6">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-full bg-cyan-400 px-4 text-sm font-medium text-zinc-950 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Start a conversation
            </Link>
          </div>
        </aside>
      </div>
    </Container>
  );
}
