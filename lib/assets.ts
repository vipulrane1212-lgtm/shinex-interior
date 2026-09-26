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
  location: string;
  category: 'residential' | 'commercial';
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  specs: string[];
}

export const RESIDENTIAL_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85';

export const COMMERCIAL_HERO_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85';

export const RESIDENTIAL_SERVICES: ServiceCard[] = [
  {
    id: 'kitchens',
    title: 'Architectural Kitchens',
    category: 'Modular System',
    aspect: 'hero',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
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
        id: 'floating-bed',
        title: 'Floating Bed Systems',
        tag: 'Acoustic Panel',
        image:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'walk-in-closet',
        title: 'Walk-In Wardrobes',
        tag: 'Fluted Glass',
        image:
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
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
  },
  {
    id: 'bathrooms',
    title: 'Bespoke Spa Bathrooms',
    category: 'Monolithic Stone',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85',
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
        id: 'reception',
        title: 'Lobby & Reception Monoliths',
        tag: 'Backlit Stone',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
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
    ],
  },
  {
    id: 'tender-contracts',
    title: 'L&T & Govt Tender Executions',
    category: 'Institutional Compliance',
    aspect: 'landscape',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'building-contracts',
    title: 'Building Contracts & Facades',
    category: 'Full-Scope Structural',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'retail-hospitality',
    title: 'Retail & Hospitality Flagships',
    category: 'High-Footfall Architecture',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
  },
];

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'residential-transformation',
    title: 'Seawoods Luxury High-Rise Penthouse',
    location: 'Seawoods Grand Central, Navi Mumbai',
    category: 'residential',
    beforeImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80', // raw construction site
    afterImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85', // finished ultra-luxury lounge
    beforeLabel: 'Raw Concrete Shell',
    afterLabel: 'Handover: Living Sanctuary',
    specs: ['Civil Wall Realignment', 'Acoustic Ceilings', 'Italian Statuario Floor', 'Smart CCT Lighting'],
  },
  {
    id: 'kitchen-transformation',
    title: 'Kharghar Villa Modular Kitchen',
    location: 'Kharghar Sector 8, Navi Mumbai',
    category: 'residential',
    beforeImage:
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80', // raw MEP & masonry
    afterImage:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85', // finished designer kitchen
    beforeLabel: 'Raw Plumbing & Masonry',
    afterLabel: 'Handover: German Hardware Kitchen',
    specs: ['Anti-Fingerprint Acrylic', 'Quartz Countertops', 'Blum Soft-Close', 'Integrated Hafele Appliances'],
  },
  {
    id: 'commercial-transformation',
    title: 'Vashi Tech Park Enterprise HQ',
    location: 'Vashi Infotech Park, Navi Mumbai',
    category: 'commercial',
    beforeImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80', // industrial warehouse structure
    afterImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85', // finished modern corporate workspace
    beforeLabel: 'Bare Industrial Shell',
    afterLabel: 'Handover: 120-Seat Enterprise HQ',
    specs: ['Fire-Rated Glass Partitions', 'Heavy Duty Vitrified Floor', 'HVAC Ducting Integration', 'Access Control Security'],
  },
];
