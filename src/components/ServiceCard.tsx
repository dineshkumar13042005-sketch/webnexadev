"use client";

import React from "react";
import {
  ShoppingCart,
  Target,
  Layers,
  Globe,
  Bot,
  TrendingUp,
  Check,
  MessageSquareText,
} from "lucide-react";
import { ServiceItem, buildWhatsAppUrl } from "@/config/site";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-[#8B5CF6]" />;
      case "Target":
        return <Target className="w-6 h-6 text-[#06B6D4]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#A78BFA]" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-[#38BDF8]" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-[#10B981]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-[#F59E0B]" />;
      default:
        return <Globe className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  const whatsappUrl = buildWhatsAppUrl(service.whatsappMessage);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#111827]/80 border border-white/10 p-7 hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:-translate-y-1.5 backdrop-blur-md">
      {/* Top subtle highlight gradient on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6]/0 to-transparent group-hover:via-[#8B5CF6] transition-all duration-500 rounded-t-2xl" />

      <div>
        {/* Icon & Category Indicator */}
        <div className="flex items-center justify-between mb-5">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#8B5CF6]/10 group-hover:border-[#8B5CF6]/30 transition-colors">
            {getIcon(service.iconName)}
          </div>
          <span className="text-xs font-mono text-slate-400">
            0{index + 1}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2.5 mb-8">
          {service.features.map((feature, fIndex) => (
            <li key={fIndex} className="flex items-start gap-2.5 text-xs text-slate-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Working WhatsApp CTA */}
      <div className="pt-4 border-t border-white/10">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-200 group-hover:border-white/20"
        >
          <MessageSquareText className="w-4 h-4" />
          <span>{service.ctaLabel}</span>
        </a>
      </div>
    </div>
  );
}
