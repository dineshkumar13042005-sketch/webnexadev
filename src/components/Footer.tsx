"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquareText, Shield, ArrowUp, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-[#070A11] border-t border-white/10 pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            
            {/* Brand Column (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="#hero" className="inline-block">
                <BrandLogo />
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                {SITE_CONFIG.brand.description}
              </p>

              {/* Verified WhatsApp direct contact */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Direct WhatsApp Contact
                </div>
                <a
                  href={SITE_CONFIG.contact.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>{SITE_CONFIG.contact.whatsappNumber}</span>
                </a>
              </div>
            </div>

            {/* Quick Navigation Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {SITE_CONFIG.navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Digital Services
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {SITE_CONFIG.services.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#services`}
                      className="hover:text-white transition-colors block py-0.5"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span>
                © {currentYear} WebnexaDev. All rights reserved.
              </span>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-white underline cursor-pointer"
              >
                Privacy Notice
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-400">
                Coimbatore, Tamil Nadu & Global Clients
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Notice Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#111827] border border-white/15 p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Shield className="w-5 h-5 text-[#8B5CF6]" />
                <span>WebnexaDev Privacy Commitment</span>
              </div>
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                <strong>1. Data Collection & Purpose:</strong> WebnexaDev collects information submitted through project enquiry forms (such as your name, business name, email, phone number, and project notes) exclusively for evaluating your digital requirements and communicating project proposals.
              </p>
              <p>
                <strong>2. Zero Spam Policy:</strong> We never share, sell, or disclose your contact details to third-party marketing companies. We do not transmit automated unsolicited cold marketing emails.
              </p>
              <p>
                <strong>3. WhatsApp Communication:</strong> When you choose to chat or continue on WhatsApp, you maintain complete control over the details sent and initiate the conversation yourself.
              </p>
              <p>
                <strong>4. Security:</strong> Any enquiries stored are handled with strict digital safeguards and role-based access.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 rounded-xl bg-[#8B5CF6] text-white text-xs font-semibold hover:bg-[#7C3AED]"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
