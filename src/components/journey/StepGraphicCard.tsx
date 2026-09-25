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
  Camera,
} from 'lucide-react';
import { WorkflowMilestone } from '@/lib/types';
import { ParallaxImage } from '@/components/common/ParallaxImage';

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
      className={`group relative rounded-3xl border transition-all duration-500 bg-[#FFFFFF] shadow-soft-luxury hover:shadow-luxury-hover overflow-hidden ${
        isActive
          ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]'
          : 'border-[#EDE7DC] hover:border-[#DDD5C7]'
      }`}
    >
      {/* Featured Visual Header with AI Asset & Smooth Parallax */}
      {milestone.illustrationImage && (
        <ParallaxImage
          src={milestone.illustrationImage}
          alt={milestone.title}
          className="aspect-[16/9] w-full bg-[#F3EFE6]"
          imgClassName="group-hover:brightness-105 transition-all duration-700"
        >
          {/* Subtle Contrast Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/80 via-transparent to-black/15 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#181615] uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 text-[#C8A97E]" />
              <span>{milestone.badge}</span>
            </span>

            <span className="font-mono text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
              {milestone.highlightStat}
            </span>
          </div>

          {/* Bottom Floating Step Identifier */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between text-white pointer-events-none">
            <span className="text-[11px] font-mono tracking-widest text-[#E5D2BA] font-extrabold uppercase drop-shadow-md">
              Phase {milestone.stepNumber} of 05
            </span>
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
              <Camera className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </ParallaxImage>
      )}

      {/* Card Content & Details */}
      <div className="p-6 sm:p-7 space-y-4">
        {/* Milestone Title with Icon */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#F7F1E6] border border-[#E5D2BA] flex items-center justify-center shrink-0 text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-[#181615] transition-colors duration-300">
            <Icon className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-editorial text-2xl font-bold tracking-tight text-[#181615] group-hover:text-[#B69566] transition-colors">
              {milestone.title}
            </h3>
            <p className="text-xs text-[#8C8479] mt-0.5 font-medium">{milestone.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-[#5E5952] leading-relaxed pt-1">
          {milestone.description}
        </p>

        {/* Deliverable & Inspection Standard Footer */}
        <div className="pt-4 border-t border-[#EDE7DC] space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3A6B56] mt-0.5 shrink-0" />
            <div>
              <span className="text-[#8C8479]">Deliverable: </span>
              <span className="font-semibold text-[#181615]">{milestone.keyDeliverable}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            <span className="text-[#8C8479]">Tolerance Standard: </span>
            <span className="font-medium text-[#5E5952]">{milestone.inspectionStandard}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
