import { Navigation } from "lucide-react";
import { MobileMenu, ThemeToggle } from "./components";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
        <a
          href="#hero"
          className="text-lg font-medium hover:text-muted-foreground transition-colors">
          Rashid Ameer
        </a>

        <div className="flex items-center gap-4">
          <Navigation />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
