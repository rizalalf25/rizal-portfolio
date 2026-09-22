import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected analytics case studies by Rizal Alfiansyah spanning retention, credit ops, pricing experiments, and fulfillment SLAs.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Selected case studies"
        description="Four projects that show how I frame problems, choose methods, and turn analysis into operational impact. Details are representative of work at this scope; company names are omitted."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
