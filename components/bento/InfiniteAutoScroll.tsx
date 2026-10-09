'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { ServiceCard } from '@/lib/assets';
import { resolveImagePath, DESIGN_CATALOG } from '@/lib/designCatalog';

interface InfiniteAutoScrollProps {
  residentialCards: ServiceCard[];
  commercialCards: ServiceCard[];
  activeTrack: 'residential' | 'commercial';
  onSelectCard?: (serviceId: string) => void;
}

export default function InfiniteAutoScroll({
  residentialCards,
  commercialCards,
  activeTrack,
}: InfiniteAutoScrollProps) {
  // Strictly filter by activeTrack: Residential shows ONLY residential cards; Commercial shows ONLY commercial cards
  const displayCards = activeTrack === 'residential' ? residentialCards : commercialCards;

  // Duplicate cards for seamless infinite loop (3x ensures no gaps on ultra-wide screens)
  const loopCards = [...displayCards, ...displayCards, ...displayCards];

  return (
    <div className="relative w-full select-none overflow-hidden py-3">
      {/* Infinite Auto-Scroll Stream */}
      <div className="relative w-full overflow-hidden">
        <div
          className="animate-marquee gap-6 flex hover:[animation-play-state:paused]"
          style={{ animationDuration: '36s' }}
        >
          {loopCards.map((card, idx) => (
            <StreamCard
              key={`${activeTrack}-${card.id}-${idx}`}
              card={card}
            />
          ))}
        </div>
      </div>

      {/* Interactive Helper Hint */}
      <div className="text-center pt-5">
        <p className="text-xs text-plaster-muted font-mono tracking-wider">
          Hover to pause · Click any card to open its dedicated architectural showcase page
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// StreamCard: Minimalist Luxury Card Linking to /services/[serviceId]
// ─────────────────────────────────────────────────────────────
function StreamCard({
  card,
}: {
  card: ServiceCard;
}) {
  const catalog = DESIGN_CATALOG[card.id];
  const coverImage = catalog ? catalog.coverImage : card.image;
  const layoutCount = catalog ? catalog.designs.length : 5;

  return (
    <Link
      href={`/services/${card.id}`}
      className="group relative w-[280px] sm:w-[360px] md:w-[400px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/70 hover:shadow-[0_20px_45px_rgba(158,120,62,0.25)] flex flex-col justify-between shrink-0 cursor-pointer will-change-transform hover:-translate-y-1 block"
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

      {/* Bottom Content: Clean Headline ONLY + Direct Link Indicator */}
      <div className="relative z-10 p-5 sm:p-6 space-y-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight font-light leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:text-gold-light transition-colors">
            {card.title}
          </h3>
        </div>

        {/* Action Button: Direct Link to Dedicated Showcase */}
        <div className="pt-2 flex items-center justify-between border-t border-white/15">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold-light font-sans font-semibold group-hover:text-white transition-colors">
            <span>Explore All {layoutCount} Layouts</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold flex items-center justify-center text-white transition-all shadow-md">
            <Eye size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
}
