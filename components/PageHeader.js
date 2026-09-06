export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="shell max-w-4xl pb-10 pt-28 sm:pb-14">
      <p className="text-sm uppercase tracking-[0.18em] text-seam">{eyebrow}</p>
      <h1 className="display mt-3 max-w-3xl text-4xl leading-tight sm:text-6xl">{title}</h1>
      <p className="mt-5 max-w-readable text-lg text-pine/70">{intro}</p>
    </header>
  );
}
