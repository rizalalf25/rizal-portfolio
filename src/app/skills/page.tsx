import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Analytics methods, data tooling, and collaboration skills used by Rizal Alfiansyah.",
};

export default function SkillsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Methods and tooling"
        description="A practical stack for shipping decision systems and market-literacy products: TypeScript and Python, Next.js, bots and agents, statement analysis, and delivery discipline."
      />
      <div className="mt-12 space-y-10">
        {skillGroups.map((group) => (
          <section key={group.category}>
            <h2 className="font-serif text-xl font-bold text-zinc-50">
              {group.category}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
