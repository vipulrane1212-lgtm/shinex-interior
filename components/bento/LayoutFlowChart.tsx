'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTrack } from '@/context/TrackContext';
import { resolveImagePath } from '@/lib/designCatalog';
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  Eye,
  DraftingCompass,
  ShieldCheck,
  TrendingUp,
  Maximize2,
  SlidersHorizontal,
} from 'lucide-react';

interface HotspotPin {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  label: string;
  detail: string;
}

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
  efficiencyScore: number;
  startingPrice: string;
  calculatorId: string;
  image: string;
  hotspots: HotspotPin[];
  keyBenefits: string[];
  schematicSvg: React.ReactNode;
  blueprintCadSvg: React.ReactNode;
}

const RESIDENTIAL_FLOW_NODES: FlowNode[] = [
  {
    id: 'l-shape',
    step: '01',
    title: 'L-Shaped Kitchen',
    tagline: 'Smooth Corner Cooking Workflow',
    flowType: 'Corner Layout',
    idealFor: '1 BHK, 2 BHK & 3 BHK Apartments',
    counterRun: '14 – 18 Running Ft',
    storageCapacity: 'Base + Overhead + Magic Corner',
    workTriangle: 'Ergonomic Triangle (Hob ↔ Sink ↔ Fridge)',
    efficiencyScore: 98,
    startingPrice: 'From ₹1.65 Lakh',
    calculatorId: 'kitchen_l_shape',
    image: '/images/designs/kitchen_l_shaped.jpg',
    keyBenefits: [
      'Eliminates corner dead-zones with German swing-out Magic Carousel',
      'Continuous uninterrupted prep platform between wash and cook zones',
      'Allows 2 family members to cook simultaneously without congestion',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 48,
        y: 72,
        label: 'Seamless Quartz Platform',
        detail: '20mm non-porous quartz, stain-proof against turmeric & oil.',
      },
      {
        id: 'p2',
        x: 78,
        y: 62,
        label: 'Blum Soft-Close Drawers',
        detail: 'Heavy-duty 65kg load runners with cutlery & spice organizers.',
      },
      {
        id: 'p3',
        x: 58,
        y: 36,
        label: 'Concealed Suction Chimney',
        detail: '1400 CFM filterless auto-clean chimney with zero visible ducts.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 20,80 80,80" />
        <polyline points="35,35 35,65 65,65" strokeDasharray="3 3" className="stroke-gold/50" />
        <circle cx="28" cy="28" r="3" className="fill-gold" />
        <circle cx="72" cy="72" r="3" className="fill-gold" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        {/* Architectural CAD Grid */}
        <defs>
          <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(158,120,62,0.15)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />

        {/* Walls */}
        <polyline points="40,30 40,240 360,240" fill="none" stroke="#e4e4e7" strokeWidth="6" strokeLinecap="square" />

        {/* L-Shape Counter Platform */}
        <polygon points="43,33 110,33 110,175 357,175 357,237 43,237" fill="rgba(158,120,62,0.22)" stroke="#9e783e" strokeWidth="2" />

        {/* Refrigerator Zone (Top Left) */}
        <rect x="48" y="40" width="55" height="50" fill="#18181b" stroke="#71717a" strokeWidth="1.5" rx="3" />
        <text x="56" y="68" fill="#e4e4e7" fontSize="10" fontWeight="bold">FRIDGE</text>

        {/* Sink Zone (Left Counter Middle) */}
        <rect x="52" y="105" width="48" height="42" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
        <ellipse cx="76" cy="126" rx="16" ry="12" fill="none" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="76" cy="116" r="2.5" fill="#38bdf8" />
        <text x="63" y="140" fill="#38bdf8" fontSize="9">SINK</text>

        {/* Magic Corner Carousel (Corner) */}
        <path d="M 60,195 A 35,35 0 0,1 95,230" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="77" cy="212" r="3" fill="#eab308" />

        {/* Cooking Hob Zone (Bottom Counter) */}
        <rect x="200" y="182" width="65" height="48" fill="#18181b" stroke="#f97316" strokeWidth="1.5" rx="2" />
        <circle cx="218" cy="198" r="7" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="247" cy="198" r="7" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="218" cy="218" r="5" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="247" cy="218" r="5" fill="none" stroke="#f97316" strokeWidth="1" />
        <text x="218" y="210" fill="#f97316" fontSize="9">HOB</text>

        {/* Golden Work Triangle Lines */}
        <polyline points="76,65 76,126 232,206 76,65" fill="none" stroke="#eab308" strokeWidth="1.8" strokeDasharray="4 4" />

        {/* Distance tags */}
        <text x="82" y="100" fill="#fde047" fontSize="9">4.5 FT</text>
        <text x="160" y="155" fill="#fde047" fontSize="9">5.2 FT</text>
        <text x="145" y="125" fill="#fde047" fontSize="9">5.0 FT</text>

        {/* Traffic Clearance Corridor Arrow */}
        <line x1="170" y1="100" x2="300" y2="100" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="2 2" />
        <text x="175" y="94" fill="#a1a1aa" fontSize="9">3.8 FT WALKING CLEARANCE</text>

        {/* Technical Label */}
        <text x="180" y="48" fill="#9e783e" fontSize="10" fontWeight="bold">L-SHAPED BLUEPRINT SPECIFICATION</text>
        <text x="180" y="62" fill="#71717a" fontSize="8">SCALE 1:50 · OPTIMAL ERGONOMIC TRIANGLE: 98%</text>
      </svg>
    ),
  },
  {
    id: 'parallel',
    step: '02',
    title: 'Parallel Kitchen',
    tagline: 'Dual-Counter Galley Layout',
    flowType: 'High-Capacity Galley',
    idealFor: 'Long Kitchens with Balcony Access',
    counterRun: '18 – 24 Running Ft',
    storageCapacity: 'Maximum Counter + Dual Wall Storage',
    workTriangle: 'Opposing Counters (Zero Dead Corners)',
    efficiencyScore: 99,
    startingPrice: 'From ₹1.85 Lakh',
    calculatorId: 'kitchen_parallel',
    image: '/images/designs/kitchen_parallel.jpg',
    keyBenefits: [
      'Dual parallel platforms provide separate wet wash & dry cooking zones',
      'Zero dead-corner wastage — 100% straight pull-out drawer efficiency',
      'Direct unobstructed corridor leading to utility balcony or wash area',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 30,
        y: 68,
        label: 'Wet Washing Counter',
        detail: 'Deep quartz sink with pull-out 360° brass spray faucet.',
      },
      {
        id: 'p2',
        x: 75,
        y: 68,
        label: 'Dry Cooking Counter',
        detail: 'Built-in 4-burner glass hob with concealed gas lines.',
      },
      {
        id: 'p3',
        x: 82,
        y: 35,
        label: 'Floor-to-Ceiling Pantry',
        detail: 'High-capacity pullout larder tower for monthly grocery storage.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <line x1="20" y1="20" x2="20" y2="80" />
        <line x1="80" y1="20" x2="80" y2="80" />
        <line x1="50" y1="25" x2="50" y2="75" strokeDasharray="3 3" className="stroke-gold animate-pulse" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />

        {/* Walls */}
        <line x1="40" y1="30" x2="40" y2="250" stroke="#e4e4e7" strokeWidth="6" />
        <line x1="360" y1="30" x2="360" y2="250" stroke="#e4e4e7" strokeWidth="6" />

        {/* Left Counter (Platform 1 - Wet Zone) */}
        <rect x="43" y="30" width="75" height="220" fill="rgba(158,120,62,0.22)" stroke="#9e783e" strokeWidth="2" />
        {/* Sink */}
        <rect x="52" y="100" width="55" height="50" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
        <circle cx="79" cy="125" r="14" fill="none" stroke="#38bdf8" strokeWidth="1" />
        <text x="63" y="130" fill="#38bdf8" fontSize="9">SINK</text>

        {/* Right Counter (Platform 2 - Cooking & Pantry) */}
        <rect x="282" y="30" width="75" height="220" fill="rgba(158,120,62,0.22)" stroke="#9e783e" strokeWidth="2" />
        {/* Hob */}
        <rect x="290" y="100" width="58" height="50" fill="#18181b" stroke="#f97316" strokeWidth="1.5" rx="2" />
        <circle cx="305" cy="115" r="7" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="333" cy="115" r="7" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="305" cy="135" r="5" fill="none" stroke="#f97316" strokeWidth="1" />
        <circle cx="333" cy="135" r="5" fill="none" stroke="#f97316" strokeWidth="1" />
        <text x="306" y="127" fill="#f97316" fontSize="9">HOB</text>

        {/* Tall Unit Pantry */}
        <rect x="290" y="35" width="58" height="50" fill="#18181b" stroke="#a1a1aa" strokeWidth="1.5" />
        <text x="296" y="63" fill="#e4e4e7" fontSize="9">PANTRY</text>

        {/* Central Walking Corridor Clearance */}
        <line x1="120" y1="140" x2="280" y2="140" stroke="#fde047" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="155" y="135" fill="#fde047" fontSize="9">4.2 FT CLEAR AISLE</text>

        <polyline points="79,125 319,125" stroke="#eab308" strokeWidth="1.8" strokeDasharray="4 4" />
        <text x="160" y="160" fill="#eab308" fontSize="9">DIRECT 1-STEP PIVOT</text>

        <text x="135" y="48" fill="#9e783e" fontSize="10" fontWeight="bold">PARALLEL GALLEY BLUEPRINT</text>
        <text x="135" y="62" fill="#71717a" fontSize="8">DIRECT CHEF PIVOT · EFFICIENCY SCORE: 99%</text>
      </svg>
    ),
  },
  {
    id: 'u-shape',
    step: '03',
    title: 'U-Shaped Kitchen',
    tagline: '3-Sided Spacious Cooking Area',
    flowType: 'Full Wrap Counter',
    idealFor: 'Large 3 BHK, 4 BHK & Luxury Villas',
    counterRun: '22 – 30 Running Ft',
    storageCapacity: 'Maximum Storage + Tall Units + Dual Carousels',
    workTriangle: '3-Wall Discipline (Prep, Cook & Clean Zones)',
    efficiencyScore: 97,
    startingPrice: 'From ₹2.20 Lakh',
    calculatorId: 'kitchen_u_shape',
    image: '/images/designs/kitchen_u_shaped.jpg',
    keyBenefits: [
      'Dedicated individual wall for cooking, washing, and prep preparation',
      'Continuous 3-wall counter wrap maximizes countertop preparation space',
      'Accommodates large built-in appliances including dishwasher & microwave tower',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 25,
        y: 65,
        label: 'Dedicated Prep Ledge',
        detail: 'Deep prep station with under-cabinet warm task illumination.',
      },
      {
        id: 'p2',
        x: 50,
        y: 70,
        label: 'Master Chef Cooking Run',
        detail: 'Central 90cm Italian glass hob with heat-shielded splashback.',
      },
      {
        id: 'p3',
        x: 80,
        y: 55,
        label: 'Double Magic Carousel',
        detail: 'Dual swing-out trays to access 100% of both corner depths.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 20,80 80,80 80,20" />
        <polyline points="35,30 35,65 65,65 65,30" strokeDasharray="3 3" className="stroke-gold/50" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />

        {/* 3 Walls */}
        <polyline points="40,30 40,240 360,240 360,30" fill="none" stroke="#e4e4e7" strokeWidth="6" strokeLinecap="square" />

        {/* U Counter Wrap */}
        <polygon points="43,33 110,33 110,175 290,175 290,33 357,33 357,237 43,237" fill="rgba(158,120,62,0.22)" stroke="#9e783e" strokeWidth="2" />

        {/* Sink on Left Wall */}
        <rect x="52" y="80" width="48" height="50" fill="#18181b" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
        <circle cx="76" cy="105" r="14" fill="none" stroke="#38bdf8" strokeWidth="1" />
        <text x="63" y="110" fill="#38bdf8" fontSize="9">SINK</text>

        {/* Hob on Bottom Wall */}
        <rect x="170" y="182" width="60" height="48" fill="#18181b" stroke="#f97316" strokeWidth="1.5" rx="2" />
        <circle cx="186" cy="198" r="6" fill="none" stroke="#f97316" />
        <circle cx="214" cy="198" r="6" fill="none" stroke="#f97316" />
        <circle cx="186" cy="216" r="4" fill="none" stroke="#f97316" />
        <circle cx="214" cy="216" r="4" fill="none" stroke="#f97316" />
        <text x="187" y="210" fill="#f97316" fontSize="9">HOB</text>

        {/* Fridge / Oven Tower on Right Wall */}
        <rect x="299" y="80" width="50" height="55" fill="#18181b" stroke="#71717a" strokeWidth="1.5" rx="2" />
        <text x="306" y="112" fill="#e4e4e7" fontSize="9">FRIDGE</text>

        {/* Golden Triangle connecting 3 walls */}
        <polygon points="76,105 200,206 324,107" fill="rgba(234,179,8,0.08)" stroke="#eab308" strokeWidth="1.8" strokeDasharray="4 4" />
        <text x="110" y="165" fill="#fde047" fontSize="9">5.5 FT</text>
        <text x="255" y="165" fill="#fde047" fontSize="9">5.5 FT</text>
        <text x="180" y="95" fill="#fde047" fontSize="9">6.0 FT</text>

        <text x="135" y="48" fill="#9e783e" fontSize="10" fontWeight="bold">U-SHAPED 3-WALL BLUEPRINT</text>
        <text x="135" y="62" fill="#71717a" fontSize="8">MAX COUNTER RUN · 3-WALL DISCIPLINE: 97%</text>
      </svg>
    ),
  },
  {
    id: 'island',
    step: '04',
    title: 'Island Kitchen',
    tagline: 'Center Island with Breakfast Counter',
    flowType: 'Open Luxury Layout',
    idealFor: 'Penthouses, Duplexes & Open Layout Homes',
    counterRun: '26 – 36 Running Ft',
    storageCapacity: 'Island Drawers + Bar Unit + Floor-to-Ceiling Wall',
    workTriangle: '360° Social Island (Cooking + Dining Connection)',
    efficiencyScore: 96,
    startingPrice: 'From ₹2.75 Lakh',
    calculatorId: 'kitchen_island',
    image: '/images/designs/kitchen_island.jpg',
    keyBenefits: [
      'Central freestanding island functions as social table and dining breakfast bar',
      '360° unobstructed walkway allows family members to gather while cooking',
      'Concealed pop-up electrical charging sockets for kitchen appliances and laptops',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 50,
        y: 60,
        label: 'Calacatta Marble Island',
        detail: 'Monolithic waterfall edges with cantilevered bar seating.',
      },
      {
        id: 'p2',
        x: 25,
        y: 40,
        label: 'Appliance Garage',
        detail: 'Concealed sliding pocket doors housing oven, microwave & coffee bar.',
      },
      {
        id: 'p3',
        x: 78,
        y: 45,
        label: 'Wine Cooler & Bar Units',
        detail: 'Built-in dual-zone temperature wine chiller and tinted stemware rack.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,20 80,20 80,80" />
        <rect x="35" y="45" width="30" height="22" rx="3" className="stroke-gold fill-gold/15" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />

        {/* L-Shape Main Counter Wall */}
        <polyline points="40,30 40,240 360,240" fill="none" stroke="#e4e4e7" strokeWidth="6" strokeLinecap="square" />
        <polygon points="43,33 110,33 110,175 357,175 357,237 43,237" fill="rgba(158,120,62,0.18)" stroke="#9e783e" strokeWidth="1.5" />

        {/* Center Freestanding Island Table */}
        <rect x="155" y="75" width="130" height="70" fill="rgba(158,120,62,0.3)" stroke="#9e783e" strokeWidth="2.5" rx="4" />
        <text x="180" y="115" fill="#fde047" fontSize="10" fontWeight="bold">CENTER ISLAND</text>

        {/* 3 Bar Stools */}
        <circle cx="180" cy="55" r="9" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
        <circle cx="220" cy="55" r="9" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
        <circle cx="260" cy="55" r="9" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />

        {/* 360 Circulation Orbit */}
        <ellipse cx="220" cy="110" rx="95" ry="55" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        <text x="165" y="170" fill="#38bdf8" fontSize="8">360° PERIMETER WALKWAY</text>

        <text x="145" y="28" fill="#9e783e" fontSize="10" fontWeight="bold">ISLAND SUITE BLUEPRINT</text>
        <text x="145" y="42" fill="#71717a" fontSize="8">SOCIAL BREAKFAST & CHEF ISLAND: 96%</text>
      </svg>
    ),
  },
];

const COMMERCIAL_FLOW_NODES: FlowNode[] = [
  {
    id: 'comm-workstations',
    step: '01',
    title: 'Office Desks & Cubicles',
    tagline: 'High-Density Ergonomic Desks',
    flowType: 'Open Office Pods',
    idealFor: 'Corporate Teams & IT Back-Offices',
    counterRun: 'Integrated Power & LAN Raceways',
    storageCapacity: 'Individual Lockers & Drawer Units',
    workTriangle: 'Concealed Cable Management',
    efficiencyScore: 98,
    startingPrice: '₹14,500 / Seat',
    calculatorId: 'comm_workstation',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Dual-channel raceways prevent tangled cables and tripped network lines',
      'Acoustic fabric desk dividers reduce conversational office distractions',
      'Modular expanding grid allows easy headcount scaling without rebuilding',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 35,
        y: 60,
        label: 'Cable Raceway Grid',
        detail: 'Concealed dual-channel power, data & HDMI connectivity.',
      },
      {
        id: 'p2',
        x: 65,
        y: 55,
        label: 'Acoustic Desk Screens',
        detail: 'Sound-dampening fabric partition dividers.',
      },
      {
        id: 'p3',
        x: 50,
        y: 75,
        label: 'Ergonomic Task Chairs',
        detail: 'BIFMA certified mesh chairs with lumbar adjustment.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="25" width="25" height="20" rx="2" />
        <rect x="55" y="25" width="25" height="20" rx="2" />
        <rect x="20" y="55" width="25" height="20" rx="2" />
        <rect x="55" y="55" width="25" height="20" rx="2" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <rect x="60" y="60" width="120" height="70" fill="rgba(158,120,62,0.2)" stroke="#9e783e" strokeWidth="2" rx="4" />
        <rect x="220" y="60" width="120" height="70" fill="rgba(158,120,62,0.2)" stroke="#9e783e" strokeWidth="2" rx="4" />
        <rect x="60" y="150" width="120" height="70" fill="rgba(158,120,62,0.2)" stroke="#9e783e" strokeWidth="2" rx="4" />
        <rect x="220" y="150" width="120" height="70" fill="rgba(158,120,62,0.2)" stroke="#9e783e" strokeWidth="2" rx="4" />
        <line x1="40" y1="140" x2="360" y2="140" stroke="#fde047" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="145" y="136" fill="#fde047" fontSize="9">4.5 FT CENTRAL TRAFFIC AISLE</text>
        <text x="140" y="40" fill="#9e783e" fontSize="10" fontWeight="bold">AGILE WORKPOD CLUSTER CAD</text>
      </svg>
    ),
  },
  {
    id: 'comm-cabins',
    step: '02',
    title: 'Boss / Director Cabins',
    tagline: 'Soundproof Glass Cabin Privacy',
    flowType: 'Executive Office',
    idealFor: 'CXOs, Partners & Private Meetings',
    counterRun: 'L-Shaped Executive Veneer Desk',
    storageCapacity: 'Concealed Credenza & Document Storage',
    workTriangle: 'Acoustic Sound Isolation Glass',
    efficiencyScore: 97,
    startingPrice: 'From ₹58,000 / Cabin',
    calculatorId: 'comm_cabin',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Double-glazed acoustic partitions provide complete speech privacy',
      'Integrated executive credenza keeps financial files and safe lockers hidden',
      'Private 1-on-1 discussion lounge for confidential client alignments',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 45,
        y: 65,
        label: 'Executive Veneer Desk',
        detail: 'Italian smoked walnut finish with flush wire grommets.',
      },
      {
        id: 'p2',
        x: 80,
        y: 50,
        label: 'Private Discussion Lounge',
        detail: 'Comfortable leatherette sofa seating for 1-on-1 chats.',
      },
      {
        id: 'p3',
        x: 25,
        y: 40,
        label: 'Double-Glazed Partition',
        detail: 'Acoustic glass wall with 42dB sound privacy.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="20" width="60" height="60" rx="4" />
        <rect x="35" y="32" width="30" height="15" rx="2" className="fill-gold/15" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <rect x="40" y="30" width="320" height="210" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="70" y="60" width="130" height="55" fill="rgba(158,120,62,0.25)" stroke="#9e783e" strokeWidth="2" rx="3" />
        <text x="85" y="92" fill="#fde047" fontSize="9" fontWeight="bold">DIRECTOR DESK</text>
        <circle cx="135" cy="140" r="14" fill="#18181b" stroke="#71717a" strokeWidth="1.5" />
        <rect x="235" y="70" width="100" height="130" fill="rgba(158,120,62,0.15)" stroke="#9e783e" strokeWidth="1.5" rx="4" />
        <text x="245" y="140" fill="#a1a1aa" fontSize="9">SOFA LOUNGE</text>
        <text x="140" y="48" fill="#9e783e" fontSize="10" fontWeight="bold">EXECUTIVE CABIN CAD</text>
      </svg>
    ),
  },
  {
    id: 'comm-boardroom',
    step: '03',
    title: 'Soundproof Meeting Rooms',
    tagline: '16-Seat Video Conference Suite',
    flowType: 'Meeting Hub',
    idealFor: 'Board Meetings & Client Presentations',
    counterRun: 'Integrated HDMI, Mic & Power Cubbies',
    storageCapacity: 'Flush Credenza Server & AV Rack',
    workTriangle: 'Acoustic Wall Panels + Display Screen',
    efficiencyScore: 98,
    startingPrice: 'From ₹88,000',
    calculatorId: 'comm_boardroom',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'Bookmatched conference table with flush motorized connectivity hubs',
      'Acoustic wall paneling eliminates sound echoes on Zoom and Teams calls',
      'Engineered sightlines ensure every attendee has an unobstructed screen view',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 50,
        y: 65,
        label: '16-Seat Conference Table',
        detail: 'Bookmatched Italian marble top with pop-up power cubbies.',
      },
      {
        id: 'p2',
        x: 50,
        y: 30,
        label: '4K Video Wall & Audio',
        detail: 'Dual display integration with ceiling microphone array.',
      },
      {
        id: 'p3',
        x: 85,
        y: 45,
        label: 'Acoustic Slat Walls',
        detail: 'Laser-cut oak timber slats with acoustic rockwool backing.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <rect x="20" y="35" width="60" height="30" rx="15" className="fill-gold/15" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <rect x="90" y="70" width="220" height="110" rx="55" fill="rgba(158,120,62,0.25)" stroke="#9e783e" strokeWidth="2.5" />
        <text x="145" y="130" fill="#fde047" fontSize="10" fontWeight="bold">CONFERENCE TABLE (16 SEATS)</text>
        <rect x="150" y="25" width="100" height="12" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" rx="2" />
        <text x="165" y="34" fill="#0c4a6e" fontSize="8" fontWeight="bold">4K VIDEO WALL</text>
        <text x="140" y="210" fill="#9e783e" fontSize="10" fontWeight="bold">BOARDROOM AV BLUEPRINT</text>
      </svg>
    ),
  },
  {
    id: 'comm-reception',
    step: '04',
    title: 'Main Reception & Waiting Areas',
    tagline: 'High-Impact Brand Arrival Desk',
    flowType: 'Visitor Greeting Area',
    idealFor: 'Corporate HQs, Clinics & Showrooms',
    counterRun: 'Seamless Corian / Italian Marble Counter',
    storageCapacity: 'Visitor Lounge & Storage Units',
    workTriangle: 'Backlit 3D Company Branding Wall',
    efficiencyScore: 99,
    startingPrice: 'From ₹48,000',
    calculatorId: 'comm_reception',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    keyBenefits: [
      'High-impact illuminated 3D logo wall sets premium first impression',
      'Concealed visitor badge printer and reception PC management raceway',
      'Comfortable acoustic waiting alcove with guest beverage hospitality station',
    ],
    hotspots: [
      {
        id: 'p1',
        x: 45,
        y: 65,
        label: 'Backlit Reception Desk',
        detail: 'Translucent onyx counter with brushed champagne metal trim.',
      },
      {
        id: 'p2',
        x: 50,
        y: 25,
        label: '3D Company Logo Wall',
        detail: 'CNC-cut acrylic/metal backlit logo feature backdrop.',
      },
      {
        id: 'p3',
        x: 80,
        y: 60,
        label: 'VIP Waiting Lounge',
        detail: 'Curated lounge seating with natural indoor plant planters.',
      },
    ],
    schematicSvg: (
      <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-gold fill-none stroke-[2.5]" strokeLinecap="round">
        <path d="M 20,40 Q 50,25 80,40" />
        <rect x="30" y="55" width="40" height="15" rx="3" className="fill-gold/15" />
      </svg>
    ),
    blueprintCadSvg: (
      <svg viewBox="0 0 400 280" className="w-full h-full text-zinc-300 font-mono text-[10px]">
        <rect width="100%" height="100%" fill="#0a0d14" />
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
        <path d="M 80,110 Q 200,80 320,110" fill="none" stroke="#9e783e" strokeWidth="12" strokeLinecap="round" />
        <text x="145" y="105" fill="#fde047" fontSize="9" fontWeight="bold">CURVED RECEPTION DESK</text>
        <line x1="70" y1="50" x2="330" y2="50" stroke="#f43f5e" strokeWidth="4" />
        <text x="150" y="44" fill="#f43f5e" fontSize="9" fontWeight="bold">BACKLIT BRAND WALL</text>
        <rect x="90" y="160" width="220" height="60" fill="rgba(158,120,62,0.15)" stroke="#9e783e" strokeWidth="1.5" rx="8" />
        <text x="155" y="195" fill="#a1a1aa" fontSize="9">VIP VISITOR LOUNGE</text>
        <text x="135" y="245" fill="#9e783e" fontSize="10" fontWeight="bold">RECEPTION ATRIUM CAD</text>
      </svg>
    ),
  },
];

export default function LayoutFlowChart() {
  const { track } = useTrack();
  const nodes = track === 'residential' ? RESIDENTIAL_FLOW_NODES : COMMERCIAL_FLOW_NODES;
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [activeHotspot, setActiveHotspot] = useState<HotspotPin | null>(null);

  const activeNode = nodes[activeIndex] || nodes[0];

  return (
    <div className="mt-16 space-y-8">
      {/* ================= SECTION HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-ink-border">
        <div className="space-y-2 max-w-2xl">
          <div className="uiverse-pill">
            <div className="uiverse-blob1" />
            <div className="uiverse-blob2" />
            <div className="uiverse-inner">
              <Workflow size={14} className="text-cyan-300 shrink-0" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-white drop-shadow">
                Interactive Layout Planner
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-plaster font-semibold tracking-tight">
            {track === 'residential'
              ? 'Choose & Preview Your Ideal Kitchen Layout'
              : 'Architectural Office & Commercial Space Layouts'}
          </h3>
          <p className="text-xs sm:text-sm text-plaster-muted font-sans font-light">
            Tap any layout card below to preview the photorealistic 3D interior render, technical 2D CAD blueprint, and live indicative pricing.
          </p>
        </div>

        <Link
          href="/calculator"
          className="btn-luxury shrink-0 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md inline-flex items-center gap-2 self-start md:self-auto"
        >
          <span>Calculate All Rates</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* ================= VISUAL SELECTOR CARDS (SQUARE AI THUMBNAILS) ================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {nodes.map((node, idx) => {
          const isActive = activeIndex === idx;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => {
                setActiveIndex(idx);
                setActiveHotspot(null);
              }}
              className={`group relative text-left p-3 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                isActive
                  ? 'bg-ink-card border-gold ring-2 ring-gold/60 shadow-[0_12px_28px_-6px_rgba(158,120,62,0.35)] -translate-y-1'
                  : 'bg-ink-card/60 border-ink-border hover:border-gold/50 hover:bg-ink-card hover:-translate-y-0.5'
              }`}
            >
              {/* Square AI Thumbnail Preview */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-ink-border mb-3 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolveImagePath(node.image)}
                  alt={node.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Active Indicator Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-bold shadow-md ${
                      isActive
                        ? 'bg-gold text-white border border-gold-light'
                        : 'bg-black/75 text-zinc-300 border border-white/20'
                    }`}
                  >
                    {isActive ? 'Active' : `0${idx + 1}`}
                  </span>
                </div>

                {/* Quick Running Ft Pill */}
                <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between text-[10px] font-mono text-zinc-200">
                  <span className="truncate">{node.flowType}</span>
                </div>
              </div>

              {/* Title & Indian Client Friendly Subtitle */}
              <div className="space-y-1">
                <h4
                  className={`text-sm sm:text-base font-serif font-medium leading-snug transition-colors ${
                    isActive ? 'text-gold' : 'text-plaster group-hover:text-gold'
                  }`}
                >
                  {node.title}
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono text-plaster-muted">
                    {node.counterRun}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-gold">
                    {node.startingPrice.replace('From ', '')}
                  </span>
                </div>
              </div>

              {/* Cosmic Bottom Sheen on Active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
            </button>
          );
        })}
      </div>

      {/* ================= INTERACTIVE STUDIO STAGE (DUAL-MODE VISUALIZER) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8 rounded-3xl bg-ink-card border border-ink-border shadow-2xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

        {/* LEFT CANVAS (7 COLS): 3D PHOTOREALISTIC RENDER OR 2D TECHNICAL BLUEPRINT */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          {/* Dual-Mode Mode Switcher Toolbar */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold font-bold">
                Viewport Mode:
              </span>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1 rounded-full bg-black/60 border border-ink-border shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode('3d')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === '3d'
                    ? 'bg-gold text-white font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Eye size={12} />
                <span>3D Render</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('2d')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === '2d'
                    ? 'bg-cyan-500 text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <DraftingCompass size={12} />
                <span>2D Blueprint CAD</span>
              </button>
            </div>
          </div>

          {/* Canvas Box */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] rounded-2xl overflow-hidden border border-ink-border bg-black flex-1 shadow-inner">
            {viewMode === '3d' ? (
              <>
                {/* 3D Photorealistic Render */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resolveImagePath(activeNode.image)}
                  alt={activeNode.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out will-change-transform"
                />

                {/* Subtle dark gradient for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-wider text-gold shadow-md">
                  {activeNode.title} · 3D Handover View
                </div>

                {/* Interactive Hotspot Pins */}
                {activeNode.hotspots.map((pin) => {
                  const isSelected = activeHotspot?.id === pin.id;

                  return (
                    <div
                      key={pin.id}
                      className="absolute z-20"
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(isSelected ? null : pin)}
                        className="group/pin relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/85 border-2 border-gold flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-[0_0_20px_rgba(158,120,62,0.8)]"
                        aria-label={pin.label}
                      >
                        {/* Pulsing ring */}
                        <span className="absolute -inset-1 rounded-full border border-gold/70 animate-ping opacity-75" />
                        <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                      </button>

                      {/* Tooltip Card */}
                      {isSelected && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-30 w-56 sm:w-64 p-3 rounded-xl bg-black/95 backdrop-blur-xl border border-gold/60 text-left shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                          <div className="flex items-center justify-between pb-1 border-b border-white/10 mb-1.5">
                            <span className="text-[10px] uppercase font-mono font-bold text-gold">
                              {pin.label}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                            {pin.detail}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Hint Bar at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-300">
                    💡 Tap glowing pins to inspect materials
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
                    ● Real Site Dimension
                  </span>
                </div>
              </>
            ) : (
              <div className="w-full h-full p-2 flex flex-col justify-between relative">
                {/* 2D CAD Blueprint Floorplan Diagram */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                  {activeNode.blueprintCadSvg}
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                    CAD Mode · Golden Work Triangle & Walking Clearances
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT DASHBOARD (5 COLS): ARCHITECTURAL SCORECARD & SPACE MATCHER */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            {/* Header + Efficiency Meter */}
            <div className="pb-4 border-b border-ink-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-bold block">
                  Architectural Metric Profile
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-400">
                  <TrendingUp size={11} />
                  <span>{activeNode.efficiencyScore}% Efficiency</span>
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-serif text-plaster font-semibold">
                {activeNode.title}
              </h4>
              <p className="text-xs text-plaster-muted font-sans font-light">
                {activeNode.tagline}
              </p>
            </div>

            {/* 4 Architectural Metric Cards */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Best Space Match
                </span>
                <span className="font-serif font-medium text-plaster text-xs block leading-tight">
                  {activeNode.idealFor}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Platform Length
                </span>
                <span className="font-serif font-medium text-plaster text-xs block leading-tight text-gold">
                  {activeNode.counterRun}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Storage Capacity
                </span>
                <span className="font-serif font-medium text-plaster text-xs block leading-tight">
                  {activeNode.storageCapacity}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-ink border border-ink-border space-y-1">
                <span className="text-[10px] font-mono uppercase text-plaster-dim block">
                  Starting Price
                </span>
                <span className="font-serif font-medium text-plaster text-xs block leading-tight text-emerald-400 font-bold">
                  {activeNode.startingPrice}
                </span>
              </div>
            </div>

            {/* Key Engineering Inclusions */}
            <div className="p-4 rounded-xl bg-ink/70 border border-ink-border space-y-2.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-gold font-bold block">
                Why Clients Choose This Layout:
              </span>
              <ul className="space-y-2">
                {activeNode.keyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-xs text-zinc-300 font-sans leading-relaxed">
                    <CheckCircle2 size={13} className="text-gold shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="pt-4 border-t border-ink-border flex flex-col sm:flex-row items-center gap-3">
            <Link
              href={`/calculator?service=kitchen&shape=${activeNode.calculatorId}&track=${track}`}
              className="btn-luxury w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gold hover:bg-gold-dark text-white font-sans font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <span>Calculate This Layout Cost</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href={`/quote?service=kitchens&layout=${activeNode.id}&track=${track}`}
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-ink border border-ink-border hover:border-gold/60 text-plaster hover:text-gold text-xs font-mono uppercase tracking-wider transition-all text-center"
            >
              <span>Get 3D Blueprint</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
