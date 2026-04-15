import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PackagesSection from "@/components/sections/PackagesSection";
import CBTSection from "@/components/sections/CBTSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import InclusionsSection from "@/components/sections/InclusionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import BestTimeSection from "@/components/sections/BestTimeSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loading screen once per session to avoid annoying UX
    const hasLoaded = sessionStorage.getItem("cloudnine_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      setTimeout(() => {
        if (window.location.hash) {
          document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("cloudnine_loaded", "true");
      if (window.location.hash) {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }
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
      <CBTSection />
      <ItinerarySection />
      <InclusionsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <BestTimeSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
