import Image from "next/image"
import { Card } from "@/components/ui/card"
import { certifications } from "@/lib/data/certifications"

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="mb-16 fade-in">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Certifications</span> & Achievements
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <Card key={cert.id} className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover-lift">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={cert.image}
                alt={`${cert.title} - ${cert.institution}`}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.institution}</p>
              <p className="text-sm text-muted-foreground mb-1">{cert.date}</p>
              {cert.credentialId && (
                <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
              )}
              {cert.description && (
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}