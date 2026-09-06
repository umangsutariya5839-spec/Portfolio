"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ name, resumeUrl }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "bg-chalk/95 backdrop-blur border-b border-pine/10" : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="display text-lg tracking-tight">
          {name.split(" ")[0]}
          <span className="text-seam">.</span>
        </a>
        <div className="flex items-center gap-5 text-[0.95rem]">
          <ul className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-quiet">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {resumeUrl ? (
            <a href={resumeUrl} className="btn btn-quiet !py-1.5 !px-3 text-sm" download>
              Resume
            </a>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
