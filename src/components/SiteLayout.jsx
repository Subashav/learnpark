import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
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

  const footerColumns = [
    {
      title: 'About Institute',
      links: [
        { label: 'LearnPark Overview', to: '/' },
        { label: 'Faculty', to: '/faculty' },
        { label: 'Admissions', to: '/admissions' },
      ],
    },
    {
      title: 'Courses',
      links: [
        { label: 'Foundation Program', to: '/programs' },
        { label: 'Preparation Program', to: '/programs' },
        { label: 'Repeaters Batch', to: '/programs' },
      ],
    },
    {
      title: 'Trust Signals',
      links: [
        { label: 'Results', to: '/' },
        { label: 'Student Reviews', to: '/' },
        { label: 'Book Counseling', to: '/admissions' },
      ],
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3 lg:px-6 xl:px-8">
          <NavLink to="/" className="inline-flex items-center">
            <img
              src={logoImage}
              alt="LearnPark NEET Academy"
              className="h-12 w-12 object-contain sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
          </NavLink>

          <nav className="hidden items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-1.5 text-sm text-[#475569] md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-xl border border-[#C7D2FE] bg-white px-3 py-1.5 font-semibold text-[#4F46E5] shadow-[0_8px_18px_rgba(79,70,229,0.10)]'
                    : 'rounded-xl border border-transparent px-3 py-1.5 transition-colors hover:border-[#E0E7FF] hover:bg-white hover:text-[#4F46E5]'
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#4F46E5] transition hover:border-[#C7D2FE] hover:bg-[#EEF2FF] md:hidden"
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
          <div className="border-t border-[#E2E8F0] bg-white px-4 py-3 shadow-[0_16px_32px_rgba(15,23,42,0.06)] md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-2xl border border-[#C7D2FE] bg-[#EEF2FF] px-4 py-3 font-semibold text-[#4F46E5]'
                      : 'rounded-2xl px-4 py-3 text-[#475569] transition hover:bg-[#F8FAFC] hover:text-[#4F46E5]'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col gap-6 px-4 pb-24 pt-4 sm:px-5 sm:pt-6 md:gap-10 md:px-6 md:pb-16 md:pt-8 xl:px-8">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E5E7EB] bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
        <div className="flex gap-3">
          <Link
            to="/admissions"
            className="flex-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#4F46E5] text-sm font-semibold text-white transition-all hover:bg-[#4338CA]"
          >
            Enroll Now
          </Link>
          <a
            href="tel:+919894849778"
            className="flex-1 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#F59E0B] text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
          >
            Call Us
          </a>
        </div>
      </div>

      <footer className="border-t border-[#E2E8F0] bg-white">
        <div className="mx-auto grid w-full max-w-[1380px] gap-8 px-4 py-8 sm:px-5 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-12 xl:px-8">
          <div>
            <p className="font-heading text-2xl font-bold text-[#0F172A]">LearnPark NEET Academy</p>
            <p className="mt-4 max-w-xl leading-8 text-[#475569]">
              A professional NEET coaching institute focused on academic discipline, expert mentoring, performance analytics, and trusted preparation systems for students and parents.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-[#2563EB]">
              <span className="rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-1.5">NEET Focused</span>
              <span className="rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-3 py-1.5 text-[#16A34A]">Structured Mentoring</span>
              <span className="rounded-full border border-[#E0F2FE] bg-[#ECFEFF] px-3 py-1.5 text-[#0891B2]">Parent Trust</span>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-[#E2E8F0] shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
              <iframe
                title="LearnPark NEET Academy Location"
                src="https://maps.google.com/maps?q=11.3466713,77.7164288&z=17&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">{column.title}</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[#475569]">
                  {column.links.map((link) => (
                    <NavLink key={link.label} to={link.to} className="transition-colors hover:text-[#2563EB]">
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">Contact</p>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-7 text-[#475569]">
                <span>Phone: 098948 49778</span>
                <span>Email: info@learnparkacademy.in</span>
                <span>Address: 41/1, Nalli Hospital Rd, opp. Royal Theatre, Municipal Colony, Annamalai Layout, Erode, Tamil Nadu 638004</span>
                <a href="https://maps.google.com/?q=41/1+Nalli+Hospital+Rd+Erode+Tamil+Nadu+638004" target="_blank" rel="noreferrer" className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0]">
          <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-2 px-4 py-4 text-sm text-[#64748B] sm:px-5 md:flex-row md:items-center md:justify-between md:px-6 xl:px-8">
            <p>© 2026 LearnPark NEET Academy. All rights reserved.</p>
            <p>Built for trust, clarity, and serious NEET preparation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
