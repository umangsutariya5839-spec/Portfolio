// Education really is a sequence, so it is the one place a timeline earns its keep.
export default function Education({ education }) {
  return (
    <section id="education" className="shell py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <h2 className="section-title">Education</h2>
        <ol className="border-l border-pine/20">
          {education.map((item) => (
            <li key={item.id} className="relative pb-9 pl-6 last:pb-0">
              <span
                className="absolute -left-[5px] top-[0.55em] h-[9px] w-[9px] rounded-full bg-seam"
                aria-hidden="true"
              />
              <p className="text-pine/60">{item.period}</p>
              <h3 className="mt-1 text-xl">{item.qualification}</h3>
              <p className="text-pine/80">{item.institute}</p>
              <p className="display mt-1 text-pine">{item.result}</p>
              {item.note ? <p className="mt-2 max-w-readable text-pine/70">{item.note}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
