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
  "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561731216-c3a4d4b57e23?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614350292382-c448d0110dfa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
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
