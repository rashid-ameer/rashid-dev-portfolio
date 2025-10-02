"use client";
function Navigation() {
  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default Navigation;
