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
    <div className="relative min-h-screen bg-[#F3F8FC] text-[#1D1D1F]">
      <header className="sticky top-0 z-30 border-b border-[#D2E1EC] bg-[#F3F8FC]/95 backdrop-blur-sm">
        <div className="flex w-full items-center justify-between px-3 py-2 sm:px-4 md:px-5 lg:px-6">
          <NavLink to="/" className="inline-flex items-center">
            <img
              src={logoImage}
              alt="LearnPark NEET Academy"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
          </NavLink>

          <nav className="hidden items-center gap-2 rounded-2xl border border-[#D2E1EC] bg-[#EAF2F8] p-1.5 text-sm text-[#3A6A88] md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-xl border border-[#80C0E8] bg-white px-3 py-1.5 font-semibold text-[#1A6FA0] shadow-[0_3px_8px_rgba(0,120,180,0.12)]'
                    : 'rounded-xl border border-transparent px-3 py-1.5 transition-colors hover:border-[#80C0E8] hover:bg-white hover:text-[#1A6FA0]'
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D2E1EC] bg-[#EAF2F8] text-[#1A6FA0] transition hover:border-[#9FC5DF] hover:bg-[#DCEAF5] md:hidden"
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
          <div className="border-t border-[#D2E1EC] bg-[#EFF5FA] px-3 py-3 shadow-[0_10px_24px_rgba(31,120,180,0.06)] md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-2xl border border-[#9FC5DF] bg-[#DCEAF5] px-4 py-3 font-semibold text-[#1A6FA0]'
                      : 'rounded-2xl px-4 py-3 text-[#3A6A88] transition hover:bg-[#EAF2F8] hover:text-[#1A6FA0]'
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

      <footer className="border-t border-[#D2E1EC] bg-[#EAF2F8]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-7 md:px-6 md:py-8 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="font-heading text-lg font-semibold text-[#1A3D5C]">LearnPark NEET Academy</p>
            <div className="flex flex-col gap-2 text-sm text-[#3A7CA5] sm:flex-row sm:gap-5">
              <span>+91 98765 43210</span>
              <span>info@learnparkacademy.in</span>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-[#5A9CBF]">
            © 2026 LearnPark NEET Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
