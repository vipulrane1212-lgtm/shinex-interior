'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BEFORE_AFTER_PAIRS, BeforeAfterPair } from '@/lib/assets';
import { ArrowLeftRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
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
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-semibold block">
              Real Site Transformations
            </span>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-semibold">
                From Raw Civil to Luxury Finish.
              </h2>
              <span className="text-sm sm:text-base md:text-lg text-gold font-sans font-medium block mt-1 tracking-wide">
                100% real site execution across Mumbai &amp; Navi Mumbai
              </span>
            </div>
            <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal leading-relaxed">
              Drag the center slider to compare the raw brickwork against our factory-finished interior handover.
            </p>
          </div>

          {/* Project Switcher Pills */}
          <div className="flex flex-wrap gap-2">
            {BEFORE_AFTER_PAIRS.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all ${
                  activeProjectIndex === idx
                    ? 'bg-gold text-white font-semibold shadow-lg'
                    : 'bg-ink-card border border-ink-border text-plaster-muted hover:text-plaster'
                }`}
              >
                {proj.title.split(' ')[0]} {proj.title.split(' ')[1]}
              </button>
            ))}
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
              src={activeProject.afterImage}
              alt={activeProject.afterLabel}
              fill
              sizes="100vw"
              className="object-cover"
            />
            {/* Handover Tag */}
            <div className="absolute top-6 right-6 z-10 px-4 py-1.5 rounded-full bg-ink/85 backdrop-blur-md border border-gold/40 text-[11px] font-mono uppercase text-gold tracking-wider">
              {activeProject.afterLabel}
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
              src={activeProject.beforeImage}
              alt={activeProject.beforeLabel}
              fill
              sizes="100vw"
              className="object-cover grayscale contrast-125"
            />
            {/* Raw Site Tag */}
            <div className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full bg-ink/85 backdrop-blur-md border border-ink-border text-[11px] font-mono uppercase text-plaster-muted tracking-wider">
              {activeProject.beforeLabel}
            </div>
          </div>

          {/* Vertical Slider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-gold"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Draggable Knob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_20px_rgba(158,120,62,0.5)] transition-transform group-hover:scale-110">
              <ArrowLeftRight size={16} />
            </div>
          </div>

          {/* Interactive Drag Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full bg-ink/75 backdrop-blur-md border border-ink-border text-[10px] uppercase font-mono tracking-widest text-plaster-dim pointer-events-none">
            Drag to compare transformation
          </div>
        </div>

        {/* Project Meta & Technical Specifications */}
        <div className="mt-8 p-6 md:p-8 rounded-xl bg-ink-card border border-ink-border/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
              {activeProject.location}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-plaster font-normal">
              {activeProject.title}
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.specs.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink border border-ink-border/80 text-[11px] text-plaster-muted font-sans"
                >
                  <CheckCircle2 size={12} className="text-gold" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Quote Button for This Specific Transformation */}
          <Link
            href={`/quote?transformation=${activeProject.id}&track=${track}`}
            className="btn-luxury shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
          >
            <span>Quote Similar Project</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
