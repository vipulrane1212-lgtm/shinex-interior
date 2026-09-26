'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { Sparkles, Check, Gem, Award, Shield } from 'lucide-react';

export default function Step4FinishTier() {
  const { finishTier, setFinishTier } = useCalculator();

  const tiers = [
    {
      id: 'essential' as const,
      name: 'Essential Finish',
      multiplierBadge: '1.0x · Baseline Good',
      tagline: 'Durable, clean, and reliable everyday luxury.',
      icon: Shield,
      materials: [
        'Premium 1mm Matt Laminates (Merino / Century)',
        'Hettich / Ebco Soft-Close Hinges & Drawer Runners',
        'Saint-Gobain Clear Float Glass & Polished Edges',
        'Asian Paints Royale Luxury Interior Emulsion',
        'Granite / 15mm Composite Stone Countertops',
      ],
    },
    {
      id: 'premium' as const,
      name: 'Premium Finish',
      multiplierBadge: '1.25x · Most Popular',
      tagline: 'High-end acrylics, fluted textures & Blum mechanics.',
      recommended: true,
      icon: Award,
      materials: [
        'Anti-Fingerprint Acrylic & Fluted Charcoal Veneers',
        'Blum (Austria) Blumotion Integrated Soft-Close',
        'Engineered Quartz (Kalinga / Caesarstone) Slabs',
        'PU-Coated Aluminum Profile Glass Wardrobe Shutters',
        'Concealed 3000K Warm LED Strip Lighting Channels',
      ],
    },
    {
      id: 'luxe' as const,
      name: 'Luxe Atelier Finish',
      multiplierBadge: '1.55x · Ultra Luxury',
      tagline: 'Italian PU, bookmatched Italian marble & smart joinery.',
      icon: Gem,
      materials: [
        'Italian Polyurethane (PU) Matte & High-Gloss Lacquer',
        'Imported Bookmatched Italian Statuario / Michealangelo Marble',
        'Blum Legrabox Slim Steel Drawer Systems with Organizers',
        'Smart Touch-Sensor Motorized Joinery & Tinted Bronze Glass',
        'Custom Brass Inlays & Hand-Polished Natural Teak Moldings',
      ],
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
          Step 4 of 7
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          Select Your Architectural Finish Tier
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
          Your finish tier determines the hardware grade, surface treatments, and tactile materials used across all modules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier) => {
          const isSelected = finishTier === tier.id;
          const Icon = tier.icon;

          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setFinishTier(tier.id)}
              className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-ink-card border-gold shadow-[0_0_30px_rgba(197,168,128,0.25)] ring-1 ring-gold'
                  : 'bg-ink-card/60 border-ink-border hover:border-gold/40 hover:bg-ink-card'
              }`}
            >
              {tier.recommended && (
                <span className="absolute -top-2.5 right-6 text-[9px] uppercase tracking-widest font-mono font-bold px-2.5 py-0.5 rounded-full bg-gold text-ink shadow-md">
                  Recommended
                </span>
              )}

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-ink-border/50">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-gold text-ink'
                        : 'bg-ink border border-ink-border text-gold'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-ink border border-ink-border text-plaster-dim">
                    {tier.multiplierBadge}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-serif text-plaster font-semibold">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-plaster-muted font-light mt-1">
                    {tier.tagline}
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gold block">
                    Material Specifications:
                  </span>
                  <ul className="space-y-1.5 text-[11px] text-plaster-dim font-light">
                    {tier.materials.map((mat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <Check size={12} className="text-gold shrink-0 mt-0.5" />
                        <span className="leading-snug">{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-ink-border/50 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-plaster-dim">
                  {isSelected ? 'Active Tier' : 'Choose Tier'}
                </span>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                    isSelected ? 'bg-gold border-gold text-ink' : 'border-ink-border'
                  }`}
                >
                  {isSelected && <Check size={12} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
