import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected real projects by Rizal Alfiansyah: AlphaRadar, Kuanta, IDX agentic research, CSA BMRI lab, and Upwork AI automation.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Selected real projects"
        description="Personal products, markets research, and constrained freelance delivery—honest process metrics, no fictional employer ROI."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
