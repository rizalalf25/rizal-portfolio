import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for analytics roles, contract work, or collaboration.`,
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk"
        description="Open to full-time analytics roles, contract engagements, and thoughtful collaborations. Prefer email for the first note—include a bit of context and I will reply within a few business days."
      />

      <div className="mt-8">
        <a
          href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio`}
          className="inline-flex h-11 items-center rounded-full bg-cyan-400 px-5 text-sm font-medium text-zinc-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Email me
        </a>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="font-serif text-xl font-bold text-zinc-50">Email</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Best for project briefs and role discussions.
          </p>
          <a
            href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio`}
            className="mt-6 inline-flex text-lg font-medium text-cyan-400 hover:underline"
          >
            {site.email}
          </a>
          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3 className="text-sm font-medium text-zinc-50">LinkedIn</h3>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm text-cyan-400 hover:underline"
            >
              linkedin.com/in/rizal-alfiansyah
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-zinc-400">
            Based in {site.location}. Available for remote collaboration with a
            preference for Asia / Europe overlap.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
          <h2 className="font-serif text-xl font-bold text-zinc-50">
            What to include
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
            <li>What problem you are trying to solve</li>
            <li>Timeline and rough scope</li>
            <li>
              Whether you need analysis, dashboards, experiments, or hiring
              support
            </li>
            <li>Any constraints on stack or data access</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
