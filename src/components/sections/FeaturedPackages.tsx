"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackageCard } from "@/components/package/PackageCard";
import { PACKAGES } from "@/data/packages";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

export function FeaturedPackages() {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Choose Your Sundarban Story"
            subtitle="From dawn safaris to overnight expeditions — every package is crafted for authentic experiences."
            eyebrow="Tours & Packages"
            centered
            className="mb-14 md:mb-16"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.slice(0, 3).map((pkg) => (
            <StaggerItem key={pkg.id}>
              <PackageCard packageData={pkg} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
