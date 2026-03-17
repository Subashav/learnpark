import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AntigravityHero from '../AntigravityHero';
import { faculty, programs, results, reviews, testimonials } from '../data/siteContent';
import girlOne from '../assets/girl 1.png';
import girlTwo from '../assets/girl 2.png';
import boyOne from '../assets/boy 1.png';

function FeatureIcon({ type }) {
  const icons = {
    faculty: <path d="M10 3 4 6v4c0 3.9 2.6 7.5 6 8 3.4-.5 6-4.1 6-8V6l-6-3Zm0 4.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm0 7.4c-1.5 0-2.8-.6-3.7-1.5.2-1.4 2.5-2.1 3.7-2.1 1.2 0 3.5.7 3.7 2.1-.9.9-2.2 1.5-3.7 1.5Z" />,
    curriculum: <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H16v14H7.5A2.5 2.5 0 0 0 5 18.5V4.5Zm2.5-.5A1.5 1.5 0 0 0 6 5.5V16a3.4 3.4 0 0 1 1.5-.4H14V4H7.5Z" />,
    tests: <path d="M5 3h10v14H5V3Zm2 3v2h6V6H7Zm0 4v2h3v-2H7Zm5 0h1v2h-1v-2Z" />,
    analytics: <path d="M4 15h12v2H4v-2Zm1-2h2V8H5v5Zm4 0h2V5H9v8Zm4 0h2V9h-2v4Z" />,
    mentorship: <path d="M10 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c3.3 0 6 1.5 6 3.5V18H4v-1.5C4 14.5 6.7 13 10 13Z" />,
    doubts: <path d="M4 4h12v9H8l-4 3V4Zm2 3h8V6H6v1Zm0 3h5V9H6v1Z" />,
  };

  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function HomePage() {
  const revealUp = {
    initial: { opacity: 0, y: 88, scale: 0.92, rotateX: 12, filter: 'blur(12px)' },
    whileInView: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' },
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.22 },
  };

  const revealLeft = {
    initial: { opacity: 0, x: -96, scale: 0.94, rotateY: -10, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, rotateY: 0, filter: 'blur(0px)' },
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const revealRight = {
    initial: { opacity: 0, x: 96, scale: 0.94, rotateY: 10, filter: 'blur(12px)' },
    whileInView: { opacity: 1, x: 0, scale: 1, rotateY: 0, filter: 'blur(0px)' },
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const homeSeoSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'LearnPark NEET Academy',
    description:
      'LearnPark NEET Academy delivers structured NEET preparation, expert faculty support, weekly testing, and proven medical entrance results.',
    areaServed: 'Erode, Tamil Nadu, India',
    educationalCredentialAwarded: 'NEET Entrance Preparation',
    url: 'https://learnpark.vercel.app/',
  };

  const successStories = [
    ['AIR 542', 'Ananya S.', '685/720', 'Madras Medical College', girlOne],
    ['AIR 890', 'Karthik M.', '671/720', 'Stanley Medical College', boyOne],
    ['AIR 1250', 'Nivetha R.', '658/720', 'Coimbatore Medical College', girlTwo],
  ];

  const whyChoose = [
    ['faculty', 'Expert NEET Faculty', 'Experienced subject mentors who simplify concepts and sharpen exam thinking.'],
    ['curriculum', 'Structured NEET Curriculum', 'A clear academic system with chapter planning, revision cycles, and target tracking.'],
    ['tests', 'Weekly Tests', 'Consistent testing to build accuracy, speed, and confidence before the final exam.'],
    ['analytics', 'Performance Analytics', 'Detailed review of weak areas, score trends, and improvement opportunities.'],
    ['mentorship', 'Personal Mentorship', 'Focused support, accountability, and guidance for every stage of preparation.'],
    ['doubts', 'Doubt Solving Sessions', 'Fast clarification support so students do not carry unresolved gaps forward.'],
  ];

  const faqs = [
    [
      'Why do parents trust LearnPark for NEET preparation?',
      'Because the system is structured. Students follow a clear academic path with regular tests, mentor review, revision cycles, and parent communication.',
    ],
    [
      'Do you support Tamil and English medium students?',
      'Yes. LearnPark supports both Tamil and English medium learners with concept explanation, practice sessions, and review discussions.',
    ],
    [
      'How does LearnPark improve NEET scores consistently?',
      'By combining NCERT-first teaching, disciplined worksheets, weekly mock tests, analytics, and one-on-one mentoring for steady improvement.',
    ],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }} />

      <AntigravityHero />

      <motion.section
        {...revealUp}
        className="section-spotlight grid grid-cols-2 gap-3 rounded-[28px] border border-[#E2E8F0] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:gap-4 sm:px-6 sm:py-8 md:grid-cols-4 md:rounded-[32px] md:px-8 md:py-10"
      >
        {results.map(([value, label]) => (
          <article key={label} className="elevated-card rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-4 text-center sm:px-5 sm:py-5">
            <p className="font-heading text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">{value}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#64748B] sm:text-sm sm:tracking-[0.16em]">{label}</p>
          </article>
        ))}
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight rounded-[28px] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563EB]">Results</p>
          <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
            Our Students' NEET Success Stories
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#475569] sm:text-base sm:leading-8">
            Real score improvement, disciplined preparation, and medical admissions built through expert mentoring and a structured test system.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {successStories.map(([rank, name, score, college, image]) => (
            <motion.article
              key={name}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.28 }}
              className="elevated-card overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_16px_32px_rgba(15,23,42,0.05)]"
            >
              <div className="relative h-60 overflow-hidden bg-[linear-gradient(180deg,rgba(37,99,235,0.08),rgba(22,163,74,0.05))] sm:h-72">
                <img src={image} alt={name} className="h-full w-full object-contain p-4" loading="lazy" />
                <div className="absolute left-4 top-4 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white shadow-lg">
                  {rank}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">{name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-[#DBEAFE] bg-white px-4 py-3">
                    <p className="uppercase tracking-[0.14em] text-[#64748B]">Score</p>
                    <p className="mt-1 font-semibold text-[#2563EB]">{score}</p>
                  </div>
                  <div className="rounded-2xl border border-[#DCFCE7] bg-white px-4 py-3">
                    <p className="uppercase tracking-[0.14em] text-[#64748B]">College</p>
                    <p className="mt-1 font-semibold text-[#16A34A]">{college}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight rounded-[28px] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16A34A]">Courses</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
              Choose the right NEET program for your academic stage
            </h2>
          </div>
          <Link to="/programs" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
            View all programs
          </Link>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {programs.map((program) => (
            <motion.article
              key={program.title}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.28 }}
              className="elevated-card overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_16px_32px_rgba(15,23,42,0.05)]"
            >
              <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[0.95fr_1.05fr] md:p-7">
                <img src={program.image} alt={program.title} className="h-48 w-full rounded-3xl object-cover sm:h-56" loading="lazy" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569] sm:text-base">{program.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[program.targetClass, program.duration, program.mode].map((item) => (
                      <span key={item} className="rounded-full border border-[#DBEAFE] bg-white px-3 py-1.5 text-xs font-medium text-[#2563EB]">
                        {item}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-[#475569]">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#16A34A]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/admissions"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B]"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight rounded-[28px] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Why Choose LearnPark</p>
          <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
            Professional systems that build trust with students and parents
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map(([type, title, text]) => (
            <motion.article
              key={title}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ duration: 0.28 }}
              className="elevated-card rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#DBEAFE] to-[#DCFCE7] text-[#2563EB]">
                <FeatureIcon type={type} />
              </div>
              <h3 className="font-heading mt-5 text-lg font-bold text-[#0F172A] sm:text-xl">{title}</h3>
              <p className="mt-3 leading-7 text-[#475569]">{text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealLeft} className="section-spotlight rounded-[28px] border border-[#E2E8F0] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563EB]">Faculty</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
              Professional subject experts for Biology, Chemistry, and Physics
            </h2>
          </div>
          <Link to="/faculty" className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
            Meet the faculty
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {faculty.map(([name, role, image]) => (
            <article key={name} className="elevated-card rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <img src={image} alt={name} className="h-20 w-20 rounded-full object-cover" loading="lazy" />
              <h3 className="font-heading mt-5 text-xl font-bold text-[#0F172A]">{name}</h3>
              <p className="mt-2 text-sm font-medium text-[#16A34A]">{role}</p>
              <p className="mt-4 leading-7 text-[#475569]">
                Trusted by students and parents for subject clarity, disciplined problem-solving, and exam-focused mentoring.
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealRight} className="section-spotlight rounded-[28px] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#16A34A]">Testimonials</p>
          <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
            Real student stories from serious NEET preparation journeys
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map(([title, quote, image]) => (
            <article key={title} className="elevated-card overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-[0_16px_32px_rgba(15,23,42,0.05)]">
              <img src={image} alt={title} className="h-56 w-full object-cover sm:h-64" loading="lazy" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">{title}</p>
                <p className="mt-4 text-base leading-8 text-[#475569]">{quote}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight rounded-[28px] border border-[#E2E8F0] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Reviews</p>
          <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
            What students and parents say about the LearnPark system
          </h2>
        </div>

        <div className="comments-scroll-wrap mt-8">
          <div className="comments-scroll-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article key={`${review.name}-${index}`} className="comments-scroll-item elevated-card rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">{review.name}</p>
                  <p className="text-sm font-semibold text-[#16A34A]">{review.rating.toFixed(1)}/5</p>
                </div>
                <div className="relative mt-3 w-[84px] text-[0.9rem] leading-none text-[#F59E0B]" aria-label={`${review.rating.toFixed(1)} out of 5 stars`}>
                  <span className="opacity-30">★★★★★</span>
                  <span className="absolute left-0 top-0 overflow-hidden whitespace-nowrap" style={{ width: `${(review.rating / 5) * 100}%` }}>
                    ★★★★★
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#475569]">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight rounded-[28px] border border-[#E2E8F0] bg-white px-4 py-6 sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563EB]">FAQ</p>
          <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] text-[#0F172A] sm:text-3xl md:text-4xl">
            Common questions from NEET aspirants and parents
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="elevated-card rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6">
              <h3 className="font-heading text-lg font-bold text-[#0F172A] sm:text-xl">{question}</h3>
              <p className="mt-3 leading-8 text-[#475569]">{answer}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealUp} className="section-spotlight overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_60%,#16A34A_140%)] px-4 py-6 text-white shadow-[0_24px_60px_rgba(37,99,235,0.22)] sm:px-6 sm:py-8 md:rounded-[32px] md:px-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Start Today</p>
            <h2 className="font-heading mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl md:text-4xl">
              Start Your NEET Preparation Today
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              Join a professional academic system built to earn parent trust, strengthen student confidence, and deliver serious NEET results.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link to="/admissions" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#1D4ED8] transition-transform hover:-translate-y-0.5">
              Enroll Now
            </Link>
            <Link to="/admissions" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15">
              Book Free Counseling
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
