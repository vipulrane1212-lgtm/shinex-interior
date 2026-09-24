'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';
import { WORKFLOW_MILESTONES } from '@/lib/mockData';
import { StepGraphicCard } from './StepGraphicCard';
import { MagneticButton } from '../common/MagneticButton';

export const WorkflowJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="journey" className="py-24 bg-[#FBF9F5] border-t border-[#EDE7DC] relative overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[140px] md:text-[220px] font-serif font-light text-[#DDD5C7]/15 select-none pointer-events-none tracking-widest leading-none">
        ATELIER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-xs font-semibold text-[#181615] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Canva-Style Infographical Execution</span>
          </div>

          <h2 className="font-editorial-h2 text-[#181615]">
            The 5-Milestone Turnkey Journey
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            From millimeter laser site scans to off-site German CNC fabrication and a strict 45-day penalty-backed
            handover. Experience total architectural transparency with Sneha Enterprises.
          </p>
        </div>

        {/* Timeline Navigation Dots (Quick Jump) */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#F3EFE6] border border-[#DDD5C7] shadow-sm gap-2">
            {WORKFLOW_MILESTONES.map((m) => (
              <button
                key={m.stepNumber}
                onClick={() => setActiveStep(m.stepIndex)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeStep === m.stepIndex
                    ? 'bg-[#FFFFFF] text-[#181615] shadow-card-depth border border-[#E5D2BA]'
                    : 'text-[#8C8479] hover:text-[#181615]'
                }`}
              >
                <span>Step {m.stepNumber}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Infographical Connected Cards Grid */}
        <div className="relative">
          {/* Vertical Connecting Champagne Line for Desktop */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#C8A97E] via-[#DDD5C7] to-[#C8A97E] dashed pointer-events-none" />

          <div className="space-y-10 lg:space-y-16">
            {WORKFLOW_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 1;
              const isActive = activeStep === milestone.stepIndex;

              return (
                <div
                  key={milestone.stepNumber}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'
                    }`}
                  >
                    <StepGraphicCard
                      milestone={milestone}
                      isEven={isEven}
                      isActive={isActive}
                    />
                  </div>

                  {/* Center Node Pin (Desktop) */}
                  <div className="hidden lg:flex lg:col-span-2 lg:order-2 lg:col-start-6 justify-center items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-md border-2 transition-transform duration-300 ${
                        isActive
                          ? 'bg-[#C8A97E] border-white text-[#181615] scale-125 ring-4 ring-[#E5D2BA]'
                          : 'bg-[#FFFFFF] border-[#DDD5C7] text-[#8C8479]'
                      }`}
                    >
                      {milestone.stepNumber}
                    </div>
                  </div>

                  {/* Supporting Context Pill on opposite side */}
                  <div
                    className={`hidden lg:block lg:col-span-5 ${
                      isEven ? 'lg:order-1 lg:text-right' : 'lg:order-3'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-[#F3EFE6]/70 border border-[#EDE7DC] space-y-2 inline-block max-w-sm">
                      <span className="text-[11px] font-semibold text-[#3A6B56] uppercase tracking-wider block">
                        Sneha Enterprises Protocol
                      </span>
                      <p className="text-xs text-[#5E5952] leading-relaxed">
                        Milestone {milestone.stepNumber} is verified via digital photo logs on your client portal before
                        transitioning to the next manufacturing phase.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Turnkey Guarantee Highlight */}
        <div className="mt-20 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5D2BA] shadow-soft-luxury text-center space-y-4 max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] mx-auto flex items-center justify-center text-[#C8A97E]">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h3 className="font-editorial-h3 text-xl text-[#181615]">
            Backed by the Sneha Enterprises 45-Day Performance Bond
          </h3>

          <p className="text-xs text-[#5E5952] max-w-xl mx-auto leading-relaxed">
            Our contracts contain an explicit delay penalty clause. If handover takes 46 days instead of 45,
            we credit ₹1,500 for every additional day. That is the conviction of German precision.
          </p>

          <div className="pt-2">
            <MagneticButton href="#estimator" variant="primary" size="md">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Configure Your Project Milestone Plan</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
