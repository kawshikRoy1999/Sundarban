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
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500463959177-e0869687df26?q=100&w=3840&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?q=100&w=3840&auto=format&fit=crop",
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
