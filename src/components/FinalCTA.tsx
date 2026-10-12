"use client";

import React from "react";
import { ArrowRight, Sparkles, MessageSquareText } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { ScrollReveal } from "./ScrollReveal";

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.contact.finalCtaMessage);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Multi-Gradient Bloom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/10 to-[#06B6D4]/10 pointer-events-none" />
      <div className="glow-orb-purple w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Container with scroll reveal */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1E1B4B]/50 via-[#111827]/90 to-[#0B0F19]/90 border border-[#8B5CF6]/30 p-8 sm:p-14 lg:p-16 shadow-2xl backdrop-blur-2xl overflow-hidden">
            
            {/* Subtle top light bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent opacity-75" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 mb-6">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white">
                READY TO GROW?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              Let&apos;s Build Something That Moves Your Business Forward.
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
              From your first website to custom business software, WebnexaDev helps turn your ideas into practical digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] shadow-xl shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 mt-8">
              Direct consultation with our technical team • No sales pressure • Clear proposal
            </p>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
