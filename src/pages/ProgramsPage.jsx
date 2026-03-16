import { programs } from '../data/siteContent';

export default function ProgramsPage() {
  return (
    <section className="mt-2 rounded-[2rem] border border-[#ECE8E1] bg-[#F3F3F3] p-6 shadow-[0_8px_24px_rgba(31,31,33,0.05)] md:p-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-[#7A5F47]">Programs</p>
        <h1 className="font-heading mt-3 text-3xl font-bold md:text-4xl">Choose the right NEET preparation path.</h1>
        <p className="mt-3 text-[#5F5B55]">
          Structured programs designed for Class 11, Class 12, and repeater students with clear study systems and test planning.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {programs.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-[#ECE8E1] bg-[#F3F3F3] p-6 shadow-[0_8px_24px_rgba(31,31,33,0.05)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 h-40 w-full rounded-2xl border border-[#ECE8E1] object-cover"
              loading="lazy"
            />
            <h2 className="font-heading text-2xl font-bold">{item.title}</h2>
            <p className="mt-3 text-[#5F5B55]">{item.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-[#5F5B55]">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
