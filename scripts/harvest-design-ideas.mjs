import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_API = 'https://cdn.livspace.com/sales/content';
const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json',
};

const DATA_DIR = path.resolve('public', 'data', 'design-ideas');
const LIB_FILE = path.resolve('lib', 'designIdeasCatalog.ts');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: HEADERS }, (res) => {
      let data = '';
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`HTTP ${res.statusCode}: ${url}`));
      }
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

function parseHtmlSpecifications(html) {
  if (!html) return {};
  const specs = {};

  const clean = (str) =>
    str
      ? str
          .replace(/<[^>]+>/g, '')
          .replace(/&amp;/g, '&')
          .replace(/&nbsp;/g, ' ')
          .replace(/&#39;/g, "'")
          .trim()
      : '';

  const layoutMatch = html.match(/<strong>Layout:\s*<\/strong>\s*([^<]+)/i);
  if (layoutMatch) specs.layout = clean(layoutMatch[1]);

  const dimMatch = html.match(/<strong>Room Dimension:\s*<\/strong>\s*([^<]+)/i);
  if (dimMatch) specs.room_dimensions = clean(dimMatch[1]);

  const styleMatch = html.match(/<strong>Style:\s*<\/strong>\s*([^<]+)/i);
  if (styleMatch) specs.style = clean(styleMatch[1]);

  const colorMatch = html.match(/<strong>Colour:\s*<\/strong>\s*([^<]+)/i);
  if (colorMatch) specs.colours = clean(colorMatch[1]);

  const finishMatch = html.match(/<strong>Shutter finish:\s*<\/strong>\s*([^<]+)/i);
  if (finishMatch) specs.shutter_finish = clean(finishMatch[1]);

  const counterMatch = html.match(/<strong>Countertop Material:\s*<\/strong>\s*([^<]+)/i);
  if (counterMatch) specs.countertop_material = clean(counterMatch[1]);

  const idealMatch = html.match(/<strong>Ideal for:\s*<\/strong>\s*([^<]+)/i);
  if (idealMatch) specs.ideal_for = clean(idealMatch[1]);

  // Storage features
  const storageSection = html.match(/<strong>Storage Features:<\/strong>([\s\S]*?)(?=<strong>|$)/i);
  if (storageSection) {
    const bullets = storageSection[1].match(/<p>-\s*([^<]+)<\/p>/gi) || [];
    specs.storage_features = bullets.map(clean).filter(Boolean);
  } else {
    specs.storage_features = [];
  }

  // Special features
  const specialSection = html.match(/<strong>Special Features:<\/strong>([\s\S]*?)(?=<strong>|$)/i);
  if (specialSection) {
    const bullets = specialSection[1].match(/<p>-\s*([^<]+)<\/p>/gi) || [];
    specs.special_features = bullets.map(clean).filter(Boolean);
  } else {
    specs.special_features = [];
  }

  return specs;
}

function computeEstimatedBudget(categorySlug, roomSize, specifications) {
  // Mumbai localized indicative ranges based on category & size
  const baseMap = {
    'kitchen-designs': { min: 165000, max: 275000, unit: 'Modular Kitchen' },
    'bedrooms': { min: 180000, max: 320000, unit: 'Master Bedroom Suite' },
    'living-rooms': { min: 195000, max: 380000, unit: 'Living & Media Lounge' },
    'wardrobe-designs': { min: 85000, max: 195000, unit: 'Floor-to-Ceiling Wardrobe' },
    'tv-unit-designs': { min: 45000, max: 120000, unit: 'Designer TV Console' },
    'bathroom': { min: 95000, max: 220000, unit: 'Bespoke Spa Bathroom' },
    'pooja-room': { min: 48000, max: 135000, unit: 'Sacred Mandir Suite' },
    'false-ceiling-designs': { min: 40000, max: 95000, unit: 'Acoustic False Ceiling' },
    'dining-room': { min: 75000, max: 190000, unit: 'Dining & Bar Unit' },
    'foyer-room': { min: 38000, max: 85000, unit: 'Foyer Shoe Console' },
    'balcony': { min: 45000, max: 110000, unit: 'Balcony Decking & Storage' },
    'home-office': { min: 65000, max: 160000, unit: 'Study & Work Pod' },
    'kids-room': { min: 140000, max: 260000, unit: 'Kids Bedroom Suite' },
    'space-saving-designs': { min: 75000, max: 180000, unit: 'Smart Transformable Unit' },
  };

  const defaultRange = baseMap[categorySlug] || { min: 60000, max: 150000, unit: 'Custom Joinery' };
  const minLakh = (defaultRange.min / 100000).toFixed(2);
  const maxLakh = (defaultRange.max / 100000).toFixed(2);
  return {
    indicativeRange: `₹${minLakh}L – ₹${maxLakh}L`,
    unitType: defaultRange.unit,
  };
}

async function harvest() {
  console.log('--- 🚀 STARTING LIVSPACE DESIGN IDEAS HARVESTER ---');

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // 1. Fetch Categories
  console.log('1. Fetching 28 categories directory...');
  const catRes = await fetchJson(
    `${BASE_API}/api/v1/collections/looks-category?filters=availableRegions.eq:IN&size=100`
  );

  const categories = (catRes.content || [])
    .filter((c) => c.slug)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      pageTitle: c.pageTitle || c.title,
      description: c.description ? c.description.replace(/<[^>]+>/g, '').trim() : '',
      desktopBanner: c.images?.desktop || '',
      mobileBanner: c.images?.mobile || '',
      order: parseInt(c.order, 10) || 99,
      totalCount: 0,
    }))
    .sort((a, b) => a.order - b.order);

  console.log(`Found ${categories.length} categories.`);

  // 2. Fetch designs per category
  const allDesigns = [];
  const categoryStats = [];

  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    console.log(`[${i + 1}/${categories.length}] Harvesting designs for: ${cat.title} (${cat.slug})...`);

    try {
      const designRes = await fetchJson(
        `${BASE_API}/api/v1/collections/looks,smart-photo-lite?legacy_filters=country.eq:IN;roomType.in:${cat.slug}&page=0&size=16`
      );

      const items = designRes.content || [];
      cat.totalCount = designRes.total_elements || items.length;
      categoryStats.push({ slug: cat.slug, title: cat.title, totalInCatalog: cat.totalCount, harvested: items.length });

      const categoryDesigns = [];

      for (const item of items) {
        const rawImages = item.addImages || [];
        const coverObj = rawImages.find((img) => img.cover) || rawImages[0] || {};
        const rawCoverUrl = coverObj.desktop || '';

        if (!rawCoverUrl) continue;

        // Dynamic CDN scaled URL
        const cdnCoverUrl = rawCoverUrl.startsWith('https://images.livspace-cdn.com')
          ? rawCoverUrl
          : `https://images.livspace-cdn.com/w:1000/plain/${rawCoverUrl}`;

        const specs = parseHtmlSpecifications(item.description);
        const roomSize = item.roomSize || specs.room_dimensions || '';
        const budget = computeEstimatedBudget(cat.slug, roomSize, specs);

        const normalized = {
          id: item.slug || `design-${Date.now()}-${Math.random().toString(36).substring(7)}`,
          title: item.title || item.name || `${cat.title} Concept`,
          category_slug: cat.slug,
          category_name: cat.title,
          cover_image: cdnCoverUrl,
          raw_image: rawCoverUrl,
          alt_text: coverObj.altText || item.altText || item.title || '',
          room_size: roomSize,
          style: specs.style || (Array.isArray(item.style) ? item.style.join(', ') : item.style) || 'Modern',
          specifications: specs,
          budget_estimate: budget.indicativeRange,
          unit_type: budget.unitType,
          tags: Array.isArray(item.tags) ? item.tags : [],
          all_images: rawImages.map((img) => ({
            url: img.desktop
              ? `https://images.livspace-cdn.com/w:1000/plain/${img.desktop}`
              : cdnCoverUrl,
            alt: img.altText || item.title || '',
            cover: !!img.cover,
          })),
        };

        categoryDesigns.push(normalized);
        allDesigns.push(normalized);
      }

      // Save category JSON file
      fs.writeFileSync(
        path.join(DATA_DIR, `${cat.slug}.json`),
        JSON.stringify(categoryDesigns, null, 2),
        'utf8'
      );

      // Brief delay to be polite
      await new Promise((r) => setTimeout(r, 60));
    } catch (err) {
      console.error(`Error harvesting ${cat.slug}:`, err.message);
    }
  }

  // 3. Save categories directory JSON
  fs.writeFileSync(
    path.join(DATA_DIR, 'categories.json'),
    JSON.stringify(categories, null, 2),
    'utf8'
  );

  // 4. Save consolidated designs JSON
  fs.writeFileSync(
    path.join(DATA_DIR, 'all.json'),
    JSON.stringify(allDesigns, null, 2),
    'utf8'
  );

  console.log(`\nHarvested total ${allDesigns.length} designs across ${categories.length} categories.`);

  // 5. Generate lib/designIdeasCatalog.ts with embedded fallback for zero-latency initial paint
  const showcaseSample = allDesigns.slice(0, 32); // Top 32 designs bundled directly for instant SSR/CSR
  const tsContent = `// AUTO-GENERATED BY scripts/harvest-design-ideas.mjs
// Do not edit manually. Master catalog for Livspace Design Ideas Studio.

export interface DesignSpecification {
  layout?: string;
  room_dimensions?: string;
  style?: string;
  colours?: string;
  shutter_finish?: string;
  countertop_material?: string;
  storage_features?: string[];
  special_features?: string[];
  ideal_for?: string;
}

export interface DesignIdeaItem {
  id: string;
  title: string;
  category_slug: string;
  category_name: string;
  cover_image: string;
  raw_image: string;
  alt_text: string;
  room_size: string;
  style: string;
  specifications: DesignSpecification;
  budget_estimate: string;
  unit_type: string;
  tags: string[];
  all_images: Array<{
    url: string;
    alt: string;
    cover: boolean;
  }>;
}

export interface DesignCategory {
  slug: string;
  title: string;
  pageTitle: string;
  description: string;
  desktopBanner: string;
  mobileBanner: string;
  order: number;
  totalCount: number;
}

export const DESIGN_CATEGORIES: DesignCategory[] = ${JSON.stringify(categories, null, 2)};

export const INITIAL_SHOWCASE_DESIGNS: DesignIdeaItem[] = ${JSON.stringify(showcaseSample, null, 2)};

export const TOTAL_CATALOG_COUNT = ${categories.reduce((acc, c) => acc + (c.totalCount || 0), 0)};
`;

  fs.writeFileSync(LIB_FILE, tsContent, 'utf8');
  console.log(`Generated ${LIB_FILE} cleanly.`);
  console.log('--- ✅ HARVEST COMPLETE ---');
}

harvest().catch((err) => {
  console.error('Fatal harvest error:', err);
  process.exit(1);
});
