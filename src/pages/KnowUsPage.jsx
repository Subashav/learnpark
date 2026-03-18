import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lnpk4 from '../assets/LNPK (4).jpg.jpeg';
import group1 from '../assets/group 1.JPG.jpeg';
import group2 from '../assets/group 2.JPG.jpeg';
import group3 from '../assets/group 3.jpg.jpeg';
import group4 from '../assets/Group 4.jpeg';
import eventImage from '../assets/IMG_20211029_161450.jpg.jpeg';
import lnpk1 from '../assets/LNPK (1).jpg.jpeg';
import lnpk2 from '../assets/LNPK (2).jpg.jpeg';
import lnpk3 from '../assets/LNPK (3).jpg.jpeg';
import founderImage from '../assets/RAJA.jpg.jpeg';
import neet2025_8 from '../assets/LEARN PARK NEET 2025 (8).png';
import neet2025_1 from '../assets/LEARN PARK NEET 2025 (1).png';
import neet2025_10 from '../assets/NEET 2025 LEARN PARK (10).png';
import neet2025_4 from '../assets/LEARN PARK NEET 2025 (4).png';
import neet2025_7 from '../assets/LEARN PARK NEET 2025 (7).png';
import neet2025_3 from '../assets/LEARN PARK NEET 2025 (3).png';
import neet2025_2 from '../assets/LEARN PARK NEET 2025 (2).png';

const galleryImages = [
  { src: lnpk4, alt: 'LearnPark institute banner and team' },
  { src: group1, alt: 'LearnPark students group 1' },
  { src: group2, alt: 'LearnPark students group 2' },
  { src: group3, alt: 'LearnPark students group 3' },
  { src: group4, alt: 'LearnPark students group 4' },
  { src: eventImage, alt: 'LearnPark institute event' },
  { src: lnpk1, alt: 'LearnPark campus memory 1' },
  { src: lnpk2, alt: 'LearnPark campus memory 2' },
  { src: lnpk3, alt: 'LearnPark campus memory 3' },
];

const neet2025Highlights = [
  { src: neet2025_8, alt: 'Learn Park NEET 2025 highlight 8' },
  { src: neet2025_1, alt: 'Learn Park NEET 2025 highlight 1' },
  { src: neet2025_10, alt: 'Learn Park NEET 2025 highlight 10' },
  { src: neet2025_4, alt: 'Learn Park NEET 2025 highlight 4' },
  { src: neet2025_7, alt: 'Learn Park NEET 2025 highlight 7' },
  { src: neet2025_3, alt: 'Learn Park NEET 2025 highlight 3' },
  { src: neet2025_2, alt: 'Learn Park NEET 2025 highlight 2' },
];

export default function AboutUsPage() {
  const [activeImage, setActiveImage] = useState(null);

  const gridReveal = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        staggerChildren: 0.08,
      },
    },
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -top-10 right-0 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Close
              </button>
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-[88vh] w-full rounded-2xl object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="section-reveal py-12"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Learn Park Academy</p>
          <h1 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Shaping Future Doctors &amp; Engineers</h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#334155]">About Us</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-[#6B7280]">
            Learn Park Academy, established in 2018 in Erode, specializes in NEET, IIT-JEE, and Foundation coaching. We also run
            a Software Application Training Division offering CorelDRAW, Photoshop, Illustrator, and Adobe Premier training.
            Formerly known as Orange Graphics Institute (since 2004, in Karur &amp; Erode), we have trained thousands of students.
            Our Founder, Mr. Raja Dharmalingam, has over 25 years of experience in the education industry and has served in
            prestigious institutions like SRM University (Ramapuram Campus).
          </p>

          <article className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
            <div className="grid items-center gap-0 md:grid-cols-[260px,1fr]">
              <img
                src={founderImage}
                alt="Mr. Raja Dharmalingam, Founder of Learn Park Academy"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">Founder</p>
                <h2 className="mt-2 text-2xl font-bold text-[#111827]">Mr. Raja Dharmalingam</h2>
                <p className="mt-3 text-sm leading-7 text-[#475569]">
                  With 25+ years of experience in the education industry, he has guided thousands of learners and served in
                  prestigious institutions including SRM University (Ramapuram Campus). His vision drives Learn Park Academy to
                  deliver high-quality coaching for NEET, IIT-JEE, and career-focused skill development.
                </p>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4F46E5]">Vision</h2>
              <p className="mt-3 text-sm leading-7 text-[#475569]">
                To empower students with knowledge &amp; skills to excel in competitive exams and careers.
              </p>
            </article>

            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4F46E5]">Mission</h2>
              <p className="mt-3 text-sm leading-7 text-[#475569]">
                Deliver quality training, build confidence, and ensure holistic student development.
              </p>
            </article>

            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4F46E5]">Core Values</h2>
              <p className="mt-3 text-sm leading-7 text-[#475569]">Excellence | Innovation | Integrity | Student-Centric</p>
            </article>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-[#111827]">Courses Offered</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#475569]">
                <li>NEET Coaching (Crash Course &amp; Long-Term)</li>
                <li>IIT-JEE Coaching (Foundation &amp; Advanced)</li>
                <li>Foundation Programs (Class 8-10)</li>
                <li>Software Training: CorelDRAW, Photoshop, Illustrator, Adobe Premier</li>
                <li>Placement Training: Soft Skills, Communication, Aptitude, GD, Interviews</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
              <h2 className="text-base font-bold text-[#111827]">Facilities</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#475569]">
                <li>Prime location near Erode Bus Stand (2500 sq. ft campus)</li>
                <li>Spacious classrooms with digital support</li>
                <li>Integrated school programs for NEET/IIT-JEE</li>
                <li>Placement training programs for Engineering &amp; Arts Colleges</li>
              </ul>
            </article>
          </div>

          <article className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-[#111827]">NEET 2025 Highlights</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-[#475569]">
              Our NEET-focused academic model combines concept clarity, regular tests, focused mentoring, and consistent
              performance tracking. These highlights reflect our students' commitment and the academy's result-oriented
              coaching culture.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {neet2025Highlights.map((image) => (
                <motion.button
                  key={image.alt}
                  type="button"
                  variants={cardReveal}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="hl-card hover-pop group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-lg"
                  data-pop="View Result"
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>
          </article>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#6B7280]">
            Real photos from our campus, classroom culture, faculty sessions, and student journey.
          </p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={gridReveal} className="section-reveal pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, idx) => (
              <motion.button
                key={image.alt}
                type="button"
                variants={cardReveal}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28 }}
                className={`hl-card hover-pop group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm hover:shadow-xl ${idx === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
                data-pop="View Highlight"
                onClick={() => setActiveImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full transition-transform duration-500 group-hover:scale-[1.04] ${idx === 0 ? 'max-h-[560px] object-contain bg-[#F8FAFC]' : 'h-72 object-cover'}`}
                  loading="lazy"
                />

                <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-[#4F46E5]/45" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 rotate-[18deg] bg-white/30 opacity-0 blur-md transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />

                <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#111827] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  LearnPark Moments
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
