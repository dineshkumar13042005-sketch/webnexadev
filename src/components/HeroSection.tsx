"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Activity,
  Code2,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { WhatsAppLinkButton } from "./WhatsAppButton";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-16 sm:pt-40 sm:pb-28 overflow-hidden tech-grid-pattern flex items-center"
    >
      {/* Background glow orbs */}
      <div className="glow-orb-purple w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] -top-24 -left-24 sm:-top-32 sm:-left-32 opacity-70 pointer-events-none" />
      <div className="glow-orb-cyan w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] top-1/4 -right-36 sm:-right-48 opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#8B5CF6]/15 to-[#06B6D4]/15 border border-[#8B5CF6]/30 mb-5 sm:mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#06B6D4]">
                {SITE_CONFIG.brand.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6">
              We Build Digital Experiences That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#06B6D4]">
                Grow Businesses.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              {SITE_CONFIG.brand.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6 sm:mb-8">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] shadow-lg shadow-[#8B5CF6]/30 hover:shadow-xl hover:shadow-[#8B5CF6]/45 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <WhatsAppLinkButton
                message={SITE_CONFIG.contact.defaultHeroMessage}
                size="lg"
                variant="solid"
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </WhatsAppLinkButton>
            </div>

            {/* Trust statement */}
            <div className="flex items-center gap-2.5 pt-4 border-t border-white/10 text-slate-400 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0" />
              <span>{SITE_CONFIG.brand.trustStatement}</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Custom Dashboard & Tech Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Outer Container with Glow */}
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
              
              {/* Backlight halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#8B5CF6]/30 via-[#6366F1]/20 to-[#06B6D4]/30 blur-2xl opacity-60 pointer-events-none" />

              {/* Main Window Container */}
              <div className="relative rounded-2xl bg-[#111827]/95 border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Header with macOS controls & live badge */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3.5 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PRODUCTION ACTIVE</span>
                  </div>
                </div>

                {/* Dashboard Metrics Strip */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                  <div className="bg-[#0B0F19]/80 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1">
                      <span>Speed Score</span>
                      <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                      99<span className="text-[10px] sm:text-xs text-slate-400 font-normal">/100 LCP</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-[#06B6D4] h-full w-[99%]" />
                    </div>
                  </div>

                  <div className="bg-[#0B0F19]/80 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] sm:text-xs mb-1">
                      <span>Enquiry Routing</span>
                      <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#06B6D4]" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                      Direct<span className="text-[10px] sm:text-xs text-[#25D366] font-normal">WhatsApp</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 mt-1 flex items-center gap-1 truncate">
                      <span className="text-emerald-400">✓ Instant</span> prefilled flow
                    </div>
                  </div>
                </div>

                {/* CRM & Pipeline Interactive Visual Card */}
                <div className="bg-[#0B0F19]/90 rounded-xl p-3 sm:p-4 border border-white/10 mb-3.5 sm:mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5CF6]" />
                      <span className="text-[11px] sm:text-xs">CRM Sales Pipeline</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#A78BFA]">
                      Automated
                    </span>
                  </div>

                  {/* Pipeline Stage bars */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                        <span>New Inbound Enquiries</span>
                        <span className="text-white font-mono font-medium">100% Captured</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 sm:h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] h-full w-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mb-1">
                        <span>WhatsApp Hand-off & Follow-up</span>
                        <span className="text-emerald-400 font-mono font-medium">0s Delay</span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 sm:h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10">
                    <Code2 className="w-3 h-3 text-[#A78BFA]" /> Next.js App Router
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10">
                    <Zap className="w-3 h-3 text-[#06B6D4]" /> Meta Ads Ready
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Custom CRM
                  </span>
                </div>

                {/* Mobile-integrated Lead Generation Strip */}
                <div className="sm:hidden mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    <span>Zero-friction WhatsApp enquiries</span>
                  </span>
                  <span className="text-[#06B6D4] font-semibold">1-Click</span>
                </div>
              </div>

              {/* Floating Widget 1: Client Conversion Node (Desktop screens) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#111827] border border-white/15 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Lead Generation Ready</div>
                  <div className="text-[11px] text-slate-400">Zero-friction WhatsApp enquiries</div>
                </div>
              </motion.div>

              {/* Floating Widget 2: Speed Badge (Desktop screens) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-[#111827] border border-white/15 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5 z-20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
                <span className="text-xs font-medium text-slate-200">
                  Engineered for Conversion
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
