import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programs } from '../data/siteContent';
import crashPostImg from '../assets/crash post .jpg.jpeg';

export default function ProgramsPage() {
  const reveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <>
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

      <motion.section {...reveal} className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-lg">
            <img
              src={crashPostImg}
              alt="NEET Crash Course 2026 — LearnPark Academy"
              className="w-full object-contain"
              loading="lazy"
            />
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
