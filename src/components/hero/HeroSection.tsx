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
} from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FBF9F5]">
      {/* Editorial Decorative Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 sm:grid-cols-6 border-x border-[#EDE7DC]">
          <div className="border-r border-[#EDE7DC] h-full" />
          <div className="border-r border-[#EDE7DC] h-full" />
          <div className="border-r border-[#EDE7DC] h-full" />
          <div className="border-r border-[#EDE7DC] h-full hidden sm:block" />
          <div className="border-r border-[#EDE7DC] h-full hidden sm:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-[#181615] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Sneha Enterprises Master Atelier</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#DDD5C7] text-xs text-[#5E5952]">
            <span className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </span>
            <span className="font-semibold text-[#181615]">4.9 / 5.0</span>
            <span className="text-[#8C8479]">(150+ Verified Google Reviews)</span>
          </span>
        </motion.div>

        {/* Hero Grid: Split Editorial Content & Before/After Interactive Theater */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-editorial-h1 text-[#181615]"
            >
              Architectural luxury <br />
              meets <span className="italic font-normal text-[#C8A97E]">German factory</span> precision.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-body-large text-[#5E5952] max-w-xl leading-relaxed"
            >
              Turnkey residential interior architecture for discerning 2BHK–4BHK & luxury villa owners.
              Backed by our rigid <strong className="text-[#181615] font-semibold">45-day guaranteed handover</strong>,{' '}
              <strong className="text-[#181615] font-semibold">100% price-lock BOQ</strong>, and Homag laser edge-banded
              woodwork fabricated off-site.
            </motion.p>

            {/* Value Checkmark Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#5E5952]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span>Zero midway price escalations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span>₹1,500/day penalty if we delay</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span>10-Year Sneha Enterprises warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3A6B56] shrink-0" />
                <span>Dust-free off-site German milling</span>
              </div>
            </motion.div>

            {/* Action CTA Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton
                href="#estimator"
                variant="primary"
                size="lg"
                ariaLabel="Calculate Turnkey BOQ"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Calculate Instant BOQ (15% Off)</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="#catalog"
                variant="secondary"
                size="lg"
                ariaLabel="Explore Taxonomy Catalog"
              >
                <span>Explore 2026 Catalog</span>
              </MagneticButton>
            </motion.div>

            {/* Micro-Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#EDE7DC]"
            >
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#181615]">45 Days</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] mt-0.5">
                  Guaranteed Handover
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#181615]">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] mt-0.5">
                  Fixed BOQ Price Lock
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-[#181615]">10 Years</p>
                <p className="text-[11px] uppercase tracking-wider text-[#8C8479] mt-0.5">
                  Structural Assurance
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Before & After Transformation Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Decorative Subtle Shadow Backplate */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#C8A97E]/15 to-[#EDE7DC]/40 -z-10 blur-xl" />

              {/* Interactive Transformation Slider */}
              <BeforeAfterSlider />

              {/* Floating Bottom Spec Pill */}
              <div className="mt-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#EDE7DC] shadow-card-depth text-xs text-[#5E5952]">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C8A97E]" />
                  <span>
                    Actual 3BHK Handover • <strong>Prestige Falcon City</strong>
                  </span>
                </div>
                <span className="text-[#3A6B56] font-semibold">Completed in 42 Days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
