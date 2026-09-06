export default function About({ profile }) {
  return (
    <section id="about" className="shell py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <h2 className="section-title">In short</h2>
        <div>
          <p className="max-w-readable text-[1.15rem]">{profile.intro}</p>
          <p className="mt-5 text-pine/70">
            Based in {profile.location}. Reachable at{" "}
            <a className="link-quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
