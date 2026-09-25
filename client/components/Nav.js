"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav({ name, resumeUrl }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [first, ...rest] = (name || "").split(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {first}
          <span className="text-accent">.</span>
          <span className="sr-only"> {rest.join(" ")}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[0.95rem] text-ink/75 transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {resumeUrl ? (
            <a href={resumeUrl} download className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
              <Icon name="download" />
              Resume
            </a>
          ) : null}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="shell pb-6 md:hidden">
          <ul className="flex flex-col divide-y divide-line border-t border-line">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3.5 text-lg" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {resumeUrl ? (
            <a href={resumeUrl} download className="btn-primary mt-4 w-full">
              <Icon name="download" />
              Download resume
            </a>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
