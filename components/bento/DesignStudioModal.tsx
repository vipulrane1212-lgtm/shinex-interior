'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { DESIGN_CATALOG, resolveImagePath, ServiceDesignCatalog } from '@/lib/designCatalog';

interface DesignStudioModalProps {
  serviceId: string | null;
  onClose: () => void;
}

export default function DesignStudioModal({ serviceId, onClose }: DesignStudioModalProps) {
  const [selectedLayoutIndex, setSelectedLayoutIndex] = useState(0);

  const catalog: ServiceDesignCatalog | null = serviceId ? DESIGN_CATALOG[serviceId] || null : null;

  // Reset selected layout index when serviceId changes
  useEffect(() => {
    setSelectedLayoutIndex(0);
  }, [serviceId]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (!serviceId) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && catalog) {
        setSelectedLayoutIndex((prev) => (prev + 1) % catalog.designs.length);
      } else if (e.key === 'ArrowLeft' && catalog) {
        setSelectedLayoutIndex((prev) => (prev - 1 + catalog.designs.length) % catalog.designs.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [serviceId, onClose, catalog]);

  if (!serviceId || !catalog) return null;

  const currentDesign = catalog.designs[selectedLayoutIndex] || catalog.designs[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300 select-none"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl bg-ink-card border border-gold/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="relative z-20 px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-[11px] font-mono uppercase tracking-wider font-semibold">
              {catalog.category}
            </span>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <h2 className="text-lg sm:text-2xl font-serif text-white tracking-tight font-medium hidden sm:block">
              {catalog.serviceTitle}
            </h2>
            <span className="text-xs text-zinc-400 font-mono tracking-wider hidden md:inline">
              ({catalog.designs.length} Architectural Layouts)
            </span>
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Design Studio"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-white border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Layout Navigation Selector Tabs */}
        <div className="relative z-20 px-6 sm:px-8 py-3 bg-black/40 border-b border-white/10 overflow-x-auto scrollbar-none flex items-center gap-2">
          {catalog.designs.map((design, idx) => {
            const isActive = idx === selectedLayoutIndex;
            return (
              <button
                key={design.id}
                type="button"
                onClick={() => setSelectedLayoutIndex(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans tracking-wide transition-all whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold text-white font-semibold shadow-[0_4px_20px_rgba(158,120,62,0.4)] ring-1 ring-white/30'
                    : 'bg-white/5 hover:bg-white/15 text-zinc-300 font-normal border border-white/10'
                }`}
              >
                <span>{design.layoutName}</span>
                {isActive && <CheckCircle2 size={13} className="text-white" />}
              </button>
            );
          })}
        </div>

        {/* Main Display Area */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] overflow-hidden bg-black flex items-end">
          {/* Architectural High-Res Visual */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resolveImagePath(currentDesign.image)}
              alt={currentDesign.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform scale-100"
            />
            {/* Cinematic Luxury Dark Scrim for Perfect Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />
          </div>

          {/* Navigation Arrows on Left and Right of Image (Desktop only, mobile uses tabs & thumbs) */}
          <button
            type="button"
            onClick={() =>
              setSelectedLayoutIndex(
                (prev) => (prev - 1 + catalog.designs.length) % catalog.designs.length
              )
            }
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-gold text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all shadow-xl"
            aria-label="Previous layout"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedLayoutIndex((prev) => (prev + 1) % catalog.designs.length)
            }
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-gold text-white border border-white/20 backdrop-blur-md items-center justify-center transition-all shadow-xl"
            aria-label="Next layout"
          >
            <ArrowRight size={18} />
          </button>

          {/* Bottom Floating Information Overlay (Only Main Header, No Clutter Texts) */}
          <div className="relative z-20 w-full p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gold-light text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">
                <Sparkles size={12} className="text-gold-light" />
                <span>Layout {selectedLayoutIndex + 1} of {catalog.designs.length}</span>
              </div>

              {/* Pure Main Luxury Header ONLY */}
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight font-light leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                {currentDesign.title}
              </h3>

              {/* Minimal Spatial Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {currentDesign.specs.map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/15 text-zinc-300 text-xs font-mono"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Action Quote Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href={`/quote?service=${catalog.serviceId}&layout=${currentDesign.id}&track=${catalog.track}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-white text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider shadow-[0_8px_30px_rgba(158,120,62,0.5)] transition-all hover:scale-[1.02]"
              >
                <span>Quote This Design</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href={`/calculator?service=${catalog.serviceId}&track=${catalog.track}`}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-sans font-medium tracking-wider border border-white/20 backdrop-blur-md transition-all"
              >
                <span>Cost Calculator</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="relative z-20 px-6 sm:px-8 py-3 bg-black/60 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
            {catalog.designs.map((design, idx) => {
              const isActive = idx === selectedLayoutIndex;
              return (
                <button
                  key={design.id}
                  type="button"
                  onClick={() => setSelectedLayoutIndex(idx)}
                  className={`relative w-14 h-10 sm:w-20 sm:h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${
                    isActive
                      ? 'border-gold ring-2 ring-gold/50 scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resolveImagePath(design.image)}
                    alt={design.layoutName}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-zinc-400 font-mono hidden sm:block">
            Use ← → keys to switch layouts · Esc to close
          </div>
        </div>
      </div>
    </div>
  );
}
