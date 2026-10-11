'use client';

import React, { useState } from 'react';
import { DesignIdeaItem } from '@/lib/designIdeasCatalog';
import {
  X,
  Compass,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Wrench,
} from 'lucide-react';

interface DesignSpecificationModalProps {
  design: DesignIdeaItem | null;
  onClose: () => void;
  onRequestQuote: (design: DesignIdeaItem) => void;
}

export default function DesignSpecificationModal({
  design,
  onClose,
  onRequestQuote,
}: DesignSpecificationModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!design) return null;

  const specs = design.specifications;
  const images = design.all_images && design.all_images.length > 0
    ? design.all_images
    : [{ url: design.cover_image, alt: design.title, cover: true }];
  const currentImage = images[selectedImageIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-ink-card border border-ink-border shadow-2xl flex flex-col text-plaster animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= MODAL HEADER ================= */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-ink-card/95 backdrop-blur-md border-b border-ink-border">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-[11px] font-mono font-bold uppercase tracking-wider">
              {design.category_name}
            </span>
            <span className="text-xs font-mono text-plaster-muted hidden sm:inline-block">
              {design.room_size ? `● ${design.room_size}` : ''}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-black/40 hover:bg-black text-plaster-muted hover:text-white transition-colors border border-ink-border"
            aria-label="Close specification modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* ================= MODAL BODY ================= */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Section */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-ink-border shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.url}
                alt={currentImage.alt || design.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-serif font-semibold text-white drop-shadow-md">
                    {design.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light drop-shadow">
                    {design.unit_type} · Turnkey Execution in Mumbai &amp; Navi Mumbai
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold/40 text-gold font-mono text-xs sm:text-sm font-bold shrink-0">
                  {design.budget_estimate}
                </div>
              </div>
            </div>

            {/* Thumbnail Carousel if multiple images exist */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border transition-all shrink-0 ${
                      selectedImageIndex === idx
                        ? 'border-gold ring-2 ring-gold/40'
                        : 'border-ink-border opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Specifications Grid */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase font-mono tracking-widest text-gold font-bold flex items-center gap-2">
              <Compass size={16} />
              <span>Architectural Specifications Sheet</span>
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-3.5 rounded-xl bg-ink/70 border border-ink-border">
                <span className="text-[10px] uppercase font-mono tracking-wider text-plaster-muted block">
                  Layout Format
                </span>
                <span className="text-xs sm:text-sm font-medium text-plaster font-serif mt-0.5 block">
                  {specs.layout || design.style || 'Custom Layout'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink/70 border border-ink-border">
                <span className="text-[10px] uppercase font-mono tracking-wider text-plaster-muted block">
                  Room Dimensions
                </span>
                <span className="text-xs sm:text-sm font-medium text-plaster font-serif mt-0.5 block">
                  {specs.room_dimensions || design.room_size || 'Site Measured'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink/70 border border-ink-border">
                <span className="text-[10px] uppercase font-mono tracking-wider text-plaster-muted block">
                  Shutter / Cabinet Finish
                </span>
                <span className="text-xs sm:text-sm font-medium text-plaster font-serif mt-0.5 block">
                  {specs.shutter_finish || 'Factory-Pressed Acrylic / Laminate'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink/70 border border-ink-border">
                <span className="text-[10px] uppercase font-mono tracking-wider text-plaster-muted block">
                  Countertop / Material
                </span>
                <span className="text-xs sm:text-sm font-medium text-plaster font-serif mt-0.5 block">
                  {specs.countertop_material || 'Engineered Quartz / Italian Stone'}
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Features & Storage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Storage Features */}
            {specs.storage_features && specs.storage_features.length > 0 && (
              <div className="p-5 rounded-2xl bg-ink/50 border border-ink-border space-y-3">
                <h5 className="text-xs uppercase font-mono tracking-wider text-gold font-bold flex items-center gap-2">
                  <Layers size={14} />
                  <span>Storage Engineering &amp; Hardware</span>
                </h5>
                <ul className="space-y-2 text-xs sm:text-[13px] text-plaster-muted font-sans">
                  {specs.storage_features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Special Highlights */}
            {specs.special_features && specs.special_features.length > 0 && (
              <div className="p-5 rounded-2xl bg-ink/50 border border-ink-border space-y-3">
                <h5 className="text-xs uppercase font-mono tracking-wider text-cyan-300 font-bold flex items-center gap-2">
                  <Sparkles size={14} />
                  <span>Lighting &amp; Architectural Accents</span>
                </h5>
                <ul className="space-y-2 text-xs sm:text-[13px] text-plaster-muted font-sans">
                  {specs.special_features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-cyan-300 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Turnkey Assurance Banner */}
          <div className="p-5 rounded-2xl bg-gold/10 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-gold shrink-0" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold font-bold block">
                  Sneha Enterprises Class-1 Licensure
                </span>
                <span className="text-xs text-plaster-muted font-sans">
                  10-year waterproof warranty · Blum/Hafele soft-close hardware · Direct factory pricing.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(design);
              }}
              className="btn-luxury px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-sans font-bold uppercase tracking-wider shadow-lg inline-flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center"
            >
              <span>Get Similar Quote (15% Off)</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
