'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTrack } from '@/context/TrackContext';
import { ServiceCard } from '@/lib/assets';

interface BentoCardProps {
  card: ServiceCard;
  className?: string;
  isMainHero?: boolean;
}

export default function BentoCard({ card, className = '', isMainHero = false }: BentoCardProps) {
  const { track } = useTrack();

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/60 hover:shadow-[0_15px_35px_-5px_rgba(158,120,62,0.18)] flex flex-col justify-between ${className}`}
    >
      {/* Background Image Container */}
      <Link
        href={`/quote?service=${card.id}&track=${track}`}
        className="absolute inset-0 z-0 overflow-hidden bg-ink-soft block"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
        />
        {/* Soft Warm Gradient Overlay for Clean Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
      </Link>

      {/* Top Header Row */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between pointer-events-none">
        <span className="px-3.5 py-1.5 rounded-full bg-ink-card/90 backdrop-blur-md border border-ink-border text-[10px] uppercase tracking-widest text-gold font-mono font-semibold shadow-sm">
          {card.category}
        </span>
        <div className="w-9 h-9 rounded-full bg-ink-card/90 backdrop-blur-md border border-ink-border flex items-center justify-center text-plaster group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-sm">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom Content Row (Uncluttered, Zero Nested Images) */}
      <div className="relative z-10 p-5 sm:p-6 space-y-3">
        <div>
          <span className="font-script text-lg text-gold lowercase block leading-none mb-1">
            bespoke execution
          </span>
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="block text-2xl sm:text-3xl font-serif text-plaster group-hover:text-gold transition-colors leading-tight"
          >
            {card.title}
          </Link>
          <p className="text-xs text-plaster-muted font-sans font-light mt-1.5 line-clamp-2">
            Precision engineering, concealed hardware, and moisture-sealed civil carcasses tailored for Mumbai residences.
          </p>
        </div>

        {/* Direct Action Link */}
        <div className="pt-3 flex items-center justify-between border-t border-ink-border/80">
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="text-xs uppercase tracking-widest text-gold font-sans font-semibold hover:text-plaster transition-colors inline-flex items-center gap-1.5"
          >
            <span>Quote This Space</span>
            <ArrowUpRight size={13} />
          </Link>
          <span className="text-[10px] text-plaster-dim font-mono uppercase">
            1-Click Funnel
          </span>
        </div>
      </div>
    </div>
  );
}
