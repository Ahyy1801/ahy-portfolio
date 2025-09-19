import Image from "next/image"
import { personalInfo, aboutDescription, skills } from "@/lib/data/personal-info"
import SkillBar from "@/components/common/SkillBar"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mb-16 fade-in">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-primary">About</span> Me
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col items-center lg:items-start space-y-6 slide-up">
          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl hover-lift">
            <Image
              src={personalInfo.avatar}
              alt={`${personalInfo.name} presenting at an event`}
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-2">{personalInfo.name}</h3>
            <p className="text-primary font-medium">{personalInfo.title}</p>
            <p className="text-muted-foreground">{aboutDescription.currentRole}</p>
          </div>
        </div>

        <div className="space-y-6 fade-in">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {aboutDescription.paragraph1}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {aboutDescription.paragraph2}
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}