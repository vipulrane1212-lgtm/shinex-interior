'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useQuiz } from '@/context/QuizContext';
import {
  Compass,
  Box,
  Hammer,
  KeyRound,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

interface TimelineNode {
  step: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  specs: string[];
  image: string;
  badge: string;
}

const TIMELINE_STEPS: TimelineNode[] = [
  {
    step: '01',
    title: 'Atelier Consultation',
    tagline: 'Physical material boards, spatial audit & realistic budget alignment.',
    icon: <Compass size={22} className="text-gold" />,
    specs: ['45-Minute Atelier Audit', 'Quartz & Veneer Tactile Touch', 'Preliminary BOQ Estimate'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badge: 'Discovery & Feasibility',
  },
  {
    step: '02',
    title: '3D CAD & Photorealistic Design',
    tagline: 'Every shadow gap, socket run, and carcass millimeter validated before fabrication.',
    icon: <Box size={22} className="text-gold" />,
    specs: ['1:1 Millimetric Precision', '4K Cinematic VR Walkthrough', 'Ergonomic Work Triangle'],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    badge: 'Virtual Validation',
  },
  {
    step: '03',
    title: 'Direct Civil & Modular Execution',
    tagline: 'No subcontracting drift. Sneha Enterprises civil crews and Turbhe factory carpentry.',
    icon: <Hammer size={22} className="text-gold" />,
    specs: ['Sneha Civil Licensure', 'Laser Tile Leveling', 'Blum & Hafele Hardware'],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    badge: 'Direct Execution',
  },
  {
    step: '04',
    title: 'Snag-Free Handover & Warranty',
    tagline: 'Deep-cleaned residence, digital as-built MEP schematics, and 10-year warranty.',
    icon: <KeyRound size={22} className="text-gold" />,
    specs: ['10-Year Moisture Warranty', 'Digital MEP Drawings', 'Dedicated Studio Support'],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    badge: '10-Year Guarantee',
  },
];

export default function ProcessTimeline() {
  const { openQuiz } = useQuiz();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-36 bg-ink border-b border-ink-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block">
            Why Choose ShineX
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-normal">
            The 4-Stage Architectural Protocol.
          </h2>
          <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed">
            Eliminating contractor opacity with millimetric precision, direct civil licensure, and guaranteed handover timelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Central Glowing Vertical Progress Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20 shadow-[0_0_15px_rgba(197,168,128,0.5)] pointer-events-none" />

          {/* 4 Visual Milestone Nodes */}
          <div className="space-y-12 lg:space-y-24">
            {TIMELINE_STEPS.map((node, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={node.step}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left / Text Side */}
                  <div className={`w-full lg:w-1/2 space-y-4 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`flex items-center gap-3 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      <span className="px-3 py-1 rounded-full bg-ink-card border border-ink-border text-[10px] text-gold font-mono uppercase tracking-widest">
                        {node.badge}
                      </span>
                      <span className="text-sm font-mono text-gold font-bold">
                        PHASE {node.step}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-plaster font-normal">
                      {node.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed max-w-md inline-block">
                      {node.tagline}
                    </p>

                    {/* Specs Chips */}
                    <div
                      className={`flex flex-wrap gap-2 pt-2 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      {node.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-card border border-ink-border text-[11px] text-plaster-muted font-light"
                        >
                          <CheckCircle2 size={12} className="text-gold" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center Node Icon Bulb */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-ink border-2 border-gold items-center justify-center shadow-[0_0_25px_rgba(197,168,128,0.5)]">
                    {node.icon}
                  </div>

                  {/* Right / Photographic Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-ink-border bg-ink-card group hover:border-gold/60 transition-all duration-500 shadow-xl">
                      <Image
                        src={node.image}
                        alt={node.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-plaster">
                        <span className="font-mono text-[10px] text-gold uppercase tracking-wider">
                          Protocol 0{idx + 1}
                        </span>
                        <span className="text-[11px] font-medium text-plaster bg-ink/75 backdrop-blur-md px-3 py-1 rounded-full border border-ink-border">
                          Direct Supervision
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="mt-20 p-6 md:p-10 rounded-2xl bg-ink-card border border-ink-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider text-gold font-mono font-medium block">
              Ready to break ground?
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-plaster">
              Begin with Step 01: Free Atelier Consultation.
            </h4>
            <p className="text-xs text-plaster-muted font-light">
              Visit our Seawoods studio or request an on-site structural audit.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openQuiz()}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-ink text-xs font-semibold uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all"
          >
            <span>Launch Quotation Wizard</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
