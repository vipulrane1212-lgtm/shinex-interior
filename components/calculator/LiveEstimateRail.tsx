'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { formatINRRange } from '@/lib/calculator-rates';
import { Sparkles, ShieldCheck, ChevronUp, ChevronDown, Check, ArrowRight } from 'lucide-react';

export default function LiveEstimateRail() {
  const { estimate, summaryChips, step, setStep, nextStep } = useCalculator();
  const [mobileExpanded, setMobileExpanded] = useState<boolean>(false);

  const formattedRange = formatINRRange(estimate.min, estimate.max);

  return (
    <>
      {/* ================= DESKTOP STICKY SIDEBAR ================= */}
      <aside className="hidden lg:block w-80 shrink-0">
        <div className="sticky top-28 space-y-4">
          <div className="p-6 rounded-2xl bg-ink-card border border-gold/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden">
            {/* Subtle Gold Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

            <div className="flex items-center justify-between pb-3 border-b border-ink-border">
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold font-mono flex items-center gap-1.5 font-semibold">
                <Sparkles size={13} className="text-gold animate-pulse" />
                Live Running Estimate
              </span>
              <span className="text-[10px] font-mono text-plaster-dim px-2 py-0.5 rounded-full bg-ink border border-ink-border">
                Step {step} of 7
              </span>
            </div>

            {/* Price Display */}
            <div className="py-4">
              <span className="text-[11px] text-plaster-muted block font-light">Indicative Range</span>
              <div className="text-3xl font-serif text-plaster font-semibold tracking-tight mt-1">
                {formattedRange}
              </div>
              <p className="text-[10px] text-plaster-dim mt-1.5 leading-relaxed">
                Estimate only · Final quote after site measure
              </p>
            </div>

            {/* Selected Chips */}
            <div className="pt-3 border-t border-ink-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-plaster-muted font-medium">
                  Based On:
                </span>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-[10px] text-gold hover:underline font-mono"
                >
                  Edit
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                {summaryChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-ink border border-ink-border text-plaster-muted"
                  >
                    <Check size={10} className="text-gold" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Button */}
            {step < 7 && (
              <button
                type="button"
                onClick={nextStep}
                className="btn-luxury w-full mt-5 py-2.5 px-4 rounded-xl bg-gold text-white font-sans font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Continue</span>
                <ArrowRight size={14} />
              </button>
            )}

            {/* Trust Seal */}
            <div className="pt-4 mt-2 border-t border-ink-border/50 flex items-center gap-2 text-[10px] text-plaster-dim font-sans">
              <ShieldCheck size={14} className="text-gold shrink-0" />
              <span>ShineX Infra Solutions · Direct Execution</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE BOTTOM FLOATING BAR ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-ink-card/95 backdrop-blur-xl border-t border-gold/30 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
        {/* Expandable Breakdown Drawer */}
        {mobileExpanded && (
          <div className="px-5 py-4 border-b border-ink-border bg-ink/95 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-gold font-mono font-medium">
                Active Selections:
              </span>
              <button
                type="button"
                onClick={() => setMobileExpanded(false)}
                className="text-[11px] text-plaster-dim hover:text-plaster"
              >
                Close
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
              {summaryChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-ink-card border border-ink-border text-plaster-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-[9px] text-plaster-dim">
              Estimate only · Final quote after site measure · ShineX Infra Solutions
            </p>
          </div>
        )}

        <div className="px-5 py-3 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="flex items-center gap-2 text-left"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-gold font-mono block">
                Estimated Cost
              </span>
              <span className="text-base font-serif font-semibold text-plaster">
                {formattedRange}
              </span>
            </div>
            {mobileExpanded ? (
              <ChevronDown size={14} className="text-plaster-dim" />
            ) : (
              <ChevronUp size={14} className="text-plaster-dim" />
            )}
          </button>

          {step < 7 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-luxury py-2 px-5 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1.5 shadow-md"
            >
              <span>Next</span>
              <ArrowRight size={13} />
            </button>
          ) : (
            <span className="text-[10px] text-gold uppercase tracking-wider font-mono">
              Final Step
            </span>
          )}
        </div>
      </div>
    </>
  );
}
