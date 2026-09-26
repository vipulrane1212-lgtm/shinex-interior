'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { formatINRRange } from '@/lib/calculator-rates';
import {
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  Phone,
  User,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';

export default function Step7LeadTrap() {
  const {
    estimate,
    summaryChips,
    projectType,
    bhk,
    carpetArea,
    selectedRoomItems,
    finishTier,
    selectedCivilAddons,
    selectedBundle,
    leadName,
    setLeadName,
    leadPhone,
    setLeadPhone,
    whatsappSame,
    setWhatsappSame,
    leadEmail,
    setLeadEmail,
    leadCity,
    setLeadCity,
    preferredCallTime,
    setPreferredCallTime,
    isSubmitted,
    setIsSubmitted,
    generateWhatsAppUrl,
    resetCalculator,
  } = useCalculator();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const formattedRange = formatINRRange(estimate.min, estimate.max);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Phone validation for India 10-digit number
    const cleanPhone = leadPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number (+91).');
      return;
    }

    if (!leadName.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      project_type: projectType,
      bhk: projectType === 'residential' ? bhk : undefined,
      area_sqft: carpetArea,
      rooms: selectedRoomItems,
      finish: finishTier,
      civil_addons: selectedCivilAddons,
      bundle: selectedBundle,
      estimate_min: estimate.min,
      estimate_max: estimate.max,
      name: leadName.trim(),
      phone: leadPhone.trim(),
      whatsapp_same: whatsappSame,
      email: leadEmail.trim() || undefined,
      city: leadCity || 'Navi Mumbai',
      preferred_call_time: preferredCallTime,
      timestamp: new Date().toISOString(),
    };

    try {
      // Send payload to Next.js API route
      await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.warn('Estimate logging:', err));
    } catch {
      // Local fallback
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {!isSubmitted ? (
        <>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
              Step 7 of 7 · Final Step
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
              Lock Your Indicative Estimate
            </h2>
            <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
              Final quote after free site visit · No obligation. Receive our official itemized PDF breakdown.
            </p>
          </div>

          {/* Running Estimate Showcase Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-ink-card via-ink-card/90 to-gold/10 border border-gold/40 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold block">
                  Calculated Estimate Range
                </span>
                <div className="text-3xl sm:text-4xl font-serif text-plaster font-semibold mt-1">
                  {formattedRange}
                </div>
                <span className="text-[10px] text-plaster-dim block mt-1">
                  Estimate only · Final quote after site measure · ShineX Infra Solutions
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 max-w-sm">
                {summaryChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-ink border border-ink-border text-plaster-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-1.5">
                  <User size={13} className="text-gold" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-xs text-plaster placeholder:text-plaster-dim focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-1.5">
                  <Phone size={13} className="text-gold" />
                  Mobile Number * (+91)
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-ink-border bg-ink-card text-xs text-plaster-dim font-mono">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="98200 00000"
                    className="w-full px-4 py-3 rounded-r-xl bg-ink border border-ink-border text-xs text-plaster placeholder:text-plaster-dim focus:outline-none focus:border-gold transition-colors font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="whatsappSame"
                checked={whatsappSame}
                onChange={(e) => setWhatsappSame(e.target.checked)}
                className="w-4 h-4 accent-gold rounded border-ink-border bg-ink cursor-pointer"
              />
              <label htmlFor="whatsappSame" className="text-xs text-plaster-muted cursor-pointer select-none">
                WhatsApp number is the same as mobile
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-1.5">
                  <Mail size={13} className="text-gold" />
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="rajesh@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-xs text-plaster placeholder:text-plaster-dim focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-1.5">
                  <MapPin size={13} className="text-gold" />
                  Society / Area / City
                </label>
                <input
                  type="text"
                  value={leadCity}
                  onChange={(e) => setLeadCity(e.target.value)}
                  placeholder="Seawoods, Navi Mumbai"
                  className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-xs text-plaster placeholder:text-plaster-dim focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-1.5">
                  <Clock size={13} className="text-gold" />
                  Preferred Call Time
                </label>
                <select
                  value={preferredCallTime}
                  onChange={(e) => setPreferredCallTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-xs text-plaster focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gold text-ink text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(197,168,128,0.3)] disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Generating Specification...' : 'Get Exact Quote & PDF Breakdown'}</span>
                <ArrowRight size={15} />
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Send Estimate on WhatsApp</span>
              </a>
            </div>
          </form>
        </>
      ) : (
        /* ================= THANK YOU STATE ================= */
        <div className="p-8 sm:p-10 rounded-2xl bg-ink-card border border-gold/40 text-center space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
          <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto">
            <CheckCircle2 size={36} />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-mono block font-semibold">
              Specification Confirmed
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-plaster">
              Thank you, {leadName || 'Valued Client'}.
            </h2>
            <p className="text-xs sm:text-sm text-plaster-muted max-w-md mx-auto font-light leading-relaxed">
              Your architectural brief has been securely queued. Our principal site engineer will call you in{' '}
              <strong className="text-plaster">2 business hours</strong> to arrange your laser site measurement.
            </p>
          </div>

          {/* Project Summary Card */}
          <div className="p-5 rounded-xl bg-ink border border-ink-border max-w-md mx-auto text-left text-xs space-y-2.5 text-plaster-muted">
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="text-plaster-dim">Indicative Estimate</span>
              <span className="text-gold font-mono font-semibold text-sm">{formattedRange}</span>
            </div>
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="text-plaster-dim">Legal Contractor</span>
              <span className="text-plaster">ShineX Infra Solutions</span>
            </div>
            <div className="flex justify-between border-b border-ink-border pb-2">
              <span className="text-plaster-dim">Target Location</span>
              <span className="text-plaster">{leadCity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-plaster-dim">Civil Guarantee</span>
              <span className="text-plaster">Sneha Enterprises Licensure</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#25D366] text-ink font-semibold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare size={16} />
              <span>Open Estimate in WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={resetCalculator}
              className="w-full sm:w-auto py-3 px-6 rounded-full bg-ink border border-ink-border text-plaster-muted hover:text-plaster hover:border-gold/40 text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={14} />
              <span>Calculate Another Space</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
