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

      // Smooth scroll to Quotation Engine
      const el = document.getElementById('estimator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="catalog" className="py-24 bg-[#FBF9F5] border-t border-[#EDE7DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-xs font-semibold text-[#181615] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Interactive Service Taxonomy</span>
          </div>

          <h2 className="font-editorial-h2 text-[#181615]">
            The 2026 Architectural Catalog
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            Explore curated design typologies engineered with calibrated core boards, laser PUR edge-banding,
            and German motion hardware. Select any archetype to pre-fill your exact BOQ.
          </p>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredVariants.map((variant) => (
                <VariantCard
                  key={variant.id}
                  variant={variant}
                  onSelectForQuote={handleSelectForQuote}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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
