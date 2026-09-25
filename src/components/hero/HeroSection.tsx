'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  Building2,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { RemotionQuoteButton } from '../common/RemotionQuoteButton';
import { BeforeAfterParallaxShowcase } from './BeforeAfterParallaxShowcase';
import { ASSET_LIBRARY } from '@/lib/mockData';
import { getAssetUrl } from '@/lib/assetHelper';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-luxury-canvas cove-lighting-wash">
      {/* Layer 1: Ambient High-Resolution Architectural Backdrop with Tailored Spatial Scrim */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Full-bleed Architectural Penthouse Canvas with Directional Warm Scrim */}
        <div className="absolute inset-0 w-full h-full opacity-35 lg:opacity-45">
          <img
            src={getAssetUrl(ASSET_LIBRARY.heroAi)}
            alt="Luxury Architectural Interior Atelier"
            className="w-full h-full object-cover object-right-top filter saturate-95 contrast-100 cinematic-video-hero"
          />
          {/* Subtle Directional Gradients ensuring 100% typographic legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/85 to-transparent lg:via-[#FBF9F5]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-transparent to-[#FBF9F5]/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/90 via-transparent to-[#FBF9F5]" />
        </div>

        {/* Fluted Architectural Oak Wall Shadows on Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-16 opacity-35 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-16 opacity-35 fluted-slat-shadows hidden lg:block" />

        {/* Ambient Warm Golden Radial Glow */}
        <div className="absolute top-16 left-1/4 w-[650px] h-[650px] bg-[#C8A97E]/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#EDE7DC]/70 rounded-full blur-[130px]" />

        {/* Architectural Drafting Hairline Grid */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-10" />

        {/* Architectural Subtle Watermark Callout */}
        <div className="absolute bottom-6 left-8 hidden xl:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#8C8479]/60 uppercase">
          <span>ATELIER SPEC 2026 // SNEHA ENTERPRISES</span>
          <span>•</span>
          <span>12.9716° N, 77.5946° E</span>
          <span>•</span>
          <span>TOLERANCE ±0.5MM</span>
          <span>•</span>
          <span>ELEVATION +920M MSL</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust & Authority Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5D2BA] text-[#181615] text-xs font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Sneha Enterprises Master Atelier • Bangalore &amp; Mumbai</span>
          </span>

          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#DDD5C7] text-xs text-[#5E5952] shadow-sm">
            <span className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </span>
            <span className="font-bold text-[#181615]">4.9 / 5.0</span>
            <span className="text-[#8C8479] hidden sm:inline">(150+ Verified Homeowners)</span>
          </span>

          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3A6B56]/10 border border-[#3A6B56]/20 text-xs font-semibold text-[#3A6B56]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>₹1,500/Day Penalty Clause Bond</span>
          </span>
        </div>

        {/* Hero Grid: Split Editorial & Interactive Before/After Theater */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Typography & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#C8A97E] font-bold block mb-1">
                European Turnkey Architecture
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-[#181615] tracking-tight leading-[1.05]">
                Architectural <span className="font-editorial font-extrabold text-[#181615]">Luxury</span> <br />
                <span className="font-script text-gold-gradient text-[1.5em] font-normal inline-block transform -rotate-2 -mr-1 drop-shadow-sm select-none">
                  meets
                </span>{' '}
                <span className="font-editorial font-extrabold relative inline-block text-[#181615]">
                  German Factory
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8A97E] via-[#E5D2BA] to-transparent rounded-full" />
                </span>{' '}
                Precision.
              </h1>
              <p className="font-editorial italic text-base sm:text-lg text-[#B69566] tracking-wide pt-1">
                "German factory-precision interiors. Delivered in 45 days flat."
              </p>
            </div>

            <p className="text-body-large text-[#5E5952] max-w-xl leading-relaxed">
              Turnkey luxury interiors for 2BHK–4BHK apartments &amp; villas. 100% factory-finished with{' '}
              <strong className="text-[#181615] font-semibold">zero midway cost surprises</strong> and a{' '}
              <strong className="text-[#181615] font-semibold">₹1,500/day on-time penalty guarantee</strong>.
            </p>

            {/* Architectural Spec Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#5E5952]">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#EDE7DC] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span className="font-medium text-[#181615]">100% Price Lock (Zero Midway Hikes)</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#EDE7DC] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span className="font-medium text-[#181615]">₹1,500/day penalty if delayed</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#EDE7DC] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span className="font-medium text-[#181615]">10-Year Sneha Enterprises warranty</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#EDE7DC] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span className="font-medium text-[#181615]">100% Factory Built (Zero Dust at Home)</span>
              </div>
            </div>

            {/* Action CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <RemotionQuoteButton
                href="#estimator"
                size="lg"
                subtitle="Instant Turnkey BOQ • 15% Factory Benefit"
              >
                Calculate Instant BOQ (15% Off)
              </RemotionQuoteButton>

              <MagneticButton
                href="#materials"
                variant="secondary"
                size="lg"
                ariaLabel="Explore Materials Palette"
              >
                <Layers className="w-4 h-4 text-[#C8A97E]" />
                <span>Tactile Material Palette</span>
              </MagneticButton>
            </div>

            {/* Micro-Metrics Architectural Data Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EDE7DC]">
              <div>
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#181615]">45 Days</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] font-semibold mt-0.5">
                  Guaranteed Handover
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#181615]">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] font-semibold mt-0.5">
                  Fixed BOQ Price Lock
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#181615]">10 Years</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] font-semibold mt-0.5">
                  Assurance Bond
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 5-Space Before & After Transformation Theater */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Decorative Subtle Shadow Backplate */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#C8A97E]/20 to-[#EDE7DC]/50 -z-10 blur-xl" />

              {/* 5-Space Interactive Transformation Showcase */}
              <BeforeAfterParallaxShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
