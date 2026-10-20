import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Zap, Shield, Flag, Award, Compass, Timer, Activity } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ARTICLES } from '../types';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-200 flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Section B: Hero Section */}
        <section className="relative overflow-hidden border-b border-[#22222a] bg-gradient-to-b from-[#14141a] via-[#0f0f13] to-[#0c0c0e] pt-12 pb-20 lg:pt-20 lg:pb-28">
          {/* Subtle motorsport track speedline background */}
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

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] font-display text-balance">
                  Your Starting Grid to Formula 1
                </h1>

                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Formula 1 can seem intimidating with its technical jargon, complex penalty flags, and 3-day weekend formats. <strong>F1 Explained</strong> cuts through the confusion with clear, visual guides designed specifically for new fans.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to="/f1-basics"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c20500] rounded-lg transition-all shadow-lg shadow-red-950/50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <span>Start Learning F1</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/understanding-f1-race-weekends"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  >
                    <span>Explore Race Weekends</span>
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

              {/* Hero Motorsport Visual Graphic */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-neutral-800 bg-[#121218] p-6 shadow-2xl relative overflow-hidden group">
                  {/* Visual Starting Grid Simulation Graphic */}
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#e10600]" />
                      <span className="text-xs font-mono font-bold uppercase text-white">Grid Formation · Turn 1 Ahead</span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">Lights Out Countdown</span>
                  </div>

                  {/* Starting Lights Graphic */}
                  <div className="flex justify-center gap-2 sm:gap-3 py-4 bg-neutral-950 rounded-xl border border-neutral-800/80 mb-5">
                    {[1, 2, 3, 4, 5].map((light) => (
                      <div key={light} className="flex flex-col items-center gap-1.5 p-2 bg-neutral-900 rounded-md border border-neutral-800">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e10600] shadow-[0_0_12px_#e10600] animate-pulse" />
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#3a0604]" />
                      </div>
                    ))}
                  </div>

                  {/* Car Matchup Snippet */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#e10600]">P1</span>
                        <div>
                          <p className="text-xs font-bold text-white">Pole Position Launch</p>
                          <p className="text-[11px] text-neutral-400">Clean air · Inside racing line</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-300">0–100 km/h: 2.4s</span>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-neutral-400">P2</span>
                        <div>
                          <p className="text-xs font-bold text-white">Front Row Challenger</p>
                          <p className="text-[11px] text-neutral-400">Slipstream attack down straight</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-300">Reaction: ~0.20s</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
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
                What Makes Formula 1 Unlike Any Other Sport?
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                Formula 1 is the highest level of international open-wheel, single-seater circuit racing. It is not just a driver tournament—it is an intense world tour where automotive giants design custom prototypes from scratch to battle at extreme physical limits.
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
                  Unlike road cars or NASCAR, F1 cars use inverted aerodynamic wings and underfloor ground effect tunnels to generate tons of downforce, pulling up to 5G in corners without sliding.
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
                  In many racing series, all competitors drive identical cars. In Formula 1, every team designs and builds its own chassis, resulting in a fascinating engineering war of upgrades.
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
                  Pit stops take under 2.5 seconds. Strategic undercuts, tyre degradation management, and timing safety car interventions can transform a 10th-place run into a podium victory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Explore the Guides */}
        <section className="py-16 lg:py-24 border-b border-[#22222a] bg-[#0f0f13]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e10600] block mb-1">
                  Master the Sport
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display">
                  Explore the Complete Guides
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
                  {/* Card Visual Header */}
                  <div className="p-6 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <span className="font-mono text-[#e10600] font-bold">GUIDE 01</span>
                      <span>9 min read</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#e10600] mb-4 group-hover:scale-105 transition-transform">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      F1 Basics & Principles
                    </h3>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Understand what Formula 1 is, how the World Championship operates, car anatomy, hybrid power units, aerodynamic downforce, and essential beginner terms like DRS and pit stops.
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
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Race Weekend */}
              <div className="rounded-2xl border border-neutral-800 bg-[#121217] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <div className="p-6 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <span className="font-mono text-[#e10600] font-bold">GUIDE 02</span>
                      <span>11 min read</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#e10600] mb-4 group-hover:scale-105 transition-transform">
                      <Flag className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      Understanding an F1 Race Weekend
                    </h3>
                  </div>

                  <div className="p-6 space-y-3">
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
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Teams & Drivers */}
              <div className="rounded-2xl border border-neutral-800 bg-[#121217] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <div className="p-6 bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <span className="font-mono text-[#e10600] font-bold">GUIDE 03</span>
                      <span>10 min read</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#e10600] mb-4 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-red-400 transition-colors">
                      F1 Teams and Drivers
                    </h3>
                  </div>

                  <div className="p-6 space-y-3">
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
                    <span>Read Guide</span>
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
                New to F1? Start Here
              </h2>
              <p className="text-sm text-neutral-400 mt-2">
                Follow our recommended three-step learning progression to build your Formula 1 knowledge step by step.
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
                  <span>Start Step 1</span>
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
                  <span>Start Step 2</span>
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
                  <span>Start Step 3</span>
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
