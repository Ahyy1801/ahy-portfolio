import { Home, User, FolderOpen, Award, Phone } from "lucide-react"
import { navigationItems } from "@/lib/constants/navigation"

const iconMap = {
  Home,
  User,
  FolderOpen,
  Award,
  Phone
}

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">Portfolio</div>
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}