import Image from "next/image"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data/personal-info"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        <div className="space-y-8 fade-in">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <p className="text-2xl text-secondary mb-8">{personalInfo.title}</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {personalInfo.description}
            </p>
          </div>

          <div className="flex gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-accent bg-transparent transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center slide-up">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl float glow-subtle">
              <Image
                src={personalInfo.avatar}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎮</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}