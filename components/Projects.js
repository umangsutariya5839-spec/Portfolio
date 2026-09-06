export default function Projects({ projects }) {
  return (
    <section id="work" className="bg-sand/45 py-16 sm:py-20">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
          <h2 className="section-title">Work</h2>
          <p className="max-w-readable text-pine/75">
            Two projects I built end to end, from the layout in the browser to the tables
            behind it.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {projects.map((project) => (
            <article key={project.id} className="rule pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[clamp(1.5rem,3vw,2.1rem)]">{project.title}</h3>
                <p className="text-pine/60">{project.year}</p>
              </div>

              <p className="mt-3 max-w-readable text-[1.1rem]">{project.summary}</p>

              <ul className="mt-5 max-w-readable space-y-2">
                {project.points?.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.6em] h-[6px] w-[6px] shrink-0 rounded-full bg-seam" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <ul className="flex flex-wrap gap-2">
                  {project.stack?.map((tool) => (
                    <li
                      key={tool}
                      className="border border-pine/25 px-2.5 py-0.5 text-sm text-pine/80"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                {project.live ? (
                  <a className="link-quiet" href={project.live} target="_blank" rel="noreferrer">
                    Visit the site
                  </a>
                ) : null}
                {project.code ? (
                  <a className="link-quiet" href={project.code} target="_blank" rel="noreferrer">
                    Read the code
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
