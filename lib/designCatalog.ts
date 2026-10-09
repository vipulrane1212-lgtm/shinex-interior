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
    serviceTitle: 'Architectural Kitchens',
    category: 'Modular System',
    track: 'residential',
    coverImage: '/images/designs/kitchen_l_shaped.jpg',
    designs: [
      {
        id: 'l-shaped',
        title: 'L-Shaped Architectural Kitchen',
        layoutName: 'L-Shaped Layout',
        image: '/images/designs/kitchen_l_shaped.jpg',
        specs: ['Ergonomic Triangle', '14–18 Ft Run', 'Fluted Walnut & Marble'],
      },
      {
        id: 'u-shaped',
        title: 'U-Shaped Monolithic Chef’s Kitchen',
        layoutName: 'U-Shaped Layout',
        image: '/images/designs/kitchen_u_shaped.jpg',
        specs: ['3-Wall Discipline', '20–26 Ft Run', 'Taj Mahal Quartzite'],
      },
      {
        id: 'island',
        title: 'Waterfall Marble Island Kitchen',
        layoutName: 'Island Layout',
        image: '/images/designs/kitchen_island.jpg',
        specs: ['Social Counter', 'Calacatta Veining', 'Concealed Induction'],
      },
      {
        id: 'parallel',
        title: 'Parallel Dual-Chef Galley Kitchen',
        layoutName: 'Parallel Galley',
        image: '/images/designs/kitchen_parallel.jpg',
        specs: ['Dual Counter Run', 'Balcony Access', 'Matte Graphite Finish'],
      },
      {
        id: 'straight',
        title: 'Straight Minimalist Linear Kitchen',
        layoutName: 'Straight Linear',
        image: '/images/designs/kitchen_straight.jpg',
        specs: ['Single Wall Run', 'Sliding Pocket Doors', 'Grey Quartzite'],
      },
    ],
  },

  bedrooms: {
    serviceId: 'bedrooms',
    serviceTitle: 'Master Bedroom Suites',
    category: 'Private Sanctuary',
    track: 'residential',
    coverImage: '/images/designs/bedroom_floating.jpg',
    designs: [
      {
        id: 'floating-master',
        title: 'Modern Floating Platform Suite',
        layoutName: 'Floating Bed Suite',
        image: '/images/designs/bedroom_floating.jpg',
        specs: ['Under-Bed Warm Glow', 'Acoustic Walnut Flutes', 'Integrated Nightstands'],
      },
      {
        id: 'walkin-wardrobe',
        title: 'Tinted Glass Walk-In Wardrobe',
        layoutName: 'Walk-In Wardrobe',
        image: '/images/designs/bedroom_wardrobe.jpg',
        specs: ['Bronze Glass Doors', 'Sensor Backlights', 'Velvet Ottoman Island'],
      },
      {
        id: 'minimal-japandi',
        title: 'Minimalist Japandi Headboard Suite',
        layoutName: 'Japandi Minimalist',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
        specs: ['Natural Oak Slats', 'Organic Linens', 'Concealed Reading Lights'],
      },
      {
        id: 'bay-window-suite',
        title: 'Bay Window Lounge & Vanity Suite',
        layoutName: 'Lounge Suite',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
        specs: ['Custom Daybed Ledge', 'Dresser Mirror', 'Italian Textured Plaster'],
      },
      {
        id: 'penthouse-sanctuary',
        title: 'Penthouse Curved Master Sanctuary',
        layoutName: 'Penthouse Master',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
        specs: ['Curved Upholstered Wall', 'Panoramic Skyline', 'Atmospheric Dimming'],
      },
    ],
  },

  living: {
    serviceId: 'living',
    serviceTitle: 'Living & Social Lounges',
    category: 'Double-Height Spatial',
    track: 'residential',
    coverImage: '/images/designs/living_media_wall.jpg',
    designs: [
      {
        id: 'veneer-media-wall',
        title: 'Monolithic Veneer Media Wall',
        layoutName: 'Veneer Media Wall',
        image: '/images/designs/living_media_wall.jpg',
        specs: ['Bookmatched Statuario', 'Concealed Cable Pass', 'Floating Console'],
      },
      {
        id: 'double-height-lounge',
        title: 'Double-Height Italian Marble Lounge',
        layoutName: 'Double-Height Lounge',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
        specs: ['18-Ft Soaring Ceiling', 'Full-Height Glazing', 'Architectural Chandelier'],
      },
      {
        id: 'open-social-lounge',
        title: 'Open Dining & Cocktail Lounge',
        layoutName: 'Open Social Layout',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
        specs: ['Dry Bar Integration', 'Bespoke Sectional', 'Zoned Cove Lighting'],
      },
      {
        id: 'balcony-deck-lounge',
        title: 'Weatherproof Teak Deck Lounge',
        layoutName: 'Deck & Bar Lounge',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
        specs: ['Sliding Glass Wall', 'Weatherproof Teak', 'Seamless Indoor-Outdoor'],
      },
      {
        id: 'acoustic-fluted-living',
        title: 'Acoustic Fluted Feature Lounge',
        layoutName: 'Acoustic Fluted Lounge',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
        specs: ['Sound-Absorbing Slats', 'Backlit Floating Ledge', 'Sculptural Seating'],
      },
    ],
  },

  bathrooms: {
    serviceId: 'bathrooms',
    serviceTitle: 'Bespoke Spa Bathrooms',
    category: 'Monolithic Stone',
    track: 'residential',
    coverImage: '/images/designs/bathroom_spa_rain.jpg',
    designs: [
      {
        id: 'frameless-rain-shower',
        title: 'Frameless Walk-In Rain Shower',
        layoutName: 'Walk-In Rain Shower',
        image: '/images/designs/bathroom_spa_rain.jpg',
        specs: ['Concealed Thermostat', 'Gunmetal Fittings', 'Recessed Warm Niche'],
      },
      {
        id: 'freestanding-tub',
        title: 'Freestanding Cast Marble Bathtub',
        layoutName: 'Freestanding Stone Tub',
        image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Floor-Mount Brass Spout', 'Garden Window View', 'Smooth Matte Resin'],
      },
      {
        id: 'floating-double-vanity',
        title: 'Floating Backlit Double Vanity',
        layoutName: 'Floating Double Vanity',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
        specs: ['Integrated Stone Basin', 'Anti-Fog Smart Mirrors', 'Soft-Close Oak Drawers'],
      },
      {
        id: 'monolithic-wet-room',
        title: 'Monolithic Slate Wet Room',
        layoutName: 'Monolithic Wet Room',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
        specs: ['Anti-Skid Honed Slate', 'Linear Floor Drain', 'Underfloor Heating'],
      },
      {
        id: 'terrazzo-powder-room',
        title: 'Terrazzo & Fluted Glass Powder Room',
        layoutName: 'Design Powder Room',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
        specs: ['Italian Custom Terrazzo', 'Fluted Glass Door', 'Sconce Accent Lighting'],
      },
    ],
  },

  dining: {
    serviceId: 'dining',
    serviceTitle: 'Dining & Wine Displays',
    category: 'Entertaining Hub',
    track: 'residential',
    coverImage: '/images/designs/dining_wine_cellar.jpg',
    designs: [
      {
        id: 'glass-wine-cellar',
        title: 'Glass-Enclosed Wine Showcase Cellar',
        layoutName: 'Glass Wine Cellar',
        image: '/images/designs/dining_wine_cellar.jpg',
        specs: ['Climate-Controlled Zone', 'Dark Oak & Brass Pegs', 'Integrated Tasting Table'],
      },
      {
        id: 'calacatta-dining',
        title: 'Monolithic Calacatta Dining Suite',
        layoutName: 'Bespoke Marble Dining',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85',
        specs: ['Beveled Edge Top', 'Brass Sculptural Base', 'Acoustic Drop Ceiling'],
      },
      {
        id: 'backlit-onyx-bar',
        title: 'Backlit Onyx Dry Bar & Station',
        layoutName: 'Onyx Dry Bar',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
        specs: ['Illuminated Amber Onyx', 'Stemware Storage', 'Wine Cooler Space'],
      },
      {
        id: 'breakfast-nook-island',
        title: 'Breakfast Nook & Island Integration',
        layoutName: 'Island Breakfast Nook',
        image: '/images/designs/kitchen_island.jpg',
        specs: ['Upholstered Banquette', 'Fluted Pedestal Table', 'Casual Family Seating'],
      },
      {
        id: 'executive-formal-dining',
        title: '10-Seater Formal Executive Dining',
        layoutName: 'Formal Dining Suite',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Smoked Oak Wood', 'Designer Chandelier', 'Concealed Sideboard Storage'],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // COMMERCIAL (5 Services x 5 Designs = 25 Designs)
  // ─────────────────────────────────────────────────────────────
  'corporate-offices': {
    serviceId: 'corporate-offices',
    serviceTitle: 'Corporate HQ Fit-Outs',
    category: 'Enterprise Workplace',
    track: 'commercial',
    coverImage: '/images/designs/commercial_boardroom.jpg',
    designs: [
      {
        id: 'executive-boardroom',
        title: 'Executive Acoustic Boardroom',
        layoutName: 'Acoustic Boardroom',
        image: '/images/designs/commercial_boardroom.jpg',
        specs: ['Marble Conference Table', 'Double-Glazed Fluted Glass', 'Integrated AV Setup'],
      },
      {
        id: 'agile-open-plan',
        title: 'Agile Workstations & Acoustic Pods',
        layoutName: 'Agile Open Plan',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85',
        specs: ['Height-Adjustable Desks', 'Soundproof Phone Booths', 'Ergonomic Task Seating'],
      },
      {
        id: 'c-suite-private',
        title: 'C-Suite Executive Private Suite',
        layoutName: 'C-Suite Private Office',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=85',
        specs: ['Natural Walnut Paneling', 'Private Meeting Lounge', 'Secure Access Control'],
      },
      {
        id: 'breakout-cafe',
        title: 'Executive Breakout & Cafeteria Hub',
        layoutName: 'Breakout Lounge Hub',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        specs: ['Modular Booth Seating', 'Commercial Pantry Counter', 'Atmospheric Zoning'],
      },
      {
        id: 'turnkey-floor',
        title: 'Turnkey Multi-Department Floor',
        layoutName: 'Full Workplace Floor',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Modular Glass Partitions', 'Direct Power Reticulation', 'HVAC Air Balancing'],
      },
    ],
  },

  'civil-works': {
    serviceId: 'civil-works',
    serviceTitle: 'Precision Civil Works',
    category: 'Direct Site Execution',
    track: 'commercial',
    coverImage: '/images/designs/civil_heavy_rebar.jpg',
    designs: [
      {
        id: 'civil-heavy-rebar',
        title: 'Structural Reinforced Concrete & Rebar',
        layoutName: 'Heavy Structural Rebar',
        image: '/images/designs/civil_heavy_rebar.jpg',
        specs: ['Engineered Rebar Grid', 'Certified Concrete Mix', 'Licensed Site Supervisors'],
      },
      {
        id: 'marble-flooring-civil',
        title: 'Laser-Leveled Vitrified & Italian Marble',
        layoutName: 'Precision Marble Floors',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85',
        specs: ['Sub-Base Screed Leveling', 'Epoxy Joint Filling', 'Diamond Polish Finish'],
      },
      {
        id: 'fire-rated-partitions',
        title: 'Fire-Rated Certified Partitions & MEP',
        layoutName: 'Fire-Rated Partitions',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        specs: ['2-Hour Fire Integrity', 'Acoustic Rockwool Core', 'Concealed Metal Framing'],
      },
      {
        id: 'masonry-beams',
        title: 'Engineered Masonry & Beam Strengthening',
        layoutName: 'Structural Masonry',
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85',
        specs: ['Carbon Fiber Wrapping', 'Micro-Concrete Grouting', 'Load-Bearing Reinforcement'],
      },
      {
        id: 'screed-waterproofing',
        title: 'Elastomeric Screed & Waterproofing',
        layoutName: 'Membrane Waterproofing',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Multi-Layer Membrane', 'Pond Test Verification', 'Slope Drainage Screed'],
      },
    ],
  },

  'tender-contracts': {
    serviceId: 'tender-contracts',
    serviceTitle: 'L&T & Govt Tender Executions',
    category: 'Institutional Compliance',
    track: 'commercial',
    coverImage: '/images/designs/civil_heavy_rebar.jpg',
    designs: [
      {
        id: 'heavy-rebar-slabs',
        title: 'Heavy Civil Rebar & Foundation Slabs',
        layoutName: 'Institutional Foundations',
        image: '/images/designs/civil_heavy_rebar.jpg',
        specs: ['BIS Standard Rebar', 'Grade M40 Concrete', 'Third-Party NDT Testing'],
      },
      {
        id: 'industrial-mep',
        title: 'Industrial MEP & Cable Tray Infrastructure',
        layoutName: 'MEP Infrastructure',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85',
        specs: ['Perforated Cable Trays', 'Fire Sprinkler Mains', 'Industrial Earthing'],
      },
      {
        id: 'peb-assembly',
        title: 'Pre-Engineered Steel PEB Structures',
        layoutName: 'PEB Steel Truss',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1400&q=85',
        specs: ['High-Tensile Bolts', 'Clear Span Architecture', 'Corrosion-Resistant Coating'],
      },
      {
        id: 'heavy-civil-contracts',
        title: 'Turnkey Institutional Civil Projects',
        layoutName: 'Full Civil Scope',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        specs: ['Milestone Delivery', 'Daily Site Reporting', 'Safety Compliance Audit'],
      },
      {
        id: 'drainage-culverts',
        title: 'Precast Box Culverts & Drainage Conduits',
        layoutName: 'Civil Storm Drainage',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Heavy Vehicle Load Rated', 'Precision Joint Sealing', 'Stormwater Management'],
      },
    ],
  },

  'commercial-lobbies': {
    serviceId: 'commercial-lobbies',
    serviceTitle: 'Enterprise Lobbies & Atriums',
    category: 'Architectural Reception',
    track: 'commercial',
    coverImage: '/images/designs/commercial_lobby.jpg',
    designs: [
      {
        id: 'triple-height-atrium',
        title: 'Triple-Height Marble Grand Atrium',
        layoutName: 'Triple-Height Atrium',
        image: '/images/designs/commercial_lobby.jpg',
        specs: ['Bookmatched Calacatta', 'Sculptural Chandelier', 'Polished Terrazzo'],
      },
      {
        id: 'security-portal',
        title: 'Speed-Gate Security & Access Portal',
        layoutName: 'Turnstile Access Portal',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=85',
        specs: ['Optical Turnstiles', 'Facial Recognition Pods', 'Fluted Metal Surrounds'],
      },
      {
        id: 'biophilic-atrium',
        title: 'Biophilic Skylight Living Wall Atrium',
        layoutName: 'Biophilic Green Atrium',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Automated Drip Irrigation', 'Sunken Planters', 'Natural Sun Filtering'],
      },
      {
        id: 'elevator-lobby',
        title: 'High-Speed PVD Stainless Elevator Lobby',
        layoutName: 'PVD Elevator Lobby',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
        specs: ['Rose Gold PVD Panels', 'Direct Call Panels', 'Mirrored Ceiling Baffles'],
      },
      {
        id: 'executive-waiting',
        title: 'Architectural Executive Waiting Gallery',
        layoutName: 'Executive Waiting Gallery',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
        specs: ['Bespoke Banquette Bench', 'Curated Lighting Sculptures', 'Acoustic Ceiling'],
      },
    ],
  },

  'building-contracts': {
    serviceId: 'building-contracts',
    serviceTitle: 'Building Contracts & Facades',
    category: 'Full-Scope Structural',
    track: 'commercial',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    designs: [
      {
        id: 'curtain-wall',
        title: 'Unitized Low-E Double-Glazed Curtain Wall',
        layoutName: 'Unitized Curtain Wall',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Thermal Break Extrusions', 'Wind Load Certified', 'Acoustic Sound Barrier'],
      },
      {
        id: 'terracotta-rainscreen',
        title: 'Dry-Hung Terracotta & Stone Rainscreen',
        layoutName: 'Terracotta Rainscreen',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
        specs: ['Ventilated Facade Sub-Frame', 'UV-Stable Terracotta', 'Concealed Fastening'],
      },
      {
        id: 'porte-cochere',
        title: 'Cantilevered Steel & Glass Porte-Cochere',
        layoutName: 'Porte-Cochere Canopy',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
        specs: ['Tension Rod Canopy', 'Laminated Safety Glass', 'Warm Integrated Downlights'],
      },
      {
        id: 'external-restoration',
        title: 'Full External Envelope Structural Rehabilitation',
        layoutName: 'Facade Rehabilitation',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
        specs: ['Elastomeric Weather Coating', 'Joint Sealant Refurbishment', 'Spall Concrete Repair'],
      },
      {
        id: 'kinetic-louvers',
        title: 'Perforated Aluminum Kinetic Sunshade Facade',
        layoutName: 'Kinetic Louvers',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
        specs: ['Solar Heat Reduction', 'Custom CNC Pattern', 'Anodized Champagne Finish'],
      },
    ],
  },
};
