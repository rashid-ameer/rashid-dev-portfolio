"use client";

import { NAV_ITEMS } from "@/content/nav";
import Link from "next/link";

function Navigation() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
