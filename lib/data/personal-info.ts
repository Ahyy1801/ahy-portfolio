import { PersonalInfo, Skill } from '@/lib/types'

export const personalInfo: PersonalInfo = {
  name: "Cao Van Huy",
  title: "Game Designer, Game Developer & Software Engineer",
  description: "I specialize in game design with Unity and software development, passionate about creating engaging interactive experiences and effective project management.",
  email: "huycv18.work@gmail.com",
  phone: "0963384293",
  github: "https://github.com/Ahyy1801",
  linkedin: "https://linkedin.com/in/Ahy1801",
  avatar: "/profile-photo.jpg"
}

export const aboutDescription = {
  paragraph1: "I am a Software Engineering student at FPT University, currently serving as Director of the Japanese Software Engineers Club (JS Club). With a passion for game design and leadership, I have participated in organizing many major technology events.",
  paragraph2: "My expertise focuses on game design with Unity, C# and Java programming. I have experience in team management and art direction for game projects.",
  currentRole: "Director of JS Club - FPT University"
}

export const skills: Skill[] = [
  { name: "Game Design", percentage: 95 },
  { name: "Unity", percentage: 88 },
  { name: "C#", percentage: 90 },
  { name: "Java", percentage: 85 }
]