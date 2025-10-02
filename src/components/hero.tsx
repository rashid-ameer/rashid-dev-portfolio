"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
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
    <section id="hero" ref={sectionRef} className="min-h-screen flex items-center px-6 pt-20">
      <div
        className={`container max-w-5xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <img
              src="/professional-developer-portrait.png"
              alt="Rashid Ameer"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">Rashid Ameer</h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fullstack Developer passionate about building accessible, pixel-perfect digital experiences. I
                specialize in creating modern web applications with clean code and intuitive user interfaces.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <Button variant="default" size="sm" asChild>
                <a href="/resume.pdf" download className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://linkedin.com/in/rashidameer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
