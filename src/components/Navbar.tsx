"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageSquareText } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F19]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            aria-label="WebnexaDev Home"
            onClick={closeMenu}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-lg"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111827]/60 border border-white/5 backdrop-blur-sm"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] shadow-md shadow-[#8B5CF6]/25 hover:shadow-lg hover:shadow-[#8B5CF6]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Phone Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={buildWhatsAppUrl(SITE_CONFIG.contact.generalInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageSquareText className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden border-b border-white/10 bg-[#0B0F19]/98 backdrop-blur-2xl shadow-2xl ${
          mobileMenuOpen ? "max-h-[550px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex flex-col gap-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] shadow-md shadow-[#8B5CF6]/20"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={buildWhatsAppUrl(SITE_CONFIG.contact.generalInquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 7010957511)</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
