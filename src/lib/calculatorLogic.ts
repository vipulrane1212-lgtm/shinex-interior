import {
  PropertyConfig,
  ProjectScope,
  AestheticStyle,
  MaterialTier,
  CalculatorState,
  BOQCalculationResult,
  BOQItem,
} from './types';

// Base Configuration Pricing Matrix (in INR)
export const CONFIG_BASE_PRICES: Record<PropertyConfig, { base: number; label: string; sqft: string }> = {
  '1BHK': { base: 480000, label: '1 BHK Compact Luxury', sqft: '550 - 700 sq.ft' },
  '2BHK': { base: 780000, label: '2 BHK Premium Residence', sqft: '950 - 1,250 sq.ft' },
  '3BHK': { base: 1250000, label: '3 BHK Royal Residence', sqft: '1,500 - 2,100 sq.ft' },
  '4BHK': { base: 1890000, label: '4 BHK / Duplex Penthouse', sqft: '2,400 - 3,500 sq.ft' },
  'Villa': { base: 2850000, label: 'Luxury Sprawling Villa', sqft: '3,800 - 6,500 sq.ft' },
  'Commercial': { base: 1600000, label: 'Boutique Commercial / Atelier', sqft: '1,200 - 3,000 sq.ft' },
};

// Scope Multipliers
export const SCOPE_MULTIPLIERS: Record<ProjectScope, { factor: number; label: string; desc: string }> = {
  full_turnkey: {
    factor: 1.0,
    label: 'Complete Turnkey Home',
    desc: 'Modular Kitchen, All Bedroom Wardrobes, Living & Dining, False Ceiling, Lighting & Civil Finishes',
  },
  kitchen_only: {
    factor: 0.38,
    label: 'Modular Kitchen Specialist Suite',
    desc: 'L/U/Island Chef Suite, Quartz Countertop, Tall Pantry, Spice Pullouts & German Drawers',
  },
  wardrobes_living: {
    factor: 0.58,
    label: 'Living Lounge & Wardrobes Atelier',
    desc: 'Floor-to-Ceiling Wardrobes, Fluted TV Entertainment Wall, Acoustic Paneling & Foyer Credenza',
  },
  renovation: {
    factor: 0.85,
    label: 'Structural Retrofit & Modernization',
    desc: 'Complete Demolition, Rewiring, Countertop Replacement, Flooring Refinishing & New Cabinetry',
  },
};

// Aesthetic Style Factor
export const AESTHETIC_FACTORS: Record<AestheticStyle, { factor: number; label: string; desc: string }> = {
  warm_minimalist: {
    factor: 1.0,
    label: 'Warm Alabaster Minimalist',
    desc: 'Clean architectural profiles, flush finger pulls, soft ambient cove 2700K and organic linen accents',
  },
  modern_classical: {
    factor: 1.12,
    label: 'Contemporary Classical',
    desc: 'Tailored boiserie wall mouldings, satin PU lacquer cabinetry, and knurled champagne brass hardware',
  },
  japandi: {
    factor: 1.06,
    label: 'Japandi Earth & Timber',
    desc: 'Vertical acoustic fluted ash slats, low platform aesthetics, travertine textures and wabi-sabi stillness',
  },
  luxe_contemporary: {
    factor: 1.18,
    label: 'Italian High-Gloss Luxe',
    desc: 'Calacatta gold marble accents, tinted bronze fluted glass doors, and motorized LED sensor profiles',
  },
};

// Material Tier Markup
export const MATERIAL_TIERS: Record<MaterialTier, { markup: number; title: string; subtitle: string; specs: string }> = {
  essential: {
    markup: 1.0,
    title: 'Essential Quality Tier',
    subtitle: 'High durability for urban family rental or smart budget homes',
    specs: 'Boiling-Water-Proof (BWP) Plywood + 1mm Merino Scratch-Resistant Laminate + Soft-Close Standard Hinges',
  },
  premium_german: {
    markup: 1.25,
    title: 'German Precision Tier',
    subtitle: 'Most preferred for owner-occupied luxury apartments',
    specs: 'Action TESA HDHMR + Anti-fingerprint High-Gloss Acrylic + Hettich Sensys Hinges + Blum Metabox Drawers',
  },
  bespoke_veneer: {
    markup: 1.55,
    title: 'Architectural Atelier Tier',
    subtitle: 'Bespoke custom finishes for high-profile private residences',
    specs: 'Marine Grade Calibrated Core + Natural Smoked Oak Veneer / PU Satin Lacquer + Blum Servo-Drive Motorized Units + Caesarstone Quartz',
  },
};

/**
 * Calculates the itemized BOQ using the Master Blueprint formula:
 * Estimated Total = Base Price * Scope Multiplier * Aesthetic Factor * Material Markup
 * Final Discounted Quote = Estimated Total * (1 - 0.15)
 */
export function calculateBOQ(state: CalculatorState): BOQCalculationResult {
  const configData = CONFIG_BASE_PRICES[state.configuration] || CONFIG_BASE_PRICES['3BHK'];
  const scopeData = SCOPE_MULTIPLIERS[state.scope] || SCOPE_MULTIPLIERS['full_turnkey'];
  const aestheticData = AESTHETIC_FACTORS[state.aesthetic] || AESTHETIC_FACTORS['warm_minimalist'];
  const tierData = MATERIAL_TIERS[state.materialTier] || MATERIAL_TIERS['premium_german'];

  // Base raw total calculation
  const calculatedTotal = Math.round(
    configData.base * scopeData.factor * aestheticData.factor * tierData.markup
  );

  const discountPercent = 15;
  const discountSavings = Math.round(calculatedTotal * (discountPercent / 100));
  const finalDiscountedTotal = calculatedTotal - discountSavings;

  // Breakdown generation based on selected scope
  let items: BOQItem[] = [];

  if (state.scope === 'kitchen_only') {
    items = [
      {
        id: 'boq-k-1',
        category: 'Modular Kitchen',
        label: 'Base & Wall Cabinetry Carcass',
        specification: `${tierData.title}: Machine-pressed edge banded HDHMR with moisture shield`,
        hardware: 'Soft-close Blum/Hettich concealed systems',
        rawAmount: Math.round(calculatedTotal * 0.42),
        discountedAmount: Math.round(finalDiscountedTotal * 0.42),
      },
      {
        id: 'boq-k-2',
        category: 'Modular Kitchen',
        label: 'Shutter Facades & Finishes',
        specification: `${aestheticData.label} exterior shutters with seamless laser-edge seal`,
        hardware: 'Integrated J-profile / Knurled champagne handles',
        rawAmount: Math.round(calculatedTotal * 0.28),
        discountedAmount: Math.round(finalDiscountedTotal * 0.28),
      },
      {
        id: 'boq-k-3',
        category: 'Countertops & Sinks',
        label: 'Quartz Stone Countertop & Backsplash',
        specification: 'Seamless 20mm antimicrobial quartz surface with 45-degree mitered edge',
        hardware: 'Undermount sound-insulated granite-composite sink',
        rawAmount: Math.round(calculatedTotal * 0.18),
        discountedAmount: Math.round(finalDiscountedTotal * 0.18),
      },
      {
        id: 'boq-k-4',
        category: 'Pantry & Specialty Units',
        label: 'Tandem Drawer Systems & Spice Carousel',
        specification: 'Heavy-duty 45kg load-bearing drawer organizers with non-slip mats',
        hardware: 'Blum Antaro / Tandembox German motion',
        rawAmount: Math.round(calculatedTotal * 0.12),
        discountedAmount: Math.round(finalDiscountedTotal * 0.12),
      },
    ];
  } else if (state.scope === 'wardrobes_living') {
    items = [
      {
        id: 'boq-w-1',
        category: 'Bedrooms',
        label: 'Master Bedroom Floor-to-Ceiling Wardrobes',
        specification: 'Anti-warp calibrated core with integrated internal sensor warm LED strips',
        hardware: 'Hettich TopLine XL sliding or Sensys 110 soft-close hinges',
        rawAmount: Math.round(calculatedTotal * 0.40),
        discountedAmount: Math.round(finalDiscountedTotal * 0.40),
      },
      {
        id: 'boq-w-2',
        category: 'Living Space',
        label: 'Acoustic Fluted Living Room TV Atelier',
        specification: `${aestheticData.label} wall cladding with concealed cable duct conduits`,
        hardware: 'Floating hydraulic push-to-open low credenza',
        rawAmount: Math.round(calculatedTotal * 0.32),
        discountedAmount: Math.round(finalDiscountedTotal * 0.32),
      },
      {
        id: 'boq-w-3',
        category: 'Storage & Foyer',
        label: 'Foyer Shoe Console & Guest Storage',
        specification: 'Louvered ventilation louvers with champagne metal accents',
        hardware: 'Soft-close concealed hinges and magnetic catches',
        rawAmount: Math.round(calculatedTotal * 0.18),
        discountedAmount: Math.round(finalDiscountedTotal * 0.18),
      },
      {
        id: 'boq-w-4',
        category: 'Fittings',
        label: 'Architectural Lighting & Hardware Package',
        specification: 'Profile lighting channels with 2700K warm diffused light guides',
        hardware: 'Curated champagne architectural pulls',
        rawAmount: Math.round(calculatedTotal * 0.10),
        discountedAmount: Math.round(finalDiscountedTotal * 0.10),
      },
    ];
  } else {
    // Full Turnkey or Renovation
    items = [
      {
        id: 'boq-t-1',
        category: 'Modular Kitchen',
        label: 'Gourmet Kitchen Suite & Tall Pantry Unit',
        specification: `Turnkey German layout: ${tierData.specs}`,
        hardware: 'Blum / Hettich soft-close motion slides, cutlery trays, spice pullout',
        rawAmount: Math.round(calculatedTotal * 0.28),
        discountedAmount: Math.round(finalDiscountedTotal * 0.28),
      },
      {
        id: 'boq-t-2',
        category: 'Bedrooms & Storage',
        label: 'Master & Secondary Bedroom Wardrobes',
        specification: 'Floor-to-ceiling modular storage with accessory drawers, tie racks & dressers',
        hardware: 'Silent-motion sliding tracks and soft-close German hinges',
        rawAmount: Math.round(calculatedTotal * 0.26),
        discountedAmount: Math.round(finalDiscountedTotal * 0.26),
      },
      {
        id: 'boq-t-3',
        category: 'Living & Dining',
        label: 'Architectural Media Unit, Wall Fluting & Foyer',
        specification: `${aestheticData.label} wall paneling, floating credenza & shoe cabinet`,
        hardware: 'Concealed push catches, knurled champagne handles',
        rawAmount: Math.round(calculatedTotal * 0.20),
        discountedAmount: Math.round(finalDiscountedTotal * 0.20),
      },
      {
        id: 'boq-t-4',
        category: 'Ceiling & Lighting',
        label: 'Architectural False Ceiling & Magnetic Track Lights',
        specification: 'Saint-Gobain Gyproc false ceiling with perimeter cove & magnetic tracks',
        hardware: 'Philips/CRI90+ warm 2700K ambient LED fixtures',
        rawAmount: Math.round(calculatedTotal * 0.12),
        discountedAmount: Math.round(finalDiscountedTotal * 0.12),
      },
      {
        id: 'boq-t-5',
        category: 'Civil & Finishing',
        label: 'Countertops, Tiling Polish & Wall Paneling',
        specification: '20mm Premium Quartz slab, Italian marble crystallization, Royale Luxury Emulsion',
        hardware: 'Stainless steel 304 fasteners, laser-level alignment',
        rawAmount: Math.round(calculatedTotal * 0.08),
        discountedAmount: Math.round(finalDiscountedTotal * 0.08),
      },
      {
        id: 'boq-t-6',
        category: 'Engineering & Protection',
        label: 'German Factory Milling, Edge Banding & Delivery',
        specification: 'Homag German PUR edge-banding with zero-joint thermal bonding',
        hardware: 'Protective corrugated bubble wrap & vacuum site sealing',
        rawAmount: Math.round(calculatedTotal * 0.06),
        discountedAmount: Math.round(finalDiscountedTotal * 0.06),
      },
    ];
  }

  // Adjust any rounding discrepancy in items sum vs calculatedTotal
  const itemsRawSum = items.reduce((acc, it) => acc + it.rawAmount, 0);
  if (items.length > 0 && itemsRawSum !== calculatedTotal) {
    items[0].rawAmount += (calculatedTotal - itemsRawSum);
  }
  const itemsDiscSum = items.reduce((acc, it) => acc + it.discountedAmount, 0);
  if (items.length > 0 && itemsDiscSum !== finalDiscountedTotal) {
    items[0].discountedAmount += (finalDiscountedTotal - itemsDiscSum);
  }

  return {
    config: state.configuration,
    scope: state.scope,
    aesthetic: state.aesthetic,
    materialTier: state.materialTier,
    items,
    subtotal: calculatedTotal,
    discountPercent,
    discountSavings,
    finalDiscountedTotal,
    estimatedTimelineDays: state.timeline === 'immediate' ? 40 : 45,
    warrantyPeriodYears: 10,
    penaltyClauseRatePerDay: 1500,
  };
}

/**
 * Format Indian Rupee currency with standard Indian commas (e.g. ₹12,50,000)
 */
export function formatINR(amount: number): string {
  if (isNaN(amount)) return '₹0';
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
}

/**
 * Generate a unique BOQ identification string
 */
export function generateBOQCode(config: PropertyConfig): string {
  const dateStr = new Date().toISOString().slice(2, 7).replace('-', '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `SX-${config}-${dateStr}-${randomSuffix}`;
}
