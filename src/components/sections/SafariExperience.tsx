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
    image: "https://images.unsplash.com/photo-1614350292382-c448d0110dfa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Wildlife Observation",
    description: "Spot the Royal Bengal Tiger, saltwater crocodile, and over 260 bird species",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d4b57e23?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Forest Safari",
    description: "Deep creek expeditions where the mangroves grow thickest and wildest",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Watch Towers",
    description: "Panoramic views from Sajnekhali, Sudhanyakhali, and Dobanki towers",
    image: "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Village Life",
    description: "Meet the resilient communities who have lived alongside tigers for generations",
    image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Sunset Boat Rides",
    description: "Golden hour on the river — the most magical moment in the delta",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  },
];

export function SafariExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32 bg-primary text-white overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading
            title="The Safari Experience"
            subtitle="Six ways to discover the untamed beauty of the world's largest mangrove forest."
            eyebrow="What Awaits You"
            centered
            className="mb-16 [&_h2]:text-white [&_p]:text-white/70"
          />
        </FadeIn>
      </Container>

      {/* Horizontal Scroll Cards */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 md:px-8 lg:px-16 pb-4 min-w-max">
          {SAFARI_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative w-[300px] md:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Number */}
                <span className="absolute top-4 left-4 text-6xl font-heading font-bold text-white/10">
                  0{idx + 1}
                </span>

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <Container className="mt-8">
        <div className="flex items-center gap-3 text-white/40 text-sm justify-center md:justify-end">
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            ←
          </motion.span>
          <span>Scroll to explore</span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </div>
      </Container>
    </section>
  );
}
