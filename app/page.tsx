import React from 'react';
import Header from '@/components/layout/Header';
import SplitFooter from '@/components/layout/SplitFooter';
import DualTrackHero from '@/components/hero/DualTrackHero';
import HeroVideoScroll from '@/components/hero/HeroVideoScroll';
import BentoGrid from '@/components/bento/BentoGrid';
import BeforeAfterSlider from '@/components/comparison/BeforeAfterSlider';
import ProcessTimeline from '@/components/timeline/ProcessTimeline';
import TrustHub from '@/components/trust/TrustHub';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ink text-plaster flex flex-col justify-between">
      {/* Global Minimalist Sticky Header */}
      <Header />

      {/* Main Experience */}
      <main className="flex-1 w-full">
        {/* Section 0: The Interactive GSAP Video Transformation Hero */}
        <HeroVideoScroll />

        {/* Section 1: The Dual-Track Hero (GSAP Split-Screen) */}
        <DualTrackHero />

        {/* Section 2: The "Show, Don't Tell" Service Grids (Bento Box UI) */}
        <BentoGrid />

        {/* Section 3: Visual Portfolio Before/After Sliders */}
        <BeforeAfterSlider />

        {/* Section 4: Why Choose ShineX (Animated Timeline) */}
        <div id="timeline">
          <ProcessTimeline />
        </div>

        {/* Section 5: Google-Verified Trust Hub & Video Lightbox */}
        <div id="reviews">
          <TrustHub />
        </div>
      </main>

      {/* Feature 4: 50/50 Split Contact Footer */}
      <SplitFooter />
    </div>
  );
}
