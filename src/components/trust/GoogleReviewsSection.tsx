'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Play,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { GOOGLE_REVIEWS_DATA } from '@/lib/mockData';
import { VideoReelData } from '@/lib/types';
import { VideoReelModal } from './VideoReelModal';
import { ParallaxImage } from '@/components/common/ParallaxImage';

export const GoogleReviewsSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<VideoReelData | null>(null);

  return (
    <section id="reviews" className="py-24 bg-luxury-canvas border-t border-[#EDE7DC] relative overflow-hidden cove-lighting-wash">
      {/* Background Architectural Drafting Grid & Subtle Radial Illumination */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Oak Slat Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-12" />

        {/* Ambient Radial Illumination */}
        <div className="absolute top-1/3 right-1/4 w-[700px] h-[550px] ambient-glow-gold rounded-full" />
        <div className="absolute bottom-10 left-12 w-[500px] h-[400px] ambient-glow-linen rounded-full" />

        {/* Architectural CAD Blueprint Watermark Annotation */}
        <div className="absolute top-12 left-12 hidden 2xl:flex flex-col text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>AUDIT DWG: REV-03 // VERIFIED RESIDENTIAL REVIEWS</span>
          <span>SNEHA ENTERPRISES 100% UNEDITED CLIENT TESTIMONIALS</span>
        </div>

        <div className="absolute top-12 right-12 hidden 2xl:flex flex-col items-end text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>GOOGLE MAPS VERIFIED RATING: 4.9 / 5.0</span>
          <span>150+ APARTMENT & VILLA COMPLETIONS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pinned Google Trust Header */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#DDD5C7] shadow-soft-luxury flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Multi-Color Google G Badge */}
            <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border border-[#DDD5C7] shadow-sm flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.04h3.88c2.27-2.09 3.665-5.17 3.665-9.13z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.41l4.03-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.59l4.03 3.13c.95-2.83 3.6-4.97 6.72-4.97z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#181615]">4.9</span>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#3A6B56]/10 text-[#3A6B56]">
                  Verified Business
                </span>
              </div>
              <p className="text-xs text-[#5E5952] mt-1 font-semibold">
                150+ Verified Homeowner Reviews across Bangalore &amp; Mumbai
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F7F1E6] hover:bg-[#C8A97E] text-[#181615] font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-[#E5D2BA]"
            >
              <span>Verify on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Section Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5D2BA] text-xs font-bold text-[#181615] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Verified Client Reviews</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] leading-tight">
            Client Home Video{' '}
            <span className="font-script font-normal text-gold-gradient text-[1.45em] inline-block transform -rotate-1 relative">
              Tours
              <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent" />
            </span>{' '}
            &amp; Reviews
          </h2>

          <p className="text-body-base text-[#5E5952] leading-relaxed">
            Real homeowners. Real 45-day handovers. Zero delay excuses. Watch video tours of finished homes and read verified Google reviews.
          </p>

          {/* Architectural Dimension Line */}
          <div className="max-w-xs mx-auto pt-2 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#8C8479]/70">
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
            <span>VERIFIED ON-SITE ARCHITECTURAL REVIEWS</span>
            <span className="w-8 h-[1px] bg-[#DDD5C7]" />
          </div>
        </div>

        {/* Reviews & Video Reel Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GOOGLE_REVIEWS_DATA.map((review) => (
            <motion.div
              key={review.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between bg-[#FFFFFF] p-6 sm:p-7 rounded-3xl border border-[#EDE7DC] hover:border-[#DDD5C7] shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-11 h-11 rounded-full object-cover border border-[#DDD5C7]"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#181615]">{review.author}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#8C8479]">
                        {review.isLocalGuide && (
                          <span className="font-semibold text-[#C8A97E]">Local Guide</span>
                        )}
                        {review.isLocalGuide && <span>•</span>}
                        <span>{review.relativeTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google G Micro Emblem */}
                  <div className="w-6 h-6 rounded-full bg-[#F3EFE6] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-[#4285F4]">G</span>
                  </div>
                </div>

                {/* Star Rating & Project Badge */}
                <div className="space-y-1.5">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="inline-block text-[11px] font-medium text-[#3A6B56] bg-[#3A6B56]/10 px-2.5 py-0.5 rounded-full">
                    {review.projectBadge}
                  </span>
                </div>

                {/* Review Title & Copy */}
                <div>
                  <h5 className="font-semibold text-xs text-[#181615] mb-1.5">"{review.title}"</h5>
                  <p className="text-xs text-[#5E5952] leading-relaxed line-clamp-4">
                    {review.content}
                  </p>
                </div>
              </div>

              {/* Embedded Video Reel Trigger if available */}
              {review.videoReel && (
                <div className="mt-6 pt-5 border-t border-[#EDE7DC]">
                  <button
                    onClick={() => setActiveReel(review.videoReel!)}
                    className="w-full group/reel relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#DDD5C7] text-left select-none focus:outline-none"
                  >
                    <ParallaxImage
                      src={review.videoReel.thumbnail}
                      alt={review.videoReel.title}
                      className="w-full h-full"
                      imgClassName="filter brightness-90 group-hover:brightness-95 transition-all duration-700"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                      {/* Pulsing Champagne Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-[#C8A97E] text-[#181615] flex items-center justify-center shadow-lg group-hover/reel:scale-110 transition-transform animate-pulse-glow">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Video Reel Label */}
                      <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#E5D2BA] block">
                          {review.videoReel.triggerLabel || `Watch ${review.videoReel.duration} Tour`}
                        </span>
                        <p className="text-xs font-semibold drop-shadow-sm truncate">
                          {review.videoReel.title}
                        </p>
                      </div>
                    </ParallaxImage>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Reel Modal Container */}
      <VideoReelModal reel={activeReel} onClose={() => setActiveReel(null)} />
    </section>
  );
};
