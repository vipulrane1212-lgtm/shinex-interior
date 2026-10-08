'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTrack } from '@/context/TrackContext';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/lib/assets';
import BentoCard from './BentoCard';
import InfiniteAutoScroll from './InfiniteAutoScroll';
import DesignStudioModal from './DesignStudioModal';
import LayoutFlowChart from './LayoutFlowChart';
import TrackToggle from '@/components/ui/TrackToggle';
import { Layers, ArrowUpRight, Film, LayoutGrid, Sparkles } from 'lucide-react';

export default function BentoGrid() {
  const { track } = useTrack();
  const services = track === 'residential' ? RESIDENTIAL_SERVICES : COMMERCIAL_SERVICES;

  // View Mode: 'stream' (infinite auto-scroll) or 'grid' (classic bento)
  const [viewMode, setViewMode] = useState<'stream' | 'grid'>('stream');

  // Active Studio Modal Service ID
  const [activeStudioService, setActiveStudioService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-ink border-b border-ink-border/60 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-gold">
              <Layers size={16} />
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold">
                {track === 'residential' ? 'Residential Interiors' : 'Commercial & Civil Division'}
              </span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-semibold">
                {track === 'residential' ? 'Everything Your Home Needs.' : 'Commercial Spaces & Civil Works.'}
              </h2>
              <span className="text-sm sm:text-base md:text-lg text-gold font-sans font-medium block mt-1 tracking-wide">
                {track === 'residential'
                  ? 'Modular Kitchens · Luxury Bedrooms · Living Rooms · Bathrooms'
                  : 'Offices · Retail Showrooms · Direct Civil Contracts'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal leading-relaxed max-w-xl">
              {track === 'residential'
                ? 'Factory-pressed modular furniture, false ceiling, and civil work — designed and built under one roof with a 10-year warranty.'
                : 'Direct civil execution, flooring, electrical, and turnkey office fit-outs with licensed Sneha Enterprises supervisors.'}
            </p>
          </div>

          {/* Switchers Bar: View Mode Switcher + Track Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Display View Mode Switcher */}
            <div className="inline-flex items-center p-1 rounded-full bg-ink-soft border border-ink-border shadow-sm">
              <button
                type="button"
                onClick={() => setViewMode('stream')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all ${
                  viewMode === 'stream'
                    ? 'bg-gold text-white font-semibold shadow-md'
                    : 'text-plaster-muted hover:text-plaster'
                }`}
              >
                <Film size={13} />
                <span>Infinite Stream</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gold text-white font-semibold shadow-md'
                    : 'text-plaster-muted hover:text-plaster'
                }`}
              >
                <LayoutGrid size={13} />
                <span>Bento Grid</span>
              </button>
            </div>

            <TrackToggle />
          </div>
        </div>

        {/* View Mode 1: Infinite Cinematic Auto-Scroll Stream */}
        {viewMode === 'stream' ? (
          <div className="my-4">
            <InfiniteAutoScroll
              residentialCards={RESIDENTIAL_SERVICES}
              commercialCards={COMMERCIAL_SERVICES}
              onSelectCard={(serviceId) => setActiveStudioService(serviceId)}
              activeTrack={track}
            />
          </div>
        ) : (
          /* View Mode 2: Dynamic Bento Box Layout */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <BentoCard
              card={services[0]}
              isMainHero={true}
              onOpenStudio={(serviceId) => setActiveStudioService(serviceId)}
              className="md:col-span-12 lg:col-span-8 min-h-[460px]"
            />

            <BentoCard
              card={services[1]}
              onOpenStudio={(serviceId) => setActiveStudioService(serviceId)}
              className="md:col-span-6 lg:col-span-4 min-h-[460px]"
            />

            <BentoCard
              card={services[2]}
              onOpenStudio={(serviceId) => setActiveStudioService(serviceId)}
              className="md:col-span-6 lg:col-span-5 min-h-[380px]"
            />

            {services[3] && (
              <BentoCard
                card={services[3]}
                onOpenStudio={(serviceId) => setActiveStudioService(serviceId)}
                className="md:col-span-6 lg:col-span-4 min-h-[380px]"
              />
            )}

            {services[4] && (
              <BentoCard
                card={services[4]}
                onOpenStudio={(serviceId) => setActiveStudioService(serviceId)}
                className="md:col-span-6 lg:col-span-3 min-h-[380px]"
              />
            )}
          </div>
        )}

        {/* Architectural Layout Flow Diagram */}
        <LayoutFlowChart />

        {/* Cost Calculator Callout Banner */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-ink-card via-ink-card to-gold/10 border border-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono font-semibold">
              Transparent Mumbai Costing
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-plaster">
              Need a granular room-by-room quote?
            </h3>
            <p className="text-xs text-plaster-muted font-sans font-light max-w-lg">
              Use our multi-step interactive cost estimator to pick modular joinery, kitchen shapes, civil wet packages, and calculate live indicative rates.
            </p>
          </div>
          <Link
            href="/calculator"
            className="btn-luxury shrink-0 px-7 py-3.5 rounded-full bg-gold text-white font-sans font-semibold text-xs uppercase tracking-wider shadow-md flex items-center gap-2"
          >
            <span>Launch Cost Calculator</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Full-Screen Architectural Design Studio Modal */}
      <DesignStudioModal
        serviceId={activeStudioService}
        onClose={() => setActiveStudioService(null)}
      />
    </section>
  );
}
