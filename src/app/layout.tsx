import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

const hind = Hind_Siliguri({ weight: ['300', '400', '500', '600', '700'], subsets: ["latin", "bengali"], variable: "--font-sans" });
const notoSerif = Noto_Serif_Bengali({ weight: ['400', '500', '600', '700', '800'], subsets: ["latin", "bengali"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: {
    default: "Sundarban Tourism | Wild Bengal — Mangrove Luxury",
    template: "%s | Sundarban Tourism",
  },
  description: "Experience the Sundarbans through premium eco-tourism, mangrove waterways, forest safaris, and authentic local life.",
  keywords: ["Sundarban tour", "Sundarban tour package", "Sundarban tourism", "Sundarban trip", "Sundarban tour from Kolkata", "Sundarban package"],
  authors: [{ name: "Sundarban Tourism" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sundarbantourism.example.com",
    siteName: "Sundarban Tourism",
    title: "Sundarban Tourism | Wild Bengal — Mangrove Luxury",
    description: "Experience the Sundarbans through premium eco-tourism, mangrove waterways, forest safaris, and authentic local life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(hind.variable, notoSerif.variable, "min-h-screen bg-background font-sans antialiased text-foreground flex flex-col")}>
        <Navbar />
        <main className="flex-1 w-full pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
