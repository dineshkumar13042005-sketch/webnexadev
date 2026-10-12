"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, MessageSquareText } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = buildWhatsAppUrl(SITE_CONFIG.contact.faqQuestionMessage);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="tech-grid-pattern absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.05} className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#06B6D4]">
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers about our technical capabilities, realistic timelines, and working process.
          </p>
        </ScrollReveal>

        {/* Accordion Container with Staggered Scroll Animation */}
        <StaggerContainer staggerDelay={0.06} className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={index} distance={18}>
                <div className="rounded-2xl bg-[#111827]/80 border border-white/10 overflow-hidden transition-colors hover:border-white/20 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-xl bg-white/5 border border-white/10 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#8B5CF6]/20 border-[#8B5CF6]/40 text-[#A78BFA]" : "text-slate-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Below FAQ WhatsApp CTA with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111827] via-[#1E293B]/70 to-[#111827] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold text-white mb-1">
                Have another question?
              </h3>
              <p className="text-sm text-slate-300">
                Speak directly with our team on WhatsApp for immediate clarity.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20 transition-all duration-200 shrink-0"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Chat with Us</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
