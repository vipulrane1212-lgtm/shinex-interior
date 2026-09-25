export type PropertyConfig = '1BHK' | '2BHK' | '3BHK' | '4BHK' | 'Villa' | 'Commercial';

export type ProjectScope = 'full_turnkey' | 'kitchen_only' | 'wardrobes_living' | 'renovation';

export type AestheticStyle = 'warm_minimalist' | 'modern_classical' | 'japandi' | 'luxe_contemporary';

export type MaterialTier = 'essential' | 'premium_german' | 'bespoke_veneer';

export type TimelineUrgency = 'immediate' | '30_60_days' | 'exploring';

export interface UserLeadData {
  fullName: string;
  whatsappNumber: string;
  pincode: string;
  propertyName?: string;
  email?: string;
}

export interface CalculatorState {
  step: number;
  configuration: PropertyConfig;
  scope: ProjectScope;
  aesthetic: AestheticStyle;
  materialTier: MaterialTier;
  timeline: TimelineUrgency;
  userData?: UserLeadData;
}

export interface BOQItem {
  id: string;
  category: string;
  label: string;
  specification: string;
  hardware: string;
  rawAmount: number;
  discountedAmount: number;
}

export interface BOQCalculationResult {
  config: PropertyConfig;
  scope: ProjectScope;
  aesthetic: AestheticStyle;
  materialTier: MaterialTier;
  items: BOQItem[];
  subtotal: number;
  discountPercent: number;
  discountSavings: number;
  finalDiscountedTotal: number;
  estimatedTimelineDays: number;
  warrantyPeriodYears: number;
  penaltyClauseRatePerDay: number;
}

export type TaxonomyCategoryKey = 'kitchen' | 'bedroom' | 'living' | 'commercial';

export interface TaxonomyVariant {
  id: string;
  category: TaxonomyCategoryKey;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  localAiImage?: string;
  recommendedSize: string;
  hardwareSpec: string;
  coreMaterial: string;
  edgeBanding: string;
  finishType: string;
  startingPrice: string;
  features: string[];
  quoteDefaults: {
    configuration: PropertyConfig;
    scope: ProjectScope;
    aesthetic: AestheticStyle;
    materialTier: MaterialTier;
  };
}

export interface VideoReelData {
  id: string;
  title: string;
  triggerLabel?: string;
  homeownerName: string;
  projectTag: string;
  handoverDays: number;
  location: string;
  thumbnail: string;
  duration: string;
  quote: string;
  highlights: string[];
  specs: {
    kitchen: string;
    wardrobes: string;
    livingWall: string;
  };
}

export interface GoogleReviewItem {
  id: string;
  author: string;
  avatar: string;
  location: string;
  isLocalGuide: boolean;
  reviewsCount?: number;
  rating: number;
  relativeTime: string;
  projectBadge: string;
  title: string;
  content: string;
  videoReel?: VideoReelData;
}

export interface WorkflowMilestone {
  stepNumber: string;
  stepIndex: number;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
  inspectionStandard: string;
  badge: string;
  icon: string;
  highlightStat: string;
  illustrationImage?: string;
}

export interface BeforeAfterItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  sqft: string;
  handoverDays: number;
  specs: {
    coreMaterial: string;
    hardware: string;
    lighting: string;
    warranty: string;
  };
  highlightQuote: string;
}

