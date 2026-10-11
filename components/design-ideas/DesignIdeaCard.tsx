'use client';

import React from 'react';
import { DesignIdeaItem } from '@/lib/designIdeasCatalog';
import { Eye, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface DesignIdeaCardProps {
  design: DesignIdeaItem;
  onInspect: (design: DesignIdeaItem) => void;
  onRequestQuote: (design: DesignIdeaItem) => void;
}

export default function DesignIdeaCard({
  design,
  onInspect,
  onRequestQuote,
}: DesignIdeaCardProps) {
  const specs = design.specifications;
  const layout = specs.layout || design.style || 'Custom Layout';
  const finish = specs.shutter_finish || specs.countertop_material || '';

  return (
    <div
      onClick={() => onInspect(design)}
      className="group relative rounded-2xl overflow-hidden bg-ink-card border border-ink-border hover:border-gold/60 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
    >
      {/* ================= IMAGE CONTAINER (FIT TO CONTAINER) ================= */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-black/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={design.cover_image}
          alt={design.alt_text || design.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-wider text-gold font-bold shadow-md truncate max-w-[65%]">
            {design.category_name}
          </span>

          {design.room_size && (
            <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-zinc-300 font-medium shadow-md">
              {design.room_size}
            </span>
          )}
        </div>

        {/* Quick Hover Inspect Pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-gold/60 text-gold text-xs font-mono font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
            <Eye size={14} className="text-cyan-300" />
            <span>Inspect Specs &amp; Materials</span>
          </div>
        </div>

        {/* Bottom Tagline / Layout Pill */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-zinc-300">
          <span className="truncate flex items-center gap-1.5 text-zinc-200">
            <Compass size={12} className="text-gold shrink-0" />
            <span className="truncate">{layout}</span>
          </span>
          {specs.ideal_for && (
            <span className="text-[10px] text-zinc-400 shrink-0 hidden sm:inline-block">
              {specs.ideal_for}
            </span>
          )}
        </div>
      </div>

      {/* ================= METADATA & SPECS ================= */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <h4 className="text-sm sm:text-base font-serif font-medium text-plaster group-hover:text-gold transition-colors line-clamp-1 leading-snug">
            {design.title}
          </h4>

          {finish ? (
            <p className="text-[11px] text-plaster-muted font-sans line-clamp-1">
              {finish}
            </p>
          ) : (
            <p className="text-[11px] text-plaster-muted font-sans line-clamp-1">
              Precision factory-pressed finish · 10-year Class-1 warranty
            </p>
          )}
        </div>

        {/* Bottom Bar: Indicative Budget & Action Buttons */}
        <div className="pt-2 border-t border-ink-border/70 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-mono tracking-wider text-plaster-muted">
              Indicative Turnkey Cost
            </span>
            <span className="text-xs font-mono font-bold text-gold">
              {design.budget_estimate}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRequestQuote(design);
            }}
            className="px-3 py-1.5 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-white border border-gold/40 hover:border-gold text-[10.5px] font-sans font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 shrink-0"
          >
            <span>Quote</span>
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
