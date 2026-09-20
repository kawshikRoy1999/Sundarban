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
  "https://images.unsplash.com/photo-Gz2oZP23j1s?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo--iZV3CqT7LM?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-K1h1ziJqtNc?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-cNXyaIFyTNg?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-DJ4vjcD0s0I?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-nZ2cEh8Qzcg?q=100&w=3840&auto=format&fit=crop",
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
