"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FloatingElement, MagneticButton } from "@/components/ui/Animations";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-MdHHBF6i-MI?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-Gz2oZP23j1s?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo--iZV3CqT7LM?q=100&w=3840&auto=format&fit=crop",
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden">
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

      {/* Editorial gradient overlay - darker on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

      {/* Vertical Side Text */}
      <div className="hidden lg:flex absolute left-8 top-0 bottom-0 z-20 items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="-rotate-90 origin-center whitespace-nowrap text-white/50 text-xs font-semibold tracking-[0.4em] uppercase"
        >
          The Wild Side of Bengal
        </motion.div>
      </div>

      {/* Content */}
      <Container className="relative z-20 w-full pl-4 lg:pl-32 pr-4 pt-32 pb-20 flex flex-col justify-end min-h-[100dvh]">
        
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-heading text-6xl md:text-8xl lg:text-[130px] font-bold leading-[0.9] tracking-tighter"
            >
              Beyond
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-heading text-6xl md:text-8xl lg:text-[130px] font-bold leading-[0.9] tracking-tighter"
            >
              The <span className="text-accent italic font-medium pr-8">Delta.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="w-24 h-[2px] bg-accent mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/80 text-lg md:text-2xl max-w-xl mb-12 font-light leading-relaxed"
          >
            No templates. No scripted tours. Just the raw, untamed beauty of the mangrove forest. 
            <span className="block mt-2 font-sans text-sm tracking-wide text-accent/80">বাংলার বন্য রূপ</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <MagneticButton>
              <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-2xl shadow-primary/50 group" asChild>
                <Link href="/packages">
                  Start Exploring
                  <span className="ml-3 block transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </Button>
            </MagneticButton>
            
            <Link 
              href="/contact"
              className="text-white/70 hover:text-white uppercase tracking-[0.2em] text-sm font-semibold transition-colors flex items-center gap-2 group"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-12 transition-all duration-300" />
              Craft Custom Trip
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Image indicators (Minimalist) */}
      <div className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col gap-4 items-center">
        <div className="text-white/50 text-xs font-bold font-sans">
          0{current + 1} <span className="mx-2 font-light">/</span> 0{HERO_IMAGES.length}
        </div>
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                i === current ? "bg-accent w-8" : "bg-white/20 w-4 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
