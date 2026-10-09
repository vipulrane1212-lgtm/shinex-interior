'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BEFORE_AFTER_PAIRS, BeforeAfterPair } from '@/lib/assets';
import { resolveImagePath } from '@/lib/designCatalog';
import { ArrowLeftRight, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useTrack } from '@/context/TrackContext';

export default function BeforeAfterSlider() {
  const { track } = useTrack();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject: BeforeAfterPair = BEFORE_AFTER_PAIRS[activeProjectIndex] || BEFORE_AFTER_PAIRS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPos);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <section id="transformation" className="py-24 md:py-32 bg-ink border-b border-ink-border/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-semibold">
                From Raw Civil to Luxury Finish.
              </h2>
              <span className="text-sm sm:text-base md:text-lg text-gold font-sans font-medium block mt-1 tracking-wide">
                100% real site execution across Mumbai &amp; Navi Mumbai
              </span>
            </div>
          </div>

          {/* Next / Previous Slider Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-ink-card border border-ink-border text-xs font-mono font-bold text-gold tracking-widest shadow-xs">
              0{activeProjectIndex + 1} / 0{BEFORE_AFTER_PAIRS.length}
            </span>
            <button
              type="button"
              onClick={() => {
                setActiveProjectIndex((prev) => (prev - 1 + BEFORE_AFTER_PAIRS.length) % BEFORE_AFTER_PAIRS.length);
                setSliderPosition(50);
              }}
              aria-label="Previous Transformation"
              className="w-10 h-10 rounded-full bg-ink-card border border-ink-border hover:border-gold hover:bg-gold hover:text-white text-plaster flex items-center justify-center transition-all shadow-xs group"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveProjectIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length);
                setSliderPosition(50);
              }}
              aria-label="Next Transformation"
              className="w-10 h-10 rounded-full bg-ink-card border border-ink-border hover:border-gold hover:bg-gold hover:text-white text-plaster flex items-center justify-center transition-all shadow-xs group"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] rounded-2xl overflow-hidden border border-ink-border bg-ink cursor-ew-resize select-none shadow-2xl skeleton-shimmer"
        >
          {/* Bottom Layer: After Image (Turnkey Handover - Right Side) */}
          <div className="absolute inset-0">
            <Image
              src={resolveImagePath(activeProject.afterImage)}
              alt={activeProject.afterLabel}
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Handover Tag */}
            <div className="absolute top-6 right-6 z-10 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-emerald-400/40 text-[11px] font-mono uppercase text-emerald-300 tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{activeProject.afterLabel}</span>
            </div>
          </div>

          {/* Top Layer: Before Image (Raw Civil Site - Left Side) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <Image
              src={resolveImagePath(activeProject.beforeImage)}
              alt={activeProject.beforeLabel}
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Raw Site Tag */}
            <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase text-zinc-300 tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{activeProject.beforeLabel}</span>
            </div>
          </div>

          {/* Vertical Slider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-gold"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Draggable Knob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/90 border-2 border-gold flex items-center justify-center text-gold-light shadow-[0_0_25px_rgba(158,120,62,0.6)] transition-transform group-hover:scale-110">
              <ArrowLeftRight size={16} />
            </div>
          </div>

          {/* Interactive Drag Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] uppercase font-mono tracking-widest text-zinc-300 pointer-events-none shadow-md">
            Drag to compare transformation
          </div>
        </div>

        {/* Project Meta & Technical Specifications */}
        <div className="mt-8 uiverse-container">
          <div className="uiverse-blob1" />
          <div className="uiverse-blob2" />
          <div className="uiverse-inner-box flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 relative z-10 max-w-2xl">
              <div className="uiverse-pill">
                <div className="uiverse-blob1" />
                <div className="uiverse-blob2" />
                <div className="uiverse-inner">
                  <Sparkles size={12} className="text-cyan-300 shrink-0" />
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-white drop-shadow">
                    Custom Architectural Transformation
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold">
                Have a Raw Civil Site or Turnkey Project in Mind?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-sans font-normal leading-relaxed">
                Direct factory pricing, licensed Class-1 execution &amp; fixed BOQ contract with 10-year warranty.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {activeProject.specs.map((spec) => (
                  <span
                    key={spec}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-white/20 text-[11px] font-sans font-semibold text-zinc-200 shadow-2xs hover:border-cyan-400/50 transition-colors"
                  >
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Button for This Specific Transformation */}
            <Link
              href={`/quote?transformation=${activeProject.id}&track=${track}`}
              className="btn-luxury shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-sans font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all relative z-10"
            >
              <span>Request Similar Quote</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
