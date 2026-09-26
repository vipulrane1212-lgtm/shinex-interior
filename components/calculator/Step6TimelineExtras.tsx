'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { Calendar, Building, Globe2, FileText, Check } from 'lucide-react';

export default function Step6TimelineExtras() {
  const {
    timeline,
    setTimeline,
    siteStatus,
    setSiteStatus,
    isNri,
    setIsNri,
    notes,
    setNotes,
  } = useCalculator();

  const timelineOptions = [
    { id: '30-days', label: '30 Days', desc: 'Fast-Track Handover' },
    { id: '45-days', label: '45 Days', desc: 'Standard Guaranteed' },
    { id: '60-days', label: '60 Days', desc: 'Comprehensive Execution' },
    { id: '90-days', label: '90+ Days', desc: 'Planning / Possession Phase' },
  ];

  const siteStatusOptions = [
    { id: 'brand-new', label: 'Brand New Flat / Raw Shell', desc: 'Keys received from builder' },
    { id: 'lived-in', label: 'Lived-In Flat Refresh', desc: 'Currently occupied home' },
    { id: 'bare-shell', label: 'Bare Commercial Shell', desc: 'Commercial warm or bare shell' },
  ];

  return (
    <div className="space-y-7 animate-in fade-in duration-300">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
          Step 6 of 7
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          Timeline & Execution Logistics
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
          Help us schedule material procurement, society permits, and site engineer allocation.
        </p>
      </div>

      {/* Target Handover */}
      <div>
        <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-2.5">
          <Calendar size={14} className="text-gold" />
          1. Required Handover Turnaround
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {timelineOptions.map((opt) => {
            const active = timeline === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTimeline(opt.id)}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  active
                    ? 'bg-gold text-ink border-gold font-bold shadow-md'
                    : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                }`}
              >
                <span className="block text-sm font-mono">{opt.label}</span>
                <span className={`block text-[10px] mt-0.5 ${active ? 'text-ink/80 font-normal' : 'text-plaster-dim'}`}>
                  {opt.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Physical Site Condition */}
      <div>
        <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-2.5">
          <Building size={14} className="text-gold" />
          2. Current Site Physical Status
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {siteStatusOptions.map((opt) => {
            const active = siteStatus === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSiteStatus(opt.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  active
                    ? 'bg-ink-card border-gold ring-1 ring-gold shadow-md'
                    : 'bg-ink border-ink-border hover:border-gold/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-medium text-plaster">{opt.label}</span>
                  {active && <Check size={14} className="text-gold" />}
                </div>
                <p className="text-[11px] text-plaster-dim font-light mt-0.5">{opt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* NRI / Remote Client Briefing */}
      <div className="p-4 rounded-2xl bg-ink-card/70 border border-ink-border flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-ink border border-ink-border flex items-center justify-center text-gold shrink-0">
            <Globe2 size={20} />
          </div>
          <div>
            <span className="text-xs font-serif font-medium text-plaster block">
              NRI or Remote Project Management?
            </span>
            <span className="text-[11px] text-plaster-dim font-light block">
              Live CCTV site access, weekly video walkthroughs & remote digital approvals.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsNri(false)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
              !isNri ? 'bg-gold text-ink border-gold font-bold' : 'bg-ink border-ink-border text-plaster-dim'
            }`}
          >
            No
          </button>
          <button
            type="button"
            onClick={() => setIsNri(true)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
              isNri ? 'bg-gold text-ink border-gold font-bold' : 'bg-ink border-ink-border text-plaster-dim'
            }`}
          >
            Yes (NRI)
          </button>
        </div>
      </div>

      {/* Custom Brief Notes */}
      <div>
        <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5 mb-2">
          <FileText size={14} className="text-gold" />
          3. Specific Layout Requirements / Society Notes (Optional)
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Seawoods Grand Central 14th floor, need kitchen civil shifted before Puja..."
          className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-xs text-plaster placeholder:text-plaster-dim focus:outline-none focus:border-gold transition-colors"
        />
      </div>
    </div>
  );
}
