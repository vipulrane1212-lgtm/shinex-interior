'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Layers, Cpu } from 'lucide-react';
import { TaxonomyVariant } from '@/lib/types';
import { ParallaxImage } from '@/components/common/ParallaxImage';

interface VariantCardProps {
  variant: TaxonomyVariant;
  onSelectForQuote: (variant: TaxonomyVariant) => void;
}

export const VariantCard: React.FC<VariantCardProps> = ({ variant, onSelectForQuote }) => {
  return (
    <article
      className="group relative flex flex-col bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#EDE7DC] hover:border-[#DDD5C7] shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-500 hover:-translate-y-1"
    >
      {/* Corner Drafting Registration Ticks */}
      <div className="absolute top-2 left-2 z-20 font-mono text-[9px] text-white/50 pointer-events-none">┌</div>
      <div className="absolute top-2 right-2 z-20 font-mono text-[9px] text-white/50 pointer-events-none">┐</div>

      {/* Visual Showcase with smooth parallax window scroll */}
      <ParallaxImage
        src={variant.localAiImage || variant.image}
        alt={variant.title}
        className="aspect-[4/3] w-full bg-[#F3EFE6]"
        imgClassName="group-hover:brightness-105 transition-all duration-700"
      >
        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/75 via-transparent to-black/15 opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[11px] font-bold text-[#181615] shadow-sm uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#C8A97E]" />
            <span>{variant.tag}</span>
          </span>

          <span className="text-[11px] font-bold tracking-wide text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
            {variant.recommendedSize}
          </span>
        </div>

        {/* Bottom Image Overlay: Price Tag & Title */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase font-mono tracking-widest text-[#E5D2BA] font-bold">Starting Range</p>
            <p className="text-xl font-editorial font-bold tracking-tight text-white drop-shadow-md">{variant.startingPrice}</p>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
            SPEC #{variant.id.slice(0, 8).toUpperCase()}
          </span>
        </div>
      </ParallaxImage>

      {/* Card Content & Architectural Specs */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-[#FFFFFF]">
        <div>
          <h3 className="font-editorial text-2xl font-bold tracking-tight text-[#181615] group-hover:text-[#B69566] transition-colors leading-snug">
            {variant.title}
          </h3>
          <p className="text-xs text-[#8C8479] mt-1 font-medium">{variant.subtitle}</p>

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
            <span>Select for Quote -&gt;</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
