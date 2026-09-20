"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/Animations";

const FAQS = [
  {
    title: "What is the best time to visit the Sundarbans?",
    content:
      "The ideal season is October to March, when the weather is cool and dry, and wildlife is most active around waterholes. The monsoon season (June–September) brings heavy rain and limited forest access. Winter mornings offer the best chance of tiger pugmark sightings.",
  },
  {
    title: "What is included in the package?",
    content:
      "Our packages typically include pickup and drop from Kolkata (Canning/Godkhali), boat safari, forest entry fees, accommodation in eco-resorts, all meals (authentic Bengali cuisine), experienced local guides, and cultural programmes. Check individual packages for exact inclusions.",
  },
  {
    title: "Where does the tour start?",
    content:
      "Most tours start from Kolkata with a morning pickup. You'll travel to Godkhali via road, then board our boats into the Sundarbans. The total journey from Kolkata to the forest takes approximately 3–4 hours.",
  },
  {
    title: "What should I carry?",
    content:
      "Light cotton clothing, comfortable walking shoes, sunscreen, insect repellent, binoculars, a camera with a zoom lens, personal medication, and a light jacket for cool winter mornings. Avoid bright colours in the forest.",
  },
  {
    title: "How does booking work?",
    content:
      "Enquire via WhatsApp or our contact form. Once dates and requirements are confirmed, we send a secure payment link. A 30% advance confirms your spot; the balance is due before the tour starts.",
  },
  {
    title: "What is the cancellation policy?",
    content:
      "Full refund if cancelled 15+ days before departure. 50% refund for 7–14 days notice. No refund for cancellations under 7 days. Tours cancelled due to extreme weather are fully rescheduled or refunded.",
  },
  {
    title: "Is the tour suitable for families?",
    content:
      "Absolutely. Families with children aged 5+ are welcome. The boat is stable and safe, the resorts are comfortable, and our guides are experienced with family groups. Many of our best reviews come from families.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <Container className="max-w-4xl">
        <FadeIn>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your Sundarban adventure."
            eyebrow="Got Questions?"
            centered
            className="mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion items={FAQS} />
        </FadeIn>
      </Container>
    </section>
  );
}
