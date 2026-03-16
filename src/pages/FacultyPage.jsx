import { faculty, testimonials } from '../data/siteContent';

export default function FacultyPage() {
  return (
    <>
      <section className="mt-2 rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6 md:p-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[#1F78B4]">Faculty</p>
          <h1 className="font-heading mt-3 text-2xl font-bold md:text-4xl">Experienced subject experts for every section.</h1>
          <p className="mt-3 text-[#5F5B55]">Dedicated mentors for Physics, Chemistry, and Biology with focused NEET preparation support.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {faculty.map(([name, role, image]) => (
            <article
              key={name}
              className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6"
            >
              <img
                src={image}
                alt={name}
                className="image-hover-rise mb-5 h-24 w-24 rounded-full border border-[#DED8CF] object-cover"
                loading="lazy"
              />
              <h2 className="font-heading text-lg font-bold text-[#2E9E72] sm:text-xl">{name}</h2>
              <p className="mt-2 text-[#5F5B55]">{role}</p>
              <p className="mt-4 text-sm text-[#5F5B55]">
                Dedicated mentoring, chapter strategy, and exam-focused doubt resolution.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {testimonials.map(([title, quote, image]) => (
          <article key={title} className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-5 shadow-[0_8px_24px_rgba(31,31,33,0.05)] sm:p-6">
            <img
              src={image}
              alt={title}
              className="image-hover-rise mb-4 h-40 w-full rounded-2xl border border-[#ECE8E1] object-cover sm:h-44"
              loading="lazy"
            />
            <p className="text-xs uppercase tracking-[0.22em] text-[#1F78B4]">{title}</p>
            <p className="mt-4 text-base leading-7 text-[#5F5B55] sm:text-lg sm:leading-8">{quote}</p>
          </article>
        ))}
      </section>
    </>
  );
}
