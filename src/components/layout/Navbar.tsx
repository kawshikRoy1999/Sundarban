"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b",
    isScrolled || !isHomePage
      ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm"
      : "bg-transparent border-transparent py-5"
  );

  const textClass = cn(
    isScrolled || !isHomePage ? "text-foreground" : "text-white"
  );

  return (
    <header className={navClass}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <span className={cn("font-heading text-2xl font-bold tracking-tight transition-colors", textClass)}>
            Wild<span className="text-accent">Bengal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    pathname === link.href 
                      ? "text-accent" 
                      : textClass
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <Button variant={isScrolled || !isHomePage ? "outline" : "secondary"} size="sm" className="hidden xl:flex gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 z-50", isMobileMenuOpen ? "text-foreground" : textClass)}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 text-xl font-heading">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "block pb-2 border-b border-border transition-colors hover:text-accent",
                  pathname === link.href ? "text-accent border-accent" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-12 flex flex-col gap-4">
          <Button className="w-full justify-center gap-2" size="lg">
            <Calendar className="w-5 h-5" />
            Plan Your Trip
          </Button>
          <Button variant="outline" className="w-full justify-center gap-2" size="lg">
            <Phone className="w-5 h-5" />
            Call +91 98765 43210
          </Button>
        </div>
      </div>
    </header>
  );
}
