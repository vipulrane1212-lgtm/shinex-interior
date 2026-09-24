'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  ShieldCheck,
  Factory,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { WorkflowMilestone } from '@/lib/types';

interface StepGraphicCardProps {
  milestone: WorkflowMilestone;
  isEven: boolean;
  isActive?: boolean;
}

export const StepGraphicCard: React.FC<StepGraphicCardProps> = ({
  milestone,
  isEven: _isEven,
  isActive = false,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    ShieldCheck,
    Factory,
    Clock,
    Award,
  };

  const Icon = iconMap[milestone.icon] || Sparkles;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`group relative p-6 sm:p-8 rounded-3xl border transition-all duration-500 bg-[#FFFFFF] shadow-soft-luxury hover:shadow-luxury-hover ${
        isActive
          ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]'
          : 'border-[#EDE7DC] hover:border-[#DDD5C7]'
      }`}
    >
      {/* Decorative Pill Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F1E6] border border-[#E5D2BA] text-[11px] font-semibold tracking-wider text-[#181615] uppercase">
          <Sparkles className="w-3 h-3 text-[#C8A97E]" />
          <span>{milestone.badge}</span>
        </span>

        <span className="font-mono text-xs font-semibold text-[#8C8479] bg-[#F3EFE6] px-2.5 py-1 rounded-full">
          {milestone.highlightStat}
        </span>
      </div>

      {/* Milestone Number & Title */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#F7F1E6] border border-[#E5D2BA] flex items-center justify-center shrink-0 text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-[#181615] transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        <div>
          <span className="text-[11px] font-mono tracking-widest text-[#C8A97E] font-bold block uppercase">
            Milestone {milestone.stepNumber}
          </span>
          <h3 className="font-serif text-xl font-medium text-[#181615] group-hover:text-[#B69566] transition-colors">
            {milestone.title}
          </h3>
          <p className="text-xs text-[#8C8479] mt-0.5">{milestone.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-[#5E5952] leading-relaxed mt-4 pt-4 border-t border-[#EDE7DC]">
        {milestone.description}
      </p>

      {/* Deliverable & Inspection Pill Footer */}
      <div className="mt-5 pt-4 border-t border-[#EDE7DC] space-y-2 text-xs">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#3A6B56] mt-0.5 shrink-0" />
          <div>
            <span className="text-[#8C8479]">Key Deliverable: </span>
            <span className="font-semibold text-[#181615]">{milestone.keyDeliverable}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
          <span className="text-[#8C8479]">Tolerance Standard: </span>
          <span className="font-medium text-[#5E5952]">{milestone.inspectionStandard}</span>
        </div>
      </div>
    </motion.div>
  );
};
