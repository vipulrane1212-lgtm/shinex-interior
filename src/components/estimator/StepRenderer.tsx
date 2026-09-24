'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Building,
  Castle,
  Briefcase,
  UtensilsCrossed,
  Layers,
  Wrench,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import {
  PropertyConfig,
  ProjectScope,
  AestheticStyle,
  MaterialTier,
  TimelineUrgency,
  CalculatorState,
} from '@/lib/types';
import {
  CONFIG_BASE_PRICES,
  SCOPE_MULTIPLIERS,
  AESTHETIC_FACTORS,
  MATERIAL_TIERS,
} from '@/lib/calculatorLogic';

interface StepRendererProps {
  state: CalculatorState;
  onChange: <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => void;
  onNext?: () => void;
}

export const StepRenderer: React.FC<StepRendererProps> = ({ state, onChange, onNext: _onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, staggerChildren: 0.05 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  // STEP 1: Property Layout
  if (state.step === 1) {
    const configOptions: { key: PropertyConfig; icon: React.ElementType; tag: string }[] = [
      { key: '1BHK', icon: Home, tag: 'Compact Urban' },
      { key: '2BHK', icon: Home, tag: 'Most Popular' },
      { key: '3BHK', icon: Building, tag: 'Spacious Luxury' },
      { key: '4BHK', icon: Building, tag: 'Duplex / Penthouse' },
      { key: 'Villa', icon: Castle, tag: 'Sprawling Estate' },
      { key: 'Commercial', icon: Briefcase, tag: 'Boutique Atelier' },
    ];

    return (
      <motion.div
        key="step-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div>
          <h3 className="font-editorial-h3 text-[#181615]">Select Your Property Configuration</h3>
          <p className="text-xs text-[#8C8479] mt-1">
            Choose your floor plan archetype to calibrate baseline timber dimensions and factory milling hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {configOptions.map((opt) => {
            const Icon = opt.icon;
            const data = CONFIG_BASE_PRICES[opt.key];
            const isSelected = state.configuration === opt.key;

            return (
              <motion.button
                key={opt.key}
                type="button"
                variants={itemVariants}
                onClick={() => {
                  onChange('configuration', opt.key);
                }}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F7F1E6] border-[#C8A97E] shadow-card-depth ring-1 ring-[#C8A97E]'
                    : 'bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7] hover:bg-[#FBF9F5]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-[#3A6B56]" />
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#FFFFFF] text-[#C8A97E]' : 'bg-[#F3EFE6] text-[#5E5952]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C8A97E]">
                      {opt.tag}
                    </span>
                    <h4 className="text-base font-semibold text-[#181615]">{opt.key}</h4>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EDE7DC]/70 flex items-center justify-between text-xs">
                  <span className="text-[#8C8479]">{data.sqft}</span>
                  <span className="text-[#181615] font-medium">Standard Spec</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // STEP 2: Scope of Work
  if (state.step === 2) {
    const scopeOptions: { key: ProjectScope; icon: React.ElementType }[] = [
      { key: 'full_turnkey', icon: Sparkles },
      { key: 'kitchen_only', icon: UtensilsCrossed },
      { key: 'wardrobes_living', icon: Layers },
      { key: 'renovation', icon: Wrench },
    ];

    return (
      <motion.div
        key="step-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div>
          <h3 className="font-editorial-h3 text-[#181615]">Define Your Scope of Work</h3>
          <p className="text-xs text-[#8C8479] mt-1">
            Specify the areas required. Full Turnkey includes complete false ceiling, electricals & civil work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {scopeOptions.map((opt) => {
            const Icon = opt.icon;
            const data = SCOPE_MULTIPLIERS[opt.key];
            const isSelected = state.scope === opt.key;

            return (
              <motion.button
                key={opt.key}
                type="button"
                variants={itemVariants}
                onClick={() => {
                  onChange('scope', opt.key);
                }}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F7F1E6] border-[#C8A97E] shadow-card-depth ring-1 ring-[#C8A97E]'
                    : 'bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7] hover:bg-[#FBF9F5]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-[#3A6B56]" />
                  </span>
                )}

                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#FFFFFF] text-[#C8A97E]' : 'bg-[#F3EFE6] text-[#5E5952]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#181615]">{data.label}</h4>
                    <p className="text-xs text-[#5E5952] mt-1.5 leading-relaxed">{data.desc}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EDE7DC]/70 flex items-center justify-between text-xs text-[#8C8479]">
                  <span>Turnkey Coverage</span>
                  <span className="font-semibold text-[#181615]">
                    {opt.key === 'full_turnkey' ? '100% Comprehensive' : 'Targeted Atelier'}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // STEP 3: Interior Aesthetic
  if (state.step === 3) {
    const aestheticOptions: { key: AestheticStyle; colorSample: string }[] = [
      { key: 'warm_minimalist', colorSample: 'from-[#FBF9F5] to-[#F3EFE6]' },
      { key: 'modern_classical', colorSample: 'from-[#FFFFFF] to-[#EDE7DC]' },
      { key: 'japandi', colorSample: 'from-[#F3EFE6] to-[#E5D2BA]' },
      { key: 'luxe_contemporary', colorSample: 'from-[#EAE3D5] to-[#C8A97E]' },
    ];

    return (
      <motion.div
        key="step-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div>
          <h3 className="font-editorial-h3 text-[#181615]">Select Your Interior Aesthetic Persona</h3>
          <p className="text-xs text-[#8C8479] mt-1">
            Every mood evokes distinct surface textures, mood lighting temperatures, and edge trims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aestheticOptions.map((opt) => {
            const data = AESTHETIC_FACTORS[opt.key];
            const isSelected = state.aesthetic === opt.key;

            return (
              <motion.button
                key={opt.key}
                type="button"
                variants={itemVariants}
                onClick={() => {
                  onChange('aesthetic', opt.key);
                }}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F7F1E6] border-[#C8A97E] shadow-card-depth ring-1 ring-[#C8A97E]'
                    : 'bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7] hover:bg-[#FBF9F5]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-[#3A6B56]" />
                  </span>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${opt.colorSample} border border-[#DDD5C7]`} />
                    <h4 className="text-base font-semibold text-[#181615]">{data.label}</h4>
                  </div>
                  <p className="text-xs text-[#5E5952] leading-relaxed">{data.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EDE7DC]/70 flex items-center justify-between text-[11px] text-[#8C8479]">
                  <span>Color Spectrum</span>
                  <span className="font-medium text-[#181615]">Alabaster / Warm Earth</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // STEP 4: Engineering & Hardware Grade
  if (state.step === 4) {
    const tierOptions: MaterialTier[] = ['essential', 'premium_german', 'bespoke_veneer'];

    return (
      <motion.div
        key="step-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div>
          <h3 className="font-editorial-h3 text-[#181615]">Choose Engineering & Hardware Grade</h3>
          <p className="text-xs text-[#8C8479] mt-1">
            All tiers include certified zero-joint edge banding and 10-year structural warranty.
          </p>
        </div>

        <div className="space-y-4">
          {tierOptions.map((tierKey) => {
            const data = MATERIAL_TIERS[tierKey];
            const isSelected = state.materialTier === tierKey;

            return (
              <motion.button
                key={tierKey}
                type="button"
                variants={itemVariants}
                onClick={() => {
                  onChange('materialTier', tierKey);
                }}
                className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#F7F1E6] border-[#C8A97E] shadow-card-depth ring-1 ring-[#C8A97E]'
                    : 'bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7] hover:bg-[#FBF9F5]'
                }`}
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-[#181615]">{data.title}</span>
                    {tierKey === 'premium_german' && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C8A97E] text-[#181615] text-[10px] font-bold uppercase tracking-wider">
                        Architects Choice
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8C8479]">{data.subtitle}</p>
                  <p className="text-xs text-[#5E5952] pt-1 font-mono text-[11px] bg-[#EDE7DC]/40 px-2.5 py-1 rounded-md inline-block">
                    {data.specs}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  {isSelected ? (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3A6B56]">
                      <CheckCircle className="w-5 h-5 text-[#3A6B56]" />
                      <span>Selected</span>
                    </div>
                  ) : (
                    <span className="text-xs font-medium text-[#8C8479] underline">Choose Tier</span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // STEP 5: Timeline to Move-in
  if (state.step === 5) {
    const timelineOptions: { key: TimelineUrgency; title: string; badge: string; desc: string }[] = [
      {
        key: 'immediate',
        title: 'Ready for Immediate Possession',
        badge: 'Priority 40-Day Fast-Track',
        desc: 'Keys already in hand or possession within 15 days. Site measurement team deployed in 24 hours.',
      },
      {
        key: '30_60_days',
        title: 'Possession in 30 – 60 Days',
        badge: 'Recommended Turnkey Window',
        desc: 'Standard architectural workflow. Ample time for custom 3D virtualization and factory milling.',
      },
      {
        key: 'exploring',
        title: 'Advance Planning (60+ Days)',
        badge: 'Early Price-Lock Privilege',
        desc: 'Lock in current factory raw material rates and the 15% digital grant voucher for 6 months.',
      },
    ];

    return (
      <motion.div
        key="step-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-6"
      >
        <div>
          <h3 className="font-editorial-h3 text-[#181615]">When is Your Anticipated Handover?</h3>
          <p className="text-xs text-[#8C8479] mt-1">
            Our 45-day penalty guarantee is legally activated once the laser measurement is executed.
          </p>
        </div>

        <div className="space-y-4">
          {timelineOptions.map((opt) => {
            const isSelected = state.timeline === opt.key;

            return (
              <motion.button
                key={opt.key}
                type="button"
                variants={itemVariants}
                onClick={() => {
                  onChange('timeline', opt.key);
                }}
                className={`w-full p-5 rounded-2xl text-left border transition-all duration-300 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#F7F1E6] border-[#C8A97E] shadow-card-depth ring-1 ring-[#C8A97E]'
                    : 'bg-[#FFFFFF] border-[#EDE7DC] hover:border-[#DDD5C7] hover:bg-[#FBF9F5]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-[#181615]">{opt.title}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A97E] px-2 py-0.5 rounded-full bg-white border border-[#E5D2BA]">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E5952] leading-relaxed max-w-xl">{opt.desc}</p>
                </div>

                <div className="shrink-0">
                  {isSelected ? (
                    <CheckCircle className="w-5 h-5 text-[#3A6B56]" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border border-[#DDD5C7]" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return null;
};
