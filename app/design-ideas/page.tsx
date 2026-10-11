'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Header from '@/components/layout/Header';
import SplitFooter from '@/components/layout/SplitFooter';
import CategoryPillRibbon from '@/components/design-ideas/CategoryPillRibbon';
import DesignIdeaCard from '@/components/design-ideas/DesignIdeaCard';
import DesignSpecificationModal from '@/components/design-ideas/DesignSpecificationModal';
import {
  DESIGN_CATEGORIES,
  INITIAL_SHOWCASE_DESIGNS,
  TOTAL_CATALOG_COUNT,
  DesignIdeaItem,
} from '@/lib/designIdeasCatalog';
import { fetchCategoryDesigns } from '@/lib/designIdeasCache';
import { useQuiz } from '@/context/QuizContext';
import {
  Search,
  SlidersHorizontal,
  Compass,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Layers,
  ArrowUpRight,
  Zap,
} from 'lucide-react';

const STYLES = ['All Styles', 'Modern', 'Contemporary', 'Classic', 'Minimalist', 'Industrial'];
const LAYOUTS = ['All Layouts', 'L Shape', 'Parallel', 'Island', 'U Shape', 'Straight'];

export default function DesignIdeasPage() {
  const { openQuiz } = useQuiz();

  const [selectedCategory, setSelectedCategory] = useState<string>('kitchen-designs');
  const [designs, setDesigns] = useState<DesignIdeaItem[]>(INITIAL_SHOWCASE_DESIGNS);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [selectedLayout, setSelectedLayout] = useState<string>('All Layouts');
  const [displayCount, setDisplayCount] = useState<number>(24);
  const [activeModalDesign, setActiveModalDesign] = useState<DesignIdeaItem | null>(null);

  // Load category designs when category changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchCategoryDesigns(selectedCategory).then((data) => {
      if (isMounted) {
        setDesigns(data);
        setLoading(false);
        setDisplayCount(24);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [selectedCategory]);

  // Client-side filtering across search, style, and layout
  const filteredDesigns = useMemo(() => {
    return designs.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchCat = item.category_name.toLowerCase().includes(q);
        const matchStyle = item.style.toLowerCase().includes(q);
        const matchSize = item.room_size.toLowerCase().includes(q);
        const matchLayout = (item.specifications.layout || '').toLowerCase().includes(q);
        const matchFinish = (item.specifications.shutter_finish || '').toLowerCase().includes(q);
        const matchCounter = (item.specifications.countertop_material || '').toLowerCase().includes(q);
        if (
          !matchTitle &&
          !matchCat &&
          !matchStyle &&
          !matchSize &&
          !matchLayout &&
          !matchFinish &&
          !matchCounter
        ) {
          return false;
        }
      }

      // 2. Style Filter
      if (selectedStyle !== 'All Styles') {
        const itemStyle = (item.style || '').toLowerCase();
        const specStyle = (item.specifications.style || '').toLowerCase();
        if (!itemStyle.includes(selectedStyle.toLowerCase()) && !specStyle.includes(selectedStyle.toLowerCase())) {
          return false;
        }
      }

      // 3. Layout Filter
      if (selectedLayout !== 'All Layouts') {
        const specLayout = (item.specifications.layout || '').toLowerCase();
        if (!specLayout.includes(selectedLayout.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [designs, searchQuery, selectedStyle, selectedLayout]);

  const visibleDesigns = useMemo(() => {
    return filteredDesigns.slice(0, displayCount);
  }, [filteredDesigns, displayCount]);

  const handleRequestQuote = (design: DesignIdeaItem) => {
    // Open the quotation trap modal
    openQuiz();
  };

  const currentCategoryObj = useMemo(() => {
    return DESIGN_CATEGORIES.find((c) => c.slug === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-ink text-plaster font-sans selection:bg-gold selection:text-white">
      {/* Top Universal Header */}
      <Header />

      <main className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ================= HERO HEADER ================= */}
        <div className="space-y-4 max-w-4xl">
          <div className="uiverse-pill inline-flex">
            <div className="uiverse-blob1" />
            <div className="uiverse-blob2" />
            <div className="uiverse-inner">
              <Sparkles size={13} className="text-cyan-300 shrink-0" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-white drop-shadow">
                Bespoke Design Ideas Studio
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-semibold text-plaster tracking-tight leading-tight">
            Curated Architectural <span className="text-gold italic font-normal">Design Ideas</span>
          </h1>

          <p className="text-sm sm:text-base text-plaster-muted font-light max-w-3xl leading-relaxed">
            Browse thousands of real site-tested interior concepts across 28 room categories. Explore
            custom dimensions, modular joinery materials, and German Blum/Hafele hardware configurations
            with direct Class-1 civil contractor execution in Mumbai &amp; Navi Mumbai.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-zinc-400">
            <span className="px-3 py-1 rounded-full bg-ink-card border border-ink-border text-gold font-bold">
              ● 28 Room Categories
            </span>
            <span className="px-3 py-1 rounded-full bg-ink-card border border-ink-border text-zinc-300">
              ● 26,000+ Master Designs Cataloged
            </span>
            <span className="px-3 py-1 rounded-full bg-ink-card border border-ink-border text-zinc-300">
              ● Fixed BOQ &amp; 10-Yr Waterproof Warranty
            </span>
          </div>
        </div>

        {/* ================= SEARCH & QUICK FILTERS BAR ================= */}
        <div className="p-4 sm:p-6 rounded-3xl bg-ink-card border border-ink-border shadow-2xl space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-plaster-muted pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, e.g. 'Island Kitchen', '14x12 feet', 'Acrylic High Gloss', 'Pooja Mandir'..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-black/60 border border-ink-border focus:border-gold text-xs sm:text-sm text-plaster placeholder:text-zinc-500 focus:outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Style Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-black/60 border border-ink-border text-xs font-mono text-zinc-300 focus:border-gold focus:outline-none"
              >
                {STYLES.map((s) => (
                  <option key={s} value={s} className="bg-ink-card text-white">
                    {s}
                  </option>
                ))}
              </select>

              {/* Layout Selector */}
              <select
                value={selectedLayout}
                onChange={(e) => setSelectedLayout(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-black/60 border border-ink-border text-xs font-mono text-zinc-300 focus:border-gold focus:outline-none"
              >
                {LAYOUTS.map((l) => (
                  <option key={l} value={l} className="bg-ink-card text-white">
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 28 Categories Ribbon */}
          <CategoryPillRibbon
            selectedCategory={selectedCategory}
            onSelectCategory={(slug) => setSelectedCategory(slug)}
            totalDesignsCount={TOTAL_CATALOG_COUNT}
          />
        </div>

        {/* ================= CATEGORY HEADER SUMMARY ================= */}
        {currentCategoryObj && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-ink-border">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-gold uppercase tracking-wider font-bold">
                <Compass size={14} />
                <span>Active Gallery</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-plaster mt-1">
                {currentCategoryObj.title}
              </h2>
              {currentCategoryObj.description && (
                <p className="text-xs sm:text-sm text-plaster-muted font-light mt-1 max-w-2xl line-clamp-2">
                  {currentCategoryObj.description}
                </p>
              )}
            </div>

            <div className="text-xs font-mono text-plaster-muted shrink-0">
              Showing <span className="text-gold font-bold">{visibleDesigns.length}</span> of{' '}
              <span className="text-white font-bold">{filteredDesigns.length}</span> concepts
              {currentCategoryObj?.totalCount ? (
                <span className="text-zinc-500"> ({currentCategoryObj.totalCount.toLocaleString()} total in catalog)</span>
              ) : null}
            </div>
          </div>
        )}

        {/* ================= DESIGN CARDS GRID (CONTAINER FITTED) ================= */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-ink-card border border-ink-border animate-pulse flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
              </div>
            ))}
          </div>
        ) : visibleDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {visibleDesigns.map((design) => (
              <DesignIdeaCard
                key={design.id}
                design={design}
                onInspect={(d) => setActiveModalDesign(d)}
                onRequestQuote={handleRequestQuote}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4 rounded-3xl bg-ink-card border border-ink-border p-8">
            <Compass size={40} className="mx-auto text-gold animate-bounce" />
            <h3 className="text-xl font-serif text-plaster">No designs matching your filter</h3>
            <p className="text-xs text-plaster-muted max-w-md mx-auto">
              Try resetting your search query or choosing another room category from the 28 available options.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedStyle('All Styles');
                setSelectedLayout('All Layouts');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-full bg-gold text-white text-xs font-mono uppercase tracking-wider font-bold shadow-md hover:bg-gold-dark transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* ================= LOAD MORE & EXPAND CONTROLS ================= */}
        {!loading && visibleDesigns.length < filteredDesigns.length && (
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setDisplayCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              <Zap size={14} className="text-white" />
              <span>
                Load More (+24 Designs) · {filteredDesigns.length - visibleDesigns.length} Remaining
              </span>
            </button>

            <button
              type="button"
              onClick={() => setDisplayCount(filteredDesigns.length)}
              className="px-6 py-3.5 rounded-full bg-ink-card hover:bg-ink-soft text-zinc-300 hover:text-white border border-ink-border text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>Show All {filteredDesigns.length} Concepts</span>
            </button>
          </div>
        )}

        {/* ================= BOTTOM ATELIER BANNER ================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-ink-card via-black to-ink-card border border-ink-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck size={16} />
              <span>Class-1 Civil &amp; Interior Execution</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-plaster">
              Loved a Design? Get It Executed at Direct Factory Rates.
            </h3>
            <p className="text-xs sm:text-sm text-plaster-muted font-light">
              Bring any photo or room idea from our catalog to our Seawoods atelier. We will provide an
              itemized, zero-hidden-cost BOQ and 3D architectural plan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openQuiz()}
            className="btn-luxury px-8 py-4 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-sans font-bold uppercase tracking-wider shadow-xl inline-flex items-center gap-2 shrink-0"
          >
            <span>Request Free Site Measurement &amp; 3D Plan</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </main>

      {/* Specification Inspector Modal */}
      <DesignSpecificationModal
        design={activeModalDesign}
        onClose={() => setActiveModalDesign(null)}
        onRequestQuote={handleRequestQuote}
      />

      {/* Universal Footer */}
      <SplitFooter />
    </div>
  );
}
