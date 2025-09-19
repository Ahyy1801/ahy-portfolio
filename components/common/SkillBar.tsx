import type React from "react"

interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full skill-bar"
          data-width={percentage}
        ></div>
      </div>
    </div>
  )
}