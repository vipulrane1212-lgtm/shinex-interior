'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { ASSET_LIBRARY } from '@/lib/mockData';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = ASSET_LIBRARY.beforeConstructionLocal || ASSET_LIBRARY.beforeConstruction,
  afterImage = ASSET_LIBRARY.afterFinishedAi || ASSET_LIBRARY.afterFinished,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(52); // Percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !e.touches || e.touches.length === 0) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(95, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(5);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(95);
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Interactive Before and After Turnkey Interior Comparison Slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={5}
      aria-valuemax={95}
      aria-valuetext={`${Math.round(sliderPosition)} percent raw concrete shell, ${100 - Math.round(sliderPosition)} percent finished luxury turnkey room`}
      onKeyDown={handleKeyDown}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches && e.touches[0]) {
          handleMove(e.touches[0].clientX);
        }
      }}
      style={{ touchAction: 'none' }}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#DDD5C7] shadow-luxury-hover bg-[#EDE7DC] touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] focus-visible:ring-offset-2 ${className}`}
    >
      {/* Background (After: Finished Turnkey Living Room) */}
      <img
        src={afterImage}
        alt="Finished Luxury Turnkey Interior by ShineX Infra"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none cinematic-video-sync"
        draggable={false}
      />

      {/* Foreground (Before: Bare Concrete Shell) with clip-path */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Raw Bare Concrete Construction Shell"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-95 cinematic-video-sync"
          draggable={false}
        />
      </div>

      {/* Divider Line & Precision Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#FFFFFF] shadow-[0_0_12px_rgba(200,169,126,0.8)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Interactive Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FFFFFF] border-2 border-[#C8A97E] shadow-xl flex items-center justify-center text-[#181615] transition-transform group-hover:scale-110">
          <MoveHorizontal className="w-5 h-5 text-[#B69566]" />
        </div>
      </div>

      {/* Floating Badges */}
      {/* Left Badge: State A */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181615]/80 backdrop-blur-md text-[#FBF9F5] text-[11px] font-medium tracking-wider uppercase border border-white/10">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span>Before: Raw Concrete Shell</span>
        </span>
      </div>

      {/* Right Badge: State B */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[#181615] text-[11px] font-semibold tracking-wider uppercase border border-[#DDD5C7] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
          <span>After: Turnkey ShineX Handover</span>
        </span>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#181615]/60 backdrop-blur-sm text-[10px] text-[#FBF9F5] font-sans tracking-widest uppercase">
          Drag slider to inspect 45-day turnkey transformation
        </span>
      </div>
    </div>
  );
};
