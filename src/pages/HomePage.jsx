import AntigravityHero from '../AntigravityHero';
import { results, reviews } from '../data/siteContent';
import { motion } from 'framer-motion';

export default function HomePage() {
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

  const studentGallery = [
    {
      title: 'Focused NEET Preparation',
      image: '/students/student-1.jpg',
      fallback:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Daily Study Discipline',
      image: '/students/student-2.jpg',
      fallback:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Books + Practice Routine',
      image: '/students/student-3.jpg',
      fallback:
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Exam Confidence Building',
      image: '/students/student-4.jpg',
      fallback:
        'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <>
      <AntigravityHero />

      <section className="grid gap-4 md:gap-6 lg:grid-cols-2 lg:gap-7 xl:grid-cols-3 xl:gap-8">
        {[
          ['12 Years', 'of NEET coaching experience'],
          ['Daily Tests', 'for consistency and speed improvement'],
          ['Parent Updates', 'through regular academic performance reports'],
        ].map(([title, desc]) => (
          <article
            key={title}
            className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 lg:p-7"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">Highlights</p>
            <h2 className="font-heading mt-3 text-xl font-bold text-[#1D1D1F] sm:text-2xl">{title}</h2>
            <p className="mt-3 max-w-[32ch] leading-relaxed text-[#5F5B55]">{desc}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:gap-6">
        {studentGallery.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-4 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-5"
          >
            <img
              src={item.image}
              alt={item.title}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = item.fallback;
              }}
              className="image-hover-rise h-52 w-full rounded-2xl border border-[#ECE8E1] object-cover sm:h-56"
              loading="lazy"
            />
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#1F78B4]">Student Snapshot</p>
            <h3 className="font-heading mt-2 text-lg font-semibold text-[#1D1D1F]">{item.title}</h3>
          </article>
        ))}
      </section>

      <section className="grid gap-4 md:gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7 xl:gap-8">
        <article className="rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
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

        <article className="rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-[#1F78B4]">Weekly study cycle</p>
          <div className="mt-5 space-y-4 md:space-y-5 lg:space-y-6">
            {[
              ['01', 'Concept Class', 'Build chapter understanding with faculty-led teaching.'],
              ['02', 'Practice Drill', 'Solve guided questions and daily homework sheets.'],
              ['03', 'Test + Review', 'Analyze mistakes and revise weak areas with mentors.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4 rounded-2xl border border-[#ECE8E1] bg-[#F3F3F3] p-4 md:p-5">
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
      </section>

      <section className="rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-[#2E9E72]">Story Journey</p>
        <h2 className="font-heading mt-3 text-2xl font-bold text-[#1D1D1F] md:text-4xl">
          A clear preparation story from first test to final rank.
        </h2>

        <div className="relative mt-8 pl-9 sm:pl-12 md:mt-10 md:pl-16 lg:mt-12 lg:pl-20">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[#E6E1D8] md:left-6" />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            style={{ originY: 0 }}
            className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#1F78B4] to-[#2E9E72] md:left-6"
          />

          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            {storySteps.map((step, index) => (
              <motion.article
                key={step.phase}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, delay: index * 0.22, ease: 'easeInOut' }}
                className="group relative rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(31,31,33,0.12)] sm:p-6"
              >
                <motion.span
                  initial={{ scale: 0.9, opacity: 0.4 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 3, delay: 0.25 + index * 0.22, ease: 'easeInOut' }}
                  className="absolute -left-[1.82rem] top-8 h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-[#1F78B4] to-[#2E9E72] shadow-[0_0_0_5px_rgba(31,120,180,0.12)] sm:-left-[2.1rem] md:-left-[2.65rem]"
                />

                <div className="mb-4 inline-flex rounded-full border border-[#DED8CF] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E9E72]">
                  {step.phase}
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1D1D1F]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[#5F5B55]">{step.text}</p>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-[#EDE8DE]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, delay: 0.3 + index * 0.22, ease: 'easeInOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#1F78B4] to-[#2E9E72]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
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
                className="rounded-[1.4rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 text-center"
              >
                <div className="text-3xl font-extrabold text-[#2E9E72]">{value}</div>
                <div className="mt-2 text-sm text-[#5F5B55]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-7 lg:p-8 xl:p-9">
        <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">Comments</p>
        <h3 className="font-heading mt-2 text-2xl font-bold text-[#1D1D1F] md:text-3xl">What students and parents say</h3>

        <div className="comments-scroll-wrap mt-6 lg:mt-8">
          <div className="comments-scroll-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="comments-scroll-item rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-6 shadow-[0_8px_24px_rgba(31,31,33,0.05)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#1F78B4]">{review.name}</p>
                  <p className="text-sm font-semibold text-[#2E9E72]">{review.rating.toFixed(1)}/5</p>
                </div>

                <div
                  className="relative mt-3 w-[96px] text-[1rem] leading-none text-[#E3B84B]"
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

                <p className="mt-4 text-base leading-7 text-[#5F5B55] sm:text-lg sm:leading-8">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
