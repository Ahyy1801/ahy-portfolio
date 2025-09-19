import { NavigationItem, SocialLink } from '@/lib/types'

export const navigationItems: NavigationItem[] = [
  { href: "#home", label: "Home", icon: "Home" },
  { href: "#about", label: "About", icon: "User" },
  { href: "#projects", label: "Projects", icon: "FolderOpen" },
  { href: "#certifications", label: "Certifications", icon: "Award" },
  { href: "#contact", label: "Contact", icon: "Phone" }
]

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/Ahyy1801",
    icon: "Github",
    label: "GitHub"
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/Ahy1801",
    icon: "Linkedin",
    label: "LinkedIn"
  },
  {
    platform: "email",
    url: "mailto:huycv18.work@gmail.com",
    icon: "Mail",
    label: "Email"
  }
]