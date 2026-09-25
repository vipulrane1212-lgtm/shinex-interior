'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ArchitecturalAtmosphere } from '@/components/common/ArchitecturalAtmosphere';
import { StorylinePrologue } from '@/components/hero/StorylinePrologue';
import { HeroSection } from '@/components/hero/HeroSection';
import { AutoQuotePopupModal } from '@/components/estimator/AutoQuotePopupModal';
import { ServiceTaxonomy } from '@/components/taxonomy/ServiceTaxonomy';
import { MaterialAtelierSection } from '@/components/atelier/MaterialAtelierSection';
import { WorkflowJourney } from '@/components/journey/WorkflowJourney';
import { QuotationWizard } from '@/components/estimator/QuotationWizard';
import { GoogleReviewsSection } from '@/components/trust/GoogleReviewsSection';
import { DiscountSplitSection } from '@/components/cta/DiscountSplitSection';
import { Footer } from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBF9F5] text-[#181615] relative">
      {/* Master Architectural Atmospheric Depth & Venetian Plaster Layer */}
      <ArchitecturalAtmosphere />

      {/* Sticky Header */}
      <Navbar />

      {/* The Heritage Storyline Prologue: 20 Years of Trust & 400+ Client Transformations */}
      <StorylinePrologue />

      {/* Hero Showcase with Micro-Metrics & Interactive Before/After Slider */}
      <HeroSection />

      {/* 2-Minute Recurring Lead Capture Quote Modal */}
      <AutoQuotePopupModal />

      {/* Feature 1: Interactive Service Taxonomy ("Fruit & Varieties" Catalog) */}
      <ServiceTaxonomy />

      {/* Architectural Tactile Material Library & Physical Substrates */}
      <MaterialAtelierSection />

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
