import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import SplitFooter from '@/components/layout/SplitFooter';
import CostCalculator from '@/components/calculator/CostCalculator';
import { CalculatorProvider } from '@/context/CalculatorContext';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Cost Calculator & Instant Estimate | ShineX Infra Solutions',
  description:
    'Interactive architectural interior & civil cost estimator for Mumbai & Navi Mumbai. Real-time indicative estimates for apartments, villas, and commercial fit-outs.',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-ink text-plaster flex flex-col justify-between selection:bg-gold selection:text-ink">
      <Header />

      <main className="flex-1 w-full pt-28 sm:pt-32">
        {/* Page Hero Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors mb-4 font-mono"
          >
            <ArrowLeft size={14} /> Back to Atelier Showcase
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-ink-border">
            <div>
              <div className="flex items-center gap-2 text-gold">
                <Sparkles size={16} />
                <span className="text-xs uppercase tracking-[0.25em] font-mono font-semibold">
                  Interactive Cost Estimator
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mt-1 text-plaster">
                Build Your Project Estimate.
              </h1>
              <p className="text-xs sm:text-sm text-plaster-muted font-light mt-1.5 max-w-2xl leading-relaxed">
                Configure your space, pick modular joinery, and review calibrated Navi Mumbai rates in real-time.
                Backed by <strong>ShineX Infra Solutions</strong>.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-ink-card border border-ink-border text-xs text-plaster-dim shrink-0">
              <ShieldCheck size={16} className="text-gold" />
              <span>Indicative Rates · Site Measure Required</span>
            </div>
          </div>
        </section>

        {/* Multi-Step Calculator Wizard */}
        <CalculatorProvider>
          <CostCalculator />
        </CalculatorProvider>
      </main>

      <SplitFooter />
    </div>
  );
}
