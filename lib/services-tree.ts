/**
 * ShineX Canonical Service Tree
 * 
 * Legal Entity: ShineX Infra Solutions
 * Operating Brands:
 *  - ShineX Interior (Residential & Commercial Fit-outs)
 *  - ShineX Infra (Civil Works, Waterproofing, MEP, Structural Contracting)
 */

export interface SubServiceItem {
  id: string;
  name: string;
  category: string;
  description?: string;
  priceKey?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  brand: 'ShineX Interior' | 'ShineX Infra';
  description: string;
  items: SubServiceItem[];
}

export const RESIDENTIAL_SERVICE_TREE: ServiceCategory[] = [
  {
    id: 'living',
    title: 'Living & Social Lounges',
    brand: 'ShineX Interior',
    description: 'Cinematic entertainment consoles, acoustic fluted panels, and architectural ceilings.',
    items: [
      { id: 'living_tv_unit', name: 'Floating TV Console & Media Unit', category: 'living', priceKey: 'living_tv_unit' },
      { id: 'living_ceiling', name: 'Architectural False Ceiling with Warm LEDs', category: 'living', priceKey: 'living_ceiling' },
      { id: 'living_feature_wall', name: 'Veneer / Charcoal Fluted Feature Wall', category: 'living', priceKey: 'living_feature_wall' },
      { id: 'living_partition', name: 'Metal & Fluted Glass Divider Partition', category: 'living', priceKey: 'living_partition' },
      { id: 'living_curtains', name: 'Motorized Drapery Track & Acoustic Blinds', category: 'living', priceKey: 'living_curtains' },
      { id: 'living_full_package', name: 'Turnkey Living Room Complete Package', category: 'living', priceKey: 'living_full_package' },
    ],
  },
  {
    id: 'kitchen',
    title: 'Architectural Kitchens',
    brand: 'ShineX Interior',
    description: 'Factory-precision modular kitchens with Blum soft-close hardware & quartz stone.',
    items: [
      { id: 'kitchen_l_shape', name: 'L-Shaped Ergonomic Layout', category: 'kitchen', priceKey: 'kitchen_l_shape' },
      { id: 'kitchen_u_shape', name: 'U-Shaped Chef Configuration', category: 'kitchen', priceKey: 'kitchen_u_shape' },
      { id: 'kitchen_parallel', name: 'Parallel Galley Modular Layout', category: 'kitchen', priceKey: 'kitchen_parallel' },
      { id: 'kitchen_island', name: 'Monolithic Center Island Kitchen', category: 'kitchen', priceKey: 'kitchen_island' },
      { id: 'kitchen_straight', name: 'Straight Studio Kitchen Run', category: 'kitchen', priceKey: 'kitchen_straight' },
      { id: 'kitchen_hob_chimney', name: 'Built-In Hob & High-CFM Suction Chimney', category: 'kitchen', priceKey: 'kitchen_hob_chimney' },
      { id: 'kitchen_sink_faucet', name: 'Quartz Sink & Pull-out Brass Faucet', category: 'kitchen', priceKey: 'kitchen_sink_faucet' },
      { id: 'kitchen_tall_unit', name: 'Tall Pantry & Larder Pull-out Tower', category: 'kitchen', priceKey: 'kitchen_tall_unit' },
      { id: 'kitchen_breakfast_counter', name: 'Cantilevered Breakfast Dining Bar', category: 'kitchen', priceKey: 'kitchen_breakfast_counter' },
      { id: 'kitchen_backsplash', name: 'Seamless Slab Quartz / Subway Backsplash', category: 'kitchen', priceKey: 'kitchen_backsplash' },
      { id: 'kitchen_organizers', name: 'Blum Tandem Cutlery & Spice Organizers', category: 'kitchen', priceKey: 'kitchen_organizers' },
      { id: 'kitchen_appliance_spaces', name: 'Integrated Microwave & Dishwasher Niches', category: 'kitchen', priceKey: 'kitchen_appliance_spaces' },
      { id: 'kitchen_full_package', name: 'Master Kitchen Turnkey Package', category: 'kitchen', priceKey: 'kitchen_full_package' },
    ],
  },
  {
    id: 'bedroom',
    title: 'Master & Guest Suites',
    brand: 'ShineX Interior',
    description: 'Floor-to-ceiling wardrobes, cushioned acoustic bed backs, and concealed dressing nooks.',
    items: [
      { id: 'bedroom_wardrobe_sliding', name: 'Floor-to-Ceiling Sliding Wardrobe (Soft-Close)', category: 'bedroom', priceKey: 'bedroom_wardrobe_sliding' },
      { id: 'bedroom_wardrobe_hinged', name: 'Push-to-Open Hinged Wardrobe with Loft', category: 'bedroom', priceKey: 'bedroom_wardrobe_hinged' },
      { id: 'bedroom_wardrobe_walkin', name: 'Tinted Glass Walk-In Wardrobe with Lighting', category: 'bedroom', priceKey: 'bedroom_wardrobe_walkin' },
      { id: 'bedroom_bed_back', name: 'Upholstered Velvet / Leather Bed Back Wall', category: 'bedroom', priceKey: 'bedroom_bed_back' },
      { id: 'bedroom_dresser_study', name: 'Floating Vanity Dresser & Executive Study', category: 'bedroom', priceKey: 'bedroom_dresser_study' },
      { id: 'bedroom_ceiling', name: 'Cove-Lit Bedroom False Ceiling', category: 'bedroom', priceKey: 'bedroom_ceiling' },
      { id: 'bedroom_full_package', name: 'Complete Bedroom Suite Package', category: 'bedroom', priceKey: 'bedroom_full_package' },
    ],
  },
  {
    id: 'bathroom',
    title: 'Spa Bathrooms & Powder Rooms',
    brand: 'ShineX Interior',
    description: 'Floating waterproof vanities, anti-fog LED mirrors, and concealed niches.',
    items: [
      { id: 'bathroom_vanity', name: 'Water-Resistant Floating Vanity & Quartz Basin', category: 'bathroom', priceKey: 'bathroom_vanity' },
      { id: 'bathroom_mirror_cabinet', name: 'Touch Sensor Defogger LED Mirror Cabinet', category: 'bathroom', priceKey: 'bathroom_mirror_cabinet' },
      { id: 'bathroom_niche', name: 'Recessed Granite Shower Niche & Accents', category: 'bathroom', priceKey: 'bathroom_niche' },
      { id: 'bathroom_ceiling', name: 'Moisture-Proof Calcium Silicate Ceiling', category: 'bathroom', priceKey: 'bathroom_ceiling' },
    ],
  },
  {
    id: 'utility',
    title: 'Utility & Laundry Joinery',
    brand: 'ShineX Interior',
    description: 'Heavy-duty joinery for washer-dryer towers and concealed linen organization.',
    items: [
      { id: 'utility_washer_stack', name: 'Washer & Dryer Stack Tower Cabinet', category: 'utility', priceKey: 'utility_washer_stack' },
      { id: 'utility_linen_cupboard', name: 'Deep Tall Linen & Broom Cupboard', category: 'utility', priceKey: 'utility_linen_cupboard' },
      { id: 'utility_mop_sink', name: 'Stainless Steel Mop Basin & Utility Counter', category: 'utility', priceKey: 'utility_mop_sink' },
      { id: 'utility_detergent_storage', name: 'Concealed Detergent & Chemical Lockers', category: 'utility', priceKey: 'utility_detergent_storage' },
    ],
  },
  {
    id: 'specialty',
    title: 'Bespoke Joinery & Mandir',
    brand: 'ShineX Interior',
    description: 'Custom dining sideboards, foyer shoe benches, and handcrafted sacred mandirs.',
    items: [
      { id: 'other_dining_crockery', name: 'Dining Bar & Glass Crockery Unit', category: 'specialty', priceKey: 'other_dining_crockery' },
      { id: 'other_foyer', name: 'Foyer Shoe Console with Bench Cushion', category: 'specialty', priceKey: 'other_foyer' },
      { id: 'other_pooja_unit', name: 'Corian / Teak Sacred Pooja Mandir', category: 'specialty', priceKey: 'other_pooja_unit' },
      { id: 'other_balcony_storage', name: 'Weather-Resistant Balcony Deck & Cabinet', category: 'specialty', priceKey: 'other_balcony_storage' },
      { id: 'other_home_study', name: 'Executive Dual-Monitor Workstation & Library', category: 'specialty', priceKey: 'other_home_study' },
    ],
  },
];

export const CIVIL_SERVICE_TREE: ServiceCategory[] = [
  {
    id: 'civil_infra',
    title: 'ShineX Infra — Civil & Wet Works',
    brand: 'ShineX Infra',
    description: 'Structural civil masonry, plumbing, electrical, and leak-proof guarantees.',
    items: [
      { id: 'civil_plumbing', name: 'Plumbing Point Shifts & Concealed CPVC Lines', category: 'civil', priceKey: 'civil_plumbing' },
      { id: 'civil_waterproofing', name: 'Bathroom & Balcony Polyurethane Waterproofing', category: 'civil', priceKey: 'civil_waterproofing' },
      { id: 'civil_electrical', name: 'Distribution Board & Heavy Load Conduiting', category: 'civil', priceKey: 'civil_electrical' },
      { id: 'civil_gas_exhaust', name: 'Gas Pipeline Shift & Core-Cut Exhaust Core', category: 'civil', priceKey: 'civil_gas_exhaust' },
      { id: 'civil_flooring', name: 'Vitrified Tile / Italian Marble Floor Relay', category: 'civil', priceKey: 'civil_flooring' },
      { id: 'civil_painting', name: 'Anti-Damp Base Coat & Royale Luxury Emulsion', category: 'civil', priceKey: 'civil_painting' },
      { id: 'civil_society_coord', name: 'Society NOC Paperwork & Debris Chute Logistics', category: 'civil', priceKey: 'civil_society_coord' },
      { id: 'civil_leak_repair', name: 'External Shaft Leak Inspection & Polymer Grouting', category: 'civil', priceKey: 'civil_leak_repair' },
    ],
  },
];

export const COMMERCIAL_SERVICE_TREE: ServiceCategory[] = [
  {
    id: 'office_fitout',
    title: 'Corporate Office Fit-Outs',
    brand: 'ShineX Interior',
    description: 'Ergonomic agile workstations, soundproof boardrooms, and branded visitor zones.',
    items: [
      { id: 'comm_reception', name: 'Monolithic Reception Counter & Backlit Brand Wall', category: 'office', priceKey: 'comm_reception' },
      { id: 'comm_workstation', name: 'Linear Modular Workstations (Per Pod)', category: 'office', priceKey: 'comm_workstation' },
      { id: 'comm_cabin', name: 'Executive Director Cabin with Acoustic Glass', category: 'office', priceKey: 'comm_cabin' },
      { id: 'comm_boardroom', name: 'Conference Boardroom with AV Integration', category: 'office', priceKey: 'comm_boardroom' },
      { id: 'comm_pantry', name: 'Cafeteria Dry Pantry & Microwave Counter', category: 'office', priceKey: 'comm_pantry' },
      { id: 'comm_brand_wall', name: 'Acoustic Slat Brand Wall with 3D Signage', category: 'office', priceKey: 'comm_brand_wall' },
    ],
  },
  {
    id: 'retail_commercial',
    title: 'Retail, Clinics & Hospitality',
    brand: 'ShineX Interior',
    description: 'High-turnover retail display joinery, sterile dental clinics, and salon wash bars.',
    items: [
      { id: 'comm_display_joinery', name: 'Floor-to-Ceiling Product Display Gondolas', category: 'retail', priceKey: 'comm_display_joinery' },
      { id: 'comm_cash_desk', name: 'Secured POS Billing Counter & Cable Raceway', category: 'retail', priceKey: 'comm_cash_desk' },
      { id: 'comm_trial_room', name: 'Full-Length Mirror Fitting Trial Rooms', category: 'retail', priceKey: 'comm_trial_room' },
      { id: 'comm_waiting_consult', name: 'Clinical Consultation Cabin & Hygienic Sink', category: 'clinic', priceKey: 'comm_waiting_consult' },
      { id: 'comm_salon_station', name: 'Salon Hair Station with Illuminated Mirrors', category: 'salon', priceKey: 'comm_salon_station' },
    ],
  },
];
