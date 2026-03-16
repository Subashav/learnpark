import { motion } from 'framer-motion';
import BlurText from './BlurText';

export default function AntigravityHero() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative isolate overflow-hidden rounded-[2.2rem] border border-[#EAE7E2] bg-[#F3F3F3] px-5 pb-8 pt-8 text-[#1D1D1F] shadow-[0_10px_36px_rgba(31,31,33,0.06)] md:px-8 md:pb-12 md:pt-10 xl:px-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(229,212,192,0.45) 0%, rgba(229,212,192,0.2) 36%, rgba(255,255,255,0.1) 58%, rgba(255,255,255,0) 76%)',
          filter: 'blur(28px)',
        }}
      />

      <div className="antigravity-mesh pointer-events-none absolute inset-0 opacity-60" />

      <h1 className="font-heading relative z-10 mx-auto mb-3 w-max max-w-full text-center text-[clamp(1.6rem,3.8vw,4rem)] font-bold uppercase tracking-[0.09em] whitespace-nowrap md:mb-2">
        <span className="text-[#1F78B4]">Learnpark</span>{' '}
        <span className="text-[#2E9E72]">Neet Academy</span>
      </h1>

      <div className="relative z-10 mx-auto grid min-h-[64vh] max-w-[1360px] items-center gap-6 md:grid-cols-[1.12fr_0.88fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-[#CFE0F2] bg-gradient-to-r from-[#EAF4FF] to-[#EAFBF4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2C5F87]">
            NEET 2026 Admissions Open
          </div>

          <BlurText
            text="Crack NEET with Confidence. Train with the Right Strategy."
            delay={160}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-heading mt-6 mb-2 text-5xl font-extrabold leading-[1.02] md:text-7xl"
            segmentClassName="bg-gradient-to-r from-[#1D1D1F] to-[#7A5F47] bg-clip-text text-transparent"
          />

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#595652] md:text-lg">
            Expert faculty, structured study plans, daily practice, and full-length test analysis for Class 11, Class 12, and repeater NEET aspirants.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="mercury-btn relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#1F78B4] bg-gradient-to-r from-[#1F78B4] to-[#2E9E72] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              Book Free Counselling
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-[#D1E0EF] bg-[#EEF6FF] px-8 py-3 text-sm font-semibold text-[#24597D] transition hover:border-[#1F78B4] hover:text-[#1F78B4]">
              View Programs
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#595652]">
            <span className="rounded-full border border-[#CFE0F2] bg-[#EAF4FF] px-4 py-2 text-[#2C5F87]">Daily practice sheets</span>
            <span className="rounded-full border border-[#D5EAD4] bg-[#ECF8EC] px-4 py-2 text-[#2F7A56]">Weekly test analytics</span>
            <span className="rounded-full border border-[#E8DBBD] bg-[#FFF7E7] px-4 py-2 text-[#8A6B2A]">Parent performance reports</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="w-full rounded-[2rem] border border-[#E3DDD4] bg-[#F3F3F3] p-8 shadow-[0_8px_28px_rgba(31,31,33,0.07)] md:p-8"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[#5E6E80]">This Month at LearnPark</p>
          <div className="mt-5 grid gap-4">
            {[
              ['Next Batch', 'Starts 15 April 2026'],
              ['Mode', 'Classroom + Guided Practice'],
              ['Focus', 'Biology, Chemistry, Physics mastery'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[#E6E1D8] bg-[#F3F3F3] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#817B71]">{label}</p>
                <p className="mt-2 font-heading text-xl font-semibold text-[#252322]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ['1500+', 'Students'],
              ['92%', 'Success'],
              ['12+', 'Years'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-[#E6E1D8] bg-[#F3F3F3] px-3 py-4">
                <div className="font-heading text-2xl font-bold text-[#1F78B4]">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#817B71]">{label}</div>
              </div>
            ))}
          </div>
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
