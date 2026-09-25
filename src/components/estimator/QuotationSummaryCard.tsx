'use client';

import React, { useState } from 'react';
import {
  Download,
  Share2,
  ShieldCheck,
  Clock,
  Sparkles,
  RotateCcw,
  Check,
} from 'lucide-react';
import { BOQCalculationResult, UserLeadData } from '@/lib/types';
import { formatINR, generateBOQCode } from '@/lib/calculatorLogic';

interface QuotationSummaryCardProps {
  result: BOQCalculationResult;
  userData?: UserLeadData;
  onReset: () => void;
}

export const QuotationSummaryCard: React.FC<QuotationSummaryCardProps> = ({
  result,
  userData,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [boqCode] = useState(() => generateBOQCode(result.config));

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ShineX Concierge, I just generated my turnkey BOQ quote [${boqCode}] for my ${result.config} project (${formatINR(
        result.finalDiscountedTotal
      )} with 15% digital grant applied). My name is ${userData?.fullName || 'Client'}, Pincode: ${
        userData?.pincode || 'N/A'
      }. Please confirm my site laser measurement consultation.`
    );
    window.open(`https://wa.me/919845012890?text=${text}`, '_blank');
  };

  const handleDownloadPDF = () => {
    setDownloadSuccess(true);
    // Trigger automated webhook logging & CRM sync
    try {
      const webhookPayload = {
        event: 'boq_pdf_breakdown_requested',
        boqCode,
        config: result.config,
        subtotal: result.subtotal,
        finalTotal: result.finalDiscountedTotal,
        savings: result.discountSavings,
        client: userData || { fullName: 'Valued Client' },
        timestamp: new Date().toISOString(),
      };
      const events = JSON.parse(localStorage.getItem('shinex_webhook_queue') || '[]');
      events.push(webhookPayload);
      localStorage.setItem('shinex_webhook_queue', JSON.stringify(events));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      window.print();
    }, 350);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(boqCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="boq-schedule-document" className="space-y-8 bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#DDD5C7] shadow-xl relative overflow-hidden print:p-0 print:border-none print:shadow-none">
      {/* Top Architectural Print Watermark */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EDE7DC] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-[#181615]">
              Shine<span className="text-[#C8A97E] font-black">X</span>
            </span>
            <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#8C8479] pl-2 border-l border-[#DDD5C7]">
              Turnkey BOQ Schedule
            </span>
          </div>
          <p className="text-xs text-[#5E5952] mt-1 font-medium">
            Prepared under Sneha Enterprises Master Specifications • Valid for 30 Days
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-[#8C8479] font-medium">Reference BOQ No.</p>
            <button
              onClick={handleCopyCode}
              title="Click to copy voucher reference"
              className="font-mono text-xs font-bold text-[#181615] hover:text-[#C8A97E] flex items-center gap-1.5 transition-colors"
            >
              <span>{boqCode}</span>
              {copied ? <Check className="w-3.5 h-3.5 text-[#3A6B56]" /> : <Share2 className="w-3 h-3 text-[#8C8479]" />}
            </button>
          </div>

          <button
            onClick={onReset}
            className="p-2.5 rounded-xl border border-[#DDD5C7] hover:bg-[#F3EFE6] text-[#5E5952] hover:text-[#181615] transition-colors"
            title="Recalculate Estimate"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Financial Breakdown Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F1E6] border border-[#E5D2BA] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Total Price & Discount Pill */}
        <div className="lg:col-span-7 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5D2BA] text-xs font-bold text-[#3A6B56]">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>15% Sneha Enterprises Digital Grant Applied</span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-[#8C8479] font-bold block">
              Final Net Turnkey Investment
            </span>
            <div className="flex items-baseline gap-4 mt-1">
              <span className="font-serif text-3xl sm:text-5xl font-extrabold text-[#181615]">
                {formatINR(result.finalDiscountedTotal)}
              </span>
              <span className="text-sm sm:text-base text-[#8C8479] line-through">
                {formatINR(result.subtotal)}
              </span>
            </div>
          </div>

          <p className="text-xs text-[#3A6B56] font-semibold">
            You save {formatINR(result.discountSavings)} with zero midway escalation guarantee.
          </p>
        </div>

        {/* Action Buttons Cluster */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <button
            onClick={handleSendToWhatsApp}
            className="w-full py-3.5 px-5 rounded-xl bg-[#C8A97E] hover:bg-[#B69566] text-[#181615] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-soft-luxury border border-[#E5D2BA]"
          >
            <Share2 className="w-4 h-4" />
            <span>Send BOQ &amp; Voucher to WhatsApp</span>
          </button>

          <button
            onClick={handleDownloadPDF}
            className="w-full py-3 px-5 rounded-xl bg-[#FFFFFF] hover:bg-[#F3EFE6] text-[#181615] font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-[#DDD5C7]"
          >
            <Download className="w-4 h-4 text-[#C8A97E]" />
            <span>{downloadSuccess ? 'Generating BOQ PDF...' : 'Download PDF Breakdown'}</span>
          </button>
        </div>
      </div>

      {/* Client & Scope Details Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#FBF9F5] border border-[#EDE7DC] text-xs">
        <div>
          <span className="text-[#8C8479] block">Client Name</span>
          <span className="font-semibold text-[#181615]">{userData?.fullName || 'Valued Homeowner'}</span>
        </div>
        <div>
          <span className="text-[#8C8479] block">Configuration</span>
          <span className="font-semibold text-[#181615]">{result.config}</span>
        </div>
        <div>
          <span className="text-[#8C8479] block">Guaranteed Timeline</span>
          <span className="font-semibold text-[#3A6B56]">{result.estimatedTimelineDays} Days Flat</span>
        </div>
        <div>
          <span className="text-[#8C8479] block">Warranty Protection</span>
          <span className="font-semibold text-[#181615]">{result.warrantyPeriodYears} Years Certified</span>
        </div>
      </div>

      {/* Itemized BOQ Line Items Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-editorial-h3 text-lg text-[#181615]">Itemized Schedule of Quantities (BOQ)</h4>
          <span className="text-xs text-[#8C8479]">Inclusive of 18% GST &amp; German Hardware</span>
        </div>

        <div className="overflow-x-auto border border-[#EDE7DC] rounded-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F3EFE6] border-b border-[#EDE7DC] text-[#181615] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-3 px-4">Milestone Scope</th>
                <th className="py-3 px-4">Materials &amp; Engineering Specs</th>
                <th className="py-3 px-4">Hardware Grade</th>
                <th className="py-3 px-4 text-right">Standard Rate</th>
                <th className="py-3 px-4 text-right text-[#3A6B56]">With 15% Grant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE7DC]">
              {result.items.map((item) => (
                <tr key={item.id} className="hover:bg-[#FBF9F5]/70 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#181615] align-top whitespace-nowrap">
                    {item.label}
                  </td>
                  <td className="py-3.5 px-4 text-[#5E5952] align-top max-w-xs">{item.specification}</td>
                  <td className="py-3.5 px-4 text-[#8C8479] align-top">{item.hardware}</td>
                  <td className="py-3.5 px-4 text-right text-[#8C8479] line-through align-top whitespace-nowrap">
                    {formatINR(item.rawAmount)}
                  </td>
                  <td className="py-3.5 px-4 text-right font-semibold text-[#181615] align-top whitespace-nowrap">
                    {formatINR(item.discountedAmount)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#F7F1E6]/70 border-t-2 border-[#DDD5C7] font-semibold text-[#181615]">
              <tr>
                <td colSpan={3} className="py-3.5 px-4 text-right uppercase tracking-wider">
                  Total Contract Value (15% Net Savings Included)
                </td>
                <td className="py-3.5 px-4 text-right line-through text-[#8C8479]">
                  {formatINR(result.subtotal)}
                </td>
                <td className="py-3.5 px-4 text-right text-sm sm:text-base text-[#3A6B56] font-bold">
                  {formatINR(result.finalDiscountedTotal)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Contractual Legal Guarantees Footnote */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EDE7DC] text-xs text-[#5E5952]">
        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
          <p>
            <strong>Penalty Clause:</strong> ₹{result.penaltyClauseRatePerDay}/day delay penalty directly paid to you if
            handover exceeds {result.estimatedTimelineDays} days.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#3A6B56] shrink-0 mt-0.5" />
          <p>
            <strong>Price-Lock Bond:</strong> The grand total above is frozen in contract with Sneha Enterprises upon
            signing. No midway escalations.
          </p>
        </div>

        <div className="flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
          <p>
            <strong>Free Perks:</strong> Includes free 3D VR walkthrough model (₹15,000 value) &amp; complimentary
            bi-annual hardware alignment audits.
          </p>
        </div>
      </div>
    </div>
  );
};
