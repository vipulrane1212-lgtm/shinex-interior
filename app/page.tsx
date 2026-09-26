import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DualTrackHero from '@/components/hero/DualTrackHero';
import BentoGrid from '@/components/bento/BentoGrid';
import BeforeAfterSlider from '@/components/comparison/BeforeAfterSlider';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ink text-plaster flex flex-col justify-between">
      {/* Global Minimalist Sticky Header */}
      <Header />

      {/* Main Experience */}
      <main className="flex-1 w-full">
        {/* Section 1: The Dual-Track Hero (GSAP Split-Screen) */}
        <DualTrackHero />

        {/* Section 2: The "Show, Don't Tell" Service Grids (Bento Box UI) */}
        <BentoGrid />

        {/* Section 3: Visual Portfolio Before/After Sliders */}
        <BeforeAfterSlider />

        {/* Atmospheric Civil Assurance & Direct Quote Action */}
        <section className="py-20 bg-ink-soft border-b border-ink-border relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-gold">
                <ShieldCheck size={18} />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                  Sneha Enterprises Civil Assurance
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-plaster font-normal">
                Direct Execution. Zero Sub-Contracting Drift.
              </h3>
              <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed">
                Whether fabricating bespoke German modular kitchens or executing large-scale vitrified tiling and structural MEP, every millimeter is supervised by senior site engineers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-ink text-xs font-semibold uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all"
              >
                <span>Request Project Estimate</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
