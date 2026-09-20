import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking tours with Wild Bengal Sundarban Tourism.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            Please read these terms and conditions carefully before booking any tour with Wild Bengal Tourism. By paying the booking advance, you agree to comply with the terms below.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">1. Booking & Payment Schedule</h2>
          <p>
            A 30% advance deposit confirms your tour date and boat reservation. The remaining 70% balance is payable upon arrival at Godkhali or prior to boarding the boat. We accept UPI, bank transfer, credit/debit cards, and cash.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">2. Cancellations & Rescheduling</h2>
          <p>
            Cancellations are subject to our standard terms. For comprehensive timelines, refund calculations, and weather advisory procedures, please review our dedicated{" "}
            <Link href="/cancellation-policy" className="text-accent underline font-medium">
              Cancellation & Refund Policy
            </Link>.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">3. Nature & Wildlife Sightings</h2>
          <p>
            The Sundarbans is a wild, unfenced mangrove biosphere spanning thousands of square kilometres. While our guides are highly experienced at reading pugmarks and animal calls, sightings of wildlife—including the Royal Bengal Tiger—depend purely on nature and cannot be promised or guaranteed.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">4. Forest Regulations & Eco Conduct</h2>
          <p>
            Guests must follow the instructions of the certified forest guide and boat crew. In adherence to West Bengal Forest Department rules, loud music, discarding plastic in water channels, feeding animals, and disembarking at non-designated banks are strictly forbidden.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">5. Data & Privacy</h2>
          <p>
            For information regarding how we handle your personal data and government permits, please read our{" "}
            <Link href="/privacy-policy" className="text-accent underline font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </Container>
    </div>
  );
}
