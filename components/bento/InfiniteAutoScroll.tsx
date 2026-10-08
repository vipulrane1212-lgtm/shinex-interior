'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Pause, Play, Eye } from 'lucide-react';
import { ServiceCard } from '@/lib/assets';
import { resolveImagePath, DESIGN_CATALOG } from '@/lib/designCatalog';

interface InfiniteAutoScrollProps {
  residentialCards: ServiceCard[];
  commercialCards: ServiceCard[];
  onSelectCard: (serviceId: string) => void;
  activeTrack: 'residential' | 'commercial';
}

export default function InfiniteAutoScroll({
  residentialCards,
  commercialCards,
  onSelectCard,
  activeTrack,
}: InfiniteAutoScrollProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'residential' | 'commercial'>(
    activeTrack === 'residential' ? 'residential' : 'commercial'
  );

  // Duplicate cards for seamless infinite loop (3x ensures no gaps on ultra-wide screens)
  const loopResidential = [...residentialCards, ...residentialCards, ...residentialCards];
  const loopCommercial = [...commercialCards, ...commercialCards, ...commercialCards];

  return (
    <div className="relative w-full space-y-8 select-none overflow-hidden">
      {/* Control & Mode Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-2 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 font-semibold">
            Infinite Cinematic Stream · 10 Prime Categories · 50 Architectural Layouts
          </span>
        </div>

        {/* Filter Pills + Pause Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center p-1 rounded-full bg-ink-soft/80 border border-ink-border">
            <button
              type="button"
              onClick={() => setSelectedFilter('residential')}
              className={`px-3.5 py-1 rounded-full text-xs font-sans transition-all ${
                selectedFilter === 'residential'
                  ? 'bg-gold text-white font-semibold shadow-md'
                  : 'text-plaster-muted hover:text-plaster'
              }`}
            >
              Residential (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('commercial')}
              className={`px-3.5 py-1 rounded-full text-xs font-sans transition-all ${
                selectedFilter === 'commercial'
                  ? 'bg-gold text-white font-semibold shadow-md'
                  : 'text-plaster-muted hover:text-plaster'
              }`}
            >
              Commercial (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1 rounded-full text-xs font-sans transition-all ${
                selectedFilter === 'all'
                  ? 'bg-gold text-white font-semibold shadow-md'
                  : 'text-plaster-muted hover:text-plaster'
              }`}
            >
              Dual Stream (10)
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'Play auto-scroll' : 'Pause auto-scroll'}
            className="w-8 h-8 rounded-full bg-ink-soft border border-ink-border hover:border-gold flex items-center justify-center text-plaster hover:text-gold transition-colors"
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
          </button>
        </div>
      </div>

      {/* Row 1: Residential Stream (Scrolling Left) */}
      {(selectedFilter === 'all' || selectedFilter === 'residential') && (
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Edge Vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-ink to-transparent pointer-events-none" />

          <div
            className={`animate-marquee gap-6 flex ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '38s' }}
          >
            {loopResidential.map((card, idx) => (
              <StreamCard
                key={`res-${card.id}-${idx}`}
                card={card}
                onClick={() => onSelectCard(card.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Row 2: Commercial Stream (Scrolling Right) */}
      {(selectedFilter === 'all' || selectedFilter === 'commercial') && (
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle Edge Vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-ink to-transparent pointer-events-none" />

          <div
            className={`animate-marquee-reverse gap-6 flex ${isPaused ? '[animation-play-state:paused]' : ''}`}
            style={{ animationDuration: '40s' }}
          >
            {loopCommercial.map((card, idx) => (
              <StreamCard
                key={`com-${card.id}-${idx}`}
                card={card}
                onClick={() => onSelectCard(card.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Interactive Helper Hint */}
      <div className="text-center pt-2">
        <p className="text-xs text-plaster-muted font-mono tracking-wider">
          Hover to pause · Click any card to explore all 5 design variants in the Architectural Studio
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// StreamCard: Minimalist Luxury Card with Click-to-Studio
// ─────────────────────────────────────────────────────────────
function StreamCard({
  card,
  onClick,
}: {
  card: ServiceCard;
  onClick: () => void;
}) {
  const catalog = DESIGN_CATALOG[card.id];
  const coverImage = catalog ? catalog.coverImage : card.image;
  const layoutCount = catalog ? catalog.designs.length : 5;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative w-[280px] sm:w-[360px] md:w-[400px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/70 hover:shadow-[0_20px_45px_rgba(158,120,62,0.25)] flex flex-col justify-between shrink-0 cursor-pointer will-change-transform hover:-translate-y-1"
    >
      {/* Background Photograph / AI Render */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolveImagePath(coverImage)}
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* Cinematic Dark Gradient for Absolute Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:opacity-90 transition-opacity" />
      </div>

      {/* Top Row Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
        <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-gold-light font-mono font-medium shadow-md">
          {card.category}
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-white text-[10px] font-mono uppercase tracking-wider font-semibold shadow-lg">
          <Sparkles size={11} />
          <span>{layoutCount} Layouts</span>
        </span>
      </div>

      {/* Bottom Content: Clean Headline ONLY + Direct Explore Button */}
      <div className="relative z-10 p-5 sm:p-6 space-y-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight font-light leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:text-gold-light transition-colors">
            {card.title}
          </h3>
        </div>

        {/* Action Button: Explore 5 Designs */}
        <div className="pt-2 flex items-center justify-between border-t border-white/15">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold-light font-sans font-semibold group-hover:text-white transition-colors">
            <span>Explore {layoutCount} Designs</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold flex items-center justify-center text-white transition-all shadow-md">
            <Eye size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
