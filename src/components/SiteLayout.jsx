import { NavLink, Outlet } from 'react-router-dom';
import logoImage from '../assets/hero.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Faculty' },
  { to: '/admissions', label: 'Admissions' },
];

export default function SiteLayout() {
  return (
    <div className="relative min-h-screen bg-white text-[#1D1D1F]">
      <header className="sticky top-0 z-30 border-b border-[#E7E5E4] bg-white">
        <div className="flex w-full items-center justify-between px-3 py-1 md:px-5 lg:px-6">
          <NavLink to="/" className="inline-flex items-center">
            <img src={logoImage} alt="LearnPark NEET Academy" className="h-20 w-20 object-contain" />
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
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 pb-12 pt-2 md:px-8 md:pt-3 xl:px-12">
        <Outlet />
      </main>

      <footer className="border-t border-[#E7E5E4] bg-[#FAF9F7]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-8 md:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="font-heading text-lg font-semibold text-[#1D1D1F]">Learnpark Neet Academy</p>
            <div className="flex gap-5 text-sm text-[#6B6761]">
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
