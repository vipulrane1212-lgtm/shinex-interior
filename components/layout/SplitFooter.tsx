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
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
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
          <div className="relative z-10 space-y-6 mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-plaster tracking-tight font-normal leading-[1.08]">
              Claim Your Free Quote &amp; <br />
              <span className="text-gold font-light italic">Get 15% Off</span> <br />
              Your First Project.
            </h2>

            {/* Guaranteed Perks List */}
            <div className="space-y-2.5 pt-2 max-w-md">
              {[
                'Transparent itemized BOQ with zero hidden surcharges',
                'Free on-site laser measurement & 3D CAD schematic',
                'Direct Sneha Enterprises civil contracting & 10-year moisture seal',
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2.5 text-xs text-plaster-muted font-light">
                  <CheckCircle2 size={14} className="text-gold shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-gold font-mono">
              <ShieldCheck size={14} />
              <span>16 Years Direct Civil Execution in Navi Mumbai & Mumbai</span>
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
                  <p className="text-xs text-plaster-muted font-light leading-relaxed">
                    Our senior architect will review your <strong className="text-plaster">{formData.serviceType}</strong> requirements
                    and reach out directly on <strong className="text-gold font-mono">{formData.phone}</strong> with your 15% discount voucher.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-ink border border-ink-border hover:border-gold text-plaster text-xs uppercase tracking-wider transition-colors"
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
                  <p className="text-xs text-plaster-muted font-light">
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
                      className="w-full px-4 py-3.5 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
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
                      className="w-full px-4 py-3.5 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
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
                      className="w-full px-4 py-3.5 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
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
                          className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                            formData.serviceType === item
                              ? 'bg-gold text-ink border-gold font-semibold shadow-md'
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
                    className="w-full py-4 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest hover:bg-gold-light hover:shadow-[0_0_35px_rgba(197,168,128,0.45)] transition-all flex items-center justify-center gap-2"
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
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-medium">
                Infra Interior
              </span>
            </div>
            <p className="text-xs text-plaster-muted font-light max-w-md">
              Legal entity: <strong className="text-plaster">Sneha Enterprises</strong>. Registered civil, interior, and MEP turnkey contracting studio operating across Navi Mumbai and Mumbai.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-6 text-xs text-plaster-muted">
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
          <p>© {new Date().getFullYear()} ShineX Infra Interior · Sneha Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Seawoods · Kharghar · Vashi · Panvel · Mumbai</span>
            <span>Direct Civil Licensure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
