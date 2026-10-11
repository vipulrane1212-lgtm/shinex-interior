'use client';

import React from 'react';
import { DESIGN_CATEGORIES, DesignCategory } from '@/lib/designIdeasCatalog';
import { Sparkles, Grid } from 'lucide-react';

interface CategoryPillRibbonProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  totalDesignsCount: number;
}

export default function CategoryPillRibbon({
  selectedCategory,
  onSelectCategory,
  totalDesignsCount,
}: CategoryPillRibbonProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold flex items-center gap-1.5">
          <Grid size={13} />
          <span>Select Room Category (28 Available)</span>
        </span>
        <span className="text-[11px] font-mono text-plaster-muted">
          {selectedCategory === 'all'
            ? `Showing All Categories`
            : DESIGN_CATEGORIES.find((c) => c.slug === selectedCategory)?.title || ''}
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {/* "All" Category Pill */}
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 border cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-gold text-white font-bold border-gold shadow-md'
              : 'bg-ink-card/80 text-zinc-300 hover:text-white border-ink-border hover:border-gold/50'
          }`}
        >
          <Sparkles size={12} className={selectedCategory === 'all' ? 'text-white' : 'text-gold'} />
          <span>All Ideas</span>
          <span
            className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
              selectedCategory === 'all' ? 'bg-black/40 text-white' : 'bg-black/60 text-zinc-400'
            }`}
          >
            {totalDesignsCount}
          </span>
        </button>

        {/* 28 Categories */}
        {DESIGN_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.slug;

          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onSelectCategory(cat.slug)}
              className={`px-3.5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-gold text-white font-bold border-gold shadow-md'
                  : 'bg-ink-card/80 text-zinc-300 hover:text-white border-ink-border hover:border-gold/50'
              }`}
            >
              <span className="truncate">{cat.title}</span>
              {cat.totalCount > 0 && (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                    isActive ? 'bg-black/40 text-white' : 'bg-black/60 text-zinc-400'
                  }`}
                >
                  {cat.totalCount.toLocaleString()}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
