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
  icon: React.ReactNode;
  specs: string[];
  image: string;
  badge: string;
}

const TIMELINE_STEPS: TimelineNode[] = [
  {
    step: '01',
    title: 'Free Site Visit & Budgeting',
    icon: <Compass size={22} className="text-gold" />,
    specs: ['Laser Site Measurement', 'Material & Laminate Samples', 'Zero Hidden Cost Quote'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badge: 'Phase 1: Planning',
  },
  {
    step: '02',
    title: '3D Design & Material Selection',
    icon: <Box size={22} className="text-gold" />,
    specs: ['Photorealistic 3D Views', 'Color & Laminate Matching', 'Detailed Room Plans'],
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    badge: 'Phase 2: 3D Design',
  },
  {
    step: '03',
    title: 'Direct Civil & Modular Build',
    icon: <Hammer size={22} className="text-gold" />,
    specs: ['Class-1 Civil Licensure', 'German Hardware (Hafele/Blum)', 'Factory-Pressed Finish'],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    badge: 'Phase 3: Execution',
  },
  {
    step: '04',
    title: 'Quality Handover & 10-Yr Warranty',
    icon: <KeyRound size={22} className="text-gold" />,
    specs: ['10-Year Waterproof Warranty', 'Complete Electrical & Plumbing Layout', 'Dedicated After-Sales Service'],
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    badge: 'Phase 4: Handover',
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
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block">
            How We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-semibold">
            Our 4-Step Working Process.
          </h2>
          <span className="text-sm sm:text-base md:text-lg text-gold font-sans font-medium block mt-1 tracking-wide">
            Clear milestones, direct execution &amp; guaranteed on-time handover
          </span>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Central Glowing Vertical Progress Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20 shadow-[0_0_15px_rgba(158,120,62,0.4)] pointer-events-none" />

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
                      <div className="uiverse-pill">
                        <div className="uiverse-blob1" />
                        <div className="uiverse-blob2" />
                        <div className="uiverse-inner">
                          <span className="text-xs text-white font-mono uppercase tracking-widest font-bold drop-shadow">
                            {node.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold tracking-tight">
                      {node.title}
                    </h3>

                    {/* Creative Deliverables & Milestones */}
                    <div
                      className={`flex flex-wrap gap-2.5 pt-2 ${
                        isEven ? 'lg:justify-end' : 'lg:justify-start'
                      }`}
                    >
                      {node.specs.map((spec) => (
                        <div
                          key={spec}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-ink-card border border-ink-border hover:border-gold/60 shadow-xs hover:shadow-md transition-all group"
                        >
                          <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0 group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={12} className="stroke-[2.5]" />
                          </div>
                          <span className="text-xs font-sans font-bold text-plaster tracking-wide group-hover:text-gold transition-colors">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Node Icon Bulb (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-ink border-2 border-gold items-center justify-center shadow-[0_0_25px_rgba(158,120,62,0.35)]">
                    {node.icon}
                  </div>

                  {/* Right / Photographic Card with Shimmer Placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-ink-border bg-ink-card group hover:border-gold/60 transition-all duration-500 shadow-xl skeleton-shimmer">
                      <Image
                        src={node.image}
                        alt={node.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                      />
                      {/* Gradient Scrim for Card Tag Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] text-gold uppercase tracking-wider drop-shadow font-bold">
                          Phase 0{idx + 1}
                        </span>
                        <span className="text-[11px] font-sans font-medium text-zinc-200 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
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
              Ready to start your project?
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-semibold text-plaster">
              Begin with Phase 1: Free Site Visit &amp; 3D Plan.
            </h4>
            <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal">
              Our senior interior engineer will inspect your site in Mumbai or Navi Mumbai with zero obligation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openQuiz()}
            className="btn-luxury shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
          >
            <span>Get Free Estimate (15% Off)</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
