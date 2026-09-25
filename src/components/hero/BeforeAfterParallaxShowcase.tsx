'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  Layers,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { BEFORE_AFTER_GALLERY } from '@/lib/mockData';
import { RemotionQuoteButton } from '../common/RemotionQuoteButton';
import { getAssetUrl } from '@/lib/assetHelper';

export const BeforeAfterParallaxShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_GALLERY[activeIndex];

  // Mouse / Touch handle movement
  const handleMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
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

  // Navigate between rooms
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? BEFORE_AFTER_GALLERY.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === BEFORE_AFTER_GALLERY.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  return (
    <div className="w-full space-y-6">
      {/* 1. Header & Room Selector Pills */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#EDE7DC] pb-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#8C8479] uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" />
            <span>Interactive Transformation Theater • 5 Spaces</span>
          </span>
          <h3 className="font-editorial-h3 text-xl sm:text-2xl text-[#181615] font-semibold mt-0.5">
            Before &amp; After Architectural Revelations
          </h3>
        </div>

        {/* Slide Counter & Next/Prev Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-medium text-[#8C8479] tracking-widest">
            0{activeIndex + 1} <span className="opacity-40">/</span> 0{BEFORE_AFTER_GALLERY.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous space"
              className="w-9 h-9 rounded-full bg-white border border-[#DDD5C7] hover:border-[#C8A97E] hover:bg-[#F3EFE6] flex items-center justify-center text-[#181615] transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next space"
              className="w-9 h-9 rounded-full bg-white border border-[#DDD5C7] hover:border-[#C8A97E] hover:bg-[#F3EFE6] flex items-center justify-center text-[#181615] transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Room Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {BEFORE_AFTER_GALLERY.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveIndex(idx);
              setSliderPosition(50);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 border ${
              idx === activeIndex
                ? 'bg-[#181615] text-[#FBF9F5] border-[#181615] shadow-sm'
                : 'bg-white/80 text-[#5E5952] border-[#DDD5C7] hover:border-[#C8A97E] hover:text-[#181615]'
            }`}
          >
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      {/* 3. Main Split Slider Showcase with Parallax Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Interactive Split Frame */}
          <div
            ref={sliderContainerRef}
            role="slider"
            tabIndex={0}
            aria-label={`${activeItem.title} Before and After Comparison Slider`}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={5}
            aria-valuemax={95}
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
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#DDD5C7] shadow-luxury-hover bg-[#EDE7DC] touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
          >
            {/* Background Image (After: Finished Turnkey Room) */}
            <motion.img
              src={getAssetUrl(activeItem.afterImage)}
              alt={activeItem.title}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none cinematic-video-sync"
              draggable={false}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Foreground Image (Before: Raw Concrete Shell) with Clip Path */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={getAssetUrl(activeItem.beforeImage)}
                alt={activeItem.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-95 cinematic-video-sync"
                draggable={false}
              />
            </div>

            {/* Dividing Line & Precision Brass Knob */}
            <div
              className="absolute top-0 bottom-0 w-[2.5px] bg-[#FFFFFF] shadow-[0_0_15px_rgba(200,169,126,0.9)] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#FFFFFF] border-2 border-[#C8A97E] shadow-2xl flex items-center justify-center text-[#181615] transition-transform hover:scale-110">
                <MoveHorizontal className="w-5 h-5 text-[#B69566]" />
              </div>
            </div>

            {/* Status Badges */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181615]/85 backdrop-blur-md text-[#FBF9F5] text-[10px] sm:text-[11px] font-medium tracking-wider uppercase border border-white/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>Before: {activeItem.beforeLabel}</span>
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md text-[#181615] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase border border-[#DDD5C7] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>After: {activeItem.afterLabel}</span>
              </span>
            </div>

            {/* Bottom Floating Instruction */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#181615]/70 backdrop-blur-md text-[10px] text-[#FBF9F5] font-sans tracking-widest uppercase">
                Drag slider left &amp; right to inspect precision fit
              </span>
            </div>
          </div>

          {/* 4. Room Technical Specifications & Transformation HUD */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-[#EDE7DC] shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#F7F1E6] text-[#B69566] border border-[#E5D2BA]">
                    {activeItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-[#5E5952]">
                    <Maximize2 className="w-3 h-3 text-[#C8A97E]" />
                    {activeItem.sqft}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-[#3A6B56]">
                    <Clock className="w-3 h-3" />
                    Handover in {activeItem.handoverDays} Days Guaranteed
                  </span>
                </div>
                <h4 className="font-editorial-h3 text-xl text-[#181615] font-bold">
                  {activeItem.title}
                </h4>
                <p className="text-xs text-[#5E5952] mt-0.5">{activeItem.subtitle}</p>
              </div>

              {/* Instant CTA */}
              <div className="shrink-0">
                <RemotionQuoteButton
                  href="#estimator"
                  size="sm"
                  subtitle="15% Factory Benefit Applied"
                >
                  Get Quote for this Space
                </RemotionQuoteButton>
              </div>
            </div>

            {/* Technical Substrate Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-[#EDE7DC]/80 text-xs">
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC]/60">
                <p className="text-[10px] uppercase tracking-wider text-[#8C8479] font-medium">Core Substrate</p>
                <p className="font-semibold text-[#181615] mt-0.5 line-clamp-1">{activeItem.specs.coreMaterial}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC]/60">
                <p className="text-[10px] uppercase tracking-wider text-[#8C8479] font-medium">Hardware Spec</p>
                <p className="font-semibold text-[#181615] mt-0.5 line-clamp-1">{activeItem.specs.hardware}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC]/60">
                <p className="text-[10px] uppercase tracking-wider text-[#8C8479] font-medium">Lighting Lumens</p>
                <p className="font-semibold text-[#181615] mt-0.5 line-clamp-1">{activeItem.specs.lighting}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC]/60">
                <p className="text-[10px] uppercase tracking-wider text-[#8C8479] font-medium">Warranty Bond</p>
                <p className="font-semibold text-[#3A6B56] mt-0.5 line-clamp-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  {activeItem.specs.warranty}
                </p>
              </div>
            </div>

            {/* Homeowner Testimonial Callout */}
            <div className="pt-2 text-xs italic text-[#5E5952] border-t border-[#EDE7DC]/40">
              {activeItem.highlightQuote}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
