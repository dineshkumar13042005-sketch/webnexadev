"use client";

import React from "react";
import { Sparkles, Compass, Smartphone, Zap, Cpu } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6 text-[#8B5CF6]" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-[#06B6D4]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#F59E0B]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="tech-grid-pattern absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#A78BFA]">
              WHY WEBNEXADEV
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            More Than a Website. A Solution for Your Business.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We focus on tangible outcomes: faster load times, seamless user journeys, and direct channels that connect your prospective customers with you.
          </p>
        </ScrollReveal>

        {/* 4 Feature Blocks with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {SITE_CONFIG.whyChooseUs.map((item, index) => (
            <StaggerItem key={index} distance={30}>
              <div className="group relative rounded-2xl bg-[#111827]/70 border border-white/10 p-6 sm:p-7 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between h-full">
                <div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:bg-white/10 transition-colors">
                    {getIcon(item.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Core Principle</span>
                  <span className="font-mono text-slate-400">0{index + 1}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
