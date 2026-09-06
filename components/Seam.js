// A stitched curve lifted from the seam of a softball. It is the one decorative
// element on the page, so it repeats instead of competing with anything else.
export default function Seam({ flip = false, className = "" }) {
  return (
    <svg
      className={`seam-line ${className}`}
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="seam-stroke"
        d={flip ? "M0 26 C 300 2, 900 2, 1200 26" : "M0 8 C 300 32, 900 32, 1200 8"}
      />
    </svg>
  );
}
