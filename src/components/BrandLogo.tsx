import React from "react";

interface BrandLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function BrandLogo({ className = "", iconOnly = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Code-inspired modern geometric logo icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] p-[1.5px] shadow-lg shadow-[#8B5CF6]/20 group">
        <div className="flex items-center justify-center w-full h-full bg-[#0B0F19] rounded-[10px] transition-colors group-hover:bg-[#111827]">
          <svg
            className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-tr from-[#A78BFA] to-[#38BDF8]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#brandGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            {/* Elegant code brackets with central node */}
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <circle cx="12" cy="12" r="2" fill="#06B6D4" />
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-white flex items-center">
            Webnexa<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">Dev</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-medium -mt-1">
            Digital Solutions
          </span>
        </div>
      )}
    </div>
  );
}
