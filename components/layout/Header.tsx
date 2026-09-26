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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-ink/90 backdrop-blur-xl border-b border-ink-border/80 shadow-2xl'
          : 'py-6 bg-gradient-to-b from-ink/90 via-ink/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-serif tracking-[0.18em] text-plaster font-semibold uppercase group-hover:text-gold transition-colors">
                ShineX
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="hidden sm:inline-block text-[10px] tracking-[0.22em] uppercase text-plaster-muted font-medium">
                Infra Interior
              </span>
            </div>
            <span className="text-[9px] tracking-wider text-plaster-dim uppercase font-mono mt-0.5">
              Sneha Enterprises · Direct Execution
            </span>
          </div>
        </Link>

        {/* Center: Track Switcher */}
        <div className="hidden lg:block">
          <TrackToggle />
        </div>

        {/* Right Nav & CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/calculator"
            className="text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors font-mono font-semibold flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Cost Calculator</span>
          </Link>
          <a
            href="/#services"
            className="text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="/#transformation"
            className="text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors font-medium"
          >
            Before / After
          </a>
          <a
            href="/#timeline"
            className="text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors font-medium"
          >
            Protocol
          </a>
          <a
            href="/#reviews"
            className="text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors font-medium"
          >
            Trust Hub
          </a>
          <div className="h-4 w-[1px] bg-ink-border" />
          <button
            type="button"
            onClick={() => openQuiz()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-semibold uppercase tracking-wider hover:bg-gold-light hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] transition-all duration-300"
          >
            <span>Get a Quote</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-plaster hover:text-gold transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-ink-border px-6 py-6 mt-3 space-y-5 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-center pb-3">
            <TrackToggle />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-gold font-mono font-bold py-1.5 flex items-center justify-center gap-2 bg-gold/10 rounded-xl border border-gold/30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Project Cost Calculator</span>
            </Link>
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-plaster-muted hover:text-gold py-1"
            >
              Services Bento
            </a>
            <a
              href="/#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-plaster-muted hover:text-gold py-1"
            >
              Before / After Sliders
            </a>
            <a
              href="/#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-plaster-muted hover:text-gold py-1"
            >
              Architectural Protocol
            </a>
            <a
              href="/#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-plaster-muted hover:text-gold py-1"
            >
              Google Trust Hub
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuiz();
                }}
                className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full bg-gold text-ink text-xs font-semibold uppercase tracking-wider shadow-lg"
              >
                <span>Get a Quote (15% Off)</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
