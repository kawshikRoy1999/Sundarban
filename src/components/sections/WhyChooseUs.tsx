"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, CheckCircle2, HeartHandshake, Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/ui/Animations";

const FEATURES = [
  {
    icon: <Compass className="w-7 h-7" />,
    title: "Local Knowledge",
    description: "Born and raised in the delta. Our guides read the tides, the tracks, and the forest like a book.",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    title: "Transparent Packages",
    description: "Clear inclusions, exclusions, and pricing. What you see is exactly what you pay.",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "Personal Support",
    description: "Talk to a real person on WhatsApp before, during, and after your trip.",
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "Authentic Experiences",
    description: "No staged encounters. Just real wildlife, real villages, and real sunsets over the delta.",
  },
];

const STATS = [
  { value: 4102, suffix: "+", label: "Happy Travellers" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 50, suffix: "+", label: "Expert Guides" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden border-t border-border/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <FadeIn>
                <SectionHeading
                  title="Travel With Confidence."
                  subtitle="We believe in honest tourism. No fake urgency, no fabricated reviews — just genuine experiences in the wild."
                  eyebrow="Our Ethos"
                />
              </FadeIn>

              {/* Animated Stats inside the sticky sidebar */}
              <FadeIn>
                <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-16 pt-12 border-t border-border/60">
                  {STATS.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-4xl lg:text-5xl font-bold font-heading text-primary mb-3">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Column (List) */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <StaggerContainer>
              <div className="flex flex-col border-t border-border/60">
                {FEATURES.map((feature, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-10 sm:py-14 border-b border-border/60 hover:border-primary/40 transition-colors duration-500">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full border border-border/50 flex items-center justify-center text-accent/50 group-hover:bg-accent/5 group-hover:text-accent group-hover:border-accent/20 group-hover:scale-105 transition-all duration-500">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-foreground tracking-tight">{feature.title}</h3>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
