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
      <div className="mt-12 space-y-10">
        {skillGroups.map((group) => (
          <section key={group.category}>
            <h2 className="font-serif text-xl font-bold text-stone-900">
              {group.category}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
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
