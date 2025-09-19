import { ExternalLink } from "lucide-react"
import { experiences } from "@/lib/data/experiences"

export default function ExperienceSection() {
  return (
    <section className="mb-20">
      <div className="space-y-12">
        {experiences.map((experience) => (
          <div key={experience.id} className="grid grid-cols-1 lg:grid-cols-4 gap-8 hover-lift">
            <div className="lg:col-span-1">
              <p className="text-sm text-muted-foreground">{experience.period}</p>
            </div>
            <div className="lg:col-span-3">
              <div className="group">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {experience.position} · {experience.company}
                  {experience.link && (
                    <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}