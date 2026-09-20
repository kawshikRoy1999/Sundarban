"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  whatsapp: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  travelDate: z.string().min(1, "Travel date is required."),
  travellers: z.string().min(1, "Number of travellers is required."),
  package: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Enquiry data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const handleWhatsAppEnquiry = () => {
    const values = watch();
    const name = values.name || "Traveller";
    const date = values.travelDate || "Flexible";
    const travellersCount = values.travellers || "1-2";
    const msg = values.message ? ` Note: ${values.message}` : "";
    const text = encodeURIComponent(
      `Hi Wild Bengal, I'd like to plan a Sundarban trip.\n• Name: ${name}\n• Travel Date: ${date}\n• Travellers: ${travellersCount}${msg}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center">
        <h3 className="font-heading text-2xl font-bold mb-2">Enquiry Received!</h3>
        <p className="mb-4">Thank you for reaching out. Our local travel specialist will contact you within 2 business hours.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-sm text-green-800 font-semibold underline hover:text-green-900"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
          <input
            {...register("name")}
            id="name"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="e.g. Priya Sharma"
          />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="e.g. priya@example.com"
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="e.g. +91 98765 43210"
          />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">WhatsApp Number (Optional)</label>
          <input
            {...register("whatsapp")}
            id="whatsapp"
            type="tel"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Leave blank if same as phone"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="travelDate" className="text-sm font-medium text-foreground">Expected Travel Date *</label>
          <input
            {...register("travelDate")}
            id="travelDate"
            type="date"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          />
          {errors.travelDate && <p className="text-xs text-destructive mt-1">{errors.travelDate.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="travellers" className="text-sm font-medium text-foreground">Number of Travellers *</label>
          <select
            {...register("travellers")}
            id="travellers"
            className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="">Select party size...</option>
            <option value="1 Person (Solo)">1 Person (Solo)</option>
            <option value="2 Persons (Couple)">2 Persons (Couple)</option>
            <option value="3-4 Persons (Small Group / Family)">3–4 Persons (Family)</option>
            <option value="5-8 Persons (Group)">5–8 Persons (Group)</option>
            <option value="9+ Persons (Large Group)">9+ Persons (Corporate / Large Group)</option>
          </select>
          {errors.travellers && <p className="text-xs text-destructive mt-1">{errors.travellers.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Special Requests / Preferences (Optional)</label>
        <textarea
          {...register("message")}
          id="message"
          rows={3}
          className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="e.g. Vegetarian food preferences, senior citizens travelling, private boat requirements..."
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto px-8 h-12 text-base font-semibold" disabled={isSubmitting}>
          {isSubmitting ? "Sending Enquiry..." : "Submit Enquiry"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleWhatsAppEnquiry}
          className="w-full sm:w-auto px-6 h-12 text-green-700 border-green-600/30 hover:bg-green-50 text-base"
        >
          Send via WhatsApp Directly
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground">
        🔒 We respect your privacy. Your information is never sold or spammed.
      </p>
    </form>
  );
}
