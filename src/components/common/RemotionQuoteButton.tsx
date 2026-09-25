'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface RemotionQuoteButtonProps {
  children?: React.ReactNode;
  subtitle?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'champagne' | 'dark' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showSparkle?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const RemotionQuoteButton: React.FC<RemotionQuoteButtonProps> = ({
  children = 'Get Instant Estimate',
  subtitle,
  onClick,
  href,
  className = '',
  variant = 'champagne',
  size = 'md',
  icon,
  showSparkle = true,
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Micro magnetic spring deflection
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Limit displacement to max 4px for subtle luxury feel
    const deltaX = (e.clientX - centerX) * 0.12;
    const deltaY = (e.clientY - centerY) * 0.12;
    mouseX.set(Math.min(Math.max(deltaX, -4), 4));
    mouseY.set(Math.min(Math.max(deltaY, -4), 4));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Size styling
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3.5 text-sm gap-2.5',
    lg: 'px-8 py-4.5 text-base gap-3',
  }[size];

  // Base background & text styling based on variant
  const variantStyles = {
    champagne: {
      bg: 'bg-gradient-to-r from-[#C8A97E] via-[#DFBA73] to-[#B69566] text-[#181615]',
      border: 'border-[#E5D2BA]/60',
      glow: 'shadow-[0_8px_25px_rgba(200,169,126,0.35)]',
      text: 'font-semibold tracking-wide text-[#181615]',
      shimmer: 'from-transparent via-white/40 to-transparent',
    },
    dark: {
      bg: 'bg-[#181615] text-[#FBF9F5]',
      border: 'border-[#C8A97E]/40',
      glow: 'shadow-[0_10px_30px_rgba(24,22,21,0.25)]',
      text: 'font-medium tracking-wide text-[#FBF9F5]',
      shimmer: 'from-transparent via-[#C8A97E]/30 to-transparent',
    },
    glass: {
      bg: 'bg-white/90 backdrop-blur-md text-[#181615]',
      border: 'border-[#DDD5C7]',
      glow: 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]',
      text: 'font-semibold tracking-wide text-[#181615]',
      shimmer: 'from-transparent via-[#C8A97E]/25 to-transparent',
    },
  }[variant];

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: shouldReduceMotion ? 0 : springX,
        y: shouldReduceMotion ? 0 : springY,
      }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.965 }}
      className={`relative inline-flex items-center justify-center rounded-xl p-[1.5px] overflow-hidden group select-none transition-shadow duration-300 ${
        variant === 'champagne' ? 'remotion-pulse-glow' : ''
      } ${className}`}
    >
      {/* 1. Kinetic Conic Border Beam (Remotion Laser Rotation) */}
      <div className="absolute inset-[-100%] pointer-events-none remotion-conic-border opacity-70 group-hover:opacity-100 transition-opacity">
        <div
          className="w-full h-full"
          style={{
            background:
              variant === 'champagne'
                ? 'conic-gradient(from 0deg, transparent 0 340deg, #FFFFFF 350deg, #FFE8B8 360deg)'
                : 'conic-gradient(from 0deg, transparent 0 340deg, #C8A97E 350deg, #F3EFE6 360deg)',
          }}
        />
      </div>

      {/* 2. Button Core Body */}
      <div
        className={`relative z-10 w-full h-full rounded-[10px] flex items-center justify-center overflow-hidden border ${variantStyles.border} ${variantStyles.bg} ${variantStyles.glow} ${sizeClasses}`}
      >
        {/* 3. Sweeping Luminous Light Glint (Remotion Shimmer Reflex) */}
        <div
          className={`absolute inset-0 pointer-events-none w-1/2 h-full bg-gradient-to-r ${variantStyles.shimmer} remotion-shimmer-sweep`}
        />

        {/* 4. Ambient Radial Glow on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              variant === 'dark'
                ? 'radial-gradient(circle at center, rgba(200, 169, 126, 0.18) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          }}
        />

        {/* 5. Content Layout */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          {showSparkle && (
            <Sparkles
              className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${
                variant === 'dark' ? 'text-[#C8A97E]' : 'text-[#181615]'
              }`}
            />
          )}

          <div className="flex flex-col text-left">
            <span className={`${variantStyles.text} uppercase tracking-wider text-xs sm:text-sm font-sans flex items-center gap-1.5`}>
              {children}
              {icon || (
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </span>
            {subtitle && (
              <span className="text-[10px] tracking-normal font-normal opacity-75 leading-tight">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block bg-transparent border-0 p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] rounded-xl"
    >
      {content}
    </button>
  );
};
