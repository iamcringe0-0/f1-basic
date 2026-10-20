import React, { useState } from 'react';

interface TyreCompound {
  name: string;
  colorName: string;
  colorHex: string;
  badgeBg: string;
  type: 'Dry Slick' | 'Wet Weather';
  speedRating: string;
  durabilityRating: string;
  operatingWindow: string;
  strategicRole: string;
}

const COMPOUNDS: TyreCompound[] = [
  {
    name: 'Soft Tyre (P Zero Red)',
    colorName: 'Red Sidewall',
    colorHex: '#e10600',
    badgeBg: 'rgba(225, 6, 0, 0.15)',
    type: 'Dry Slick',
    speedRating: 'Fastest (Maximum Grip)',
    durabilityRating: 'Short Lifespan (~15–25 Laps)',
    operatingWindow: 'High track temps / Low-fuel Qualifying',
    strategicRole: 'Used for flying qualifying laps and aggressive race starts to overtake early, but degrades rapidly (thermal degradation and blistering).',
  },
  {
    name: 'Medium Tyre (P Zero Yellow)',
    colorName: 'Yellow Sidewall',
    colorHex: '#eab308',
    badgeBg: 'rgba(234, 179, 8, 0.15)',
    type: 'Dry Slick',
    speedRating: 'High Grip (Balanced Pace)',
    durabilityRating: 'Medium Lifespan (~25–38 Laps)',
    operatingWindow: 'All-around baseline racing temperature',
    strategicRole: 'The default starting race tyre for most strategies. Provides strong cornering pace while allowing flexibility to adapt to safety cars.',
  },
  {
    name: 'Hard Tyre (P Zero White)',
    colorName: 'White Sidewall',
    colorHex: '#f8fafc',
    badgeBg: 'rgba(255, 255, 255, 0.15)',
    type: 'Dry Slick',
    speedRating: 'Lowest Grip (~0.5s–0.8s slower/lap)',
    durabilityRating: 'Maximum Durability (~38–55+ Laps)',
    operatingWindow: 'High abrasion tracks / Extended race stints',
    strategicRole: 'The marathon tyre. Takes longer to warm up to temperature, but resists degradation, enabling long stints or 1-stop pit strategies.',
  },
  {
    name: 'Intermediate (Cinturato Green)',
    colorName: 'Green Sidewall',
    colorHex: '#22c55e',
    badgeBg: 'rgba(34, 197, 94, 0.15)',
    type: 'Wet Weather',
    speedRating: 'Grooved tread for damp track',
    durabilityRating: 'Disperses ~30 litres water/sec at 300 km/h',
    operatingWindow: 'Drying asphalt or light rainfall (no standing pools)',
    strategicRole: 'Crucial during changeable crossover weather. Will overheat and shred into rubber marbles if run on completely dry asphalt.',
  },
  {
    name: 'Full Wet (Cinturato Blue)',
    colorName: 'Blue Sidewall',
    colorHex: '#3b82f6',
    badgeBg: 'rgba(59, 130, 246, 0.15)',
    type: 'Wet Weather',
    speedRating: 'Deep grooved tread prevents aquaplaning',
    durabilityRating: 'Disperses ~85 litres water/sec at 300 km/h',
    operatingWindow: 'Heavy continuous rain / Standing surface water',
    strategicRole: 'Mandatory during downpours. Extreme water evacuation prevents dangerous aquaplaning, but produces massive spray clouds.',
  },
];

export const TyreStrategyVisual: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeTyre = COMPOUNDS[activeIdx];

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-[#101015] p-6 lg:p-8">
      <div className="border-b border-neutral-800 pb-4 mb-6">
        <h3 className="text-lg font-bold text-white tracking-tight font-display">
          Tyre Compounds & The Pit Stop Equation
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Every dry Grand Prix mandates using at least two different tyre compounds. Select a tyre to inspect its speed and durability tradeoff.
        </p>
      </div>

      {/* Compound Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {COMPOUNDS.map((tyre, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={tyre.name}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-neutral-900 border-neutral-600 shadow-md ring-1'
                  : 'bg-neutral-950/60 border-neutral-800 hover:bg-neutral-900/60'
              }`}
              style={{
                borderColor: isSelected ? tyre.colorHex : undefined,
              }}
            >
              <div
                className="w-4 h-4 rounded-full border-2 shrink-0"
                style={{
                  borderColor: tyre.colorHex,
                  backgroundColor: isSelected ? tyre.colorHex : 'transparent',
                }}
              />
              <div className="min-w-0">
                <span className="block text-xs font-bold text-white truncate">
                  {tyre.name.split('(')[0].trim()}
                </span>
                <span className="block text-[10px] text-neutral-400 truncate">
                  {tyre.type}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Tyre Detail Card */}
      <div className="rounded-lg bg-neutral-950 border border-neutral-800 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full border-4 flex items-center justify-center shrink-0"
              style={{ borderColor: activeTyre.colorHex }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeTyre.colorHex }}
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                {activeTyre.name}
              </h4>
              <p className="text-xs text-neutral-400">{activeTyre.colorName} · {activeTyre.type}</p>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-400">Pirelli Formula 1 Allocation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-neutral-900/80 rounded p-3 border border-neutral-800">
            <span className="text-[11px] uppercase tracking-wide text-neutral-400 block mb-1">Cornering Grip</span>
            <span className="text-xs font-semibold text-white">{activeTyre.speedRating}</span>
          </div>
          <div className="bg-neutral-900/80 rounded p-3 border border-neutral-800">
            <span className="text-[11px] uppercase tracking-wide text-neutral-400 block mb-1">Durability / Life</span>
            <span className="text-xs font-semibold text-white">{activeTyre.durabilityRating}</span>
          </div>
          <div className="bg-neutral-900/80 rounded p-3 border border-neutral-800">
            <span className="text-[11px] uppercase tracking-wide text-neutral-400 block mb-1">Window / Conditions</span>
            <span className="text-xs font-semibold text-white">{activeTyre.operatingWindow}</span>
          </div>
        </div>

        <div className="bg-neutral-900/40 rounded p-3.5 border border-neutral-800/80 text-xs text-neutral-300 leading-relaxed">
          <span className="font-semibold text-neutral-200">Grand Prix Strategy: </span>
          {activeTyre.strategicRole}
        </div>
      </div>
    </div>
  );
};
