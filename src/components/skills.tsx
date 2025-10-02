"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Layers, Server, Palette, GitBranch, Cloud, Box, TestTube, Figma, Globe } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML/CSS", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Globe },
      { name: "GraphQL", icon: Layers },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Figma", icon: Figma },
      { name: "Jest", icon: TestTube },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div
        className={`container max-w-4xl mx-auto transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-medium">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
