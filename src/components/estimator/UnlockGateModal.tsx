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
    const cleanPhone = formData.whatsappNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      errs.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
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
    setTimeout(() => {
      onUnlock(formData);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
      {/* Dark frosted luxury backdrop */}
      <div className="absolute inset-0 bg-[#181615]/35 backdrop-blur-md transition-all duration-500 rounded-3xl" />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-40 max-w-lg w-full bg-[#FFFFFF] rounded-3xl border border-[#E5D2BA] shadow-2xl p-6 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-xs font-semibold text-[#181615] uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Instant Digital Unlock</span>
          </div>

          <h3 className="font-editorial-h3 text-2xl text-[#181615]">
            Your Custom BOQ &amp; 15% Grant Voucher Are Ready
          </h3>

          <p className="text-xs text-[#5E5952] leading-relaxed max-w-sm mx-auto">
            You've unlocked an estimated <strong className="text-[#3A6B56] font-semibold">{savingsEstimate}</strong> in
            Sneha Enterprises digital savings. Enter your contact details to reveal the itemized schedule of quantities.
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-4 px-6 rounded-2xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] font-semibold text-xs uppercase tracking-widest shadow-soft-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#E5D2BA]"
          >
            {isSubmitting ? (
              <span>Decrypting BOQ Breakdown...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Reveal Itemized BOQ &amp; Claim 15% Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
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
      </motion.div>
    </div>
  );
};
