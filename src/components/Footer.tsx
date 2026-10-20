import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#22222a] bg-[#09090b] text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Overview */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <span className="w-2.5 h-6 bg-[#e10600] rounded-sm transform -skew-x-12" />
              <span className="text-xl font-extrabold tracking-tight text-white uppercase font-display">
                F1 <span className="text-neutral-400 font-normal ml-1 normal-case">Explained</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
              A comprehensive, modern educational platform engineered to help motorsport newcomers master the rules, strategies, engineering, and weekend drama of Formula 1.
            </p>
          </div>

          {/* Educational Guides */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Complete Guides
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/f1-basics"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  F1 Basics & Principles
                </Link>
              </li>
              <li>
                <Link
                  to="/understanding-f1-race-weekends"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Understanding Race Weekends
                </Link>
              </li>
              <li>
                <Link
                  to="/f1-teams-and-drivers"
                  className="hover:text-white transition-colors block py-0.5"
                >
                  Teams, Constructors & Drivers
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              Site Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors block py-0.5">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/f1-basics#glossary" className="hover:text-white transition-colors block py-0.5">
                  F1 Glossary & Jargon
                </Link>
              </li>
              <li>
                <Link to="/understanding-f1-race-weekends#flags" className="hover:text-white transition-colors block py-0.5">
                  Flag Signals Guide
                </Link>
              </li>
              <li>
                <Link to="/f1-teams-and-drivers#market" className="hover:text-white transition-colors block py-0.5">
                  Driver Market & Transfers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1a1a22] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="max-w-2xl text-neutral-400 leading-relaxed">
            Disclaimer: F1 Explained is an independent educational and editorial project. This website is not affiliated with, endorsed by, sponsored by, or associated in any way with Formula 1, Formula One Licensing B.V., Formula One Management, or the Fédération Internationale de l&apos;Automobile (FIA). All trademarks and brand names belong to their respective holders.
          </p>
          <p className="whitespace-nowrap shrink-0 text-neutral-400">
            © {currentYear} F1 Explained. Independent Educational Resource.
          </p>
        </div>
      </div>
    </footer>
  );
};
