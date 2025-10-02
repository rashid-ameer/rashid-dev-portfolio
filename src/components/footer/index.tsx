import { Linkedin, Github, Mail, Phone } from "lucide-react";
import ContactItem from "./ContactItem";

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-2">Let&apos;s Connect</h3>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaborations or opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="rashidameer.dev@gmail.com"
            />
            <ContactItem icon={Phone} label="Phone" value="+92 313 5212834" />
            <ContactItem
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/rashidameer"
              href="https://linkedin.com/in/rashid-ameer"
            />
            <ContactItem
              icon={Github}
              label="GitHub"
              value="github.com/rashidameer"
              href="https://github.com/rashid-ameer"
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Rashid Ameer (Full Stack Developer)
          </p>
        </div>
      </div>
    </footer>
  );
}
