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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
