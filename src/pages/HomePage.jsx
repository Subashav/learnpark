import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programs } from '../data/siteContent';
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
    name: 'Learn Park Academy',
    description:
      'Learn Park Academy in Erode delivers NEET, IIT-JEE, Foundation coaching, software training, and placement training with experienced faculty and structured student support.',
    areaServed: 'Erode, Tamil Nadu 638001, India',
    address: '41, Nalli Hospital Road, Opp Royal Theatre, Erode - 638001, Tamil Nadu, India',
    telephone: '+91-98948-49778',
    educationalCredentialAwarded: 'NEET, IIT-JEE, Foundation, Software & Placement Training',
    url: 'https://learnpark.vercel.app/',
  };

  const trustPoints = [
    'Small Batch Size',
    'Personal Mentorship',
    'Daily Test Analysis',
    'Tamil Medium Support',
  ];
  const mentorshipHighlights = [
    'Personal mentorship with weekly parent review',
    'Daily practice tests with performance analysis',
    'NEET-focused strategy aligned to latest exam pattern',
    'Dedicated doubt-clearing sessions every day',
  ];
  const offerBlocks = [
    {
      title: 'Tamil Medium Support',
      tone: 'text-[#06B6D4]',
      dot: 'bg-[#06B6D4]',
      points: ['NCERT Based Tamil Books', 'Tamil Chapter-wise Tests', 'Tamil Mock Tests'],
    },
    {
      title: 'Academic Excellence',
      tone: 'text-[#4F46E5]',
      dot: 'bg-[#4F46E5]',
      points: [
        '7 Days Intensive Classes & Daily Practice Tests',
        'Chapter-wise, Cumulative & Mock Exams',
        'Study Monitoring till 10 PM & Early Morning Tests',
        'Budget-Friendly Fees with Easy Installments',
      ],
    },
    {
      title: 'Premium Facilities',
      tone: 'text-[#F59E0B]',
      dot: 'bg-[#F59E0B]',
      points: [
        'Comfortable Hostel Facilities',
        'Up to 90% Offer for Govt. School (7.5 Quota)',
        'Student Referral Benefits',
        'Parent-Friendly Support System',
      ],
    },
  ];

  const heroBadges = ['Crack NEET', 'Get Rank', 'Become Doctor'];
  const featuredPrograms = programs.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }} />

      <section id="home-overview" className="section-reveal rounded-[2rem] bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#06B6D4] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
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
                  className="hover-pop inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:-translate-y-0.5 hover:brightness-105"
                  data-pop="Enroll"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/admissions"
                  className="hover-pop inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
                  data-pop="Book Demo"
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
                <div className="relative h-[320px] w-full overflow-hidden rounded-[1.5rem] sm:h-[420px]">
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

      <motion.section id="home-results" {...reveal} className="section-reveal py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-[#0F172A] px-6 py-10 text-center text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)] sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#4F46E5]/35 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-[#06B6D4]/30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_42%)]" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">Result Spotlight</p>
              <h2 className="font-heading mt-4 text-4xl font-bold sm:text-5xl">500+ NEET Selections</h2>
              <p className="mt-4 text-lg text-white/85">Top AIR Ranks Every Year</p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/95">AIR 120 Best Rank</span>
                <span className="rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FDE68A]">Daily Test Analytics</span>
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/95">Personal Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="home-why-choose" {...reveal} className="section-reveal bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Crack NEET</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Why Choose LearnPark?</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="hl-card hover-pop flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-5 sm:p-6" data-pop="Trusted Feature">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                <span className="text-[15px] leading-7 text-[#111827]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section id="home-mentorship" {...reveal} className="section-reveal bg-[#F9FAFB] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Mentorship System</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {mentorshipHighlights.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                  <span className="text-[15px] leading-7 text-[#111827]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">What We Offer</p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Complete NEET preparation with exclusive benefits.</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {offerBlocks.map((block) => (
                <article key={block.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-6">
                  <p className={`text-sm font-bold uppercase tracking-[0.16em] ${block.tone}`}>{block.title}</p>
                  <ul className="mt-4 space-y-3">
                    {block.points.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full text-xs font-bold text-white ${block.dot}`}>✓</span>
                        <span className="text-[15px] leading-7 text-[#374151]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="home-programs" {...reveal} className="section-reveal py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Get Rank</p>
              <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Choose the right NEET program.</h2>
            </div>
            <Link to="/programs" className="hover-pop self-start whitespace-nowrap text-base font-semibold text-[#4F46E5] hover:text-[#4338CA] sm:self-auto sm:text-sm" data-pop="See Programs">View all</Link>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {featuredPrograms.map((program) => (
              <article
                key={program.title}
                className="hl-card hover-pop rounded-2xl border border-[#E5E7EB] bg-white shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
                data-pop="Program"
              >
                <img src={program.image} alt={program.title} className="h-44 w-full rounded-t-2xl object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-[#111827]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">{program.desc}</p>
                  <Link
                    to="/admissions"
                    className="hover-pop mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F59E0B] px-4 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
                    data-pop="Apply"
                  >
                    Enroll Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#E0E7FF] bg-[#EEF2FF] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">Become Doctor</p>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-[#1F2937] sm:text-base">
              Daily tests, personal mentorship, and focused revision cycles are designed to turn NEET preparation into rank-level performance.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} className="section-reveal pb-16">
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
                className="hover-pop inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
                data-pop="Enroll"
              >
                Enroll Now
              </Link>
              <Link
                to="/admissions"
                className="hover-pop inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
                data-pop="Book Demo"
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
