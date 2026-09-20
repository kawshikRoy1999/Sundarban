import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us to plan your Sundarban trip. We are available via WhatsApp, phone, and email.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-background">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading 
            title="Let's Plan Your Journey"
            subtitle="Have questions? Our local experts are ready to help you plan the perfect Sundarban itinerary."
            eyebrow="Contact Us"
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Phone / WhatsApp</p>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">+91 98765 43210</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@wildbengal.example.com" className="text-muted-foreground hover:text-accent transition-colors">hello@wildbengal.example.com</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-muted-foreground">Godhkhali Ferry Ghat, Gosaba<br />South 24 Parganas, West Bengal 743370</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Sun: 8:00 AM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="font-heading text-2xl font-bold mb-6">Send an Enquiry</h3>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
