"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, IndianRupee, MapPin, ArrowRight } from "lucide-react";
import { Package } from "@/data/packages";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface PackageCardProps {
  packageData: Package;
}

export function PackageCard({ packageData }: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-primary/5 shadow-premium hover:shadow-premium-hover transition-all duration-500 relative"
    >
      {/* Subtle inner border for depth */}
      <div className="absolute inset-0 rounded-2xl border border-white/40 z-20 pointer-events-none mix-blend-overlay" />

      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={packageData.imageUrl}
          alt={packageData.name}
          fill
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {packageData.isPopular && (
          <Badge className="absolute top-4 left-4 z-10 shadow-lg" variant="accent">
            Most Popular
          </Badge>
        )}
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Duration chip on image */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-full text-xs font-bold">
          <Clock className="w-3.5 h-3.5" />
          {packageData.duration}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1 font-bold text-accent text-lg mb-2">
          <IndianRupee className="w-4 h-4" />
          <span>{packageData.startingPrice.toLocaleString("en-IN")}</span>
          <span className="text-xs font-normal text-muted-foreground ml-1">/ person</span>
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
          {packageData.name}
        </h3>

        <p className="text-muted-foreground text-[15px] leading-relaxed line-clamp-2 mb-6 flex-1">
          {packageData.shortDescription}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {packageData.highlights.slice(0, 3).map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 bg-primary/5 text-primary text-xs px-2.5 py-1 rounded-full font-medium"
              >
                <MapPin className="w-3 h-3 text-accent" />
                {highlight}
              </span>
            ))}
            {packageData.highlights.length > 3 && (
              <span className="inline-flex items-center text-xs text-muted-foreground px-1 py-1">
                +{packageData.highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <Button className="flex-1 gap-2 group/btn" asChild>
            <Link href={`/packages/${packageData.slug}`}>
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="text-green-700 border-green-700/30 hover:bg-green-50"
            asChild
          >
            <a
              href={`https://wa.me/919876543210?text=Hi, I am interested in the ${packageData.name} package.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
