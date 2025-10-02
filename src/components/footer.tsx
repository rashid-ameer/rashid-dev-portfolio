import { Linkedin, Github, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-2">Let&apos;s Connect</h3>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email - explicit text */}
            <a
              href="mailto:rashid@example.com"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors group">
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">rashid@example.com</div>
              </div>
            </a>

            {/* Phone - explicit text */}
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors group">
              <Phone className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">+1 (234) 567-890</div>
              </div>
            </a>

            {/* LinkedIn - icon only */}
            <a
              href="https://linkedin.com/in/rashidameer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors group">
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">
                  linkedin.com/in/rashidameer
                </div>
              </div>
            </a>

            {/* GitHub - icon only */}
            <a
              href="https://github.com/rashidameer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors group">
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium">
                  github.com/rashidameer
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rashid Ameer. Built with Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
