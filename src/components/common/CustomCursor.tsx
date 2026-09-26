'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices or small screens
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (dotRef.current) dotRef.current.style.opacity = '1';
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        isHovered = Boolean(
          target.closest('button') ||
            target.closest('a') ||
            target.closest('input') ||
            target.closest('select') ||
            target.closest('[role="button"]') ||
            target.closest('.interactive-target')
        );
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (dotRef.current) dotRef.current.style.opacity = '0';
    };

    const render = () => {
      // Smooth interpolation for follower ring
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      const offset = isHovered ? 24 : 16;
      const size = isHovered ? 48 : 32;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - offset}px, ${ringY - offset}px, 0)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.backgroundColor = isHovered
          ? 'rgba(200, 169, 126, 0.12)'
          : 'transparent';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${isHovered ? 0 : 1})`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="fixed top-0 left-0 rounded-full border border-[#C8A97E]/70 pointer-events-none transition-opacity duration-200"
      />
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#181615] pointer-events-none transition-opacity duration-200"
      />
    </div>
  );
};
