import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission to provide authentic, transparent, and eco-friendly tours to the Sundarbans.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story in the Mangroves"
                eyebrow="About Us"
                className="mb-6"
              />
              <div className="prose prose-lg text-muted-foreground prose-p:leading-relaxed">
                <p>
                  We started with a simple belief: the Sundarbans is too extraordinary to be sold
                  through misleading promises and hidden charges. Our goal is to offer authentic,
                  transparent, and unforgettable experiences in the world&apos;s largest mangrove forest.
                </p>
                <p>
                  As locals to this region, we understand the delicate balance between tourism and
                  conservation. We know the tides, the seasonal patterns, the best creeks for
                  wildlife sightings, and the village stories that no guidebook will ever tell you.
                </p>
                <p>
                  When you travel with us, you are not just a tourist — you are a guest
                  exploring our home. And we take that responsibility seriously.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Panthera_tigris_tigris.jpg"
                alt="Local boat navigating Sundarban mangrove waterways"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <FinalCta />
    </>
  );
}
