'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  User,
  MapPin,
} from 'lucide-react';
import { UserLeadData } from '@/lib/types';
import { sanitizeWhatsAppPhone } from '@/lib/calculatorLogic';
import { RemotionQuoteButton } from '../common/RemotionQuoteButton';

interface UnlockGateModalProps {
  onUnlock: (data: UserLeadData) => void;
  savingsEstimate: string;
}

export const UnlockGateModal: React.FC<UnlockGateModalProps> = ({ onUnlock, savingsEstimate }) => {
  const [formData, setFormData] = useState<UserLeadData>({
    fullName: '',
    whatsappNumber: '+91 ',
    pincode: '',
    propertyName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const phoneCheck = sanitizeWhatsAppPhone(formData.whatsappNumber);
    if (!phoneCheck.isValid) {
      errs.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number (e.g. +91 98450 12890)';
    }
    if (!formData.pincode.trim()) {
      errs.pincode = 'Pincode or Society name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const sanitized = sanitizeWhatsAppPhone(formData.whatsappNumber);
    const finalizedData: UserLeadData = {
      ...formData,
      whatsappNumber: sanitized.formatted,
    };

    // Persist lead
    try {
      const existing = JSON.parse(localStorage.getItem('shinex_leads') || '[]');
      existing.push({ ...finalizedData, timestamp: new Date().toISOString(), type: 'boq_unlock' });
      localStorage.setItem('shinex_leads', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      onUnlock(finalizedData);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="fixed sm:absolute inset-0 z-50 sm:z-30 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Dark frosted luxury backdrop */}
      <div className="absolute inset-0 bg-[#181615]/45 backdrop-blur-md transition-all duration-500 rounded-none sm:rounded-3xl" />

      {/* Modal Dialog Card (Bottom-Sheet on Mobile, Center Modal on Desktop) */}
      <div
        className="relative z-40 max-w-lg w-full bg-[#FFFFFF] rounded-t-3xl sm:rounded-3xl border border-[#E5D2BA] shadow-2xl p-6 sm:p-8 space-y-5 max-h-[92vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        {/* Mobile Drag Indicator Bar */}
        <div className="sm:hidden w-12 h-1.5 bg-[#DDD5C7] rounded-full mx-auto mb-2" />

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-xs font-bold text-[#181615] uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Instant Digital Unlock</span>
          </div>

          <h3 className="font-editorial-h3 text-xl sm:text-2xl font-bold text-[#181615] leading-tight">
            Your customized architectural BOQ and 15% digital savings voucher are ready.
          </h3>

          <p className="text-xs text-[#5E5952] leading-relaxed max-w-md mx-auto">
            Where should we send your itemized breakdown? You've unlocked an estimated{' '}
            <strong className="text-[#3A6B56] font-semibold">{savingsEstimate}</strong> in Sneha Enterprises digital
            savings grant.
          </p>
        </div>

        {/* Lead Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Aditi Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E] transition-all ${
                errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#DDD5C7]'
              }`}
            />
            {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
          </div>

          {/* WhatsApp Number */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>WhatsApp Number (For PDF Estimate Delivery)</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98450 12890"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E] transition-all ${
                errors.whatsappNumber ? 'border-red-400 bg-red-50/20' : 'border-[#DDD5C7]'
              }`}
            />
            {errors.whatsappNumber && (
              <p className="text-[11px] text-red-500">{errors.whatsappNumber}</p>
            )}
          </div>

          {/* Pincode & Society Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5952] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>Project Pincode / Society Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 560103 or Prestige Lakeside Habitat"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-[#181615] bg-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#C8A97E] transition-all ${
                errors.pincode ? 'border-red-400 bg-red-50/20' : 'border-[#DDD5C7]'
              }`}
            />
            {errors.pincode && <p className="text-[11px] text-red-500">{errors.pincode}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-2">
            <RemotionQuoteButton
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full"
              subtitle="Zero hidden costs • 10-Year warranty certificate"
            >
              {isSubmitting ? 'Decrypting BOQ Breakdown...' : 'Reveal Itemized BOQ & Claim 15% Voucher'}
            </RemotionQuoteButton>
          </div>
        </form>

        {/* Security & Anti-Spam Badge */}
        <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-[#8C8479]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3A6B56]" />
            <span>Zero Spam Policy</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3A6B56]" />
            <span>Encrypted Lead Security</span>
          </span>
        </div>
      </div>
    </div>
  );
};
