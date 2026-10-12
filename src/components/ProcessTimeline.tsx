"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquareText } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function ProcessTimeline() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi WebnexaDev! I'd like to discuss a new project and understand the timeline."
  );

  return (
    <section id="process" className="relative py-20 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background glow orb */}
      <div className="glow-orb-purple w-[600px] h-[600px] top-1/2 -right-48 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05} className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#06B6D4]">
              HOW WE WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-5">
            A Clear Process. From Idea to Launch.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed px-2">
            Transparent milestones, rapid feedback loops, and structured development from our first discovery chat to post-launch support.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative mb-12 sm:mb-16">
          
          {/* Animated Connecting Line on Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#10B981] origin-left z-0"
          />

          {/* Animated Vertical Line on Mobile Phone View */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute left-9 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#10B981] origin-top z-0"
          />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          >
            {SITE_CONFIG.processSteps.map((step, index) => (
              <StaggerItem key={index} distance={30}>
                <div className="group relative flex flex-col p-5 sm:p-6 rounded-2xl bg-[#111827]/90 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl backdrop-blur-md h-full">
                  {/* Step indicator node */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] p-[1.5px] shadow-lg shadow-[#8B5CF6]/20 shrink-0">
                      <div className="w-full h-full rounded-[10px] bg-[#0B0F19] flex items-center justify-center font-mono font-bold text-sm sm:text-base text-white group-hover:bg-[#111827] transition-colors">
                        {step.step}
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Phase {index + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Timeline Bottom CTA with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.2} className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#06B6D4] hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageSquareText className="w-4 h-4" />
            <span>Let&apos;s Discuss Your Project</span>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
