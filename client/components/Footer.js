import Icon from "./Icon";

export default function Footer({ profile }) {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-paper/60">{profile.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            profile.github && { href: profile.github, icon: "github", label: "GitHub" },
            profile.linkedin && { href: profile.linkedin, icon: "linkedin", label: "LinkedIn" },
            profile.email && { href: `mailto:${profile.email}`, icon: "mail", label: "Email" },
          ]
            .filter(Boolean)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 transition-colors hover:border-accent hover:bg-accent"
              >
                <Icon name={link.icon} className="h-5 w-5" />
              </a>
            ))}
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="shell py-6 text-sm text-paper/50">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
