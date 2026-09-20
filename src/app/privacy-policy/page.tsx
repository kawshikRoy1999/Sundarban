import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection practices of Wild Bengal Sundarban Tourism.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            At Wild Bengal Sundarban Tourism, we respect your privacy and are committed to protecting the personal information you share with us.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">1. Information We Collect</h2>
          <p>
            When you submit an enquiry, request a custom quote, or book a tour via our website or WhatsApp, we may collect your name, phone number, email address, travel dates, and party size.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">2. How We Use Your Information</h2>
          <p>
            We use this information exclusively to communicate regarding your travel plans, arrange permits from the West Bengal Forest Department, coordinate transport and accommodation, and provide customer support.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">3. Forest Permits & Government Regulations</h2>
          <p>
            The Sundarban Tiger Reserve is a protected biosphere. As required by government authorities, guest identification (such as Aadhaar, Voter ID, or Passport) is shared strictly with official forest checkpoints for legal entry permits.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">4. Data Security & Third Parties</h2>
          <p>
            We never sell, rent, or trade your personal data to commercial third parties or advertisers.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, please reach out via email at{" "}
            <a href="mailto:hello@wildbengal.example.com" className="text-accent underline">hello@wildbengal.example.com</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
