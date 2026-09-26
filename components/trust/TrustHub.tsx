'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GOOGLE_REVIEWS, GoogleReview } from '@/lib/assets';
import VideoTestimonialModal from './VideoTestimonialModal';
import { Play, Star, ShieldCheck, ExternalLink } from 'lucide-react';

export default function TrustHub() {
  const [selectedReview, setSelectedReview] = useState<GoogleReview | null>(null);

  // Duplicate list to create seamless infinite marquee loop
  const marqueeItems = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

  return (
    <section className="py-24 md:py-32 bg-ink-soft border-b border-ink-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-gold">
              {/* Google G logo */}
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                <span className="text-blue-500 font-sans">G</span>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Google-Verified Trust Hub
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-normal">
              Homeowner Proof. Civil Discipline.
            </h2>
            <p className="text-xs sm:text-sm text-plaster-muted font-light leading-relaxed">
              Unedited reviews and live video walkthroughs from families and enterprises across Seawoods, Kharghar, Vashi, Nerul, and Powai.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="p-4 rounded-xl bg-ink border border-ink-border flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-lg shadow">
              <span className="text-blue-500 font-sans">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
                <span className="text-plaster font-bold text-xs ml-1">5.0</span>
              </div>
              <span className="text-[10px] text-plaster-muted font-mono block mt-0.5">
                Verified Business Reviews · Navi Mumbai
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Endless Horizontal Marquee Ticker */}
      <div className="w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]">
          {marqueeItems.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              onClick={() => setSelectedReview(rev)}
              className="w-[360px] sm:w-[420px] shrink-0 p-6 rounded-2xl bg-ink border border-ink-border hover:border-gold/60 transition-all duration-300 flex flex-col justify-between gap-6 cursor-pointer group shadow-xl hover:shadow-[0_0_25px_rgba(197,168,128,0.18)]"
            >
              {/* Card Header: Google logo, stars, time */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                    <span className="text-blue-500 font-sans">G</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-plaster group-hover:text-gold-light transition-colors leading-tight">
                      {rev.name}
                    </h4>
                    <span className="text-[10px] text-plaster-dim font-mono block">
                      {rev.locality}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <span className="text-[10px] text-plaster-dim font-mono block mt-0.5">
                    {rev.timeAgo}
                  </span>
                </div>
              </div>

              {/* Review Body */}
              <p className="text-xs text-plaster-muted font-light leading-relaxed italic line-clamp-3">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {/* Video Thumbnail CTA trigger */}
              <div className="pt-2 border-t border-ink-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-8 rounded-md overflow-hidden bg-ink-card shrink-0">
                    <Image
                      src={rev.videoThumbnail}
                      alt={rev.name}
                      fill
                      sizes="48px"
                      className="object-cover opacity-75 group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play size={10} className="fill-gold text-gold" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-plaster group-hover:text-gold transition-colors">
                      Watch Video Story
                    </span>
                    <span className="text-[9px] text-plaster-dim font-mono">
                      {rev.projectType}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] text-gold font-mono uppercase tracking-wider group-hover:underline flex items-center gap-1">
                  Play 4K <Play size={10} className="fill-gold" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedReview && (
        <VideoTestimonialModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </section>
  );
}
