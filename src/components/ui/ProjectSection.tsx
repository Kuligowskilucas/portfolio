// components/ProjectSection.tsx
import { ProjectCard } from "./ProjectCard"
import type { ProjectGroup } from "@/data/portfolio"

export function ProjectSection({ title, projects }: Omit<ProjectGroup, "id">) {
  return (
    <section className="mt-16 first:mt-0">
      <h3 className="font-display text-[clamp(1.5rem,2.5vw,1.875rem)] font-semibold tracking-[-0.015em] text-ink">
        {title}
      </h3>
      <div className="mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
