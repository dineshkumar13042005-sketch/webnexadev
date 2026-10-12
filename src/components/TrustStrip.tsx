"use client";

import React from "react";
import { UserCheck, CheckCircle2, Briefcase, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export function TrustStrip() {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 text-[#8B5CF6]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#10B981]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#06B6D4]" />,
    Smartphone: <Smartphone className="w-5 h-5 text-[#A78BFA]" />,
  };

  return (
    <section className="relative py-10 border-y border-white/10 bg-[#0B0F19]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SITE_CONFIG.credibilityPoints.map((item, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="p-2.5 rounded-xl bg-white/5 shrink-0 flex items-center justify-center">
                  {iconMap[item.icon] || <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />}
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-sm font-semibold text-slate-200 truncate">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 truncate">
                    {item.subtext}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
