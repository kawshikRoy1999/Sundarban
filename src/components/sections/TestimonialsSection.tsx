"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Stories From Our Guests"
            subtitle="Real reviews from real travellers. No fabrication, no embellishment."
            eyebrow="Testimonials"
            centered
            className="mb-16"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card border border-border/50 p-8 rounded-3xl flex flex-col h-full shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-500 relative"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-accent/15 absolute top-6 right-6" />

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-foreground/80 italic flex-1 mb-6 leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </blockquote>

                <div className="mt-auto border-t border-border/50 pt-5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-accent font-semibold bg-accent/10 px-3 py-1.5 rounded-full">
                    {testimonial.package}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
