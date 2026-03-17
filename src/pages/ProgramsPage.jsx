import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '../data/siteContent';
import crashPostImg from '../assets/crash post .jpg.jpeg';
import erodeCCImg from '../assets/erode cc 26 a.jpg.jpeg';

export default function ProgramsPage() {
  const [lightbox, setLightbox] = useState(null);

  const reveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const banners = [
    { src: crashPostImg, alt: 'NEET Crash Course 2026 — LearnPark Academy' },
    { src: erodeCCImg, alt: 'LearnPark NEET Academy Erode — 2026 Admissions' },
  ];

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm font-semibold"
              >
                ✕ Close
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[90vh] rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.section {...reveal} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5] mb-4">Promotions &amp; Announcements</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {banners.map((banner) => (
              <button
                key={banner.alt}
                type="button"
                onClick={() => setLightbox(banner)}
                className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-md transition-all hover:scale-[1.02] hover:shadow-xl focus:outline-none"
              >
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
                  <span className="scale-75 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#111827] opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                    Click to view full size
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Programs</p>
          <h1 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Choose the right NEET preparation path.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6B7280]">
            Structured programs for Class 9 foundation to full repeater batches — each with a clear study system, test schedule, and mentor support.
          </p>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <img src={program.image} alt={program.title} className="h-48 w-full rounded-t-2xl object-cover" loading="lazy" />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-[#EEF2FF] px-3 py-1 font-semibold text-[#4F46E5]">{program.targetClass}</span>
                    <span className="rounded-full bg-[#F0FDF4] px-3 py-1 font-semibold text-[#16A34A]">{program.duration}</span>
                    <span className="rounded-full bg-[#ECFEFF] px-3 py-1 font-semibold text-[#0891B2]">{program.mode}</span>
                  </div>
                  <h2 className="font-heading mt-3 text-xl font-bold text-[#111827]">{program.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{program.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#374151]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#4F46E5]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/admissions"
                    className="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-[#F59E0B] px-5 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
                  >
                    Enroll Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-[#111827] px-6 py-10 text-white sm:px-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F59E0B]">Limited Seats</p>
            <h2 className="font-heading mt-3 text-2xl font-bold sm:text-3xl">Not sure which batch fits you?</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">Book a free demo class. Our counsellors will guide you to the right program based on your current level.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/admissions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
              >
                Enroll Now
              </Link>
              <Link
                to="/admissions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
