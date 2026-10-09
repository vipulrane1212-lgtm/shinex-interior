export interface DesignVariant {
  id: string;
  title: string;
  layoutName: string;
  image: string;
  specs: string[];
}

export interface ServiceDesignCatalog {
  serviceId: string;
  serviceTitle: string;
  category: string;
  track: 'residential' | 'commercial';
  coverImage: string;
  designs: DesignVariant[];
}

export function resolveImagePath(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  if (path.startsWith('/shinex-interior/')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  const isGhPages =
    process.env.NEXT_EXPORT === 'true' ||
    (typeof window !== 'undefined' &&
      (window.location.hostname.includes('github.io') ||
        window.location.pathname.startsWith('/shinex-interior')));

  const base = isGhPages ? '/shinex-interior' : '';
  return `${base}${cleanPath}`;
}

export const DESIGN_CATALOG: Record<string, ServiceDesignCatalog> = {
  // ─────────────────────────────────────────────────────────────
  // RESIDENTIAL (5 Services x 5 Designs = 25 Designs)
  // ─────────────────────────────────────────────────────────────
  kitchens: {
    serviceId: 'kitchens',
    serviceTitle: 'Custom / Modular Kitchens',
    category: 'Kitchen Layouts & Details',
    track: 'residential',
    coverImage: '/images/designs/kitchen_l_shaped.jpg',
    designs: [
      {
        id: 'l-shaped',
        title: 'L-Shaped Kitchen',
        layoutName: 'L-Shaped Kitchens',
        image: '/images/designs/kitchen_l_shaped.jpg',
        specs: ['Stone Kitchen Platforms & Wall Tiles', 'Premium Soft-Close Drawers (for spices & spoons)', 'Fitted Stove & Chimney'],
      },
      {
        id: 'u-shaped',
        title: 'U-Shaped Kitchen',
        layoutName: 'U-Shaped Kitchens',
        image: '/images/designs/kitchen_u_shaped.jpg',
        specs: ['3-Wall Counter Layout', 'Stone Kitchen Platforms', 'Tall Grocery Cupboard (Pantry Unit)'],
      },
      {
        id: 'island',
        title: 'Kitchen with a Centre Table / Island',
        layoutName: 'Island Kitchens',
        image: '/images/designs/kitchen_island.jpg',
        specs: ['Centre Island Table', 'Stone Kitchen Platforms', 'Fitted Oven & Stove'],
      },
      {
        id: 'parallel',
        title: 'Parallel Kitchen',
        layoutName: 'Parallel Kitchens',
        image: '/images/designs/kitchen_parallel.jpg',
        specs: ['Dual Counter Run', 'Premium Soft-Close Drawers', 'Fitted Stove & Chimney'],
      },
      {
        id: 'straight',
        title: 'Straight Kitchen',
        layoutName: 'Straight Kitchens',
        image: '/images/designs/kitchen_straight.jpg',
        specs: ['Single Wall Platform', 'Stone Wall Tiles', 'Compact Storage'],
      },
    ],
  },

  bedrooms: {
    serviceId: 'bedrooms',
    serviceTitle: 'Main Bedrooms',
    category: 'Bedroom Furniture',
    track: 'residential',
    coverImage: '/images/designs/bedroom_floating.jpg',
    designs: [
      {
        id: 'floating-master',
        title: 'Modern Bed (without visible legs)',
        layoutName: 'Modern Bed Suite',
        image: '/images/designs/bedroom_floating.jpg',
        specs: ['Modern Bed (without visible legs)', 'Warm Backlight Glow', 'Matching Side Tables'],
      },
      {
        id: 'walkin-wardrobe',
        title: 'Glass-Door Walk-In Closet',
        layoutName: 'Walk-In Closet',
        image: '/images/designs/bedroom_wardrobe.jpg',
        specs: ['Glass-Door Wardrobes', 'Automatic Sensor Lights', 'Dressing Island'],
      },
      {
        id: 'minimal-japandi',
        title: 'Simple Wooden & Fabric Bed Backrest',
        layoutName: 'Wooden & Fabric Bed Backrest',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
        specs: ['Simple Wooden & Fabric Bed Backrest', 'Concealed Reading Lights', 'Soft Linens'],
      },
      {
        id: 'bay-window-suite',
        title: 'Window Seating Area',
        layoutName: 'Window Seating Area',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
        specs: ['Window Seating Area', 'Wall-Mounted Dressing Table', 'Custom Cushions'],
      },
      {
        id: 'penthouse-sanctuary',
        title: 'Standard Wardrobe with Top Storage (Loft)',
        layoutName: 'Wardrobe with Loft',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
        specs: ['Full-Height Storage', 'Top Storage (Loft)', 'Soft-Close Hinges'],
      },
    ],
  },

  living: {
    serviceId: 'living',
    serviceTitle: 'Living Rooms / Drawing Rooms',
    category: 'Living Room Designs',
    track: 'residential',
    coverImage: '/images/designs/living_media_wall.jpg',
    designs: [
      {
        id: 'veneer-media-wall',
        title: 'Premium Wooden & Marble TV Unit',
        layoutName: 'Wooden & Marble TV Unit',
        image: '/images/designs/living_media_wall.jpg',
        specs: ['Premium Wooden & Marble TV Unit', 'Hidden Wiring Pass', 'Floating Bottom Shelf'],
      },
      {
        id: 'double-height-lounge',
        title: 'High-Ceiling Marble Living Room',
        layoutName: 'High-Ceiling Living Room',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
        specs: ['High-Ceiling Marble Living Room', 'Full-Height Windows', 'Designer Chandelier'],
      },
      {
        id: 'open-social-lounge',
        title: 'Designer Grooved Wall Panels',
        layoutName: 'Grooved Wall Panels',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
        specs: ['Designer Grooved Wall Panels', 'Glass & Metal Room Divider', 'Cove False Ceiling'],
      },
      {
        id: 'balcony-deck-lounge',
        title: 'Outdoor Balcony Flooring & Cabinets',
        layoutName: 'Balcony Flooring & Seating',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
        specs: ['Outdoor Balcony Flooring & Cabinets', 'Sliding Glass Door', 'Weatherproof Teak'],
      },
      {
        id: 'acoustic-fluted-living',
        title: 'Remote-Controlled Curtains & Blinds',
        layoutName: 'Curtains & Wall Panels',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
        specs: ['Remote-Controlled Curtains & Blinds', 'Designer Grooved Wall Panels', 'Floating Display Ledge'],
      },
    ],
  },

  bathrooms: {
    serviceId: 'bathrooms',
    serviceTitle: 'Luxury Bathrooms',
    category: 'Bathroom Fittings',
    track: 'residential',
    coverImage: '/images/designs/bathroom_spa_rain.jpg',
    designs: [
      {
        id: 'frameless-rain-shower',
        title: 'Glass Shower Partition Area',
        layoutName: 'Glass Shower Partition Area',
        image: '/images/designs/bathroom_spa_rain.jpg',
        specs: ['Glass Shower Partition Area', 'Concealed Diverter', 'Stone Wall Niche'],
      },
      {
        id: 'freestanding-tub',
        title: 'Standalone Bathtub',
        layoutName: 'Standalone Bathtub',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Standalone Bathtub', 'Brass Floor Tap', 'Window View'],
      },
      {
        id: 'floating-double-vanity',
        title: 'Wall-Mounted Washbasin with Storage & Lights',
        layoutName: 'Washbasin with Storage',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
        specs: ['Wall-Mounted Washbasin with Storage & Lights', 'Smart LED Mirror with Storage', 'Soft-Close Drawers'],
      },
      {
        id: 'monolithic-wet-room',
        title: 'Stone-Finish Bathroom',
        layoutName: 'Stone-Finish Bathroom',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
        specs: ['Stone-Finish Bathroom', 'Anti-Skid Flooring', 'Waterproof False Ceiling'],
      },
      {
        id: 'terrazzo-powder-room',
        title: 'Waterproof False Ceiling & Powder Room',
        layoutName: 'Powder Room',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
        specs: ['Waterproof False Ceiling', 'Designer Wall Mirror', 'Warm Accent Lights'],
      },
    ],
  },

  dining: {
    serviceId: 'dining',
    serviceTitle: 'Dining Areas & Bar Units',
    category: 'Dining & Special Woodwork',
    track: 'residential',
    coverImage: '/images/designs/dining_wine_cellar.jpg',
    designs: [
      {
        id: 'glass-wine-cellar',
        title: 'Glass Bar / Wine Cabinet',
        layoutName: 'Glass Bar / Wine Cabinet',
        image: '/images/designs/dining_wine_cellar.jpg',
        specs: ['Glass Bar / Wine Cabinet', 'Wine Bottle Racks', 'Integrated Tasting Counter'],
      },
      {
        id: 'calacatta-dining',
        title: 'Premium Marble Dining Table',
        layoutName: 'Marble Dining Table',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
        specs: ['Premium Marble Dining Table', 'Designer Chandelier', 'False Ceiling Lights'],
      },
      {
        id: 'backlit-onyx-bar',
        title: 'Glowing Stone Bar Counter',
        layoutName: 'Glowing Stone Bar Counter',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
        specs: ['Glowing Stone Bar Counter', 'Glassware Storage', 'Wine Chiller Space'],
      },
      {
        id: 'breakfast-nook-island',
        title: 'Custom Wooden or Corian Pooja Room',
        layoutName: 'Pooja Room',
        image: '/images/designs/kitchen_island.jpg',
        specs: ['Custom Wooden or Corian Pooja Room', 'Jali Cut Doors', 'Brass Accents & Storage'],
      },
      {
        id: 'executive-formal-dining',
        title: 'Shoe Rack with Seating & Dining Sideboard',
        layoutName: 'Dining & Foyer Storage',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Shoe Rack with Seating', 'Crockery Unit with Glass Doors', 'Washing Machine & Dryer Cabinet'],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // COMMERCIAL (5 Services x 5 Designs = 25 Designs)
  // ─────────────────────────────────────────────────────────────
  'corporate-offices': {
    serviceId: 'corporate-offices',
    serviceTitle: 'Complete Office Interiors',
    category: 'Office Spaces',
    track: 'commercial',
    coverImage: '/images/designs/commercial_boardroom.jpg',
    designs: [
      {
        id: 'executive-boardroom',
        title: 'Soundproof Meeting Rooms with TV/Projector',
        layoutName: 'Soundproof Meeting Rooms',
        image: '/images/designs/commercial_boardroom.jpg',
        specs: ['Soundproof Meeting Rooms with TV/Projector', 'Large Conference Table', 'Video Call Setup'],
      },
      {
        id: 'agile-open-plan',
        title: 'Flexible Office Desks & Quiet Cabins',
        layoutName: 'Office Desks & Cubicles',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
        specs: ['Flexible Office Desks & Quiet Cabins', 'Private Calling Booths', 'Ergonomic Office Chairs'],
      },
      {
        id: 'c-suite-private',
        title: 'Boss / Director Cabins',
        layoutName: 'Boss / Director Cabins',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=85',
        specs: ['Boss / Director Cabins', 'Private Sofa Lounge', 'Wooden Wall Paneling'],
      },
      {
        id: 'breakout-cafe',
        title: 'Office Canteen & Pantry Area',
        layoutName: 'Office Canteen & Pantry',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        specs: ['Office Canteen & Pantry Area', 'Cafeteria Seating', 'Microwave & Coffee Counter'],
      },
      {
        id: 'turnkey-floor',
        title: 'Designer Reception Wall with 3D Company Logo',
        layoutName: 'Reception Wall & Floor',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Designer Reception Wall with 3D Company Logo', 'Glass Partitions', 'Central AC & Wiring'],
      },
    ],
  },

  'civil-works': {
    serviceId: 'civil-works',
    serviceTitle: 'Basic Construction & Masonry',
    category: 'Specific Construction Works',
    track: 'commercial',
    coverImage: '/images/designs/civil_heavy_rebar.jpg',
    designs: [
      {
        id: 'civil-heavy-rebar',
        title: 'RCC Foundation & Slab Work (Pillars & Slabs)',
        layoutName: 'RCC Foundation & Slab Work',
        image: '/images/designs/civil_heavy_rebar.jpg',
        specs: ['RCC Foundation & Slab Work (Pillars & Slabs)', 'Steel Rebar Grid', 'Licensed Civil Engineers'],
      },
      {
        id: 'marble-flooring-civil',
        title: 'Perfectly Leveled Tile & Marble Fitting',
        layoutName: 'Tile & Marble Fitting',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85',
        specs: ['Perfectly Leveled Tile & Marble Fitting', 'Laser Leveling', 'Epoxy Joint Filling'],
      },
      {
        id: 'fire-rated-partitions',
        title: 'Fireproof Walls & AC/Plumbing Setup',
        layoutName: 'Fireproof Walls & MEP',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        specs: ['Fireproof Walls & AC/Plumbing Setup', 'Hidden Plumbing & Pipe Shifting', 'Main Electrical Wiring & DB Box Fitting'],
      },
      {
        id: 'masonry-beams',
        title: 'Gas Pipe Relocation & Chimney Hole Cutting',
        layoutName: 'Civil Alterations & Drilling',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85',
        specs: ['Gas Pipe Relocation & Chimney Hole Cutting', 'Wall Beam Strengthening', 'Brick Masonry'],
      },
      {
        id: 'screed-waterproofing',
        title: 'Advanced Chemical Waterproofing',
        layoutName: 'Chemical Waterproofing',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Advanced Chemical Waterproofing', 'Bathroom & Balcony Leakproofing', 'Water Ponding Test'],
      },
    ],
  },

  'tender-contracts': {
    serviceId: 'tender-contracts',
    serviceTitle: 'Large-Scale & Govt Contract Work',
    category: 'Large-Scale Construction',
    track: 'commercial',
    coverImage: '/images/designs/civil_heavy_rebar.jpg',
    designs: [
      {
        id: 'heavy-rebar-slabs',
        title: 'RCC Foundation & Heavy Slab Work',
        layoutName: 'RCC Heavy Slabs',
        image: '/images/designs/civil_heavy_rebar.jpg',
        specs: ['ISI Certified Rebar', 'M40 Grade Concrete', 'Lab Quality Testing'],
      },
      {
        id: 'industrial-mep',
        title: 'Factory Sheds & Steel Roof Structures',
        layoutName: 'Steel Roof Structures',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
        specs: ['Factory Sheds & Steel Roof Structures', 'Heavy Cable Trays', 'Industrial Earthing & Fire Lines'],
      },
      {
        id: 'peb-assembly',
        title: 'Housing Society Permissions & Waste Cleaning',
        layoutName: 'Permissions & Debris Cleaning',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1400&q=85',
        specs: ['Housing Society Permissions & Waste Cleaning', 'High-Speed Waste Removal', 'Society NOC Documentation'],
      },
      {
        id: 'heavy-civil-contracts',
        title: 'Large-Scale Civil & Govt Project Execution',
        layoutName: 'Full Civil Scope',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        specs: ['Milestone Delivery', 'Daily Progress Reports', 'Safety Compliance'],
      },
      {
        id: 'drainage-culverts',
        title: 'Storm Drainage & Concrete Work',
        layoutName: 'Storm Drainage',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Heavy Vehicle Load Tested', 'Underground Drainage', 'Concrete Chamber Sealing'],
      },
    ],
  },

  'commercial-lobbies': {
    serviceId: 'commercial-lobbies',
    serviceTitle: 'Main Office Receptions & Waiting Areas',
    category: 'Reception & Common Areas',
    track: 'commercial',
    coverImage: '/images/designs/commercial_lobby.jpg',
    designs: [
      {
        id: 'triple-height-atrium',
        title: 'Large Marble Reception Areas',
        layoutName: 'Marble Reception Areas',
        image: '/images/designs/commercial_lobby.jpg',
        specs: ['Large Marble Reception Areas', 'Designer Lighting', 'Grand Marble Flooring'],
      },
      {
        id: 'security-portal',
        title: 'ID-Card Entry Gates / Flap Barriers',
        layoutName: 'Entry Gates & Barriers',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85',
        specs: ['ID-Card Entry Gates / Flap Barriers', 'Biometric Entry Pods', 'Fluted Metal Surrounds'],
      },
      {
        id: 'biophilic-atrium',
        title: 'Indoor Plant Walls with Natural Light',
        layoutName: 'Indoor Plant Walls',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Indoor Plant Walls with Natural Light', 'Automatic Drip Watering', 'Skylight Ceilings'],
      },
      {
        id: 'elevator-lobby',
        title: 'Designer Lift Lobbies',
        layoutName: 'Designer Lift Lobbies',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Designer Lift Lobbies', 'Rose Gold / Stainless Steel Frames', 'Ceiling Warm Lights'],
      },
      {
        id: 'executive-waiting',
        title: 'VIP Waiting Areas',
        layoutName: 'VIP Waiting Areas',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        specs: ['VIP Waiting Areas', 'Comfortable Sofa Seating', 'Designer Acoustic Wall'],
      },
    ],
  },

  'building-contracts': {
    serviceId: 'building-contracts',
    serviceTitle: 'Building Construction & Outer Elevations',
    category: 'Main Construction Works',
    track: 'commercial',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    designs: [
      {
        id: 'curtain-wall',
        title: 'Glass Building Exteriors (Glass Elevations)',
        layoutName: 'Glass Elevations',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Glass Building Exteriors (Glass Elevations)', 'Toughened Heat-Reflective Glass', 'Wind & Rain Protection'],
      },
      {
        id: 'terracotta-rainscreen',
        title: 'Designer Outer Wall Tiles / Grills',
        layoutName: 'Outer Wall Tiles & Grills',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
        specs: ['Designer Outer Wall Tiles / Grills', 'Sun Protection Louvers', 'Rust-Proof Fitting'],
      },
      {
        id: 'porte-cochere',
        title: 'Building Entrance Canopy & Drop-off',
        layoutName: 'Entrance Canopy',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        specs: ['Steel & Glass Canopy', 'Drop-off Lighting', 'Rain Protection'],
      },
      {
        id: 'external-restoration',
        title: 'Building Repair & Outer Plastering',
        layoutName: 'Building Repair & Plastering',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Building Repair & Outer Plastering', 'Crack Repair & Waterproof Paint', 'External Structural Strengthening'],
      },
      {
        id: 'kinetic-louvers',
        title: 'Designer Outer Wall Grills & Sun Louvers',
        layoutName: 'Outer Sun Grills',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Heat Protection Louvers', 'Custom Pattern Design', 'Champagne Anodized Metal'],
      },
    ],
  },
};
