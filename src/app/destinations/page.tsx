import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Eye, Compass, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DESTINATIONS } from "@/data/destinations";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Destinations & Watchtowers",
  description: "Explore Sajnekhali, Sudhanyakhali, Dobanki Canopy Walk, and Netidhopani in the Sundarbans mangrove forest.",
};

const DESTINATION_DETAILS = [
  {
    id: "1",
    name: "Sajnekhali",
    type: "Interpretation Centre & Sanctuary",
    tagline: "The Official Gateway to the Wild Mangroves",
    description:
      "Sajnekhali serves as the main entry point to the Sundarban Tiger Reserve. It houses the Mangrove Interpretation Centre, a freshwater pond visited by axis deer and monitor lizards, a crocodile pond, and a high-angle watchtower overlooking multiple water channels.",
    highlights: ["Mangrove Interpretation Museum", "Crocodile Pond", "Freshwater Drinking Spot", "Bird Sanctuary"],
    bestTime: "Early morning (7 AM - 10 AM) & late afternoon",
    wildlife: "Spotted deer, wild boars, Brahminy kites, kingfishers, saltwater crocodiles",
    imageUrl: "https://images.unsplash.com/photo-1632807515528-ddd9967acb94?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Sudhanyakhali",
    type: "Wildlife Watchtower",
    tagline: "Highest Probability Tiger Sighting Zone",
    description:
      "Sudhanyakhali is strategically positioned overlooking a large sweet-water pond where wild animals come to drink. The watchtower holds up to 25 people and provides an unobstructed vantage point across both dense foliage and open waterholes.",
    highlights: ["Sweet-water Watering Hole", "Tiger Pugmark Trails", "Covered Observation Deck", "Creek Safari Route"],
    bestTime: "Mid-day & late afternoon during low tide",
    wildlife: "Royal Bengal Tiger, spotted deer, rhesus macaques, monitor lizards, fishing cats",
    imageUrl: "https://images.unsplash.com/photo-1615824996195-f780bba7cfab?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Dobanki",
    type: "Canopy Walkway & Watchtower",
    tagline: "Walk 20 Feet Above the Mangrove Floor",
    description:
      "The Dobanki canopy walk is one of the most famous experiences in India: a 496-meter enclosed grilled walkway suspended high above the mudflats. It allows visitors to safely observe the forest from above, looking down into mangrove roots and animal feeding paths.",
    highlights: ["496m Elevated Canopy Walk", "Deer Enclosure", "Dense Forest Viewpoint", "High-tide Wildlife Viewing"],
    bestTime: "Morning between 9 AM and 1 PM",
    wildlife: "Spotted deer, wild boars, mangrove whistling ducks, eagles, monitor lizards",
    imageUrl: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Netidhopani",
    type: "Historical Ruins & Deep Forest Reserve",
    tagline: "400-Year-Old Temple in the Deep Delta",
    description:
      "Netidhopani combines raw wilderness with ancient mythology. Here stand the brick ruins of a 400-year-old Shiva temple linked to the legendary Behula-Lakhindar folklore. It is located deep inside the core delta zone with limited daily visitor permits.",
    highlights: ["400-Year-Old Shiva Temple Ruins", "Sweetwater Pond", "Core Forest Boundary", "Deep Delta Creek Safari"],
    bestTime: "Winter months (Nov - Feb), tide-dependent",
    wildlife: "Royal Bengal Tiger, estuarine crocodiles, white-bellied sea eagles, otters",
    imageUrl: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=100&w=3840&auto=format&fit=crop",
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-primary-foreground pt-32 pb-20 border-b border-primary/20">
        <Container>
          <div className="max-w-3xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-3 block">
              Explore the Delta
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sundarban Destinations & Watchtowers
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Every watchtower and creek in the Sundarbans tells a different story. Discover where we go,
              what you can expect to observe, and why each location is unique.
            </p>
          </div>
        </Container>
      </section>

      {/* Destination Cards */}
      <section className="py-20 bg-background">
        <Container>
          <div className="flex flex-col gap-16 md:gap-24">
            {DESTINATION_DETAILS.map((dest, idx) => (
              <div
                key={dest.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 md:pb-24 border-b border-border/60 last:border-0 last:pb-0"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={dest.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {dest.type}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 flex flex-col items-start ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2">
                    0{dest.id} • {dest.tagline}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {dest.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                    {dest.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="w-full bg-muted/40 rounded-2xl p-5 mb-6 space-y-3">
                    <div className="flex items-start gap-2.5 text-sm">
                      <Eye className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        <strong className="font-semibold">Key Wildlife:</strong> {dest.wildlife}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-sm">
                      <Calendar className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        <strong className="font-semibold">Best Visiting Hours:</strong> {dest.bestTime}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {dest.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-card border border-border px-3 py-1.5 rounded-full text-foreground/80 font-medium"
                      >
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        {h}
                      </span>
                    ))}
                  </div>

                  <Button className="gap-2 group shadow-sm" asChild>
                    <Link href="/packages">
                      Explore Tours Visiting {dest.name}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
