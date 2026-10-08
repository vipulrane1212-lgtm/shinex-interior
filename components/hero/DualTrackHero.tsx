'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTrack } from '@/context/TrackContext';
import { RESIDENTIAL_HERO_IMAGE, COMMERCIAL_HERO_IMAGE } from '@/lib/assets';
import { ArrowUpRight, Home, Building2, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function DualTrackHero() {
  const { track, setTrack } = useTrack();
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);

  // GSAP Hover animations on desktop
  const handleMouseEnter = (side: 'left' | 'right') => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    if (side === 'left') {
      gsap.to(leftRef.current, { flex: '0 0 65%', duration: 0.6, ease: 'power3.out' });
      gsap.to(rightRef.current, { flex: '0 0 35%', duration: 0.6, ease: 'power3.out' });
      gsap.to(leftImgRef.current, { scale: 1.08, duration: 0.8, ease: 'power2.out' });
      gsap.to(rightImgRef.current, { filter: 'brightness(0.85) contrast(1)', duration: 0.6 });
      gsap.to(leftImgRef.current, { filter: 'brightness(1.05) contrast(1.05)', duration: 0.6 });
    } else {
      gsap.to(rightRef.current, { flex: '0 0 65%', duration: 0.6, ease: 'power3.out' });
      gsap.to(leftRef.current, { flex: '0 0 35%', duration: 0.6, ease: 'power3.out' });
      gsap.to(rightImgRef.current, { scale: 1.08, duration: 0.8, ease: 'power2.out' });
      gsap.to(leftImgRef.current, { filter: 'brightness(0.85) contrast(1)', duration: 0.6 });
      gsap.to(rightImgRef.current, { filter: 'brightness(1.05) contrast(1.05)', duration: 0.6 });
    }
  };

  const handleMouseLeave = () => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    gsap.to([leftRef.current, rightRef.current], {
      flex: '0 0 50%',
      duration: 0.6,
      ease: 'power3.out',
    });
    gsap.to([leftImgRef.current, rightImgRef.current], {
      scale: 1,
      filter: 'brightness(1) contrast(1)',
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const handleSelectTrack = (selectedTrack: 'residential' | 'commercial') => {
    setTrack(selectedTrack);
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[92vh] lg:h-screen flex flex-col lg:flex-row overflow-hidden bg-ink select-none pt-20 lg:pt-0"
    >
      {/* ─────────────────────────────────────────────────────────────
          LEFT SIDE: RESIDENTIAL TRACK
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={leftRef}
        onMouseEnter={() => handleMouseEnter('left')}
        onClick={() => handleSelectTrack('residential')}
        className={`relative flex-1 group cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-ink-border/60 transition-all duration-300 min-h-[50vh] lg:min-h-full flex items-end p-6 sm:p-8 md:p-14 py-12 sm:py-14 ${
          track === 'residential' ? 'ring-1 ring-gold/40' : ''
        }`}
      >
        {/* Background Image Container */}
        <div
          ref={leftImgRef}
          className="absolute inset-0 z-0 origin-center transition-transform will-change-transform"
        >
          <Image
            src={RESIDENTIAL_HERO_IMAGE}
            alt="ShineX Luxury Residential Architecture"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />
        </div>

        {/* Cinematic Dark Gradient Overlays for High-Contrast Luxury Typography */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/55 to-black/20 opacity-90 group-hover:opacity-85 transition-opacity pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/40 to-transparent opacity-80 hidden lg:block pointer-events-none" />

        {/* Active Track Highlight Badge */}
        {track === 'residential' && (
          <div className="absolute top-24 left-6 sm:left-8 z-20 hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold text-white text-[11px] font-sans font-bold tracking-widest uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Active Track
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-20 max-w-xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gold-light text-[11px] sm:text-xs uppercase font-mono tracking-[0.2em] font-medium shadow-lg">
            <Home size={13} className="text-gold-light" />
            <span>Track 01 · Residential Homes</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight font-light leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Luxury Interiors &amp; <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-light">Custom Homes.</span>
            </h2>
            <span className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light block mt-1.5 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Modular Kitchens · Luxury Bedrooms · Turnkey Interiors
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gold hover:bg-gold-light text-white text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider shadow-[0_8px_25px_rgba(158,120,62,0.45)] transition-all"
            >
              <span>Explore Homes</span>
              <ArrowUpRight size={14} />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-zinc-300/80 font-mono hidden sm:inline drop-shadow">
              10-Year Warranty · Direct Factory Build
            </span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          RIGHT SIDE: COMMERCIAL & CIVIL TRACK
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={rightRef}
        onMouseEnter={() => handleMouseEnter('right')}
        onClick={() => handleSelectTrack('commercial')}
        className={`relative flex-1 group cursor-pointer overflow-hidden transition-all duration-300 min-h-[50vh] lg:min-h-full flex items-end p-6 sm:p-8 md:p-14 py-12 sm:py-14 ${
          track === 'commercial' ? 'ring-1 ring-gold/40' : ''
        }`}
      >
        {/* Background Image Container */}
        <div
          ref={rightImgRef}
          className="absolute inset-0 z-0 origin-center transition-transform will-change-transform"
        >
          <Image
            src={COMMERCIAL_HERO_IMAGE}
            alt="ShineX Commercial Infrastructure and Civil Contracts"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />
        </div>

        {/* Cinematic Dark Gradient Overlays for High-Contrast Luxury Typography */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/55 to-black/20 opacity-90 group-hover:opacity-85 transition-opacity pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/85 via-black/40 to-transparent opacity-80 hidden lg:block pointer-events-none" />

        {/* Active Track Highlight Badge */}
        {track === 'commercial' && (
          <div className="absolute top-24 right-6 sm:right-8 z-20 hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold text-white text-[11px] font-sans font-bold tracking-widest uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Active Track
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-20 max-w-xl space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gold-light text-[11px] sm:text-xs uppercase font-mono tracking-[0.2em] font-medium shadow-lg">
            <Building2 size={13} className="text-gold-light" />
            <span>Track 02 · Commercial &amp; Civil</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight font-light leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Offices, Showrooms &amp; <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-light">Civil Works.</span>
            </h2>
            <span className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light block mt-1.5 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Complete Office Fit-outs &amp; Licensed Civil Contracts
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gold hover:bg-gold-light text-white text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider shadow-[0_8px_25px_rgba(158,120,62,0.45)] transition-all"
            >
              <span>Explore Commercial</span>
              <ArrowUpRight size={14} />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-zinc-300/80 font-mono hidden sm:inline drop-shadow">
              Offices · Retail · Tenders
            </span>
          </div>
        </div>
      </div>

      {/* Center Divider Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-mono drop-shadow">
          Tap to choose your project type
        </span>
        <div className="w-8 h-8 rounded-full border border-white/30 bg-black/60 backdrop-blur-md flex items-center justify-center text-gold-light animate-bounce shadow-md">
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
}
