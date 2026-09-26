'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Do NOT hijack touch devices - iOS & Android have native 120Hz momentum scroll
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
    if (isTouch) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    const lenis = new Lenis({
      lerp: 0.16, // Snappy, responsive momentum without floaty lag
      smoothWheel: true,
      wheelMultiplier: 1.0,
      syncTouch: false,
    });

    (window as unknown as { lenis: Lenis }).lenis = lenis;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      delete (window as unknown as { lenis?: Lenis }).lenis;
      lenis.destroy();
    };
  }, []);
}
