'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Send, Sparkles, Building2, Home } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function QuoteContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get('track') === 'commercial' ? 'commercial' : 'residential';
  const initialService = searchParams.get('service') || 'kitchens';
  const initialSub = searchParams.get('sub') || '';

  const [track, setTrack] = useState<'residential' | 'commercial'>(initialTrack);
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [scope, setScope] = useState<string>('3 BHK');
  const [timeline, setTimeline] = useState<string>('Immediate (within 30 days)');
  const [locality, setLocality] = useState<string>('Seawoods / Navi Mumbai');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  useEffect(() => {
    const s = searchParams.get('service');
    const t = searchParams.get('track');
    if (s) setSelectedService(s);
    if (t === 'commercial' || t === 'residential') setTrack(t);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ink text-plaster flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-24 px-6 md:px-12 flex-1 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors mb-4 font-mono"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-gold font-sans font-semibold block">
            Direct Civil &amp; Interior Estimate
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mt-1 font-bold">
            Get an Exact Project Estimate
          </h1>
          <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal mt-2">
            No middleman brokers. Direct consultation with our senior project engineers in Navi Mumbai.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 md:p-12 rounded-2xl bg-ink-card border border-gold/40 text-center space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-mono block">
                Specification Logged
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-plaster">
                Thank you, {formData.name || 'Valued Client'}.
              </h2>
              <p className="text-xs sm:text-sm text-plaster-muted max-w-md mx-auto font-sans font-light leading-relaxed">
                Your brief for <strong className="text-plaster">{selectedService.replace('-', ' ').toUpperCase()}</strong> ({scope}) in{' '}
                <strong className="text-plaster">{locality}</strong> has been routed directly to our senior site director.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ink border border-ink-border max-w-md mx-auto text-left text-xs space-y-2 text-plaster-muted font-sans">
              <div className="flex justify-between border-b border-ink-border pb-1.5">
                <span className="text-plaster-dim">Track</span>
                <span className="text-gold uppercase font-mono">{track}</span>
              </div>
              <div className="flex justify-between border-b border-ink-border pb-1.5">
                <span className="text-plaster-dim">Timeline</span>
                <span className="text-plaster">{timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-plaster-dim">Guaranteed By</span>
                <span className="text-plaster">Sneha Enterprises Civil Licensure</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="btn-luxury px-8 py-3 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 rounded-2xl bg-ink-card border border-ink-border space-y-8 shadow-xl"
          >
            {/* Step 1: Track Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-gold font-sans font-semibold block">
                1. Select Division Track
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTrack('residential')}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    track === 'residential'
                      ? 'bg-ink border-gold text-gold shadow-md'
                      : 'border-ink-border bg-ink-soft text-plaster-muted hover:border-ink-border/80'
                  }`}
                >
                  <Home size={18} />
                  <div className="text-left font-sans">
                    <span className="text-xs font-medium block">Residential</span>
                    <span className="text-[10px] text-plaster-dim block">Homes, Villas &amp; Penthouses</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTrack('commercial')}
                  className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    track === 'commercial'
                      ? 'bg-ink border-gold text-gold shadow-md'
                      : 'border-ink-border bg-ink-soft text-plaster-muted hover:border-ink-border/80'
                  }`}
                >
                  <Building2 size={18} />
                  <div className="text-left font-sans">
                    <span className="text-xs font-medium block">Commercial &amp; Civil</span>
                    <span className="text-[10px] text-plaster-dim block">Offices, Tenders &amp; Heavy Civil</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Primary Scope */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-gold font-sans font-semibold block">
                2. Project Scale / Configuration
              </label>
              <div className="flex flex-wrap gap-2.5">
                {(track === 'residential'
                  ? ['2 BHK', '3 BHK', '4 BHK', 'Duplex / Villa', 'Kitchen Only', 'Full Turnkey']
                  : ['1,000 - 3,000 sq.ft', '3,000 - 7,000 sq.ft', '10,000+ sq.ft', 'Civil / Tiling Only', 'Govt / L&T Tender', 'Turnkey Fit-Out']
                ).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScope(opt)}
                    className={`px-4 py-2.5 rounded-full text-xs font-sans font-medium tracking-wide border transition-all ${
                      scope === opt
                        ? 'bg-gold text-white border-gold font-semibold shadow-md'
                        : 'border-ink-border bg-ink text-plaster-muted hover:border-gold/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location in Mumbai / Navi Mumbai */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-gold font-sans font-semibold block">
                3. Site Location
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Seawoods / Nerul',
                  'Kharghar',
                  'Vashi / Belapur',
                  'Panvel / Ulwe',
                  'Mumbai Suburbs (Powai/Bandra)',
                  'Other Mumbai Region',
                ].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocality(loc)}
                    className={`px-4 py-2 rounded-full text-xs font-sans font-medium border transition-all ${
                      locality === loc
                        ? 'bg-gold text-white border-gold font-semibold shadow-md'
                        : 'border-ink-border bg-ink text-plaster-muted hover:border-gold/40'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Contact Credentials */}
            <div className="space-y-4 pt-2 border-t border-ink-border/60">
              <label className="text-xs uppercase tracking-wider text-gold font-sans font-semibold block">
                4. Direct Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] text-plaster-muted uppercase font-mono block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="input-luxury w-full px-4 py-3 rounded-lg text-plaster text-xs"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-plaster-muted uppercase font-mono block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 00000"
                    className="input-luxury w-full px-4 py-3 rounded-lg text-plaster text-xs font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] text-plaster-muted uppercase font-mono block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="input-luxury w-full px-4 py-3 rounded-lg text-plaster text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] text-plaster-dim font-mono">
                <ShieldCheck size={14} className="text-gold" />
                <span>Zero Spam · Directly Reviewed by Senior Engineers</span>
              </div>

              <button
                type="submit"
                className="btn-luxury w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md"
              >
                <span>Submit Specification</span>
                <Send size={14} />
              </button>
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ink text-plaster flex items-center justify-center font-sans">Loading funnel...</div>}>
      <QuoteContent />
    </Suspense>
  );
}
