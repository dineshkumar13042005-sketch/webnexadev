"use client";

import React, { useState } from "react";
import { X, Smartphone, Monitor, MapPin, Building2, CheckCircle2, MessageSquareText, ExternalLink } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

interface SivaPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SivaPreviewModal({ isOpen, onClose }: SivaPreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("desktop");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!isOpen) return null;

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential Villas" },
    { id: "commercial", label: "Commercial" },
    { id: "turnkey", label: "Turnkey Contracting" },
  ];

  const projects = [
    {
      title: "Sri Lakshmi Grand Villa",
      type: "residential",
      location: "Saravanampatti, Coimbatore",
      specs: "3,800 sq.ft · 4 BHK Luxury Villa",
      status: "Completed",
      accent: "from-amber-600/30 to-amber-900/40",
    },
    {
      title: "Avinashi Tech Commercial Hub",
      type: "commercial",
      location: "Avinashi Road, Coimbatore",
      specs: "12,500 sq.ft · Multi-tier Office Suite",
      status: "Delivered",
      accent: "from-blue-600/30 to-slate-900/40",
    },
    {
      title: "Royal Palms Residency",
      type: "residential",
      location: "RS Puram, Coimbatore",
      specs: "4,200 sq.ft · Custom Architectural Build",
      status: "Completed",
      accent: "from-emerald-600/30 to-teal-900/40",
    },
    {
      title: "Greenfield Turnkey Warehouse",
      type: "turnkey",
      location: "Peelamedu, Coimbatore",
      specs: "18,000 sq.ft · Turnkey Steel Construction",
      status: "Completed",
      accent: "from-purple-600/30 to-indigo-900/40",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.type === selectedCategory);

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.featuredProject.whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#0F172A] border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#1E293B]/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Siva Construction</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  Verified Client Project
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> Coimbatore, Tamil Nadu · Business Website Preview
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport switch */}
            <div className="flex items-center p-0.5 sm:p-1 rounded-lg bg-black/40 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("desktop")}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-colors text-[11px] sm:text-xs cursor-pointer ${
                  activeTab === "desktop"
                    ? "bg-[#8B5CF6] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Monitor className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span className="hidden xs:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-colors text-[11px] sm:text-xs cursor-pointer ${
                  activeTab === "mobile"
                    ? "bg-[#8B5CF6] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span className="hidden xs:inline">Mobile</span>
              </button>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project preview"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Interactive Preview Frame */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#090D16]">
          <div
            className={`mx-auto transition-all duration-300 ${
              activeTab === "mobile"
                ? "max-w-sm rounded-[36px] border-4 border-slate-700 bg-[#0B0F19] p-4 shadow-2xl"
                : "w-full rounded-xl border border-white/10 bg-[#0B0F19] p-6 shadow-xl"
            }`}
          >
            {/* Mock Client Website Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-sm">
                  SC
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">SIVA CONSTRUCTION</div>
                  <div className="text-[10px] text-slate-400">Builders & Contractors · Coimbatore</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Residential Specialists
                </span>
              </div>
            </div>

            {/* Mock Website Hero */}
            <div className="rounded-xl p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-[#131B2E] to-slate-900 border border-white/5 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                Quality Construction in Coimbatore
              </span>
              <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 leading-snug">
                Building Durable, Architectural Residential Homes with Complete Transparency.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Providing architectural planning, structural construction, premium interior finishing, and turnkey handover for clients in Coimbatore and surrounding districts.
              </p>
            </div>

            {/* Mock Project Category Filter */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Project Portfolio
                </h5>
                <span className="text-[11px] text-slate-400 font-mono">
                  {filteredProjects.length} Projects displayed
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-amber-500 text-black font-semibold"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mock Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {filteredProjects.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 bg-[#111827] border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-white">{p.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                      {p.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{p.location}</span>
                  </div>
                  <div className="text-[11px] text-amber-300/90 font-medium">
                    {p.specs}
                  </div>
                </div>
              ))}
            </div>

            {/* Implementation details */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10">
              <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>WebnexaDev Engineering Highlights</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                <li>• Mobile-first residential showcase</li>
                <li>• Zero layout shifts on image gallery load</li>
                <li>• Instant WhatsApp quotation trigger</li>
                <li>• Localized Coimbatore SEO architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-[#1E293B]/80">
          <p className="text-xs text-slate-300 text-center sm:text-left">
            Interested in a high-converting website like Siva Construction?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10"
            >
              Close Preview
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-[#25D366]/20 transition-colors"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Build a Similar Website</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
