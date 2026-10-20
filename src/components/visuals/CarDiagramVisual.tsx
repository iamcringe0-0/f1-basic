import React, { useState } from 'react';

interface ComponentDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  purpose: string;
}

const CAR_COMPONENTS: ComponentDetail[] = [
  {
    id: 'front-wing',
    name: 'Front Wing & Endplates',
    category: 'Aerodynamics',
    description: 'The first point of aerodynamic contact. Generates vital front axle downforce and conditions the turbulent air wake around the front wheels.',
    purpose: 'Prevents understeer and channels smooth airflow down the car floor and into the sidepod intakes.',
  },
  {
    id: 'halo',
    name: 'Titanium Halo Device',
    category: 'Cockpit Safety',
    description: 'Introduced in 2018, this curved titanium structure surrounds the driver’s helmet. It weighs just 9 kg but can withstand 12,000 kg (the weight of a London double-decker bus).',
    purpose: 'Shields the driver from heavy airborne debris, collisions, and car-to-car rollovers.',
  },
  {
    id: 'sidepods',
    name: 'Sidepods & Radiators',
    category: 'Cooling & Aero',
    description: 'Enclose the massive cooling radiators and air-to-air heat exchangers for the turbocharged hybrid power unit and battery storage systems.',
    purpose: 'Sculpted to guide external airflow tightly toward the rear diffuser while keeping internal components below critical temperatures.',
  },
  {
    id: 'venturi-floor',
    name: 'Ground Effect Venturi Tunnels',
    category: 'Underfloor Aero',
    description: 'The underside of modern F1 cars features shaped venturi tunnels that compress and expand passing air, creating massive low pressure underneath.',
    purpose: 'Suctions the car to the asphalt with minimal "dirty air" turbulence left behind for trailing cars to encourage closer overtaking.',
  },
  {
    id: 'rear-wing',
    name: 'Rear Wing & DRS Flap',
    category: 'Downforce & DRS',
    description: 'Generates immense rear axle downforce to keep the drive wheels glued at high speeds. Includes the movable DRS flap operated by a hydraulic actuator.',
    purpose: 'Provides high cornering grip, but can open on straights when within 1 second of a rival to reduce drag by ~20 km/h.',
  },
  {
    id: 'tyres',
    name: '18-Inch Low-Profile Slick Tyres',
    category: 'Mechanical Grip',
    description: 'Supplied exclusively by Pirelli. Without tread patterns in dry conditions, slick tyres maximize surface contact area with the racing surface.',
    purpose: 'Translates thousands of horsepower, braking forces, and lateral G-forces into direct traction.',
  },
];

export const CarDiagramVisual: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('venturi-floor');
  const activeComponent = CAR_COMPONENTS.find((c) => c.id === selectedId) || CAR_COMPONENTS[0];

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-[#101015] p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight font-display">
            Interactive F1 Car Anatomy & Aerodynamics
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Click any component to inspect how aerodynamic downforce and safety engineering operate at 350 km/h.
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400">Ground Effect Era (18&quot; Wheels)</span>
      </div>

      {/* Interactive Selection Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CAR_COMPONENTS.map((comp) => {
          const isSelected = comp.id === selectedId;
          return (
            <button
              key={comp.id}
              onClick={() => setSelectedId(comp.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                isSelected
                  ? 'bg-[#e10600] text-white shadow-sm'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {comp.name.split('&')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Blueprint Visual Rendering */}
      <div className="relative rounded-lg bg-neutral-950 border border-neutral-800/80 p-4 sm:p-8 overflow-hidden">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} 
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          {/* SVG Profile of F1 Car */}
          <div className="w-full lg:w-3/5">
            <svg 
              viewBox="0 0 900 360" 
              className="w-full h-auto drop-shadow-2xl"
              aria-label="Formula 1 car aerodynamic anatomy diagram"
            >
              <defs>
                <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e1e24" />
                  <stop offset="40%" stopColor="#2e2e38" />
                  <stop offset="70%" stopColor="#e10600" />
                  <stop offset="100%" stopColor="#18181f" />
                </linearGradient>
                <linearGradient id="floorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d0d12" />
                  <stop offset="100%" stopColor="#1c1c24" />
                </linearGradient>
              </defs>

              {/* Asphalt Ground Line */}
              <line x1="30" y1="310" x2="870" y2="310" stroke="#33333d" strokeWidth="3" strokeDasharray="8 6" />

              {/* Front Wheel & Pirelli Tyre */}
              <g className={`cursor-pointer transition-opacity ${selectedId === 'tyres' ? 'opacity-100' : 'opacity-85'}`} onClick={() => setSelectedId('tyres')}>
                <circle cx="210" cy="245" r="62" fill="#141418" stroke="#3a3a46" strokeWidth="6" />
                <circle cx="210" cy="245" r="40" fill="#0d0d10" stroke="#22222a" strokeWidth="4" />
                {/* 18 inch rim center */}
                <circle cx="210" cy="245" r="20" fill="#202026" />
                {/* Red Pirelli P Zero Pinstripe */}
                <circle cx="210" cy="245" r="54" fill="none" stroke="#e10600" strokeWidth="2.5" strokeDasharray="30 15" />
                <text x="210" y="249" textAnchor="middle" fill="#888899" fontSize="9" fontFamily="monospace">18&quot;</text>
              </g>

              {/* Rear Wheel & Pirelli Tyre */}
              <g className={`cursor-pointer transition-opacity ${selectedId === 'tyres' ? 'opacity-100' : 'opacity-85'}`} onClick={() => setSelectedId('tyres')}>
                <circle cx="730" cy="240" r="68" fill="#141418" stroke="#3a3a46" strokeWidth="6" />
                <circle cx="730" cy="240" r="44" fill="#0d0d10" stroke="#22222a" strokeWidth="4" />
                <circle cx="730" cy="240" r="22" fill="#202026" />
                <circle cx="730" cy="240" r="60" fill="none" stroke="#e10600" strokeWidth="2.5" strokeDasharray="32 16" />
                <text x="730" y="244" textAnchor="middle" fill="#888899" fontSize="9" fontFamily="monospace">18&quot;</text>
              </g>

              {/* Front Wing Assembly */}
              <g className={`cursor-pointer transition-all ${selectedId === 'front-wing' ? 'filter drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]' : ''}`} onClick={() => setSelectedId('front-wing')}>
                <path d="M 60 270 L 145 270 L 160 240 L 105 242 L 55 255 Z" fill="#22222a" stroke={selectedId === 'front-wing' ? '#e10600' : '#444455'} strokeWidth="2.5" />
                <path d="M 70 282 L 155 282 L 150 275 L 68 275 Z" fill="#e10600" />
                <circle cx="95" cy="256" r="3" fill="#ffffff" />
              </g>

              {/* Nosecone */}
              <path d="M 110 245 Q 180 230 260 215 L 320 185 L 290 220 L 150 250 Z" fill="#1e1e24" stroke="#3a3a48" strokeWidth="1.5" />

              {/* Ground Effect Venturi Floor */}
              <g className={`cursor-pointer transition-all ${selectedId === 'venturi-floor' ? 'filter drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]' : ''}`} onClick={() => setSelectedId('venturi-floor')}>
                <path d="M 270 275 C 360 282, 540 285, 660 278 L 795 245 L 810 265 L 660 295 C 520 300, 360 295, 270 285 Z" fill="url(#floorGrad)" stroke={selectedId === 'venturi-floor' ? '#e10600' : '#333344'} strokeWidth="2" />
                {/* Airflow arrows */}
                <path d="M 310 288 Q 460 292 630 285" fill="none" stroke="#e10600" strokeWidth="1.5" strokeDasharray="5 5" />
              </g>

              {/* Sidepod & Radiator Bodywork */}
              <g className={`cursor-pointer transition-all ${selectedId === 'sidepods' ? 'filter drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]' : ''}`} onClick={() => setSelectedId('sidepods')}>
                <path d="M 330 185 C 380 180, 480 190, 560 210 C 600 220, 640 235, 670 260 L 630 270 C 530 255, 410 245, 330 235 Z" fill="url(#chassisGrad)" stroke={selectedId === 'sidepods' ? '#e10600' : '#454555'} strokeWidth="2" />
                <path d="M 345 195 L 375 190 L 370 225 L 340 220 Z" fill="#121216" stroke="#2a2a35" strokeWidth="1" />
              </g>

              {/* Cockpit & Halo */}
              <g className={`cursor-pointer transition-all ${selectedId === 'halo' ? 'filter drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]' : ''}`} onClick={() => setSelectedId('halo')}>
                {/* Driver Helmet */}
                <circle cx="410" cy="170" r="15" fill="#facc15" stroke="#1f2937" strokeWidth="2" />
                <path d="M 400 170 L 422 170" stroke="#111827" strokeWidth="3" />
                {/* Titanium Halo Ring */}
                <path d="M 370 178 C 390 152, 435 152, 465 178" fill="none" stroke={selectedId === 'halo' ? '#e10600' : '#e5e7eb'} strokeWidth="5" strokeLinecap="round" />
                <line x1="412" y1="160" x2="412" y2="195" stroke={selectedId === 'halo' ? '#e10600' : '#e5e7eb'} strokeWidth="4" />
              </g>

              {/* Engine Airbox & Shark Fin */}
              <path d="M 430 155 Q 490 135 560 145 L 680 170 L 660 215 C 600 185, 520 170, 430 175 Z" fill="#202028" stroke="#3d3d4c" strokeWidth="1.5" />
              {/* Roll Hoop Air Intake */}
              <polygon points="445,150 470,145 465,165 440,165" fill="#0d0d10" stroke="#555" strokeWidth="1" />

              {/* Rear Wing & DRS */}
              <g className={`cursor-pointer transition-all ${selectedId === 'rear-wing' ? 'filter drop-shadow-[0_0_8px_rgba(225,6,0,0.8)]' : ''}`} onClick={() => setSelectedId('rear-wing')}>
                {/* Endplate */}
                <path d="M 760 140 L 830 145 L 815 220 L 775 220 Z" fill="#1b1b22" stroke={selectedId === 'rear-wing' ? '#e10600' : '#4a4a5a'} strokeWidth="2" />
                {/* Main Plane Wing */}
                <rect x="765" y="160" width="55" height="10" rx="2" fill="#2b2b36" />
                {/* DRS Flap (Red) */}
                <rect x="765" y="146" width="55" height="8" rx="1.5" fill="#e10600" />
                <text x="792" y="153" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="bold">DRS</text>
              </g>

              {/* Labels & Anchor Dots */}
              <circle cx="105" cy="245" r="4" fill="#e10600" />
              <circle cx="412" cy="160" r="4" fill="#e10600" />
              <circle cx="440" cy="225" r="4" fill="#e10600" />
              <circle cx="520" cy="285" r="4" fill="#e10600" />
              <circle cx="792" cy="148" r="4" fill="#e10600" />
              <circle cx="210" cy="245" r="4" fill="#e10600" />
            </svg>
          </div>

          {/* Detailed Info Card for Selected Part */}
          <div className="w-full lg:w-2/5 bg-neutral-900/90 border border-neutral-800 rounded-lg p-5">
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="text-[#e10600] font-semibold uppercase tracking-wider">{activeComponent.category}</span>
              <span className="font-mono">F1 Regulation 2026/Current</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-display">
              {activeComponent.name}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              {activeComponent.description}
            </p>
            <div className="bg-neutral-950/80 rounded border border-neutral-800 p-3">
              <p className="text-xs text-neutral-400 font-semibold mb-1 uppercase tracking-wide">
                Key Performance Role:
              </p>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {activeComponent.purpose}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
