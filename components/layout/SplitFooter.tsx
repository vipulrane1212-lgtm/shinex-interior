'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
          50/50 SPLIT CONTACT CTA SECTION
      ───────────────────────────────────────────────────────────── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[720px] border-b border-ink-border">
        {/* Left Side (50%): High-Res Architectural Render with Bold Graphic Overlay */}
        <div className="lg:col-span-6 relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-16 min-h-[480px]">
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

          {/* Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 z-1 bg-gradient-to-t from-ink via-ink/65 to-ink/40" />

          {/* Top Badge Overlay */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-mono uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Limited Season Privilege · 15% Off</span>
            </div>
          </div>

          {/* Center / Bottom Graphic Text */}
          <div className="relative z-10 space-y-5 mt-12 lg:mt-0">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-plaster tracking-tight font-normal leading-[1.08]">
                Claim Your Free Quote &amp; <br />
                Your First Project.
              </h2>
              <span className="font-script text-3xl sm:text-4xl text-gold capitalize block mt-1 leading-none">
                exclusive season privilege · 15% voucher
              </span>
            </div>

            {/* Guaranteed Perks List */}
            <div className="space-y-2.5 pt-2 max-w-md">
              {[
                'Transparent itemized BOQ with zero hidden surcharges',
                'Free on-site laser measurement & 3D CAD schematic',
                'Direct Sneha Enterprises civil contracting & 10-year moisture seal',
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-xs text-plaster-muted font-sans font-light">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-gold font-mono">
              <ShieldCheck size={14} />
              <span>16 Years Direct Civil Execution in Navi Mumbai &amp; Mumbai</span>
            </div>
          </div>
        </div>

        {/* Right Side (50%): Minimalist Glassmorphism Contact Form */}
        <div className="lg:col-span-6 bg-ink-soft/90 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto w-full">
            {submitted ? (
              <div className="p-8 rounded-2xl glass-panel-gold text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-widest text-gold font-mono">
                    Priority Brief Logged
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                    Estimate Queued for {formData.name}.
                  </h3>
                  <p className="text-xs text-plaster-muted font-sans font-light leading-relaxed">
                    Our senior architect will review your <strong className="text-plaster">{formData.serviceType}</strong> requirements
                    and reach out directly on <strong className="text-gold font-mono">{formData.phone}</strong> with your 15% discount voucher.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-ink border border-ink-border hover:border-gold text-plaster text-xs uppercase tracking-wider transition-colors font-sans"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-gold font-mono block">
                    Fast-Track Lead Form
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                    Speak Directly with an Architect.
                  </h3>
                  <span className="font-script text-2xl text-gold capitalize block mt-0.5 leading-none">
                    direct atelier consultation
                  </span>
                  <p className="text-xs text-plaster-muted font-sans font-light mt-1">
                    No middlemen. Direct consultation with our Seawoods atelier engineers.
                  </p>
                </div>

                {/* Exactly 4 Fields */}
                <div className="space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                      1. Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Mahindra"
                      className="input-luxury w-full px-4 py-3.5 rounded-xl text-plaster text-xs"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                      2. Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="input-luxury w-full px-4 py-3.5 rounded-xl text-plaster text-xs font-mono"
                    />
                  </div>

                  {/* Field 3: Email */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                      3. Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@company.com"
                      className="input-luxury w-full px-4 py-3.5 rounded-xl text-plaster text-xs"
                    />
                  </div>

                  {/* Field 4: Service Type Selection */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1.5">
                      4. Service Type Required *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Modular Kitchen',
                        'Full Turnkey Home',
                        'Civil & Tiling',
                        'Commercial Fit-Out',
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: item })}
                          className={`py-2.5 px-3 rounded-lg text-xs font-sans font-medium border text-center transition-all ${
                            formData.serviceType === item
                              ? 'bg-gold text-white border-gold font-semibold shadow-md'
                              : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/40'
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
                    className="btn-luxury w-full py-4 rounded-full bg-gold text-white text-xs font-sans font-bold uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Claim 15% Off &amp; Get Estimate</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div className="flex items-center justify-between text-[10px] text-plaster-dim font-mono">
                    <span>100% Confidential · Zero Spam</span>
                    <span>Direct Senior Engineer Review</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FOOTER BASE CREDITS & SNEHA ENTERPRISES LOCKUP
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-ink-border/60">
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif tracking-[0.2em] text-plaster font-semibold uppercase">
                ShineX
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-medium font-sans">
                Infra Solutions
              </span>
            </div>
            <p className="text-xs text-plaster-muted font-sans font-light max-w-md">
              Legal entity: <strong className="text-plaster">ShineX Infra Solutions</strong>. Operating brands:{' '}
              <span className="text-gold font-medium">ShineX Interior</span> (residential &amp; commercial fit-outs) &amp;{' '}
              <span className="text-gold font-medium">ShineX Infra</span> (civil contracting, waterproofing &amp; MEP). Backed by Sneha Enterprises Class-1 direct execution licensure.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-6 text-xs text-plaster-muted font-sans">
            <a
              href="/calculator"
              className="px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-white font-mono uppercase tracking-wider text-xs transition-all flex items-center gap-1.5"
            >
              <span>Instant Cost Calculator</span>
              <ArrowUpRight size={13} />
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>Sector 19A, Seawoods / Vashi, Navi Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold shrink-0" />
              <a href="tel:+919820000000" className="hover:text-plaster transition-colors">+91 98200 00000</a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-plaster-dim font-mono">
          <p>© {new Date().getFullYear()} ShineX Infra Solutions · All rights reserved. Estimate only · Final quote after site measure.</p>
          <div className="flex items-center gap-4">
            <span>Seawoods · Kharghar · Vashi · Panvel · Mumbai</span>
            <span>Direct Civil Licensure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
