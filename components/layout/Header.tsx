'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import TrackToggle from '@/components/ui/TrackToggle';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useTrack } from '@/context/TrackContext';
import { useQuiz } from '@/context/QuizContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { track } = useTrack();
  const { openQuiz } = useQuiz();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-ink-card/95 backdrop-blur-xl border-b border-ink-border shadow-[0_8px_30px_rgba(27,25,23,0.08)]'
          : 'py-3.5 sm:py-4.5 bg-ink-card/90 backdrop-blur-md border-b border-ink-border shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-4">
        {/* Brand Lockup */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.16em] text-plaster font-bold uppercase group-hover:text-gold transition-colors">
                ShineX
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] tracking-[0.24em] uppercase text-gold font-sans font-bold">
                Infra Interior
              </span>
            </div>
            <span className="text-[9.5px] tracking-wider text-plaster-muted uppercase font-mono font-bold mt-0.5">
              Licensed Civil &amp; Interior Contractor · Mumbai
            </span>
          </div>
        </Link>

        {/* Center: Architectural Navigation Dock */}
        <nav className="hidden lg:flex items-center gap-0.5 px-2 py-1 rounded-full bg-ink-card border border-ink-border shadow-xs shrink-0">
          <Link
            href="/calculator"
            className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] text-gold hover:text-gold-dark hover:bg-gold/10 transition-all font-mono font-bold flex items-center gap-1.5 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Cost Calculator</span>
          </Link>
          <a
            href="/#services"
            className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] text-plaster hover:text-gold hover:bg-ink-soft/80 transition-all font-sans font-bold whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="/#transformation"
            className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] text-plaster hover:text-gold hover:bg-ink-soft/80 transition-all font-sans font-bold whitespace-nowrap"
          >
            Transformations
          </a>
          <a
            href="/#timeline"
            className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] text-plaster hover:text-gold hover:bg-ink-soft/80 transition-all font-sans font-bold whitespace-nowrap"
          >
            How We Work
          </a>
          <a
            href="/#reviews"
            className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.08em] text-plaster hover:text-gold hover:bg-ink-soft/80 transition-all font-sans font-bold whitespace-nowrap"
          >
            Reviews
          </a>
        </nav>

        {/* Right: Track Mode & Luxury CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <TrackToggle />
          <div className="h-4 w-[1px] bg-ink-border hidden sm:block" />
          <button
            type="button"
            onClick={() => openQuiz()}
            className="btn-luxury group relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-gold text-white text-[11px] font-sans font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all whitespace-nowrap"
          >
            <span>Get Free Quote</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-plaster hover:text-gold transition-colors rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ink-card/95 backdrop-blur-xl border-b border-ink-border px-6 py-6 mt-2.5 space-y-5 animate-in fade-in slide-in-from-top-3 duration-250 shadow-2xl">
          <div className="flex justify-center pb-2">
            <TrackToggle />
          </div>
          <div className="flex flex-col gap-2.5 text-center">
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-gold font-mono font-bold py-2.5 flex items-center justify-center gap-2 bg-gold/10 rounded-xl border border-gold/30 shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Cost Calculator</span>
            </Link>
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-plaster-muted hover:text-plaster hover:bg-ink-soft/40 py-2 rounded-lg transition-colors font-sans font-medium"
            >
              Our Services
            </a>
            <a
              href="/#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-plaster-muted hover:text-plaster hover:bg-ink-soft/40 py-2 rounded-lg transition-colors font-sans font-medium"
            >
              Real Transformations
            </a>
            <a
              href="/#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-plaster-muted hover:text-plaster hover:bg-ink-soft/40 py-2 rounded-lg transition-colors font-sans font-medium"
            >
              How We Work
            </a>
            <a
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-plaster-muted hover:text-plaster hover:bg-ink-soft/40 py-2 rounded-lg transition-colors font-sans font-medium"
            >
              Client Reviews
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuiz();
                }}
                className="btn-luxury w-full inline-flex justify-center items-center gap-2 py-3.5 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-lg"
              >
                <span>Get Free Quote (15% Off)</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
