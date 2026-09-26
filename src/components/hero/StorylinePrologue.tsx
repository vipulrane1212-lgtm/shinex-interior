'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Clock, Sparkles, Compass, Star } from 'lucide-react';

export const StorylinePrologue: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#FBF9F5] border-b border-[#EDE7DC] overflow-hidden">
      {/* Subtle Architectural Drafting Grid Background */}
      <div className="absolute inset-0 bg-architectural-fine-grid opacity-25 pointer-events-none" />

      {/* Warm Ambient Radial Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] ambient-glow-gold rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Storyline Prologue Box */}
        <div className="relative p-6 sm:p-10 md:p-12 rounded-3xl bg-white/70 backdrop-blur-md border border-[#DDD5C7] shadow-soft-luxury">
          {/* Top Overline Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#EDE7DC]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A97E]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8C8479] font-medium">
                Sneha Enterprises Heritage • Est. 2004 // 20-Year Anniversary
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-[#181615] text-xs font-medium">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-semibold ml-1">4.9 / 5.0</span>
              <span className="text-[#8C8479] text-[11px]">(400+ Verified Client Reviews)</span>
            </div>
          </div>

          {/* Central Editorial Narrative */}
          <div className="py-8 md:py-10 max-w-4xl">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181615] tracking-tight leading-[1.12]">
              Two Decades of Trust.{' '}
              <span className="font-script text-gold-gradient text-[1.28em] font-normal block sm:inline">
                400+ Homes Handed Over.
              </span>{' '}
              Zero Compromise.
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#5E5952] leading-relaxed font-sans font-normal max-w-3xl">
              Since 2004, <strong>Sneha Enterprises</strong> has delivered 400+ turnkey residences across Bangalore &amp; Mumbai with
              dust-free German factory finishes, guaranteed 45-day handovers, and complete 10-year warranty protection.
            </p>
          </div>

          {/* 4 Pillars of Generational Trust */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#EDE7DC]">
            {/* Pillar 1 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-2">
                <Award className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Legacy</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                20+ <span className="text-sm font-sans font-medium text-[#8C8479]">Years</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Continuous execution since 2004 under Sneha Enterprises.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-2">
                <Users className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Delivered</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                400+ <span className="text-sm font-sans font-medium text-[#8C8479]">Homes</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Luxury apartments, duplexes &amp; villas handed over.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">On-Time Handover</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                45 <span className="text-sm font-sans font-medium text-[#8C8479]">Days</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Contractual delivery with ₹1,500/day penalty protection.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#3A6B56] mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Warranty</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                10 <span className="text-sm font-sans font-medium text-[#8C8479]">Years</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                100% water &amp; termite-proof woodwork guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
