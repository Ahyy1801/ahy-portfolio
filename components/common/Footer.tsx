import { personalInfo } from "@/lib/data/personal-info"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="text-center text-sm text-muted-foreground">
        <p>© 2024 {personalInfo.name}. Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  )
}