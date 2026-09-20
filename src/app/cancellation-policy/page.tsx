import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Clear and transparent cancellation and refund guidelines for Wild Bengal Sundarban tours.",
};

export default function CancellationPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">Cancellation & Refund Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Transparent and fair policies for every traveller.</p>

        <div className="prose prose-lg text-muted-foreground space-y-6">
          <p>
            We believe in honest tourism without hidden penalties. Our cancellation schedule is transparently outlined below:
          </p>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-4 text-left">Time of Cancellation</th>
                  <th className="p-4 text-left">Refund Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-card">
                  <td className="p-4">15 or more days before tour departure</td>
                  <td className="p-4 font-semibold text-green-700">100% full refund (minus permit fees)</td>
                </tr>
                <tr className="bg-card">
                  <td className="p-4">7 to 14 days before tour departure</td>
                  <td className="p-4 font-semibold text-amber-700">50% refund</td>
                </tr>
                <tr className="bg-card">
                  <td className="p-4">Less than 7 days before tour departure</td>
                  <td className="p-4 font-semibold text-destructive">No refund (rescheduling possible based on boat availability)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">Weather & Cyclonic Warnings</h2>
          <p>
            The Sundarbans delta is subject to tidal currents and coastal weather alerts. If the West Bengal Forest Department or Maritime Authority closes the river channels due to cyclone warnings or adverse weather, tours will be rescheduled to your preferred dates at no extra cost, or refunded in full.
          </p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8 mb-3">How to Request Cancellation</h2>
          <p>
            To initiate a cancellation or request date rescheduling, send a WhatsApp message to{" "}
            <a href="https://wa.me/919876543210" className="text-accent underline font-medium">+91 98765 43210</a>{" "}
            with your booking reference and passenger names. Refunds are processed back to the original payment method within 5–7 business days.
          </p>
        </div>
      </Container>
    </div>
  );
}
