"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Fullstack Developer",
    company: "Tech Innovations Inc",
    companyUrl: "#",
    description:
      "Lead development of scalable web applications using Next.js and Node.js. Architect and implement RESTful APIs and microservices. Mentor junior developers and conduct code reviews to maintain high code quality standards.",
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2022 — 2024",
    title: "Fullstack Developer",
    company: "Digital Solutions Co",
    companyUrl: "#",
    description:
      "Built and maintained multiple client-facing web applications. Collaborated with designers to implement pixel-perfect UI components. Optimized application performance and improved load times by 40%.",
    skills: ["React", "Express", "MongoDB", "Tailwind CSS", "Docker"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "Creative Agency",
    companyUrl: "#",
    description:
      "Developed responsive websites and web applications for various clients. Implemented modern frontend architectures and best practices. Worked closely with UX designers to create engaging user experiences.",
    skills: ["JavaScript", "React", "CSS", "Git", "Figma"],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div
        className={`container max-w-4xl mx-auto transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-muted-foreground">{exp.period}</div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-1">
                    {exp.title} · {exp.company}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Visit ${exp.company}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
