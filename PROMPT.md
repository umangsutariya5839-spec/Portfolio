# The prompt

Paste this into Claude, v0, Cursor or any coding agent to regenerate or restyle this site.
Everything in `[ ]` is meant to be swapped for a different person's details.

---

Build a complete, production-ready personal portfolio website for a fresh engineering
graduate. Do not give me snippets — give me every file, ready to run.

**Stack**

- Next.js 14, App Router, JavaScript (no TypeScript)
- Tailwind CSS for styling, one small global stylesheet for the custom pieces
- MongoDB through the official `mongodb` driver, with a JSON file as the fallback source
  so the site runs before any database exists
- No UI kit, no component library, no icon package

**Content model**

All copy lives in one content object: `profile`, `education[]`, `projects[]`, `skills[]`,
`experience[]`, `beyondWork`. Ship it as `data/portfolio.json` and read it through a single
`lib/content.js` module that prefers MongoDB and falls back to the JSON. Nothing on the page
may be hard-coded in a component.

**Pages and routes**

- `/` — the portfolio, server-rendered from the content module, `dynamic = "force-dynamic"`
- `/admin` — password-protected editor for every field, including adding and removing
  projects, roles, education entries and skill groups
- `GET/PUT /api/portfolio` — read and write the content; PUT requires the admin cookie
- `POST /api/contact` — validate, honeypot, rate-limit, store the message
- `POST/DELETE/GET /api/auth` — cookie session for the admin using an `ADMIN_PASSWORD` env var

**Sections, in order**

Hero with name and a short statement, a four-item scorecard band, about, projects,
skills, experience, education as a timeline, an "off the keyboard" section, contact with a
working form, footer.

**Design direction**

The subject played softball at national level and studied data analysis, so build the
identity out of that, not out of a generic developer template.

- Palette: chalk `#FBFAF6`, sand `#E4E0D3`, pine `#0E3B2C`, turf `#1F6F52`, seam red `#C4362C`.
  Dark pine hero and footer, chalk body, sand for the alternating sections.
- Type: Bricolage Grotesque for headings, Source Serif 4 for body text, loaded from Google
  Fonts. Body line length under 68 characters.
- One motif only: a dashed red curve, like the stitching on a softball, used as the divider
  between the dark and light bands. Nothing else decorative.
- Left-aligned two-column sections: a short heading column and a wide content column.
- One entrance animation on the hero and nothing else. Respect `prefers-reduced-motion`.

Avoid these, they read as templated: cards with identical rounded corners and soft grey
shadows, ALL-CAPS eyebrow labels, gradient washes, `01 / 02 / 03` numbered markers on things
that are not a sequence, arrows appended to link text, and hover lifts on every card.

**Quality floor**

Responsive down to 360px, visible keyboard focus, real `<label>` elements on every input,
semantic headings, and error states that say what went wrong and how to fix it.

**Content to use**

[Paste the resume here.]

Write the copy yourself in plain, active language, first person for the intro and third
person nowhere. Turn each resume bullet into a sentence that says what was actually built,
not what technology was touched.

---

## Shorter version, for a quick regeneration

> Build a Next.js 14 portfolio site for the attached resume. Content in a single JSON file
> read through `lib/content.js` with a MongoDB override, a password-protected `/admin` editor,
> and a working contact form. Design it around softball seam stitching: pine green and chalk,
> Bricolage Grotesque over Source Serif 4, one red dashed curve as the only motif. No cards,
> no gradients, no all-caps labels. Give me every file.
