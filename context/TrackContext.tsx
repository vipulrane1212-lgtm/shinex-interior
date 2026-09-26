'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type TrackType = 'residential' | 'commercial';

interface TrackContextType {
  track: TrackType;
  setTrack: (track: TrackType) => void;
  toggleTrack: () => void;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export function TrackProvider({ children }: { children: React.ReactNode }) {
  const [track, setTrackState] = useState<TrackType>('residential');

  useEffect(() => {
    // Check initial search params if present
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTrack = params.get('track');
      if (urlTrack === 'commercial' || urlTrack === 'residential') {
        setTrackState(urlTrack);
      }
    }
  }, []);

  const setTrack = (newTrack: TrackType) => {
    setTrackState(newTrack);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('track', newTrack);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const toggleTrack = () => {
    setTrack(track === 'residential' ? 'commercial' : 'residential');
  };

  return (
    <TrackContext.Provider value={{ track, setTrack, toggleTrack }}>
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error('useTrack must be used within a TrackProvider');
  }
  return context;
}
