import AntigravityHero from '../AntigravityHero';
import { results, reviews } from '../data/siteContent';
import { motion } from 'framer-motion';
import girlOne from '../assets/girl 1.png';
import girlTwo from '../assets/girl 2.png';
import boyOne from '../assets/boy 1.png';

export default function HomePage() {
  const revealUp = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: 'easeOut' },
    viewport: { once: false, amount: 0.2 },
  };

  const revealLeft = {
    initial: { opacity: 0, x: -24 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.65, ease: 'easeOut' },
    viewport: { once: false, amount: 0.24 },
  };

  const revealRight = {
    initial: { opacity: 0, x: 24 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.65, ease: 'easeOut' },
    viewport: { once: false, amount: 0.24 },
  };

  const seoFaq = [
    {
      q: 'Why is LearnPark suitable for NEET students in Erode?',
      a: 'LearnPark combines daily classes, regular tests, mentor review, and parent communication so students keep steady progress week by week.',
    },
    {
      q: 'Do you support Tamil and English medium students?',
      a: 'Yes. We provide explanation support, question practice, and review discussions for both Tamil and English medium learners.',
    },
    {
      q: 'How does the academy improve marks consistently?',
      a: 'Through chapter-wise planning, error analysis, revision cycles, and full-portion mock tests that build exam stamina and accuracy.',
    },
  ];

  const homeSeoSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'LearnPark NEET Academy',
    description:
      'NEET coaching in Erode with daily classes, test series, Tamil and English medium support, parent updates, and mentor guidance.',
    areaServed: 'Erode, Tamil Nadu, India',
    educationalCredentialAwarded: 'NEET Entrance Preparation',
    knowsAbout: ['NEET coaching', 'NCERT preparation', 'Tamil medium NEET support', 'Test series'],
    url: 'https://learnpark.vercel.app/',
  };

  const storySteps = [
    {
      phase: 'Phase 01',
      title: 'Diagnose the starting point',
      text: 'We begin with a baseline test and chapter-wise error map to identify strengths and weak zones.',
    },
    {
      phase: 'Phase 02',
      title: 'Build precision habits',
      text: 'Daily sheets, timed drills, and guided revision loops improve consistency and reduce negative marks.',
    },
    {
      phase: 'Phase 03',
      title: 'Convert effort into rank',
      text: 'Full-syllabus mocks, mentor review, and weekly strategy resets prepare students for final exam pressure.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }}
      />

      <AntigravityHero />

      {/* This Month at LearnPark — stats card */}
      <motion.section
        {...revealUp}
        className="rounded-[2rem] border border-[#B8DCF2] bg-[#EAF5FD] p-5 shadow-[0_8px_28px_rgba(31,120,180,0.08)] sm:p-6 md:p-8"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-[#5E7E9A] sm:tracking-[0.24em]">This Month at LearnPark</p>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-2xl border border-[#C8E4F5] bg-[#F4FAFF] p-4 sm:p-5">
            <div className="space-y-3">
              {[
                ['Next Batch', 'Starts 15 April 2026'],
                ['Mode', 'Classroom + Guided Practice'],
                ['Focus', 'Biology, Chemistry, Physics mastery'],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-[#D7E9F6] pb-3 last:border-b-0 last:pb-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.14em] text-[#5E7E9A] sm:text-xs sm:tracking-[0.18em]">{label}</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-[#1A3D5C] sm:text-xl">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['12 Years of NEET coaching', 'Daily Tests', 'Parent Updates'].map((item) => (
                <span key={item} className="rounded-full border border-[#C8E4F5] bg-white px-3 py-1.5 text-xs text-[#2D5E7E]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 lg:grid-cols-2">
            {[
              ['1500+', 'Students'],
              ['92%', 'Success'],
              ['12+', 'Years'],
              ['Daily', 'Practice'],
              ['Tamil', '& English'],
              ['1:1', 'Mentoring'],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0 rounded-2xl border border-[#B8DCF2] bg-white px-2 py-3 sm:px-3 sm:py-4">
                <div className="font-heading text-[clamp(1.15rem,4vw,1.55rem)] font-bold leading-none text-[#1F78B4]">{value}</div>
                <div className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-[#5E7E9A] sm:text-xs sm:tracking-[0.18em]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...revealUp} className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7 xl:gap-8">
        <article className="rounded-[2rem] border border-[#D7E6F4] bg-gradient-to-br from-[#F6FBFF] to-[#F2F8FF] p-5 shadow-[0_10px_26px_rgba(31,120,180,0.08)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-[#2E9E72]">Why parents trust us</p>
          <h2 className="font-heading mt-3 text-2xl font-bold md:text-4xl">A disciplined system, not random coaching.</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#5F5B55]">
            Students improve because preparation is tracked every week. We focus on concept mastery, revision loops, accuracy analysis, and consistent mentor support.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-5 lg:gap-6">
            {[
              'Daily practice and revision sheets',
              'Weekly tests with analytics',
              'Personal mentoring and doubt support',
              'Parent communication and progress reports',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#DDE7F2] bg-gradient-to-r from-[#EEF6FF] to-[#ECF8EC] p-4 text-[#3E4E5F]">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-[#DCE9DE] bg-gradient-to-br from-[#F6FCF8] to-[#EFF8F1] p-5 shadow-[0_10px_26px_rgba(46,158,114,0.08)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-[#1F78B4]">Weekly study cycle</p>
          <div className="mt-5 space-y-4 md:space-y-5 lg:space-y-6">
            {[
              ['01', 'Concept Class', 'Build chapter understanding with faculty-led teaching.'],
              ['02', 'Practice Drill', 'Solve guided questions and daily homework sheets.'],
              ['03', 'Test + Review', 'Analyze mistakes and revise weak areas with mentors.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4 border-b border-[#DCE9DE] pb-4 md:pb-5 last:border-b-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6E4FD6] to-[#9D83F0] font-heading font-bold text-white">
                  {num}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5F5B55]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </motion.section>

      <motion.section {...revealLeft} className="rounded-[2rem] border border-[#C8E4F5] bg-gradient-to-r from-[#F0F9FF] via-[#EAF5FD] to-[#E4F1FB] p-4 shadow-[0_10px_26px_rgba(31,120,180,0.08)] sm:p-5 md:p-5">
        <div className="grid items-center gap-4 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
          <img
            src={girlOne}
            alt="Girl student holding NEET books"
            className="mx-auto w-full max-w-[260px] rounded-2xl border border-[#ECE8E1] bg-[#FAF9F7] object-contain p-2 sm:max-w-[290px] md:max-w-[320px]"
            loading="lazy"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">Student Spotlight</p>
            <h3 className="font-heading mt-2 text-2xl font-semibold text-[#1D1D1F] md:text-3xl">Real students. Real preparation energy.</h3>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              Daily classes, book practice, and focused revision are the foundation of consistent NEET performance.
            </p>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              This is how NEET coaching in Erode should feel: structured, measurable, and personalized for each student.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#DDE7F2] bg-white px-3 py-2 text-sm text-[#3E4E5F]">Daily revision blocks</div>
              <div className="rounded-xl border border-[#DDE7F2] bg-white px-3 py-2 text-sm text-[#3E4E5F]">Chapter-wise mentors</div>
              <div className="rounded-xl border border-[#DDE7F2] bg-white px-3 py-2 text-sm text-[#3E4E5F]">Tamil + English support</div>
              <div className="rounded-xl border border-[#DDE7F2] bg-white px-3 py-2 text-sm text-[#3E4E5F]">Exam-level worksheets</div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...revealUp} className="rounded-[2rem] border border-[#C8E4F5] bg-gradient-to-b from-[#F0F9FF] to-[#E4F1FB] p-5 shadow-[0_10px_26px_rgba(31,120,180,0.07)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-[#2E9E72]">Story Journey</p>
        <h2 className="font-heading mt-3 text-2xl font-bold text-[#1D1D1F] md:text-4xl">
          A clear preparation story from first test to final rank.
        </h2>

        <div className="relative mt-8 pl-6 sm:pl-10 md:mt-10 md:pl-16 lg:mt-12 lg:pl-20">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-[#E6E1D8] sm:left-4 md:left-6" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-[#1F78B4] to-[#2E9E72] sm:left-4 md:left-6"
          />

          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            {storySteps.map((step, index) => (
              <motion.article
                key={step.phase}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: 'easeOut' }}
                className="group relative rounded-[1.5rem] border border-[#DED8CF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(31,31,33,0.12)] sm:p-6"
              >
                <motion.span
                  initial={{ scale: 0.9, opacity: 0.4 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: 'easeOut' }}
                  className="absolute -left-[1.15rem] top-8 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-[#1F78B4] to-[#2E9E72] shadow-[0_0_0_5px_rgba(31,120,180,0.12)] sm:-left-[1.82rem] md:-left-[2.65rem]"
                />

                <div className="mb-4 inline-flex rounded-full border border-[#DED8CF] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E9E72]">
                  {step.phase}
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1D1D1F]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[#5F5B55]">{step.text}</p>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE8DE]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.16 + index * 0.08, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#1F78B4] to-[#2E9E72]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...revealRight} className="rounded-[2rem] border border-[#D5E8DE] bg-gradient-to-r from-[#F1FBF5] via-[#EEF9F2] to-[#E9F5EE] p-4 shadow-[0_10px_26px_rgba(46,158,114,0.08)] sm:p-5 md:p-5">
        <div className="grid items-center gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.22em] text-[#2E9E72]">Student Spotlight</p>
            <h3 className="font-heading mt-2 text-2xl font-semibold text-[#1D1D1F] md:text-3xl">Confidence grows with strong book habits.</h3>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              Consistent material practice and guided chapter strategy help students convert effort into marks.
            </p>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              From foundation chapters to full-portion revisions, each week is designed to improve confidence and rank.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#DCE9DE] bg-white p-3 text-center">
                <p className="text-lg font-bold text-[#2E9E72]">90+</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#6A7A6E]">Questions daily</p>
              </div>
              <div className="rounded-xl border border-[#DCE9DE] bg-white p-3 text-center">
                <p className="text-lg font-bold text-[#2E9E72]">7/7</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#6A7A6E]">Practice rhythm</p>
              </div>
              <div className="rounded-xl border border-[#DCE9DE] bg-white p-3 text-center">
                <p className="text-lg font-bold text-[#2E9E72]">1:1</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#6A7A6E]">Mentor review</p>
              </div>
            </div>
          </div>
          <img
            src={girlTwo}
            alt="Girl student carrying books"
            className="order-1 mx-auto w-full max-w-[260px] rounded-2xl border border-[#ECE8E1] bg-[#FAF9F7] object-contain p-2 sm:max-w-[290px] md:order-2 md:max-w-[320px]"
            loading="lazy"
          />
        </div>
      </motion.section>

      <motion.section {...revealUp} className="rounded-[2rem] border border-[#D7E6F4] bg-gradient-to-br from-[#F6FBFF] to-[#EEF5FE] p-5 shadow-[0_10px_28px_rgba(31,120,180,0.08)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-center xl:gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#1F78B4]">Results That Matter</p>
            <h2 className="font-heading mt-3 text-2xl font-bold leading-tight text-[#1D1D1F] md:text-4xl">
              Disciplined preparation. Real score improvement. Medical seat focus.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#5F5B55]">
              Our teaching model combines concept clarity, daily problem practice, full-length mock tests, and personal mentoring to steadily improve accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {results.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[1.4rem] border border-[#D7E6F4] bg-white p-5 text-center"
              >
                <div className="text-3xl font-extrabold text-[#2E9E72]">{value}</div>
                <div className="mt-2 text-sm text-[#5F5B55]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...revealLeft} className="rounded-[2rem] border border-[#C8E4F5] bg-gradient-to-r from-[#F0F9FF] via-[#EAF5FD] to-[#E4F1FB] p-4 shadow-[0_10px_26px_rgba(31,120,180,0.08)] sm:p-5 md:p-5">
        <div className="grid items-center gap-4 md:grid-cols-[0.9fr_1.1fr] md:gap-6">
          <img
            src={boyOne}
            alt="Boy student holding books"
            className="mx-auto w-full max-w-[260px] rounded-2xl border border-[#ECE8E1] bg-[#FAF9F7] object-contain p-2 sm:max-w-[290px] md:max-w-[320px]"
            loading="lazy"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">Student Spotlight</p>
            <h3 className="font-heading mt-2 text-2xl font-semibold text-[#1D1D1F] md:text-3xl">Boys and girls learning with equal focus.</h3>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              Structured guidance, daily tests, and mentor feedback ensure every student gets a clear growth path.
            </p>
            <p className="mt-3 leading-relaxed text-[#5F5B55]">
              This preparation flow helps both repeaters and school students stay disciplined, motivated, and exam-ready.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Structured classroom sessions', 'Doubt-clearing everyday', 'Weekly full-portion tests', 'Progress tracking to parents'].map((item) => (
                <span key={item} className="rounded-full border border-[#DDE7F2] bg-white px-3 py-1.5 text-xs text-[#3E4E5F]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...revealUp} className="rounded-[2rem] border border-[#D7E6F4] bg-gradient-to-r from-[#F3F9FF] to-[#EEF5FF] p-5 shadow-[0_10px_26px_rgba(31,120,180,0.08)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-[#2E9E72]">NEET Coaching in Erode</p>
        <h2 className="font-heading mt-3 text-2xl font-bold text-[#1D1D1F] md:text-4xl">
          Complete NEET preparation support for Tamil and English medium students.
        </h2>
        <p className="mt-4 leading-relaxed text-[#5F5B55]">
          LearnPark NEET Academy in Erode offers a structured plan with daily concept classes, NCERT-based question practice, chapter tests, weekly full-portion exams, and personal mentor reviews.
          Students get clear progress tracking, doubt-clearing sessions, and focused revision support to improve marks steadily.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ['Daily Classes', 'Faculty-led classroom coaching with chapter targets and homework review.'],
            ['Regular Testing', 'Daily and weekly tests with error analysis for faster score improvement.'],
            ['Parent Communication', 'Transparent progress updates so families stay aligned with student goals.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-[#CFE0F2] bg-white p-4 shadow-[0_4px_12px_rgba(31,120,180,0.08)]">
              <h3 className="font-heading text-lg font-semibold text-[#1D1D1F]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5B55]">{text}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...revealUp} className="p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">Comments</p>
        <h3 className="font-heading mt-2 text-2xl font-bold text-[#1D1D1F] md:text-3xl">What students and parents say</h3>

        <div className="comments-scroll-wrap mt-6 lg:mt-8">
          <div className="comments-scroll-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="comments-scroll-item rounded-[1.2rem] border border-[#B8DCF2] bg-[#F0F9FF] p-4 shadow-[0_4px_14px_rgba(31,120,180,0.07)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#1F78B4]">{review.name}</p>
                  <p className="text-sm font-semibold text-[#2E9E72]">{review.rating.toFixed(1)}/5</p>
                </div>

                <div
                  className="relative mt-2 w-[80px] text-[0.85rem] leading-none text-[#E3B84B]"
                  aria-label={`${review.rating.toFixed(1)} out of 5 stars`}
                >
                  <span className="opacity-30">★★★★★</span>
                  <span
                    className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
                    style={{ width: `${(review.rating / 5) * 100}%` }}
                  >
                    ★★★★★
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#5F5B55]">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...revealUp} className="rounded-[2rem] border border-[#DCE9DE] bg-gradient-to-br from-[#F4FBF6] to-[#EDF8F0] p-5 shadow-[0_10px_26px_rgba(46,158,114,0.08)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-[#1F78B4]">FAQ</p>
        <h2 className="font-heading mt-3 text-2xl font-bold text-[#1D1D1F] md:text-4xl">Common questions from NEET aspirants and parents</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {seoFaq.map((item) => (
            <article key={item.q} className="rounded-2xl border border-[#CFE4D6] bg-white p-4 shadow-[0_4px_12px_rgba(46,158,114,0.08)] sm:p-5">
              <h3 className="font-heading text-lg font-semibold text-[#1D1D1F]">{item.q}</h3>
              <p className="mt-2 leading-relaxed text-[#5F5B55]">{item.a}</p>
            </article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
