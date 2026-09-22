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
        description="A practical stack for analytics work: strong SQL and Python, modern BI and transformation tools, and the soft skills that make analysis stick with stakeholders."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.category}
            className="rounded-xl border border-stone-200 bg-white p-6"
          >
            <h2 className="font-serif text-xl font-bold text-stone-900">
              {group.category}
            </h2>
            <ul className="mt-4 space-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-stone-100 py-2 text-sm text-stone-600 last:border-0"
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
