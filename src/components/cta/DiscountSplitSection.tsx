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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || formData.whatsappNumber.length < 10) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const code = `SHINEX-GRANT-15-${Math.floor(1000 + Math.random() * 9000)}`;
      setVoucherCode(code);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="discount-booking" className="py-24 bg-[#F3EFE6] border-t border-[#EDE7DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-[#DDD5C7] shadow-2xl bg-[#FFFFFF] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (50%): High-Resolution Architectural Visual Hook */}
          <div className="lg:col-span-6 relative p-8 sm:p-12 lg:p-14 flex flex-col justify-between overflow-hidden min-h-[500px]">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src={ASSET_LIBRARY.handoverGift}
                alt="Luxury Handover Detail"
                className="w-full h-full object-cover object-center filter brightness-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/95 via-[#181615]/60 to-black/30" />
            </div>

            {/* Top Floating Badge */}
            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md text-[11px] font-semibold text-[#181615] uppercase tracking-wider shadow-sm">
                <Gift className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Exclusive Digital Booking Privilege</span>
              </span>

              <h2 className="font-editorial-h2 text-white leading-tight text-3xl sm:text-4xl">
                Claim Flat 15% OFF <br />
                On Complete Turnkey Interiors
              </h2>

              <p className="text-xs sm:text-sm text-[#EDE7DC] leading-relaxed max-w-md">
                Subsidized through the Sneha Enterprises 2026 Architectural Promotion Program.
                Lock in your factory fabrication slot and receive complimentary high-spec upgrades.
              </p>
            </div>

            {/* Core Deliverables Checklist */}
            <div className="relative z-10 space-y-3 pt-8 border-t border-white/20 text-xs text-white">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Free 3D Color Floor Plan &amp; VR Walkthrough</span>{' '}
                  <span className="text-[#E5D2BA]">(Worth ₹15,000)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Complimentary German Hardware Upgrade</span>{' '}
                  <span className="text-[#E5D2BA]">(Blum Soft-Close Drawer Runners)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Rigid 45-Day Handover Bond</span>{' '}
                  <span className="text-[#E5D2BA]">(₹1,500/day penalty clause)</span>
                </div>
              </div>

              {/* Ethical Scarcity Counter */}
              <div className="mt-4 pt-3 flex items-center justify-between p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
                  <span className="text-[11px] font-semibold text-[#EDE7DC]">
                    18 of 25 Factory Slots Claimed This Month
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono text-[#C8A97E] font-bold">
                  7 Slots Left
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (50%): Clean Ivory Lead Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-[#FFFFFF] flex flex-col justify-center">
            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial-h3 text-2xl text-[#181615]">
                    Schedule Site Laser Consultation
                  </h3>
                  <p className="text-xs text-[#5E5952] mt-1 leading-relaxed">
                    Our lead architectural project engineer will visit your apartment for millimeter laser measurements
                    and present your customized 3D design boards.
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
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD5C7] text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E]"
                    />
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
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 py-4 px-6 rounded-2xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-soft-luxury hover:shadow-luxury-hover flex items-center justify-center gap-2 cursor-pointer border border-[#E5D2BA]"
                  >
                    {isSubmitting ? (
                      <span>Reserving Factory Slot...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Claim 15% Voucher &amp; Book Site Visit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-center text-[#8C8479]">
                  No upfront payment required. 100% price lock guaranteed by Sneha Enterprises.
                </p>
              </div>
            ) : (
              /* Success / Voucher Confirmation Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6"
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
                    Your 15% Sneha Enterprises digital grant voucher is locked. Our senior interior architect
                    will reach out on WhatsApp at <strong className="text-[#181615]">{formData.whatsappNumber}</strong> to
                    coordinate your site laser scan.
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
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
