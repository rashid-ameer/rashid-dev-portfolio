"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/content/nav";
import Link from "next/link";

function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="h-9 w-9 md:hidden relative z-50 cursor-pointer"
        aria-label="Toggle menu">
        {mobileMenuOpen ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </Button>

      <div
        className={`fixed left-0 right-0 top-[57px] h-[calc(100vh-57px)] bg-background backdrop-blur-md md:hidden z-40 transition-all duration-300 ease-in-out transition-discrete ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <div
          className={`h-full flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="container mx-auto px-6 py-12 max-w-6xl">
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-2xl font-medium hover:text-muted-foreground transition-colors py-3 border-b border-border/40">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
