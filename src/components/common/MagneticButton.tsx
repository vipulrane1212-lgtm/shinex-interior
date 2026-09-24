'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '@/hooks/useMagnetic';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic(0.3);

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase font-medium',
    md: 'px-6 py-3.5 text-sm tracking-wider uppercase font-semibold',
    lg: 'px-8 py-4 text-base tracking-wider uppercase font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] shadow-soft-luxury hover:shadow-luxury-hover border border-[#E5D2BA]/60',
    secondary:
      'bg-[#FFFFFF] hover:bg-[#F3EFE6] text-[#181615] border border-[#DDD5C7] shadow-soft-luxury',
    outline:
      'bg-transparent hover:bg-[#F7F1E6] text-[#181615] border border-[#C8A97E] hover:border-[#B69566]',
    ghost:
      'bg-transparent hover:bg-[#EDE7DC]/50 text-[#5E5952] hover:text-[#181615]',
    luxury:
      'bg-[#181615] text-[#FBF9F5] hover:bg-[#252220] border border-[#C8A97E]/40 shadow-soft-luxury',
  }[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 180, mass: 0.1 }}
      className="inline-block"
    >
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        className={`relative inline-flex items-center justify-center gap-2.5 rounded-full transition-all duration-300 ease-out cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`}
      >
        {children}
      </button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
