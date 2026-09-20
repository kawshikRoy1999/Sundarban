import React from "react";
import { Metadata } from "next";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore the islands, watchtowers, and villages of the Sundarbans.",
};

export default function DestinationsPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Sundarban Destinations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the unique locations that make up this incredible mangrove ecosystem.
          </p>
        </div>
      </div>
      <DestinationsSection />
      <FinalCta />
    </>
  );
}
