"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { ServiceCard } from "./ServiceCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background glow orbs */}
      <div className="glow-orb-purple w-[600px] h-[600px] top-1/2 -left-64 opacity-50" />
      <div className="glow-orb-cyan w-[500px] h-[500px] bottom-10 -right-48 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#A78BFA]">
              WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Digital Solutions Built Around Your Business.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you&apos;re launching a new business, generating leads or streamlining operations, we build digital experiences designed around your goals.
          </p>
        </ScrollReveal>

        {/* 6 Premium Service Cards Grid with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SITE_CONFIG.services.map((service, index) => (
            <StaggerItem key={service.id} distance={32}>
              <ServiceCard service={service} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Honest Note with Subtle Reveal */}
        <ScrollReveal direction="up" delay={0.2} className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Note: All digital marketing and lead workflows are engineered with realistic funnel metrics, custom analytics, and conversion tracking. We never claim guaranteed ad outcomes or fabricated lead volumes.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
