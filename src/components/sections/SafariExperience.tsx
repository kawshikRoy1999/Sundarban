"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SAFARI_ITEMS = [
  {
    title: "Mangrove Waterways",
    description: "Glide through narrow tidal creeks lined with ancient Sundari trees",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=100&w=3840&auto=format&fit=crop",
  },
  {
    title: "Wildlife Observation",
    description: "Spot the Royal Bengal Tiger, saltwater crocodile, and over 260 bird species",
    image: "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=100&w=3840&auto=format&fit=crop",
  },
  {
    title: "Forest Safari",
    description: "Deep creek expeditions where the mangroves grow thickest and wildest",
    image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=100&w=3840&auto=format&fit=crop",
  },
  {
    title: "Watch Towers",
    description: "Panoramic views from Sajnekhali, Sudhanyakhali, and Dobanki towers",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=100&w=3840&auto=format&fit=crop",
  },
  {
    title: "Village Life",
    description: "Meet the resilient communities who have lived alongside tigers for generations",
    image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?q=100&w=3840&auto=format&fit=crop",
  },
  {
    title: "Sunset Boat Rides",
    description: "Golden hour on the river — the most magical moment in the delta",
    image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?q=100&w=3840&auto=format&fit=crop",
  },
];

export function SafariExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-primary text-white overflow-hidden">
      <Container>
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <SectionHeading
              title="The Safari Experience"
              subtitle="Six authentic ways to discover the untamed beauty of the world's largest mangrove forest."
              eyebrow="What Awaits You"
              className="[&_h2]:text-white [&_p]:text-white/70"
            />
            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors text-white active:scale-95"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors text-white active:scale-95"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Horizontal Scroll Cards */}
      <div 
        ref={containerRef} 
        className="overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-4 md:px-8 lg:px-16"
        tabIndex={0}
        role="region"
        aria-label="Safari Experiences Carousel"
      >
        <div className="flex gap-6 min-w-max">
          {SAFARI_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer shadow-xl shadow-black/20"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Number */}
                <span className="absolute top-4 left-5 text-5xl md:text-6xl font-heading font-bold text-white/15 select-none">
                  0{idx + 1}
                </span>

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-95 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile scroll hint */}
      <Container className="mt-6 md:hidden">
        <div className="flex items-center gap-2 text-white/50 text-xs justify-center">
          <span>Swipe horizontally to explore more</span>
          <span>→</span>
        </div>
      </Container>
    </section>
  );
}
