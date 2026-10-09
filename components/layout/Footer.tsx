'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { useTrack } from '@/context/TrackContext';

export default function Footer() {
  const { track } = useTrack();

  return (
    <footer className="bg-ink border-t border-ink-border pt-16 pb-12 text-plaster-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ink-border/80">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif tracking-[0.2em] text-plaster font-semibold uppercase">
                ShineX
              </span>
              <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-semibold font-sans">
                Infra Interior
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-plaster-muted font-normal">
              High-end residential interior architecture and industrial-grade civil contracting. Built to endure, detailed for slow luxury.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[11px] text-gold font-mono">
              <ShieldCheck size={15} />
              <span>A Sneha Enterprises Studio · 16 Years Civil Execution</span>
            </div>
          </div>

          {/* Quick Track Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
              Architectural Tracks
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#services" className="hover:text-plaster transition-colors">
                  Residential Modular Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-plaster transition-colors">
                  Commercial Fit-Outs & MEP
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-plaster transition-colors">
                  Civil Before / After Sliders
                </a>
              </li>
              <li>
                <Link href={`/quote?track=${track}`} className="text-gold hover:underline flex items-center gap-1 font-medium">
                  Request Specification Quote <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Atelier & Civil HQ */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold block">
              Studio & Execution Base
            </span>
            <div className="space-y-2.5 text-xs text-plaster-muted font-sans">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Sector 19A, Seawoods / Vashi, Navi Mumbai, Maharashtra 400706</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+919820000000"
                  className="hover:text-plaster transition-colors font-mono font-medium whitespace-nowrap"
                >
                  +91&nbsp;98200&nbsp;00000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:studio@shinexinfra.com" className="hover:text-plaster transition-colors">
                  studio@shinexinfra.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-plaster-dim font-mono">
          <p>© {new Date().getFullYear()} ShineX Infra Interior · Sneha Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Navi Mumbai · Mumbai Suburbs</span>
            <span className="hidden sm:inline text-ink-border">|</span>
            <span>Direct Civil Licensure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
