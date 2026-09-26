'use client';

import React from 'react';
import Link from 'next/link';
import { useTrack } from '@/context/TrackContext';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/lib/assets';
import BentoCard from './BentoCard';
import TrackToggle from '@/components/ui/TrackToggle';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function BentoGrid() {
  const { track } = useTrack();
  const services = track === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES;

  return (
    <section id="services" className="py-24 md:py-32 bg-ink border-b border-ink-border/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-gold">
              <Layers size={16} />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                {track === 'residential' ? 'Residential Atelier' : 'Commercial & Civil Division'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-normal">
              {track === 'residential' ? 'The Sanctuaries We Shape.' : 'The Infrastructure We Execute.'}
            </h2>
            <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed max-w-lg">
              {track === 'residential'
                ? 'Ultra-matte acrylics, quartz waterfalls, fluted acoustics, and moisture-sealed civil carcasses.'
                : 'Direct civil contracting, large-scale vitrified flooring, MEP integration, and institutional compliance.'}
            </p>
          </div>

          {/* Track Switcher directly in section */}
          <div className="flex items-center gap-3">
            <TrackToggle />
          </div>
        </div>

        {/* Dynamic Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Main Hero Bento (Col span 12 or 8) */}
          <BentoCard
            card={services[0]}
            isMainHero={true}
            className="md:col-span-12 lg:col-span-8 min-h-[460px]"
          />

          {/* Card 2: Vertical Portrait Bento (Col span 4) */}
          <BentoCard
            card={services[1]}
            className="md:col-span-6 lg:col-span-4 min-h-[460px]"
          />

          {/* Card 3: Landscape Bento (Col span 6) */}
          <BentoCard
            card={services[2]}
            className="md:col-span-6 lg:col-span-5 min-h-[380px]"
          />

          {/* Card 4: Square Bento (Col span 4) */}
          {services[3] && (
            <BentoCard
              card={services[3]}
              className="md:col-span-6 lg:col-span-4 min-h-[380px]"
            />
          )}

          {/* Card 5: Accent Bento (Col span 3) */}
          {services[4] && (
            <BentoCard
              card={services[4]}
              className="md:col-span-6 lg:col-span-3 min-h-[380px]"
            />
          )}
        </div>

        {/* Cost Calculator Callout Banner */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-ink-card via-ink-card to-gold/10 border border-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono font-semibold">
              Transparent Mumbai Costing
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-plaster">
              Need a granular room-by-room quote?
            </h3>
            <p className="text-xs text-plaster-muted font-light max-w-lg">
              Use our multi-step interactive cost estimator to pick modular joinery, kitchen shapes, civil wet packages, and calculate live indicative rates.
            </p>
          </div>
          <Link
            href="/calculator"
            className="shrink-0 px-6 py-3.5 rounded-full bg-gold text-ink font-semibold text-xs uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all flex items-center gap-2"
          >
            <span>Launch Cost Calculator</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
