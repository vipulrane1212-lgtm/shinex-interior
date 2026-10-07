'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function getInitialVideoSrc() {
  if (typeof window === 'undefined') {
    return '/videos/desktop_scrub.mp4';
  }
  const isGhPages = window.location.pathname.startsWith('/shinex-interior');
  const base = isGhPages ? '/shinex-interior' : '';
  const isMobile = window.innerWidth < 768;
  return `${base}/videos/${isMobile ? 'mobile_scrub.mp4' : 'desktop_scrub.mp4'}`;
}

export default function HeroVideoScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [videoSrc, setVideoSrc] = useState<string>(getInitialVideoSrc);

  // Handle client-side resize between portrait & landscape videos
  useEffect(() => {
    const handleResize = () => {
      const isGhPages = window.location.pathname.startsWith('/shinex-interior');
      const base = isGhPages ? '/shinex-interior' : '';
      const isMobile = window.innerWidth < 768;
      const targetSrc = `${base}/videos/${isMobile ? 'mobile_scrub.mp4' : 'desktop_scrub.mp4'}`;
      setVideoSrc((prev) => (prev !== targetSrc ? targetSrc : prev));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize GSAP ScrollTrigger timeline and direct video scrubbing
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;
    const motto = mottoRef.current;
    if (!video || !container) return;

    // Ensure video source is loaded
    if (video.src !== videoSrc) {
      video.src = videoSrc;
    }
    video.load();

    const setupScrubAnimation = () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }

      const totalDuration =
        video.duration && !isNaN(video.duration) && video.duration > 0
          ? video.duration
          : 6;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Direct seek on scrub update for silky smooth hardware-accelerated playback
            if (video.readyState >= 1) {
              const targetTime = self.progress * totalDuration;
              try {
                video.currentTime = targetTime;
              } catch {
                // Ignore seek abort
              }
            }
          },
        },
      });

      // 1. Single Center Motto: fades out during the first ~25% of scroll
      // Leaving the rest of the transformation as 100% clean free space
      if (motto) {
        tl.to(
          motto,
          {
            opacity: 0,
            y: -35,
            scale: 0.96,
            ease: 'power2.out',
            duration: 0.25,
          },
          0.05
        );
      }

      // Establish timeline scale
      tl.to({}, { duration: 1 }, 0);

      tlRef.current = tl;
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setupScrubAnimation();
    } else {
      video.addEventListener('loadedmetadata', setupScrubAnimation, { once: true });
      video.addEventListener('canplay', setupScrubAnimation, { once: true });
    }

    // Fallback timer to guarantee ScrollTrigger initialization
    const timer = setTimeout(() => {
      if (!tlRef.current) {
        setupScrubAnimation();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('loadedmetadata', setupScrubAnimation);
      video.removeEventListener('canplay', setupScrubAnimation);
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
    };
  }, [videoSrc]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-ink overflow-hidden select-none"
    >
      {/* ─────────────────────────────────────────────────────────────
          100% IMMERSIVE FULL-BLEED VIDEO
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          autoPlay={false}
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover pointer-events-none brightness-[1.02] contrast-[1.02]"
        />

        {/* Filmic ambient gradient for text legibility and rich contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/60 pointer-events-none" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SINGLE CENTER MOTTO (NO CONTAINER, FREE SPACE TYPOGRAPHY)
          Appears on start, smoothly fades away as user scrolls
      ───────────────────────────────────────────────────────────── */}
      <div
        ref={mottoRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Subtle gold eyebrow badge */}
          <div className="inline-block">
            <span className="px-3.5 py-1.5 rounded-full bg-ink/80 backdrop-blur-md border border-gold/40 text-[10px] sm:text-xs uppercase font-mono tracking-[0.25em] text-gold font-semibold shadow-lg">
              ShineX Architectural Interiors
            </span>
          </div>

          {/* Luxury Main Motto Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight font-light leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            From Bare Concrete <br />
            <span className="italic font-normal text-gold-light">to Bespoke Luxury.</span>
          </h1>

          {/* Clean, simple sub-tagline */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-sans font-light max-w-lg mx-auto tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Turnkey homes crafted with architectural precision across Mumbai & Navi Mumbai.
          </p>
        </div>

        {/* Elegant Scroll Hint at Bottom of Motto */}
        <div className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2 pointer-events-none opacity-80">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-plaster-dim uppercase">
            Scroll to transform
          </span>
          <div className="w-5 h-8 rounded-full border border-gold/40 flex items-start justify-center p-1 bg-ink/40 backdrop-blur-sm">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
