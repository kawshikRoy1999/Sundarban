"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Map, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/Animations";

const TRUST_ITEMS = [
  { icon: <Map className="w-5 h-5" />, title: "Local Tour Experience", subtitle: "স্থানীয় ভ্রমণ অভিজ্ঞতা" },
  { icon: <Star className="w-5 h-5" />, title: "Verified Reviews", subtitle: "যাচাইকৃত মতামত" },
  { icon: <ShieldCheck className="w-5 h-5" />, title: "Transparent Packages", subtitle: "স্বচ্ছ প্যাকেজ" },
  { icon: <MessageCircle className="w-5 h-5" />, title: "Direct WhatsApp Support", subtitle: "সরাসরি হোয়াটসঅ্যাপ সাপোর্ট" },
];

export function TrustStrip() {
  return (
    <div className="bg-primary text-primary-foreground py-5 border-b border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-3 group"
            >
              <span className="text-accent group-hover:scale-110 transition-transform">{item.icon}</span>
              <div className="flex flex-col">
                <span className="font-medium text-[13px] sm:text-sm">{item.title}</span>
                <span className="text-[10px] sm:text-[11px] text-white/60 font-sans">{item.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
