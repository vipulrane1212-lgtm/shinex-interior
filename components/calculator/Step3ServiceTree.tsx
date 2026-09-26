'use client';

import React, { useState } from 'react';
import { useCalculator } from '@/context/CalculatorContext';
import {
  RESIDENTIAL_SERVICE_TREE,
  COMMERCIAL_SERVICE_TREE,
} from '@/lib/services-tree';
import {
  Check,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CookingPot,
  Bed,
  Tv,
  Bath,
  WashingMachine,
  LayoutGrid,
} from 'lucide-react';

export default function Step3ServiceTree() {
  const {
    projectType,
    selectedRoomItems,
    toggleRoomItem,
    selectKitchenShape,
    spaceType,
    workstationCount,
    setWorkstationCount,
    cabinCount,
    setCabinCount,
    salonStationCount,
    setSalonStationCount,
  } = useCalculator();

  const [expandedCategory, setExpandedCategory] = useState<string>('kitchen');

  const categoryIcons: Record<string, any> = {
    living: Tv,
    kitchen: CookingPot,
    bedroom: Bed,
    bathroom: Bath,
    utility: WashingMachine,
    specialty: LayoutGrid,
  };

  const kitchenShapes = [
    { id: 'kitchen_l_shape', name: 'L-Shaped Modular' },
    { id: 'kitchen_u_shape', name: 'U-Shaped Ergonomic' },
    { id: 'kitchen_parallel', name: 'Parallel Galley' },
    { id: 'kitchen_island', name: 'Island Monolith' },
    { id: 'kitchen_straight', name: 'Straight Studio Run' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-mono font-medium block">
          Step 3 of 7
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-plaster font-semibold mt-1">
          {projectType === 'residential' ? 'Room Modules & Detailed Joinery' : 'Commercial Module Specifications'}
        </h2>
        <p className="text-xs sm:text-sm text-plaster-muted mt-1 font-light">
          {projectType === 'residential'
            ? 'Expand any zone to pick custom joinery, kitchen configurations, and wardrobe types.'
            : 'Specify counts and custom modules for your commercial establishment.'}
        </p>
      </div>

      {/* ================= RESIDENTIAL ROOM TREE ================= */}
      {projectType === 'residential' && (
        <div className="space-y-3">
          {RESIDENTIAL_SERVICE_TREE.map((cat) => {
            const isExpanded = expandedCategory === cat.id;
            const Icon = categoryIcons[cat.id] || LayoutGrid;

            // Count selected items in this category
            const selectedCount = cat.items.filter((item) =>
              selectedRoomItems.includes(item.id)
            ).length;

            return (
              <div
                key={cat.id}
                className="rounded-2xl border border-ink-border bg-ink-card/60 overflow-hidden transition-all"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setExpandedCategory(isExpanded ? '' : cat.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-ink-card transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-ink border border-ink-border flex items-center justify-center text-gold">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-serif font-medium text-plaster">
                          {cat.title}
                        </h3>
                        {selectedCount > 0 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40">
                            {selectedCount} selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-plaster-dim font-light line-clamp-1 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-plaster-dim">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-1 border-t border-ink-border/50 bg-ink/40 space-y-4 animate-in fade-in duration-200">
                    {/* Kitchen Special: Exclusive Shape Selector */}
                    {cat.id === 'kitchen' && (
                      <div className="pb-3 border-b border-ink-border/50">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-gold block mb-2 font-medium">
                          Select Kitchen Countertop Layout (Choose One):
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {kitchenShapes.map((shape) => {
                            const isShapeSelected = selectedRoomItems.includes(shape.id);
                            return (
                              <button
                                key={shape.id}
                                type="button"
                                onClick={() => selectKitchenShape(shape.id)}
                                className={`py-2 px-3 rounded-lg border text-left text-xs font-mono transition-all flex items-center justify-between ${
                                  isShapeSelected
                                    ? 'bg-gold/20 border-gold text-gold font-bold'
                                    : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                                }`}
                              >
                                <span>{shape.name}</span>
                                {isShapeSelected && <Check size={12} />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Sub-Service Items Checkboxes */}
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-plaster-dim block mb-2">
                        {cat.id === 'kitchen' ? 'Kitchen Hardware & Add-Ons:' : 'Available Modules & Joinery:'}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.items
                          .filter((item) => !kitchenShapes.some((s) => s.id === item.id))
                          .map((item) => {
                            const isSelected = selectedRoomItems.includes(item.id);
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => toggleRoomItem(item.id)}
                                className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                                  isSelected
                                    ? 'bg-ink-card border-gold text-plaster shadow-sm'
                                    : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                                }`}
                              >
                                <span className="pr-2">{item.name}</span>
                                <div
                                  className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                                    isSelected
                                      ? 'bg-gold border-gold text-ink'
                                      : 'border-ink-border bg-ink'
                                  }`}
                                >
                                  {isSelected && <Check size={11} />}
                                </div>
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ================= COMMERCIAL COUNTERS & MODULES ================= */}
      {projectType === 'commercial' && (
        <div className="space-y-4">
          {spaceType === 'office' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-ink-card border border-ink-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gold block">
                    Modular Workstations
                  </span>
                  <span className="text-xs text-plaster-dim">Linear ergonomic pod seats</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setWorkstationCount(Math.max(2, workstationCount - 2))}
                    className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-mono text-sm font-semibold w-8 text-center text-plaster">
                    {workstationCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setWorkstationCount(workstationCount + 2)}
                    className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-ink-card border border-ink-border flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gold block">
                    Director Cabins
                  </span>
                  <span className="text-xs text-plaster-dim">Acoustic glass enclosed</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCabinCount(Math.max(1, cabinCount - 1))}
                    className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-mono text-sm font-semibold w-8 text-center text-plaster">
                    {cabinCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCabinCount(cabinCount + 1)}
                    className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {spaceType === 'salon' && (
            <div className="p-5 rounded-2xl bg-ink-card border border-ink-border flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold block">
                  Styling Stations
                </span>
                <span className="text-xs text-plaster-dim">Mirror vanity & dryer connections</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSalonStationCount(Math.max(1, salonStationCount - 1))}
                  className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                >
                  <Minus size={14} />
                </button>
                <span className="font-mono text-sm font-semibold w-8 text-center text-plaster">
                  {salonStationCount}
                </span>
                <button
                  type="button"
                  onClick={() => setSalonStationCount(salonStationCount + 1)}
                  className="w-8 h-8 rounded-lg bg-ink border border-ink-border text-plaster flex items-center justify-center hover:border-gold"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Commercial Sub-Services */}
          <div className="pt-2">
            <label className="text-xs font-mono uppercase tracking-wider text-plaster-muted block mb-3">
              Specialized Architectural Elements:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {COMMERCIAL_SERVICE_TREE.flatMap((cat) => cat.items).map((item) => {
                const isSelected = selectedRoomItems.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleRoomItem(item.id)}
                    className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                      isSelected
                        ? 'bg-ink-card border-gold text-plaster shadow-md'
                        : 'bg-ink border-ink-border text-plaster-muted hover:border-gold/30 hover:text-plaster'
                    }`}
                  >
                    <span>{item.name}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                        isSelected
                          ? 'bg-gold border-gold text-ink'
                          : 'border-ink-border bg-ink'
                      }`}
                    >
                      {isSelected && <Check size={11} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= UTILITY REMINDER ================= */}
      {projectType === 'utility' && (
        <div className="p-5 rounded-2xl bg-ink-card border border-ink-border text-center space-y-2">
          <Sparkles size={24} className="text-gold mx-auto" />
          <h3 className="text-sm font-serif font-medium text-plaster">
            Utility Services Selected
          </h3>
          <p className="text-xs text-plaster-muted max-w-md mx-auto">
            You have configured your civil trades in Step 2. Proceed to Step 4 to select your material specification tier.
          </p>
        </div>
      )}
    </div>
  );
}
