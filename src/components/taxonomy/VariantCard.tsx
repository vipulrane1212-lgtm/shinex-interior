'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Layers, Cpu } from 'lucide-react';
import { TaxonomyVariant } from '@/lib/types';

interface VariantCardProps {
  variant: TaxonomyVariant;
  onSelectForQuote: (variant: TaxonomyVariant) => void;
}

export const VariantCard: React.FC<VariantCardProps> = ({ variant, onSelectForQuote }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group flex flex-col bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#EDE7DC] hover:border-[#DDD5C7] shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-500"
    >
      {/* Visual Showcase with smooth zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFE6]">
        <img
          src={variant.image}
          alt={variant.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/70 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[11px] font-semibold text-[#181615] shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#C8A97E]" />
            <span>{variant.tag}</span>
          </span>

          <span className="text-[11px] font-medium tracking-wide text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
            {variant.recommendedSize}
          </span>
        </div>

        {/* Bottom Image Overlay: Price Tag & Title */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
          <p className="text-[11px] uppercase tracking-widest text-[#E5D2BA] font-medium">Starting Range</p>
          <p className="text-lg font-serif font-semibold text-white drop-shadow-sm">{variant.startingPrice}</p>
        </div>
      </div>

      {/* Card Content & Architectural Specs */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-[#FFFFFF]">
        <div>
          <h3 className="font-serif text-xl font-medium text-[#181615] group-hover:text-[#B69566] transition-colors leading-snug">
            {variant.title}
          </h3>
          <p className="text-xs text-[#8C8479] mt-1">{variant.subtitle}</p>

          {/* Technical Spec Matrix */}
          <div className="mt-4 pt-4 border-t border-[#EDE7DC] space-y-2.5 text-xs text-[#5E5952]">
            <div className="flex items-start gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#C8A97E] mt-0.5 shrink-0" />
              <div>
                <span className="text-[#8C8479] font-medium">Hardware: </span>
                <span className="text-[#181615] font-semibold">{variant.hardwareSpec}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Layers className="w-3.5 h-3.5 text-[#C8A97E] mt-0.5 shrink-0" />
              <div>
                <span className="text-[#8C8479] font-medium">Core & Edge: </span>
                <span>{variant.coreMaterial} • {variant.edgeBanding}</span>
              </div>
            </div>
          </div>

          {/* Curated Key Features List */}
          <ul className="mt-4 space-y-1.5 text-xs text-[#5E5952]">
            {variant.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#3A6B56] mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button: Pre-populates Calculator and Scrolls */}
        <div className="pt-4 border-t border-[#EDE7DC]">
          <button
            onClick={() => onSelectForQuote(variant)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#F7F1E6] hover:bg-[#C8A97E] text-[#181615] font-semibold text-xs tracking-wider uppercase transition-all duration-300 group/btn border border-[#E5D2BA]"
          >
            <span>Select for Custom Quote</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
