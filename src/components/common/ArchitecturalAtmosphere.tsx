'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ArchitecturalAtmosphere: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none"
    >
      {/* 1. Lightweight CSS Micro-Grain Plaster Texture (Zero SVG CPU Overhead) */}
      <div className="absolute inset-0 opacity-[0.035] venetian-plaster-grain pointer-events-none" />

      {/* 2. Hardware-Accelerated Ambient 2700K Sunbeam & Cove Light Drifts (Native CSS Gradients, Zero Blur Overhead) */}
      <div
        className="absolute -top-32 left-1/4 w-[750px] h-[750px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(223,186,115,0.25)_0%,rgba(200,169,126,0.1)_40%,transparent_70%)]"
      />

      <div
        className="absolute top-1/2 -right-40 w-[700px] h-[700px] pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(200,169,126,0.2)_0%,rgba(229,210,186,0.1)_45%,transparent_70%)]"
      />

      <div
        className="absolute -bottom-32 left-1/3 w-[800px] h-[600px] pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_center,rgba(200,169,126,0.18)_0%,rgba(221,213,199,0.12)_50%,transparent_70%)]"
      />

      {/* 3. Architectural Marginal Scale Ruler (Left Margin) */}
      <div className="absolute top-0 bottom-0 left-3 hidden 2xl:flex flex-col justify-between py-24 text-[9px] font-mono text-[#8C8479]/40 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
          <span>ELEV +12.50M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-[#DDD5C7]/70" />
          <span>DATUM 01 // ROOF</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
          <span>ELEV +07.50M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-[1px] bg-[#DDD5C7]/70" />
          <span>DATUM 02 // MEZZANINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
          <span>ELEV +03.20M</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] bg-[#C8A97E]/60" />
          <span className="text-[#C8A97E]/70 font-semibold">FINISH FLOOR ±0.00</span>
        </div>
      </div>

      {/* 4. Architectural Marginal Scale Ruler (Right Margin) */}
      <div className="absolute top-0 bottom-0 right-3 hidden 2xl:flex flex-col justify-between py-24 items-end text-[9px] font-mono text-[#8C8479]/40 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span>SCALE 1:50 @ A1</span>
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
        </div>
        <div className="flex items-center gap-2">
          <span>HOMAG CNC ±0.5MM</span>
          <span className="w-2 h-[1px] bg-[#DDD5C7]/70" />
        </div>
        <div className="flex items-center gap-2">
          <span>LASER PUR SEALED</span>
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
        </div>
        <div className="flex items-center gap-2">
          <span>HETTICH V6 DAMPING</span>
          <span className="w-2 h-[1px] bg-[#DDD5C7]/70" />
        </div>
        <div className="flex items-center gap-2">
          <span>100% PRICE LOCK</span>
          <span className="w-3 h-[1px] bg-[#DDD5C7]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#3A6B56]/70 font-semibold">BOND CERTIFIED</span>
          <span className="w-3 h-[1px] bg-[#3A6B56]/60" />
        </div>
      </div>

      {/* 5. Architectural Framing Registration Brackets (Four Corners) */}
      <div className="absolute top-20 left-6 hidden lg:block text-[#C8A97E]/40 font-mono text-xs">
        ┌&nbsp;SECTION A-A
      </div>
      <div className="absolute top-20 right-6 hidden lg:block text-[#C8A97E]/40 font-mono text-xs">
        GRID REF // 01&nbsp;┐
      </div>
      <div className="absolute bottom-6 left-6 hidden lg:block text-[#C8A97E]/40 font-mono text-xs">
        └&nbsp;SNEHA ENTERPRISES
      </div>
      <div className="absolute bottom-6 right-6 hidden lg:block text-[#C8A97E]/40 font-mono text-xs">
        2026 ARCHITECTURAL ATELIER&nbsp;┘
      </div>

      {/* 6. Subtle Watermark Compass Rose (Top Right Background) */}
      <div className="absolute top-36 right-16 hidden xl:block opacity-20 pointer-events-none">
        <svg width="68" height="68" viewBox="0 0 100 100" fill="none" className="text-[#C8A97E]">
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.75" />
          <path d="M50 8 L54 44 L92 50 L54 56 L50 92 L46 56 L8 50 L46 44 Z" fill="currentColor" opacity="0.4" />
          <path d="M50 8 L50 50 L92 50 Z" fill="currentColor" opacity="0.7" />
          <text x="50" y="24" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold">N</text>
        </svg>
      </div>
    </div>
  );
};
