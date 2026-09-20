import React from "react";
import { Container } from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these terms and conditions carefully before booking a tour with us.</p>
          <h2>1. Booking & Payment</h2>
          <p>A minimum deposit is required to confirm your booking. The remaining balance must be paid before the start of the tour.</p>
          <h2>2. Cancellations</h2>
          <p>Please refer to our Cancellation Policy for detailed information on refunds.</p>
          <h2>3. Wildlife Sightings</h2>
          <p>While our experienced guides will do their best to spot wildlife, sightings of specific animals, including the Royal Bengal Tiger, are not guaranteed in their natural habitat.</p>
        </div>
      </Container>
    </div>
  );
}
