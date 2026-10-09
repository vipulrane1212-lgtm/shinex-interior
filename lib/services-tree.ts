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
    title: 'Living Rooms / Drawing Rooms',
    brand: 'ShineX Interior',
    description: 'TV units, designer grooved wall panels, and false ceilings with warm lights.',
    items: [
      { id: 'living_tv_unit', name: 'Premium Wooden & Marble TV Unit', category: 'living', priceKey: 'living_tv_unit' },
      { id: 'living_ceiling', name: 'Designer False Ceiling with Warm Lights', category: 'living', priceKey: 'living_ceiling' },
      { id: 'living_feature_wall', name: 'Designer Grooved Wall Panels', category: 'living', priceKey: 'living_feature_wall' },
      { id: 'living_partition', name: 'Glass & Metal Room Divider', category: 'living', priceKey: 'living_partition' },
      { id: 'living_curtains', name: 'Remote-Controlled Curtains & Blinds', category: 'living', priceKey: 'living_curtains' },
      { id: 'living_full_package', name: 'Complete Living Room Package', category: 'living', priceKey: 'living_full_package' },
    ],
  },
  {
    id: 'kitchen',
    title: 'Custom / Modular Kitchens',
    brand: 'ShineX Interior',
    description: 'Factory-precision modular kitchens with stone kitchen platforms and soft-close drawers.',
    items: [
      { id: 'kitchen_l_shape', name: 'L-Shaped Kitchen Layout', category: 'kitchen', priceKey: 'kitchen_l_shape' },
      { id: 'kitchen_u_shape', name: 'U-Shaped Kitchen Layout', category: 'kitchen', priceKey: 'kitchen_u_shape' },
      { id: 'kitchen_parallel', name: 'Parallel Kitchen Layout', category: 'kitchen', priceKey: 'kitchen_parallel' },
      { id: 'kitchen_island', name: 'Kitchen with a Centre Table / Island', category: 'kitchen', priceKey: 'kitchen_island' },
      { id: 'kitchen_straight', name: 'Straight Kitchen Layout', category: 'kitchen', priceKey: 'kitchen_straight' },
      { id: 'kitchen_hob_chimney', name: 'Fitted Oven, Stove & Chimney', category: 'kitchen', priceKey: 'kitchen_hob_chimney' },
      { id: 'kitchen_sink_faucet', name: 'Quartz Sink & Pull-out Faucet', category: 'kitchen', priceKey: 'kitchen_sink_faucet' },
      { id: 'kitchen_tall_unit', name: 'Tall Grocery Cupboard (Pantry Unit)', category: 'kitchen', priceKey: 'kitchen_tall_unit' },
      { id: 'kitchen_breakfast_counter', name: 'Breakfast Dining Counter', category: 'kitchen', priceKey: 'kitchen_breakfast_counter' },
      { id: 'kitchen_backsplash', name: 'Stone Kitchen Platforms & Wall Tiles', category: 'kitchen', priceKey: 'kitchen_backsplash' },
      { id: 'kitchen_organizers', name: 'Premium Soft-Close Drawers (for spices & spoons)', category: 'kitchen', priceKey: 'kitchen_organizers' },
      { id: 'kitchen_appliance_spaces', name: 'Fitted Oven & Dishwasher Space', category: 'kitchen', priceKey: 'kitchen_appliance_spaces' },
      { id: 'kitchen_full_package', name: 'Complete Kitchen Package', category: 'kitchen', priceKey: 'kitchen_full_package' },
    ],
  },
  {
    id: 'bedroom',
    title: 'Main Bedrooms',
    brand: 'ShineX Interior',
    description: 'Full-height wardrobes, lofts, modern bed backrests, and dressing tables.',
    items: [
      { id: 'bedroom_wardrobe_sliding', name: 'Full-Height Sliding Wardrobe', category: 'bedroom', priceKey: 'bedroom_wardrobe_sliding' },
      { id: 'bedroom_wardrobe_hinged', name: 'Standard Wardrobe with Top Storage (Loft)', category: 'bedroom', priceKey: 'bedroom_wardrobe_hinged' },
      { id: 'bedroom_wardrobe_walkin', name: 'Glass-Door Walk-In Closet', category: 'bedroom', priceKey: 'bedroom_wardrobe_walkin' },
      { id: 'bedroom_bed_back', name: 'Simple Wooden & Fabric Bed Backrest', category: 'bedroom', priceKey: 'bedroom_bed_back' },
      { id: 'bedroom_dresser_study', name: 'Wall-Mounted Dressing Table & Study Desk', category: 'bedroom', priceKey: 'bedroom_dresser_study' },
      { id: 'bedroom_ceiling', name: 'Bedroom False Ceiling with Warm Lights', category: 'bedroom', priceKey: 'bedroom_ceiling' },
      { id: 'bedroom_full_package', name: 'Complete Bedroom Package', category: 'bedroom', priceKey: 'bedroom_full_package' },
    ],
  },
  {
    id: 'bathroom',
    title: 'Luxury Bathrooms',
    brand: 'ShineX Interior',
    description: 'Wall-mounted washbasins with storage, smart LED mirrors, and glass shower partitions.',
    items: [
      { id: 'bathroom_vanity', name: 'Wall-Mounted Washbasin with Storage & Lights', category: 'bathroom', priceKey: 'bathroom_vanity' },
      { id: 'bathroom_mirror_cabinet', name: 'Smart LED Mirror with Storage', category: 'bathroom', priceKey: 'bathroom_mirror_cabinet' },
      { id: 'bathroom_niche', name: 'Glass Shower Partition Area & Granite Niche', category: 'bathroom', priceKey: 'bathroom_niche' },
      { id: 'bathroom_ceiling', name: 'Waterproof False Ceiling', category: 'bathroom', priceKey: 'bathroom_ceiling' },
    ],
  },
  {
    id: 'utility',
    title: 'Washing & Utility Areas',
    brand: 'ShineX Interior',
    description: 'Washing machine & dryer cabinets, tall linen cupboards, and utility counters.',
    items: [
      { id: 'utility_washer_stack', name: 'Washing Machine & Dryer Cabinet', category: 'utility', priceKey: 'utility_washer_stack' },
      { id: 'utility_linen_cupboard', name: 'Tall Linen & Broom Cupboard', category: 'utility', priceKey: 'utility_linen_cupboard' },
      { id: 'utility_mop_sink', name: 'Utility Washing Counter & Sink', category: 'utility', priceKey: 'utility_mop_sink' },
      { id: 'utility_detergent_storage', name: 'Closed Detergent & Storage Cabinets', category: 'utility', priceKey: 'utility_detergent_storage' },
    ],
  },
  {
    id: 'specialty',
    title: 'Custom Woodwork & Pooja Rooms',
    brand: 'ShineX Interior',
    description: 'Pooja rooms, glass bar cabinets, shoe racks with seating, and balcony furniture.',
    items: [
      { id: 'other_dining_crockery', name: 'Glass Bar / Wine Cabinet & Crockery Unit', category: 'specialty', priceKey: 'other_dining_crockery' },
      { id: 'other_foyer', name: 'Shoe Rack with Seating', category: 'specialty', priceKey: 'other_foyer' },
      { id: 'other_pooja_unit', name: 'Custom Wooden or Corian Pooja Room', category: 'specialty', priceKey: 'other_pooja_unit' },
      { id: 'other_balcony_storage', name: 'Outdoor Balcony Flooring & Cabinets', category: 'specialty', priceKey: 'other_balcony_storage' },
      { id: 'other_home_study', name: 'Home Study Desk & Bookshelf', category: 'specialty', priceKey: 'other_home_study' },
    ],
  },
];

export const CIVIL_SERVICE_TREE: ServiceCategory[] = [
  {
    id: 'civil_infra',
    title: 'ShineX Infra — Basic Construction & Masonry',
    brand: 'ShineX Infra',
    description: 'RCC foundation work, hidden plumbing, electrical DB box fitting, and advanced chemical waterproofing.',
    items: [
      { id: 'civil_plumbing', name: 'Hidden Plumbing & Pipe Shifting', category: 'civil', priceKey: 'civil_plumbing' },
      { id: 'civil_waterproofing', name: 'Advanced Chemical Waterproofing (Bathrooms & Balconies)', category: 'civil', priceKey: 'civil_waterproofing' },
      { id: 'civil_electrical', name: 'Main Electrical Wiring & DB Box Fitting', category: 'civil', priceKey: 'civil_electrical' },
      { id: 'civil_gas_exhaust', name: 'Gas Pipe Relocation & Chimney Hole Cutting', category: 'civil', priceKey: 'civil_gas_exhaust' },
      { id: 'civil_flooring', name: 'Perfectly Leveled Tile & Marble Fitting', category: 'civil', priceKey: 'civil_flooring' },
      { id: 'civil_painting', name: 'Anti-Damp Wall Painting & Luxury Emulsion', category: 'civil', priceKey: 'civil_painting' },
      { id: 'civil_society_coord', name: 'Housing Society Permissions & Waste Cleaning', category: 'civil', priceKey: 'civil_society_coord' },
      { id: 'civil_leak_repair', name: 'External Pipe Leak Repair & Grouting', category: 'civil', priceKey: 'civil_leak_repair' },
    ],
  },
];

export const COMMERCIAL_SERVICE_TREE: ServiceCategory[] = [
  {
    id: 'office_fitout',
    title: 'Complete Office Interiors',
    brand: 'ShineX Interior',
    description: 'Office desks, soundproof meeting rooms, boss cabins, and canteen areas.',
    items: [
      { id: 'comm_reception', name: 'Designer Reception Wall with 3D Company Logo & Counter', category: 'office', priceKey: 'comm_reception' },
      { id: 'comm_workstation', name: 'Office Desks & Work Cubicles (Per Seat)', category: 'office', priceKey: 'comm_workstation' },
      { id: 'comm_cabin', name: 'Boss / Director Cabins', category: 'office', priceKey: 'comm_cabin' },
      { id: 'comm_boardroom', name: 'Soundproof Meeting Rooms with TV/Projector', category: 'office', priceKey: 'comm_boardroom' },
      { id: 'comm_pantry', name: 'Office Canteen & Pantry Area', category: 'office', priceKey: 'comm_pantry' },
      { id: 'comm_brand_wall', name: 'Designer Reception Wall with 3D Company Logo', category: 'office', priceKey: 'comm_brand_wall' },
    ],
  },
  {
    id: 'retail_commercial',
    title: 'Interiors for Shops, Clinics & Hotels',
    brand: 'ShineX Interior',
    description: 'Full-height shop display racks, cashier counters, doctor checking cabins, and parlour stations.',
    items: [
      { id: 'comm_display_joinery', name: 'Full-Height Shop Display Racks', category: 'retail', priceKey: 'comm_display_joinery' },
      { id: 'comm_cash_desk', name: 'Cashier & Billing Counters', category: 'retail', priceKey: 'comm_cash_desk' },
      { id: 'comm_trial_room', name: 'Trial Rooms with Mirrors', category: 'retail', priceKey: 'comm_trial_room' },
      { id: 'comm_waiting_consult', name: 'Doctor Checking Cabins', category: 'clinic', priceKey: 'comm_waiting_consult' },
      { id: 'comm_salon_station', name: 'Parlour / Salon Mirrors & Chairs', category: 'salon', priceKey: 'comm_salon_station' },
    ],
  },
];
