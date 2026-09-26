'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { Home, Building2, Wrench, CheckCircle2 } from 'lucide-react';

export default function Step1ProjectType() {
  const { projectType, setProjectType, nextStep } = useCalculator();

  const options = [
    {
      id: 'residential' as const,
      title: 'Residential Home',
      brand: 'ShineX Interior',
      description: 'Luxury apartments, penthouses, villas, and turnkey modular living.',
      icon: Home,
      popular: true,
    },
    {
      id: 'commercial' as const,
      title: 'Commercial Space',
      brand: 'ShineX Interior · Infra',
      description: 'Corporate offices, retail flagships, clinics, salons, and cafés.',
      icon: Building2,
    },
    {
      id: 'utility' as const,
      title: 'Civil & Utility Only',
      brand: 'ShineX Infra',
      description: 'Waterproofing, plumbing, electrical, wet-works, and leak repairs.',
      icon: Wrench,
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
          Step 1 of 7
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          Select Your Project Classification
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
          Choose the primary scope of your space to initialize accurate Navi Mumbai / Mumbai rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((opt) => {
          const isSelected = projectType === opt.id;
          const Icon = opt.icon;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setProjectType(opt.id);
              }}
              className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[200px] ${
                isSelected
                  ? 'bg-ink-card border-gold shadow-[0_0_25px_rgba(197,168,128,0.25)] ring-1 ring-gold'
                  : 'bg-ink-card/60 border-ink-border hover:border-gold/40 hover:bg-ink-card'
              }`}
            >
              {opt.popular && (
                <span className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40">
                  Most Requested
                </span>
              )}

              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-gold text-ink'
                      : 'bg-ink border border-ink-border text-gold group-hover:bg-gold/20'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                    {opt.brand}
                  </span>
                  <h3 className="text-lg font-serif text-plaster font-semibold mt-0.5">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-plaster-muted font-light mt-1.5 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-ink-border/40 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-plaster-dim">
                  {isSelected ? 'Active Selection' : 'Click to Select'}
                </span>
                {isSelected && (
                  <CheckCircle2 size={16} className="text-gold" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
