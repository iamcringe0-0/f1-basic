import React from 'react';
import { ArticleLayout } from '../components/ArticleLayout';
import { CarDiagramVisual } from '../components/visuals/CarDiagramVisual';
import { PointsSystemVisual } from '../components/visuals/PointsSystemVisual';
import { Info, Gauge, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

const TOC = [
  { id: 'what-is-f1', label: 'What is Formula 1?' },
  { id: 'championship-structure', label: 'How the World Championship Works' },
  { id: 'driver-vs-constructor', label: 'Driver vs. Constructor Explained' },
  { id: 'car-anatomy', label: 'The Anatomy of a Modern F1 Car' },
  { id: 'aero-and-tyres', label: 'Aerodynamics, Tyres & 2-Second Pit Stops' },
  { id: 'points-scoring', label: 'How Drivers & Teams Earn Points' },
  { id: 'wdc-vs-wcc', label: 'Drivers’ Championship vs Constructors’ Championship' },
  { id: 'chequered-flag', label: 'What the Chequered Flag Actually Means' },
  { id: 'glossary', label: 'Essential Beginner Terminology & Jargon' },
  { id: 'beginner-recap', label: 'Recap: What You Need to Remember' },
];

export const ArticleBasics: React.FC = () => {
  return (
    <ArticleLayout
      currentSlug="f1-basics"
      title="Formula 1 Explained: A Beginner’s Guide"
      kicker="F1 Fundamentals · Guide 01"
      readTime="10 min read"
      intro="Formula 1 is the pinnacle of global motorsport: a high-stakes championship combining boundary-pushing engineering, elite human athletes, split-second tactical strategy, and 350 km/h wheel-to-wheel racing. Here is everything you need to know to watch and love your first Grand Prix."
      tableOfContents={TOC}
      heroGraphic={
        <div className="relative p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-[#181820] via-[#101015] to-[#0c0c0e]">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                FOUNDATIONAL MASTERCLASS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                Speed, Precision, and Aerodynamics
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                From the monocoque safety cell and 1,000+ horsepower turbo-hybrid power units to the complex strategic interplay between tyre compounds and pit stops.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg bg-black/40 border border-neutral-800 text-xs font-mono shrink-0">
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Governing Body:</span>
                <span className="text-white font-bold">FIA</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Current Formula:</span>
                <span className="text-white font-bold">1.6L V6 Turbo Hybrid</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Top Speeds:</span>
                <span className="text-white font-bold">Up to 360 km/h</span>
              </div>
              <div className="flex justify-between gap-6 text-neutral-400">
                <span>Cornering Force:</span>
                <span className="text-white font-bold">Up to 5–6G</span>
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* 1. What is Formula 1? */}
      <section id="what-is-f1" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          1. What is Formula 1?
        </h2>
        <p>
          Formula 1 (commonly abbreviated as F1) is the highest class of international open-wheel, single-seater formula racing sanctioned by the <strong>Fédération Internationale de l’Automobile (FIA)</strong>. It is widely regarded across the globe as the pinnacle of automotive engineering and human athletic competition.
        </p>
        <p>
          The word <em>&quot;Formula&quot;</em> in the name refers to a strict, standardized set of technical and sporting regulations to which all participating cars and drivers must conform. The <em>&quot;1&quot;</em> denotes that it is the premier tier of motorsport, sitting at the very top of the single-seater ladder above Formula 2, Formula 3, and regional Formula 4 championships.
        </p>
        <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Info className="w-4 h-4 text-[#e10600]" />
            <span>Why Single-Seaters Are Unique</span>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Unlike sports cars or NASCAR stock cars, an F1 car has an open cockpit where the driver sits dead center, exposed to the elements behind a protective titanium Halo. The wheels sit outside the main bodywork (&quot;open-wheel&quot;), which dramatically changes aerodynamic airflow and makes contact between two cars far more dangerous and unforgiving.
          </p>
        </div>
      </section>

      {/* 2. How the World Championship Works */}
      <section id="championship-structure" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          2. How the Formula 1 World Championship Works
        </h2>
        <p>
          An F1 championship runs as an international world tour spanning from early spring (typically March) to late autumn (typically December). The championship visits purpose-built permanent circuits (such as Silverstone in the UK, Suzuka in Japan, and Spa-Francorchamps in Belgium) as well as temporary street circuits walled by unforgiving concrete barriers (such as Monaco, Singapore, and Baku).
        </p>
        <p>
          Each race weekend is called a <strong>Grand Prix</strong> (French for &quot;Great Prize&quot;). Over the course of the season—which currently spans 24 Grand Prix events—drivers and their constructors accumulate championship points based on their finishing positions at every race.
        </p>
        <p>
          At the conclusion of the final race of the season, two distinct world titles are crowned: the driver with the highest aggregate points wins the <strong>World Drivers&apos; Championship</strong>, and the team with the most total points combined across both cars wins the <strong>World Constructors&apos; Championship</strong>.
        </p>
      </section>

      {/* 3. Driver vs Constructor */}
      <section id="driver-vs-constructor" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          3. The Difference Between a Driver and a Constructor
        </h2>
        <p>
          To understand F1, one must grasp that it is simultaneously an individual athletic championship and an intense corporate engineering battle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">
              The Driver
            </span>
            <h4 className="text-lg font-bold text-white mb-2 font-display">The Human Athlete</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              One of only 20 individuals on the starting grid. Drivers experience sustained lateral G-forces of up to 5G through corners, endure cockpit temperatures exceeding 50°C (122°F), and maintain heart rates above 170 BPM for up to two hours while making split-second decisions at 300+ km/h.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
            <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">
              The Constructor
            </span>
            <h4 className="text-lg font-bold text-white mb-2 font-display">The Engineering Team</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              The team (e.g., Ferrari, Mercedes, McLaren, Red Bull) that designs, manufactures, tests, and builds the aerodynamic chassis. In F1, you cannot buy a spec car off the shelf. Every constructor must build its own unique aerodynamic package from scratch.
            </p>
          </div>
        </div>
        <p>
          This means two drivers driving for the same team have virtually identical machinery, while drivers from different teams are competing in completely distinct engineering prototypes with different strengths, downforce levels, and tyre degradation characteristics.
        </p>
      </section>

      {/* 4. Car Anatomy */}
      <section id="car-anatomy" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          4. The Basic Structure of an F1 Car
        </h2>
        <p>
          An F1 car weighs around 798 kg (empty without fuel) and is assembled from tens of thousands of custom-machined components made from aerospace-grade carbon fibre, titanium, and magnesium alloys.
        </p>
        <ul className="space-y-2.5 my-4">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>The Carbon Monocoque (Survival Cell):</strong> The ultra-rigid central tub where the driver sits. It is practically indestructible and acts as the safety cocoon protecting the driver in massive impacts.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>The Turbo-Hybrid Power Unit:</strong> Far more than a traditional combustion engine. It pairs a highly efficient 1.6-litre turbocharged V6 with two electrical recovery systems: the <em>MGU-K</em> (recovering kinetic energy under braking) and the <em>MGU-H</em> (recovering thermal energy from hot exhaust gases), producing over 1,000 brake horsepower.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>Carbon Ceramic Brakes:</strong> Capable of bringing a car from 300 km/h to a dead stop in less than 3 seconds, glowing cherry-red at temperatures surpassing 1,000°C.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
            <span><strong>The Halo:</strong> A wishbone-shaped titanium structure above the cockpit capable of bearing 12 tonnes of external force, protecting the driver’s head from airborne wheels or collisions.</span>
          </li>
        </ul>

        {/* Interactive Car Visual Embedded */}
        <CarDiagramVisual />
      </section>

      {/* 5. Aerodynamics, Tyres, Strategy & Pit Stops */}
      <section id="aero-and-tyres" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          5. Why Aerodynamics, Tyres, Strategy, and Pit Stops Matter
        </h2>
        <p>
          Formula 1 cars corner at speeds that defy ordinary physics. While an airplane wing creates upward lift to take flight, an F1 car’s inverted wings and underfloor venturi tunnels generate <strong>downforce</strong>: an invisible aerodynamic weight pressing the car directly down into the tarmac. At 250 km/h, an F1 car produces enough downforce that it could theoretically drive upside down on the ceiling of a tunnel.
        </p>

        <h3 className="text-xl font-bold text-white pt-2 font-display">The Tyre Equation</h3>
        <p>
          Downforce is useless without tyre grip. F1 tyres are designed by official supplier Pirelli to purposely degrade over time. Softer tyres offer tremendous grip and blistering lap times, but wear out rapidly. Harder tyres are more durable and resist blistering, but lap significantly slower.
        </p>
        <p>
          In a dry race, <strong>regulations mandate that every driver must use at least two different dry tyre compounds</strong>. This forces every team to make at least one pit stop, introducing high-stakes strategic drama.
        </p>

        <h3 className="text-xl font-bold text-white pt-2 font-display">The 2-Second Pit Stop Ballet</h3>
        <p>
          During a pit stop, approximately 20 crew members perform a choreographed miracle in under 2.5 seconds: four wheel guns remove the locking nuts, four members pull the old tyres, four fit fresh tyres, two jacks lift the front and rear of the car, and wing adjusters dial in front flap angles. A mistake of half a second can cost a driver multiple track positions.
        </p>
      </section>

      {/* 6. Points Scoring */}
      <section id="points-scoring" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          6. How Drivers Earn Points in a Grand Prix
        </h2>
        <p>
          Unlike some sports where participation scores points, only the <strong>top 10 finishers</strong> in a Sunday Grand Prix earn points towards the championship. Finishing in 11th through 20th awards zero points.
        </p>
        <p>
          The race winner receives <strong>25 points</strong>, second place receives 18 points, and third place takes 15 points. In addition, an extra 1 point bonus is awarded for setting the single fastest lap of the race, provided that driver finishes inside the top 10.
        </p>

        <PointsSystemVisual />
      </section>

      {/* 7. WDC vs WCC */}
      <section id="wdc-vs-wcc" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          7. The Drivers’ Championship vs. The Constructors’ Championship
        </h2>
        <p>
          Throughout every race, two parallel championships are unfolding simultaneously:
        </p>
        <div className="space-y-4 my-4">
          <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5">
            <h4 className="text-base font-bold text-white mb-1">
              The World Drivers’ Championship (WDC)
            </h4>
            <p className="text-sm text-neutral-300">
              The individual crown won by legends like Juan Manuel Fangio, Ayrton Senna, Michael Schumacher, Lewis Hamilton, and Max Verstappen. Fans gravitate heavily towards this trophy as it crowns the single best driver in the world.
            </p>
          </div>
          <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5">
            <h4 className="text-base font-bold text-white mb-1">
              The World Constructors’ Championship (WCC)
            </h4>
            <p className="text-sm text-neutral-300">
              The team title calculated by adding together the points scored by <em>both</em> of a team’s drivers at every race. For the 1,000+ engineers, aerodynamicists, mechanics, and factory staff back at base, this is the most critical trophy: official commercial prize money distributed by F1 management (amounting to hundreds of millions of dollars) is awarded strictly based on the final Constructors&apos; Championship finishing order.
            </p>
          </div>
        </div>
      </section>

      {/* 8. The Chequered Flag */}
      <section id="chequered-flag" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          8. What a Chequered Flag Means
        </h2>
        <p>
          The iconic black-and-white chequered flag is waved from the starter&apos;s gantry directly above the finish line when the scheduled race distance has been completed.
        </p>
        <p>
          The leader who crosses the finish line when the chequered flag is waved is declared the race winner. Every car behind the winner completes their current lap and crosses the line to receive the chequered flag, establishing their final finishing position.
        </p>
        <p>
          Once a driver takes the chequered flag, racing immediately ceases. Drivers switch engine modes into low-fuel recovery settings, wave to the grandstand fans on their &quot;in-lap&quot; (cool-down lap), pick up rubber marbles from the track surface to ensure their car meets the strict minimum weight requirement during post-race inspection, and park in Parc Fermé.
        </p>
      </section>

      {/* 9. Common Beginner Terms */}
      <section id="glossary" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          9. Common Beginner Terms & Jargon
        </h2>
        <p>
          Commentators talk fast and use specific jargon. Here are the essential terms every new fan will hear on broadcast:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Pole Position</h4>
            <p className="text-xs text-neutral-300">The first spot at the front of the starting grid (P1), earned by the driver who sets the absolute fastest lap time during Saturday qualifying.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Starting Grid</h4>
            <p className="text-xs text-neutral-300">The 20 painted grid boxes arranged in staggered pairs of two leading up to the start line where cars lineup before the red lights illuminate.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Pit Lane</h4>
            <p className="text-xs text-neutral-300">A designated lane running parallel to the main straight with a strict speed limit (typically 60 or 80 km/h) where team garages and pit stops are located.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">DRS (Drag Reduction System)</h4>
            <p className="text-xs text-neutral-300">A driver-activated hydraulic flap on the rear wing. When within 1 second of a car ahead in designated DRS zones, it opens up to reduce aerodynamic drag and boost top speed by 15–20 km/h to aid overtaking.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">The Undercut</h4>
            <p className="text-xs text-neutral-300">A pit strategy where a chasing car pits <em>one lap earlier</em> than the rival ahead. By putting on fresh tyres immediately, they drive a blistering out-lap and pass the rival when they pit on the subsequent lap.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">The Overcut</h4>
            <p className="text-xs text-neutral-300">The reverse strategy: staying out on track while your rival pits. Used when current tyres are still fast or when the rival gets caught in heavy traffic on their out-lap.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Safety Car (SC)</h4>
            <p className="text-xs text-neutral-300">A specially tuned Mercedes-AMG or Aston Martin sports car dispatched to lead the pack at reduced speed following a major accident or debris, neutralising gaps.</p>
          </div>

          <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
            <h4 className="text-sm font-bold text-white mb-1">Parc Fermé</h4>
            <p className="text-xs text-neutral-300">French for &quot;closed park&quot;. A secure quarantine area where cars are placed after qualifying and races. Once Parc Fermé conditions begin, teams cannot alter car setups without penalties.</p>
          </div>
        </div>
      </section>

      {/* 10. Short Recap */}
      <section id="beginner-recap" className="space-y-4 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
          10. Recap: What a New Fan Should Remember
        </h2>
        <div className="rounded-xl border border-red-950/80 bg-neutral-900/90 p-6 space-y-4">
          <h4 className="text-lg font-bold text-white flex items-center gap-2 font-display">
            <CheckCircle2 className="w-5 h-5 text-[#e10600]" />
            Your Quick Cheat Sheet for Watching F1
          </h4>
          <ol className="space-y-3 text-sm text-neutral-300">
            <li className="flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#e10600] shrink-0">1.</span>
              <span><strong>10 Teams, 20 Drivers:</strong> Each team enters two cars. Teammates have identical cars and are each other’s ultimate benchmark.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#e10600] shrink-0">2.</span>
              <span><strong>Saturday Decides the Grid:</strong> Qualifying sets the start order. The fastest driver takes Pole Position.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#e10600] shrink-0">3.</span>
              <span><strong>Sunday is the Grand Prix:</strong> Lights-out standing start, mandatory tyre changes, 305 km race distance, and points for the top 10 finishers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#e10600] shrink-0">4.</span>
              <span><strong>Tyres Dictate Strategy:</strong> Watch tyre graphics on TV. Softer red tyres are fast but die quickly; harder white tyres last but lap slower.</span>
            </li>
          </ol>
        </div>
      </section>
    </ArticleLayout>
  );
};
