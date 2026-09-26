'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 75%'],
  });

  return (
    <section id="journey" className="py-24 bg-luxury-canvas border-t border-[#EDE7DC] relative overflow-hidden cove-lighting-wash">
      {/* Background Architectural Drafting Grid & Ambient Radial Light */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Oak Slat Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-12" />

        {/* Ambient Radial Lighting Pool */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[650px] ambient-glow-gold rounded-full" />
        <div className="absolute bottom-12 right-12 w-[500px] h-[450px] ambient-glow-linen rounded-full" />

        {/* Architectural CAD Blueprint Watermark Annotation */}
        <div className="absolute top-12 left-12 hidden 2xl:flex flex-col text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>TIMELINE DWG: PM-05 // CRITICAL PATH METHOD</span>
          <span>SNEHA ENTERPRISES 45-DAY PERFORMANCE BOND</span>
        </div>

        <div className="absolute top-12 right-12 hidden 2xl:flex flex-col items-end text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>LEICA 3D DISTO SCAN // HOMAG DUST-FREE CNC</span>
          <span>DAILY PENALTY: ₹1,500/DAY DELAY CREDIT</span>
        </div>
      </div>

      {/* Editorial Watermark */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[140px] md:text-[220px] font-display-monumental font-extrabold text-[#DDD5C7]/12 select-none pointer-events-none tracking-widest leading-none">
        ATELIER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5D2BA] text-xs font-bold text-[#181615] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Infographical Execution Plan</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] leading-tight">
            The 5-Milestone{' '}
            <span className="font-script font-normal text-gold-gradient text-[1.45em] inline-block transform -rotate-1 relative">
              Turnkey
              <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent" />
            </span>{' '}
            Journey
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            From millimeter laser site scans to off-site German CNC fabrication and a strict 45-day penalty-backed
            handover. Experience total architectural transparency with Sneha Enterprises.
          </p>

          {/* Architectural Dimension Line */}
          <div className="max-w-xs mx-auto pt-2 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#8C8479]/70">
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
            <span>RIGID 45-DAY PERFORMANCE PROTOCOL</span>
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
          </div>
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
        <div ref={containerRef} className="relative">
          {/* Animated SVG Connecting Champagne Line for Desktop */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-6 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 24 100" preserveAspectRatio="none">
              <line
                x1="12"
                y1="0"
                x2="12"
                y2="100"
                stroke="#DDD5C7"
                strokeWidth="2"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
              />
              <motion.line
                x1="12"
                y1="0"
                x2="12"
                y2="100"
                stroke="#C8A97E"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength: scrollYProgress,
                }}
              />
            </svg>
          </div>

          {/* Animated Line for Mobile / Tablet */}
          <div className="lg:hidden absolute top-8 bottom-8 left-6 w-[2px] bg-[#DDD5C7] pointer-events-none z-0">
            <motion.div
              className="w-full bg-[#C8A97E]"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: 'top',
                height: '100%',
              }}
            />
          </div>

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

          <h3 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#181615]">
            Backed by the Sneha Enterprises 45-Day <span className="font-script font-normal text-gold-gradient text-[1.3em]">Performance Bond</span>
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
