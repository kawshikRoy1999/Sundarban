import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="block text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl text-lg mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
