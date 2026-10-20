import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleLayout } from '../components/ArticleLayout';
import { CarDiagramVisual } from '../components/visuals/CarDiagramVisual';
import { PointsSystemVisual } from '../components/visuals/PointsSystemVisual';
import { SEOHead } from '../components/SEOHead';
import { Info, HelpCircle, CheckCircle2 } from 'lucide-react';

const TOC = [
  { id: 'what-is-f1', label: 'What Is Formula 1?' },
  { id: 'championship-structure', label: 'How the Formula 1 World Championship Works' },
  { id: 'driver-vs-constructor', label: 'Driver vs. Constructor Explained' },
  { id: 'car-anatomy', label: 'The Anatomy of an F1 Car' },
  { id: 'aero-and-tyres', label: 'Aerodynamics, Tyres and Pit Stops' },
  { id: 'points-scoring', label: 'How F1 Drivers and Teams Earn Points' },
  { id: 'wdc-vs-wcc', label: 'Drivers’ Championship vs. Constructors’ Championship' },
  { id: 'chequered-flag', label: 'What Does the Chequered Flag Mean?' },
  { id: 'glossary', label: 'Essential F1 Terminology' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

export const ArticleBasics: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://f1-basic.vercel.app/f1-basics#article',
        isPartOf: {
          '@id': 'https://f1-basic.vercel.app/#website',
        },
        headline: 'How F1 Works: Formula 1 Basics for Beginners | F1 Explained',
        description: 'Discover how F1 works and master Formula 1 basics, including racing rules, car anatomy, points scoring, Drivers’ Championship, and essential terminology.',
        url: 'https://f1-basic.vercel.app/f1-basics',
        image: 'https://f1-basic.vercel.app/og-image.png',
        publisher: {
          '@id': 'https://f1-basic.vercel.app/#organization',
        },
        mainEntityOfPage: 'https://f1-basic.vercel.app/f1-basics',
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://f1-basic.vercel.app/f1-basics#breadcrumb',
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
            name: 'F1 Basics',
            item: 'https://f1-basic.vercel.app/f1-basics',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://f1-basic.vercel.app/f1-basics#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Formula 1?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Formula 1 (F1) is the premier international championship for open-wheel, single-seater racing cars sanctioned by the FIA. The word "Formula" refers to the strict set of technical and aerodynamic rules that all constructors must comply with to compete.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does F1 work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Formula 1 operates as a worldwide championship series where 10 constructors field two cars each across approximately 24 Grand Prix events per season. Drivers and teams accumulate championship points based on top-10 finishes, culminating in both a Drivers\' and a Constructors\' World Championship.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do F1 drivers earn points?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Drivers earn championship points by finishing in the top 10 positions of a Grand Prix, with 25 points awarded for 1st place down to 1 point for 10th. An additional bonus point is awarded for clocking the fastest lap of the race, provided the driver finishes inside the top 10.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between the Drivers\' Championship and Constructors\' Championship?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Drivers\' Championship (WDC) is awarded to the individual athlete who scores the most points throughout the season, while the Constructors\' Championship (WCC) is awarded to the team that accumulates the highest combined points across both of its cars. Commercial prize money is paid out based on Constructors\' standings.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is DRS in Formula 1?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DRS (Drag Reduction System) is a driver-activated flap in the rear wing that opens to reduce aerodynamic drag by approximately 20 km/h, assisting overtakes on designated track straights when a car is within one second of the car ahead.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does a chequered flag mean in F1?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The chequered flag is waved at the finish line to officially signal the end of a race or practice session. The first driver to cross the finish line under the waving chequered flag after completing the required lap distance is declared the Grand Prix winner.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="How F1 Works: Formula 1 Basics for Beginners | F1 Explained"
        description="Discover how F1 works and master Formula 1 basics, including racing rules, car anatomy, points scoring, Drivers' Championship, and essential terminology."
        canonicalUrl="https://f1-basic.vercel.app/f1-basics"
        ogType="article"
        schema={schema}
      />

      <ArticleLayout
        currentSlug="f1-basics"
        title="How F1 Works: A Beginner's Guide to Formula 1"
        kicker="Core Fundamentals · Guide 01"
        readTime="10 min read"
        intro="Formula 1 is the pinnacle of motorsport—a high-stakes collision of cutting-edge aerodynamics, 1,000-horsepower hybrid power units, elite human athleticism, and multi-million dollar strategy. Here is your definitive beginner’s guide to understanding how the world championship works."
        tableOfContents={TOC}
        heroImage="/images/f1-basics.jpg"
        heroImageAlt="Formula 1 racing car demonstrating aerodynamic front wing, halo cockpit safety, and slick tyres"
        heroGraphic={
          <div className="relative p-8 lg:p-12 overflow-hidden bg-gradient-to-br from-[#181820] via-[#101015] to-[#0c0c0e]">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                  FOUNDATIONAL MASTERCLASS
                </span>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                  Speed, Precision, and Aerodynamics
                </p>
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
        {/* 1. What Is Formula 1? */}
        <section id="what-is-f1" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            What Is Formula 1?
          </h2>
          <p>
            Formula 1 (commonly abbreviated as F1) is the highest class of international open-wheel, single-seater formula racing sanctioned by the <strong>Fédération Internationale de l’Automobile (FIA)</strong>. It is widely regarded as the absolute pinnacle of automotive engineering and human athletic competition.
          </p>
          <p>
            The word <em>&quot;Formula&quot;</em> in the name refers to a strict, standardized set of technical and sporting regulations to which all participating cars and drivers must conform. The <em>&quot;1&quot;</em> denotes that it is the premier tier of motorsport, sitting at the top of the single-seater ladder above Formula 2, Formula 3, and regional championships. To see how these rules translate onto the track across three days, see <Link to="/understanding-f1-race-weekends" className="text-[#e10600] underline font-medium hover:text-white transition-colors">how an F1 race weekend works</Link>.
          </p>
          <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Info className="w-4 h-4 text-[#e10600]" />
              <span>Why Single-Seaters Are Unique</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Unlike sports cars or NASCAR stock cars, an F1 car has an open cockpit where the driver sits dead center, protected by a titanium Halo. The wheels sit outside the main bodywork (&quot;open-wheel&quot;), which dramatically alters aerodynamic airflow and makes contact between two cars far more unforgiving.
            </p>
          </div>
        </section>

        {/* 2. How the World Championship Works */}
        <section id="championship-structure" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            How the Formula 1 World Championship Works
          </h2>
          <p>
            An F1 championship runs as an international world tour spanning from March to December. The championship visits purpose-built permanent circuits (such as Silverstone, Suzuka, and Spa-Francorchamps) as well as temporary street circuits walled by unforgiving concrete barriers (such as Monaco, Singapore, and Baku).
          </p>
          <p>
            Each race weekend is called a <strong>Grand Prix</strong> (French for &quot;Great Prize&quot;). Over the course of the season—spanning 24 Grand Prix events—drivers and constructors accumulate championship points based on their finishing positions at each race.
          </p>
          <p>
            At the conclusion of the final race of the season, two distinct world titles are crowned: the driver with the highest aggregate points wins the <strong>World Drivers&apos; Championship</strong>, and the team with the most total points combined across both cars wins the <strong>World Constructors&apos; Championship</strong>. For a deeper look at the 10 teams and 20 drivers competing for these honours, read <Link to="/f1-teams-and-drivers" className="text-[#e10600] underline font-medium hover:text-white transition-colors">how Formula 1 teams and drivers compete</Link>.
          </p>
        </section>

        {/* 3. Driver vs. Constructor Explained */}
        <section id="driver-vs-constructor" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Driver vs. Constructor Explained
          </h2>
          <p>
            To understand how F1 works, one must grasp that it is simultaneously an individual athletic championship and an intense corporate engineering battle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
              <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">
                The Driver
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-display">The Human Athlete</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                One of only 20 individuals on the starting grid. Drivers experience sustained lateral forces of up to 5G through corners, endure cockpit temperatures exceeding 50°C, and maintain heart rates above 170 BPM for up to two hours while making split-second decisions at 350 km/h.
              </p>
            </div>
            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-5">
              <span className="text-xs font-mono uppercase text-[#e10600] font-bold block mb-1">
                The Constructor
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-display">The Engineering Team</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                The team (e.g., Ferrari, McLaren, Mercedes, Red Bull) that designs, manufactures, tests, and builds the aerodynamic chassis. In F1, teams cannot buy a spec car off the shelf—every constructor must build its own unique prototype from scratch.
              </p>
            </div>
          </div>
          <p>
            This means two drivers driving for the same team have virtually identical machinery, while drivers from different teams are competing in completely distinct engineering prototypes with different aerodynamic downforce levels and tyre degradation characteristics.
          </p>
        </section>

        {/* 4. The Anatomy of an F1 Car */}
        <section id="car-anatomy" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            The Anatomy of an F1 Car
          </h2>
          <p>
            An F1 car weighs around 798 kg (empty without fuel) and is assembled from tens of thousands of custom-machined components made from aerospace-grade carbon fibre, titanium, and magnesium alloys.
          </p>
          <ul className="space-y-2.5 my-4">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
              <span><strong>The Carbon Monocoque (Survival Cell):</strong> The ultra-rigid central tub where the driver sits. It acts as an indestructible safety cocoon protecting the driver in massive impacts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
              <span><strong>The Turbo-Hybrid Power Unit:</strong> Combines a highly efficient 1.6-litre turbocharged V6 with two electrical recovery systems: the <em>MGU-K</em> (recovering kinetic energy under braking) and the <em>MGU-H</em> (recovering heat energy from hot exhaust gases), producing over 1,000 brake horsepower.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
              <span><strong>Carbon Ceramic Brakes:</strong> Capable of bringing a car from 300 km/h to a dead stop in less than 3 seconds, glowing cherry-red at temperatures surpassing 1,000°C.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e10600] mt-2 shrink-0" />
              <span><strong>The Halo:</strong> A wishbone-shaped titanium structure above the cockpit capable of bearing 12 tonnes of external force, protecting the driver’s head from airborne debris and rollovers.</span>
            </li>
          </ul>

          <CarDiagramVisual />
        </section>

        {/* 5. Aerodynamics, Tyres and Pit Stops */}
        <section id="aero-and-tyres" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Aerodynamics, Tyres and Pit Stops
          </h2>
          <p>
            Formula 1 cars corner at speeds that defy ordinary intuition. While an airplane wing creates upward lift to take flight, an F1 car’s inverted wings and underfloor venturi tunnels generate <strong>downforce</strong>: an invisible aerodynamic weight pressing the car directly down into the tarmac. At 250 km/h, an F1 car produces enough downforce that it could theoretically drive upside down on the ceiling of a tunnel.
          </p>

          <h3 className="text-xl font-bold text-white pt-2 font-display">The Tyre Compound Equation</h3>
          <p>
            Downforce is useless without tyre grip. F1 tyres are engineered by Pirelli to purposely degrade over time. Softer tyres offer tremendous grip and blistering lap times, but wear out rapidly. Harder tyres are more durable and resist degradation, but lap significantly slower.
          </p>
          <p>
            In a dry race, <strong>regulations mandate that every driver must use at least two different dry tyre compounds</strong>. This forces every team to make at least one pit stop, introducing high-stakes strategic drama.
          </p>

          <h3 className="text-xl font-bold text-white pt-2 font-display">The 2-Second Pit Stop Ballet</h3>
          <p>
            During a pit stop, approximately 20 crew members perform a choreographed miracle in under 2.5 seconds: four wheel guns remove the locking nuts, four members pull the old tyres, four fit fresh tyres, two jacks lift the front and rear of the car, and wing adjusters dial in front flap angles. A mistake of half a second can cost a driver multiple track positions.
          </p>

          <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 my-4">
            <img
              src="/images/f1-race-weekend.jpg"
              alt="Formula 1 pit crew servicing a car in the pit box during a synchronized rapid tyre change"
              className="w-full h-48 sm:h-64 object-cover"
              loading="lazy"
              width="1024"
              height="517"
            />
            <div className="p-3 bg-neutral-950/80 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>Synchronised Pit Stop Ballet</span>
              <span className="font-mono text-[#e10600]">~20 Crew Members · Sub-2.5s Execution</span>
            </div>
          </div>
        </section>

        {/* 6. How F1 Drivers and Teams Earn Points */}
        <section id="points-scoring" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            How F1 Drivers and Teams Earn Points
          </h2>
          <p>
            Unlike sports where participation scores points, only the <strong>top 10 finishers</strong> in a Sunday Grand Prix earn championship points. Finishing in 11th through 20th awards zero points.
          </p>
          <p>
            The race winner receives <strong>25 points</strong>, second place receives 18 points, and third place takes 15 points. In addition, an extra 1 point bonus is awarded for setting the single fastest lap of the race, provided that driver finishes inside the top 10.
          </p>

          <PointsSystemVisual />
        </section>

        {/* 7. Drivers’ Championship vs. Constructors’ Championship */}
        <section id="wdc-vs-wcc" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Drivers’ Championship vs. Constructors’ Championship
          </h2>
          <p>
            Throughout every race, two parallel championships are unfolding simultaneously:
          </p>
          <div className="space-y-4 my-4">
            <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5">
              <h3 className="text-base font-bold text-white mb-1 font-display">
                The World Drivers’ Championship (WDC)
              </h3>
              <p className="text-sm text-neutral-300">
                The individual crown won by legends like Juan Manuel Fangio, Ayrton Senna, Michael Schumacher, Lewis Hamilton, and Max Verstappen. Fans gravitate heavily towards this trophy as it crowns the single best driver in the world.
              </p>
            </div>
            <div className="rounded-lg bg-neutral-900/60 border border-neutral-800 p-5">
              <h3 className="text-base font-bold text-white mb-1 font-display">
                The World Constructors’ Championship (WCC)
              </h3>
              <p className="text-sm text-neutral-300">
                The team title calculated by adding together the points scored by <em>both</em> of a team’s drivers at every race. For the 1,000+ factory staff back at base, this is the most critical trophy: official commercial prize money distributed by F1 management is awarded strictly based on the final Constructors&apos; Championship finishing order.
              </p>
            </div>
          </div>
        </section>

        {/* 8. What Does the Chequered Flag Mean? */}
        <section id="chequered-flag" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            What Does the Chequered Flag Mean?
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

        {/* 9. Essential F1 Terminology */}
        <section id="glossary" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            Essential F1 Terminology
          </h2>
          <p>
            Commentators talk fast and use specific jargon. Here are the essential terms every new fan will hear on broadcast:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">Pole Position</h3>
              <p className="text-xs text-neutral-300">The first spot at the front of the starting grid (P1), earned by the driver who sets the absolute fastest lap time during Saturday qualifying.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">Starting Grid</h3>
              <p className="text-xs text-neutral-300">The 20 painted grid boxes arranged in staggered pairs of two leading up to the start line where cars lineup before the red lights illuminate.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">Pit Lane</h3>
              <p className="text-xs text-neutral-300">A designated lane running parallel to the main straight with a strict speed limit (typically 60 or 80 km/h) where team garages and pit stops are located.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">DRS (Drag Reduction System)</h3>
              <p className="text-xs text-neutral-300">A driver-activated hydraulic flap on the rear wing. When within 1 second of a car ahead in designated DRS zones, it opens up to reduce aerodynamic drag and boost top speed by 15–20 km/h to aid overtaking.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">The Undercut</h3>
              <p className="text-xs text-neutral-300">A pit strategy where a chasing car pits <em>one lap earlier</em> than the rival ahead. By putting on fresh tyres immediately, they drive a blistering out-lap and pass the rival when they pit on the subsequent lap.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">The Overcut</h3>
              <p className="text-xs text-neutral-300">The reverse strategy: staying out on track while your rival pits. Used when current tyres are still fast or when the rival gets caught in heavy traffic on their out-lap.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">Safety Car (SC)</h3>
              <p className="text-xs text-neutral-300">A specially tuned Mercedes-AMG or Aston Martin sports car dispatched to lead the pack at reduced speed following a major accident or debris, neutralising gaps.</p>
            </div>

            <div className="rounded-lg bg-neutral-900/80 border border-neutral-800 p-4">
              <h3 className="text-sm font-bold text-white mb-1">Parc Fermé</h3>
              <p className="text-xs text-neutral-300">French for &quot;closed park&quot;. A secure quarantine area where cars are placed after qualifying and races. Once Parc Fermé conditions begin, teams cannot alter car setups without penalties.</p>
            </div>
          </div>
        </section>

        {/* 10. Frequently Asked Questions (Phase 9 AEO) */}
        <section id="faq" className="space-y-6 scroll-mt-24">
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#e10600]" />
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sm text-neutral-400">
              Clear, direct answers to common beginner questions about how Formula 1 works.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What is Formula 1?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Formula 1 (F1) is the premier international championship for open-wheel, single-seater racing cars sanctioned by the FIA. The &quot;Formula&quot; refers to the strict set of technical and aerodynamic rules that all constructors must comply with to compete.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                How does F1 work?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Formula 1 operates as a worldwide championship series where 10 constructors field two cars each across approximately 24 Grand Prix events per season. Drivers and teams accumulate championship points based on top-10 finishes, culminating in both a Drivers&apos; and a Constructors&apos; World Championship.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                How do F1 drivers earn points?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Drivers earn championship points by finishing in the top 10 positions of a Grand Prix, with 25 points awarded for 1st place down to 1 point for 10th. An additional bonus point is awarded for clocking the fastest lap of the race, provided the driver finishes inside the top 10.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What is the difference between the Drivers&apos; Championship and Constructors&apos; Championship?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The Drivers&apos; Championship (WDC) is awarded to the individual athlete who scores the most points throughout the season, while the Constructors&apos; Championship (WCC) is awarded to the team that accumulates the highest combined points across both of its cars. Commercial prize money is paid out based on Constructors&apos; standings.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What is DRS in Formula 1?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                DRS (Drag Reduction System) is a driver-activated flap in the rear wing that opens to reduce aerodynamic drag by approximately 20 km/h, assisting overtakes on designated track straights when a car is within one second of the car ahead.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5 space-y-2">
              <h3 className="text-base font-bold text-white font-display">
                What does a chequered flag mean in F1?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The chequered flag is waved at the finish line to officially signal the end of a race or practice session. The first driver to cross the finish line under the waving chequered flag after completing the required lap distance is declared the Grand Prix winner.
              </p>
            </div>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
};
