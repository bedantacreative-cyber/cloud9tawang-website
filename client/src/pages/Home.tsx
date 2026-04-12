import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import InclusionsSection from "@/components/sections/InclusionsSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import BestTimeSection from "@/components/sections/BestTimeSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for aesthetic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <ItinerarySection />
      <InclusionsSection />
      <GallerySection />
      <TestimonialsSection />
      <WhyChooseSection />
      <BestTimeSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
