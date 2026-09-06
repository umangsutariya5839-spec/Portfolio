export default function Skills({ skills }) {
  return (
    <section id="skills" className="shell py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <h2 className="section-title">Skills</h2>
        <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group}>
              <dt className="display text-lg">{group.group}</dt>
              <dd className="mt-1 text-pine/80">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
