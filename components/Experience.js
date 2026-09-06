export default function Experience({ experience }) {
  if (!experience?.length) return null;
  return (
    <section id="experience" className="bg-sand/45 py-16 sm:py-20">
      <div className="shell grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-10">
          {experience.map((job) => (
            <article key={job.id}>
              <h3 className="text-2xl">{job.role}</h3>
              <p className="mt-1 text-pine/70">
                {job.org}, {job.period}
              </p>
              <ul className="mt-4 max-w-readable space-y-2">
                {job.points?.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.6em] h-[6px] w-[6px] shrink-0 rounded-full bg-seam" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
