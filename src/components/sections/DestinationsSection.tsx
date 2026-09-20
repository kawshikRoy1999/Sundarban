"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DESTINATIONS } from "@/data/destinations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export function DestinationsSection({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section className="py-20 md:py-32 bg-muted/20 overflow-hidden">
      <Container>
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              title="Places Worth Exploring"
              subtitle="The watchtowers, ruins, and waterways that define every itinerary."
              eyebrow="Destinations"
            />
            {showViewAll && (
              <Link
                href="/destinations"
                className="text-accent font-medium hover:text-accent/80 transition-colors inline-flex items-center gap-2 shrink-0 pb-2 md:pb-4 border-b border-accent/30 group"
              >
                View All Places
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            )}
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((dest) => (
            <StaggerItem
              key={dest.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-muted cursor-pointer shadow-premium hover:shadow-premium-hover transition-all duration-700"
            >
              {/* Subtle inner border */}
              <div className="absolute inset-0 border border-white/20 rounded-3xl z-20 pointer-events-none mix-blend-overlay" />
              
              <Image
                src={dest.imageUrl}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-heading font-bold text-white/10 transition-colors duration-700 group-hover:text-accent/20 select-none">
                0{dest.id}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading text-2xl font-bold text-white mb-2 transform transition-transform duration-500 md:group-hover:-translate-y-2">
                  {dest.name}
                </h3>
                <p className="text-white/80 text-sm line-clamp-3 opacity-95 md:opacity-0 md:transform md:translate-y-6 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  {dest.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
