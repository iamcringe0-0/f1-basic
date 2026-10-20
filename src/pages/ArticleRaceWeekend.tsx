import React from 'react';
import { ArticleLayout } from '../components/ArticleLayout';
import { WeekendScheduleVisual } from '../components/visuals/WeekendScheduleVisual';
import { TyreStrategyVisual } from '../components/visuals/TyreStrategyVisual';
import { FlagGuideVisual } from '../components/visuals/FlagGuideVisual';
import { Clock, ShieldAlert, Award, Compass, Flag } from 'lucide-react';

const TOC = [
  { id: 'weekend-flow', label: '1. What Happens Across the Three Days' },
  { id: 'free-practice', label: '2. Free Practice: Dialing in Setup & Tyre Data' },
  { id: 'qualifying', label: '3. Qualifying: Setting the Starting Grid' },
  { id: 'knockout-format', label: '4. The Knockout System: Q1, Q2 & Q3' },
  { id: 'the-grand-prix', label: '5. Sunday: The Grand Prix Main Event' },
  { id: 'sprint-weekends', label: '6. Sprint Weekends & How Schedules Differ' },
  { id: 'starts-and-strategy', label: '7. Formation Lap, Race Starts & Pit Stops' },
  { id: 'flags-and-safety', label: '8. Flags, Safety Cars & Virtual Safety Cars' },
  { id: 'classifications', label: '9. Race Finishes, Classifications & Deadlines' },
  { id: 'fictional-walkthrough', label: '10. Fictional Walkthrough: A Weekend in the Cockpit' },
  { id: 'weekend-glossary', label: '11. Race Weekend Glossary' },
];

export const ArticleRaceWeekend: React.FC = () => {
  return (
    <ArticleLayout
      currentSlug="understanding-f1-race-weekends"
      title="How an F1 Race Weekend Works"
      kicker="Weekend Formats · Guide 02"
      readTime="11 min read"
      intro="A Formula 1 Grand Prix is not just a two-hour Sunday race. It is a carefully staged three-day strategic war of practice adjustments, high-stakes knockout qualifying, and variable weather challenges. Here is how the entire weekend unfolds from Friday morning to Sunday evening."
      tableOfContents={TOC}
      heroGraphic={
        <div className="relative p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-[#1c1214] via-[#121217] to-[#0c0c0e]">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                WEEKEND CHRONOLOGY & TACTICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                From Friday Practice to Sunday Trophies
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Discover how track evolution, Q1/Q2/Q3 eliminations, tyre compound conservation, and safety car windows turn every session into a decisive chess match.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-black/40 border border-neutral-800 text-xs font-mono shrink-0">
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Standard Weekend:</span>
                <span className="text-white font-bold">3 Practice Sessions</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Qualifying Format:</span>
                <span className="text-white font-bold">Q1 (18m) · Q2 (15m) · Q3 (12m)</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Grand Prix Distance:</span>
                <span className="text-white font-bold">~305 km (Monaco: 260 km)</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Race Time Limit:</span>
                <span className="text-white font-bold">Max 2h racing (3h total)</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* 1. What Happens Across the Three Days */}
      <section id="weekend-flow" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          1. What Happens Across the Three Days
        </h2>
        <p>
          Every Formula 1 Grand Prix takes place across three consecutive days, running from Friday through Sunday. Thousands of fans fill the grandstands, while hundreds of engineers and mechanics work long into the night preparing the most sophisticated racing cars in existence.
        </p>
        <p>
          The structure builds in intensity: <strong>Friday</strong> is dedicated to engineering exploration and baseline testing; <strong>Saturday</strong> centers on pure raw speed and qualifying for track position; and <strong>Sunday</strong> culminates in the ultimate endurance, strategic, and tactical test—the Grand Prix itself.
        </p>

        {/* Embedded Interactive Schedule Visual */}
        <WeekendScheduleVisual />
      </section>

      {/* 2. Free Practice */}
      <section id="free-practice" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          2. Free Practice: Dialing in Setup & Gathering Tyre Data
        </h2>
        <p>
          On a standard Grand Prix weekend, drivers receive three one-hour Free Practice sessions: <strong>FP1</strong> and <strong>FP2</strong> on Friday, and <strong>FP3</strong> on Saturday morning.
        </p>
        <p>
          Practice sessions award zero championship points, yet they are vital to winning the race. During practice, teams test different wing angles, ride heights, brake balance distributions, and suspension stiffness.
        </p>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Track Evolution:</strong> Circuits start Friday morning &quot;green&quot; (dusty and lacking rubber). As cars lap continuously, they lay down a dark layer of sticky rubber on the racing line, increasing cornering grip and lowering lap times throughout the weekend.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>High-Fuel Runs vs. Low-Fuel Simulations:</strong> During FP2, cars run with heavy fuel loads (up to 110 kg of fuel) to measure real race pace and calculate tyre degradation per lap. Near the end of sessions, cars bolt on fresh soft tyres and run on fumes to simulate Saturday qualifying.</span>
          </li>
        </ul>
      </section>

      {/* 3. Qualifying */}
      <section id="qualifying" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          3. Qualifying: Setting the Starting Grid
        </h2>
        <p>
          Qualifying is Saturday’s premier spectacle. Unlike the race where all 20 cars battle wheel-to-wheel for track position, qualifying is an uncompromising battle against the stopwatch.
        </p>
        <p>
          Drivers run with minimum fuel, maximum engine deployment, and fresh red soft tyres. A single lap is measured to the thousandth of a second (0.001s). Gaps between cars are often so microscopic that 0.1 seconds can be the difference between starting on the front row or starting in 8th place!
        </p>
        <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#e10600]" />
            <span>The Three-Lap Routine</span>
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Every qualifying attempt requires three laps: an <strong>Out-Lap</strong> (exiting pit lane and warming up front and rear tyres to their optimum thermal window), the <strong>Flying Lap</strong> (the 100% flat-out lap against the clock), and the <strong>In-Lap</strong> (cooling the turbo-hybrid battery and engine while cruising back to the garage).
          </p>
        </div>
      </section>

      {/* 4. Knockout System: Q1, Q2 & Q3 */}
      <section id="knockout-format" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          4. The Knockout System: Q1, Q2, and Q3
        </h2>
        <p>
          Qualifying is divided into three consecutive elimination rounds:
        </p>

        <div className="space-y-4 my-6">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-bold text-white font-display">
                Phase 1: Q1 (18 Minutes)
              </h4>
              <span className="text-xs font-mono text-neutral-400">All 20 Cars On Track</span>
            </div>
            <p className="text-sm text-neutral-300 mb-2">
              All 20 cars take to the circuit. When the 18-minute countdown expires, the <strong>5 slowest drivers</strong> (ranked 16th to 20th) are eliminated and locked into their Sunday starting grid positions.
            </p>
            <span className="text-xs text-[#e10600] font-semibold">15 Cars Advance to Q2</span>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-bold text-white font-display">
                Phase 2: Q2 (15 Minutes)
              </h4>
              <span className="text-xs font-mono text-neutral-400">15 Cars Remaining</span>
            </div>
            <p className="text-sm text-neutral-300 mb-2">
              Lap times are completely reset to zero. The 15 surviving drivers battle for 15 minutes. At the chequered flag, the <strong>next 5 slowest cars</strong> (ranked 11th to 15th) are eliminated.
            </p>
            <span className="text-xs text-[#e10600] font-semibold">Top 10 Cars Advance to the Q3 Shootout</span>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-bold text-white font-display">
                Phase 3: Q3 (12 Minutes)
              </h4>
              <span className="text-xs font-mono text-neutral-400">Top 10 Shootout</span>
            </div>
            <p className="text-sm text-neutral-300 mb-2">
              The ultimate 12-minute shootout for the top 10 grid spots. Drivers typically do two runs on fresh soft tyres. The driver who clocks the fastest lap earns <strong>Pole Position</strong> (starting P1 on Sunday with the cleanest launch angle into Turn 1).
            </p>
            <span className="text-xs text-amber-400 font-semibold">Pole Position Decided</span>
          </div>
        </div>
      </section>

      {/* 5. The Grand Prix */}
      <section id="the-grand-prix" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          5. The Grand Prix Itself
        </h2>
        <p>
          Sunday afternoon is the main championship event. A Formula 1 Grand Prix is run over the minimum number of complete laps required to exceed a distance of <strong>305 kilometres (190 miles)</strong>. The single historical exception is the tight, twisty streets of Monaco, where the race distance is set to 260 km due to lower average speeds.
        </p>
        <p>
          Races typically last between 85 and 100 minutes. However, regulations impose a strict <strong>two-hour maximum racing limit</strong> (or three hours total if there are red flag race suspensions), ensuring events do not drag on indefinitely during torrential rain.
        </p>
      </section>

      {/* 6. Sprint Weekends */}
      <section id="sprint-weekends" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          6. Sprint Weekends and How Their Schedules Differ
        </h2>
        <p>
          At approximately six Grand Prix per season, Formula 1 uses an alternative format known as the <strong>Sprint Weekend</strong>.
        </p>
        <p>
          The Sprint is a <strong>100 km mini-race</strong> held on Saturday afternoon (lasting approximately 30 minutes). There are no mandatory pit stops; drivers race flat-out from lights to flag. The top 8 finishers earn bonus championship points (8 points for 1st down to 1 point for 8th).
        </p>
        <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
          <span className="text-xs uppercase font-bold text-[#e10600]">Key Regulatory Note:</span>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Sprint regulations have evolved across recent seasons. Under current rules, the Sprint has its own standalone qualifying session on Friday (the Sprint Shootout), and the Saturday Sprint outcome does <em>not</em> determine Sunday’s starting grid. Sunday’s Grand Prix grid is set by regular Qualifying held on Saturday afternoon!
          </p>
        </div>
      </section>

      {/* 7. Starts, Pit Stops & Strategy */}
      <section id="starts-and-strategy" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          7. Starting Grids, Race Starts, Laps, and Pit Strategy
        </h2>
        <p>
          Thirty minutes before lights out, the pit lane opens and cars head to the grid. Mechanics remove tire warmers at the 3-minute signal. At the zero mark, cars embark on the <strong>Formation Lap</strong>—weaving violently to build 100°C temperature in their tyres and warming their brakes.
        </p>
        <h3 className="text-xl font-bold text-white pt-2 font-display">The Five Red Lights</h3>
        <p>
          Once all 20 cars are stationary in their staggered grid boxes, the start gantry sequence begins: five red lights illuminate one by one at one-second intervals. Then, after a random computer-controlled pause of between 0.2 and 3 seconds, <strong>all five red lights extinguish simultaneously</strong>. That split second is &quot;Lights Out!&quot;—and the race begins.
        </p>

        {/* Embedded Tyre Strategy Visual */}
        <TyreStrategyVisual />
      </section>

      {/* 8. Flags, Safety Cars & Virtual Safety Cars */}
      <section id="flags-and-safety" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          8. Yellow Flags, Red Flags, Safety Cars, and Virtual Safety Cars
        </h2>
        <p>
          When an incident occurs on track, FIA Race Control has several intervention levels to preserve driver and marshal safety:
        </p>
        <ul className="space-y-3 my-4">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Virtual Safety Car (VSC):</strong> When debris needs to be cleared quickly without bunching up the field. Drivers must reduce speed by roughly 35% to comply with a strict target delta lap time displayed on their steering wheel display. Overtaking is prohibited.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Full Safety Car (SC):</strong> A physical Mercedes-AMG or Aston Martin leads the pack around the circuit at reduced speed. All gaps between cars vanish as the field bunches up nose-to-tail, presenting a massive tactical opportunity for a &quot;cheap pit stop&quot; (losing only ~10–12 seconds in pit lane instead of ~20–24 seconds under green flag conditions).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Red Flag:</strong> The race is stopped completely. All cars immediately enter the pit lane and park in single file. Teams are permitted to change tyres and perform certain repairs under red flags before restarting.</span>
          </li>
        </ul>

        {/* Embedded Flags Interactive Guide */}
        <FlagGuideVisual />
      </section>

      {/* 9. Classifications */}
      <section id="classifications" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          9. Race Finishes, Classifications, and Points
        </h2>
        <p>
          When the leader completes the scheduled laps and crosses the line under the waving chequered flag, the race concludes.
        </p>
        <p>
          To be officially classified in the final race results, a driver does not necessarily have to cross the finish line—they must complete at least <strong>90% of the winner’s total lap distance</strong>. If a car crashes out or suffers a mechanical failure on lap 55 of a 57-lap race, they will still be classified in the final standings ahead of cars that completed fewer laps!
        </p>
      </section>

      {/* 10. Simple Fictional Illustrative Example */}
      <section id="fictional-walkthrough" className="space-y-4 scroll-mt-24">
        <div className="rounded-xl border border-neutral-700 bg-neutral-900/90 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold">
              ILLUSTRATIVE SIMULATION
            </span>
            <span className="text-xs text-neutral-400">Fictional Example</span>
          </div>
          <h3 className="text-xl font-bold text-white font-display">
            10. A Weekend in the Cockpit: Driver &quot;Alex Vance&quot;
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            To see how all these pieces fit together in real competition, follow this illustrative walkthrough of fictional driver Alex Vance racing for Apex Grand Prix:
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
            <div className="p-3 bg-neutral-950/80 rounded border border-neutral-800">
              <span className="font-bold text-white block mb-0.5">Friday (FP1 & FP2):</span>
              In FP1, Alex reports heavy understeer in Turn 4. The race engineer tweaks the front wing flap angle up by 1.5 degrees and softens the rear anti-roll bar. In FP2, Alex runs 18 laps on Medium tyres, confirming the tyres degrade by roughly 0.08 seconds per lap.
            </div>
            <div className="p-3 bg-neutral-950/80 rounded border border-neutral-800">
              <span className="font-bold text-white block mb-0.5">Saturday (Qualifying):</span>
              Alex breezes through Q1 in 8th place, navigates yellow flags in Q2 to finish 6th, and makes the Q3 shootout. On his final flying lap, Alex nails the apexes, missing pole by just 0.14 seconds, and lines up <strong>P3 on Sunday&apos;s grid</strong>.
            </div>
            <div className="p-3 bg-neutral-950/80 rounded border border-neutral-800">
              <span className="font-bold text-white block mb-0.5">Sunday (The Grand Prix):</span>
              Five red lights go out. Alex makes a great launch on Medium tyres, tucking into P2 behind the leader. On Lap 28, a Virtual Safety Car is deployed due to a stranded car. The pit wall immediately screams: <em>&quot;Box, Alex, box!&quot;</em> Taking advantage of the reduced speed delta, Alex pits for fresh Hard tyres in 2.3 seconds, leapfrogging the rival car when green flags resume.
            </div>
            <div className="p-3 bg-neutral-950/80 rounded border border-neutral-800">
              <span className="font-bold text-white block mb-0.5">The Chequered Flag:</span>
              Alex holds off late charges to cross the finish line in <strong>2nd place (P2)</strong>, scoring 18 championship points and climbing onto the podium spray champagne!
            </div>
          </div>
        </div>
      </section>

      {/* 11. Quick Glossary */}
      <section id="weekend-glossary" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          11. Quick Glossary of Race-Weekend Terminology
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Delta Time</h4>
            <p className="text-xs text-neutral-300">The live time difference displayed in a driver’s dashboard steering wheel comparing their current lap pace against a mandatory safety car target.</p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Track Limits</h4>
            <p className="text-xs text-neutral-300">The white lines defining the edge of the circuit. All four wheels must not completely cross beyond the white boundary line, or lap times are deleted.</p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Parc Fermé Window</h4>
            <p className="text-xs text-neutral-300">The strict regulatory lockdown period beginning the moment a car leaves the garage for qualifying, forbidding setup modifications.</p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Jump Start</h4>
            <p className="text-xs text-neutral-300">Moving forward from the grid slot before the five red lights extinguish. Detected by embedded inductive track sensors, resulting in a 5-second or 10-second penalty.</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};
