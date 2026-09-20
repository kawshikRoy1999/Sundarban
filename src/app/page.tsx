import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FeaturedPackages } from "@/components/sections/FeaturedPackages";
import { SundarbanExperience } from "@/components/sections/SundarbanExperience";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SafariExperience } from "@/components/sections/SafariExperience";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedPackages />
      <SundarbanExperience />
      <SafariExperience />
      <WhyChooseUs />
      <DestinationsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
