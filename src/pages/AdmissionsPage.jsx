export default function AdmissionsPage() {
  return (
    <>
      <section className="mt-2 rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-8 text-center shadow-[0_8px_24px_rgba(31,31,33,0.05)]">
        <p className="text-xs uppercase tracking-[0.28em] text-[#7A5F47]">Admissions Open</p>
        <h1 className="font-heading mt-3 text-3xl font-bold md:text-4xl">
          Start your NEET preparation with the right batch and the right mentor.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#5F5B55]">
          Join LearnPark NEET Academy for structured preparation, regular tests, doubt-solving, and
          parent performance updates.
        </p>
        <button className="mercury-btn relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-full border border-[#2F2A24] bg-[#2F2A24] px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5">
          Apply for Admission
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Counselling', 'Personal batch guidance from our NEET mentors.'],
          ['Assessment', 'Baseline test and preparation plan in week 1.'],
          ['Onboarding', 'Access to classes, sheets, and weekly tests.'],
        ].map(([title, desc]) => (
          <article
            key={title}
            className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-6 shadow-[0_8px_24px_rgba(31,31,33,0.05)]"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#7A5F47]">Step</p>
            <h2 className="font-heading mt-3 text-2xl font-bold text-[#1D1D1F]">{title}</h2>
            <p className="mt-3 text-[#5F5B55]">{desc}</p>
          </article>
        ))}
      </section>
    </>
  );
}
