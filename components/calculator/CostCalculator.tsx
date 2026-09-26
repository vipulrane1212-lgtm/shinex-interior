'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import LiveEstimateRail from './LiveEstimateRail';
import Step1ProjectType from './Step1ProjectType';
import Step2ScopeAndArea from './Step2ScopeAndArea';
import Step3ServiceTree from './Step3ServiceTree';
import Step4FinishTier from './Step4FinishTier';
import Step5CivilWetWorks from './Step5CivilWetWorks';
import Step6TimelineExtras from './Step6TimelineExtras';
import Step7LeadTrap from './Step7LeadTrap';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export default function CostCalculator() {
  const { step, setStep, nextStep, prevStep, isSubmitted } = useCalculator();

  const stepLabels = [
    'Project',
    'Scope & Area',
    'Modules',
    'Finish Tier',
    'Civil Works',
    'Timeline',
    'Estimate Lock',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      {/* Top Progress Bar & Steps Indicator */}
      <div className="mb-8">
        {/* Progress Fill Line */}
        <div className="w-full bg-ink-border h-1.5 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / 7) * 100}%` }}
          />
        </div>

        {/* Step Circles (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-between">
          {stepLabels.map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = step > stepNum;
            const isCurrent = step === stepNum;

            return (
              <button
                key={idx}
                type="button"
                disabled={stepNum > step}
                onClick={() => setStep(stepNum)}
                className={`flex items-center gap-2 group transition-all ${
                  stepNum > step ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-semibold transition-all ${
                    isCompleted
                      ? 'bg-gold text-ink'
                      : isCurrent
                      ? 'bg-gold/20 text-gold border border-gold ring-2 ring-gold/30'
                      : 'bg-ink border border-ink-border text-plaster-dim'
                  }`}
                >
                  {isCompleted ? <Check size={13} /> : stepNum}
                </div>
                <span
                  className={`text-xs font-mono uppercase tracking-wider ${
                    isCurrent ? 'text-gold font-bold' : 'text-plaster-muted group-hover:text-plaster'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Step Indicator */}
        <div className="md:hidden flex items-center justify-between text-xs font-mono">
          <span className="text-gold uppercase tracking-wider font-semibold">
            Step {step} of 7: {stepLabels[step - 1]}
          </span>
          <span className="text-plaster-dim">
            {Math.round((step / 7) * 100)}% Completed
          </span>
        </div>
      </div>

      {/* Main 2-Column Layout (Content + Live Estimate Rail) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-24 lg:pb-12">
        {/* Left: Step Form Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-ink-card/40 border border-ink-border/80 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
            {step === 1 && <Step1ProjectType />}
            {step === 2 && <Step2ScopeAndArea />}
            {step === 3 && <Step3ServiceTree />}
            {step === 4 && <Step4FinishTier />}
            {step === 5 && <Step5CivilWetWorks />}
            {step === 6 && <Step6TimelineExtras />}
            {step === 7 && <Step7LeadTrap />}

            {/* Back / Next Navigation Buttons (Only when not in submitted state) */}
            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-ink-border/60 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="py-2.5 px-5 rounded-xl border border-ink-border text-plaster-muted hover:text-plaster hover:border-gold/40 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <ArrowLeft size={14} />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 7 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-luxury py-2.5 px-6 rounded-xl bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-gold-light transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>Proceed to Step {step + 1}</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: Sticky Live Running Estimate Rail */}
        <LiveEstimateRail />
      </div>
    </div>
  );
}
