'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  SlidersHorizontal,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import {
  CalculatorState,
  UserLeadData,
  TaxonomyVariant,
} from '@/lib/types';
import { calculateBOQ, formatINR } from '@/lib/calculatorLogic';
import { StepRenderer } from './StepRenderer';
import { UnlockGateModal } from './UnlockGateModal';
import { QuotationSummaryCard } from './QuotationSummaryCard';

export const QuotationWizard: React.FC = () => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    step: 1,
    configuration: '3BHK',
    scope: 'full_turnkey',
    aesthetic: 'warm_minimalist',
    materialTier: 'premium_german',
    timeline: '30_60_days',
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Synchronize with taxonomy variant selection
  useEffect(() => {
    const handleVariantSelect = (e: Event) => {
      const customEvent = e as CustomEvent<TaxonomyVariant>;
      if (customEvent.detail && customEvent.detail.quoteDefaults) {
        const { configuration, scope, aesthetic, materialTier } = customEvent.detail.quoteDefaults;
        setCalculatorState((prev) => ({
          ...prev,
          configuration,
          scope,
          aesthetic,
          materialTier,
          step: 4, // Fast-forward to hardware grade
        }));
        setIsUnlocked(false);
        setIsCalculating(false);
      }
    };

    window.addEventListener('shinex-select-variant', handleVariantSelect);
    return () => window.removeEventListener('shinex-select-variant', handleVariantSelect);
  }, []);

  const boqResult = useMemo(() => {
    return calculateBOQ(calculatorState);
  }, [calculatorState]);

  const handleChange = <K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) => {
    setCalculatorState((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (calculatorState.step < 5) {
      setCalculatorState((prev) => ({ ...prev, step: prev.step + 1 }));
    } else if (calculatorState.step === 5) {
      // Transition to Step 6 calculation state
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setCalculatorState((prev) => ({ ...prev, step: 6 }));
      }, 1800);
    }
  };

  const handlePrev = () => {
    if (calculatorState.step > 1 && !isUnlocked) {
      setCalculatorState((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleUnlock = (data: UserLeadData) => {
    setCalculatorState((prev) => ({ ...prev, userData: data }));
    setIsUnlocked(true);
  };

  const handleReset = () => {
    setCalculatorState({
      step: 1,
      configuration: '3BHK',
      scope: 'full_turnkey',
      aesthetic: 'warm_minimalist',
      materialTier: 'premium_german',
      timeline: '30_60_days',
    });
    setIsUnlocked(false);
    setIsCalculating(false);
  };

  const stepLabels = [
    { num: 1, label: 'Layout' },
    { num: 2, label: 'Scope' },
    { num: 3, label: 'Aesthetic' },
    { num: 4, label: 'Hardware' },
    { num: 5, label: 'Timeline' },
  ];

  return (
    <section id="estimator" className="py-24 bg-[#F3EFE6] border-t border-[#EDE7DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] text-xs font-semibold text-[#181615] uppercase tracking-wider shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Interactive Cost Engine</span>
          </div>

          <h2 className="font-editorial-h2 text-[#181615]">
            The 6-Step Turnkey Quotation Engine
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            Configure your apartment or villa dimensions. Calculate transparent BOQ line items with German
            factory milling tolerances and claim your exclusive 15% Sneha Enterprises digital grant voucher.
          </p>
        </div>

        {/* Wizard Main Container */}
        <div className="max-w-4xl mx-auto">
          {/* Progress Step Indicator (Only visible before unlock) */}
          {!isUnlocked && calculatorState.step <= 5 && !isCalculating && (
            <div className="mb-10">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#DDD5C7] -translate-y-1/2 -z-0" />
                <div
                  className="absolute top-1/2 left-0 h-[2px] bg-[#C8A97E] -translate-y-1/2 -z-0 transition-all duration-500"
                  style={{
                    width: `${((calculatorState.step - 1) / (stepLabels.length - 1)) * 100}%`,
                  }}
                />

                {stepLabels.map((s) => {
                  const isCurrent = calculatorState.step === s.num;
                  const isPassed = calculatorState.step > s.num;

                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => {
                        if (isPassed) {
                          setCalculatorState((prev) => ({ ...prev, step: s.num }));
                        }
                      }}
                      disabled={!isPassed && !isCurrent}
                      className="relative z-10 flex flex-col items-center group focus:outline-none"
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[#C8A97E] text-[#181615] ring-4 ring-[#FFFFFF] shadow-md scale-110'
                            : isPassed
                            ? 'bg-[#3A6B56] text-white'
                            : 'bg-[#FFFFFF] text-[#8C8479] border border-[#DDD5C7]'
                        }`}
                      >
                        {isPassed ? <CheckCircle className="w-4 h-4" /> : s.num}
                      </div>
                      <span
                        className={`text-[11px] uppercase tracking-wider mt-2 font-medium ${
                          isCurrent ? 'text-[#181615] font-bold' : 'text-[#8C8479]'
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Calculating Animation State (1.8s delay) */}
          {isCalculating && (
            <div className="py-20 px-8 bg-[#FFFFFF] rounded-3xl border border-[#DDD5C7] shadow-xl text-center space-y-6 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] mx-auto flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#C8A97E] border-t-transparent animate-spin" />
                <Sparkles className="w-7 h-7 text-[#C8A97E]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-editorial-h3 text-xl text-[#181615]">
                  Synthesizing Architectural Quantities...
                </h3>
                <p className="text-xs text-[#5E5952] leading-relaxed">
                  Analysing German Homag factory fabrication volume for your{' '}
                  <strong className="text-[#181615]">{calculatorState.configuration}</strong> plan and applying
                  15% Sneha Enterprises digital grant voucher...
                </p>
              </div>

              <div className="w-48 h-1.5 bg-[#EDE7DC] rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-[#C8A97E] rounded-full animate-pulse" />
              </div>
            </div>
          )}

          {/* Step 1 to 5 Wizard Tiles */}
          {!isCalculating && !isUnlocked && calculatorState.step <= 5 && (
            <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#DDD5C7] shadow-soft-luxury space-y-8">
              <StepRenderer
                state={calculatorState}
                onChange={handleChange}
                onNext={handleNext}
              />

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-[#EDE7DC] flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={calculatorState.step === 1}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#DDD5C7] text-xs font-semibold uppercase tracking-wider text-[#5E5952] hover:text-[#181615] hover:bg-[#F3EFE6] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:block text-right">
                    <p className="text-[10px] uppercase tracking-wider text-[#8C8479]">Live Ballpark</p>
                    <p className="text-sm font-semibold text-[#181615]">
                      {formatINR(boqResult.finalDiscountedTotal)}{' '}
                      <span className="text-[10px] text-[#3A6B56] font-normal">(15% Off)</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] text-xs font-semibold uppercase tracking-wider shadow-soft-luxury transition-all duration-300 border border-[#E5D2BA]"
                  >
                    <span>{calculatorState.step === 5 ? 'Generate Itemized BOQ' : 'Next Step'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Unlock Gate Modal with Blurred Background Preview */}
          {!isCalculating && calculatorState.step === 6 && !isUnlocked && (
            <div className="relative rounded-3xl overflow-hidden min-h-[600px]">
              {/* Blurred background preview of the BOQ */}
              <div className="filter blur-md select-none pointer-events-none opacity-40">
                <QuotationSummaryCard
                  result={boqResult}
                  userData={calculatorState.userData}
                  onReset={handleReset}
                />
              </div>

              {/* Unlock Gate Modal Form */}
              <UnlockGateModal
                onUnlock={handleUnlock}
                savingsEstimate={formatINR(boqResult.discountSavings)}
              />
            </div>
          )}

          {/* Unlocked State: Exact Itemized BOQ Reveal */}
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <QuotationSummaryCard
                result={boqResult}
                userData={calculatorState.userData}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
