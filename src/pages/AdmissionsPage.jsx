import { motion } from 'framer-motion';

export default function AdmissionsPage() {
  const reveal = {
    initial: { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.2 },
  };

  const steps = [
    ['1', 'Book a Counselling Call', 'Speak with our academic advisor to understand the right batch for your level and target year.'],
    ['2', 'Attend a Free Demo Class', 'Experience the teaching style, ask faculty questions, and get a feel for the learning environment.'],
    ['3', 'Baseline Assessment', 'A short diagnostic test to identify your current strengths and areas that need focused attention.'],
    ['4', 'Secure Your Seat', 'Complete enrolment, collect your study materials, and join the batch with a personalised prep plan.'],
  ];

  const inclusions = [
    'NCERT-first classroom coaching (Physics, Chemistry, Biology)',
    'Weekly full-length mock tests with performance analysis',
    'Chapter-wise performance tracking and intervention',
    'Daily doubt-clearing sessions with subject faculty',
    'Fortnightly parent performance reports',
    'PYQ practice banks and revision sheets',
  ];

  return (
    <>
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4F46E5] via-[#4338CA] to-[#06B6D4] text-white">
        <motion.div {...reveal} className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Admissions Open — 2026 Batch</p>
          <h1 className="font-heading mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Secure Your Seat in the NEET 2026 Batch.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85">
            Limited seats per batch. Personal mentorship. Proven track record. Join Learn Park Academy today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+919894849778"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
            >
              Call Us: +91 98948 49778
            </a>
            <a
              href="https://wa.me/919487801778"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section {...reveal} className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F46E5]">How It Works</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Simple 4-step admission process.</h2>
          <ol className="mt-10 space-y-6">
            {steps.map(([num, title, desc]) => (
              <li key={num} className="flex gap-5">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#4F46E5] font-heading text-sm font-bold text-white">{num}</span>
                <div>
                  <p className="font-heading text-lg font-bold text-[#111827]">{title}</p>
                  <p className="mt-1 text-sm leading-7 text-[#6B7280]">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </motion.section>

      <motion.section {...reveal} className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">What's Included</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-[#111827] sm:text-4xl">Everything you need to crack NEET.</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#4F46E5] text-xs font-bold text-white">✓</span>
                <span className="text-[15px] leading-7 text-[#374151]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section {...reveal} className="pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-[#111827] px-6 py-10 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F59E0B]">Limited Seats Available</p>
            <h2 className="font-heading mt-3 text-2xl font-bold sm:text-3xl">New batch starts soon. Don't wait.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              Call us directly or send a WhatsApp message. Our team will guide you through the batch, fees, and schedule.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:max-w-lg">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F59E0B]">Direct Call</p>
                <a href="tel:+919894849778" className="mt-2 block font-heading text-xl font-bold text-white hover:text-[#F59E0B]">+91 98948 49778 / 94878 01778</a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#06B6D4]">Email</p>
                <a href="mailto:learnpark.edu@gmail.com" className="mt-2 block font-heading text-base font-bold text-white hover:text-[#06B6D4]">learnpark.edu@gmail.com</a>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919894849778"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-semibold text-[#111827] transition-all hover:brightness-105"
              >
                Call to Enroll
              </a>
              <a
                href="https://wa.me/919487801778"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
