"use client";

import React, { useState } from "react";
import {
  Send,
  MessageSquareText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Lock,
} from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { ScrollReveal } from "./ScrollReveal";

interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  description?: string;
}

export function ProjectEnquiryForm() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: SITE_CONFIG.formOptions.services[0],
    budget: SITE_CONFIG.formOptions.budgets[0],
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a required service.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select an estimated budget range.";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please share a brief summary of your project.";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Project description must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Submit via real Next.js API endpoint
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Submission failed. Please try again.");
      } else {
        setSubmitSuccess(
          `Enquiry successfully received (Ref: ${data.referenceId}). We will review your project requirements and respond promptly.`
        );
        // Clear form after successful submission
        setFormData({
          fullName: "",
          businessName: "",
          email: "",
          phone: "",
          service: SITE_CONFIG.formOptions.services[0],
          budget: SITE_CONFIG.formOptions.budgets[0],
          description: "",
        });
      }
    } catch {
      setSubmitError(
        "Network connection issue. Please check your connection or reach out directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp manual continuation - builds formatted prefilled message only upon visitor's explicit click
  const handleContinueOnWhatsApp = () => {
    const namePart = formData.fullName.trim() || "[Customer Name]";
    const businessPart = formData.businessName.trim() || "[Business Name]";
    const servicePart = formData.service || "[Selected Service]";
    const budgetPart = formData.budget || "[Selected Budget]";
    const detailsPart = formData.description.trim() || "[Project Description]";

    const message = `Hi WebnexaDev! I'd like to discuss a project.
Name: ${namePart}
Business: ${businessPart}
Service: ${servicePart}
Budget: ${budgetPart}
Project Details: ${detailsPart}
Please let me know the next steps.`;

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-[#0B0F19] overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb-purple w-[500px] h-[500px] top-1/3 -left-48 opacity-40 pointer-events-none" />
      <div className="glow-orb-cyan w-[500px] h-[500px] bottom-10 -right-48 opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={0.05} className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#A78BFA]">
              START A PROJECT
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
            Tell Us About Your Project.
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto px-2">
            Share a few details about your business and what you want to build. We&apos;ll use them to understand your requirements.
          </p>
        </ScrollReveal>

        {/* Form Container with Phone View Padding */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-3xl bg-[#111827]/90 border border-white/10 p-5 sm:p-10 shadow-2xl backdrop-blur-xl">
            
            {/* Status Banners */}
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Enquiry Received</span>
                  <span>{submitSuccess}</span>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-0.5">Submission Error</span>
                  <span>{submitError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
              
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Senthil Kumar"
                    aria-invalid={errors.fullName ? "true" : "false"}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-base sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.fullName
                        ? "border-rose-500/80 focus:ring-rose-500/40"
                        : "border-white/10 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/30"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Business Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-base sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.email
                        ? "border-rose-500/80 focus:ring-rose-500/40"
                        : "border-white/10 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    aria-invalid={errors.phone ? "true" : "false"}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-base sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                      errors.phone
                        ? "border-rose-500/80 focus:ring-rose-500/40"
                        : "border-white/10 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/30"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Service Required & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Service Required <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-colors"
                  >
                    {SITE_CONFIG.formOptions.services.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111827] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Estimated Project Budget <span className="text-rose-400">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-colors"
                  >
                    {SITE_CONFIG.formOptions.budgets.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111827] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Project Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  Project Description <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us what you want to build, current challenges, key features, and your target timeline..."
                  aria-invalid={errors.description ? "true" : "false"}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0B0F19] border text-white text-base sm:text-sm focus:outline-none focus:ring-2 transition-colors resize-y ${
                    errors.description
                      ? "border-rose-500/80 focus:ring-rose-500/40"
                      : "border-white/10 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/30"
                  }`}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.description}
                  </p>
                )}
              </div>

              {/* Action Buttons: Stacked on Phone, Row on Tablet/Desktop */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] shadow-lg shadow-[#8B5CF6]/25 hover:shadow-[#8B5CF6]/40 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleContinueOnWhatsApp}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all duration-200 cursor-pointer"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </button>
              </div>

              {/* Privacy note */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400 text-center">
                <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>
                  Information submitted is strictly confidential to discuss your project. Zero spam.
                </span>
              </div>

            </form>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
