'use client';

import React from 'react';
import { useTrack } from '@/context/TrackContext';
import { Home, Building2 } from 'lucide-react';

export default function TrackToggle({ className = '' }: { className?: string }) {
  const { track, setTrack } = useTrack();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-ink-card/90 border border-ink-border backdrop-blur-md transition-all shadow-lg ${className}`}
      role="tablist"
      aria-label="Select Architecture Track"
    >
      <button
        type="button"
        role="tab"
        aria-selected={track === 'residential'}
        onClick={() => setTrack('residential')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
          track === 'residential'
            ? 'bg-gold text-ink font-semibold shadow-md'
            : 'text-plaster-muted hover:text-plaster'
        }`}
      >
        <Home size={14} className={track === 'residential' ? 'stroke-[2.5]' : ''} />
        <span>Residential</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={track === 'commercial'}
        onClick={() => setTrack('commercial')}
        className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
          track === 'commercial'
            ? 'bg-gold text-ink font-semibold shadow-md'
            : 'text-plaster-muted hover:text-plaster'
        }`}
      >
        <Building2 size={14} className={track === 'commercial' ? 'stroke-[2.5]' : ''} />
        <span>Commercial & Civil</span>
      </button>
    </div>
  );
}
