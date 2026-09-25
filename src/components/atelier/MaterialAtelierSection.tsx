'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { ASSET_LIBRARY } from '@/lib/mockData';
import { getAssetUrl } from '@/lib/assetHelper';
import { ParallaxImage } from '@/components/common/ParallaxImage';

interface MaterialSpec {
  id: string;
  name: string;
  category: string;
  tag: string;
  image: string;
  thumbnail: string;
  thickness: string;
  origin: string;
  finish: string;
  architectNote: string;
  durability: string;
  includedScope: string;
  badgeColor: string;
}

export const MaterialAtelierSection: React.FC = () => {
  const [activeMaterialId, setActiveMaterialId] = useState<string>('travertine');

  const materials: MaterialSpec[] = [
    {
      id: 'travertine',
      name: 'Roman Alabaster Travertine',
      category: 'Natural Architectural Stone',
      tag: 'Atelier Signature',
      image: ASSET_LIBRARY.materialTravertine || getAssetUrl('/images/material_travertine.jpg'),
      thumbnail: ASSET_LIBRARY.materialTravertine || getAssetUrl('/images/material_travertine.jpg'),
      thickness: '20mm Solid Slab',
      origin: 'Tivoli Quarry, Central Italy',
      finish: 'Honed Matte with Micro-Beveled Miter Edge',
      architectNote:
        'Selected for its organic travertine pores and warm creamy alabaster tones. Creates a monolithic dining anchor that softly diffuses 2700K ambient evening light.',
      durability: 'Class-1 Scratch & Fire Resistant (Zero Resin Fill)',
      includedScope: 'Standard in Villa & 4BHK Monolithic Island Suites',
      badgeColor: '#C8A97E',
    },
    {
      id: 'smoked-oak',
      name: 'Smoked European White Oak',
      category: 'Acoustic Timber Joinery',
      tag: 'Japandi Warmth',
      image: ASSET_LIBRARY.materialSmokedOak || getAssetUrl('/images/material_smoked_oak.jpg'),
      thumbnail: ASSET_LIBRARY.materialSmokedOak || getAssetUrl('/images/material_smoked_oak.jpg'),
      thickness: '18mm Calibrated Core + 1.2mm Real Wood Flutes',
      origin: 'Bavarian Sustainable Forests (FSC Certified)',
      finish: 'Rubio Monocoat Natural Zero-VOC Matte Oil',
      architectNote:
        'Acoustically fluted slats engineered to absorb high-frequency flutter echoes in expansive open-plan living rooms while introducing tactile warmth.',
      durability: 'Moisture Sealed with Natural Plant Wax',
      includedScope: 'Standard in Master Bedroom Suite Feature Walls',
      badgeColor: '#3A6B56',
    },
    {
      id: 'calacatta',
      name: 'Calacatta Gold Seamless Quartz',
      category: 'Architectural Worktops',
      tag: 'Zero-Porosity Surface',
      image: ASSET_LIBRARY.materialCalacatta || getAssetUrl('/images/material_calacatta.jpg'),
      thumbnail: ASSET_LIBRARY.materialCalacatta || getAssetUrl('/images/material_calacatta.jpg'),
      thickness: '15mm / 40mm Built-Up Miter Profile',
      origin: 'Engineered Quartz Crystal Slab',
      finish: 'Velvet Satin Anti-Glare Polish',
      architectNote:
        'Engineered specifically for Indian culinary prep. Completely non-porous: zero turmeric or red wine stains, heat resistant up to 280°C, with continuous vein matching.',
      durability: 'NSF Certified Food-Safe & Acid Resistant',
      includedScope: 'Standard on All Turnkey Kitchen Counters',
      badgeColor: '#C8A97E',
    },
    {
      id: 'pur-edge',
      name: 'German Homag PUR Edgebanding',
      category: 'Factory Joint Technology',
      tag: 'Zero-Joint Seam',
      image: ASSET_LIBRARY.materialPurEdge || getAssetUrl('/images/material_pur_edge.jpg'),
      thumbnail: ASSET_LIBRARY.materialPurEdge || getAssetUrl('/images/material_pur_edge.jpg'),
      thickness: '1.3mm Impact-Resistant Profile',
      origin: 'Homag LaserTech Plant, Germany',
      finish: 'PUR Reactive Hot-Melt Waterproof Bond',
      architectNote:
        'Eliminates the visible dark glue lines found in local carpenter work. Completely seals the board against boiling water and humid monsoons.',
      durability: '100% Water-Immersion Barrier (10-Yr Bond)',
      includedScope: 'Applied to 100% of ShineX Modular Woodwork',
      badgeColor: '#3A6B56',
    },
    {
      id: 'champagne-brass',
      name: 'Brushed Champagne PVD Brass',
      category: 'Architectural Motion & Hardware',
      tag: 'Haute Quincaillerie',
      image: ASSET_LIBRARY.materialChampagneBrass || getAssetUrl('/images/material_champagne_brass.jpg'),
      thumbnail: ASSET_LIBRARY.materialChampagneBrass || getAssetUrl('/images/material_champagne_brass.jpg'),
      thickness: 'Solid Forged Brass Core',
      origin: 'Bespoke European Precision Tooling',
      finish: 'Micro-Knurled Texture with Anti-Oxidation PVD',
      architectNote:
        'Custom tactile weight in the palm. Engineered with titanium pivot pins to ensure zero wobble across 100,000 smooth opening cycles.',
      durability: 'Zero-Tarnish Lifetime Warranty',
      includedScope: 'Integrated across Designer Wardrobes & Bar Niches',
      badgeColor: '#C8A97E',
    },
  ];

  const activeMaterial = materials.find((m) => m.id === activeMaterialId) || materials[0];

  return (
    <section id="materials" className="py-24 bg-luxury-canvas border-t border-[#EDE7DC] relative overflow-hidden cove-lighting-wash">
      {/* Layer 1: Ambient Architectural Backdrop & Drafting Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Oak Slat Shadows on Left & Right Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-12" />

        {/* Studio Lighting Focus Pools */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[550px] bg-[#C8A97E]/14 rounded-full blur-[160px]" />
        <div className="absolute bottom-12 left-1/3 w-[500px] h-[400px] bg-[#EDE7DC]/70 rounded-full blur-[130px]" />

        {/* Technical Atelier Watermark Annotation */}
        <div className="absolute top-12 left-12 hidden 2xl:flex flex-col text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>MATERIA PRIMA // CERTIFIED SPECIFICATION</span>
          <span>PHYSICAL ATELIER SWATCH COLLECTION // DIN EN 14322</span>
        </div>

        <div className="absolute top-12 right-12 hidden 2xl:flex flex-col items-end text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>SUBSTRATE SELECTION: 5 CURATED TIERS</span>
          <span>ZERO RESIN // 100% NON-TOXIC NATURAL WAX</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5D2BA] text-xs font-bold text-[#181615] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Tactile Material Library</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] leading-tight">
            The Master Atelier <span className="font-script font-normal text-gold-gradient text-[1.42em] inline-block transform -rotate-1">Finishes</span> Palette
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            From natural Roman travertine and acoustic Bavarian white oak to seamless German Homag PUR joints.
            Inspect the certified physical material palette curated for discerning residences.
          </p>

          {/* Architectural Dimension Line */}
          <div className="max-w-xs mx-auto pt-2 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#8C8479]/70">
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
            <span>AUTHENTIC PHYSICAL SUBSTRATES</span>
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
          </div>
        </div>

        {/* Interactive Material Grid & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Material Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase font-mono font-semibold tracking-wider text-[#8C8479] mb-4">
              Select Architectural Substrate:
            </p>

            {materials.map((mat) => {
              const isActive = activeMaterialId === mat.id;
              return (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setActiveMaterialId(mat.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#C8A97E] shadow-luxury-hover ring-1 ring-[#C8A97E]'
                      : 'bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Material Texture Thumbnail */}
                    <div
                      className={`w-12 h-12 rounded-xl overflow-hidden shrink-0 border transition-all ${
                        isActive
                          ? 'border-[#C8A97E] ring-2 ring-[#C8A97E]/30'
                          : 'border-[#DDD5C7]'
                      }`}
                    >
                      <img
                        src={mat.thumbnail}
                        alt={mat.name}
                        className={`w-full h-full object-cover group-hover:brightness-110 transition-all duration-500 ${
                          mat.id === 'smoked-oak'
                            ? 'cinematic-video-2 cinematic-delay-1'
                            : mat.id === 'calacatta'
                            ? 'cinematic-video-3 cinematic-delay-2'
                            : mat.id === 'pur-edge'
                            ? 'cinematic-video-1 cinematic-delay-3'
                            : 'cinematic-video-2 cinematic-delay-4'
                        }`}
                      />
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8479] font-bold block">
                        {mat.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#181615] group-hover:text-[#B69566] transition-colors">
                        {mat.name}
                      </h4>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                      isActive
                        ? 'bg-[#F7F1E6] text-[#B69566] border border-[#E5D2BA]'
                        : 'bg-[#F3EFE6] text-[#8C8479]'
                    }`}
                  >
                    {mat.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Resolution Material Showcase Card & Specs (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#DDD5C7] shadow-soft-luxury p-6 sm:p-8">
              {/* Featured Macro Visual with Smooth Parallax Scroll */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EDE7DC] bg-[#F3EFE6] mb-6">
                <ParallaxImage
                  key={activeMaterial.id}
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  className="w-full h-full"
                  imgClassName="cinematic-video-macro"
                >
                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/80 via-transparent to-black/10 pointer-events-none" />

                  {/* Floating Architectural Badge */}
                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#181615] shadow-sm uppercase tracking-wider">
                      <Compass className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span>Real Architect Studio Swatch Flatlay</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Spec */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#E5D2BA] font-bold block">
                        Active Substrate
                      </span>
                      <p className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                        {activeMaterial.name}
                      </p>
                    </div>
                    <span className="text-xs bg-[#181615]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[#EDE7DC]">
                      {activeMaterial.origin}
                    </span>
                  </div>
                </ParallaxImage>
              </div>

              {/* Dynamic Specification Sheet */}
              <div key={activeMaterial.id} className="space-y-5 animate-in fade-in duration-300">
                  {/* Architect Editorial Note */}
                  <div className="p-4 rounded-xl bg-[#F7F1E6]/80 border border-[#E5D2BA] space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C8A97E]" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#181615]">
                        Architect's Specification Rationale
                      </span>
                    </div>
                    <p className="text-xs text-[#5E5952] leading-relaxed">
                      {activeMaterial.architectNote}
                    </p>
                  </div>

                  {/* 4-Cell Spec Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1">
                      <span className="text-[#8C8479] font-medium block text-[11px]">Caliper & Dimensions:</span>
                      <p className="font-semibold text-[#181615]">{activeMaterial.thickness}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1">
                      <span className="text-[#8C8479] font-medium block text-[11px]">Surface Tactility:</span>
                      <p className="font-semibold text-[#181615]">{activeMaterial.finish}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1">
                      <span className="text-[#8C8479] font-medium block text-[11px]">Engineering Standard:</span>
                      <p className="font-semibold text-[#3A6B56]">{activeMaterial.durability}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC] space-y-1">
                      <span className="text-[#8C8479] font-medium block text-[11px]">Turnkey Integration:</span>
                      <p className="font-semibold text-[#181615]">{activeMaterial.includedScope}</p>
                    </div>
                  </div>

                  {/* Action Link to BOQ */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EDE7DC]">
                    <div className="flex items-center gap-2 text-xs text-[#5E5952]">
                      <ShieldCheck className="w-4 h-4 text-[#3A6B56]" />
                      <span>Certified 10-Year Sneha Enterprises Warranty</span>
                    </div>

                    <a
                      href="#estimator"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#181615] hover:text-[#C8A97E] transition-colors"
                    >
                      <span>Calculate BOQ with this material</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
