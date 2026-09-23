import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected real projects by Rizal Alfiansyah: AlphaRadar, Kuanta, IDX agentic research, CSA BMRI lab, and Upwork AI automation.",
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="pt-14 sm:pt-20">
        <div className="rise">
          <SectionHeading
            eyebrow="Work"
            index="01"
            title={
              <>
                Selected <span className="italic text-gradient">real</span> projects.
              </>
            }
            description="Personal products, markets research, and constrained freelance delivery. Honest process metrics—no fictional employer ROI."
          />
        </div>
        <ProjectsGrid projects={projects} />
      </Container>
      <CtaBand />
    </>
  );
}
