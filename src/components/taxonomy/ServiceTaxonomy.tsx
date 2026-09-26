'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UtensilsCrossed,
  BedDouble,
  Sofa,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { TAXONOMY_VARIANTS } from '@/lib/mockData';
import { TaxonomyCategoryKey, TaxonomyVariant } from '@/lib/types';
import { VariantCard } from './VariantCard';

interface ServiceTaxonomyProps {
  onSelectVariant?: (variant: TaxonomyVariant) => void;
}

export const ServiceTaxonomy: React.FC<ServiceTaxonomyProps> = ({ onSelectVariant }) => {
  const [activeCategory, setActiveCategory] = useState<TaxonomyCategoryKey>('kitchen');

  const categories: { key: TaxonomyCategoryKey; label: string; icon: React.ElementType; count: number }[] = [
    { key: 'kitchen', label: 'Modular Kitchens', icon: UtensilsCrossed, count: 4 },
    { key: 'bedroom', label: 'Master Bedroom Suites', icon: BedDouble, count: 3 },
    { key: 'living', label: 'Living & Dining Lounges', icon: Sofa, count: 2 },
    { key: 'commercial', label: 'Commercial & Infra Interior', icon: Building2, count: 2 },
  ];

  const filteredVariants = TAXONOMY_VARIANTS.filter((v) => v.category === activeCategory);

  const handleSelectForQuote = (variant: TaxonomyVariant) => {
    if (onSelectVariant) {
      onSelectVariant(variant);
    }

    // Broadcast global event for quotation wizard
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('shinex-select-variant', {
          detail: variant,
        })
      );

      // Smooth scroll to Quotation Engine using Lenis if available
      const win = window as unknown as { lenis?: { scrollTo: (target: HTMLElement | string, opts?: { offset?: number }) => void } };
      const el = document.getElementById('estimator');
      if (win.lenis && el) {
        win.lenis.scrollTo(el, { offset: -70 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="catalog" className="py-24 bg-luxury-canvas border-t border-[#EDE7DC] relative overflow-hidden cove-lighting-wash">
      {/* Architectural Background Atmosphere & Drafting Schematics */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Architectural Oak Wall Shadows on Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-12" />

        {/* Ambient Warm Golden Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] ambient-glow-gold rounded-full" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] ambient-glow-linen rounded-full" />

        {/* Architectural CAD Blueprint Watermark Annotation */}
        <div className="absolute top-12 left-12 hidden 2xl:flex flex-col text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>DWG: AR-02 // JOINERY ARCHETYPES</span>
          <span>SCALE: 1:25 @ A1 // HOMAG PUR 0.0mm SEAM</span>
        </div>

        <div className="absolute top-12 right-12 hidden 2xl:flex flex-col items-end text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>ELEVATION // WALL FINISH +3200MM</span>
          <span>SPEC: BLUM CLIP-TOP 110° BLUMOTION</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5D2BA] text-xs font-bold text-[#181615] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Curated Interior Designs</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] leading-tight">
            Luxury Interior{' '}
            <span className="font-script font-normal text-gold-gradient text-[1.45em] inline-block transform -rotate-1 relative">
              Designs
              <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent" />
            </span>
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            Explore premium modular kitchens, master bedroom suites, and designer living rooms. Select any design to calculate your exact quotation.
          </p>

          {/* Architectural Dimension Line */}
          <div className="max-w-xs mx-auto pt-2 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#8C8479]/70">
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
            <span>FACTORY-PRECISION FINISHES</span>
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-[#F3EFE6] border border-[#DDD5C7] shadow-inner gap-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#181615] shadow-card-depth border border-[#DDD5C7]/70'
                      : 'text-[#5E5952] hover:text-[#181615] hover:bg-[#FFFFFF]/50'
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C8A97E]' : 'text-[#8C8479]'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-[#F7F1E6] text-[#B69566]' : 'bg-[#EDE7DC] text-[#8C8479]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Variant Cards Grid */}
        <div className="min-h-[500px]">
          <div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300"
          >
            {filteredVariants.map((variant) => (
              <VariantCard
                key={variant.id}
                variant={variant}
                onSelectForQuote={handleSelectForQuote}
              />
            ))}
          </div>
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F3EFE6] border border-[#DDD5C7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#DDD5C7]">
              <Sparkles className="w-4 h-4 text-[#C8A97E]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#181615]">Looking for a bespoke configuration?</p>
              <p className="text-xs text-[#5E5952]">All dimensions and finishes are custom-milled to your floor plan.</p>
            </div>
          </div>

          <a
            href="#estimator"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181615] hover:text-[#C8A97E] group"
          >
            <span>Proceed to 6-Step Cost Engine</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
