export default function SectionHeading({ eyebrow, title, intro, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro ? <p className="mt-5 text-lg text-muted">{intro}</p> : null}
    </div>
  );
}
