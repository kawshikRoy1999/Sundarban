"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Animations";

export function SundarbanExperience() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side with Parallax */}
          <FadeIn className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <Image
                  src="https://images.unsplash.com/photo-1614350292382-c448d0110dfa?q=80&w=2000&auto=format&fit=crop"
                  alt="Sundarban mangrove waterway at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-card p-5 rounded-2xl shadow-xl border border-border/50 z-10"
              >
                <p className="text-3xl font-bold font-heading text-primary">10,000 km²</p>
                <p className="text-sm text-muted-foreground">of mangrove wilderness</p>
              </motion.div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </FadeIn>

          {/* Content Side */}
          <div className="flex flex-col items-start order-1 lg:order-2">
            <FadeIn delay={0.2}>
              <SectionHeading
                title="A journey into a world shaped by water."
                eyebrow="MORE THAN A TOUR"
                className="mb-8"
              />
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-10">
                <p>
                  The Sundarbans is not just a forest — it is a living, breathing labyrinth of tidal rivers,
                  mudflats, and the world's largest contiguous mangrove ecosystem.
                </p>
                <p>
                  Every tide reshapes the landscape. Every dawn brings a different forest. Here, the Royal Bengal
                  Tiger swims between islands, and spotted deer drink from rivers that carry the salt of the Bay of Bengal.
                </p>
                <p>
                  Our journeys are crafted to immerse you in this UNESCO World Heritage site —
                  from the silence of the deep creeks to the vibrant life of the fishing villages.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <Button size="lg" className="px-8 gap-2 group" asChild>
                <Link href="/about">
                  Discover the Experience
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
