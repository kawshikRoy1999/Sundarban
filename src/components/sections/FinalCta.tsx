"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, MagneticButton } from "@/components/ui/Animations";

export function FinalCta() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1561731216-c3a4d4b57e23?q=80&w=2000&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,124,49,0.15),transparent_60%)]" />

      <Container className="relative z-10 max-w-4xl text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Sundarban Story
              <br />
              <span className="text-accent">Starts Here.</span>
            </h2>
            <p className="text-white/75 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Tell us your preferred dates and group size. We&apos;ll craft the perfect experience
              for you — honestly and transparently.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-base px-8 shadow-lg shadow-accent/20"
                  asChild
                >
                  <Link href="/contact">
                    <Calendar className="w-5 h-5" />
                    Plan My Trip
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 text-base px-8 text-white border-white/30 hover:bg-white hover:text-primary transition-all"
                  asChild
                >
                  <a
                    href="https://wa.me/919876543210?text=Hi, I would like to plan a trip to Sundarban."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}
