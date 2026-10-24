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
    title: 'Custom / Modular Kitchens',
    category: 'Kitchen Layouts & Details',
    aspect: 'hero',
    image:
      '/images/designs/kitchen_l_shaped.jpg',
    subCards: [
      {
        id: 'l-shaped',
        title: 'L-Shaped Kitchen',
        tag: 'Ergonomic Triangle',
        image:
          'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'u-shaped',
        title: 'U-Shaped Kitchen',
        tag: '3-Wall Counter',
        image:
          'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'island',
        title: 'Kitchen with a Centre Table / Island',
        tag: 'Centre Island',
        image:
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'parallel',
        title: 'Parallel Kitchen',
        tag: 'Dual Counter',
        image:
          'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'bedrooms',
    title: 'Main Bedrooms',
    category: 'Bedroom Furniture',
    aspect: 'portrait',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'modern-master',
        title: 'Modern Bed (without visible legs)',
        tag: 'Modern Bed',
        image:
          'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'minimal-japandi',
        title: 'Simple Wooden & Fabric Bed Backrest',
        tag: 'Bed Backrest',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'luxury-wardrobe',
        title: 'Glass-Door Walk-In Closet',
        tag: 'Glass Closet',
        image:
          'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'kids-guest',
        title: 'Standard Wardrobe with Top Storage (Loft)',
        tag: 'Wardrobe with Loft',
        image:
          'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'living',
    title: 'Living Rooms / Drawing Rooms',
    category: 'Living Room Designs',
    aspect: 'landscape',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'media-wall',
        title: 'Premium Wooden & Marble TV Unit',
        tag: 'TV Unit',
        image:
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'social-lounge',
        title: 'High-Ceiling Marble Living Room',
        tag: 'High Ceiling',
        image:
          'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'balcony-deck',
        title: 'Outdoor Balcony Flooring & Cabinets',
        tag: 'Balcony Deck',
        image:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'bathrooms',
    title: 'Luxury Bathrooms',
    category: 'Bathroom Fittings',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=85',
    subCards: [
      {
        id: 'rain-shower',
        title: 'Glass Shower Partition Area',
        tag: 'Shower Area',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'stone-tub',
        title: 'Standalone Bathtub',
        tag: 'Bathtub',
        image:
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'dining',
    title: 'Dining Areas & Bar Units',
    category: 'Dining & Special Woodwork',
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
    title: 'Complete Office Interiors',
    category: 'Office Spaces',
    aspect: 'hero',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    subCards: [
      {
        id: 'boardrooms',
        title: 'Soundproof Meeting Rooms with TV/Projector',
        tag: 'Meeting Rooms',
        image:
          'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'open-plan',
        title: 'Flexible Office Desks & Quiet Cabins',
        tag: 'Office Desks',
        image:
          'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'breakout',
        title: 'Office Canteen & Pantry Area',
        tag: 'Canteen & Pantry',
        image:
          'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'civil-works',
    title: 'Basic Construction & Masonry',
    category: 'Specific Construction Works',
    aspect: 'portrait',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'flooring-tiles',
        title: 'Perfectly Leveled Tile & Marble Fitting',
        tag: 'Tile & Marble',
        image:
          'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'doors-hardware',
        title: 'Fireproof Walls & AC/Plumbing Setup',
        tag: 'Fireproof Setup',
        image:
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'structural-concrete',
        title: 'RCC Foundation & Slab Work (Pillars & Slabs)',
        tag: 'Pillars & Slabs',
        image:
          'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'tender-contracts',
    title: 'Large-Scale & Govt Contract Work',
    category: 'Large-Scale Construction',
    aspect: 'landscape',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    subCards: [
      {
        id: 'raw-rebar',
        title: 'RCC Foundation & Slab Work (Pillars & Slabs)',
        tag: 'Heavy Slabs',
        image:
          'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'industrial-plant',
        title: 'Factory Sheds & Steel Roof Structures',
        tag: 'Steel Structures',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'commercial-lobbies',
    title: 'Main Office Receptions & Waiting Areas',
    category: 'Reception & Common Areas',
    aspect: 'square',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'building-contracts',
    title: 'Building Construction & Outer Elevations',
    category: 'Main Construction Works',
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
// COMMERCIAL BEFORE / AFTER SLIDERS (4 Images = 2 Matched Pairs)
// Shown only under the Commercial tab of the Transformations section.
// Residential tab keeps BEFORE_AFTER_PAIRS exactly as-is.
// ─────────────────────────────────────────────────────────────
export const COMMERCIAL_BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: 'commercial-office-transformation',
    title: 'Mumbai Corporate Office',
    shortTitle: 'Corporate Office',
    location: 'Mumbai',
    category: 'commercial',
    beforeImage: '/images/transformations/commercial_office_before.jpg',
    afterImage: '/images/transformations/commercial_office_after.jpg',
    beforeLabel: 'Raw Concrete Office Shell',
    afterLabel: 'Handover: Corporate Office',
    specs: ['Warm Walnut & Marble Finish', 'Open-Plan Workstations', 'Cove & Task Lighting', 'Client-Ready Lounge'],
  },
  {
    id: 'commercial-retail-transformation',
    title: 'Mumbai Retail Showroom',
    shortTitle: 'Retail Showroom',
    location: 'Mumbai',
    category: 'commercial',
    beforeImage: '/images/transformations/commercial_retail_before.jpg',
    afterImage: '/images/transformations/commercial_retail_after.jpg',
    beforeLabel: 'Empty Retail Shop Shell',
    afterLabel: 'Handover: Retail Showroom',
    specs: ['Fluted Oak Display Shelving', 'White Marble Counters', 'Warm Track Lighting', 'Premium Boutique Finish'],
  },
];

// ─────────────────────────────────────────────────────────────
// SPLIT FOOTER SHOWCASE IMAGE (1)
// ─────────────────────────────────────────────────────────────
export const FOOTER_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=85';

// ─────────────────────────────────────────────────────────────
// GOOGLE REVIEWS — 15 real reviews from the Sneha Enterprises Google listing (4.9 stars, 117 reviews)
// ─────────────────────────────────────────────────────────────
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'review-1',
    name: "Renu Mukherjee",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Home Interiors",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Sneha Enterprises and the entire team has done the interiors of our 2 houses. They are remarkable in project planning and execution. The discipline with which they execute work, track work, provide details of work progress and expense details is phenomenal. It is a total pleasure to work with them.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Renu Mukherjee",
      scope: "Home Interiors",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-2',
    name: "Kaushal Kishore",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Full Flat Renovation",
    rating: 5,
    timeAgo: "7 months ago",
    comment: "We are absolutely delighted with our full flat renovation. From the first consultation to the final touches, everything was handled professionally and smoothly. Salim and his team was easy to communicate with, kept us updated, and delivered exactly what was promised. The quality of the work is top-notch and our place feels brand new. Thank you for an amazing job!",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Kaushal Kishore",
      scope: "Full Flat Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-3',
    name: "FARIDA SINGAPURI",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Interior Execution",
    rating: 5,
    timeAgo: "10 months ago",
    comment: "As an Interior Designer, I have always faced a challenge when it comes to site execution. Any design put on paper is easier than replicating it on site. But with Salim I have never faced that issue. His knowledge of materials and detailing always brings out the best results. His team is as efficient and supportive. The clients have always been happy with the quality of work he delivers. The efforts he puts in every project is very evident in the end result and also the appreciative feedback from clients. Kudos to him and his team. Looking forward to beautifully shaping many more spaces with Sneha Enterprises.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "FARIDA SINGAPURI",
      scope: "Interior Execution",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-4',
    name: "swapna chiluka",
    role: 'Google Review',
    locality: "NRI Complex, Seawoods",
    projectType: "Full House Renovation",
    rating: 5,
    timeAgo: "10 months ago",
    comment: "Salim did great work renovating our entire house in NRI complex and we are truly impressed with his professional work. The flat was basic CIDCO property and after Salim and his dedicated team did miracle and made it beautiful. simple but effective solutions employed to achieve the desired results. The work has been completed within the given timelines and budget. We recommend Salim and Sneha enterprise for all kinds of renovation (civil and aesthetic) works. Thanks",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "swapna chiluka",
      scope: "Full House Renovation",
      location: "NRI Complex, Seawoods",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-5',
    name: "Amita Singh",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Painting & Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "Our home was in need of painting and some renovation, something we had been postponing for quite some time. A single call to Salim changed everything. He handled the entire process swiftly, and within no time, the work had begun. In just 2.5 months, our home looks fresh, beautiful, and completely transformed; so much so that we don't feel like going anywhere else! Salim is deeply dedicated to his work. He not only brings your vision to life but also offers thoughtful suggestions and creative ideas to improve the final outcome. He listens carefully, understands your needs, and delivers with precision. I am extremely happy with his work and would highly recommend him to anyone looking to renovate their home.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Amita Singh",
      scope: "Painting & Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-6',
    name: "umesh nagannawar",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Flat Renovation",
    rating: 5,
    timeAgo: "4 years ago",
    comment: "Excellent renovation work done by Salim and team. Many innovative ideas were presented by him to turn the flat into a home. I would like to get services from them in the future as well. And definitely recommend to others too.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "umesh nagannawar",
      scope: "Flat Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-7',
    name: "santhosh Kumar Nair",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Civil, Electrical & Carpentry",
    rating: 5,
    timeAgo: "4 years ago",
    comment: "I explained my requirements with Mr. Saleem and after completing the work, I am really surprised, because the quality, finishing all are beyond my expectation. Mr. Saleem is having a highly expertise team of workers in Civil, Electric and carpentry. All my friends and relatives visited the house highly appreciated the work. Mr. Saleem ensured the quality of product used at each stage. I strongly recommend Mr. Saleem for any Civil work. You will never be disappointed.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "santhosh Kumar Nair",
      scope: "Civil, Electrical & Carpentry",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-8',
    name: "YUVRAJ AJETRAO",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Renovation",
    rating: 5,
    timeAgo: "10 months ago",
    comment: "Salim has a good team, he works with dedication has a good attitude of handling and taking responsibility of assigned work. His approach is always with best financial deals. I wish him best success onwards. Thanks",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "YUVRAJ AJETRAO",
      scope: "Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-9',
    name: "Tophid Mulla",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "3BHK Flat Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "I recently worked with Interior designer firm Sneha Enterprises (Proprietor Mr. Salim Ahmed) on complete renovation of my 3BHK flat. The designer's creativity in selecting colors schemes and furniture was outstanding. Despite a few bumps along the way, the designer's professionalism ensured everything was completed on time. Communication was very good the best part of the designer Mr. Salim Ahmed is he answers your calls however busy he is and always solves all your query. He always has a backup plan ready if something is not going right way and before executing his plan, he will inform you, consult with you explain the pros and cons and then execute the plan. His team is very good and very professional. Working with Sneha Enterprises (Mr. Salim Ahmed) was an absolute pleasure from initial consultation to the final reveal they were incredibly professional, creative and attentive to my needs and budget. He listened to our vision and translated it into stunning reality. I am thrilled with the results and outcome and highly recommend Sneha Enterprises to anyone looking to transform their space.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Tophid Mulla",
      scope: "3BHK Flat Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-10',
    name: "Yashodhara Chakravarty",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Flat Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "Sneha Enterprises did a great job of renovating our flat, and we are very happy with the result. Salim is very committed to each project, and has a great team working with him. He takes the time to understand the requirements of the client in detail, and delivers exactly as his clients want. Specially highlighting some of his positives - great design ideas, attention to detail, finishing projects on time. Thank you Salim, and your wonderful team. Pleasure working with you.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Yashodhara Chakravarty",
      scope: "Flat Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-11',
    name: "shilpa shingare",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Home Renovation",
    rating: 5,
    timeAgo: "11 months ago",
    comment: "Saleem bhai and his team is very professional, they are the wonderful team to work with. They have renovated our home so nicely. They all are very dedicated, they keep very good communication with client. Right from the start he plan his work and execute it so effortlessly. we wish to work again with him and with his team.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "shilpa shingare",
      scope: "Home Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-12',
    name: "Dinit Chaudhary",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Complete House Renovation",
    rating: 5,
    timeAgo: "2 years ago",
    comment: "We recently employed the services of Sneha enterprises for the complete renovation of our house and Salim and his team did an excellent job. Salim has indepth knowledge of his field and is technically sound. He has good aesthetic sense and completes work with utmost precision. He leads a proficient team and maintains the required personal touch. Hope to see Salim turn more dreams into reality.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Dinit Chaudhary",
      scope: "Complete House Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-13',
    name: "Rajeev Aggarwal",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "Construction & Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "We availed services of Sneha Enterprise twice in the recent past. Salim is the best contractor in the town. He understands the nuances of the business in detail and always try to suggest the best solution. He is a man who believes in offering quality services even if it doesn't result in his benefit. I would also not shy to mention that he always try to maintain the relationships even after the work is over. Would highly recommend him for all construction/renovation related requirements.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Rajeev Aggarwal",
      scope: "Construction & Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-14',
    name: "Yogesh Doifode",
    role: 'Google Review',
    locality: "NRI Complex, Seawoods",
    projectType: "2BHK Flat Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "I recently worked with Interior designer firm Sneha Enterprises (Proprietor Mr. Salimbhai Ahmed) on complete renovation of my 2BHK flat in NRI Complex Seawoods. Sneha Enterprises did a great job of renovating our flat, and we are very happy with the result. Salimbhai is very committed to each project, and has a great team working with him. He takes the time to understand the requirements of the client in detail, and delivers exactly as his clients want. Specially highlighting some of his positives - great design ideas, attention to detail, finishing projects on time. They turn dreams into reality. An excellent team of civil, electrical, air conditioning, carpenter to even movers and transport, where every person is committed to the work. One stop solution for interiors, renovation and rebuilding. They adhere to timeline and budget. Responsible and after work service response is also good. Thank you Salimbhai, and your wonderful team. Pleasure working with you.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "Yogesh Doifode",
      scope: "2BHK Flat Renovation",
      location: "NRI Complex, Seawoods",
      turnaround: 'Verified Google Review',
    },
  },
  {
    id: 'review-15',
    name: "parviz mulla",
    role: 'Google Review',
    locality: "Navi Mumbai",
    projectType: "3BHK Flat Renovation",
    rating: 5,
    timeAgo: "a year ago",
    comment: "Mr Salim Proprietor of Sneha Enterprises renovated my 3 BHK flat it was complete renovation. I am thankful to Mr Salim for completely transforming it into my dream space. Mr Salim has a great communication skills which made it possible to keep us updated from day one with the work chart, the schedules that would be followed the line of work was explained. Attending to calls not even a single call goes unanswered Salim is prompt in answering calls. The craftsmanship was topnotch finishes were perfect attention to little things which made a big difference in overall look. The design colors furniture work has turned out excellent. The entire team of Sneha Enterprises is polite punctual and skilled. Deadlines throughout the project were followed. Listening coming up with solutions. Salim is well versed with latest trends in market and accordingly follows latest technology too. Putting up ideas executing exactly as per our needs was given top preference. Mr Salim is well versed with norms of CHS so it was hassle free smooth journey of renovation. I am happy the way my flat has turned. I would highly recommend Sneha Enterprise.",
    videoThumbnail: '',
    videoDuration: '',
    lowerThird: {
      client: "parviz mulla",
      scope: "3BHK Flat Renovation",
      location: "Navi Mumbai",
      turnaround: 'Verified Google Review',
    },
  },
];
