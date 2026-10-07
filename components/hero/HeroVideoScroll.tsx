'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowDown, ArrowUpRight, ShieldCheck, Ruler, CheckCircle2 } from 'lucide-react';
import { useQuiz } from '@/context/QuizContext';

interface Milestone {
  range: [number, number]; // [start progress, end progress]
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  specs: string[];
}

const MILESTONES: Milestone[] = [
  {
    range: [0.0, 0.22],
    step: 'Phase 01',
    badge: 'Raw Structure',
    title: 'Raw Civil Space',
    subtitle: 'Class-1 licensed civil site audit & laser mapping across Mumbai & Navi Mumbai.',
    specs: ['Laser 3D Room Scan', 'Class-1 Licensed Civil Works', '100% Fixed BOQ Guarantee'],
  },
  {
    range: [0.25, 0.5],
    step: 'Phase 02',
    badge: 'Precision Joinery',
    title: 'Woodwork & Fluted Walls',
    subtitle: 'Factory-pressed marine plywood panels and acoustic fluted oak wall systems.',
    specs: ['IS:710 Marine-Grade Plywood', 'Anti-Borer & Termite Proof', 'German PUR Seamless Edging'],
  },
  {
    range: [0.53, 0.78],
    step: 'Phase 03',
    badge: 'Modular Fitment',
    title: 'Custom Modular Interiors',
    subtitle: 'Integrated built-in consoles, floating display shelves, and concealed lighting channels.',
    specs: ['German Soft-Close Hardware', 'Concealed LED Warm Ambience', 'Ergonomic Workflows'],
  },
  {
    range: [0.82, 1.0],
    step: 'Phase 04',
    badge: 'Turnkey Handover',
    title: 'Complete Luxury Home',
    subtitle: 'Travertine finishes, organic statement centerpieces, and clean handover with warranty.',
    specs: ['10-Year Comprehensive Warranty', 'Deep Clean & White-Glove Handover', '45-Day Guaranteed Timeline'],
  },
];

export default function HeroVideoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { openQuiz } = useQuiz();

  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Viewport detection
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let triggerInstance: ScrollTrigger | undefined;

    const setupTrigger = () => {
      if (triggerInstance) triggerInstance.kill();

      const duration = video.duration && !isNaN(video.duration) && video.duration > 0 ? video.duration : 6;
      setIsVideoReady(true);

      triggerInstance = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=350%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }

          // Compute active milestone
          let foundIndex = 0;
          for (let i = 0; i < MILESTONES.length; i++) {
            const [min, max] = MILESTONES[i].range;
            if (progress >= min && progress <= max) {
              foundIndex = i;
              break;
            } else if (progress > max) {
              foundIndex = i;
            }
          }
          setActiveMilestoneIndex(foundIndex);

          // Seek video smoothly
          if (video && !isNaN(duration)) {
            const targetTime = progress * duration;
            // Always set currentTime if valid
            try {
              video.currentTime = targetTime;
            } catch {
              // Ignore seek abort
            }
          }
        },
      });

      // Force recalculation
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setupTrigger();
    } else {
      video.addEventListener('loadedmetadata', setupTrigger, { once: true });
      video.addEventListener('canplay', setupTrigger, { once: true });
    }

    // Safety fallback: if metadata takes time, initialize with 6s after 400ms
    const timer = setTimeout(() => {
      if (!triggerInstance) {
        setupTrigger();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('loadedmetadata', setupTrigger);
      video.removeEventListener('canplay', setupTrigger);
      if (triggerInstance) triggerInstance.kill();
    };
  }, [isMobile]);

  const activeMilestone = MILESTONES[activeMilestoneIndex] || MILESTONES[0];

  const handleScrollDown = () => {
    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-ink overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          SCRUBBABLE VIDEO ELEMENT (DUAL DESKTOP / MOBILE TRACK)
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          key={isMobile ? 'mobile-video' : 'desktop-video'}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || (typeof window !== 'undefined' && window.location.pathname.startsWith('/shinex-interior') ? '/shinex-interior' : '')}/videos/${isMobile ? 'mobile_scrub.mp4' : 'desktop_scrub.mp4'}`}
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover pointer-events-none brightness-[1.03] contrast-[1.02]"
        />

        {/* Soft luxury vignette & dark gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/40 pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TOP BRAND HUD & TIMELINE STEPPER
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute top-20 sm:top-24 left-0 right-0 z-20 px-6 sm:px-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-ink/80 backdrop-blur-md border border-gold/40 text-[10px] sm:text-xs uppercase font-mono tracking-widest text-gold font-semibold shadow-md">
            Interactive Transformation
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-plaster-muted font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Scroll to see construction
          </span>
        </div>

        {/* 4-Step Milestone Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {MILESTONES.map((m, idx) => {
            const isActive = activeMilestoneIndex === idx;
            const isCompleted = activeMilestoneIndex > idx;
            return (
              <div
                key={m.step}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-8 sm:w-10 bg-gold shadow-[0_0_12px_rgba(158,120,62,0.8)]'
                    : isCompleted
                    ? 'w-3 sm:w-4 bg-gold/50'
                    : 'w-2 sm:w-3 bg-ink-border/80'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM CONTENT CARD: REVEALED AS USER SCRUBS
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={overlayRef}
        className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 px-6 sm:px-12 flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-none"
      >
        {/* Left Side: Current Construction Milestone Details */}
        <div className="max-w-xl w-full pointer-events-auto">
          <div className="p-5 sm:p-7 rounded-2xl bg-ink-card/90 backdrop-blur-xl border border-gold/30 shadow-2xl space-y-3.5 transition-all duration-500 hover:border-gold/60">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-gold font-mono text-xs font-semibold uppercase tracking-widest">
                <Sparkles size={14} />
                <span>{activeMilestone.step}</span>
                <span className="text-plaster-dim">·</span>
                <span>{activeMilestone.badge}</span>
              </div>
              <span className="text-xs font-mono text-gold/80 px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20">
                {Math.round(scrollProgress * 100)}% Complete
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-plaster tracking-tight font-bold">
                {activeMilestone.title}
              </h2>
              <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal mt-1 leading-relaxed">
                {activeMilestone.subtitle}
              </p>
            </div>

            {/* Spec Chips */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-ink-border/70">
              {activeMilestone.specs.map((spec) => (
                <div
                  key={spec}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-ink/70 border border-ink-border text-[11px] text-plaster font-sans"
                >
                  <CheckCircle2 size={12} className="text-gold shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Primary CTA & Skip Button */}
        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto justify-between md:justify-end pointer-events-auto">
          <button
            onClick={() => openQuiz('turnkey')}
            className="px-6 sm:px-8 py-3.5 rounded-full bg-gold text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 flex items-center gap-2 group whitespace-nowrap"
          >
            <span>Get Free Estimate</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={handleScrollDown}
            className="px-4 py-2.5 rounded-full bg-ink/80 backdrop-blur-md border border-ink-border text-plaster-muted hover:text-gold hover:border-gold/40 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5"
          >
            <span>Explore Services</span>
            <ArrowDown size={13} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM SCRUB PROGRESS BAR
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-ink-border z-30 pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gold shadow-[0_0_10px_#9E783E] transition-all duration-75"
          style={{ width: '0%' }}
        />
      </div>
    </section>
  );
}
