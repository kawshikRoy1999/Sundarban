import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View authentic photographs of the Sundarbans, our tours, and the wildlife.",
};

const IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sundarbans_National_Park%2C_India.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger._Huge_bengal_tiger_male_from_national_park_in_India._Real_wildlife.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/30/Sundarbans_river_network.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Panthera_tigris_tigris.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Sundarban_Tiger_Reserve.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-background">
        <Container>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Authentic moments captured during our tours. Real wildlife, real sunsets, real Sundarbans.
            </p>
          </div>

          <ImageGallery images={IMAGES} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
