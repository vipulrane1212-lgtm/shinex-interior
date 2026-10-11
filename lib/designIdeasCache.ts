'use client';

import { DesignIdeaItem, INITIAL_SHOWCASE_DESIGNS } from './designIdeasCatalog';

// In-memory cache for instantaneous zero-latency tab switching
const memoryCache = new Map<string, DesignIdeaItem[]>();

// Pre-fill memory cache with initial showcase
memoryCache.set('all', INITIAL_SHOWCASE_DESIGNS);

function getBasePath(): string {
  if (typeof window === 'undefined') return '';
  const isGitHubPages =
    window.location.hostname.includes('github.io') ||
    window.location.pathname.startsWith('/shinex-interior');
  return isGitHubPages ? '/shinex-interior' : '';
}

export async function fetchCategoryDesigns(categorySlug: string): Promise<DesignIdeaItem[]> {
  // 1. Check in-memory cache
  if (memoryCache.has(categorySlug)) {
    return memoryCache.get(categorySlug)!;
  }

  // 2. Check browser localStorage
  if (typeof window !== 'undefined') {
    try {
      const storageKey = `shinex_designs_${categorySlug}_v1`;
      const cached = window.localStorage.getItem(storageKey);
      if (cached) {
        const parsed = JSON.parse(cached) as DesignIdeaItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryCache.set(categorySlug, parsed);
          return parsed;
        }
      }
    } catch {
      // Ignore localStorage errors (e.g., quota or private browsing)
    }
  }

  // 3. Fetch from static JSON file
  try {
    const basePath = getBasePath();
    const url = `${basePath}/data/design-ideas/${categorySlug}.json`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to load ${url} (status: ${res.status})`);
    }
    const data = (await res.json()) as DesignIdeaItem[];

    // Cache in memory
    memoryCache.set(categorySlug, data);

    // Cache in localStorage
    if (typeof window !== 'undefined') {
      try {
        const storageKey = `shinex_designs_${categorySlug}_v1`;
        window.localStorage.setItem(storageKey, JSON.stringify(data));
      } catch {
        // Storage quota exceeded or disabled
      }
    }

    return data;
  } catch (err) {
    console.warn(`[DesignIdeasCache] Fallback for ${categorySlug}:`, err);
    // Return filtered initial showcase as resilient fallback
    if (categorySlug === 'all') return INITIAL_SHOWCASE_DESIGNS;
    return INITIAL_SHOWCASE_DESIGNS.filter((d) => d.category_slug === categorySlug);
  }
}
