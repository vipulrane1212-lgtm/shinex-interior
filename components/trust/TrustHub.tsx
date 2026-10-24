'use client';

import React from 'react';
import { GOOGLE_REVIEWS } from '@/lib/assets';
import { Star, ExternalLink } from 'lucide-react';

// Official multicolour Google "G" mark (used for the Google Reviews badge only)
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.12-6.73-4.96L1.29 17.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29L1.29 6.9A12 12 0 0 0 0 12c0 1.93.46 3.76 1.29 5.4l3.98-3.11z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.29 6.9l3.98 3.11C6.22 6.87 8.87 4.75 12 4.75z" />
    </svg>
  );
}

export default function TrustHub() {
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
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm p-0.5">
                <GoogleG className="w-4 h-4" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold">
                Google Verified Reviews
              </span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plaster tracking-tight font-semibold">
                What Our Clients Say.
              </h2>
              <span className="text-sm sm:text-base md:text-lg text-gold font-sans font-medium block mt-1 tracking-wide">
                Real experiences from Mumbai &amp; Navi Mumbai homeowners
              </span>
            </div>
            <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal leading-relaxed">
              Real Google reviews for Sneha Enterprises, the team behind ShineX — 4.9 stars from 117 reviews. 15 are shown below; see them all on Google.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="p-4 rounded-xl bg-ink border border-ink-border flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow p-1.5">
              <GoogleG className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
                <span className="text-plaster font-bold text-xs ml-1">4.9</span>
              </div>
              <span className="text-[10px] text-plaster-muted font-mono block mt-0.5">
                117 Google Reviews · Sneha Enterprises
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
              className="w-[360px] sm:w-[420px] shrink-0 p-6 rounded-2xl bg-ink border border-ink-border hover:border-gold/60 transition-all duration-300 flex flex-col justify-between gap-6 group shadow-xl hover:shadow-[0_10px_30px_rgba(158,120,62,0.15)]"
            >
              {/* Card Header: Google logo, stars, time */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 p-1">
                    <GoogleG className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-plaster group-hover:text-gold transition-colors leading-tight font-sans">
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
              <p className="text-xs text-plaster-muted font-sans font-light leading-relaxed italic line-clamp-3">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {/* Verified on Google */}
              <div className="pt-2 border-t border-ink-border/80 flex items-center justify-between">
                <span className="text-[11px] font-sans font-medium text-plaster group-hover:text-gold transition-colors">
                  Verified Google Review
                </span>
                <span className="text-[10px] text-gold font-mono uppercase tracking-wider">
                  Sneha Enterprises
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 flex justify-center">
        <a
          href="https://share.google/dojQcTroA26CS6fw1"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          See all 117 reviews on Google
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
