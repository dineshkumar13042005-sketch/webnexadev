"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Building,
  CheckCircle2,
  MessageSquareText,
  Eye,
  Smartphone,
  Laptop,
  Wifi,
  Battery,
} from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { SivaPreviewModal } from "./SivaPreviewModal";
import { ScrollReveal } from "./ScrollReveal";

export function PortfolioSection() {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [activeDeviceView, setActiveDeviceView] = useState<"phone" | "desktop">("phone");
  const featured = SITE_CONFIG.featuredProject;
  const whatsappUrl = buildWhatsAppUrl(featured.whatsappMessage);

  return (
    <section id="portfolio" className="relative py-20 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb-cyan w-[500px] h-[500px] -top-32 right-1/4 opacity-40 pointer-events-none" />
      <div className="glow-orb-purple w-[600px] h-[600px] -bottom-32 left-1/4 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05} className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#06B6D4]">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-5">
            Turning Business Needs Into Digital Experiences.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed px-2">
            Real production solutions built for real businesses. See how we helped Siva Construction establish a strong, professional online presence in Coimbatore.
          </p>
        </ScrollReveal>

        {/* Featured Project Showcase Container with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <div className="rounded-3xl bg-[#111827]/80 border border-white/10 p-5 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left: Project Details & Information Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      {featured.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {featured.location}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30">
                      {featured.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                    {featured.client}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  {/* Project Capabilities */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Verified Project Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {featured.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsPreviewModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#06B6D4]" />
                    <span>View Interactive Preview</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-all duration-200"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Build a Similar Website</span>
                  </a>
                </div>
              </div>

              {/* Right: Interactive Desktop / Phone View Mockup Frame */}
              <div className="lg:col-span-7 flex flex-col items-center">
                
                {/* Viewport Switcher Controls */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-black/50 border border-white/10 mb-4 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveDeviceView("phone")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeDeviceView === "phone"
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Phone View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDeviceView("desktop")}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                      activeDeviceView === "desktop"
                        ? "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Desktop View</span>
                  </button>
                </div>

                {/* DEVICE PREVIEW: Phone View Frame */}
                {activeDeviceView === "phone" ? (
                  <div className="relative w-full max-w-[320px] rounded-[38px] border-4 border-slate-700 bg-[#0B0F19] p-3.5 shadow-2xl transition-all duration-300">
                    
                    {/* Phone Dynamic Island / Speaker Notch */}
                    <div className="flex items-center justify-between px-3 pt-1 pb-2 text-[10px] text-slate-400 border-b border-white/5">
                      <span className="font-mono font-semibold text-white">9:41</span>
                      <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3 text-slate-400" />
                        <Battery className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>

                    {/* Phone Browser Chrome */}
                    <div className="my-2 px-2.5 py-1 rounded-lg bg-[#111827] border border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono text-emerald-400">🔒 sivaconstruction.in</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">Coimbatore</span>
                    </div>

                    {/* Phone Website Content */}
                    <div className="space-y-3 pt-1">
                      {/* Mobile Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded bg-amber-500 text-black font-extrabold text-[10px] flex items-center justify-center">
                            SC
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-white leading-none">SIVA CONSTRUCTION</div>
                            <div className="text-[8px] text-slate-400">Civil & Residential</div>
                          </div>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                          Active
                        </span>
                      </div>

                      {/* Mobile Hero Banner */}
                      <div className="rounded-xl p-3 bg-gradient-to-br from-slate-900 to-[#131B2E] border border-white/5">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-amber-400 block mb-0.5">
                          Residential Specialists
                        </span>
                        <div className="text-xs font-bold text-white mb-1 leading-snug">
                          Quality Residential Construction in Coimbatore.
                        </div>
                        <div className="text-[10px] text-slate-300 leading-tight">
                          Modern architectural villas, turnkey planning & construction.
                        </div>
                      </div>

                      {/* Mobile Category Chips */}
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Project Categories
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 text-center">
                          <div className="p-1.5 rounded-lg bg-[#111827] border border-amber-500/30">
                            <div className="text-[10px] font-bold text-amber-300">Villas</div>
                            <div className="text-[8px] text-slate-400">4 BHK</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-[#111827] border border-white/5">
                            <div className="text-[10px] font-bold text-slate-200">Commercial</div>
                            <div className="text-[8px] text-slate-400">Offices</div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-[#111827] border border-white/5">
                            <div className="text-[10px] font-bold text-slate-200">Turnkey</div>
                            <div className="text-[8px] text-slate-400">Contract</div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Project Card */}
                      <div className="rounded-xl p-2.5 bg-[#111827] border border-white/5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold text-white">Sri Lakshmi Villa</span>
                          <span className="text-[8px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400">Completed</span>
                        </div>
                        <div className="text-[9px] text-slate-400 flex items-center gap-1 mb-1">
                          <MapPin className="w-2.5 h-2.5 text-slate-500" />
                          <span>Saravanampatti, Coimbatore</span>
                        </div>
                        <div className="text-[9px] text-amber-300/90 font-medium">
                          3,800 sq.ft · Custom Villa
                        </div>
                      </div>

                      {/* Mobile WhatsApp Quick Bar */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#25D366] text-white text-[10px] font-bold shadow-md shadow-[#25D366]/20"
                      >
                        <MessageSquareText className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* DEVICE PREVIEW: Desktop View Frame */
                  <div className="w-full rounded-2xl bg-[#0F172A] border border-white/15 shadow-2xl overflow-hidden transition-all duration-300">
                    {/* Browser top chrome */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#1E293B]/70 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="px-4 py-1 rounded-md bg-[#0B0F19]/80 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                        <span className="text-emerald-400">🔒</span>
                        <span>sivaconstruction.preview</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <Laptop className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Browser content */}
                    <div className="p-5 sm:p-6 bg-[#0B0F19] text-left">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-amber-500 text-black font-extrabold text-xs flex items-center justify-center">
                            SC
                          </div>
                          <span className="text-xs font-bold text-white tracking-wider">
                            SIVA CONSTRUCTION
                          </span>
                        </div>
                        <span className="text-[10px] text-amber-400 font-mono">
                          COIMBATORE, TN
                        </span>
                      </div>

                      <div className="rounded-xl p-4 bg-gradient-to-r from-slate-900 to-[#131B2E] border border-white/5 mb-4">
                        <div className="text-[10px] text-amber-400 font-mono mb-1">
                          RESIDENTIAL & COMMERCIAL BUILDERS
                        </div>
                        <div className="text-sm font-bold text-white mb-1.5">
                          Crafting High-Quality Homes with Enduring Strength.
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Tailored architectural planning, civil construction, and turnkey project execution across Coimbatore.
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="rounded-lg p-2.5 bg-[#111827] border border-amber-500/20 text-center">
                          <div className="text-xs font-bold text-amber-300">Villas</div>
                          <div className="text-[9px] text-slate-400">Residential</div>
                        </div>
                        <div className="rounded-lg p-2.5 bg-[#111827] border border-white/5 text-center">
                          <div className="text-xs font-bold text-slate-200">Commercial</div>
                          <div className="text-[9px] text-slate-400">Offices & Stores</div>
                        </div>
                        <div className="rounded-lg p-2.5 bg-[#111827] border border-white/5 text-center">
                          <div className="text-xs font-bold text-slate-200">Turnkey</div>
                          <div className="text-[9px] text-slate-400">End-to-End</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px]">
                        <span className="text-emerald-300 font-medium">WhatsApp Project Enquiry Enabled</span>
                        <span className="text-emerald-400 font-bold">1-Click</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Interactive Modal */}
      <SivaPreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />
    </section>
  );
}
