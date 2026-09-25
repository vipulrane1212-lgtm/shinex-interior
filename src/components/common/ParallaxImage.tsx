'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Container classes (e.g. aspect ratio, rounded corners, borders)
  imgClassName?: string; // Additional classes for the inner image
  scaleDown?: boolean; // Whether to subtly scale down from 1.18 to 1.02 during scroll
  parallaxStrength?: number; // Percent translateY displacement (defaults to 22 for -22% -> +22%)
  children?: React.ReactNode; // Overlays, badges, gradients, or corner stamps
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = 'relative aspect-[4/3] w-full overflow-hidden bg-[#F3EFE6]',
  imgClassName = '',
  scaleDown = true,
  parallaxStrength = 22,
  children,
  loading = 'lazy',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track progress as container travels through viewport (from entering bottom to leaving top)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate noticeable translateY from -parallaxStrength% to +parallaxStrength%
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : [`-${parallaxStrength}%`, `${parallaxStrength}%`]
  );

  // Cinematic scale easing from 1.18 to 1.02 during scroll travel
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion || !scaleDown ? [1.06, 1.06] : [1.18, 1.02]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          y,
          scale,
          willChange: 'transform',
        }}
        className="absolute inset-x-0 -top-[24%] w-full h-[148%] pointer-events-none"
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`w-full h-full object-cover object-center ${imgClassName}`}
        />
      </motion.div>

      {/* Overlays, scrims, badges, and slot content */}
      {children && <div className="relative z-10 w-full h-full pointer-events-none">{children}</div>}
    </div>
  );
};
