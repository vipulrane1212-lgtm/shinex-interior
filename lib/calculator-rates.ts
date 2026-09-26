/**
 * ShineX Cost Calculator — Rate Configuration Seeds
 * 
 * Client: ShineX Infra Solutions
 * Brands: ShineX Interior · ShineX Infra
 * Location: Navi Mumbai / Mumbai Default
 * 
 * All rates are indicative seed values (in ₹ INR).
 * Clients/admins can adjust baseline values and multipliers here.
 */

export interface PriceRange {
  min: number;
  max: number;
}

export interface RateConfig {
  residential: {
    baseBhk: Record<string, PriceRange>;
    scopeMultiplier: Record<string, number>;
    areaRatePerSqFt: PriceRange;
    roomAddons: Record<string, PriceRange>;
  };
  commercial: {
    ratePerSqFt: Record<string, PriceRange>;
    fitoutMultiplier: Record<string, number>;
    itemRates: Record<string, PriceRange>;
  };
  finishMultipliers: {
    essential: number;
    premium: number;
    luxe: number;
  };
  civilAddons: Record<string, PriceRange>;
  bundles: Record<string, { name: string; discountPercent: number; items: string[]; fixedPrice?: PriceRange }>;
}

export const SHINEX_RATES: RateConfig = {
  residential: {
    baseBhk: {
      '1-bhk': { min: 220000, max: 320000 },
      '2-bhk': { min: 380000, max: 540000 },
      '3-bhk': { min: 580000, max: 820000 },
      '4-bhk': { min: 820000, max: 1180000 },
      'villa': { min: 1250000, max: 1850000 },
    },
    scopeMultiplier: {
      'full-home': 1.0,
      'selected-rooms': 0.65,
      'kitchen-only': 0.40,
      'renovation': 0.85,
    },
    areaRatePerSqFt: { min: 950, max: 1550 },
    roomAddons: {
      // Living / Hall
      'living_tv_unit': { min: 45000, max: 95000 },
      'living_ceiling': { min: 28000, max: 55000 },
      'living_feature_wall': { min: 32000, max: 68000 },
      'living_partition': { min: 22000, max: 48000 },
      'living_curtains': { min: 16000, max: 36000 },
      'living_full_package': { min: 135000, max: 275000 },

      // Kitchen Shapes
      'kitchen_straight': { min: 110000, max: 185000 },
      'kitchen_l_shape': { min: 165000, max: 275000 },
      'kitchen_parallel': { min: 185000, max: 310000 },
      'kitchen_u_shape': { min: 220000, max: 365000 },
      'kitchen_island': { min: 275000, max: 460000 },

      // Kitchen Addons
      'kitchen_hob_chimney': { min: 28000, max: 52000 },
      'kitchen_sink_faucet': { min: 14000, max: 26000 },
      'kitchen_tall_unit': { min: 38000, max: 68000 },
      'kitchen_breakfast_counter': { min: 26000, max: 52000 },
      'kitchen_backsplash': { min: 16000, max: 32000 },
      'kitchen_organizers': { min: 20000, max: 40000 },
      'kitchen_appliance_spaces': { min: 12000, max: 24000 },
      'kitchen_full_package': { min: 210000, max: 395000 },

      // Bedroom (Master / Kids / Guest)
      'bedroom_wardrobe_sliding': { min: 75000, max: 135000 },
      'bedroom_wardrobe_hinged': { min: 58000, max: 105000 },
      'bedroom_wardrobe_walkin': { min: 125000, max: 245000 },
      'bedroom_bed_back': { min: 28000, max: 58000 },
      'bedroom_dresser_study': { min: 24000, max: 48000 },
      'bedroom_ceiling': { min: 22000, max: 42000 },
      'bedroom_full_package': { min: 155000, max: 310000 },

      // Bathroom & Utility
      'bathroom_vanity': { min: 22000, max: 46000 },
      'bathroom_mirror_cabinet': { min: 12000, max: 26000 },
      'bathroom_niche': { min: 8000, max: 18000 },
      'bathroom_ceiling': { min: 10000, max: 22000 },
      'utility_washer_stack': { min: 24000, max: 46000 },
      'utility_linen_cupboard': { min: 18000, max: 36000 },
      'utility_mop_sink': { min: 14000, max: 28000 },
      'utility_detergent_storage': { min: 10000, max: 20000 },

      // Other Specialty Joinery
      'other_dining_crockery': { min: 38000, max: 78000 },
      'other_foyer': { min: 22000, max: 46000 },
      'other_pooja_unit': { min: 28000, max: 62000 },
      'other_balcony_storage': { min: 18000, max: 38000 },
      'other_home_study': { min: 36000, max: 76000 },
    },
  },

  commercial: {
    ratePerSqFt: {
      'office': { min: 1400, max: 2400 },
      'retail': { min: 1650, max: 2900 },
      'clinic': { min: 1800, max: 3200 },
      'salon': { min: 1950, max: 3500 },
      'cafe': { min: 1850, max: 3300 },
      'coaching': { min: 1250, max: 2100 },
    },
    fitoutMultiplier: {
      'soft-fitout': 0.75,
      'hard-fitout': 1.15,
      'design-only': 0.20,
    },
    itemRates: {
      'comm_reception': { min: 48000, max: 95000 },
      'comm_workstation': { min: 14500, max: 23500 }, // per seat
      'comm_cabin': { min: 58000, max: 115000 },     // per cabin
      'comm_boardroom': { min: 88000, max: 185000 },
      'comm_pantry': { min: 42000, max: 82000 },
      'comm_brand_wall': { min: 28000, max: 56000 },
      'comm_display_joinery': { min: 38000, max: 86000 },
      'comm_cash_desk': { min: 22000, max: 48000 },
      'comm_trial_room': { min: 18000, max: 38000 },
      'comm_waiting_consult': { min: 46000, max: 92000 },
      'comm_salon_station': { min: 24000, max: 46000 }, // per station
    },
  },

  finishMultipliers: {
    essential: 1.0, // Good
    premium: 1.25,  // Better
    luxe: 1.55,     // Best
  },

  civilAddons: {
    'civil_plumbing': { min: 24000, max: 48000 },
    'civil_waterproofing': { min: 28000, max: 54000 },
    'civil_electrical': { min: 20000, max: 42000 },
    'civil_gas_exhaust': { min: 14000, max: 26000 },
    'civil_flooring': { min: 32000, max: 62000 },
    'civil_painting': { min: 36000, max: 74000 },
    'civil_society_coord': { min: 10000, max: 22000 },
    'civil_leak_repair': { min: 18000, max: 38000 },
  },

  bundles: {
    'kitchen_lock': {
      name: 'Kitchen Lock (Plumbing + Waterproof + Electrical)',
      discountPercent: 15,
      items: ['civil_plumbing', 'civil_waterproofing', 'civil_electrical'],
      fixedPrice: { min: 58000, max: 112000 },
    },
    'bath_utility_pair': {
      name: 'Bath + Utility Anti-Leak Pair',
      discountPercent: 15,
      items: ['civil_plumbing', 'civil_waterproofing', 'civil_flooring'],
      fixedPrice: { min: 65000, max: 125000 },
    },
    'full_wet_package': {
      name: 'Full Wet-Works Overhaul Package',
      discountPercent: 20,
      items: ['civil_plumbing', 'civil_waterproofing', 'civil_electrical', 'civil_flooring', 'civil_gas_exhaust'],
      fixedPrice: { min: 128000, max: 235000 },
    },
  },
};

/**
 * Format currency in Indian Rupees notation:
 * E.g. 350000 -> "₹ 3.5L", 1250000 -> "₹ 12.5L"
 */
export function formatINR(val: number): string {
  if (!val || val <= 0) return '₹ 0';
  if (val >= 10000000) {
    const cr = (val / 10000000).toFixed(2);
    return `₹ ${cr.replace(/\.00$/, '')} Cr`;
  }
  if (val >= 100000) {
    const l = (val / 100000).toFixed(1);
    return `₹ ${l.replace(/\.0$/, '')}L`;
  }
  return `₹ ${Math.round(val).toLocaleString('en-IN')}`;
}

export function formatINRRange(min: number, max: number): string {
  if (!min && !max) return '—';
  return `${formatINR(min)} – ${formatINR(max)}`;
}
