'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useQuiz } from '@/context/QuizContext';
import {
  QUIZ_PROPERTY_TYPES,
  QUIZ_SCOPE_OPTIONS,
  QUIZ_STYLE_VIBES,
  QuizOption,
} from '@/lib/assets';
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Lock,
  MessageSquare,
} from 'lucide-react';
import gsap from 'gsap';

export default function QuotationTrapModal() {
  const { isQuizOpen, closeQuiz, initialService } = useQuiz();

  const [step, setStep] = useState<number>(1);
  const [selectedProperty, setSelectedProperty] = useState<string>('apartment');
  const [selectedScope, setSelectedScope] = useState<string>(initialService || 'full-interior');
  const [selectedStyle, setSelectedStyle] = useState<string>('ultra-luxury');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('immediate');

  // Step 5 calculation states
  const [isCalculating, setIsCalculating] = useState<boolean>(true);
  const [calcProgress, setCalcProgress] = useState<number>(0);
  const [calcStatus, setCalcStatus] = useState<string>('Analyzing architectural floorplate...');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [voucherCode, setVoucherCode] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const calcRadarRef = useRef<HTMLDivElement>(null);
  const calcTextRef = useRef<HTMLParagraphElement>(null);

  // Reset or initialize when modal opens
  useEffect(() => {
    if (isQuizOpen) {
      setStep(1);
      setIsCalculating(true);
      setCalcProgress(0);
      setIsSubmitted(false);
      if (initialService) {
        setSelectedScope(initialService);
      }
    }
  }, [isQuizOpen, initialService]);

  // Step 5 GSAP 2-Second Calculation Pulse
  useEffect(() => {
    if (step === 5 && !isSubmitted) {
      setIsCalculating(true);
      setCalcProgress(0);

      // GSAP counter animation
      const obj = { val: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          setIsCalculating(false);
        },
      });

      tl.to(obj, {
        val: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          const currentVal = Math.round(obj.val);
          setCalcProgress(currentVal);
          if (currentVal < 35) {
            setCalcStatus('Analyzing structural layout & spatial volume...');
          } else if (currentVal < 70) {
            setCalcStatus('Matching Navi Mumbai Sneha civil index...');
          } else {
            setCalcStatus('Calculating 15% seasonal voucher discount...');
          }
        },
      });

      if (calcRadarRef.current) {
        gsap.to(calcRadarRef.current, {
          rotate: 360,
          repeat: -1,
          duration: 1.5,
          ease: 'linear',
        });
      }

      return () => {
        tl.kill();
      };
    }
  }, [step, isSubmitted]);

  if (!isQuizOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'SHINEX15-' + Math.floor(1000 + Math.random() * 9000);
    setVoucherCode(code);
    setIsSubmitted(true);
  };

  const progressPercentage = (step / 5) * 100;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-4xl bg-ink-card border border-ink-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Progress Bar */}
        <div className="w-full bg-ink border-b border-ink-border/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step > 1 && !isSubmitted && (
              <button
                type="button"
                onClick={handleBack}
                className="p-1.5 rounded-full hover:bg-ink-border text-plaster-muted hover:text-plaster transition-colors"
                aria-label="Previous step"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-semibold">
                Quotation Specification Funnel
              </span>
              <span className="text-xs text-plaster font-medium">
                Step 0{step} of 05
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Visual Gold Progress Bar */}
            <div className="hidden sm:block w-36 h-2 rounded-full bg-ink-border overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            <button
              type="button"
              onClick={closeQuiz}
              className="p-2 rounded-full hover:bg-ink-border text-plaster-muted hover:text-gold transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1">
          {/* ─────────────────────────────────────────────────────────────
              STEP 1: PROPERTY TYPE
          ───────────────────────────────────────────────────────────── */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold font-mono">
                  Phase 1 · Asset Archetype
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                  What kind of property are we shaping?
                </h3>
                <p className="text-xs text-plaster-muted font-light">
                  Select your floorplate to calibrate structural and modular parameters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {QUIZ_PROPERTY_TYPES.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedProperty(opt.id);
                      setStep(2);
                    }}
                    className={`group relative aspect-[4/5] rounded-xl overflow-hidden border text-left p-4 flex flex-col justify-between transition-all duration-300 ${
                      selectedProperty === opt.id
                        ? 'border-gold ring-2 ring-gold/40 shadow-[0_0_25px_rgba(197,168,128,0.25)]'
                        : 'border-ink-border hover:border-gold/60'
                    }`}
                  >
                    <Image
                      src={opt.image}
                      alt={opt.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                    <div className="relative z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-ink/80 border border-ink-border text-[9px] uppercase font-mono text-gold">
                        {opt.tag}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h4 className="text-sm font-semibold text-plaster group-hover:text-gold-light transition-colors leading-tight">
                        {opt.title}
                      </h4>
                      <p className="text-[10px] text-plaster-muted font-light leading-tight">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 2: SCOPE OF WORK
          ───────────────────────────────────────────────────────────── */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold font-mono">
                  Phase 2 · Execution Breadth
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                  What is the primary scope required?
                </h3>
                <p className="text-xs text-plaster-muted font-light">
                  From single-room modular mastery to full-floor civil transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {QUIZ_SCOPE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedScope(opt.id);
                      setStep(3);
                    }}
                    className={`group relative aspect-[4/5] rounded-xl overflow-hidden border text-left p-4 flex flex-col justify-between transition-all duration-300 ${
                      selectedScope === opt.id
                        ? 'border-gold ring-2 ring-gold/40 shadow-[0_0_25px_rgba(197,168,128,0.25)]'
                        : 'border-ink-border hover:border-gold/60'
                    }`}
                  >
                    <Image
                      src={opt.image}
                      alt={opt.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                    <div className="relative z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-ink/80 border border-ink-border text-[9px] uppercase font-mono text-gold">
                        {opt.tag}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h4 className="text-sm font-semibold text-plaster group-hover:text-gold-light transition-colors leading-tight">
                        {opt.title}
                      </h4>
                      <p className="text-[10px] text-plaster-muted font-light leading-tight">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 3: STYLE VIBE (3-4 Premium Reference Photos)
          ───────────────────────────────────────────────────────────── */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold font-mono">
                  Phase 3 · Material Palette
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                  Choose your architectural aesthetic.
                </h3>
                <p className="text-xs text-plaster-muted font-light">
                  Select the visual finish that matches your lifestyle or corporate brand.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {QUIZ_STYLE_VIBES.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setSelectedStyle(opt.id);
                      setStep(4);
                    }}
                    className={`group relative aspect-[4/5] rounded-xl overflow-hidden border text-left p-4 flex flex-col justify-between transition-all duration-300 ${
                      selectedStyle === opt.id
                        ? 'border-gold ring-2 ring-gold/40 shadow-[0_0_25px_rgba(197,168,128,0.25)]'
                        : 'border-ink-border hover:border-gold/60'
                    }`}
                  >
                    <Image
                      src={opt.image}
                      alt={opt.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                    <div className="relative z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-ink/80 border border-ink-border text-[9px] uppercase font-mono text-gold">
                        {opt.tag}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h4 className="text-sm font-semibold text-plaster group-hover:text-gold-light transition-colors leading-tight">
                        {opt.title}
                      </h4>
                      <p className="text-[10px] text-plaster-muted font-light leading-tight">
                        {opt.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 4: TIMELINE (Immediate, 1-3 Months, Planning)
          ───────────────────────────────────────────────────────────── */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs uppercase tracking-widest text-gold font-mono">
                  Phase 4 · Mobilization Horizon
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                  When do you plan to break ground?
                </h3>
                <p className="text-xs text-plaster-muted font-light">
                  Helps our senior site director allocate direct carpentry and civil crews.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
                {[
                  {
                    id: 'immediate',
                    title: 'Immediate Execution',
                    sub: 'Within next 30 days',
                    badge: 'Direct Site Audit',
                  },
                  {
                    id: '1-3-months',
                    title: '1 — 3 Months',
                    sub: 'Possession pending soon',
                    badge: 'Early 3D CAD Locking',
                  },
                  {
                    id: 'planning',
                    title: 'Planning Phase',
                    sub: '3 — 6 months horizon',
                    badge: 'Budget & BOQ Pre-Lock',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedTimeline(item.id);
                      setStep(5);
                    }}
                    className={`p-6 rounded-2xl border text-center flex flex-col justify-between items-center gap-4 transition-all duration-300 ${
                      selectedTimeline === item.id
                        ? 'bg-ink border-gold ring-2 ring-gold/40 shadow-xl'
                        : 'bg-ink-soft border-ink-border hover:border-gold/50'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-plaster block">
                        {item.title}
                      </span>
                      <span className="text-xs text-plaster-muted font-light block mt-1">
                        {item.sub}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-ink border border-ink-border text-[10px] text-gold font-mono">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              STEP 5: THE TRAP (GSAP Calculation Animation ➔ Final Unlock Form)
          ───────────────────────────────────────────────────────────── */}
          {step === 5 && (
            <div className="py-4 animate-in fade-in duration-300">
              {isCalculating ? (
                /* 2-Second GSAP Calculation State */
                <div className="flex flex-col items-center justify-center py-12 space-y-6 text-center">
                  <div
                    ref={calcRadarRef}
                    className="relative w-24 h-24 rounded-full border-2 border-dashed border-gold flex items-center justify-center shadow-[0_0_40px_rgba(197,168,128,0.3)]"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/50 flex items-center justify-center text-gold font-mono font-bold text-sm">
                      {calcProgress}%
                    </div>
                  </div>

                  <div className="space-y-2 max-w-md">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-mono font-semibold block animate-pulse">
                      Calculating Custom Quote...
                    </span>
                    <p
                      ref={calcTextRef}
                      className="text-sm text-plaster font-light min-h-[24px]"
                    >
                      {calcStatus}
                    </p>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="w-64 h-1.5 rounded-full bg-ink-border overflow-hidden">
                    <div
                      className="h-full bg-gold transition-all duration-100 ease-out"
                      style={{ width: `${calcProgress}%` }}
                    />
                  </div>
                </div>
              ) : isSubmitted ? (
                /* Success State */
                <div className="text-center space-y-6 py-6 max-w-lg mx-auto">
                  <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold mx-auto">
                    <CheckCircle2 size={32} />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs uppercase tracking-widest text-gold font-mono">
                      Estimate Unlocked & Voucher Applied
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                      Voucher Code: <span className="text-gold font-mono">{voucherCode}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed">
                      Thank you, <strong className="text-plaster">{formData.name}</strong>. Your itemized BOQ estimate with a{' '}
                      <strong className="text-gold">15% modular voucher</strong> has been queued for WhatsApp delivery to{' '}
                      <strong className="text-plaster">{formData.phone}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-ink border border-ink-border text-left text-xs space-y-2 text-plaster-muted font-light">
                    <div className="flex justify-between border-b border-ink-border/80 pb-1.5">
                      <span>Property Archetype</span>
                      <span className="text-plaster font-medium uppercase font-mono">{selectedProperty}</span>
                    </div>
                    <div className="flex justify-between border-b border-ink-border/80 pb-1.5">
                      <span>Scope of Work</span>
                      <span className="text-plaster font-medium uppercase font-mono">{selectedScope}</span>
                    </div>
                    <div className="flex justify-between border-b border-ink-border/80 pb-1.5">
                      <span>Aesthetic Style</span>
                      <span className="text-plaster font-medium uppercase font-mono">{selectedStyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Direct Civil Backing</span>
                      <span className="text-gold font-medium">Sneha Enterprises Licensure</span>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919820000000?text=${encodeURIComponent(
                        `Hi ShineX, I just unlocked voucher ${voucherCode} for my ${selectedProperty} (${selectedScope}). Please send the estimate breakdown.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      <MessageSquare size={15} />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                    <button
                      type="button"
                      onClick={closeQuiz}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-ink border border-ink-border hover:border-gold text-plaster text-xs font-medium uppercase tracking-wider transition-colors"
                    >
                      Done & Return
                    </button>
                  </div>
                </div>
              ) : (
                /* The Final Unlock Form */
                <form
                  onSubmit={handleFormSubmit}
                  className="max-w-xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-400"
                >
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-[11px] font-mono uppercase">
                      <Lock size={12} />
                      <span>Estimate Generated · 15% Seasonal Discount Applied</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-plaster">
                      Unlock Your Custom 15% Off Estimate.
                    </h3>
                    <p className="text-xs text-plaster-muted font-light">
                      Enter your contact credentials below to receive your itemized BOQ breakdown and lock your 15% discount.
                    </p>
                  </div>

                  {/* Form Inputs */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-plaster-muted font-mono block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-ink border border-ink-border text-plaster text-xs focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest hover:bg-gold-light hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Unlock Estimate & Claim 15% Voucher</span>
                      <ArrowRight size={15} />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-plaster-dim font-mono">
                      <ShieldCheck size={12} className="text-gold" />
                      <span>Zero Spam · Backed by Sneha Enterprises Civil Licensure</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
