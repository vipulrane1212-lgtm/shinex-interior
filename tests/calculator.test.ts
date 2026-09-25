import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBOQ,
  formatINR,
  generateBOQCode,
  CONFIG_BASE_PRICES,
  SCOPE_MULTIPLIERS,
  AESTHETIC_FACTORS,
  MATERIAL_TIERS,
} from '../src/lib/calculatorLogic';
import {
  TAXONOMY_VARIANTS,
  WORKFLOW_MILESTONES,
  GOOGLE_REVIEWS_DATA,
  BRAND_PROFILE,
} from '../src/lib/mockData';
import { CalculatorState, PropertyConfig, ProjectScope, AestheticStyle, MaterialTier } from '../src/lib/types';

describe('Quotation Calculator Engine & BOQ Mathematics', () => {
  it('correctly calculates 3BHK Full Turnkey with German Tier', () => {
    const state: CalculatorState = {
      step: 5,
      configuration: '3BHK',
      scope: 'full_turnkey',
      aesthetic: 'warm_minimalist',
      materialTier: 'premium_german',
      timeline: '30_60_days',
    };

    const result = calculateBOQ(state);

    const expectedBase = CONFIG_BASE_PRICES['3BHK'].base; // 1,250,000
    const expectedScope = SCOPE_MULTIPLIERS['full_turnkey'].factor; // 1.0
    const expectedAesthetic = AESTHETIC_FACTORS['warm_minimalist'].factor; // 1.0
    const expectedMarkup = MATERIAL_TIERS['premium_german'].markup; // 1.25

    const expectedSubtotal = Math.round(expectedBase * expectedScope * expectedAesthetic * expectedMarkup);
    const expectedSavings = Math.round(expectedSubtotal * 0.15);
    const expectedFinal = expectedSubtotal - expectedSavings;

    assert.equal(result.subtotal, expectedSubtotal);
    assert.equal(result.discountSavings, expectedSavings);
    assert.equal(result.finalDiscountedTotal, expectedFinal);
    assert.equal(result.discountPercent, 15);
    assert.equal(result.warrantyPeriodYears, 10);
    assert.equal(result.penaltyClauseRatePerDay, 1500);

    // Sum of items rawAmount must equal subtotal exactly
    const itemsRawSum = result.items.reduce((acc, it) => acc + it.rawAmount, 0);
    assert.equal(itemsRawSum, expectedSubtotal);

    // Sum of items discountedAmount must equal finalDiscountedTotal exactly
    const itemsDiscSum = result.items.reduce((acc, it) => acc + it.discountedAmount, 0);
    assert.equal(itemsDiscSum, expectedFinal);
  });

  it('correctly calculates kitchen_only scope with bespoke veneer', () => {
    const state: CalculatorState = {
      step: 5,
      configuration: '4BHK',
      scope: 'kitchen_only',
      aesthetic: 'luxe_contemporary',
      materialTier: 'bespoke_veneer',
      timeline: 'immediate',
    };

    const result = calculateBOQ(state);

    const expectedBase = CONFIG_BASE_PRICES['4BHK'].base;
    const expectedScope = SCOPE_MULTIPLIERS['kitchen_only'].factor;
    const expectedAesthetic = AESTHETIC_FACTORS['luxe_contemporary'].factor;
    const expectedMarkup = MATERIAL_TIERS['bespoke_veneer'].markup;

    const expectedSubtotal = Math.round(expectedBase * expectedScope * expectedAesthetic * expectedMarkup);
    const expectedSavings = Math.round(expectedSubtotal * 0.15);
    const expectedFinal = expectedSubtotal - expectedSavings;

    assert.equal(result.subtotal, expectedSubtotal);
    assert.equal(result.finalDiscountedTotal, expectedFinal);
    assert.equal(result.estimatedTimelineDays, 40); // 'immediate' gives 40 days

    // Line items must be specialized kitchen items
    assert.equal(result.items.length, 4);
    assert.ok(result.items.some((i) => i.label.includes('Cabinetry Carcass')));
    assert.ok(result.items.some((i) => i.label.includes('Countertop')));
  });

  it('correctly calculates wardrobes_living scope and renovation scope', () => {
    const wardrobeState: CalculatorState = {
      step: 5,
      configuration: '2BHK',
      scope: 'wardrobes_living',
      aesthetic: 'japandi',
      materialTier: 'essential',
      timeline: '30_60_days',
    };

    const wardrobeResult = calculateBOQ(wardrobeState);
    assert.equal(wardrobeResult.items.length, 4);
    assert.ok(wardrobeResult.items.some((i) => i.label.includes('Wardrobes')));

    const renoState: CalculatorState = {
      step: 5,
      configuration: 'Villa',
      scope: 'renovation',
      aesthetic: 'modern_classical',
      materialTier: 'bespoke_veneer',
      timeline: 'exploring',
    };

    const renoResult = calculateBOQ(renoState);
    assert.equal(renoResult.items.length, 6);
    assert.equal(renoResult.estimatedTimelineDays, 45);
  });

  it('correctly handles all configuration variants without throwing', () => {
    const configs: PropertyConfig[] = ['1BHK', '2BHK', '3BHK', '4BHK', 'Villa', 'Commercial'];
    const scopes: ProjectScope[] = ['full_turnkey', 'kitchen_only', 'wardrobes_living', 'renovation'];
    const aesthetics: AestheticStyle[] = ['warm_minimalist', 'modern_classical', 'japandi', 'luxe_contemporary'];
    const tiers: MaterialTier[] = ['essential', 'premium_german', 'bespoke_veneer'];

    for (const cfg of configs) {
      for (const scope of scopes) {
        for (const aesthetic of aesthetics) {
          for (const tier of tiers) {
            const state: CalculatorState = {
              step: 5,
              configuration: cfg,
              scope,
              aesthetic,
              materialTier: tier,
              timeline: '30_60_days',
            };
            const result = calculateBOQ(state);
            assert.ok(result.subtotal > 0, `Subtotal should be > 0 for ${cfg}-${scope}-${tier}`);
            assert.ok(result.finalDiscountedTotal > 0);
            assert.equal(result.discountSavings, Math.round(result.subtotal * 0.15));
            assert.equal(result.finalDiscountedTotal, result.subtotal - result.discountSavings);
            assert.ok(result.items.length >= 4);
          }
        }
      }
    }
  });

  it('handles fallback safely when unknown configuration is passed', () => {
    // @ts-expect-error Testing runtime fallback safety
    const fallbackResult = calculateBOQ({ configuration: 'UNKNOWN' });
    assert.ok(fallbackResult.subtotal > 0);
    assert.ok(fallbackResult.finalDiscountedTotal > 0);
  });

  it('formats INR correctly according to Indian numbering system', () => {
    assert.match(formatINR(1250000), /12,50,000/);
    assert.match(formatINR(480000), /4,80,000/);
    assert.equal(formatINR(0), '₹0');
    assert.equal(formatINR(NaN), '₹0');
    // @ts-expect-error Testing null fallback
    assert.equal(formatINR(null), '₹0');
    // @ts-expect-error Testing undefined fallback
    assert.equal(formatINR(undefined), '₹0');
  });

  it('validates Turnkey BOQ categories contain all 5 required functional cost heads', () => {
    const state: CalculatorState = {
      step: 5,
      configuration: '3BHK',
      scope: 'full_turnkey',
      aesthetic: 'warm_minimalist',
      materialTier: 'premium_german',
      timeline: '30_60_days',
    };
    const result = calculateBOQ(state);
    const categories = result.items.map((i) => i.category);

    assert.ok(categories.includes('Modular Kitchen'), 'Must include Modular Kitchen');
    assert.ok(categories.includes('Wardrobes & Storage'), 'Must include Wardrobes');
    assert.ok(categories.includes('False Ceiling'), 'Must include False Ceiling');
    assert.ok(categories.includes('Electrical & Plumbing'), 'Must include Electrical/Plumbing');
    assert.ok(categories.includes('Civil Work'), 'Must include Civil Work');
  });

  it('sanitizes and validates Indian WhatsApp numbers robustly', async () => {
    const { sanitizeWhatsAppPhone } = await import('../src/lib/calculatorLogic');

    const valid10 = sanitizeWhatsAppPhone('9845012890');
    assert.equal(valid10.isValid, true);
    assert.equal(valid10.rawDigits, '919845012890');
    assert.equal(valid10.formatted, '+91 98450 12890');

    const validWithCountry = sanitizeWhatsAppPhone('+91 98450 12890');
    assert.equal(validWithCountry.isValid, true);
    assert.equal(validWithCountry.rawDigits, '919845012890');

    const validDashed = sanitizeWhatsAppPhone('+91-98450-12890');
    assert.equal(validDashed.isValid, true);

    const invalidShort = sanitizeWhatsAppPhone('98450');
    assert.equal(invalidShort.isValid, false);

    const empty = sanitizeWhatsAppPhone('');
    assert.equal(empty.isValid, false);
  });

  it('generates unique BOQ codes prefixed with SX and config', () => {
    const code1 = generateBOQCode('3BHK');
    const code2 = generateBOQCode('3BHK');
    assert.ok(code1.startsWith('SX-3BHK-'));
    assert.ok(code2.startsWith('SX-3BHK-'));
    assert.notEqual(code1, code2);
  });
});

describe('Domain Data Integrity & Specifications', () => {
  it('validates taxonomy catalog completeness', () => {
    assert.ok(TAXONOMY_VARIANTS.length >= 10);
    const categories = new Set(TAXONOMY_VARIANTS.map((v) => v.category));
    assert.ok(categories.has('kitchen'));
    assert.ok(categories.has('bedroom'));
    assert.ok(categories.has('living'));
    assert.ok(categories.has('commercial'));

    for (const v of TAXONOMY_VARIANTS) {
      assert.ok(v.title, 'Variant should have title');
      assert.ok(v.image.startsWith('https://'), 'Variant image should be secure URL');
      assert.ok(v.quoteDefaults, 'Variant should have quoteDefaults');
      assert.ok(v.features.length >= 3, 'Variant should have at least 3 features');
      assert.ok(v.startingPrice.includes('Lakh'), 'Price should be formatted in Lakhs');
    }
  });

  it('validates 5-milestone journey sequence', () => {
    assert.equal(WORKFLOW_MILESTONES.length, 5);
    const stepNums = WORKFLOW_MILESTONES.map((m) => m.stepNumber);
    assert.deepEqual(stepNums, ['01', '02', '03', '04', '05']);

    assert.ok(WORKFLOW_MILESTONES[0].title.includes('3D Virtual Blueprint'));
    assert.ok(WORKFLOW_MILESTONES[1].title.includes('Price Lock'));
    assert.ok(WORKFLOW_MILESTONES[2].title.includes('German Factory'));
    assert.ok(WORKFLOW_MILESTONES[3].title.includes('45-Day'));
    assert.ok(WORKFLOW_MILESTONES[4].title.includes('10-Year'));
  });

  it('validates Google review ratings and video reels', () => {
    assert.ok(GOOGLE_REVIEWS_DATA.length >= 5);
    const avgRating =
      GOOGLE_REVIEWS_DATA.reduce((acc, r) => acc + r.rating, 0) / GOOGLE_REVIEWS_DATA.length;
    assert.ok(avgRating >= 4.9);

    const videoReels = GOOGLE_REVIEWS_DATA.filter((r) => r.videoReel);
    assert.ok(videoReels.length >= 3, 'Should have at least 3 video reels');

    for (const r of videoReels) {
      assert.ok(r.videoReel?.duration);
      assert.ok(r.videoReel?.highlights.length >= 3);
      assert.ok(r.videoReel?.specs.kitchen);
    }

    const priyaReel = GOOGLE_REVIEWS_DATA.find((r) => r.author.includes('Priya'))?.videoReel;
    assert.ok(priyaReel, 'Priya review must have video reel');
    assert.equal(priyaReel?.triggerLabel, "Watch Priya's 45-Day Handover Video");
  });

  it('validates brand profile legal entities and factories', () => {
    assert.equal(BRAND_PROFILE.brandName, 'ShineX Infra Interior');
    assert.equal(BRAND_PROFILE.parentEntity, 'Sneha Enterprises');
    assert.equal(BRAND_PROFILE.experienceCenters.length, 2);
    assert.equal(BRAND_PROFILE.factories.length, 2);
  });
});
