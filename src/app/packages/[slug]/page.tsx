import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, MapPin, CheckCircle, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PACKAGES } from "@/data/packages";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pkg = PACKAGES.find(p => p.slug === resolvedParams.slug);
  if (!pkg) return { title: "Package Not Found" };
  
  return {
    title: `${pkg.name} | Sundarban Packages`,
    description: pkg.shortDescription,
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const resolvedParams = await params;
  const pkg = PACKAGES.find(p => p.slug === resolvedParams.slug);
  
  if (!pkg) {
    notFound();
  }

  // Mocking extended data that would typically be in the database
  const inclusions = [
    "Pickup and drop from Kolkata",
    "Accommodation in comfortable resort",
    "All meals (Breakfast, Lunch, Dinner, Snacks)",
    "Boat safari charges and forest entry fees",
    "Experienced local guide"
  ];
  
  const exclusions = [
    "Camera charges (if any)",
    "Personal expenses and tips",
    "Any alcoholic beverages",
    "Travel insurance"
  ];

  return (
    <article className="pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-end pb-12">
        <Image
          src={pkg.imageUrl}
          alt={pkg.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            {pkg.duration}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {pkg.name}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {pkg.shortDescription}
          </p>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="font-heading text-3xl font-bold mb-4">Overview</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  This comprehensive package is designed to give you the best of the Sundarbans. 
                  Experience the thrill of navigating through narrow creeks, observing the unique 
                  mangrove ecosystem, and immersing yourself in the local culture.
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="font-heading text-2xl font-bold mb-6">Tour Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-heading text-xl font-bold mb-4 text-green-900">What's Included</h3>
                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-green-800">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                <h3 className="font-heading text-xl font-bold mb-4 text-red-900">What's Excluded</h3>
                <ul className="space-y-3">
                  {exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-red-800">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Sticky Sidebar (Booking Summary) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border p-6 rounded-2xl shadow-sm">
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">₹{pkg.startingPrice.toLocaleString('en-IN')}</span>
                  <span className="text-muted-foreground">/ person</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-medium text-green-600">Daily Departures</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Group Size</span>
                  <span className="font-medium">Min. 2 Persons</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="w-full" size="lg" asChild>
                  <a href={`https://wa.me/919876543210?text=Hello, I want to book the ${pkg.name} package. Please share details.`} target="_blank" rel="noopener noreferrer">
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="tel:+919876543210">Call to Discuss</a>
                </Button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                No payment required right now.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
