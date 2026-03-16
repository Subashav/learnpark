import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import logoImage from '../assets/hero.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/admissions', label: 'Admissions' },
];

export default function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-white text-[#1D1D1F]">
      <header className="sticky top-0 z-30 border-b border-[#E7E5E4] bg-white/95 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between px-3 py-2 sm:px-4 md:px-5 lg:px-6">
          <NavLink to="/" className="inline-flex items-center">
            <img
              src={logoImage}
              alt="LearnPark NEET Academy"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
          </NavLink>

          <nav className="hidden gap-3 text-sm text-[#6B6761] md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-[#3B2F80]'
                    : 'transition-colors hover:text-[#3B2F80]'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E7E5E4] bg-[#F8F8F7] text-[#3B2F80] transition hover:border-[#CFE0F2] hover:bg-[#EEF6FF] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[#E7E5E4] bg-white px-3 py-3 shadow-[0_10px_24px_rgba(31,31,33,0.06)] md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-2xl border border-[#D8E5F1] bg-[#EEF6FF] px-4 py-3 font-semibold text-[#3B2F80]'
                      : 'rounded-2xl px-4 py-3 text-[#6B6761] transition hover:bg-[#F6F8FB] hover:text-[#3B2F80]'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-col gap-4 px-3 pb-10 pt-2 sm:px-4 md:gap-6 md:px-8 md:pb-12 md:pt-3 lg:gap-7 lg:px-10 xl:gap-8 xl:px-14 2xl:px-16">
        <Outlet />
      </main>

      <footer className="border-t border-[#E7E5E4] bg-[#FAF9F7]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-7 md:px-6 md:py-8 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="font-heading text-lg font-semibold text-[#1D1D1F]">Learnpark Neet Academy</p>
            <div className="flex flex-col gap-2 text-sm text-[#6B6761] sm:flex-row sm:gap-5">
              <span>+91 98765 43210</span>
              <span>info@learnparkacademy.in</span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#8C877F]">
            © 2026 Learnpark Neet Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
