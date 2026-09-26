'use client';

import React from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import { Home, Layers, Check, Ruler, Building, Sparkles } from 'lucide-react';

export default function Step2ScopeAndArea() {
  const {
    projectType,
    bhk,
    setBhk,
    residentialScope,
    setResidentialScope,
    carpetArea,
    setCarpetArea,
    skipArea,
    setSkipArea,
    spaceType,
    setSpaceType,
    commercialArea,
    setCommercialArea,
    fitoutType,
    setFitoutType,
    utilityMultiSelect,
    toggleUtilityItem,
  } = useCalculator();

  const bhkOptions = [
    { id: '1-bhk', label: '1 BHK' },
    { id: '2-bhk', label: '2 BHK' },
    { id: '3-bhk', label: '3 BHK' },
    { id: '4-bhk', label: '4 BHK' },
    { id: 'villa', label: 'Villa / Duplex' },
  ];

  const resScopeOptions = [
    { id: 'full-home', label: 'Full Home Turnkey', desc: 'Complete bespoke woodwork, ceilings, modular living & civil' },
    { id: 'selected-rooms', label: 'Selected Rooms Only', desc: 'Customize specific areas (e.g. Master Bedroom & Living only)' },
    { id: 'kitchen-only', label: 'Kitchen Only', desc: 'Dedicated modular chef kitchen with appliances & quartz' },
    { id: 'renovation', label: 'Lived-In Renovation', desc: 'Modernizing existing occupied home with civil refresh' },
  ];

  const commSpaceOptions = [
    { id: 'office', label: 'Corporate Office' },
    { id: 'retail', label: 'Shop / Showroom' },
    { id: 'clinic', label: 'Clinic / Dental' },
    { id: 'salon', label: 'Salon / Spa' },
    { id: 'cafe', label: 'Café / Small F&B' },
    { id: 'coaching', label: 'Coaching / Institute' },
  ];

  const commFitoutOptions = [
    { id: 'soft-fitout', label: 'Soft Fit-Out', desc: 'Furniture, paint, ceiling, branding lights' },
    { id: 'hard-fitout', label: 'Hard Fit-Out', desc: 'Partitions, full civil build, MEP conduits & masonry' },
    { id: 'design-only', label: 'Design & CAD Only', desc: '1:1 3D renders, working drawings & BOQ tender' },
  ];

  const utilityServices = [
    { id: 'civil_waterproofing', label: 'Bathroom & Balcony Waterproofing' },
    { id: 'civil_plumbing', label: 'Plumbing Line Shifts & CPVC Concealment' },
    { id: 'civil_electrical', label: 'Heavy Electrical Load & DB Conduiting' },
    { id: 'civil_gas_exhaust', label: 'Gas Pipeline Shift & Core-Cut Exhaust' },
    { id: 'civil_flooring', label: 'Vitrified Tile / Italian Marble Floor Relay' },
    { id: 'civil_painting', label: 'Royale Luxury Paint & Anti-Damp Primer' },
    { id: 'civil_leak_repair', label: 'Shaft Leak Inspection & Polymer Grouting' },
    { id: 'civil_society_coord', label: 'Society Debris & Work Permission Liaison' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
          Step 2 of 7
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          {projectType === 'residential' && 'Home Configuration & Floorplate Area'}
          {projectType === 'commercial' && 'Commercial Space & Fit-Out Tier'}
          {projectType === 'utility' && 'Select Utility & Civil Services'}
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
          {projectType === 'residential' && 'Specify your BHK tier and carpet area for calibrated volumetric costing.'}
          {projectType === 'commercial' && 'Define commercial type, usable square footage, and turnkey execution level.'}
          {projectType === 'utility' && 'Pick all civil items requiring Sneha Enterprises licensed execution.'}
        </p>
      </div>

      {/* ================= RESIDENTIAL SCOPE ================= */}
      {projectType === 'residential' && (
        <div className="space-y-6">
          {/* BHK selector chips */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block mb-2.5">
              1. Home Typology (BHK)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {bhkOptions.map((opt) => {
                const active = bhk === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBhk(opt.id)}
                    className={`py-3 px-4 rounded-xl border text-center text-xs font-mono font-semibold transition-all ${
                      active
                        ? 'bg-gold text-ink border-gold shadow-[0_0_15px_rgba(197,168,128,0.3)]'
                        : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/40 hover:text-plaster'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scope cards */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block mb-2.5">
              2. Scope of Execution
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resScopeOptions.map((opt) => {
                const active = residentialScope === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setResidentialScope(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      active
                        ? 'bg-ink-card border-gold ring-1 ring-gold shadow-md'
                        : 'bg-ink border-ink-border hover:border-gold/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif font-medium text-plaster">{opt.label}</span>
                      {active && <Check size={16} className="text-gold" />}
                    </div>
                    <p className="text-xs text-plaster-dim font-light mt-1">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Carpet Area */}
          <div className="p-5 rounded-2xl bg-ink-card/70 border border-ink-border space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center gap-1.5">
                <Ruler size={14} className="text-gold" />
                3. Approximate Carpet Area (Optional)
              </label>
              <button
                type="button"
                onClick={() => setSkipArea(!skipArea)}
                className="text-[11px] font-mono text-gold hover:underline"
              >
                {skipArea ? 'Specify Area' : 'Skip area — talk to us'}
              </button>
            </div>

            {!skipArea ? (
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={350}
                  max={4500}
                  step={50}
                  value={carpetArea || 950}
                  onChange={(e) => setCarpetArea(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 bg-ink rounded-lg cursor-pointer"
                />
                <div className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-ink border border-gold/40 text-sm font-mono text-gold">
                  <span>{carpetArea || 950}</span>
                  <span className="text-[10px] text-plaster-dim">sq.ft</span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-plaster-dim italic">
                Area skipped. We will calculate volume during your free site measure.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ================= COMMERCIAL SCOPE ================= */}
      {projectType === 'commercial' && (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block mb-2.5">
              1. Space Classification
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {commSpaceOptions.map((opt) => {
                const active = spaceType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSpaceType(opt.id)}
                    className={`py-3 px-4 rounded-xl border text-center text-xs font-mono font-medium transition-all ${
                      active
                        ? 'bg-gold text-ink border-gold font-bold shadow-md'
                        : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-ink-card/70 border border-ink-border space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted flex items-center justify-between">
              <span>2. Commercial Usable Area (Sq.Ft) *</span>
              <span className="text-gold font-mono">{commercialArea} sq.ft</span>
            </label>
            <input
              type="range"
              min={300}
              max={15000}
              step={100}
              value={commercialArea}
              onChange={(e) => setCommercialArea(Number(e.target.value))}
              className="w-full accent-gold h-1.5 bg-ink rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block mb-2.5">
              3. Fit-Out Turnkey Model
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {commFitoutOptions.map((opt) => {
                const active = fitoutType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFitoutType(opt.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      active
                        ? 'bg-ink-card border-gold ring-1 ring-gold shadow-md'
                        : 'bg-ink border-ink-border hover:border-gold/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif font-medium text-plaster">{opt.label}</span>
                      {active && <Check size={16} className="text-gold" />}
                    </div>
                    <p className="text-xs text-plaster-dim font-light mt-1">{opt.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= UTILITY ONLY ================= */}
      {projectType === 'utility' && (
        <div className="space-y-4">
          <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block">
            Select All Required Civil Trades (Multi-Select)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {utilityServices.map((srv) => {
              const active = utilityMultiSelect.includes(srv.id);
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => toggleUtilityItem(srv.id)}
                  className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                    active
                      ? 'bg-ink-card border-gold shadow-md text-plaster'
                      : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                  }`}
                >
                  <span className="text-xs font-medium">{srv.label}</span>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center border shrink-0 ml-2 ${
                      active ? 'bg-gold border-gold text-ink' : 'border-ink-border bg-ink'
                    }`}
                  >
                    {active && <Check size={13} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
