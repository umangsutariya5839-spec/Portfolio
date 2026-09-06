import Seam from "./Seam";

export default function Hero({ profile }) {
  return (
    <section id="top" className="bg-pine pt-28 text-chalk sm:pt-32">
      <div className="shell rise pb-14">
        {profile.available ? (
          <p className="mb-6 inline-flex items-center gap-2 border border-chalk/25 px-3 py-1 text-sm text-chalk/85">
            <span className="h-2 w-2 rounded-full bg-seam" aria-hidden="true" />
            Open to full-time roles
          </p>
        ) : null}

        <h1 className="text-[clamp(2.7rem,9vw,6.2rem)]">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-readable text-[1.15rem] text-chalk/85">
          {profile.headline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn">
            Get in touch
          </a>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="btn border border-chalk/35 bg-transparent text-chalk hover:bg-chalk/10"
            >
              Download resume
            </a>
          ) : null}
        </div>
      </div>

      <div className="shell">
        <dl className="grid grid-cols-2 border-t border-chalk/20 md:grid-cols-4">
          {profile.scorecard?.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-1 py-5 md:px-5 ${
                index % 2 === 1 ? "border-l border-chalk/20 pl-4 md:pl-5" : ""
              } md:border-l md:first:border-l-0 md:first:pl-0`}
            >
              <dt className="text-sm text-chalk/60">{stat.label}</dt>
              <dd className="display mt-1 text-lg leading-snug">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Seam />
    </section>
  );
}
