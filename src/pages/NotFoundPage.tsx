import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, ArrowLeft, Home, Compass } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-200 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-[#e10600]">
            <Flag className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e10600]">
              YELLOW FLAG · OFF TRACK (404)
            </span>
            <h1 className="text-3xl font-black text-white tracking-tight font-display">
              You Have Exceeded Track Limits
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed">
              The page or corner you are looking for does not exist on this circuit. Rejoin the racing line below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#e10600] hover:bg-[#c20500] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>
            <Link
              to="/f1-basics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
            >
              <Compass className="w-4 h-4 text-neutral-400" />
              <span>Explore F1 Basics</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
