import { projects } from "@/lib/data/projects"
import ProjectCard from "@/components/common/ProjectCard"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-16 fade-in">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Featured</span> Projects
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}