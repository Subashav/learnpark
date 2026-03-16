import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import girlFour from './assets/girl 4.png';

const heroTaglines = ['Focused. Structured. Trusted.', 'Daily Tests. Real Progress.', 'Mentors Who Build Ranks.'];

export default function AntigravityHero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white px-4 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-6 sm:py-8 md:rounded-[32px] lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.08),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE] to-transparent" />

      <div className="relative z-10 grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <div className="inline-flex items-center rounded-full border border-[#DBEAFE] bg-[#EFF6FF] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            NEET 2026 Admissions Open
          </div>

          <h1 className="font-heading mt-5 max-w-[12ch] text-[clamp(2.3rem,10vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#0F172A] md:mt-6 md:max-w-[11ch] md:text-6xl">
            Crack NEET with India's Most Trusted Mentors
          </h1>

          <div className="mt-3 min-h-[2rem] text-base font-semibold text-[#16A34A] sm:mt-4 sm:min-h-[2.25rem] sm:text-xl">
            <BlurText
              key={heroTaglines[taglineIndex]}
              text={heroTaglines[taglineIndex]}
              delay={140}
              animateBy="words"
              direction="top"
              className="font-heading text-base font-semibold sm:text-xl"
              segmentClassName="bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent"
            />
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475569] sm:mt-5 sm:text-base sm:leading-8">
            Structured preparation, expert faculty, and proven results to help students secure top medical ranks.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Join NEET Program
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-xl border border-[#CBD5E1] bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Download Syllabus
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
            {['NEET Focused Curriculum', 'Expert Faculty', 'Proven Results'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#334155]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.7L17 6.8l-1.4-1.4-7.9 7.9Z" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px]"
        >
          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-[#DBEAFE] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(37,99,235,0.12)] lg:block">
            <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">Selections</p>
            <p className="mt-1 font-heading text-2xl font-bold text-[#2563EB]">1200+</p>
          </div>
          <div className="absolute -right-4 bottom-8 hidden rounded-2xl border border-[#DCFCE7] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(22,163,74,0.14)] lg:block">
            <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">Success Rate</p>
            <p className="mt-1 font-heading text-2xl font-bold text-[#16A34A]">95%</p>
          </div>

          <div className="rounded-[24px] border border-[#DBEAFE] bg-gradient-to-b from-[#EFF6FF] to-white p-3 shadow-[0_24px_60px_rgba(37,99,235,0.14)] sm:rounded-[28px] sm:p-4">
            <div className="rounded-[20px] bg-[linear-gradient(180deg,rgba(37,99,235,0.08),rgba(6,182,212,0.04))] p-3 sm:rounded-[24px] sm:p-4">
              <img
                src={girlFour}
                alt="LearnPark student preparing for NEET"
                className="mx-auto w-full max-w-[300px] object-contain sm:max-w-[360px]"
              />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 min-[440px]:grid-cols-3">
              {[
                ['15+', 'Faculty Experience'],
                ['Weekly', 'Performance Reviews'],
                ['1:1', 'Mentorship Support'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#E2E8F0] bg-white px-3 py-3 text-center sm:py-4">
                  <p className="font-heading text-lg font-bold text-[#0F172A] sm:text-xl">{value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:hidden">
            <div className="rounded-2xl border border-[#DBEAFE] bg-white px-4 py-3 text-center shadow-[0_12px_24px_rgba(37,99,235,0.10)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">Selections</p>
              <p className="mt-1 font-heading text-2xl font-bold text-[#2563EB]">1200+</p>
            </div>
            <div className="rounded-2xl border border-[#DCFCE7] bg-white px-4 py-3 text-center shadow-[0_12px_24px_rgba(22,163,74,0.10)]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#64748B]">Success Rate</p>
              <p className="mt-1 font-heading text-2xl font-bold text-[#16A34A]">95%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
