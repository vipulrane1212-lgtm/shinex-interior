'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import { SHINEX_RATES, PriceRange, formatINRRange } from '@/lib/calculator-rates';

export interface CalculatorState {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Step 1
  projectType: 'residential' | 'commercial' | 'utility';
  setProjectType: (type: 'residential' | 'commercial' | 'utility') => void;

  // Step 2
  bhk: string;
  setBhk: (bhk: string) => void;
  residentialScope: string;
  setResidentialScope: (scope: string) => void;
  carpetArea: number | null;
  setCarpetArea: (area: number | null) => void;
  skipArea: boolean;
  setSkipArea: (skip: boolean) => void;

  // Step 2b (Commercial)
  spaceType: string;
  setSpaceType: (type: string) => void;
  commercialArea: number;
  setCommercialArea: (area: number) => void;
  fitoutType: string;
  setFitoutType: (type: string) => void;
  workstationCount: number;
  setWorkstationCount: (count: number) => void;
  cabinCount: number;
  setCabinCount: (count: number) => void;
  salonStationCount: number;
  setSalonStationCount: (count: number) => void;

  // Step 2c (Utility)
  utilityMultiSelect: string[];
  toggleUtilityItem: (id: string) => void;

  // Step 3 (Room Modules)
  selectedRoomItems: string[];
  toggleRoomItem: (id: string) => void;
  selectKitchenShape: (id: string) => void;

  // Step 4 (Finish Tier)
  finishTier: 'essential' | 'premium' | 'luxe';
  setFinishTier: (tier: 'essential' | 'premium' | 'luxe') => void;

  // Step 5 (Civil & Wet Works)
  selectedCivilAddons: string[];
  toggleCivilAddon: (id: string) => void;
  selectedBundle: string | null;
  selectBundle: (bundleId: string | null) => void;

  // Step 6 (Timeline & Extras)
  timeline: string;
  setTimeline: (t: string) => void;
  siteStatus: string;
  setSiteStatus: (s: string) => void;
  isNri: boolean;
  setIsNri: (nri: boolean) => void;
  notes: string;
  setNotes: (n: string) => void;

  // Step 7 (Lead Trap)
  leadName: string;
  setLeadName: (n: string) => void;
  leadPhone: string;
  setLeadPhone: (p: string) => void;
  whatsappSame: boolean;
  setWhatsappSame: (same: boolean) => void;
  leadEmail: string;
  setLeadEmail: (e: string) => void;
  leadCity: string;
  setLeadCity: (c: string) => void;
  preferredCallTime: string;
  setPreferredCallTime: (t: string) => void;
  isSubmitted: boolean;
  setIsSubmitted: (sub: boolean) => void;

  // Computed
  estimate: PriceRange;
  summaryChips: string[];
  generateWhatsAppUrl: () => string;
  resetCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorState | undefined>(undefined);

export function CalculatorProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'utility'>('residential');

  // Step 2: Residential
  const [bhk, setBhk] = useState<string>('2-bhk');
  const [residentialScope, setResidentialScope] = useState<string>('full-home');
  const [carpetArea, setCarpetArea] = useState<number | null>(950);
  const [skipArea, setSkipArea] = useState<boolean>(false);

  // Step 2b: Commercial
  const [spaceType, setSpaceType] = useState<string>('office');
  const [commercialArea, setCommercialArea] = useState<number>(1500);
  const [fitoutType, setFitoutType] = useState<string>('hard-fitout');
  const [workstationCount, setWorkstationCount] = useState<number>(12);
  const [cabinCount, setCabinCount] = useState<number>(2);
  const [salonStationCount, setSalonStationCount] = useState<number>(4);

  // Step 2c: Utility Only
  const [utilityMultiSelect, setUtilityMultiSelect] = useState<string[]>([
    'civil_waterproofing',
    'civil_plumbing',
  ]);

  // Step 3: Room modules
  const [selectedRoomItems, setSelectedRoomItems] = useState<string[]>([
    'kitchen_l_shape',
    'bedroom_wardrobe_sliding',
    'living_tv_unit',
  ]);

  // Step 4: Finish Tier
  const [finishTier, setFinishTier] = useState<'essential' | 'premium' | 'luxe'>('premium');

  // Step 5: Civil Addons
  const [selectedCivilAddons, setSelectedCivilAddons] = useState<string[]>([
    'civil_waterproofing',
    'civil_plumbing',
  ]);
  const [selectedBundle, setSelectedBundle] = useState<string | null>('kitchen_lock');

  // Step 6: Timeline & Extras
  const [timeline, setTimeline] = useState<string>('45-days');
  const [siteStatus, setSiteStatus] = useState<string>('brand-new');
  const [isNri, setIsNri] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>('');

  // Step 7: Lead Info
  const [leadName, setLeadName] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [whatsappSame, setWhatsappSame] = useState<boolean>(true);
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadCity, setLeadCity] = useState<string>('Navi Mumbai / Mumbai');
  const [preferredCallTime, setPreferredCallTime] = useState<string>('Morning (10 AM - 1 PM)');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggleRoomItem = (id: string) => {
    setSelectedRoomItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectKitchenShape = (id: string) => {
    // Clear other kitchen shapes first
    const kitchenShapes = [
      'kitchen_straight',
      'kitchen_l_shape',
      'kitchen_parallel',
      'kitchen_u_shape',
      'kitchen_island',
    ];
    setSelectedRoomItems((prev) => [
      ...prev.filter((item) => !kitchenShapes.includes(item)),
      id,
    ]);
  };

  const toggleUtilityItem = (id: string) => {
    setUtilityMultiSelect((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCivilAddon = (id: string) => {
    setSelectedBundle(null); // Unset bundle if custom toggle
    setSelectedCivilAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectBundle = (bundleId: string | null) => {
    setSelectedBundle(bundleId);
    if (bundleId && SHINEX_RATES.bundles[bundleId]) {
      setSelectedCivilAddons(SHINEX_RATES.bundles[bundleId].items);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 7));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const resetCalculator = () => {
    setStep(1);
    setIsSubmitted(false);
  };

  // Real-Time Running Estimate Engine
  const estimate = useMemo<PriceRange>(() => {
    let min = 0;
    let max = 0;
    const multiplier = SHINEX_RATES.finishMultipliers[finishTier] || 1.0;

    if (projectType === 'residential') {
      const bhkBase = SHINEX_RATES.residential.baseBhk[bhk] || { min: 380000, max: 540000 };
      const scopeMult = SHINEX_RATES.residential.scopeMultiplier[residentialScope] || 1.0;

      if (residentialScope === 'kitchen-only') {
        // Kitchen only: base on selected kitchen items
        let kMin = 0;
        let kMax = 0;
        selectedRoomItems
          .filter((item) => item.startsWith('kitchen_'))
          .forEach((item) => {
            const price = SHINEX_RATES.residential.roomAddons[item];
            if (price) {
              kMin += price.min;
              kMax += price.max;
            }
          });
        if (kMin === 0) {
          kMin = 180000;
          kMax = 320000;
        }
        min += kMin;
        max += kMax;
      } else if (residentialScope === 'selected-rooms') {
        // Sum of all selected room items
        let rMin = 0;
        let rMax = 0;
        selectedRoomItems.forEach((item) => {
          const price = SHINEX_RATES.residential.roomAddons[item];
          if (price) {
            rMin += price.min;
            rMax += price.max;
          }
        });
        min += Math.max(rMin, 150000);
        max += Math.max(rMax, 250000);
      } else {
        // Full home or renovation
        min += bhkBase.min * scopeMult;
        max += bhkBase.max * scopeMult;

        // Add extra selected specialty items
        selectedRoomItems.forEach((item) => {
          if (item.startsWith('other_') || item === 'living_full_package') {
            const price = SHINEX_RATES.residential.roomAddons[item];
            if (price) {
              min += price.min * 0.5; // discounted integration in full home
              max += price.max * 0.5;
            }
          }
        });
      }

      // Finish tier multiplier
      min *= multiplier;
      max *= multiplier;

      // Civil Addons / Bundle
      if (selectedBundle && SHINEX_RATES.bundles[selectedBundle]?.fixedPrice) {
        min += SHINEX_RATES.bundles[selectedBundle].fixedPrice.min;
        max += SHINEX_RATES.bundles[selectedBundle].fixedPrice.max;
      } else {
        selectedCivilAddons.forEach((addon) => {
          const cPrice = SHINEX_RATES.civilAddons[addon];
          if (cPrice) {
            min += cPrice.min;
            max += cPrice.max;
          }
        });
      }
    } else if (projectType === 'commercial') {
      const sqFtRate = SHINEX_RATES.commercial.ratePerSqFt[spaceType] || { min: 1400, max: 2400 };
      const fitoutMult = SHINEX_RATES.commercial.fitoutMultiplier[fitoutType] || 1.0;
      const area = Math.max(commercialArea || 1000, 200);

      min += area * sqFtRate.min * fitoutMult;
      max += area * sqFtRate.max * fitoutMult;

      // Commercial item additions
      if (spaceType === 'office') {
        const wsRate = SHINEX_RATES.commercial.itemRates['comm_workstation'];
        const cabinRate = SHINEX_RATES.commercial.itemRates['comm_cabin'];
        if (wsRate) {
          min += workstationCount * wsRate.min;
          max += workstationCount * wsRate.max;
        }
        if (cabinRate) {
          min += cabinCount * cabinRate.min;
          max += cabinCount * cabinRate.max;
        }
      } else if (spaceType === 'salon') {
        const salonRate = SHINEX_RATES.commercial.itemRates['comm_salon_station'];
        if (salonRate) {
          min += salonStationCount * salonRate.min;
          max += salonStationCount * salonRate.max;
        }
      }

      min *= multiplier;
      max *= multiplier;

      // Civil additions
      selectedCivilAddons.forEach((addon) => {
        const cPrice = SHINEX_RATES.civilAddons[addon];
        if (cPrice) {
          min += cPrice.min;
          max += cPrice.max;
        }
      });
    } else {
      // Utility only
      if (selectedBundle && SHINEX_RATES.bundles[selectedBundle]?.fixedPrice) {
        min = SHINEX_RATES.bundles[selectedBundle].fixedPrice.min;
        max = SHINEX_RATES.bundles[selectedBundle].fixedPrice.max;
      } else {
        utilityMultiSelect.forEach((item) => {
          const price = SHINEX_RATES.civilAddons[item];
          if (price) {
            min += price.min;
            max += price.max;
          }
        });
        if (min === 0) {
          min = 35000;
          max = 75000;
        }
      }
      min *= multiplier;
      max *= multiplier;
    }

    return {
      min: Math.round(min / 1000) * 1000,
      max: Math.round(max / 1000) * 1000,
    };
  }, [
    projectType,
    bhk,
    residentialScope,
    selectedRoomItems,
    finishTier,
    selectedCivilAddons,
    selectedBundle,
    spaceType,
    commercialArea,
    fitoutType,
    workstationCount,
    cabinCount,
    salonStationCount,
    utilityMultiSelect,
  ]);

  // Selected Summary Chips for Quick Visualization
  const summaryChips = useMemo<string[]>(() => {
    const chips: string[] = [];

    if (projectType === 'residential') {
      chips.push(bhk.toUpperCase());
      chips.push(residentialScope.replace('-', ' ').toUpperCase());
      if (selectedRoomItems.some((i) => i.includes('l_shape'))) chips.push('L-Kitchen');
      if (selectedRoomItems.some((i) => i.includes('u_shape'))) chips.push('U-Kitchen');
      if (selectedRoomItems.some((i) => i.includes('island'))) chips.push('Island Kitchen');
      if (selectedRoomItems.some((i) => i.includes('parallel'))) chips.push('Parallel Kitchen');
      if (selectedRoomItems.some((i) => i.includes('wardrobe_sliding'))) chips.push('Sliding Wardrobe');
      if (selectedRoomItems.some((i) => i.includes('wardrobe_walkin'))) chips.push('Walk-In Wardrobe');
      if (selectedRoomItems.some((i) => i.includes('tv_unit'))) chips.push('Media Unit');
      if (selectedBundle === 'kitchen_lock') chips.push('Kitchen Lock 🛡️');
      if (selectedBundle === 'bath_utility_pair') chips.push('Bath-Utility Pair 🚿');
      if (selectedBundle === 'full_wet_package') chips.push('Full Wet Overhaul 🏗️');
    } else if (projectType === 'commercial') {
      chips.push(spaceType.toUpperCase());
      chips.push(`${commercialArea} sq.ft`);
      chips.push(fitoutType.replace('-', ' ').toUpperCase());
      if (spaceType === 'office') chips.push(`${workstationCount} Workstations`);
    } else {
      chips.push('Civil Utility Direct');
      chips.push(`${utilityMultiSelect.length} Services`);
    }

    chips.push(`${finishTier.toUpperCase()} Finish`);
    chips.push(timeline.replace('-', ' '));

    return chips;
  }, [
    projectType,
    bhk,
    residentialScope,
    selectedRoomItems,
    selectedBundle,
    spaceType,
    commercialArea,
    fitoutType,
    workstationCount,
    utilityMultiSelect,
    finishTier,
    timeline,
  ]);

  // Generate WhatsApp Deep Link
  const generateWhatsAppUrl = () => {
    const rangeText = formatINRRange(estimate.min, estimate.max);
    const chipsText = summaryChips.join(' · ');

    const message = `Hello ShineX Infra Solutions Team!

I just built a project estimate on your website calculator:

📌 *Project Type*: ${projectType.toUpperCase()}
🏷️ *Scope & Vibe*: ${chipsText}
💰 *Indicative Estimate*: ${rangeText}
📍 *Location*: ${leadCity || 'Navi Mumbai'}
⏱️ *Timeline*: ${timeline}

*Client Details*:
- Name: ${leadName || 'Website Visitor'}
- Phone: ${leadPhone || 'Not specified'}
- Preferred Call Time: ${preferredCallTime}
${notes ? `- Note: ${notes}` : ''}

Please share the itemized architectural quote and arrange site measurement. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/919820000000?text=${encoded}`;
  };

  return (
    <CalculatorContext.Provider
      value={{
        step,
        setStep,
        nextStep,
        prevStep,
        projectType,
        setProjectType,
        bhk,
        setBhk,
        residentialScope,
        setResidentialScope,
        carpetArea,
        setCarpetArea,
        skipArea,
        setSkipArea,
        spaceType,
        setSpaceType,
        commercialArea,
        setCommercialArea,
        fitoutType,
        setFitoutType,
        workstationCount,
        setWorkstationCount,
        cabinCount,
        setCabinCount,
        salonStationCount,
        setSalonStationCount,
        utilityMultiSelect,
        toggleUtilityItem,
        selectedRoomItems,
        toggleRoomItem,
        selectKitchenShape,
        finishTier,
        setFinishTier,
        selectedCivilAddons,
        toggleCivilAddon,
        selectedBundle,
        selectBundle,
        timeline,
        setTimeline,
        siteStatus,
        setSiteStatus,
        isNri,
        setIsNri,
        notes,
        setNotes,
        leadName,
        setLeadName,
        leadPhone,
        setLeadPhone,
        whatsappSame,
        setWhatsappSame,
        leadEmail,
        setLeadEmail,
        leadCity,
        setLeadCity,
        preferredCallTime,
        setPreferredCallTime,
        isSubmitted,
        setIsSubmitted,
        estimate,
        summaryChips,
        generateWhatsAppUrl,
        resetCalculator,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}
