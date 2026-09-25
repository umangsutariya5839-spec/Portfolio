import SectionHeading from "./SectionHeading";

export default function Skills({ skills }) {
  if (!skills?.length) return null;

  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeading eyebrow="Skills" title="What I work with." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.id} className="card p-6 sm:p-7">
              <h3 className="text-xl">{group.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
