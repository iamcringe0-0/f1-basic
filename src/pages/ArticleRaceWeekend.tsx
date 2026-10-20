import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleLayout } from '../components/ArticleLayout';
import { WeekendScheduleVisual } from '../components/visuals/WeekendScheduleVisual';
import { TyreStrategyVisual } from '../components/visuals/TyreStrategyVisual';
import { FlagGuideVisual } from '../components/visuals/FlagGuideVisual';
import { SEOHead } from '../components/SEOHead';
import { Compass, HelpCircle } from 'lucide-react';

const TOC = [
  { id: 'weekend-flow', label: 'What Happens During an F1 Race Weekend?' },
  { id: 'free-practice', label: 'Free Practice Explained' },
  { id: 'qualifying', label: 'F1 Qualifying Explained' },
  { id: 'knockout-format', label: 'How Q1, Q2 and Q3 Work' },
  { id: 'the-grand-prix', label: 'The Grand Prix Race' },
  { id: 'sprint-weekends', label: 'Sprint Weekends Explained' },
  { id: 'starts-and-strategy', label: 'Formation Laps, Race Starts and Pit Stops' },
  { id: 'flags-and-safety', label: 'Flags, Safety Cars and Virtual Safety Cars' },
  { id: 'classifications', label: 'Race Finishes, Classifications and Points' },
  { id: 'fictional-walkthrough', label: 'Fictional Walkthrough: A Weekend in the Cockpit' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

export const ArticleRaceWeekend: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://f1-basic.vercel.app/understanding-f1-race-weekends#article',
        isPartOf: {
          '@id': 'https://f1-basic.vercel.app/#website',
        },
        headline: 'F1 Race Weekend Explained: Practice, Qualifying and Race',
        description: 'Learn how an F1 race weekend works, from practice and qualifying to the Grand Prix, Sprint weekends, pit stops, flags, and race strategy.',
        url: 'https://f1-basic.vercel.app/understanding-f1-race-weekends',
        image: 'https://f1-basic.vercel.app/og-image.png',
        publisher: {
          '@id': 'https://f1-basic.vercel.app/#organization',
        },
        mainEntityOfPage: 'https://f1-basic.vercel.app/understanding-f1-race-weekends',
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://f1-basic.vercel.app/understanding-f1-race-weekends#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://f1-basic.vercel.app/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Race Weekend',
            item: 'https://f1-basic.vercel.app/understanding-f1-race-weekends',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://f1-basic.vercel.app/understanding-f1-race-weekends#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does an F1 race weekend work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An F1 race weekend is a three-day event consisting of Free Practice on Friday, Qualifying on Saturday to set the starting grid, and the Grand Prix race on Sunday where full championship points are awarded. Select venues feature a modified Sprint schedule.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens during F1 practice sessions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Free practice sessions allow teams to calibrate car aerodynamic balance, test tyre wear and degradation across short and long stints, and assess circuit track evolution without the pressure of championship elimination.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does F1 qualifying work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Qualifying is a three-stage knockout session (Q1, Q2, and Q3) held on Saturday where drivers attempt to set their fastest single lap time on low fuel and soft tyres. The five slowest cars are eliminated after each of the first two rounds, leaving the top 10 to battle for pole position.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a Sprint weekend and a standard race weekend?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Sprint weekend features a single one-hour practice session followed by a standalone Sprint Shootout qualifying, leading to a 100-kilometer mini-race on Saturday that awards bonus points to the top eight finishers. Sunday\'s Grand Prix grid is set by regular Qualifying.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long is an F1 race?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Formula 1 Grand Prix covers the minimum number of complete laps to exceed a distance of 305 kilometres (except Monaco at 260 km), typically lasting between 85 and 100 minutes with a strict two-hour maximum racing window.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens during an F1 pit stop?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'During an F1 pit stop, approximately 20 mechanics replace all four wheels in under 2.5 seconds using pneumatic wheel guns while adjusting front wing flap angles. Refueling has been banned since 2010.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="F1 Race Weekend Explained: Practice, Qualifying and Race"
        description="Learn how an F1 race weekend works, from practice and qualifying to the Grand Prix, Sprint weekends, pit stops, flags, and race strategy."
        canonicalUrl="https://f1-basic.vercel.app/understanding-f1-race-weekends"
        ogType="article"
        schema={schema}
      />

      <ArticleLayout
        currentSlug="understanding-f1-race-weekends"
        title="How an F1 Race Weekend Works"
        kicker="Weekend Formats · Guide 02"
        readTime="11 min read"
        intro="A Formula 1 Grand Prix is far more than a single Sunday race. Over three high-intensity days, teams progress through exploratory practice, cutthroat knockout qualifying, and full-distance race tactics. Here is the step-by-step breakdown of how an F1 race weekend works."
        tableOfContents={TOC}
        heroImage="/images/f1-race-weekend.jpg"
        heroImageAlt="Formula 1 pit crew executing a high-speed wheel change during a Grand Prix pit stop"
        heroGraphic={
          <div className="relative p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-[#1c1214] via-[#121217] to-[#0c0c0e]">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                  WEEKEND CHRONOLOGY & TACTICS
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                  From Friday Practice to Sunday Trophies
                </p>
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
        {/* 1. What Happens During an F1 Race Weekend? */}
        <section id="weekend-flow" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            What Happens During an F1 Race Weekend?
          </h2>
          <p>
            Every Formula 1 Grand Prix takes place across three consecutive days, running from Friday through Sunday. Thousands of fans fill the grandstands, while hundreds of engineers and mechanics work into the night preparing the most sophisticated racing cars in existence. If you are entirely new to motorsport terminology, you can first <Link to="/f1-basics" className="text-[#e10600] underline font-medium hover:text-white transition-colors">learn the basics of Formula 1</Link>.
          </p>
          <p>
            The structure builds in intensity: <strong>Friday</strong> is dedicated to engineering exploration and baseline testing; <strong>Saturday</strong> centers on pure raw speed and qualifying for track position; and <strong>Sunday</strong> culminates in the ultimate endurance and strategic test—the Grand Prix itself.
          </p>

          <WeekendScheduleVisual />
        </section>

        {/* 2. Free Practice Explained */}
        <section id="free-practice" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Free Practice Explained
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

        {/* 3. F1 Qualifying Explained */}
        <section id="qualifying" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            F1 Qualifying Explained
          </h2>
          <p>
            Qualifying is Saturday’s premier spectacle. Unlike the race where all 20 cars battle wheel-to-wheel for track position, qualifying is an uncompromising battle against the stopwatch.
          </p>
          <p>
            Drivers run with minimum fuel, maximum engine deployment, and fresh red soft tyres. A single lap is measured to the thousandth of a second (0.001s). Gaps between cars are often so microscopic that 0.1 seconds can be the difference between starting on the front row or starting in 8th place! To understand how teammates compare in this battle, <Link to="/f1-teams-and-drivers" className="text-[#e10600] underline font-medium hover:text-white transition-colors">understand F1 teams and drivers</Link>.
          </p>
          <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#e10600]" />
              <span>The Three-Lap Routine</span>
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every qualifying attempt requires three laps: an <strong>Out-Lap</strong> (exiting pit lane and warming up front and rear tyres to their optimum thermal window), the <strong>Flying Lap</strong> (the 100% flat-out lap against the clock), and the <strong>In-Lap</strong> (cooling the turbo-hybrid battery and engine while cruising back to the garage).
            </p>
          </div>
        </section>

        {/* 4. How Q1, Q2 and Q3 Work */}
        <section id="knockout-format" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            How Q1, Q2 and Q3 Work
          </h2>
          <p>
            Qualifying is divided into three consecutive elimination rounds:
          </p>

          <div className="space-y-4 my-6">
            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white font-display">
                  Phase 1: Q1 (18 Minutes)
                </h3>
                <span className="text-xs font-mono text-neutral-400">All 20 Cars On Track</span>
              </div>
              <p className="text-sm text-neutral-300 mb-2">
                All 20 cars take to the circuit. When the 18-minute countdown expires, the <strong>5 slowest drivers</strong> (ranked 16th to 20th) are eliminated and locked into their Sunday starting grid positions.
              </p>
              <span className="text-xs text-[#e10600] font-semibold">15 Cars Advance to Q2</span>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white font-display">
                  Phase 2: Q2 (15 Minutes)
                </h3>
                <span className="text-xs font-mono text-neutral-400">15 Cars Remaining</span>
              </div>
              <p className="text-sm text-neutral-300 mb-2">
                Lap times are completely reset to zero. The 15 surviving drivers battle for 15 minutes. At the chequered flag, the <strong>next 5 slowest cars</strong> (ranked 11th to 15th) are eliminated.
              </p>
              <span className="text-xs text-[#e10600] font-semibold">Top 10 Cars Advance to the Q3 Shootout</span>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white font-display">
                  Phase 3: Q3 (12 Minutes)
                </h3>
                <span className="text-xs font-mono text-neutral-400">Top 10 Shootout</span>
              </div>
              <p className="text-sm text-neutral-300 mb-2">
                The ultimate 12-minute shootout for the top 10 grid spots. Drivers typically do two runs on fresh soft tyres. The driver who clocks the fastest lap earns <strong>Pole Position</strong> (starting P1 on Sunday with the cleanest launch angle into Turn 1).
              </p>
              <span className="text-xs text-amber-400 font-semibold">Pole Position Decided</span>
            </div>
          </div>
        </section>

        {/* 5. The Grand Prix Race */}
        <section id="the-grand-prix" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            The Grand Prix Race
          </h2>
          <p>
            Sunday afternoon is the main championship event. A Formula 1 Grand Prix is run over the minimum number of complete laps required to exceed a distance of <strong>305 kilometres (190 miles)</strong>. The single historical exception is the tight, twisty streets of Monaco, where the race distance is set to 260 km due to lower average speeds.
          </p>
          <p>
            Races typically last between 85 and 100 minutes. However, regulations impose a strict <strong>two-hour maximum racing limit</strong> (or three hours total if there are red flag race suspensions), ensuring events do not drag on indefinitely during torrential rain.
          </p>
        </section>

        {/* 6. Sprint Weekends Explained */}
        <section id="sprint-weekends" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Sprint Weekends Explained
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
              Sprint regulations have evolved across recent seasons. Under current rules, the Sprint has its own standalone qualifying session on Friday (the Sprint Shootout), and the Saturday Sprint outcome does <em>not</em> determine Sunday’s starting grid. Sunday’s Grand Prix grid is set by regular Qualifying held on Saturday afternoon.
            </p>
          </div>
        </section>

        {/* 7. Formation Laps, Race Starts and Pit Stops */}
        <section id="starts-and-strategy" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Formation Laps, Race Starts and Pit Stops
          </h2>
          <p>
            Thirty minutes before lights out, the pit lane opens and cars head to the grid. Mechanics remove tire warmers at the 3-minute signal. At the zero mark, cars embark on the <strong>Formation Lap</strong>—weaving violently to build 100°C temperature in their tyres and warming their brakes.
          </p>
          <h3 className="text-xl font-bold text-white pt-2 font-display">The Five Red Lights</h3>
          <p>
            Once all 20 cars are stationary in their staggered grid boxes, the start gantry sequence begins: five red lights illuminate one by one at one-second intervals. Then, after a random computer-controlled pause of between 0.2 and 3 seconds, <strong>all five red lights extinguish simultaneously</strong>. That split second is &quot;Lights Out!&quot;—and the race begins.
          </p>

          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 my-4">
            <img
              src="/images/f1-teams-drivers.jpg"
              alt="Formula 1 starting grid with cars and drivers lined up before the race start"
              className="w-full h-48 sm:h-64 object-cover"
              loading="lazy"
              width="1280"
              height="613"
            />
            <div className="p-3 bg-neutral-950/80 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>The Starting Grid Formation</span>
              <span className="font-mono text-[#e10600]">20 Cars · Lights Out Launch Sequence</span>
            </div>
          </div>

          <TyreStrategyVisual />
        </section>

        {/* 8. Flags, Safety Cars and Virtual Safety Cars */}
        <section id="flags-and-safety" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Flags, Safety Cars and Virtual Safety Cars
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
              <span><strong>Full Safety Car (SC):</strong> A physical Mercedes-AMG or Aston Martin leads the pack around the circuit at reduced speed. All gaps between cars vanish as the field bunches up nose-to-tail, presenting a tactical opportunity for a cheap pit stop.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
              <span><strong>Red Flag:</strong> The race is stopped completely. All cars immediately enter the pit lane and park in single file. Teams are permitted to change tyres and perform certain repairs under red flags before restarting.</span>
            </li>
          </ul>

          <FlagGuideVisual />
        </section>

        {/* 9. Race Finishes, Classifications and Points */}
        <section id="classifications" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Race Finishes, Classifications and Points
          </h2>
          <p>
            When the leader completes the scheduled laps and crosses the line under the waving chequered flag, the race concludes.
          </p>
          <p>
            To be officially classified in the final race results, a driver does not necessarily have to cross the finish line—they must complete at least <strong>90% of the winner’s total lap distance</strong>. If a car crashes out or suffers a mechanical failure on lap 55 of a 57-lap race, they will still be classified in the final standings ahead of cars that completed fewer laps.
          </p>
        </section>

        {/* 10. Fictional Walkthrough */}
        <section id="fictional-walkthrough" className="space-y-4 scroll-mt-24">
          <div className="rounded-xl border border-neutral-700 bg-neutral-900/90 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono uppercase text-[#e10600] font-bold">
                ILLUSTRATIVE SIMULATION
              </span>
              <span className="text-xs text-neutral-400">Fictional Example</span>
            </div>
            <h2 className="text-xl font-bold text-white font-display">
              Fictional Walkthrough: A Weekend in the Cockpit
            </h2>
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
                Alex holds off late charges to cross the finish line in <strong>2nd place (P2)</strong>, scoring 18 championship points and climbing onto the podium!
              </div>
            </div>
          </div>
        </section>

        {/* 11. Frequently Asked Questions (Phase 9 AEO) */}
        <section id="faq" className="space-y-6 scroll-mt-24">
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#e10600]" />
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sm text-neutral-400">
              Clear, direct answers to common beginner questions about how an F1 race weekend works.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                How does an F1 race weekend work?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                An F1 race weekend is a three-day event consisting of Free Practice on Friday, Qualifying on Saturday to set the starting grid, and the Grand Prix race on Sunday where full championship points are awarded. Select venues feature a modified Sprint schedule.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What happens during F1 practice sessions?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Free practice sessions allow teams to calibrate car aerodynamic balance, test tyre wear and degradation across short and long stints, and assess circuit track evolution without the pressure of championship elimination.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                How does F1 qualifying work?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Qualifying is a three-stage knockout session (Q1, Q2, and Q3) held on Saturday where drivers attempt to set their fastest single lap time on low fuel and soft tyres. The five slowest cars are eliminated after each of the first two rounds, leaving the top 10 to battle for pole position.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What is the difference between a Sprint weekend and a standard race weekend?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A Sprint weekend features a single one-hour practice session followed by a standalone Sprint Shootout qualifying, leading to a 100-kilometer mini-race on Saturday that awards bonus points to the top eight finishers. Sunday&apos;s Grand Prix grid is set by regular Qualifying.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                How long is an F1 race?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A Formula 1 Grand Prix covers the minimum number of complete laps to exceed a distance of 305 kilometres (except Monaco at 260 km), typically lasting between 85 and 100 minutes with a strict two-hour maximum racing window.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What happens during an F1 pit stop?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                During an F1 pit stop, approximately 20 mechanics replace all four wheels in under 2.5 seconds using pneumatic wheel guns while adjusting front wing flap angles. Refueling has been banned since 2010.
              </p>
            </div>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
};
