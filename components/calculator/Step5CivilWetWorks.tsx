'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { SHINEX_RATES } from '@/lib/calculator-rates';
import { ShieldCheck, Check, Sparkles, AlertTriangle, Droplets, Zap, Flame, Grid } from 'lucide-react';

export default function Step5CivilWetWorks() {
  const {
    selectedCivilAddons,
    toggleCivilAddon,
    selectedBundle,
    selectBundle,
  } = useCalculator();

  const bundles = [
    {
      id: 'kitchen_lock',
      name: 'Kitchen Lock Bundle',
      tagline: 'Plumbing points + Sink Waterproofing + Appliance Electrical DB',
      badge: '15% Off Combined Trades',
      icon: ShieldCheck,
      desc: 'Guarantees your expensive modular kitchen carcass never rots from concealed pipe leaks.',
    },
    {
      id: 'bath_utility_pair',
      name: 'Bath + Utility Anti-Leak Pair',
      tagline: 'Dual PU membrane waterproofing + Drain shifts + Wet flooring',
      badge: '15% Off Pair',
      icon: Droplets,
      desc: '10-year leakproof barrier applied before tiles & vanity joinery are installed.',
    },
    {
      id: 'full_wet_package',
      name: 'Full Wet-Works Overhaul',
      tagline: 'Complete Civil, MEP, Core-Cuts, Gas & Waterproofing package',
      badge: '20% Super Savings',
      icon: Sparkles,
      desc: 'Complete turnkey civil preparation executed directly under Sneha Enterprises licensure.',
    },
  ];

  const civilChecklist = [
    { id: 'civil_plumbing', name: 'Plumbing Point Shifts & Pressure Testing', desc: 'Concealed CPVC/UPVC lines with zero wall dampness' },
    { id: 'civil_waterproofing', name: 'Polyurethane (PU) Waterproofing', desc: 'Double-coat elastomeric seal in bath, balcony & utility' },
    { id: 'civil_electrical', name: 'Electrical Board / Heavy Appliance Points', desc: 'FR-grade copper wiring with dedicated 16A/25A lines' },
    { id: 'civil_gas_exhaust', name: 'Gas Line Shift & Core-Cut Exhaust Hole', desc: 'Diamond core-drilled 6-inch exterior exhaust duct' },
    { id: 'civil_flooring', name: 'Wet Area Floor Relay & Skirting', desc: 'Anti-skid matte vitrified tiles with waterproof epoxy grout' },
    { id: 'civil_painting', name: 'Post-Civil Primer & Anti-Damp Royale Coat', desc: 'Alkali-resistant priming and fungal barrier coat' },
    { id: 'civil_society_coord', name: 'Society NOC & Heavy Debris Disposal', desc: 'Liaison with building society office and chute management' },
    { id: 'civil_leak_repair', name: 'External Shaft & Ceiling Leak Repair', desc: 'Pressure polymer injection into hairline slab fissures' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="flex items-center gap-2 text-gold">
          <ShieldCheck size={18} />
          <span className="text-xs uppercase tracking-[0.2em] font-mono font-medium">
            ShineX Infra Advantage · Direct Civil Licensure
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          Protect the Modular — Add Wet Works?
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light max-w-2xl">
          90% of modular interior failures in Mumbai are caused by concealed pipe leaks or wall dampness.
          ShineX Infra executes certified civil wet-works before interior joinery is installed.
        </p>
      </div>

      {/* ================= PRE-ENGINEERED BUNDLES ================= */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-gold flex items-center gap-1.5 font-medium">
          <Sparkles size={14} />
          Recommended Pre-Engineered Wet Bundles (Instant Savings)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {bundles.map((b) => {
            const isSelected = selectedBundle === b.id;
            const Icon = b.icon;

            return (
              <button
                key={b.id}
                type="button"
                onClick={() => selectBundle(isSelected ? null : b.id)}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'bg-ink-card border-gold ring-1 ring-gold shadow-[0_0_20px_rgba(197,168,128,0.25)]'
                    : 'bg-ink border-ink-border hover:border-gold/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40">
                      {b.badge}
                    </span>
                    <Icon size={16} className="text-gold" />
                  </div>
                  <h3 className="text-sm font-serif font-semibold text-plaster mt-1">
                    {b.name}
                  </h3>
                  <p className="text-[11px] text-plaster-muted font-light mt-1 leading-snug">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-ink-border/50 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-plaster-dim">
                    {isSelected ? 'Bundle Applied' : 'Apply Bundle'}
                  </span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected ? 'bg-gold border-gold text-ink' : 'border-ink-border bg-ink'
                    }`}
                  >
                    {isSelected && <Check size={11} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= A LA CARTE CHECKLIST ================= */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block">
          Or Customize Individual Civil Trades (À La Carte)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {civilChecklist.map((item) => {
            const isChecked = selectedCivilAddons.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCivilAddon(item.id)}
                className={`p-3.5 rounded-xl border text-left flex items-start justify-between text-xs transition-all ${
                  isChecked
                    ? 'bg-ink-card border-gold/70 text-plaster shadow-sm'
                    : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                }`}
              >
                <div className="pr-3">
                  <span className="font-medium text-plaster block">{item.name}</span>
                  <span className="text-[11px] text-plaster-dim font-light mt-0.5 block">
                    {item.desc}
                  </span>
                </div>
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 mt-0.5 ${
                    isChecked ? 'bg-gold border-gold text-ink' : 'border-ink-border bg-ink'
                  }`}
                >
                  {isChecked && <Check size={11} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-ink border border-ink-border text-[11px] text-plaster-dim flex items-center gap-2">
        <AlertTriangle size={14} className="text-gold shrink-0" />
        <span>
          All wet works backed by Sneha Enterprises Class-1 civil contractor warranty and pressure test certification.
        </span>
      </div>
    </div>
  );
}
