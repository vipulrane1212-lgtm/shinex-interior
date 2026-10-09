'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_HERO_IMAGE } from '@/lib/assets';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function SplitFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Modular Kitchen',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-ink border-t border-ink-border overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          50/50 SPLIT CONTACT CTA SECTION (Architectural Consultation Pavilion)
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[720px] border-b border-ink-border">
        {/* Left Side (50%): High-Res Architectural Render with Bold Graphic Overlay */}
        <div className="lg:col-span-6 relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-16 min-h-[500px]">
          {/* Background Image with Shimmer */}
          <div className="absolute inset-0 z-0 skeleton-shimmer">
            <Image
              src={FOOTER_HERO_IMAGE}
              alt="ShineX Luxury Architecture Handover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Cinematic Dark Gradient Overlays for High-Contrast Luxury Typography */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/65 to-black/30 opacity-90 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/40 to-transparent hidden lg:block opacity-80 pointer-events-none" />

          {/* Top Badge Overlay with Frosted Glass */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-gold-light text-xs font-mono uppercase tracking-wider shadow-lg">
              <Sparkles size={13} className="text-gold-light" />
              <span>Special Offer · 15% Off Your Project</span>
            </div>
          </div>

          {/* Center / Bottom Graphic Text */}
          <div className="relative z-20 space-y-6 mt-12 lg:mt-0">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white tracking-tight leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
                Get a Free 3D Design &amp; <br />
                <span className="italic font-normal text-gold-light">15% Off Your Project.</span>
              </h2>
              <span className="text-sm sm:text-base md:text-lg text-zinc-200 font-sans font-light block mt-2 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Direct factory pricing · Zero middleman charges
              </span>
            </div>

            {/* Guaranteed Perks List */}
            <div className="space-y-3 pt-1 max-w-md">
              {[
                'Itemized quotation with zero hidden charges',
                'Free on-site laser measurement & 3D layout plan',
                '10-year warranty backed by Sneha Enterprises Class-1 civil license',
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-xs text-zinc-200 font-sans font-normal drop-shadow">
                  <CheckCircle2 size={15} className="text-gold-light shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-gold-light font-mono drop-shadow">
              <ShieldCheck size={15} className="text-gold-light" />
              <span>16+ Years Direct Civil &amp; Interior Execution in Mumbai</span>
            </div>
          </div>
        </div>

        {/* Right Side (50%): Architectural Consultation Briefing Desk */}
        <div className="lg:col-span-6 bg-ink-soft/60 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto w-full">
            {submitted ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-ink-card border border-ink-border shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold mx-auto shadow-sm">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                    Priority Brief Logged
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold">
                    Estimate Queued for {formData.name}.
                  </h3>
                  <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal leading-relaxed">
                    Our senior architect will review your <strong className="text-plaster">{formData.serviceType}</strong> requirements
                    and reach out directly on <strong className="text-gold font-mono">{formData.phone}</strong> with your 15% discount voucher.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-ink border border-ink-border hover:border-gold text-plaster text-xs uppercase tracking-wider transition-colors font-sans font-medium"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <div className="bg-ink-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-ink-border shadow-sm space-y-6">
                <div className="space-y-1.5 border-b border-ink-border/60 pb-5">
                  <span className="text-xs uppercase tracking-wider text-gold font-mono font-semibold block">
                    Direct Consultation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-plaster tracking-tight">
                    Speak with an Interior Engineer.
                  </h3>
                  <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal">
                    Direct consultation with our senior project team in Seawoods. No pushy sales calls.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4.5">
                  {/* Exactly 4 Fields */}
                  <div className="space-y-3.5">
                    {/* Field 1: Name */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono font-medium block mb-1">
                        1. Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Field 2: Phone */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono font-medium block mb-1">
                        2. WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs font-mono focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Field 3: Email */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono font-medium block mb-1">
                        3. Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all shadow-xs"
                      />
                    </div>

                    {/* Field 4: Service Type Selection */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono font-medium block mb-1.5">
                        4. Select Service Needed *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          'Modular Kitchen',
                          'Full Turnkey Home',
                          'Civil & Waterproofing',
                          'Commercial Fit-Out',
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceType: item })}
                            className={`py-2.5 px-3 rounded-xl text-xs font-sans font-medium border text-center transition-all ${
                              formData.serviceType === item
                                ? 'bg-gold text-white border-gold font-semibold shadow-sm'
                                : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/50 hover:text-plaster'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Large High-Converting Submit Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="btn-luxury w-full py-3.5 sm:py-4 rounded-full bg-gold text-white text-xs font-sans font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Claim 15% Off &amp; Get Free Estimate</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <div className="flex items-center justify-between text-[10px] text-plaster-dim font-mono">
                      <span>100% Confidential · Zero Spam</span>
                      <span>Direct Senior Engineer Review</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FOOTER DIRECTORY & SNEHA ENTERPRISES LOCKUP
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-ink-border/80">
          {/* Column 1: Brand & Licensure (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] text-plaster font-semibold uppercase">
                ShineX
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold font-sans">
                Infra Solutions
              </span>
            </div>
            <p className="text-xs text-plaster-muted font-sans font-normal leading-relaxed max-w-sm">
              Legal entity: <strong className="text-plaster">ShineX Infra Solutions</strong>. Operating brands:{' '}
              <span className="text-gold font-medium">ShineX Interior</span> (residential &amp; commercial fit-outs) &amp;{' '}
              <span className="text-gold font-medium">ShineX Infra</span> (civil contracting, waterproofing &amp; MEP). Backed by Sneha Enterprises Class-1 direct execution licensure.
            </p>
          </div>

          {/* Column 2: Studio Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
              Studio Navigation
            </span>
            <ul className="space-y-2 text-xs font-sans text-plaster-muted">
              <li>
                <a href="/#services" className="hover:text-plaster transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#transformation" className="hover:text-plaster transition-colors">
                  Transformations
                </a>
              </li>
              <li>
                <a href="/#timeline" className="hover:text-plaster transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-plaster transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Disciplines Directory (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
              Execution Disciplines
            </span>
            <ul className="space-y-2 text-xs font-sans text-plaster-muted">
              <li>
                <a href="/#services" className="hover:text-plaster transition-colors">
                  Modular Kitchen
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-plaster transition-colors">
                  Full Turnkey Home
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-plaster transition-colors">
                  Civil &amp; Waterproofing
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-plaster transition-colors">
                  Commercial Fit-Out
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Base & Contact HQ (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
              Atelier Base
            </span>
            <div className="space-y-2.5 text-xs text-plaster-muted font-sans">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-white font-mono uppercase tracking-wider text-[11px] font-semibold transition-all shadow-xs"
              >
                <span>Instant Cost Calculator</span>
                <ArrowUpRight size={13} />
              </Link>
              <div className="flex items-start gap-2 pt-1">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Sector 19A, Seawoods / Vashi, Navi Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+919820000000"
                  className="hover:text-plaster transition-colors font-mono font-medium whitespace-nowrap"
                >
                  +91&nbsp;98200&nbsp;00000
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer Bar: Copyright, Locations, Accreditations */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-plaster-dim font-mono">
          <p>© {new Date().getFullYear()} ShineX Infra Solutions · All rights reserved. Estimate only · Final quote after site measure.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <span>Seawoods · Kharghar · Vashi · Panvel · Mumbai</span>
            <span className="hidden sm:inline text-ink-border">|</span>
            <span>Direct Civil Licensure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
