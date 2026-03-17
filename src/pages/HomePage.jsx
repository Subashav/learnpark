import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programs, testimonials } from '../data/siteContent';
import drImage from '../assets/dr image.png';
import drImageNew from '../assets/dr image new.png';

export default function HomePage() {
  const heroImages = [drImage, drImageNew];
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setHeroIdx((i) => (i + 1) % 2), 3000);
    return () => clearInterval(timer);
  }, []);

  const reveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const homeSeoSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'LearnPark NEET Academy',
    description:
      'LearnPark NEET Academy delivers structured NEET preparation, expert faculty support, weekly testing, and proven medical entrance results.',
    areaServed: 'Erode, Tamil Nadu 638004, India',
    address: '41/1, Nalli Hospital Rd, opp. Royal Theatre, Municipal Colony, Annamalai Layout, Erode, Tamil Nadu 638004',
    telephone: '+91-98948-49778',
    educationalCredentialAwarded: 'NEET Entrance Preparation',
    url: 'https://learnpark.vercel.app/',
  };

  const proofStats = [
    ['500+', 'Medical Selections'],
    ['AIR 120', 'Best Rank'],
    ['15+', 'Years of Faculty Experience'],
  ];

  const trustPoints = [
    'Personal mentorship with weekly parent review',
    'Daily practice tests with performance analysis',
    'NEET-focused strategy aligned to latest exam pattern',
    'Dedicated doubt-clearing sessions every day',
  ];

  const heroBadges = ['500+ Selections', 'AIR 120', '95% Parent Satisfaction'];
  const featuredPrograms = programs.slice(0, 3);
  const trainerSupport = [
    ['Daily Doubt-Clearing Support', 'Topic-wise and question-wise doubt solving with dedicated subject trainers.'],
    ['Personal Mentorship Reviews', 'Weekly performance tracking, correction plans, and focused intervention support.'],
    ['Structured Test Analysis', 'Chapter tests, cumulative exams, and mock analytics with improvement strategy.'],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }} />

      <section className="rounded-[2rem] bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#06B6D4] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...reveal}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Trusted NEET Institute in Erode</p>
              <h1 className="font-heading mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Crack NEET 2026 with Proven Results and Personal Mentorship.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
                Join a serious preparation system trusted by students and parents with 500+ medical selections, expert faculty, and disciplined testing.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {heroBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/admissions"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:-translate-y-0.5 hover:brightness-105"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/admissions"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  Book Free Demo
                </Link>
              </div>
            </motion.div>

            <motion.div {...reveal} className="relative mx-auto w-full max-w-[420px] px-8">
              <div className="absolute left-0 top-3 z-10 rounded-2xl bg-white px-3 py-2 text-[#111827] shadow-xl sm:px-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">Top Result</p>
                <p className="font-heading text-lg font-bold text-[#4F46E5]">AIR 120</p>
              </div>
              <div className="absolute right-0 bottom-7 z-10 rounded-2xl bg-white px-3 py-2 text-[#111827] shadow-xl sm:px-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">Selections</p>
                <p className="font-heading text-lg font-bold text-[#06B6D4]">500+</p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/35 bg-white/10 p-3 backdrop-blur-sm">
                <div className="relative h-[420px] w-full rounded-[1.5rem] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={heroImages[heroIdx]}
                      src={heroImages[heroIdx]}
                      alt="NEET student achiever"
                      className="absolute inset-0 h-full w-full rounded-[1.5rem] object-cover object-top"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      loading="eager"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section {...reveal} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Results and Trust</p>
          <h2 className="font-heading mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">Real outcomes parents can trust.</h2>
          <div className="mt-10 grid gap-8 border-y border-[#E5E7EB] py-8 sm:grid-cols-3">
            {proofStats.map(([value, label]) => (
              <div key={label}>
                <p className="font-heading text-3xl font-bold text-[#111827] sm:text-4xl">{value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#6B7280]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-[#6B7280]">Consistent AIR ranks with subject-wise mentoring, test analytics, and disciplined revision cycles.</p>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Why Choose Us</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">A preparation system built for serious NEET aspirants.</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                <span className="text-[15px] leading-7 text-[#111827]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section {...reveal} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Courses</p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Choose the right NEET program.</h2>
            </div>
            <Link to="/programs" className="text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]">View all</Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPrograms.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <img src={program.image} alt={program.title} className="h-44 w-full rounded-t-2xl object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-[#111827]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{program.desc}</p>
                  <Link
                    to="/admissions"
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F59E0B] px-4 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
                  >
                    Enroll Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">What We Offer</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Complete NEET preparation with exclusive benefits.</h2>
          
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#06B6D4]">Tamil Medium Support</p>
              <ul className="mt-4 space-y-3">
                {[
                  'NCERT Based Tamil Books',
                  'Tamil Chapter-wise Tests',
                  'Tamil Mock Tests',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#06B6D4] text-xs font-bold text-white">✓</span>
                    <span className="text-[15px] leading-6 text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#4F46E5]">Academic Excellence</p>
              <ul className="mt-4 space-y-3">
                {[
                  '7 Days Intensive Classes & Daily Practice Tests',
                  'Chapter-wise, Cumulative & Mock Exams',
                  'Study Monitoring till 10 PM & Early Morning Tests',
                  'Budget-Friendly Fees with Easy Installments',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                    <span className="text-[15px] leading-6 text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#F59E0B]">Premium Facilities</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Comfortable Hostel Facilities',
                  'Up to 90% Offer for Govt. School (7.5 Quota)',
                  'Student Referral Benefits',
                  'Parent-Friendly Support System',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#F59E0B] text-xs font-bold text-white">✓</span>
                    <span className="text-[15px] leading-6 text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-[#EEF2FF] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Testimonials</p>
          <h2 className="font-heading mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">Students who transformed their scores.</h2>

          <div className="testimonial-rail mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.map(([name, quote]) => (
              <article key={name} className="min-w-[82%] snap-start rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-md md:min-w-0">
                <p className="text-base font-semibold text-[#111827]">{name}</p>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Experienced Trainers</p>
              <h2 className="font-heading mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">What we provide through our experienced trainers.</h2>
            </div>
            <Link to="/faculty" className="text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA]">Know more</Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainerSupport.map(([title, desc]) => (
              <article key={title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#111827]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-[#111827] px-6 py-10 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F59E0B]">Limited Seats</p>
            <h2 className="font-heading mt-3 text-3xl font-bold sm:text-4xl">New NEET batch starts soon. Secure your seat now.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Last few admissions open for this cycle. Book a free demo class and get your personalized preparation roadmap.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
