import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, CheckCircle, XCircle, Calendar, MessageCircle, Phone, ArrowLeft, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PACKAGES } from "@/data/packages";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pkg = PACKAGES.find((p) => p.slug === resolvedParams.slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.name} | Sundarban Tour Packages`,
    description: pkg.shortDescription,
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const resolvedParams = await params;
  const pkg = PACKAGES.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  const inclusions = [
    "Pickup and drop from Kolkata (AC vehicle)",
    "Deluxe accommodation in eco-resort with modern amenities",
    "All freshly cooked Bengali meals (Breakfast, Lunch, Evening snacks, Dinner)",
    "Motorboat safari with licensed government forest permits",
    "Certified naturalist and experienced local guide",
    "Evening tribal folk dance and cultural performance",
    "All entrance fees and camera clearances",
  ];

  const exclusions = [
    "Personal expenses, room service, and laundry",
    "Tips and gratuities for boat crew and guide",
    "Any alcoholic beverages",
    "Travel insurance (can be arranged upon request)",
  ];

  const sampleItinerary = [
    {
      day: "Day 1",
      title: "Journey to the Delta & Mangrove Sunset",
      description:
        "Morning pickup from Kolkata and scenic road trip to Godkhali Ferry Ghat. Board the motorized safari boat, enjoy fresh coconut water and breakfast. Cruise across the Hogol, Gomor, and Durgaduani rivers into the resort. Check-in, authentic Bengali lunch, and afternoon safari cruise along the bird sanctuary. Sunset over the river, followed by an evening tribal folk dance.",
    },
    {
      day: "Day 2",
      title: "Deep Creek Safari & Watchtowers",
      description:
        "Early morning tea and board boat before sunrise. Navigate the mist-covered creeks of Pirkhali and Gazikhali. Visit Sajnekhali Watchtower and Mangrove Museum, then continue to Sudhanyakhali Watchtower to observe sweetwater pond wildlife. Fresh lunch served onboard. Afternoon canopy walk at Dobanki 20 feet above ground level. Evening return to resort or return journey depending on package duration.",
    },
    ...(pkg.duration.includes("3")
      ? [
          {
            day: "Day 3",
            title: "Village Walk & Historical Netidhopani",
            description:
              "Morning guided walk through local village to observe honey collectors (Maules) and traditional life. Cruise to historical Netidhopani temple ruins and sweetwater watchtower deep in the core zone. Farewell lunch onboard and cruise back to Godkhali, followed by return drive to Kolkata.",
          },
        ]
      : []),
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Wild Bengal! I am interested in the "${pkg.name}" (${pkg.duration}, starting ₹${pkg.startingPrice}/person). Please share availability and customized itinerary.`
  );

  return (
    <article className="pb-24">
      {/* Breadcrumbs */}
      <div className="bg-primary/95 text-primary-foreground/80 py-3 pt-24 text-xs border-b border-white/10">
        <Container>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-white font-medium truncate">{pkg.name}</span>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full flex items-end pb-12 overflow-hidden">
        <Image
          src={pkg.imageUrl}
          alt={pkg.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

        <Container className="relative z-10">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all packages
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              {pkg.duration}
            </span>
            <span className="bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Daily Departures
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {pkg.name}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed">
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
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">Overview</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  Experience the true magic of the world&apos;s largest mangrove delta. This tour is planned
                  with low-impact eco boats, authentic local Bengali dining, and guided observation from
                  official forest watchtowers. You will cruise the narrowest tidal creeks, discover village
                  culture, and learn the folklore of Bonbibi — the protector goddess of the forest.
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-card border border-border p-6 md:p-8 rounded-3xl">
              <h2 className="font-heading text-2xl font-bold mb-6 text-foreground">Tour Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm md:text-base">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Day-by-Day Itinerary */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-6">
                {sampleItinerary.map((step, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-10 border-l-2 border-accent/40 pb-6 last:pb-0">
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      {step.day}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-green-50/60 p-6 md:p-8 rounded-3xl border border-green-200">
                <h3 className="font-heading text-xl font-bold mb-5 text-green-950 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-700" />
                  What&apos;s Included
                </h3>
                <ul className="space-y-3.5">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-green-900 leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-700 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-card p-6 md:p-8 rounded-3xl border border-border">
                <h3 className="font-heading text-xl font-bold mb-5 text-foreground flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  What&apos;s Excluded
                </h3>
                <ul className="space-y-3.5">
                  {exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Trust note */}
            <div className="bg-muted/40 p-6 rounded-2xl flex items-start gap-4">
              <Shield className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground block font-semibold mb-1">Eco-Tourism & Safety Guarantee</strong>
                All boats are equipped with life jackets, first-aid kits, and run by licensed delta boatmasters. We strictly follow Forest Department guidelines: no loud music, no plastic dumping, and total respect for wildlife.
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (Booking Summary) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-card border border-border p-6 md:p-8 rounded-3xl shadow-lg shadow-primary/5">
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1">
                  Starting from
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-primary">₹{pkg.startingPrice.toLocaleString("en-IN")}</span>
                  <span className="text-muted-foreground text-sm">/ person</span>
                </div>
                <p className="text-xs text-green-700 font-medium mt-1">✓ No hidden forest or boat charges</p>
              </div>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold text-foreground">{pkg.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="font-semibold text-green-700">Daily Departures</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Pickup Location</span>
                  <span className="font-semibold text-foreground">Kolkata / Canning</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Group Size</span>
                  <span className="font-semibold text-foreground">Solo, Couples & Groups</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button className="w-full gap-2 h-12 text-base font-semibold shadow-md shadow-accent/20" size="lg" asChild>
                  <a
                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2 h-12 text-base" size="lg" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 text-accent" />
                    Call to Discuss
                  </a>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                ⚡ Instant response • Free date modification
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Mobile Booking Sticky Bar */}
      <div className="lg:hidden fixed bottom-14 left-0 right-0 z-20 bg-background/98 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-xs text-muted-foreground block">Starting price</span>
          <span className="text-lg font-bold text-primary">₹{pkg.startingPrice.toLocaleString("en-IN")}</span>
          <span className="text-xs text-muted-foreground">/person</span>
        </div>
        <Button size="sm" className="gap-2 h-10 px-5 text-xs font-semibold shadow-md" asChild>
          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </Button>
      </div>
    </article>
  );
}
