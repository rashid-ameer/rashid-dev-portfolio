"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Next.js and Stripe.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for portfolio websites with customizable templates, media management, and SEO optimization. Easy content editing interface.",
    image: "/cms-interface.png",
    tags: ["TypeScript", "Express", "React", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts. Responsive design for all devices.",
    image: "/weather-dashboard-interface.png",
    tags: ["Next.js", "OpenWeather API", "Mapbox", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div
        className={`container max-w-6xl mx-auto transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image with overlay on hover */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay with links on hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium"
                    >
                      {tag}
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
