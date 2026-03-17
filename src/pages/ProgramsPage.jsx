import { motion } from 'framer-motion';
import { programs } from '../data/siteContent';

export default function ProgramsPage() {
  const revealUp = {
    initial: { opacity: 0, y: 88, scale: 0.92, rotateX: 12, filter: 'blur(12px)' },
    whileInView: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' },
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.22 },
  };

  return (
    <motion.section
      {...revealUp}
      className="section-spotlight mt-2 rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-8"
    >
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-[#1F78B4]">Programs</p>
        <h1 className="font-heading mt-3 text-2xl font-bold md:text-4xl">Choose the right NEET preparation path.</h1>
        <p className="mt-3 text-[#5F5B55]">
          Structured programs designed for Class 11, Class 12, and repeater students with clear study systems and test planning.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {programs.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ duration: 0.28 }}
            className="elevated-card rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="image-hover-rise mb-4 h-36 w-full rounded-2xl border border-[#ECE8E1] object-cover sm:h-40"
              loading="lazy"
            />
            <h2 className="font-heading text-xl font-bold text-[#2E9E72] sm:text-2xl">{item.title}</h2>
            <p className="mt-3 text-[#5F5B55]">{item.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#5F5B55]">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
