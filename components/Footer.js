import Seam from "./Seam";

export default function Footer({ profile }) {
  return (
    <footer className="bg-pine text-chalk">
      <Seam flip />
      <div className="shell flex flex-col gap-3 pb-12 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl">{profile.name}</p>
          <p className="text-chalk/70">{profile.location}</p>
        </div>
        <p className="text-sm text-chalk/60">
          Built with Next.js. Last updated {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
