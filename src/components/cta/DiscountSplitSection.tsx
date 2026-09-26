'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Gift,
  CheckCircle2,
  ArrowRight,
  Phone,
  User,
  MapPin,
} from 'lucide-react';
import { ASSET_LIBRARY } from '@/lib/mockData';
import { PropertyConfig } from '@/lib/types';
import { sanitizeWhatsAppPhone } from '@/lib/calculatorLogic';
import { ParallaxImage } from '@/components/common/ParallaxImage';
import { RemotionQuoteButton } from '@/components/common/RemotionQuoteButton';

export const DiscountSplitSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '+91 ',
    location: '',
    configuration: '3BHK' as PropertyConfig,
    timeline: 'Within 45 Days',
  });

  const [submitted, setSubmitted] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');
    if (!formData.fullName.trim()) return;

    const phoneCheck = sanitizeWhatsAppPhone(formData.whatsappNumber);
    if (!phoneCheck.isValid) {
      setPhoneError('Please enter a valid 10-digit WhatsApp number');
      return;
    }

    setIsSubmitting(true);
    const code = `SHINEX-GRANT-15-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const existing = JSON.parse(localStorage.getItem('shinex_leads') || '[]');
      existing.push({
        ...formData,
        whatsappNumber: phoneCheck.formatted,
        voucherCode: code,
        timestamp: new Date().toISOString(),
        type: '15_percent_discount_booking',
      });
      localStorage.setItem('shinex_leads', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      setVoucherCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="discount-booking" className="py-24 bg-luxury-canvas border-t border-[#EDE7DC] relative overflow-hidden cove-lighting-wash">
      {/* Background Architectural Drafting Grid Pattern & Radial Illumination */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Fluted Oak Slat Margins */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 opacity-30 fluted-slat-shadows hidden lg:block" />

        {/* Multi-layered Drafting Grids */}
        <div className="absolute inset-0 bg-architectural-fine-grid opacity-25" />
        <div className="absolute inset-0 bg-architectural-grid opacity-15" />
        <div className="absolute inset-0 bg-architectural-isometric opacity-12" />

        {/* Golden Radial Ambient Light */}
        <div className="absolute top-1/2 left-1/3 w-[700px] h-[550px] ambient-glow-gold rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[450px] ambient-glow-linen rounded-full" />

        {/* Architectural CAD Blueprint Watermark Annotation */}
        <div className="absolute top-12 left-12 hidden 2xl:flex flex-col text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>GRANT DWG: PROMO-15 // SNEHA ENTERPRISES DIGITAL SUBSIDY</span>
          <span>100% FIXED PRICE LOCK // ZERO ESCALATION BOND</span>
        </div>

        <div className="absolute top-12 right-12 hidden 2xl:flex flex-col items-end text-[10px] font-mono text-[#8C8479]/45 uppercase tracking-widest space-y-1">
          <span>FACTORY ALLOCATION: 25 TOTAL SLOTS</span>
          <span>COMPLIMENTARY GERMAN HARDWARE INCLUDED</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl overflow-hidden border border-[#DDD5C7] shadow-2xl bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-12 relative">
          {/* Corner Registration Brackets */}
          <div className="absolute top-3 left-3 z-20 font-mono text-[9px] text-[#C8A97E] pointer-events-none hidden sm:block">┌ GRANT-2026</div>
          <div className="absolute top-3 right-3 z-20 font-mono text-[9px] text-[#C8A97E] pointer-events-none hidden sm:block">SNEHA-LOCK ┐</div>

          {/* Left Column (50%): High-Resolution Architectural Visual Hook */}
          <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden min-h-[500px]">
            {/* Background Image with Dark Vignette and Parallax Scroll */}
            <div className="absolute inset-0 z-0">
              <ParallaxImage
                src={ASSET_LIBRARY.handoverGiftAi || ASSET_LIBRARY.handoverGift}
                alt="Luxury Handover Detail"
                className="w-full h-full"
                imgClassName="filter brightness-[0.78] cinematic-video-1"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/95 via-[#181615]/60 to-black/30 pointer-events-none" />
              </ParallaxImage>
            </div>

            {/* Top Floating Badge */}
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[11px] font-bold text-[#181615] uppercase tracking-wider shadow-sm">
                <Gift className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Limited-Time Factory Benefit</span>
              </span>

              <h2 className="font-editorial text-white font-bold leading-tight tracking-tight text-3xl sm:text-4xl">
                Get Flat <span className="font-script text-gold-light text-[1.42em] font-normal inline-block transform -rotate-1">15% OFF</span> <br />
                On Your Turnkey Interior
              </h2>

              <p className="text-xs sm:text-sm text-[#EDE7DC] leading-relaxed max-w-md">
                Direct factory pricing backed by Sneha Enterprises. Lock in your slot to get free German hardware upgrades and free 3D design plans.
              </p>
            </div>

            {/* Core Deliverables Checklist */}
            <div className="relative z-10 space-y-3 pt-8 border-t border-white/20 text-xs text-white">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Free 3D Design &amp; VR Walkthrough</span>{' '}
                  <span className="text-[#E5D2BA]">(Worth ₹15,000)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Free Chimney &amp; Hob Upgrade</span>{' '}
                  <span className="text-[#E5D2BA]">(German Brand Faber/Franke)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Free German Soft-Close Hinges</span>{' '}
                  <span className="text-[#E5D2BA]">(Blum / Hettich)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">45-Day Handover Guarantee</span>{' '}
                  <span className="text-[#E5D2BA]">(₹1,500/day penalty if late)</span>
                </div>
              </div>

              {/* Ethical Scarcity Counter */}
              <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                  <span className="text-[11px] font-semibold text-[#EDE7DC]">
                    Valid for the next 7 bookings this month
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono text-[#C8A97E] font-bold">
                  18/25 Slots Claimed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (50%): Clean Ivory Lead Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-[#FFFFFF] flex flex-col justify-center">
            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#181615] font-bold tracking-tight">
                    Book Free Site Visit &amp; 15% OFF
                  </h3>
                  <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                    Our lead engineer visits for precise laser measurements and shares your 3D design + exact BOQ within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh & Kavita Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD5C7] text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span>WhatsApp Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 12890"
                      value={formData.whatsappNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsappNumber: e.target.value });
                        if (phoneError) setPhoneError('');
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E] ${
                        phoneError ? 'border-red-400 bg-red-50/20' : 'border-[#DDD5C7]'
                      }`}
                    />
                    {phoneError && <p className="text-[11px] text-red-500">{phoneError}</p>}
                  </div>

                  {/* Location & Society */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span>Project Location / Society Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Whitefield, Bengaluru / Hiranandani, Mumbai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD5C7] text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    />
                  </div>

                  {/* Dual Grid: Configuration & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952]">
                        Configuration
                      </label>
                      <select
                        value={formData.configuration}
                        onChange={(e) =>
                          setFormData({ ...formData, configuration: e.target.value as PropertyConfig })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD5C7] text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                      >
                        <option value="1BHK">1 BHK Residence</option>
                        <option value="2BHK">2 BHK Residence</option>
                        <option value="3BHK">3 BHK Residence</option>
                        <option value="4BHK">4 BHK / Duplex</option>
                        <option value="Villa">Luxury Villa</option>
                        <option value="Commercial">Commercial Atelier</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952]">
                        Possession Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD5C7] text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                      >
                        <option value="Immediate">Immediate Possession</option>
                        <option value="Within 45 Days">Within 45 Days</option>
                        <option value="30 to 60 Days">30 - 60 Days</option>
                        <option value="Planning 90+ Days">Planning Ahead (90+ Days)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="mt-3">
                    <RemotionQuoteButton
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full"
                      subtitle="Price lock guaranteed • Zero sales harassment"
                    >
                      {isSubmitting ? 'Reserving Factory Slot...' : 'Claim 15% OFF & Book Free Site Visit'}
                    </RemotionQuoteButton>
                  </div>
                </form>

                <p className="text-[11px] text-center text-[#8C8479]">
                  No upfront payment required. 100% price lock guaranteed by Sneha Enterprises.
                </p>
              </div>
            ) : (
              /* Success / Voucher Confirmation Card */
              <div
                className="space-y-6 text-center py-6 animate-in fade-in duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#3A6B56]/10 text-[#3A6B56] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3A6B56]">
                    Voucher Activated &amp; Reserved
                  </span>
                  <h3 className="font-editorial-h3 text-2xl text-[#181615]">
                    Congratulations, {formData.fullName}!
                  </h3>
                  <p className="text-xs text-[#5E5952] max-w-sm mx-auto leading-relaxed">
                    Your 15% discount voucher is locked. Our project manager will connect on WhatsApp at{' '}
                    <strong className="text-[#181615]">{formData.whatsappNumber}</strong> within 2 hours to confirm your free site visit.
                  </p>
                </div>

                {/* Voucher Code Box */}
                <div className="p-4 rounded-2xl bg-[#F7F1E6] border border-[#E5D2BA] inline-block max-w-xs mx-auto">
                  <p className="text-[10px] uppercase tracking-wider text-[#8C8479]">Digital Grant Reference</p>
                  <p className="font-mono text-base font-bold text-[#181615] mt-1">{voucherCode}</p>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/919845012890?text=${encodeURIComponent(
                      `Hi ShineX Concierge, I just booked my 15% voucher [${voucherCode}] for my ${formData.configuration} at ${formData.location}. Please connect me with my design architect.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] font-semibold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Open Instant WhatsApp Chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
