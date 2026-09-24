'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { VideoReelData } from '@/lib/types';

interface VideoReelModalProps {
  reel: VideoReelData | null;
  onClose: () => void;
}

export const VideoReelModal: React.FC<VideoReelModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!reel) return;

    // Simulate reel playback progress
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 400);

    return () => clearInterval(timer);
  }, [reel]);

  if (!reel) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#181615]/85 backdrop-blur-md"
        />

        {/* 9:16 Vertical Reel Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-[#C8A97E]/40 bg-[#181615] flex flex-col justify-between text-white"
        >
          {/* Simulated Video Background with Image Showcase */}
          <div className="absolute inset-0 z-0">
            <img
              src={reel.thumbnail}
              alt={reel.title}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
            {/* Dark gradient overlay for readable typography */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
          </div>

          {/* Top Reel Controls & Progress Bar */}
          <div className="relative z-10 p-4 space-y-3">
            {/* Story Progress Bars */}
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C8A97E] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Header: Homeowner Info & Close */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C8A97E] bg-black">
                  <img src={reel.thumbnail} alt={reel.homeownerName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white drop-shadow-sm">{reel.homeownerName}</p>
                  <p className="text-[10px] text-[#EDE7DC]">{reel.projectTag} • Handed over in {reel.handoverDays} Days</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Play / Pause Indicator */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#C8A97E]/90 hover:bg-[#C8A97E] text-[#181615] flex items-center justify-center shadow-xl backdrop-blur-md transition-transform hover:scale-105"
            >
              {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </button>
          </div>

          {/* Bottom Testimonial Overlay & Architectural Specs */}
          <div className="relative z-10 p-5 space-y-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
            {/* Quote Pill */}
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <p className="text-xs italic text-[#FBF9F5] leading-relaxed">
                "{reel.quote}"
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-1.5 text-[11px] text-[#EDE7DC]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C8A97E] shrink-0" />
                <span>Kitchen: {reel.specs.kitchen}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-[#C8A97E] shrink-0" />
                <span>Wardrobes: {reel.specs.wardrobes}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-[#3A6B56] shrink-0" />
                <span>Zero hidden charges • 10-Yr Sneha Enterprises Warranty</span>
              </div>
            </div>

            {/* Quick Action in Reel */}
            <a
              href="#estimator"
              onClick={onClose}
              className="block w-full text-center py-2.5 rounded-xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] font-semibold text-xs uppercase tracking-wider transition-colors shadow-md mt-2"
            >
              Get Estimate Like Priya's Home
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
