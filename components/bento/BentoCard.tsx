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
      className={`group relative rounded-2xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/60 hover:shadow-[0_15px_35px_-5px_rgba(158,120,62,0.22)] flex flex-col justify-between ${className}`}
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
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
      </Link>

      {/* Top Header Row with Frosted Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between pointer-events-none">
        <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-gold-light font-mono font-medium shadow-md">
          {card.category}
        </span>
        <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-300 shadow-md">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom Content Row with Cinematic Dark Scrim for Crisp Contrast */}
      <div className="relative z-10 p-5 sm:p-6 space-y-3 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
        <div>
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="block text-xl sm:text-2xl font-serif font-medium text-white group-hover:text-gold-light transition-colors leading-tight drop-shadow-md"
          >
            {card.title}
          </Link>
          <p className="text-xs text-zinc-300 font-sans font-light mt-1.5 drop-shadow">
            Waterproof Marine Ply · German Hardware · 10-Year Warranty
          </p>
        </div>

        {/* Direct Action Link */}
        <div className="pt-2.5 flex items-center justify-between border-t border-white/15">
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="text-xs uppercase tracking-wider text-gold-light font-sans font-semibold hover:text-white transition-colors inline-flex items-center gap-1.5 drop-shadow"
          >
            <span>Get Free Estimate</span>
            <ArrowUpRight size={13} />
          </Link>
          <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
            Instant Quote
          </span>
        </div>
      </div>
    </div>
  );
}
