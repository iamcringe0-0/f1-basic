import React, { useState } from 'react';
import { ArticleLayout } from '../components/ArticleLayout';
import { Users, Shield, Cpu, Target, HelpCircle, UserCheck, ArrowRight } from 'lucide-react';

const TOC = [
  { id: 'participation', label: '1. How Teams Enter & Compete' },
  { id: 'definitions', label: '2. Team vs. Constructor vs. Driver' },
  { id: 'two-drivers', label: '3. Why Every Team Fields Exactly Two Drivers' },
  { id: 'teammate-paradox', label: '4. The Teammate Rivalry Paradox' },
  { id: 'pit-wall-roles', label: '5. Inside the Pit Wall: Key Roles & Personnel' },
  { id: 'championship-math', label: '6. Points Math: Driver vs. Constructor' },
  { id: 'car-development', label: '7. The Development Race & Technical Upgrades' },
  { id: 'market-and-rookies', label: '8. Driver Market, Transfers & &quot;Silly Season&quot;' },
  { id: 'how-to-pick', label: '9. How to Choose a Team & Driver to Support' },
  { id: 'summary-recap', label: '10. Summary: How the Grid Pieces Fit Together' },
];

interface RoleInfo {
  title: string;
  category: string;
  responsibility: string;
  radioQuote: string;
}

const TEAM_ROLES: RoleInfo[] = [
  {
    title: 'Team Principal (CEO / General Manager)',
    category: 'Executive Leadership',
    responsibility: 'The supreme leader of the racing team. Manages budgets, negotiates driver contracts, represents the constructor in FIA meetings, and handles high-level political and commercial decisions.',
    radioQuote: '“Both drivers have equal priority, but remember we need both cars home for the championship points.”',
  },
  {
    title: 'Race Engineer (The Voice on the Radio)',
    category: 'Trackside Operations',
    responsibility: 'The direct link to the driver while they are driving. Translates live telemetry, conveys strategy calls, monitors tyre pressures and temps, and guides the driver on engine mode switches.',
    radioQuote: '“Mode 6, push now, Alex. Undercut window is open.”',
  },
  {
    title: 'Head of Strategy (The Chess Master)',
    category: 'Race Analytics',
    responsibility: 'Runs complex real-time algorithmic simulations predicting traffic gaps, weather radars, safety car odds, and optimal pit stop laps for both cars.',
    radioQuote: '“Plan B is now active. We are covering the car behind.”',
  },
  {
    title: 'Chief Mechanic & Pit Crew',
    category: 'Physical Assembly',
    responsibility: 'Responsible for tearing down and rebuilding the car between sessions, fixing crash damage overnight, and executing sub-2.5 second tyre changes under immense pressure.',
    radioQuote: '“Front wing damage assessed; we are ready with replacement nosecone in the box.”',
  },
  {
    title: 'Reserve & Simulator Drivers',
    category: 'Support Athletes',
    responsibility: 'Spends entire Grand Prix weekends driving identical track conditions on multi-million dollar driver-in-the-loop simulators back at the factory, testing setups late into Friday night.',
    radioQuote: '“Sim run 44 shows 0.2s advantage by stiffening front heave springs.”',
  },
];

export const ArticleTeamsDrivers: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<number>(0);
  const currentRole = TEAM_ROLES[selectedRole];

  return (
    <ArticleLayout
      currentSlug="f1-teams-and-drivers"
      title="F1 Teams and Drivers: How the Grid Works"
      kicker="Paddock Dynamics · Guide 03"
      readTime="10 min read"
      intro="Formula 1 is a paradox: you must beat your teammate to prove you are elite, yet you must cooperate with them to win millions in constructors’ prize money. Here is how 10 teams, 20 drivers, and thousands of engineers operate on the world’s most competitive sporting grid."
      tableOfContents={TOC}
      heroGraphic={
        <div className="relative p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-[#12141c] via-[#101015] to-[#0c0c0e]">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                THE PADDOCK ECOSYSTEM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                Constructors, Teammates, and Pit Walls
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Understand how 1,000 factory employees, two ultra-competitive drivers, and the financial cost cap create the most intense team dynamic in sports.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-black/40 border border-neutral-800 text-xs font-mono shrink-0">
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>The Grid Size:</span>
                <span className="text-white font-bold">10 Teams · 20 Drivers</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>FIA Cost Cap:</span>
                <span className="text-white font-bold">~$135M Base Season Budget</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Factory Staff:</span>
                <span className="text-white font-bold">Up to 800–1,200 per team</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Licence Requirement:</span>
                <span className="text-white font-bold">FIA Super Licence (40 pts)</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* 1. How Teams Participate */}
      <section id="participation" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          1. How F1 Teams Participate in the Championship
        </h2>
        <p>
          The Formula 1 starting grid consists of exactly <strong>10 teams</strong> fielding a total of <strong>20 cars</strong> (two cars per team).
        </p>
        <p>
          Entering Formula 1 is one of the most exclusive and expensive sporting achievements on earth. Teams must meet stringent financial criteria, operate massive design and manufacturing facilities, and comply with the FIA Financial Regulations—commonly referred to as the <strong>Cost Cap</strong> (introduced to prevent ultra-wealthy teams from outspending rivals by hundreds of millions of dollars).
        </p>
        <p>
          While teams design their own aerodynamic bodywork and chassis, they can choose to either build their own power units (such as Ferrari and Mercedes) or purchase customer engines from licensed engine manufacturers (such as Red Bull Powertrains, Mercedes, Ferrari, or Renault/Alpine).
        </p>
      </section>

      {/* 2. Team vs Constructor vs Driver */}
      <section id="definitions" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          2. The Difference Between a Team, a Constructor, and a Driver
        </h2>
        <p>
          New fans often hear the words <em>&quot;Team&quot;</em> and <em>&quot;Constructor&quot;</em> used interchangeably, but in the FIA Sporting Code, they have distinct regulatory meanings:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">Entity 1</span>
            <h4 className="text-sm font-bold text-white mb-2 font-display">The Racing Team</h4>
            <p className="text-xs text-neutral-300">
              The operational entity that travels around the world to each circuit—consisting of the Team Principal, race engineers, mechanics, logistics managers, and drivers.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">Entity 2</span>
            <h4 className="text-sm font-bold text-white mb-2 font-display">The Constructor</h4>
            <p className="text-xs text-neutral-300">
              The intellectual property holder and manufacturer responsible for designing the car&apos;s chassis and aerodynamic survival cell. The Constructor is the entity that officially scores WCC points.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">Entity 3</span>
            <h4 className="text-sm font-bold text-white mb-2 font-display">The Driver</h4>
            <p className="text-xs text-neutral-300">
              Contracted athletes licensed under an official FIA Super Licence. They score individual points toward the World Drivers’ Championship and bring vital technical feedback to car development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Two Drivers */}
      <section id="two-drivers" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          3. Why Teams Normally Field Two Race Drivers
        </h2>
        <p>
          Under the Concorde Agreement and FIA sporting rules, every registered constructor is required to enter two cars at every championship round. There are three key reasons for this rule:
        </p>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Maximizing Championship Points:</strong> With two cars in the race, a team has double the opportunity to score top 10 positions, boosting their Constructors’ Championship standing.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Strategic Splitting:</strong> In uncertain weather or tight tactical races, a team can put Driver A on Soft tyres and Driver B on Medium tyres, ensuring the team succeeds regardless of how tyre wear or rain develops.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Sponsor & Paddock Value:</strong> Running two cars ensures maximum television broadcast exposure for title commercial partners across 24 races.</span>
          </li>
        </ul>
      </section>

      {/* 4. Teammate Rivalry */}
      <section id="teammate-paradox" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          4. The Teammate Rivalry Paradox: &quot;Your First Rival&quot;
        </h2>
        <p>
          In Formula 1, there is a famous paddock saying: <em>&quot;The first person you have to beat is your teammate.&quot;</em>
        </p>
        <p>
          Why? Because in a sport where cars from different teams perform vastly differently, your teammate is the <strong>only other driver on Earth driving identical machinery</strong>. If you qualify 0.3 seconds behind your teammate, you cannot blame the engine, the downforce, or the pit crew—it is pure driving performance.
        </p>

        <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-3">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-[#e10600]" />
            <span>Open Data vs. Heated Rivalries</span>
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Within the same garage, all telemetry data is transparently shared. If Driver A is 10 km/h faster through Turn 3, Driver B and their engineers examine Driver A’s throttle trace, braking pressure, and steering angle on computer monitors within minutes.
          </p>
          <p className="text-sm text-neutral-300 leading-relaxed">
            However, this dynamic can cause intense friction when both teammates battle for race wins or world championships. Team Principals sometimes have to issue controversial <strong>&quot;team orders&quot;</strong> (instructing one driver to hold position or let their teammate pass) to protect constructor points and prevent costly crashes between both cars.
          </p>
        </div>
      </section>

      {/* 5. Pit Wall Roles */}
      <section id="pit-wall-roles" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          5. Inside the Pit Wall: Key Roles & Personnel
        </h2>
        <p>
          When you watch a broadcast, you will see a long desk lined with computer screens sitting right beside the pit straight. This is the <strong>Pit Wall</strong>—the tactical nervous system of the team during a race.
        </p>

        {/* Interactive Pit Wall Explorer */}
        <div className="my-6 rounded-xl border border-neutral-800 bg-[#101015] p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3 mb-4">
            <h4 className="text-base font-bold text-white font-display">
              Pit Wall Command Structure
            </h4>
            <span className="text-xs text-neutral-400 font-mono">Select a Role to Inspect</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
            {TEAM_ROLES.map((role, idx) => (
              <button
                key={role.title}
                type="button"
                onClick={() => setSelectedRole(idx)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  selectedRole === idx
                    ? 'bg-neutral-900 border-[#e10600] text-white shadow-sm'
                    : 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <span className="block text-xs font-bold truncate">
                  {role.title.split('(')[0].trim()}
                </span>
                <span className="block text-[10px] text-neutral-400 truncate">
                  {role.category}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-lg bg-neutral-950 border border-neutral-800/90 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold text-[#e10600]">
                {currentRole.category}
              </span>
              <span className="text-xs text-neutral-400 font-mono">Live Comms Channel</span>
            </div>
            <h5 className="text-base font-bold text-white mb-2">
              {currentRole.title}
            </h5>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              {currentRole.responsibility}
            </p>
            <div className="bg-neutral-900/80 rounded p-3 border-l-2 border-[#e10600] text-xs text-neutral-300 italic">
              Typical Radio Transmission: {currentRole.radioQuote}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Championship Math */}
      <section id="championship-math" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          6. How Driver and Constructor Championship Points Work Together
        </h2>
        <p>
          Every point a driver scores in a Grand Prix or Sprint race is automatically credited to their team’s Constructors’ tally.
        </p>
        <p>
          For example, if Driver A finishes 1st (25 points) and Driver B finishes 2nd (18 points), the team scores a total of <strong>43 points</strong> from that single race (known as a &quot;1-2 finish&quot;).
        </p>
        <p>
          A team with one superstar driver who constantly wins races might still lose the Constructors’ Championship to a team where both drivers consistently finish on the podium, underscoring the critical value of having two fast, reliable drivers.
        </p>
      </section>

      {/* 7. Car Development */}
      <section id="car-development" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          7. How Teams Develop Cars and Make Strategic Upgrades
        </h2>
        <p>
          The car that rolls out for the first race in March is radically different from the car that finishes the championship in December. Formula 1 is an unceasing engineering arms race.
        </p>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Wind Tunnel & CFD Testing:</strong> Regulations limit how many hours teams can run their scale-model wind tunnels and computational fluid dynamics (CFD) supercomputers. Under the Aerodynamic Testing Restrictions (ATR), lower-finishing teams receive <em>more</em> wind tunnel time than champions to help equalize the field.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Upgrade Packages:</strong> Teams bring newly fabricated front wings, sculpted sidepods, and floor updates to races throughout the season, hoping to gain 0.1 to 0.3 seconds per lap.</span>
          </li>
        </ul>
      </section>

      {/* 8. Driver Market */}
      <section id="market-and-rookies" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          8. Driver Transfers, Rookies, and &quot;Silly Season&quot;
        </h2>
        <p>
          With only 20 seats on the entire planet, the Formula 1 driver market is ruthless. Contracts are negotiated intensely by sports agents and team principals.
        </p>
        <p>
          The summer break (August) is traditionally dubbed <strong>&quot;Silly Season&quot;</strong>, when driver contract negotiations, surprise team departures, and seat trades generate relentless speculation and breaking headlines.
        </p>
        <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#e10600]" />
            <span>The FIA Super Licence</span>
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            You cannot simply buy your way into an F1 race seat. To qualify for an official FIA Super Licence, a driver must be at least 18 years old, hold a valid road driving license, and accumulate at least <strong>40 qualification points</strong> across approved junior racing series (such as finishing in the top tier of Formula 2 or IndyCar) over a three-year window.
          </p>
        </div>
      </section>

      {/* 9. How to Follow */}
      <section id="how-to-pick" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          9. How to Follow Teams and Drivers as a New Fan
        </h2>
        <p>
          As a beginner, picking who to support makes following the championship significantly more fun. Here are three popular ways new fans choose their allegiance:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-2">1. By Driver Personality</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Listen to onboard team radios and watch post-race interviews. Some fans love calm, calculated drivers; others love aggressive, fearless overtakers with fiery charisma.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-2">2. By Team Heritage</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Ferrari is the oldest and most storied team in F1 history; McLaren is famous for its racing pedigree; Red Bull is renowned for bold aerodynamic innovations; Mercedes for precision engineering.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-2">3. The Midfield Underdogs</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Sometimes the most thrilling battles in F1 happen between 6th and 10th place. Rooting for an underdog midfield team fighting for their first points or podium can be wildly rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Summary Recap */}
      <section id="summary-recap" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          10. Recap: How the Team and Driver Competitions Fit Together
        </h2>
        <div className="rounded-xl border border-red-950/80 bg-neutral-900/90 p-6 space-y-4">
          <h4 className="text-lg font-bold text-white font-display">
            The Complete Picture at a Glance
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Formula 1 is never just about who has the fastest car, nor is it purely about who is the bravest driver. It is the synthesis of both: an elite athlete extracting the outer physical limits of a one-of-a-kind engineering marvel, guided by split-second mathematical strategies made by hundreds of minds back in the factory.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <span className="text-xs font-mono text-[#e10600] font-bold">READY TO DIVE IN?</span>
            <span className="text-xs text-neutral-400">
              Check out our companion guides on <strong>F1 Basics</strong> and <strong>Race Weekend Schedules</strong> to master every Grand Prix session!
            </span>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};
