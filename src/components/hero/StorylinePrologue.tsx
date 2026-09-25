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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C8A97E]/10 rounded-full blur-[140px] pointer-events-none" />

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
              Two Decades of Architectural Trust.{' '}
              <span className="font-script text-gold-gradient text-[1.28em] font-normal block sm:inline">
                400+ Homes Handed Over.
              </span>{' '}
              Countless Family Lives Transformed.
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#5E5952] leading-relaxed font-sans font-normal">
              Before a single hinge is milled or stone slab is cut in our factory, we listen to how your family wakes,
              cooks, and rests. Since 2004, under the legal custody of <strong>Sneha Enterprises</strong>, our studio has
              rejected the industry norm of delayed handovers, uncurated materials, and hidden cost escalations.
              We believe transforming raw concrete into a generational sanctuary should be an experience of profound joy,
              clarity, and architectural pride.
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
                Continuous architectural execution since 2004 under Sneha Enterprises.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-2">
                <Users className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Client Satisfaction</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                400+ <span className="text-sm font-sans font-medium text-[#8C8479]">Residences</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Verified luxury apartments, duplexes &amp; standalone villas completed.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#3A6B56] mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Human Impact</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                1,200+ <span className="text-sm font-sans font-medium text-[#8C8479]">Lives</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Family members thriving in bespoke, ergonomically tailored interiors.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE7DC]/70 hover:border-[#C8A97E] transition-all">
              <div className="flex items-center gap-2 text-[#C8A97E] mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479]">Contractual Bond</span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#181615]">
                45 <span className="text-sm font-sans font-medium text-[#8C8479]">Days</span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-medium">
                Contractual on-time delivery with ₹1,500/day penalty protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
