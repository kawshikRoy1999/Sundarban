"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FloatingElement, MagneticButton } from "@/components/ui/Animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561731216-c3a4d4b57e23?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614350292382-c448d0110dfa?q=80&w=2000&auto=format&fit=crop",
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[current]}')` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/40 to-primary/80 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(18,53,36,0.4)_100%)] z-10" />

      {/* Content */}
      <Container className="relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">The Wild Side of Bengal | বাংলার বন্য রূপ</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl leading-[1.05] mb-4"
          >
            Where the River
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.65, ease: [0.33, 1, 0.68, 1] }}
            className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl leading-[1.05] mb-8"
          >
            Meets the <span className="text-accent">Wild.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/85 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Cruise through ancient mangrove waterways. Watch the forest wake at dawn.
          Experience the raw, untamed beauty of the Sundarbans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
        >
          <MagneticButton>
            <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/30 w-full sm:w-auto" asChild>
              <Link href="/packages">Explore Tours</Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 text-white border-white/30 hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Plan My Trip</Link>
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Micro Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 text-white/60 text-sm"
        >
          {["Authentic Local Experiences", "Transparent Packages", "Easy WhatsApp Booking"].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {item}
            </span>
          ))}
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <FloatingElement className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" distance={8} duration={3}>
        <ChevronDown className="w-6 h-6 text-white/50" />
      </FloatingElement>

      {/* Image indicators */}
      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-8 z-20 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "bg-accent w-10 md:w-14" : "bg-white/40 w-4 md:w-8 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
