export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  phone: string
  github: string
  linkedin: string
  avatar: string
  cvUrl?: string
}

export interface Skill {
  name: string
  percentage: number
}

export interface Experience {
  id: string
  period: string
  position: string
  company: string
  description: string
  tags: string[]
  link?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
  image?: string
  link?: string
  github?: string
}

export interface Certification {
  id: string
  title: string
  institution: string
  date: string
  image: string
  credentialId?: string
  description?: string
}

export interface NavigationItem {
  href: string
  label: string
  icon: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}