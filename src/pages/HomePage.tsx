import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Zap, Shield, Timer } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { ARTICLES } from '../types';

export const HomePage: React.FC = () => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://f1-basic.vercel.app/#website',
        url: 'https://f1-basic.vercel.app/',
        name: 'F1 Explained',
        description: 'New to Formula 1? Learn the Formula 1 basics, understand how F1 works across race weekends, and discover how teams, drivers, and championships compete.',
        publisher: {
          '@id': 'https://f1-basic.vercel.app/#organization',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://f1-basic.vercel.app/#organization',
        name: 'F1 Explained',
        url: 'https://f1-basic.vercel.app/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://f1-basic.vercel.app/og-image.png',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-200 flex flex-col">
      <SEOHead
        title="Formula 1 Basics: How F1 Works & Beginner's Guide | F1 Explained"
        description="New to Formula 1? Learn the Formula 1 basics, understand how F1 works across race weekends, and discover how teams, drivers, and championships compete."
        canonicalUrl="https://f1-basic.vercel.app/"
        ogType="website"
        schema={homeSchema}
      />

      <Navbar />

      <main className="flex-1">
        {/* Section B: Hero Section */}
        <section className="relative overflow-hidden border-b border-[#22222a] bg-gradient-to-b from-[#14141a] via-[#0f0f13] to-[#0c0c0e] pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(225, 6, 0, 0.25) 0%, transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)',
              backgroundSize: '100% 100%, 60px 60px',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
                  <span className="w-2 h-2 rounded-full bg-[#e10600] inline-block animate-pulse" />
                  <span>The Beginner&apos;s Paddock Pass</span>
                </div>

                {/* Main Semantic H1 */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] font-display text-balance">
                  Formula 1 Basics: Your Starting Grid to F1
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Formula 1 can seem intimidating with its technical jargon, complex penalty flags, and 3-day weekend formats. <strong>F1 Explained</strong> helps beginners explore Formula 1 with structured, easy-to-follow guides covering rules, race strategies, and paddock dynamics.
                </p>

                {/* Primary & Secondary CTAs with clear, working links */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/f1-basics"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c20500] rounded-lg transition-all shadow-lg shadow-red-950/50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <span>Learn the Basics of Formula 1</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/understanding-f1-race-weekends"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  >
                    <span>Understand an F1 Race Weekend</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                </div>

                {/* Quick key stat indicators */}
                <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 max-w-lg text-xs">
                  <div>
                    <span className="block text-xl font-black text-white font-mono tabular-nums">20</span>
                    <span className="text-neutral-400">Elite Drivers</span>
                  </div>
                  <div>
                    <span className="block text-xl font-black text-white font-mono tabular-nums">10</span>
                    <span className="text-neutral-400">Constructors</span>
                  </div>
                  <div>
                    <span className="block text-xl font-black text-white font-mono tabular-nums">350+</span>
                    <span className="text-neutral-400">km/h Top Speeds</span>
                  </div>
                </div>
              </div>

              {/* Hero Motorsport Visual Graphic with Photography */}
              <div className="lg:col-span-5">
                <div 
                  className="rounded-2xl border border-neutral-800 bg-[#121218] p-5 sm:p-6 shadow-2xl relative overflow-hidden group space-y-4"
                  role="region"
                  aria-label="Formula 1 car and starting lights illustration"
                >
                  {/* Hero Image Container */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                    <img
                      src="/images/f1-hero.jpg"
                      alt="Formula 1 racing car in action at speed down the main straight"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width="1280"
                      height="853"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-transparent opacity-75" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-300 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded border border-neutral-700/60">
                      <span>Live Track Telemetry</span>
                      <span className="text-[#e10600] font-bold">342 km/h · Sector 3</span>
                    </div>
                  </div>

                  {/* Starting Lights Graphic */}
                  <div 
                    className="flex justify-center gap-2 sm:gap-3 py-3 bg-neutral-950 rounded-xl border border-neutral-800/80"
                    role="img"
                    aria-label="Illustration of five red FIA start lights illuminating across the gantry"
                  >
                    {[1, 2, 3, 4, 5].map((light) => (
                      <div key={light} className="flex flex-col items-center gap-1 p-1.5 bg-neutral-900 rounded-md border border-neutral-800">
                        <div className="w-4 h-4 rounded-full bg-[#e10600] shadow-[0_0_10px_#e10600] animate-pulse" />
                        <div className="w-4 h-4 rounded-full bg-[#3a0604]" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                    <span>Grand Prix Race Distance:</span>
                    <span className="font-mono text-white font-bold">~305 km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Beginner Introduction */}
        <section className="py-16 lg:py-20 border-b border-[#22222a] bg-[#0c0c0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] block">
                The Pinnacle of Motorsport
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                What Is Formula 1?
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                Formula 1 is the highest level of international open-wheel, single-seater circuit racing sanctioned by the FIA. It is not just a driver tournament—it is a global championship where automotive constructors engineer custom aerodynamic prototypes to race at extreme physical limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-neutral-800 bg-[#111116] p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#e10600]/10 border border-[#e10600]/20 flex items-center justify-center text-[#e10600]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Extreme Physics & Downforce
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Unlike ordinary road cars, F1 cars use inverted aerodynamic wings and underfloor ground effect venturi tunnels to generate massive downforce, allowing drivers to sustain 5G cornering loads without breaking traction.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-[#111116] p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#e10600]/10 border border-[#e10600]/20 flex items-center justify-center text-[#e10600]">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  No Standard &quot;Spec&quot; Cars
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  In many racing series, all competitors drive identical cars. In Formula 1, each team builds its own chassis, fueling a relentless season-long development race of aerodynamic and mechanical upgrades.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-[#111116] p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#e10600]/10 border border-[#e10600]/20 flex items-center justify-center text-[#e10600]">
                  <Timer className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Split-Second Strategy
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Pit stops take under 2.5 seconds. Strategic tyre undercuts, compound choices, and timing safety cars can elevate a midfield car onto the Grand Prix podium.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Explore the Guides - All 3 Cards with Restored Images */}
        <section className="py-16 lg:py-24 border-b border-[#22222a] bg-[#0f0f13]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] block mb-1">
                  Master the Sport
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                  Learn Formula 1: Beginner Guides
                </h2>
              </div>
              <p className="text-xs text-neutral-400 max-w-sm">
                Three comprehensive articles covering everything you need to know from technical basics to race day execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: F1 Basics */}
              <div className="rounded-2xl border border-neutral-800 bg-[#121217] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  {/* Card Visual Image */}
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800 relative">
                    <img
                      src="/images/f1-basics.jpg"
                      alt="Formula 1 racing car demonstrating aerodynamic front wing, halo cockpit safety, and slick tyres"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="1280"
                      height="538"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-[#e10600] font-bold border border-neutral-800">
                      GUIDE 01
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-neutral-300">
                      10 min read
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      F1 Basics & Principles
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Understand how Formula 1 works, championship structures, car anatomy, hybrid power units, aerodynamic downforce, and essential beginner terms like DRS and pit stops.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-400 font-mono">
                      <span>· Turbo Hybrids</span>
                      <span>· Aerodynamics</span>
                      <span>· DRS</span>
                      <span>· Points Math</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/f1-basics"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-[#e10600] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-800 hover:border-[#e10600]"
                  >
                    <span>Read F1 Basics Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Race Weekend */}
              <div className="rounded-2xl border border-neutral-800 bg-[#121217] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800 relative">
                    <img
                      src="/images/f1-race-weekend.jpg"
                      alt="Formula 1 pit crew executing a high-speed wheel change during a Grand Prix pit stop"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="1024"
                      height="517"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-[#e10600] font-bold border border-neutral-800">
                      GUIDE 02
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-neutral-300">
                      11 min read
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      Understanding an F1 Race Weekend
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Learn how the 3-day weekend unfolds: Free Practice testing, the dramatic Q1-Q2-Q3 knockout qualifying sessions, the Sunday Grand Prix, Sprint formats, and marshal flag signals.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-400 font-mono">
                      <span>· Practice Sessions</span>
                      <span>· Q1, Q2, Q3</span>
                      <span>· Sprint Formats</span>
                      <span>· Safety Cars</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/understanding-f1-race-weekends"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-[#e10600] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-800 hover:border-[#e10600]"
                  >
                    <span>Read Race Weekend Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Teams & Drivers */}
              <div className="rounded-2xl border border-neutral-800 bg-[#121217] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <div className="w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800 relative">
                    <img
                      src="/images/f1-teams-drivers.jpg"
                      alt="Formula 1 starting grid with cars, drivers, and mechanics lined up before the race start"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width="1280"
                      height="613"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-[#e10600] font-bold border border-neutral-800">
                      GUIDE 03
                    </div>
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-neutral-300">
                      10 min read
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      F1 Teams and Drivers
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Discover how 10 constructors field 20 drivers, the paradox of teammate competition, team principal leadership, in-season engineering upgrades, and the infamous driver market.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-400 font-mono">
                      <span>· Constructors</span>
                      <span>· Teammate Rivalry</span>
                      <span>· Pit Wall Roles</span>
                      <span>· Cost Cap</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/f1-teams-and-drivers"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-[#e10600] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-800 hover:border-[#e10600]"
                  >
                    <span>Read Teams & Drivers Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Beginner Learning Path */}
        <section className="py-16 lg:py-24 bg-[#0c0c0e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] block mb-1">
                Structured Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                Start Learning Formula 1
              </h2>
              <p className="text-sm text-neutral-400 mt-2">
                Follow our recommended three-step learning progression to master how Formula 1 works step by step.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/f1-basics"
                className="group rounded-xl border border-neutral-800 bg-[#121217] p-6 hover:border-[#e10600]/70 hover:bg-[#16161e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-[#e10600] font-mono font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-[#e10600] group-hover:text-white transition-colors">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    Step 1: Learn the Basics
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Master the cars, points system, aerodynamics, and terminology before you watch your first session.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-neutral-300 group-hover:text-white">
                  <span>Learn the basics of Formula 1</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#e10600]" />
                </div>
              </Link>

              <Link
                to="/understanding-f1-race-weekends"
                className="group rounded-xl border border-neutral-800 bg-[#121217] p-6 hover:border-[#e10600]/70 hover:bg-[#16161e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-[#e10600] font-mono font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-[#e10600] group-hover:text-white transition-colors">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    Step 2: Understand a Race Weekend
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Learn what happens on Friday, Saturday, and Sunday, including knockout qualifying and tyre rules.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-neutral-300 group-hover:text-white">
                  <span>Understand an F1 race weekend</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#e10600]" />
                </div>
              </Link>

              <Link
                to="/f1-teams-and-drivers"
                className="group rounded-xl border border-neutral-800 bg-[#121217] p-6 hover:border-[#e10600]/70 hover:bg-[#16161e] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-[#e10600] font-mono font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-[#e10600] group-hover:text-white transition-colors">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    Step 3: Meet the Teams and Drivers
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Explore the 10 teams, the unique teammate rivalry, and how to pick your favorite driver.
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-neutral-300 group-hover:text-white">
                  <span>Explore Formula 1 teams and drivers</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 text-[#e10600]" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
