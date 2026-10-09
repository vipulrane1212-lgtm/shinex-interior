import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import {
  DESIGN_CATALOG,
  resolveImagePath,
  ServiceDesignCatalog,
} from '@/lib/designCatalog';
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Home,
  ChevronRight,
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ serviceId: string }>;
}

export function generateStaticParams() {
  return Object.keys(DESIGN_CATALOG).map((serviceId) => ({
    serviceId,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const catalog = DESIGN_CATALOG[serviceId];

  if (!catalog) {
    return {
      title: 'Service Not Found | ShineX Infra Interior',
    };
  }

  return {
    title: `${catalog.serviceTitle} | Architectural Options | ShineX Infra Interior`,
    description: `Explore architectural layouts for ${catalog.serviceTitle}. Precision turnkey execution in Mumbai.`,
  };
}

export default async function ServiceShowcasePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const catalog: ServiceDesignCatalog | undefined = DESIGN_CATALOG[serviceId];

  if (!catalog) {
    notFound();
  }

  // Cross-category navigation within the same track
  const siblingServices = Object.values(DESIGN_CATALOG).filter(
    (item) => item.track === catalog.track && item.serviceId !== catalog.serviceId
  );

  return (
    <div className="min-h-screen bg-ink text-plaster flex flex-col justify-between selection:bg-gold selection:text-white">
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex-1">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-plaster-muted hover:text-gold transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-10 sm:mb-14 space-y-3 max-w-4xl">
          <div className="flex items-center gap-2 text-gold">
            {catalog.track === 'residential' ? (
              <Home size={15} />
            ) : (
              <Building2 size={15} />
            )}
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              {catalog.track === 'residential'
                ? `Residential Interiors · ${catalog.category}`
                : `Commercial & Civil Division · ${catalog.category}`}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-plaster tracking-tight font-medium leading-tight">
            {catalog.serviceTitle}
          </h1>
        </div>

        {/* Native Layout Cards Showcase Grid: EXACT SAME AS HOME PAGE CARDS */}
        <section aria-label="Layout Options Grid" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {catalog.designs.map((design, idx) => (
              <Link
                key={design.id}
                href={`/quote?service=${catalog.serviceId}&layout=${design.id}&track=${catalog.track}`}
                className="group relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-ink-border bg-ink-card transition-all duration-500 hover:border-gold/70 hover:shadow-[0_20px_45px_rgba(158,120,62,0.25)] flex flex-col justify-between cursor-pointer will-change-transform hover:-translate-y-1 block"
              >
                {/* Background Photograph / AI Render */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resolveImagePath(design.image)}
                    alt={design.title}
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />
                  {/* Cinematic Dark Gradient for Absolute Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Empty top spacing */}
                <div className="relative z-10" />

                {/* Bottom Content: Clean Headline ONLY + Get Quote Action */}
                <div className="relative z-10 p-5 sm:p-6 space-y-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif text-white tracking-tight font-light leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] group-hover:text-gold-light transition-colors">
                      {design.title}
                    </h2>
                  </div>

                  {/* Action Button: Get Quote */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/15">
                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold-light font-sans font-semibold group-hover:text-white transition-colors">
                      <span>Get Quote</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold flex items-center justify-center text-white transition-all shadow-md">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Cross-Service Navigation: Explore Other Spaces in Track */}
        {siblingServices.length > 0 && (
          <section aria-label="Explore Related Categories" className="pt-8 border-t border-ink-border">
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono font-semibold">
                Explore More
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-plaster mt-1">
                {catalog.track === 'residential'
                  ? 'Other Residential Spaces'
                  : 'Other Commercial & Civil Disciplines'}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siblingServices.map((sibling) => (
                <Link
                  key={sibling.serviceId}
                  href={`/services/${sibling.serviceId}`}
                  className="group p-5 rounded-2xl bg-ink-card border border-ink-border hover:border-gold/60 transition-all flex items-center justify-between gap-4 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gold">
                      {sibling.category}
                    </span>
                    <h4 className="text-base font-serif text-plaster group-hover:text-gold transition-colors font-medium">
                      {sibling.serviceTitle}
                    </h4>
                  </div>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-gold shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
