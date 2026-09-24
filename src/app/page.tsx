'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { ServiceTaxonomy } from '@/components/taxonomy/ServiceTaxonomy';
import { WorkflowJourney } from '@/components/journey/WorkflowJourney';
import { QuotationWizard } from '@/components/estimator/QuotationWizard';
import { GoogleReviewsSection } from '@/components/trust/GoogleReviewsSection';
import { DiscountSplitSection } from '@/components/cta/DiscountSplitSection';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#181615]">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Showcase with Micro-Metrics & Interactive Before/After Slider */}
      <HeroSection />

      {/* Feature 1: Interactive Service Taxonomy ("Fruit & Varieties" Catalog) */}
      <ServiceTaxonomy />

      {/* Feature 3: Canva-Style 5-Milestone Journey */}
      <WorkflowJourney />

      {/* Feature 5: The 6-Step Quotation Engine & Psychological Unlock Gate */}
      <QuotationWizard />

      {/* Feature 2: Authentic Google Reviews & Video Testimonial Theater */}
      <GoogleReviewsSection />

      {/* Feature 4: Dual-Tone 15% OFF Conversion Hook */}
      <DiscountSplitSection />

      {/* Master Atelier & Legal Trust Footer */}
      <Footer />
    </main>
  );
}
