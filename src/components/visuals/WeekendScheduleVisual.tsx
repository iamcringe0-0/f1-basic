import React, { useState } from 'react';
import { Calendar, Clock, Flag, Trophy, ShieldAlert, Zap } from 'lucide-react';

interface WeekendSession {
  name: string;
  duration: string;
  purpose: string;
  stakes: string;
  highlight?: boolean;
}

interface DayPlan {
  day: string;
  sessions: WeekendSession[];
}

export const WeekendScheduleVisual: React.FC = () => {
  const [format, setFormat] = useState<'standard' | 'sprint'>('standard');

  const standardSchedule: DayPlan[] = [
    {
      day: 'Friday',
      sessions: [
        {
          name: 'Free Practice 1 (FP1)',
          duration: '60 minutes',
          purpose: 'Initial car baseline setup, aerodynamic sensor runs, track condition assessment.',
          stakes: 'No points. Teams test baseline balance and ride heights.',
        },
        {
          name: 'Free Practice 2 (FP2)',
          duration: '60 minutes',
          purpose: 'Long-run race simulation pace on heavy fuel tanks, qualifying simulation runs on soft tyres.',
          stakes: 'No points. Crucial race tyre wear and degradation data.',
        },
      ],
    },
    {
      day: 'Saturday',
      sessions: [
        {
          name: 'Free Practice 3 (FP3)',
          duration: '60 minutes',
          purpose: 'Final fine-tuning of mechanical balance, qualifying low-fuel trim preparation.',
          stakes: 'Last chance to adjust car setup before Parc Fermé lockdown.',
        },
        {
          name: 'Qualifying (Q1, Q2, Q3)',
          duration: '60 minutes (3 knockout phases)',
          purpose: 'Determines the entire 20-car starting grid order for Sunday’s Grand Prix.',
          stakes: 'P1 earns the prestigious Pole Position on Sunday.',
          highlight: true,
        },
      ],
    },
    {
      day: 'Sunday',
      sessions: [
        {
          name: 'The Grand Prix (Main Race)',
          duration: 'Approx. 90 to 120 minutes (~305 km)',
          purpose: 'The main championship event: lights-out standing start, mandatory pit stops, full championship points.',
          stakes: 'Top 10 score points (25 for 1st down to 1 for 10th) + 1 bonus point for Fastest Lap.',
          highlight: true,
        },
      ],
    },
  ];

  const sprintSchedule: DayPlan[] = [
    {
      day: 'Friday',
      sessions: [
        {
          name: 'Free Practice 1 (FP1)',
          duration: '60 minutes',
          purpose: 'The ONLY practice session of the entire weekend. High urgency to dial in setups.',
          stakes: 'Massive pressure; setup decisions are locked in early.',
        },
        {
          name: 'Sprint Qualifying (Sprint Shootout)',
          duration: 'Approx. 44 minutes (SQ1, SQ2, SQ3)',
          purpose: 'Knockout qualifying specifically setting the starting grid for Saturday’s Sprint Race.',
          stakes: 'SQ1 & SQ2 mandate medium tyres; SQ3 mandates soft tyres.',
        },
      ],
    },
    {
      day: 'Saturday',
      sessions: [
        {
          name: 'The Sprint Race',
          duration: 'Approx. 30 minutes (~100 km, 1/3 Grand Prix distance)',
          purpose: 'Flat-out sprint race without mandatory pit stops.',
          stakes: 'Top 8 finishers earn championship points (8 points for 1st down to 1 point for 8th).',
          highlight: true,
        },
        {
          name: 'Grand Prix Qualifying',
          duration: '60 minutes (Q1, Q2, Q3)',
          purpose: 'Standard 3-stage knockout qualifying setting the starting grid for Sunday’s Grand Prix.',
          stakes: 'Determines pole position for the main Grand Prix.',
          highlight: true,
        },
      ],
    },
    {
      day: 'Sunday',
      sessions: [
        {
          name: 'The Grand Prix (Main Event)',
          duration: 'Approx. 90 to 120 minutes (~305 km)',
          purpose: 'The headline race with full championship points, strategy battles, and podium trophies.',
          stakes: 'Full 25 points for victory; unaffected by the Sprint result.',
          highlight: true,
        },
      ],
    },
  ];

  const schedule = format === 'standard' ? standardSchedule : sprintSchedule;

  return (
    <div className="my-8 rounded-xl border border-neutral-800 bg-[#101015] p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#e10600]" />
            <h3 className="text-lg font-bold text-white tracking-tight font-display">
              F1 Race Weekend Anatomy
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Compare how a conventional three-day Grand Prix differs from high-octane Sprint weekends.
          </p>
        </div>

        {/* Format Selector Toggle */}
        <div className="inline-flex rounded-lg bg-neutral-900 p-1 border border-neutral-800 shrink-0">
          <button
            type="button"
            onClick={() => setFormat('standard')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              format === 'standard'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Standard Weekend (Majority)
          </button>
          <button
            type="button"
            onClick={() => setFormat('sprint')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
              format === 'sprint'
                ? 'bg-[#e10600] text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Zap className="w-3 h-3" />
            Sprint Weekend (Select GPs)
          </button>
        </div>
      </div>

      {/* Format Notice Banner */}
      <div className="mb-6 rounded-md bg-neutral-900/80 border border-neutral-800 px-4 py-3 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
        <span className="text-[#e10600] font-bold shrink-0">NOTE:</span>
        <span>
          {format === 'standard'
            ? 'The Standard Weekend is used for approximately 18 of the 24 races in a season. It provides three full practice sessions for engineering calibration before Saturday qualifying.'
            : 'Sprint Weekends take place at roughly 6 handpicked venues per championship season. With only one hour of practice before competitive sessions begin, teams face intense pressure to get setups right immediately.'}
        </span>
      </div>

      {/* Days & Sessions Timeline */}
      <div className="space-y-6">
        {schedule.map((dayPlan) => (
          <div key={dayPlan.day} className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#e10600]" />
              <span>{dayPlan.day}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dayPlan.sessions.map((session) => (
                <div
                  key={session.name}
                  className={`rounded-lg p-4 border transition-all ${
                    session.highlight
                      ? 'bg-neutral-900/90 border-red-950/80 shadow-md shadow-red-950/20'
                      : 'bg-neutral-950/70 border-neutral-800/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {session.highlight && <Trophy className="w-3.5 h-3.5 text-[#e10600]" />}
                      {session.name}
                    </h4>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {session.duration}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                    {session.purpose}
                  </p>
                  <div className="pt-2 border-t border-neutral-800/70 text-[11px] text-neutral-400">
                    <span className="font-semibold text-neutral-300">Competitive Stakes: </span>
                    {session.stakes}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
