import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"
import { socialLinks } from "@/lib/constants/navigation"
import ContactForm from "@/components/common/ContactForm"
import SimpleDownloadCV from "@/components/common/SimpleDownloadCV"

const iconMap = {
  Github,
  Linkedin,
  Mail,
  Phone
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mb-16 fade-in">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Get In</span> Touch
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 slide-up">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's create something amazing together!</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always ready to discuss new game projects, collaboration opportunities, or simply chat about
              technology and software development.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">{personalInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.filter(link => link.platform !== 'email').map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <IconComponent className="w-6 h-6 text-primary" />
                </a>
              )
            })}
          </div>

          <div className="pt-6 border-t border-border">
            <h4 className="text-lg font-semibold mb-3">Want to know more about me?</h4>
            <SimpleDownloadCV />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}