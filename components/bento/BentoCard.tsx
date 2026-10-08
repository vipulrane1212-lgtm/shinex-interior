'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useTrack } from '@/context/TrackContext';
import { ServiceCard } from '@/lib/assets';
import { DESIGN_CATALOG, resolveImagePath } from '@/lib/designCatalog';

interface BentoCardProps {
  card: ServiceCard;
  className?: string;
  isMainHero?: boolean;
  onOpenStudio?: (serviceId: string) => void;
}

export default function BentoCard({
  card,
  className = '',
  isMainHero = false,
  onOpenStudio,
}: BentoCardProps) {
  const { track } = useTrack();
  const catalog = DESIGN_CATALOG[card.id];
  const coverImage = catalog ? catalog.coverImage : card.image;
  const layoutCount = catalog ? catalog.designs.length : 5;

  const handleClick = (e: React.MouseEvent) => {
    if (onOpenStudio) {
      e.preventDefault();
      onOpenStudio(card.id);
    }
  };

  return (
    <div
      onClick={onOpenStudio ? handleClick : undefined}
      className={`group relative rounded-2xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/60 hover:shadow-[0_15px_35px_-5px_rgba(158,120,62,0.22)] flex flex-col justify-between cursor-pointer ${className}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolveImagePath(coverImage)}
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />
      </div>

      {/* Top Header Row with Frosted Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between pointer-events-none">
        <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-gold-light font-mono font-medium shadow-md">
          {card.category}
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-zinc-300 font-mono">
            <Sparkles size={11} className="text-gold-light" />
            <span>{layoutCount} Layouts</span>
          </span>
          <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-md">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>

      {/* Bottom Content Row with Cinematic Dark Scrim for Crisp Contrast */}
      <div className="relative z-10 p-5 sm:p-6 space-y-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
        <div>
          <h3 className="block text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-gold-light transition-colors leading-tight drop-shadow-md">
            {card.title}
          </h3>
        </div>

        {/* Direct Action Link */}
        <div className="pt-2 flex items-center justify-between border-t border-white/15">
          <span className="text-xs uppercase tracking-wider text-gold-light font-sans font-semibold group-hover:text-white transition-colors inline-flex items-center gap-1.5 drop-shadow">
            <span>Explore {layoutCount} Designs</span>
            <ArrowUpRight size={13} />
          </span>

          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] uppercase tracking-wider text-zinc-400 hover:text-gold font-sans font-medium transition-colors"
          >
            Direct Quote ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
