// components/ProjectSection.tsx
"use client"

import { ProjectCard } from "./ProjectCard"

interface ProjectData {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
  partner?: string
  role?: string
}

interface ProjectSectionProps {
  title: string
  projects: ProjectData[]
}

export function ProjectSection({ title, projects }: ProjectSectionProps) {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-white mb-8">{title}</h3>
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
