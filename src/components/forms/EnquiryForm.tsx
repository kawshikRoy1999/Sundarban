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
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // In a real app, this would send an email or save to DB.
    // The success message will hide after 5 seconds.
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
        <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
        <p>Your enquiry has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
          <input
            {...register("name")}
            id="name"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
          <input
            {...register("phone")}
            id="phone"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp Number (Optional)</label>
          <input
            {...register("whatsapp")}
            id="whatsapp"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Same as phone if left blank"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="travelDate" className="text-sm font-medium">Expected Travel Date *</label>
          <input
            {...register("travelDate")}
            id="travelDate"
            type="date"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
          {errors.travelDate && <p className="text-sm text-destructive">{errors.travelDate.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="travellers" className="text-sm font-medium">Number of Travellers *</label>
          <select
            {...register("travellers")}
            id="travellers"
            className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            <option value="">Select...</option>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3-4">3-4 Persons</option>
            <option value="5-8">5-8 Persons</option>
            <option value="9+">9+ Persons</option>
          </select>
          {errors.travellers && <p className="text-sm text-destructive">{errors.travellers.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Additional Message (Optional)</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          placeholder="Any specific requirements or questions?"
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
        {isSubmitting ? "Sending Enquiry..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
