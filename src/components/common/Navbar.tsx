'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ArrowUpRight, Menu, X, Shield, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Catalog & Taxonomy', href: '#catalog' },
    { label: '5-Step Workflow', href: '#journey' },
    { label: 'Cost Engine', href: '#estimator' },
    { label: 'Client Reels & Reviews', href: '#reviews' },
    { label: '15% Digital Grant', href: '#discount-booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EDE7DC] shadow-soft-luxury py-3'
          : 'bg-[#FBF9F5]/70 backdrop-blur-sm border-b border-[#EDE7DC]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Legal Trust Anchor */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#181615] group-hover:text-[#B69566] transition-colors">
                Shine<span className="text-[#C8A97E] font-semibold">X</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-sans tracking-[0.2em] uppercase font-bold text-[#8C8479] pl-2 border-l border-[#DDD5C7]">
                Infra Interior
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3A6B56]" />
              <span className="text-[10px] font-sans tracking-wider text-[#5E5952] uppercase">
                Sneha Enterprises Legal Trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.14em] font-medium text-[#5E5952] hover:text-[#181615] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A97E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Contact & Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919845012890"
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#181615] px-3 py-2 rounded-full border border-[#DDD5C7] hover:border-[#C8A97E] hover:bg-[#F3EFE6] transition-all"
              aria-label="Call concierge"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>+91 98450 12890</span>
            </a>

            <MagneticButton
              href="#estimator"
              variant="primary"
              size="sm"
              ariaLabel="Launch Quotation Calculator"
            >
              <span>Instant BOQ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#estimator"
              className="text-[11px] font-semibold tracking-wider uppercase bg-[#C8A97E] text-[#181615] px-3 py-1.5 rounded-full"
            >
              Get Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#181615] hover:text-[#C8A97E] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#181615]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-[#EDE7DC] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 p-3 bg-[#F3EFE6] rounded-lg text-xs text-[#5E5952]">
            <Shield className="w-4 h-4 text-[#3A6B56]" />
            <span>Sneha Enterprises: 45-Day Guaranteed Handover</span>
          </div>

          <div className="space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider font-medium text-[#181615] hover:text-[#C8A97E] py-1 border-b border-[#EDE7DC]/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919845012890"
              className="flex items-center justify-center gap-2 text-xs font-semibold py-3 border border-[#DDD5C7] rounded-full text-[#181615]"
            >
              <Phone className="w-4 h-4 text-[#C8A97E]" />
              <span>Direct Concierge: +91 98450 12890</span>
            </a>

            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider py-3.5 bg-[#C8A97E] text-[#181615] rounded-full shadow-soft-luxury"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch 6-Step Cost Engine</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
