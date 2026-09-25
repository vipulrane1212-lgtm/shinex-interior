'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  Phone,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { RemotionQuoteButton } from '../common/RemotionQuoteButton';

export const AutoQuotePopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [configuration, setConfiguration] = useState('3BHK');
  const [locality, setLocality] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // 120-second (2 minute) recurrence timer + custom event trigger
  useEffect(() => {
    const handleTriggerPopup = () => setIsOpen(true);
    window.addEventListener('shinex-trigger-quote-popup', handleTriggerPopup);

    // Check if user has already permanently submitted in this browser session
    const isSubmitted = sessionStorage.getItem('shinex_lead_submitted');
    if (isSubmitted === 'true') {
      return () => window.removeEventListener('shinex-trigger-quote-popup', handleTriggerPopup);
    }

    const INTERVAL_MS = 120000; // 2 minutes

    // Set recurring timer
    const timer = setInterval(() => {
      // Re-verify if already submitted before showing
      if (sessionStorage.getItem('shinex_lead_submitted') === 'true') {
        clearInterval(timer);
        return;
      }
      setIsOpen(true);
    }, INTERVAL_MS);

    return () => {
      clearInterval(timer);
      window.removeEventListener('shinex-trigger-quote-popup', handleTriggerPopup);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Phone validation (Indian 10-digit number)
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      setPhoneError('Please enter a valid 10-digit phone number');
      return;
    }
    setPhoneError('');
    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false);
      setHasSubmitted(true);
      sessionStorage.setItem('shinex_lead_submitted', 'true');

      // Auto close after 3.5 seconds of success confirmation
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#181615]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#FBF9F5] border border-[#DDD5C7] shadow-2xl overflow-hidden z-10"
          >
            {/* Top Champagne Privilege Banner */}
            <div className="bg-gradient-to-r from-[#C8A97E] via-[#DFBA73] to-[#B69566] px-6 py-2.5 flex items-center justify-between text-[#181615]">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special 15% Factory Discount • Sneha Enterprises</span>
              </span>
              <button
                onClick={handleClose}
                className="p-1 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Close quote popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {!hasSubmitted ? (
                <>
                  {/* Header Content */}
                  <div className="text-center space-y-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EFE6] text-[#B69566] text-xs font-semibold uppercase tracking-wider border border-[#E5D2BA]">
                      <Clock className="w-3 h-3 text-[#C8A97E]" />
                      <span>Free Design Consultation</span>
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#181615] font-semibold tracking-tight">
                      Get Detailed Quote &amp; 15% OFF
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed max-w-md mx-auto">
                      Guaranteed 45-day delivery, 100% fixed price lock, and factory-direct pricing with zero hidden costs.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5E5952] mb-1 font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD5C7] text-sm text-[#181615] placeholder:text-[#8C8479]/60 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all"
                      />
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5E5952] mb-1 font-medium">
                        WhatsApp Number (For Instant BOQ Dispatch) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#8C8479] font-medium">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            setPhoneError('');
                          }}
                          placeholder="98450 12890"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-[#DDD5C7] text-sm text-[#181615] placeholder:text-[#8C8479]/60 focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E] transition-all"
                        />
                      </div>
                      {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
                    </div>

                    {/* Configuration & Locality Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5E5952] mb-1 font-medium">
                          Configuration
                        </label>
                        <select
                          value={configuration}
                          onChange={(e) => setConfiguration(e.target.value)}
                          className="w-full px-3 py-3 rounded-xl bg-white border border-[#DDD5C7] text-xs text-[#181615] focus:outline-none focus:border-[#C8A97E]"
                        >
                          <option value="2BHK">2 BHK Residence</option>
                          <option value="3BHK">3 BHK Residence</option>
                          <option value="4BHK">4 BHK Luxury Apartment</option>
                          <option value="Villa">Luxury Villa / Penthouse</option>
                          <option value="Commercial">Commercial / Studio</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#5E5952] mb-1 font-medium">
                          City / Locality
                        </label>
                        <input
                          type="text"
                          value={locality}
                          onChange={(e) => setLocality(e.target.value)}
                          placeholder="e.g. Whitefield, BLR"
                          className="w-full px-3 py-3 rounded-xl bg-white border border-[#DDD5C7] text-xs text-[#181615] placeholder:text-[#8C8479]/60 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>
                    </div>

                    {/* Remotion-Style Kinetic CTA Button */}
                    <div className="pt-2">
                      <RemotionQuoteButton
                        type="submit"
                        disabled={isSubmitting}
                        size="md"
                        className="w-full"
                        subtitle="Instant WhatsApp summary • Zero spam promise"
                      >
                        {isSubmitting ? 'Reserving Atelier Slot...' : 'Claim 15% Off & Get Instant BOQ'}
                      </RemotionQuoteButton>
                    </div>
                  </form>

                  {/* Trust Micro-Footer */}
                  <div className="mt-4 pt-3 border-t border-[#EDE7DC] flex items-center justify-between text-[11px] text-[#8C8479]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#3A6B56]" />
                      <span>Sneha Enterprises ISO 9001</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#C8A97E]" />
                      <span>100% Privacy Encrypted</span>
                    </span>
                    <span>45-Day Handover Bond</span>
                  </div>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#3A6B56]/10 text-[#3A6B56] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-editorial text-2xl text-[#181615] font-semibold">
                    15% Privilege Reserved, {fullName}!
                  </h4>
                  <p className="text-xs text-[#5E5952] max-w-sm mx-auto leading-relaxed">
                    Our lead architect is dispatching the itemized BOQ for your {configuration} to{' '}
                    <strong>+91 {phone}</strong> on WhatsApp.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/919845012890?text=${encodeURIComponent(
                        `Hi ShineX Architect, I just registered for the 15% privilege for my ${configuration} in ${locality || 'my city'}. Please share the detailed BOQ catalog.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8A97E] text-[#181615] text-xs font-semibold uppercase tracking-wider hover:bg-[#B69566] transition-colors"
                    >
                      <span>Open Instant WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
