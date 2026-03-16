import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';
import girlFour from './assets/girl 4.png';

export default function AntigravityHero() {
  const heroTaglines = [
    'Dream Big. Crack NEET.',
    'Study Smart. Rank Higher.',
    "Erode's Path to MBBS.",
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [heroTaglines.length]);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-[#B8DCF2] bg-[#EAF5FD] px-4 pb-7 pt-6 text-[#1D1D1F] shadow-[0_10px_36px_rgba(31,120,180,0.08)] sm:px-5 md:rounded-[2.2rem] md:px-8 md:pb-12 md:pt-10 xl:px-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(180,220,245,0.45) 0%, rgba(180,220,245,0.2) 36%, rgba(255,255,255,0.1) 58%, rgba(255,255,255,0) 76%)',
          filter: 'blur(28px)',
        }}
      />

      <div className="antigravity-mesh pointer-events-none absolute inset-0 opacity-60" />

      <h1 className="font-heading relative z-10 mx-auto mb-2 max-w-full text-center text-[clamp(1.35rem,6vw,4rem)] font-bold leading-tight tracking-[0.01em] md:mb-1">
        <span className="text-[#1F78B4]">Future Doctors</span>{' '}
        <span className="text-[#2E9E72]">Start Here.</span>
      </h1>
      <p className="relative z-10 text-center text-xs uppercase tracking-[0.2em] text-[#5E7E9A] sm:text-sm">
        LearnPark NEET Academy, Erode
      </p>

      <div className="relative z-10 mx-auto grid max-w-[1360px] items-center gap-6 md:min-h-[64vh] md:grid-cols-[1.12fr_0.88fr]">
        <div className="min-w-0 text-center md:text-left">
          <div className="inline-flex max-w-full items-center rounded-full border border-[#CFE0F2] bg-gradient-to-r from-[#EAF4FF] to-[#EAFBF4] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#2C5F87] sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            NEET 2026 Admissions Open
          </div>

          <BlurText
            key={heroTaglines[taglineIndex]}
            text={heroTaglines[taglineIndex]}
            delay={160}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-heading mb-2 mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl"
            segmentClassName="bg-gradient-to-r from-[#1F78B4] via-[#2C8CB8] to-[#2E9E72] bg-clip-text text-transparent"
          />

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#595652] sm:text-base md:text-lg">
            Expert faculty, structured study plans, daily practice, and full-length test analysis for Class 11, Class 12, and repeater NEET aspirants.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <button
              className="mercury-btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-[#1F78B4] bg-gradient-to-r from-[#1F78B4] to-[#2E9E72] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-8"
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              Book Free Counselling
            </button>
            <button className="inline-flex w-full items-center justify-center rounded-full border border-[#D1E0EF] bg-[#EEF6FF] px-6 py-3 text-sm font-semibold text-[#24597D] transition hover:border-[#1F78B4] hover:text-[#1F78B4] sm:w-auto sm:px-8">
              View Programs
            </button>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-[#595652] md:justify-start">
            <span className="rounded-full border border-[#CFE0F2] bg-[#EAF4FF] px-3 py-2 text-xs text-[#2C5F87] sm:px-4 sm:text-sm">Daily practice sheets</span>
            <span className="rounded-full border border-[#D5EAD4] bg-[#ECF8EC] px-3 py-2 text-xs text-[#2F7A56] sm:px-4 sm:text-sm">Weekly test analytics</span>
            <span className="rounded-full border border-[#CFE0F2] bg-[#EAF4FF] px-3 py-2 text-xs text-[#2C5F87] sm:px-4 sm:text-sm">Parent performance reports</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex min-w-0 items-center justify-center"
        >
          <img
            src={girlFour}
            alt="LearnPark NEET student"
            className="max-h-[520px] w-full max-w-[340px] rounded-[2rem] object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>

      <style>{`
        .antigravity-mesh {
          background-image:
            radial-gradient(circle at 20% 20%, rgba(229, 212, 192, 0.24), transparent 42%),
            radial-gradient(circle at 82% 24%, rgba(255, 255, 255, 0.7), transparent 36%),
            radial-gradient(circle at 50% 80%, rgba(110, 79, 214, 0.12), transparent 38%),
            linear-gradient(115deg, rgba(229, 212, 192, 0.08), rgba(255, 255, 255, 0.15), rgba(110, 79, 214, 0.08));
          background-size: 180% 180%;
          animation: liquidMesh 18s ease-in-out infinite alternate;
          filter: blur(6px) saturate(105%);
        }

        .mercury-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.04) 60%, transparent 72%);
          transform: scale(0.6);
          opacity: 0;
          transition: transform 420ms ease, opacity 420ms ease;
          pointer-events: none;
        }

        .mercury-btn:hover::before {
          transform: scale(1.6);
          opacity: 1;
        }

        .mercury-btn::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(110, 79, 214, 0.25));
          z-index: -1;
          opacity: 0.72;
        }

        @keyframes liquidMesh {
          0% {
            background-position: 0% 50%;
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            background-position: 48% 54%;
            transform: translate3d(0, -1.2%, 0) scale(1.03);
          }
          100% {
            background-position: 100% 50%;
            transform: translate3d(0, 0.8%, 0) scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}
