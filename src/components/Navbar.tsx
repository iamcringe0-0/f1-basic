import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Flag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Learn F1', href: '/f1-basics' },
    { label: 'Race Weekend', href: '/understanding-f1-race-weekends' },
    { label: 'Teams & Drivers', href: '/f1-teams-and-drivers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0e]/90 backdrop-blur-md border-b border-[#22222a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          aria-label="F1 Explained Home"
        >
          <span className="w-2.5 h-6 bg-[#e10600] rounded-sm transform -skew-x-12 group-hover:scale-y-110 transition-transform" />
          <span className="text-xl font-extrabold tracking-tight text-white uppercase font-display flex items-center">
            F1 <span className="text-neutral-400 font-normal ml-1.5 normal-case tracking-normal">Explained</span>
          </span>
        </Link>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e10600] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/f1-basics"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c20500] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-red-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Start Learning
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#22222a] bg-[#121217] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-800/80 text-white font-semibold border-l-2 border-[#e10600]'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-neutral-800/80">
            <Link
              to="/f1-basics"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c20500] rounded-md transition-colors"
            >
              <Flag className="w-3.5 h-3.5" />
              Start Learning F1
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
