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
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Travel With Confidence"
            subtitle="We believe in honest tourism. No fake urgency, no fabricated reviews — just genuine experiences in the wild."
            eyebrow="Why Choose Us"
            centered
            className="mb-16"
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FEATURES.map((feature, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Animated Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-8 rounded-3xl bg-primary text-white">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold font-heading text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
