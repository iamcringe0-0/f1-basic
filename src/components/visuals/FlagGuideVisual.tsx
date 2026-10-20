import React, { useState } from 'react';
import { Flag, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface FlagData {
  name: string;
  category: 'Safety' | 'Information' | 'Penalty';
  flagStyle: string;
  driverAction: string;
  marshalMeaning: string;
}

const FLAGS_DATA: FlagData[] = [
  {
    name: 'Chequered Flag',
    category: 'Information',
    flagStyle: 'bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:8px_8px] bg-black text-white border-white/40',
    marshalMeaning: 'Signifies the conclusion of the practice session, qualifying session, or the Grand Prix.',
    driverAction: 'Cross the line, cease racing, complete a safe cool-down lap back to Parc Fermé or pit lane.',
  },
  {
    name: 'Yellow Flag (Single Waved)',
    category: 'Safety',
    flagStyle: 'bg-yellow-400 text-black',
    marshalMeaning: 'Danger beside or partly on the track in the current sector.',
    driverAction: 'Reduce speed significantly, strictly NO OVERTAKING until passing a green flag, be prepared to change direction.',
  },
  {
    name: 'Double Waved Yellow',
    category: 'Safety',
    flagStyle: 'bg-yellow-400 text-black border-2 border-dashed border-amber-600',
    marshalMeaning: 'Track wholly or partly blocked, or marshals working on track.',
    driverAction: 'Reduce speed drastically, abandon fast qualifying lap times, prepare to stop if required.',
  },
  {
    name: 'Red Flag',
    category: 'Safety',
    flagStyle: 'bg-red-600 text-white',
    marshalMeaning: 'Session suspended immediately due to severe accident, dangerous track condition, or unraceable weather.',
    driverAction: 'Immediately reduce speed and return carefully to the pit lane. No overtaking. Cars line up in the fast lane.',
  },
  {
    name: 'Green Flag',
    category: 'Information',
    flagStyle: 'bg-emerald-500 text-white',
    marshalMeaning: 'Track is all clear. Hazard cleared from previous sector or safety car restart.',
    driverAction: 'Full racing speed and overtaking may resume.',
  },
  {
    name: 'Blue Flag',
    category: 'Information',
    flagStyle: 'bg-blue-600 text-white',
    marshalMeaning: 'A faster car is about to lap you, or car leaving pit lane must yield.',
    driverAction: 'Must allow the faster car to overtake within 3 blue flag marshaling sectors or receive a time penalty.',
  },
  {
    name: 'Black & White Diagonal',
    category: 'Penalty',
    flagStyle: 'bg-gradient-to-tr from-black from-50% to-white to-50% text-neutral-300 border-neutral-600',
    marshalMeaning: 'Official unsportsmanlike behavior or track limits strike warning.',
    driverAction: 'Final warning before a time penalty (e.g. repeated track limits violations or dangerous weaving).',
  },
  {
    name: 'Yellow & Red Striped',
    category: 'Safety',
    flagStyle: 'bg-[repeating-linear-gradient(45deg,#ef4444,#ef4444_10px,#eab308_10px,#eab308_20px)] text-white',
    marshalMeaning: 'Deterioration of track grip due to oil, coolant fluid, or standing water.',
    driverAction: 'Anticipate sudden loss of grip in the corner, adjust braking points and lines.',
  },
];

export const FlagGuideVisual: React.FC = () => {
  const [selectedFlag, setSelectedFlag] = useState<FlagData>(FLAGS_DATA[0]);

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-[#101015] p-6 lg:p-8" id="flags">
      <div className="border-b border-neutral-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Flag className="w-5 h-5 text-[#e10600]" />
          <h3 className="text-lg font-bold text-white tracking-tight font-display">
            Official FIA Track Flags & Signals
          </h3>
        </div>
        <p className="text-xs text-neutral-400 mt-1">
          Formula 1 drivers must react in fractions of a second to digital light panels and marshal flags. Select any flag to learn its exact regulatory meaning.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {FLAGS_DATA.map((flag) => {
          const isSelected = selectedFlag.name === flag.name;
          return (
            <button
              key={flag.name}
              type="button"
              onClick={() => setSelectedFlag(flag)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'bg-neutral-900 border-[#e10600] ring-1 ring-red-500/50 shadow-md'
                  : 'bg-neutral-950/80 border-neutral-800 hover:bg-neutral-900/60'
              }`}
            >
              <div className={`w-full h-8 rounded mb-2.5 shadow-inner border border-black/20 ${flag.flagStyle}`} />
              <span className="block text-xs font-bold text-white truncate">
                {flag.name}
              </span>
              <span className="block text-[10px] text-neutral-400">
                {flag.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Flag Meaning Card */}
      <div className="rounded-lg bg-neutral-950 border border-neutral-800 p-5">
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4">
          <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e10600]" />
            {selectedFlag.name}
          </h4>
          <span className="text-xs font-mono text-neutral-400">FIA Race Control Protocol</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-900/60 rounded p-4 border border-neutral-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
              Marshal Meaning
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {selectedFlag.marshalMeaning}
            </p>
          </div>
          <div className="bg-neutral-900/60 rounded p-4 border border-neutral-800/80">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#e10600] block mb-1">
              Required Driver Action
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {selectedFlag.driverAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
