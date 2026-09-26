'use client';

import React from 'react';
import {
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { BRAND_PROFILE, ASSET_LIBRARY } from '@/lib/mockData';
import { getAssetUrl } from '@/lib/assetHelper';

export const Footer: React.FC = () => {
  const instagramShots = [
    { id: 1, img: ASSET_LIBRARY.kitchenIslandAi || ASSET_LIBRARY.kitchenIsland, alt: 'Travertine Island Kitchen' },
    { id: 2, img: ASSET_LIBRARY.bedroomMasterAi || ASSET_LIBRARY.bedroomJapandi, alt: 'Japandi Master Suite' },
    { id: 3, img: ASSET_LIBRARY.livingLoungeAi || ASSET_LIBRARY.livingAcoustic, alt: 'Acoustic Fluted Living Lounge' },
    { id: 4, img: getAssetUrl('/images/kitchen_lshaped_luxury.jpg'), alt: 'Cashmere Acrylic Cabinetry' },
    { id: 5, img: getAssetUrl('/images/bedroom_classical_wardrobe.jpg'), alt: 'Fluted Dressing Walk-In' },
    { id: 6, img: ASSET_LIBRARY.afterFinished, alt: 'Turnkey Handover Living Room' },
  ];

  return (
    <footer className="bg-luxury-canvas border-t border-[#EDE7DC] pt-20 pb-12 text-[#181615] relative overflow-hidden cove-lighting-wash">
      {/* Background Architectural Drafting Grid & Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Oak Slat Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-25 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-25 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-20" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-10" />

        {/* Ambient Warm Golden Glow */}
        <div className="absolute -bottom-20 left-1/4 w-[600px] h-[400px] ambient-glow-gold rounded-full" />

        {/* Architectural Footer Stamp */}
        <div className="absolute top-6 left-12 hidden 2xl:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#8C8479]/45 uppercase">
          <span>ATELIER ARCHITECTURAL SPECIFICATION 2026</span>
          <span>•</span>
          <span>SNEHA ENTERPRISES LEGAL TRUST</span>
          <span>•</span>
          <span>BANGALORE &amp; MUMBAI</span>
        </div>
      </div>

      {/* Decorative subtle texture watermark */}
      <div className="absolute right-0 bottom-0 text-[180px] font-display-monumental font-extrabold text-[#DDD5C7]/12 select-none pointer-events-none -mb-16 -mr-10 leading-none">
        SHINEX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-16 border-b border-[#DDD5C7]/70">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-[#181615]">45-Day Handover</h4>
              <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                Legally backed penalty guarantee: ₹1,500/day compensation for delays.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-[#3A6B56]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-[#181615]">100% Price Lock</h4>
              <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                Zero surprise midpoint escalations. Transparent itemized BOQ signed upfront.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] flex items-center justify-center shrink-0 shadow-sm">
              <Factory className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-[#181615]">German Precision</h4>
              <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                Homag CNC laser edge-banding and off-site pre-assembly for dust-free sites.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#DDD5C7] flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5 text-[#3A6B56]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-[#181615]">10-Year Bond</h4>
              <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                Certified Sneha Enterprises warranty with bi-annual preventive hardware audits.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-[#DDD5C7]/70">
          {/* Brand & Legal Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading text-3xl font-extrabold tracking-tight text-[#181615]">
                Shine<span className="text-[#C8A97E] font-black">X</span>
              </span>
              <span className="text-xs font-sans tracking-[0.2em] uppercase font-bold text-[#8C8479] pl-2 border-l border-[#DDD5C7]">
                Infra Interior
              </span>
            </div>

            <p className="text-xs tracking-wider uppercase text-[#3A6B56] font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>A Legal Enterprise of Sneha Enterprises • GST: {BRAND_PROFILE.gstRegistered}</span>
            </p>

            <p className="text-sm text-[#5E5952] leading-relaxed max-w-md pt-1">
              High-end architectural atelier meets precision turnkey execution. We curate private residences,
              luxury penthouses, and bespoke commercial spaces with European manufacturing tolerances and
              radical financial transparency.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919845012890"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#181615] hover:text-[#C8A97E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8A97E]" />
                <span>Concierge: {BRAND_PROFILE.supportPhone}</span>
              </a>
              <a
                href={`mailto:${BRAND_PROFILE.supportEmail}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#181615] hover:text-[#C8A97E] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C8A97E]" />
                <span>{BRAND_PROFILE.supportEmail}</span>
              </a>
            </div>
          </div>

          {/* Design Studios & Experience Centers */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-[0.16em] text-[#181615] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Experience Ateliers</span>
            </h3>
            {BRAND_PROFILE.experienceCenters.map((center) => (
              <div key={center.city} className="text-xs space-y-1">
                <p className="font-semibold text-[#181615]">{center.city}</p>
                <p className="text-[#5E5952] leading-relaxed">{center.address}</p>
                <p className="text-[#8C8479] text-[11px]">{center.hours}</p>
              </div>
            ))}
          </div>

          {/* Precision Factories */}
          <div className="space-y-4">
            <h3 className="font-heading font-extrabold text-xs uppercase tracking-[0.16em] text-[#181615] flex items-center gap-1.5">
              <Factory className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>German Factory Hubs</span>
            </h3>
            {BRAND_PROFILE.factories.map((fac) => (
              <div key={fac.name} className="text-xs space-y-1">
                <p className="font-semibold text-[#181615]">{fac.name}</p>
                <p className="text-[#5E5952]">{fac.location}</p>
                <p className="text-[#C8A97E] text-[11px] font-medium">{fac.machinery}</p>
              </div>
            ))}
          </div>

          {/* Instagram Feed Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-extrabold text-xs uppercase tracking-[0.16em] text-[#181615] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#C8A97E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Editorial Feed</span>
              </h3>
              <span className="text-[11px] text-[#8C8479]">@shinex.atelier</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {instagramShots.map((shot, idx) => (
                <div
                  key={shot.id}
                  className="group relative aspect-square rounded-md overflow-hidden bg-[#EDE7DC] border border-[#DDD5C7]/50"
                >
                  <img
                    src={shot.img}
                    alt={shot.alt}
                    className={`w-full h-full object-cover group-hover:brightness-110 transition-all duration-500 ${
                      idx % 3 === 0
                        ? 'cinematic-video-1 cinematic-delay-1'
                        : idx % 3 === 1
                        ? 'cinematic-video-2 cinematic-delay-3'
                        : 'cinematic-video-3 cinematic-delay-5'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#181615]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#8C8479] pt-1">
              Curated architectural projects photographed on site.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8479] gap-4">
          <p>© {new Date().getFullYear()} ShineX Infra Interior. All Rights Reserved. A Sneha Enterprises Subsidiary.</p>

          <div className="flex items-center gap-6">
            <a href="#estimator" className="hover:text-[#181615] transition-colors">
              BOQ Calculator
            </a>
            <a href="#catalog" className="hover:text-[#181615] transition-colors">
              Taxonomy Catalog
            </a>
            <a href="#journey" className="hover:text-[#181615] transition-colors">
              45-Day Protocol
            </a>
            <a href="#reviews" className="hover:text-[#181615] transition-colors">
              Google Verified Ratings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
