import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectEnquiryForm } from "@/components/ProjectEnquiryForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        <ProcessTimeline />
        <ProjectEnquiryForm />
        <FAQAccordion />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Fixed Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
