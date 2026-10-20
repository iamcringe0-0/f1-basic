import React, { useState } from 'react';
import { Trophy, Award } from 'lucide-react';

export const PointsSystemVisual: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<number>(1);
  const [hasFastestLap, setHasFastestLap] = useState<boolean>(true);

  const grandPrixPoints = [
    { pos: 1, points: 25, label: 'Winner (P1)' },
    { pos: 2, points: 18, label: 'Podium 2nd (P2)' },
    { pos: 3, points: 15, label: 'Podium 3rd (P3)' },
    { pos: 4, points: 12, label: '4th Place' },
    { pos: 5, points: 10, label: '5th Place' },
    { pos: 6, points: 8, label: '6th Place' },
    { pos: 7, points: 6, label: '7th Place' },
    { pos: 8, points: 4, label: '8th Place' },
    { pos: 9, points: 2, label: '9th Place' },
    { pos: 10, points: 1, label: '10th Place' },
  ];

  const sprintPoints = [
    { pos: 1, points: 8 },
    { pos: 2, points: 7 },
    { pos: 3, points: 6 },
    { pos: 4, points: 5 },
    { pos: 5, points: 4 },
    { pos: 6, points: 3 },
    { pos: 7, points: 2 },
    { pos: 8, points: 1 },
  ];

  const currentGpPoints = selectedPosition <= 10 
    ? (grandPrixPoints.find(p => p.pos === selectedPosition)?.points || 0)
    : 0;

  // Fastest lap bonus rule: 1 point only if finishing in the top 10
  const fastestLapPoints = (hasFastestLap && selectedPosition <= 10) ? 1 : 0;
  const totalPoints = currentGpPoints + fastestLapPoints;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-[#101015] p-6 lg:p-8" id="points-system">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#e10600]" />
            <h3 className="text-lg font-bold text-white tracking-tight font-display">
              F1 Points System & Bonus Rules
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Championship points determine both the World Drivers’ Championship and World Constructors’ Championship.
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400">FIA Formula 1 Sporting Code</span>
      </div>

      {/* Interactive Quick Calculator Strip */}
      <div className="mb-6 rounded-lg bg-neutral-950 border border-neutral-800 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Interactive Points Check
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <label htmlFor="gp-finish-select" className="text-xs text-neutral-300">Select Finish Position:</label>
              <select
                id="gp-finish-select"
                aria-label="Select Grand Prix Finishing Position"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(Number(e.target.value))}
                className="bg-neutral-900 border border-neutral-700 text-white text-xs rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((p) => (
                  <option key={p} value={p}>
                    Position {p} {p === 1 ? '(1st)' : p === 2 ? '(2nd)' : p === 3 ? '(3rd)' : ''}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-1.5 text-xs text-neutral-300 ml-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasFastestLap}
                  onChange={(e) => setHasFastestLap(e.target.checked)}
                  className="rounded border-neutral-700 text-red-600 focus:ring-red-500"
                />
                <span>Set Fastest Lap (+1 Pt)</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900/90 border border-neutral-800 px-4 py-2.5 rounded-lg shrink-0">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Total Points Awarded</span>
              <span className="text-2xl font-black text-white font-mono tabular-nums flex items-baseline gap-1">
                {totalPoints} <span className="text-xs font-normal text-neutral-400">pts</span>
              </span>
            </div>
            {hasFastestLap && selectedPosition > 10 && (
              <span className="text-[11px] text-amber-400 max-w-[160px] leading-tight">
                *No bonus point: Fastest lap bonus only applies to Top 10 finishers.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid Comparison Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grand Prix Table */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#e10600]" />
              Sunday Grand Prix Points (Full Race)
            </h4>
            <span className="text-xs text-neutral-400 font-mono">Top 10 Only</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/60">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900 text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="py-2 px-3 font-semibold">Position</th>
                  <th className="py-2 px-3 font-semibold">Grand Prix Points</th>
                  <th className="py-2 px-3 font-semibold">Trophy Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900">
                {grandPrixPoints.map((item) => (
                  <tr
                    key={item.pos}
                    className={`transition-colors ${
                      item.pos === selectedPosition ? 'bg-neutral-800/80' : 'hover:bg-neutral-900/40'
                    }`}
                  >
                    <td className="py-2 px-3 font-mono font-bold text-white">
                      P{item.pos}
                    </td>
                    <td className="py-2 px-3 font-mono font-bold text-neutral-200">
                      {item.points} pts
                    </td>
                    <td className="py-2 px-3 text-neutral-400">
                      {item.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sprint Race Table & Rules */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-500" />
                Saturday Sprint Race Points
              </h4>
              <span className="text-xs text-neutral-400 font-mono">Top 8 Only</span>
            </div>
            <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/60">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900 text-neutral-400 border-b border-neutral-800">
                  <tr>
                    <th className="py-2 px-3 font-semibold">Position</th>
                    <th className="py-2 px-3 font-semibold">Sprint Points</th>
                    <th className="py-2 px-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-900">
                  {sprintPoints.map((item) => (
                    <tr key={item.pos} className="hover:bg-neutral-900/40">
                      <td className="py-2 px-3 font-mono font-bold text-white">
                        P{item.pos}
                      </td>
                      <td className="py-2 px-3 font-mono font-bold text-amber-400">
                        {item.points} pts
                      </td>
                      <td className="py-2 px-3 text-neutral-400">
                        {item.pos === 1 ? 'Sprint Winner' : `Sprint P${item.pos}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-3.5 text-xs text-neutral-300 leading-relaxed space-y-1.5">
            <span className="font-semibold text-white block">Fastest Lap Rule Nuance:</span>
            <p>
              1 extra bonus point is awarded to the driver who sets the fastest single lap during the Sunday Grand Prix, <strong>provided they finish inside the Top 10</strong>. If a driver in P11–P20 clocks the fastest lap, no one receives the point, though teams occasionally pit lower-ranked drivers solely to deny rival championship contenders that point!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
