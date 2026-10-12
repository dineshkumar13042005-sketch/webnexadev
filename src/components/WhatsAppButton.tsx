"use client";

import React, { useState } from "react";
import { MessageSquareText } from "lucide-react";
import { buildWhatsAppUrl, SITE_CONFIG } from "@/config/site";

interface FloatingWhatsAppProps {
  message?: string;
}

export function FloatingWhatsAppButton({
  message = SITE_CONFIG.contact.generalInquiryMessage,
}: FloatingWhatsAppProps) {
  const [isHovered, setIsHovered] = useState(false);
  const url = buildWhatsAppUrl(message);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-[#111827] text-slate-100 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
        <span>Chat with WebnexaDev</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with WebnexaDev"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.202.301-.78 0.98-.956 1.18-.176.202-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.352.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.239-.244-.588-.493-.509-.678-.518-.176-.008-.377-.01-.578-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.143 4.547.718.31 1.279.496 1.716.635.722.23 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.578-.351z" />
          <path d="M12.004 2C6.48 2 2 6.479 2 12.003c0 1.764.462 3.491 1.34 5.013L2.053 22l5.132-1.346c1.472.802 3.13 1.226 4.819 1.226 5.524 0 10.004-4.48 10.004-10.003C22.008 6.479 17.528 2 12.004 2zm0 18.286c-1.503 0-2.977-.406-4.264-1.173l-.306-.182-3.167.831.846-3.087-.2-.318c-.843-1.342-1.288-2.9-1.288-4.504 0-4.568 3.717-8.286 8.285-8.286 4.569 0 8.286 3.718 8.286 8.286 0 4.568-3.717 8.286-8.286 8.286z" />
        </svg>
      </a>
    </div>
  );
}

interface WhatsAppLinkButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function WhatsAppLinkButton({
  message,
  children,
  className = "",
  variant = "solid",
  size = "md",
}: WhatsAppLinkButtonProps) {
  const url = buildWhatsAppUrl(message);

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F19]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    solid:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-[#25D366]/20 hover:shadow-[#25D366]/40 focus:ring-[#25D366]",
    outline:
      "border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 focus:ring-[#25D366]",
    ghost:
      "text-[#25D366] hover:text-emerald-300 hover:bg-[#25D366]/10 focus:ring-[#25D366]",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      <MessageSquareText className="w-4 h-4 shrink-0" />
      <span>{children}</span>
    </a>
  );
}
