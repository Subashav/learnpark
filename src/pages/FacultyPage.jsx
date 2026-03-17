import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faculty, testimonials } from '../data/siteContent';

export default function FacultyPage() {
  const reveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const teachingPoints = [
    'Expert question selection aligned to NEET PYQ patterns',
    'Weekly one-on-one doubt resolution sessions',
    'Performance analytics with chapter-wise intervention',
    'Parent communication every two weeks',
  ];

  return (
    <>
      <motion.section {...reveal} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Faculty</p>
          <h1 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Experienced NEET subject experts.</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6B7280]">
            Dedicated mentors for Physics, Chemistry, and Biology with combined decades of NEET preparation experience.
          </p>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map(([name, role, image]) => (
              <article key={name} className="rounded-2xl border border-[#E5E7EB] bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl">
                <img src={image} alt={name} className="h-56 w-full rounded-t-2xl object-cover" loading="lazy" />
                <div className="p-5">
                  <h2 className="font-heading text-xl font-bold text-[#111827]">{name}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#6B7280]">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Teaching Approach</p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">More than teaching — systematic mentoring.</h2>
            <p className="mt-4 text-base leading-8 text-[#6B7280]">Each faculty member at LearnPark follows a structured approach to NEET preparation beyond regular classes.</p>
            <ul className="mt-6 space-y-4">
              {teachingPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                  <span className="text-[15px] leading-7 text-[#374151]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {testimonials.slice(0, 2).map(([name, quote, image]) => (
              <article key={name} className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4 shadow-sm">
                <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
                <p className="mt-3 text-xs font-semibold text-[#111827]">{name}</p>
                <p className="mt-2 text-xs leading-6 text-[#6B7280]">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-[#111827] px-6 py-10 text-white sm:px-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F59E0B]">Meet Our Faculty</p>
            <h2 className="font-heading mt-3 text-2xl font-bold sm:text-3xl">Experience the mentoring first-hand.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">Attend a free demo class and see how our faculty approach NEET preparation differently.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/admissions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
              >
                Book Free Demo
              </Link>
              <Link
                to="/admissions"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
