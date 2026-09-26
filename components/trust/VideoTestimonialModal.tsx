'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GoogleReview } from '@/lib/assets';
import { X, Play, Pause, Volume2, ShieldCheck } from 'lucide-react';

interface VideoModalProps {
  review: GoogleReview | null;
  onClose: () => void;
}

export default function VideoTestimonialModal({ review, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!review) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-4xl bg-ink-card border border-ink-border rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top Header Bar */}
        <div className="p-4 px-6 bg-ink border-b border-ink-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Google G Logo */}
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-xs shadow-sm">
              <span className="text-blue-500 font-sans">G</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-plaster block leading-tight">
                Google Verified Client Story
              </span>
              <span className="text-[10px] text-plaster-muted font-mono block">
                {review.locality} · {review.projectType}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-ink-border text-plaster-muted hover:text-gold transition-colors"
            aria-label="Close video story"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video Player Stage */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center group">
          <Image
            src={review.videoThumbnail}
            alt={review.name}
            fill
            sizes="100vw"
            className="object-cover opacity-80"
          />

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

          {/* Center Play / Pause Indicator */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-20 w-16 h-16 rounded-full bg-gold/90 text-ink flex items-center justify-center shadow-[0_0_30px_rgba(197,168,128,0.6)] hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause size={24} className="fill-ink" />
            ) : (
              <Play size={24} className="fill-ink ml-1" />
            )}
          </button>

          {/* ─────────────────────────────────────────────────────────────
              MOTION-GRAPHIC LOWER-THIRD
          ───────────────────────────────────────────────────────────── */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
            {/* Animated Lower-Third Box */}
            <div className="glass-panel-gold rounded-xl p-4 sm:p-5 max-w-lg border-l-4 border-l-gold shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex text-amber-400 text-xs">
                  {'★'.repeat(5)}
                </div>
                <span className="text-[10px] text-gold font-mono uppercase tracking-widest font-semibold">
                  Google Verified Reviewer
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-serif text-plaster font-normal leading-tight">
                {review.lowerThird.client}
              </h4>

              <div className="text-xs text-plaster-muted font-light mt-1 flex flex-wrap items-center gap-2">
                <span>{review.lowerThird.scope}</span>
                <span>•</span>
                <span className="text-gold font-mono">{review.lowerThird.location}</span>
              </div>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-[10px] text-gold font-mono">
                <ShieldCheck size={11} />
                <span>{review.lowerThird.turnaround}</span>
              </div>
            </div>

            {/* Timecode & Audio indicator */}
            <div className="flex items-center gap-3 text-xs text-plaster-muted font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-ink-border">
              <Volume2 size={13} className="text-gold" />
              <span>4K Walkthrough · {review.videoDuration}</span>
            </div>
          </div>

          {/* Simulated Video Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-ink-border z-30">
            <div className="h-full bg-gold w-3/5 animate-pulse" />
          </div>
        </div>

        {/* Client Quote Strip */}
        <div className="p-4 px-6 bg-ink text-xs text-plaster-muted italic flex items-center justify-between border-t border-ink-border">
          <p className="max-w-2xl leading-relaxed">
            &ldquo;{review.comment}&rdquo;
          </p>
          <span className="text-[11px] text-gold font-mono not-italic hidden sm:inline">
            Direct Sneha Client
          </span>
        </div>
      </div>
    </div>
  );
}
