'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTrack } from '@/context/TrackContext';
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Ruler,
  CheckCircle2,
  Workflow,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface FlowNode {
  id: string;
  step: string;
  title: string;
  tagline: string;
  flowType: string;
  idealFor: string;
  counterRun: string;
  storageCapacity: string;
  workTriangle: string;
  image: string;
  schematicSvg: React.ReactNode;
}

const RESIDENTIAL_FLOW_NODES: FlowNode[] = [
  {
    id: 'l-shape',
    step: '01',
    title: 'L-Shaped Kitchen',
    tagline: 'Smooth Corner Cooking Workflow',
    flowType: 'Corner Layout',
    idealFor: 'Apartments (1 BHK, 2 BHK, 3 BHK)',
    counterRun: '14 – 18 Running Ft',
    storageCapacity: 'Base + Overhead Cabinets',
    workTriangle: 'Quick access between Hob, Sink & Fridge',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 20,80 80,80" />
        <polyline points="35,35 35,65 65,65" strokeDasharray="3 3" className="stroke-gold/50" />
        <path d="M 30,30 Q 50,50 65,75" strokeDasharray="2 2" className="stroke-gold animate-pulse" />
        <circle cx="28" cy="28" r="3" className="fill-gold" />
        <circle cx="72" cy="72" r="3" className="fill-gold" />
      </svg>
    ),
  },
  {
    id: 'parallel',
    step: '02',
    title: 'Parallel Kitchen',
    tagline: 'Dual-Counter Galley Layout',
    flowType: 'High-Capacity Flow',
    idealFor: 'Long Kitchens with Utility Balcony',
    counterRun: '18 – 24 Running Ft',
    storageCapacity: 'Maximum Counter & Tall Unit Storage',
    workTriangle: 'Dual-side layout with zero dead corners',
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <line x1="20" y1="20" x2="20" y2="80" />
        <line x1="80" y1="20" x2="80" y2="80" />
        <line x1="50" y1="25" x2="50" y2="75" strokeDasharray="3 3" className="stroke-gold animate-pulse" />
        <polygon points="50,80 46,72 54,72" className="fill-gold stroke-none" />
      </svg>
    ),
  },
  {
    id: 'u-shape',
    step: '03',
    title: 'U-Shaped Kitchen',
    tagline: '3-Sided Spacious Cooking Area',
    flowType: 'Full Wrap Counter',
    idealFor: 'Large 3 BHK, 4 BHK & Villas',
    counterRun: '22 – 30 Running Ft',
    storageCapacity: 'High-Density Storage + Pantry Unit',
    workTriangle: 'Dedicated zones for Prep, Cook & Wash',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 20,80 80,80 80,20" />
        <polyline points="35,30 35,65 65,65 65,30" strokeDasharray="3 3" className="stroke-gold/50" />
        <polygon points="25,50 50,75 75,50" className="stroke-gold/70 stroke-[1.5]" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'island',
    step: '04',
    title: 'Island Kitchen',
    tagline: 'Center Island with Breakfast Counter',
    flowType: 'Open Luxury Layout',
    idealFor: 'Penthouses & Open-Concept Homes',
    counterRun: '26 – 36 Running Ft',
    storageCapacity: 'Island Drawers + Bar / Pantry Space',
    workTriangle: 'Social Cooking & Family Dining',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 80,20 80,80" />
        <rect x="35" y="45" width="30" height="22" rx="3" className="stroke-gold fill-gold/15" />
        <ellipse cx="50" cy="56" rx="24" ry="18" strokeDasharray="2 2" className="stroke-gold/40 animate-spin origin-center" />
      </svg>
    ),
  },
];

const COMMERCIAL_FLOW_NODES: FlowNode[] = [
  {
    id: 'comm-workstations',
    step: '01',
    title: 'Team Workstations',
    tagline: 'High-Density Ergonomic Desks',
    flowType: 'Open Office Pods',
    idealFor: 'Corporate Teams & IT Back-Offices',
    counterRun: 'Integrated Power & LAN Raceways',
    storageCapacity: 'Individual Lockers & Drawer Units',
    workTriangle: 'Concealed Cable Management',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="25" width="25" height="20" rx="2" />
        <rect x="55" y="25" width="25" height="20" rx="2" />
        <rect x="20" y="55" width="25" height="20" rx="2" />
        <rect x="55" y="55" width="25" height="20" rx="2" />
        <line x1="15" y1="50" x2="85" y2="50" className="stroke-gold/40 stroke-dashed" />
      </svg>
    ),
  },
  {
    id: 'comm-cabins',
    step: '02',
    title: 'Director Cabins',
    tagline: 'Soundproof Glass Cabin Privacy',
    flowType: 'Executive Office',
    idealFor: 'CXOs, Partners & Private Meetings',
    counterRun: 'L-Shaped Executive Veneer Desk',
    storageCapacity: 'Concealed Credenza & Document Storage',
    workTriangle: 'Acoustic Sound Isolation Glass',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="20" width="60" height="60" rx="4" />
        <rect x="35" y="32" width="30" height="15" rx="2" className="fill-gold/15" />
        <circle cx="50" cy="62" r="6" className="stroke-gold" />
      </svg>
    ),
  },
  {
    id: 'comm-boardroom',
    step: '03',
    title: 'Conference Boardroom',
    tagline: '16-Seat Video Conference Suite',
    flowType: 'Meeting Hub',
    idealFor: 'Board Meetings & Client Presentations',
    counterRun: 'Integrated HDMI, Mic & Power Cubbies',
    storageCapacity: 'Flush Credenza Server & AV Rack',
    workTriangle: 'Acoustic Wall Panels + Display Screen',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="35" width="60" height="30" rx="15" className="fill-gold/15" />
        <line x1="20" y1="18" x2="80" y2="18" className="stroke-gold stroke-[3]" />
      </svg>
    ),
  },
  {
    id: 'comm-reception',
    step: '04',
    title: 'Main Reception & Lobby',
    tagline: 'High-Impact Brand Arrival Desk',
    flowType: 'Visitor Greeting Area',
    idealFor: 'Corporate HQs, Clinics & Showrooms',
    counterRun: 'Seamless Corian / Italian Marble Counter',
    storageCapacity: 'Visitor Lounge & Storage Units',
    workTriangle: 'Backlit 3D Company Branding Wall',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <path d="M 20,40 Q 50,25 80,40" />
        <rect x="30" y="55" width="40" height="15" rx="3" className="fill-gold/15" />
      </svg>
    ),
  },
];

export default function LayoutFlowChart() {
  const { track } = useTrack();
  const nodes = track === 'residential' ? RESIDENTIAL_FLOW_NODES : COMMERCIAL_FLOW_NODES;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeNode = nodes[activeIndex] || nodes[0];

  return (
    <div className="mt-14 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-ink-border">
        <div>
          <div className="flex items-center gap-2 text-gold">
            <Workflow size={16} />
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold">
              Interactive Layout Planner
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
            {track === 'residential' ? 'Choose the Perfect Kitchen Layout' : 'Smart Commercial Space Layouts'}
          </h3>
          <p className="text-xs sm:text-sm text-plaster-muted font-sans font-normal mt-1 max-w-xl">
            Compare configurations side-by-side. Tap any layout below to preview the blueprint, counter length, and storage capacity.
          </p>
        </div>

        <Link
          href="/calculator"
          className="shrink-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold hover:text-plaster transition-colors"
        >
          <span>Calculate Your Layout Cost</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* ================= FLOW DIAGRAM CONNECTORS BAR ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative">
        {nodes.map((node, idx) => {
          const isActive = activeIndex === idx;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-ink-card border-gold ring-1 ring-gold shadow-[0_10px_25px_-5px_rgba(158,120,62,0.2)]'
                  : 'bg-ink-card/60 border-ink-border hover:border-gold/50 hover:bg-ink-card'
              }`}
            >
              {/* Top Node Indicator & Step */}
              <div className="flex items-center justify-between pb-2 border-b border-ink-border/50">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-gold text-white' : 'bg-ink text-plaster-dim group-hover:text-gold'
                  }`}
                >
                  Node {node.step}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold">
                  {node.flowType}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="py-2.5">
                <h4 className="text-sm sm:text-base font-serif font-semibold text-plaster group-hover:text-gold transition-colors">
                  {node.title}
                </h4>
                <p className="text-[11px] text-plaster-dim font-sans font-light mt-0.5 leading-snug">
                  {node.tagline}
                </p>
              </div>

              {/* Bottom Active Status Cue */}
              <div className="pt-2 border-t border-ink-border/40 flex items-center justify-between text-[11px]">
                <span className={`font-mono text-[10px] uppercase ${isActive ? 'text-gold font-semibold' : 'text-plaster-dim'}`}>
                  {isActive ? 'Active Blueprint' : 'Tap to View'}
                </span>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${
                    isActive ? 'text-gold translate-x-0.5' : 'text-plaster-dim group-hover:translate-x-0.5'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* ================= INTERACTIVE MOTION STAGE (IMAGE + BLUEPRINT DATA) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-7 rounded-3xl bg-ink-card border border-ink-border shadow-xl overflow-hidden">
        {/* Left Side (7 Cols): Crisp Un-Obscured Architectural Photograph */}
        <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px] rounded-2xl overflow-hidden border border-ink-border skeleton-shimmer">
          <Image
            src={activeNode.image}
            alt={activeNode.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-all duration-700 ease-out will-change-transform"
          />
          {/* Subtle Corner Badge */}
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-ink-card/90 backdrop-blur-md border border-ink-border text-xs font-mono uppercase tracking-wider text-gold shadow-sm">
            {activeNode.title} · Layout Render
          </div>
        </div>

        {/* Right Side (5 Cols): Blueprint Specification & Motion Diagram */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-2 sm:p-4">
          <div className="space-y-4">
            {/* Header + Schematic Vector Diagram */}
            <div className="flex items-center justify-between pb-4 border-b border-ink-border">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
                  Blueprint Schematic
                </span>
                <h4 className="text-xl sm:text-2xl font-serif text-plaster font-semibold mt-0.5">
                  {activeNode.title}
                </h4>
                <p className="text-xs text-plaster-muted font-sans font-light mt-0.5">
                  {activeNode.tagline}
                </p>
              </div>

              {/* Clean Schematic Vector Floorplan Diagram */}
              <div className="p-2.5 rounded-2xl bg-ink border border-ink-border shrink-0 shadow-inner">
                {activeNode.schematicSvg}
              </div>
            </div>

            {/* Architectural Data Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Ideal Spatial Footprint
                </span>
                <span className="font-serif font-medium text-plaster text-xs block">
                  {activeNode.idealFor}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Effective Running Run
                </span>
                <span className="font-serif font-medium text-plaster text-xs block">
                  {activeNode.counterRun}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Storage Volume
                </span>
                <span className="font-serif font-medium text-plaster text-xs block">
                  {activeNode.storageCapacity}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Circulation Rating
                </span>
                <span className="font-serif font-medium text-plaster text-xs block">
                  {activeNode.workTriangle}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA Row */}
          <div className="pt-4 border-t border-ink-border flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/calculator"
              className="btn-luxury w-full sm:flex-1 py-3 px-5 rounded-full bg-gold text-white font-sans font-semibold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 text-center"
            >
              <span>Calculate This Layout</span>
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href={`/quote?service=kitchens&track=${track}`}
              className="w-full sm:w-auto py-3 px-5 rounded-full bg-ink border border-ink-border hover:border-gold/50 text-plaster-muted hover:text-plaster text-xs font-mono uppercase tracking-wider transition-all text-center"
            >
              <span>Direct Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
