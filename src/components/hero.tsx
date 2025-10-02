import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import Image from "next/image";
import profileImage from "@/assets/profile.png";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-20">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center md:items-start gap-12 md:gap-6">
          <div className="relative size-40 md:size-28 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src={profileImage}
              alt="Rashid Ameer"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Rashid Ameer
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fullstack Developer passionate about building accessible,
                pixel-perfect digital experiences. I specialize in creating
                modern web applications with clean code and intuitive user
                interfaces.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <Button variant="default" size="sm" asChild>
                <a
                  href="/Rashid%20Ameer_Mern%20Developer_Resume.pdf"
                  download
                  className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://linkedin.com/in/rashid-ameer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
