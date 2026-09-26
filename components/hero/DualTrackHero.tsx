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
      gsap.to(rightImgRef.current, { filter: 'brightness(0.5) contrast(0.95)', duration: 0.6 });
      gsap.to(leftImgRef.current, { filter: 'brightness(0.95) contrast(1.05)', duration: 0.6 });
    } else {
      gsap.to(rightRef.current, { flex: '0 0 65%', duration: 0.6, ease: 'power3.out' });
      gsap.to(leftRef.current, { flex: '0 0 35%', duration: 0.6, ease: 'power3.out' });
      gsap.to(rightImgRef.current, { scale: 1.08, duration: 0.8, ease: 'power2.out' });
      gsap.to(leftImgRef.current, { filter: 'brightness(0.5) contrast(0.95)', duration: 0.6 });
      gsap.to(rightImgRef.current, { filter: 'brightness(0.95) contrast(1.05)', duration: 0.6 });
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
      filter: 'brightness(0.75) contrast(1)',
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
        className={`relative flex-1 group cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-ink-border/60 transition-all duration-300 min-h-[46vh] lg:min-h-full flex items-end p-6 sm:p-8 md:p-14 ${
          track === 'residential' ? 'ring-1 ring-gold/40' : ''
        }`}
      >
        {/* Background Image Container */}
        <div
          ref={leftImgRef}
          className="absolute inset-0 z-0 origin-center transition-transform will-change-transform"
          style={{ filter: 'brightness(0.75)' }}
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

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 lg:opacity-80 group-hover:opacity-75 transition-opacity" />
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-ink/80 via-transparent to-transparent opacity-70 hidden lg:block" />

        {/* Active Track Highlight Badge */}
        {track === 'residential' && (
          <div className="absolute top-24 left-6 sm:left-8 z-10 hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-white text-[11px] font-sans font-bold tracking-widest uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Active Track
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="flex items-center gap-2 text-gold">
            <Home size={15} />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              Track 01 · Residential Atelier
            </span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-plaster tracking-tight font-normal leading-[1.04] group-hover:text-gold-light transition-colors">
              Design Your <br className="hidden sm:inline" />
              Dream Home.
            </h2>
            <span className="font-script text-2xl sm:text-3xl text-gold block capitalize mt-1 leading-none">
              bespoke living sanctuaries
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="btn-luxury inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
            >
              <span>Explore Residential</span>
              <ArrowUpRight size={14} />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-plaster-muted font-mono hidden sm:inline">
              Kitchens · Bedrooms · Turnkey
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
        className={`relative flex-1 group cursor-pointer overflow-hidden transition-all duration-300 min-h-[46vh] lg:min-h-full flex items-end p-6 sm:p-8 md:p-14 ${
          track === 'commercial' ? 'ring-1 ring-gold/40' : ''
        }`}
      >
        {/* Background Image Container */}
        <div
          ref={rightImgRef}
          className="absolute inset-0 z-0 origin-center transition-transform will-change-transform"
          style={{ filter: 'brightness(0.75)' }}
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

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 lg:opacity-80 group-hover:opacity-75 transition-opacity" />
        <div className="absolute inset-0 z-1 bg-gradient-to-l from-ink/80 via-transparent to-transparent opacity-70 hidden lg:block" />

        {/* Active Track Highlight Badge */}
        {track === 'commercial' && (
          <div className="absolute top-24 right-6 sm:right-8 z-10 hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-gold text-white text-[11px] font-sans font-bold tracking-widest uppercase shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Active Track
          </div>
        )}

        {/* Content Container */}
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="flex items-center gap-2 text-gold">
            <Building2 size={15} />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              Track 02 · Commercial &amp; Civil
            </span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-plaster tracking-tight font-normal leading-[1.04] group-hover:text-gold-light transition-colors">
              Build Your Business. <br className="hidden sm:inline" />
              Claim Your Contract.
            </h2>
            <span className="font-script text-2xl sm:text-3xl text-gold block capitalize mt-1 leading-none">
              direct civil precision &amp; scale
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="btn-luxury inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
            >
              <span>Explore Commercial</span>
              <ArrowUpRight size={14} />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-plaster-muted font-mono hidden sm:inline">
              Offices · Civil Works · Tenders
            </span>
          </div>
        </div>
      </div>

      {/* Center Divider Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 pointer-events-none opacity-80">
        <span className="text-[10px] uppercase tracking-[0.25em] text-plaster-dim font-mono">
          Hover to inspect · Click to enter
        </span>
        <div className="w-8 h-8 rounded-full border border-ink-border bg-ink/70 flex items-center justify-center text-gold animate-bounce">
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  );
}
