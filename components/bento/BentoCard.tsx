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
      className={`group relative rounded-2xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(197,168,128,0.2)] flex flex-col justify-between ${className}`}
    >
      {/* Background Image Container */}
      <Link
        href={`/quote?service=${card.id}&track=${track}`}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
      </Link>

      {/* Top Header Row */}
      <div className="relative z-10 p-6 flex items-start justify-between pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-ink/75 backdrop-blur-md border border-ink-border text-[10px] uppercase tracking-widest text-gold font-mono font-medium">
          {card.category}
        </span>
        <div className="w-9 h-9 rounded-full bg-ink/80 backdrop-blur-md border border-ink-border flex items-center justify-center text-plaster group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-300">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Bottom Content / Sub-cards */}
      <div className="relative z-10 p-6 space-y-4">
        <div>
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="block text-2xl sm:text-3xl font-serif text-plaster group-hover:text-gold-light transition-colors leading-tight"
          >
            {card.title}
          </Link>
        </div>

        {/* Nested Sub-Cards Grid (if present, e.g., L-shaped, U-shaped, Island, Parallel) */}
        {card.subCards && card.subCards.length > 0 && (
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {card.subCards.map((sub) => (
              <Link
                key={sub.id}
                href={`/quote?service=${card.id}&sub=${sub.id}&track=${track}`}
                className="group/sub relative aspect-[4/3] rounded-lg overflow-hidden border border-ink-border/80 hover:border-gold transition-all duration-300 flex flex-col justify-end p-2.5"
              >
                <Image
                  src={sub.image}
                  alt={sub.title}
                  fill
                  sizes="20vw"
                  className="object-cover group-hover/sub:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[9px] uppercase tracking-wider text-gold font-mono block">
                    {sub.tag}
                  </span>
                  <span className="text-xs font-medium text-plaster block leading-tight truncate">
                    {sub.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Direct Action Link */}
        <div className="pt-2 flex items-center justify-between border-t border-ink-border/60">
          <Link
            href={`/quote?service=${card.id}&track=${track}`}
            className="text-xs uppercase tracking-widest text-gold font-semibold hover:text-plaster transition-colors inline-flex items-center gap-1.5"
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
