import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/package/PackageCard";
import { PACKAGES } from "@/data/packages";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Explore our transparent, authentically crafted Sundarban tour packages from 1 to 3 days.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-primary-foreground border-b border-primary/20">
        <Container>
          <SectionHeading 
            title="Sundarban Tour Packages"
            subtitle="Carefully crafted itineraries for individuals, families, and wildlife enthusiasts. Transparent pricing with no hidden costs."
            eyebrow="Find Your Journey"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />
        </Container>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>

          {/* Custom Package Callout */}
          <div className="rounded-3xl bg-muted/40 border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">
                Tailored Experiences
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Need a Custom or Group Itinerary?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Planning a family reunion, birdwatching expedition, or corporate retreat? We can customize
                private boat charters, special dietary menus, and flexible dates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/919876543210?text=Hi, I would like to request a custom Sundarban itinerary for my group."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-700 text-white font-medium px-6 py-3.5 text-sm hover:bg-green-800 transition-colors shadow-sm"
              >
                Custom WhatsApp Quote
              </a>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
