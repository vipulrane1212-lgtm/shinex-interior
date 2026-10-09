export interface ServiceCard {
  id: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'hero';
  image: string;
  subCards?: {
    id: string;
    title: string;
    image: string;
    tag: string;
  }[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  shortTitle?: string;
  location: string;
  category: 'residential' | 'commercial';
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  specs: string[];
}

export interface GoogleReview {
  id: string;
  name: string;
  role: string;
  locality: string;
  projectType: string;
  rating: number;
  timeAgo: string;
  comment: string;
  videoThumbnail: string;
  videoDuration: string;
  lowerThird: {
    client: string;
    scope: string;
    location: string;
    turnaround: string;
  };
}

export interface QuizOption {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
}

// ─────────────────────────────────────────────────────────────
// HERO ASSETS (2)
// ─────────────────────────────────────────────────────────────
export const RESIDENTIAL_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85';

export const COMMERCIAL_HERO_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85';

// ─────────────────────────────────────────────────────────────
// RESIDENTIAL SERVICES (15 Images)
// 4 Kitchens, 4 Bedrooms, 4 Living Rooms, 3 Bathrooms
// ─────────────────────────────────────────────────────────────
export const RESIDENTIAL_SERVICES: ServiceCard[] = [
  {
    id: 'kitchens',
    title: 'Architectural Kitchens',
    category: 'Modular System',
    aspect: 'hero',
    image:
      '/images/designs/kitchen_l_shaped.jpg',
    subCards: [
      {
        id: 'l-shaped',
        title: 'L-Shaped Kitchen',
        tag: 'Ergonomic Angle',
        image:
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'u-shaped',
        title: 'U-Shaped Kitchen',
        tag: '3-Wall Discipline',
        image:
          'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'island',
        title: 'Island Kitchen',
        tag: 'Waterfall Marble',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'parallel',
        title: 'Parallel Galley',
        tag: 'Dual Chef Run',
        image:
          'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'bedrooms',
    title: 'Master Bedroom Suites',
    category: 'Private Sanctuary',
    aspect: 'portrait',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'modern-master',
        title: 'Modern Master Suite',
        tag: 'Floating Bed',
        image:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'minimal-japandi',
        title: 'Minimalist Headboard',
        tag: 'Acoustic Flutes',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'luxury-wardrobe',
        title: 'Walk-In Wardrobes',
        tag: 'Tinted Glass',
        image:
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'kids-guest',
        title: 'Children & Guest Suite',
        tag: 'Modular Storage',
        image:
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'living',
    title: 'Living & Social Lounges',
    category: 'Double-Height Spatial',
    aspect: 'landscape',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'media-wall',
        title: 'Veneer Media Wall',
        tag: 'Concealed Wire',
        image:
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'social-lounge',
        title: 'Open Dining Lounge',
        tag: 'Italian Marble',
        image:
          'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'balcony-deck',
        title: 'Deck & Bar Integration',
        tag: 'Weatherproof',
        image:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'bathrooms',
    title: 'Bespoke Spa Bathrooms',
    category: 'Monolithic Stone',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85',
    subCards: [
      {
        id: 'rain-shower',
        title: 'Walk-In Rain Shower',
        tag: 'Frameless Glass',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'stone-tub',
        title: 'Freestanding Bathtub',
        tag: 'Cast Marble',
        image:
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'dining',
    title: 'Dining & Wine Displays',
    category: 'Entertaining Hub',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85',
  },
];

// ─────────────────────────────────────────────────────────────
// COMMERCIAL & CIVIL SERVICES (12 Images)
// 3 Offices, 3 Civil Works, 3 Heavy Construction, 3 Lobbies
// ─────────────────────────────────────────────────────────────
export const COMMERCIAL_SERVICES: ServiceCard[] = [
  {
    id: 'corporate-offices',
    title: 'Corporate HQ Fit-Outs',
    category: 'Enterprise Workplace',
    aspect: 'hero',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    subCards: [
      {
        id: 'boardrooms',
        title: 'Executive Boardrooms',
        tag: 'Acoustic Glass',
        image:
          'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'open-plan',
        title: 'Agile Workspaces',
        tag: 'Ergonomic Pods',
        image:
          'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'breakout',
        title: 'Executive Lounges',
        tag: 'Atmospheric Zoning',
        image:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'civil-works',
    title: 'Precision Civil Works',
    category: 'Direct Site Execution',
    aspect: 'portrait',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'flooring-tiles',
        title: 'Heavy Vitrified & Italian Marble',
        tag: 'Laser Leveling',
        image:
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'doors-hardware',
        title: 'Fire-Rated Doors & Partitions',
        tag: 'Certified MEP',
        image:
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'structural-concrete',
        title: 'Structural Masonry & Beams',
        tag: 'Sneha Civil Base',
        image:
          'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'tender-contracts',
    title: 'L&T & Govt Tender Executions',
    category: 'Institutional Compliance',
    aspect: 'landscape',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'raw-rebar',
        title: 'Heavy Rebar & Slabs',
        tag: 'Govt Tender',
        image:
          'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'industrial-plant',
        title: 'Industrial MEP Infrastructure',
        tag: 'Turnkey Civil',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'commercial-lobbies',
    title: 'Enterprise Lobbies & Atriums',
    category: 'Architectural Reception',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'building-contracts',
    title: 'Building Contracts & Facades',
    category: 'Full-Scope Structural',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
  },
];

// ─────────────────────────────────────────────────────────────
// QUOTATION TRAP QUIZ ASSETS (12 Images)
// 4 Property Types, 4 Scopes, 4 Style Vibes
// ─────────────────────────────────────────────────────────────
export const QUIZ_PROPERTY_TYPES: QuizOption[] = [
  {
    id: 'villa',
    title: 'Private Villa / Bungalow',
    subtitle: 'Standalone architecture, multi-floor layout',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    tag: 'Villa',
  },
  {
    id: 'apartment',
    title: 'High-Rise Apartment',
    subtitle: '2, 3, or 4 BHK residential residence',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tag: 'Apartment',
  },
  {
    id: 'office',
    title: 'Enterprise Office Space',
    subtitle: 'Corporate headquarters or commercial floor',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tag: 'Corporate',
  },
  {
    id: 'tender',
    title: 'Commercial Tender / Civil',
    subtitle: 'L&T sub-contract or institutional execution',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    tag: 'Tender',
  },
];

export const QUIZ_SCOPE_OPTIONS: QuizOption[] = [
  {
    id: 'full-interior',
    title: 'Full Turnkey Interior',
    subtitle: 'Complete design, modular carpentry, MEP & finishing',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    tag: 'Turnkey',
  },
  {
    id: 'modular-kitchen',
    title: 'Architectural Kitchen Only',
    subtitle: 'German hardware, quartz counter, acrylic panels',
    image:
      '/images/designs/kitchen_l_shaped.jpg',
    tag: 'Kitchen',
  },
  {
    id: 'civil-construction',
    title: 'Civil & Structural Works',
    subtitle: 'Wall realignment, precision tiles, plumbing, doors',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tag: 'Civil',
  },
  {
    id: 'corporate-fitout',
    title: 'Office Fit-Out & MEP',
    subtitle: 'Acoustic glass cabins, HVAC, modular desks',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    tag: 'Office',
  },
];

export const QUIZ_STYLE_VIBES: QuizOption[] = [
  {
    id: 'minimalist',
    title: 'Minimalist Wabi-Sabi',
    subtitle: 'Earthy lime wash, microcement, clean shadow gaps',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    tag: 'Minimal',
  },
  {
    id: 'modern-contemporary',
    title: 'Modern Contemporary',
    subtitle: 'Warm fluted oak, brass trims, indirect ambient coves',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Modern',
  },
  {
    id: 'ultra-luxury',
    title: 'Ultra-Luxury Italian',
    subtitle: 'Bookmatched Statuario, smoked glass, bronze detailing',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    tag: 'Luxury',
  },
  {
    id: 'industrial-chic',
    title: 'Industrial Enterprise',
    subtitle: 'Exposed structural concrete, black metal, linear acoustic',
    image:
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    tag: 'Industrial',
  },
];

// ─────────────────────────────────────────────────────────────
// BEFORE / AFTER SLIDERS (8 Images = 4 Matched Pairs)
// ─────────────────────────────────────────────────────────────
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'residential-transformation',
    title: 'Seawoods Luxury High-Rise Penthouse',
    shortTitle: 'Seawoods Luxury',
    location: 'Seawoods Grand Central, Navi Mumbai',
    category: 'residential',
    beforeImage: '/images/transformations/seawoods_before.jpg',
    afterImage: '/images/transformations/seawoods_after.jpg',
    beforeLabel: 'Raw Concrete Shell',
    afterLabel: 'Handover: Living Sanctuary',
    specs: ['Civil Wall Realignment', 'Acoustic Ceilings', 'Italian Statuario Floor', 'Smart CCT Lighting'],
  },
  {
    id: 'kitchen-transformation',
    title: 'Kharghar Villa Modular Kitchen',
    shortTitle: 'Kharghar Villa',
    location: 'Kharghar Sector 8, Navi Mumbai',
    category: 'residential',
    beforeImage: '/images/transformations/kharghar_before.jpg',
    afterImage: '/images/transformations/kharghar_after.jpg',
    beforeLabel: 'Raw Plumbing & Masonry',
    afterLabel: 'Handover: German Hardware Kitchen',
    specs: ['Anti-Fingerprint Acrylic', 'Quartz Countertops', 'Blum Soft-Close', 'Integrated Hafele Appliances'],
  },
  {
    id: 'commercial-transformation',
    title: 'Vashi Tech Park Enterprise HQ',
    shortTitle: 'Vashi Tech',
    location: 'Vashi Infotech Park, Navi Mumbai',
    category: 'commercial',
    beforeImage: '/images/transformations/vashi_before.jpg',
    afterImage: '/images/transformations/vashi_after.jpg',
    beforeLabel: 'Bare Industrial Shell',
    afterLabel: 'Handover: 120-Seat Enterprise HQ',
    specs: ['Fire-Rated Glass Partitions', 'Heavy Duty Vitrified Floor', 'HVAC Ducting Integration', 'Access Control Security'],
  },
  {
    id: 'master-transformation',
    title: 'Palm Beach Road Master Suite',
    shortTitle: 'Palm Beach',
    location: 'Palm Beach Road, Nerul, Navi Mumbai',
    category: 'residential',
    beforeImage: '/images/transformations/palm_beach_before.jpg',
    afterImage: '/images/transformations/palm_beach_after.jpg',
    beforeLabel: 'Raw Civil Bedroom',
    afterLabel: 'Handover: Acoustic Master Suite',
    specs: ['Fluted Timber Paneling', 'Concealed Duct AC', 'Walk-In Glass Wardrobe', 'Engineered Oak Flooring'],
  },
];

// ─────────────────────────────────────────────────────────────
// SPLIT FOOTER SHOWCASE IMAGE (1)
// ─────────────────────────────────────────────────────────────
export const FOOTER_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85';

// ─────────────────────────────────────────────────────────────
// GOOGLE REVIEWS & VIDEO TESTIMONIALS (6 Cards + Videos)
// ─────────────────────────────────────────────────────────────
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'review-1',
    name: 'Priya & Rajesh Mukherji',
    role: 'Homeowners · 3 BHK Penthouse',
    locality: 'Seawoods Grand Central',
    projectType: 'Turnkey Luxury Interior',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment:
      'ShineX took our bare civil shell in Seawoods and handed back a sanctuary. The German drawer systems and seamless quartz island are flawless. Zero contractor drama.',
    videoThumbnail:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    videoDuration: '1:45',
    lowerThird: {
      client: 'Priya & Rajesh Mukherji',
      scope: '3 BHK Turnkey Handover',
      location: 'Seawoods, Navi Mumbai',
      turnaround: '48 Days · Zero Snags',
    },
  },
  {
    id: 'review-2',
    name: 'Capt. Sameer Varma',
    role: 'Homeowner · 4 BHK Duplex',
    locality: 'Kharghar Sector 8',
    projectType: 'Architectural Kitchen & Civil Realignment',
    rating: 5,
    timeAgo: '1 month ago',
    comment:
      'The civil execution capability of Sneha Enterprises backing ShineX showed on day one. Realigned two load-bearing columns and delivered millimetric tile joints.',
    videoThumbnail:
      '/images/designs/kitchen_l_shaped.jpg',
    videoDuration: '2:10',
    lowerThird: {
      client: 'Capt. Sameer Varma',
      scope: 'Civil Realignment & Modular Kitchen',
      location: 'Kharghar, Navi Mumbai',
      turnaround: '35 Days · Laser Leveled',
    },
  },
  {
    id: 'review-3',
    name: 'Vikramaditya Singhania',
    role: 'Managing Director · Fintech HQ',
    locality: 'Vashi Infotech Park',
    projectType: '120-Seat Corporate Fit-Out',
    rating: 5,
    timeAgo: '3 weeks ago',
    comment:
      'Delivered our 8,500 sq.ft regional headquarters on budget and two days ahead of schedule. Flawless acoustic glass boardrooms and heavy vitrified flooring.',
    videoThumbnail:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    videoDuration: '2:30',
    lowerThird: {
      client: 'Vikramaditya Singhania',
      scope: '8,500 sq.ft Enterprise HQ',
      location: 'Vashi Infotech Park',
      turnaround: '52 Days · Turnkey Handover',
    },
  },
  {
    id: 'review-4',
    name: 'Dr. Ananya Deshmukh',
    role: 'Homeowner · Luxury Apartment',
    locality: 'Palm Beach Road, Nerul',
    projectType: 'Master Suite & Spa Bathrooms',
    rating: 5,
    timeAgo: '2 months ago',
    comment:
      'Every millimeter of our master suite was detailed with care. Fluted acoustic panels and monolithic stone in the bathrooms create an absolute hotel feel at home.',
    videoThumbnail:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    videoDuration: '1:55',
    lowerThird: {
      client: 'Dr. Ananya Deshmukh',
      scope: 'Master Suite & Spa Bathrooms',
      location: 'Palm Beach Road, Nerul',
      turnaround: '28 Days · Moisture Sealed',
    },
  },
  {
    id: 'review-5',
    name: 'Karan Mehra',
    role: 'Executive Director · Logistics Hub',
    locality: 'Panvel / JNPT Corridor',
    projectType: 'Tender Execution & Commercial Office',
    rating: 5,
    timeAgo: '1 month ago',
    comment:
      'Sneha Enterprises has been our trusted contractor for 8 years. ShineX brought high-end design discipline to their already rock-solid civil foundation.',
    videoThumbnail:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    videoDuration: '2:05',
    lowerThird: {
      client: 'Karan Mehra',
      scope: 'Commercial Civil & Admin Office',
      location: 'Panvel Corridor',
      turnaround: '40 Days · ISO Compliant',
    },
  },
  {
    id: 'review-6',
    name: 'Suhas & Neha Kulkarni',
    role: 'Homeowners · 3.5 BHK Residence',
    locality: 'Hiranandani Estate / Powai',
    projectType: 'Turnkey Living & Kitchen',
    rating: 5,
    timeAgo: '3 weeks ago',
    comment:
      'The 15% booking offer was honored transparently with itemized BOQ. The 3D VR walkthrough matched the real physical handover down to the veneer grain.',
    videoThumbnail:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    videoDuration: '1:40',
    lowerThird: {
      client: 'Suhas & Neha Kulkarni',
      scope: '3.5 BHK Complete Turnkey',
      location: 'Powai, Mumbai',
      turnaround: '45 Days · BOQ Guaranteed',
    },
  },
];
