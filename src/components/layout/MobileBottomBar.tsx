"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, PhoneCall, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border px-4 py-2 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <nav className="flex items-center justify-between max-w-md mx-auto">
        <Link 
          href="/" 
          className={cn(
            "flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors",
            pathname === "/" ? "text-accent" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link 
          href="/packages" 
          className={cn(
            "flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors",
            pathname.startsWith("/packages") ? "text-accent" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Compass className="w-5 h-5" />
          <span>Packages</span>
        </Link>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-2 text-xs font-medium text-green-600 transition-colors hover:text-green-700"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
        <a 
          href="tel:+919876543210" 
          className="flex flex-col items-center gap-1 p-2 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          <PhoneCall className="w-5 h-5" />
          <span>Call</span>
        </a>
      </nav>
    </div>
  );
}
