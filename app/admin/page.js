"use client";

import { useEffect, useState } from "react";

function Field({ label, value, onChange, textarea = false, rows = 3 }) {
  return (
    <label className="block">
      <span className="text-sm text-pine/70">{label}</span>
      {textarea ? (
        <textarea className="field mt-1" rows={rows} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input className="field mt-1" value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function Card({ title, onRemove, children }) {
  return (
    <div className="rule space-y-3 pt-5">
      <div className="flex items-center justify-between">
        <h4 className="display text-lg">{title}</h4>
        <button className="text-sm text-seam link-quiet" onClick={onRemove}>
          Remove
        </button>
      </div>
      {children}
    </div>
  );
}

export default function Admin() {
  const [signedIn, setSignedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [content, setContent] = useState(null);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch("/api/auth").then((r) => r.json()).then((d) => setSignedIn(d.signedIn));
    fetch("/api/portfolio").then((r) => r.json()).then(setContent);
  }, []);

  async function signIn() {
    setNote("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (!res.ok) return setNote(data.error);
    setSignedIn(true);
    setPassword("");
  }

  async function signOut() {
    await fetch("/api/auth", { method: "DELETE" });
    setSignedIn(false);
  }

  async function save() {
    setBusy(true);
    setNote("");
    const res = await fetch("/api/portfolio", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    const data = await res.json();
    setBusy(false);
    setNote(res.ok ? "Saved. Reload the home page to see it." : data.error);
  }

  const patch = (section, updater) => setContent({ ...content, [section]: updater(content[section]) });
  const setProfile = (key) => (value) => patch("profile", (p) => ({ ...p, [key]: value }));
  const setItem = (section, index, key) => (value) =>
    patch(section, (list) => list.map((row, i) => (i === index ? { ...row, [key]: value } : row)));
  const removeItem = (section, index) => () =>
    patch(section, (list) => list.filter((_, i) => i !== index));
  const addItem = (section, blank) => () => patch(section, (list) => [...list, blank]);
  const asLines = (arr) => (arr || []).join("\n");
  const fromLines = (text) => text.split("\n").map((l) => l.trim()).filter(Boolean);

  if (!content) {
    return <main className="shell py-24">Loading the content.</main>;
  }

  if (!signedIn) {
    return (
      <main className="shell max-w-md py-24">
        <h1 className="section-title">Sign in</h1>
        <p className="mt-2 text-pine/70">Enter the admin password to edit the site.</p>
        <input
          type="password"
          className="field mt-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && signIn()}
        />
        <button className="btn mt-4" onClick={signIn}>
          Sign in
        </button>
        {note ? <p className="mt-3 text-seam">{note}</p> : null}
      </main>
    );
  }

  return (
    <main className="shell max-w-4xl py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="section-title">Edit the site</h1>
        <div className="flex items-center gap-3">
          <a className="link-quiet" href="/">
            View site
          </a>
          <button className="btn btn-quiet" onClick={signOut}>
            Sign out
          </button>
          <button className="btn" onClick={save} disabled={busy}>
            {busy ? "Saving" : "Save changes"}
          </button>
        </div>
      </div>
      {note ? <p className="mt-3">{note}</p> : null}

      <section className="mt-10 space-y-3">
        <h2 className="display text-2xl">Profile</h2>
        <Field label="Name" value={content.profile.name} onChange={setProfile("name")} />
        <Field label="Headline" value={content.profile.headline} onChange={setProfile("headline")} textarea />
        <Field label="Intro" value={content.profile.intro} onChange={setProfile("intro")} textarea rows={5} />
        <Field label="Location" value={content.profile.location} onChange={setProfile("location")} />
        <Field label="Email" value={content.profile.email} onChange={setProfile("email")} />
        <Field label="Phone" value={content.profile.phone} onChange={setProfile("phone")} />
        <Field label="GitHub URL" value={content.profile.github} onChange={setProfile("github")} />
        <Field label="LinkedIn URL" value={content.profile.linkedin} onChange={setProfile("linkedin")} />
        <Field label="Resume file path" value={content.profile.resumeUrl} onChange={setProfile("resumeUrl")} />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={Boolean(content.profile.available)}
            onChange={(e) => setProfile("available")(e.target.checked)}
          />
          <span>Show the "open to full-time roles" badge</span>
        </label>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">Projects</h2>
        {content.projects.map((project, index) => (
          <Card key={index} title={project.title || "Untitled project"} onRemove={removeItem("projects", index)}>
            <Field label="Title" value={project.title} onChange={setItem("projects", index, "title")} />
            <Field label="Year" value={project.year} onChange={setItem("projects", index, "year")} />
            <Field label="Summary" value={project.summary} onChange={setItem("projects", index, "summary")} textarea />
            <Field
              label="Highlights, one per line"
              value={asLines(project.points)}
              onChange={(v) => setItem("projects", index, "points")(fromLines(v))}
              textarea
              rows={4}
            />
            <Field
              label="Stack, one per line"
              value={asLines(project.stack)}
              onChange={(v) => setItem("projects", index, "stack")(fromLines(v))}
              textarea
            />
            <Field label="Live URL" value={project.live} onChange={setItem("projects", index, "live")} />
            <Field label="Code URL" value={project.code} onChange={setItem("projects", index, "code")} />
          </Card>
        ))}
        <button
          className="btn btn-quiet mt-6"
          onClick={addItem("projects", { id: String(Date.now()), title: "", year: "", summary: "", points: [], stack: [], live: "", code: "" })}
        >
          Add a project
        </button>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">Experience</h2>
        {content.experience.map((job, index) => (
          <Card key={index} title={job.role || "Untitled role"} onRemove={removeItem("experience", index)}>
            <Field label="Role" value={job.role} onChange={setItem("experience", index, "role")} />
            <Field label="Organisation" value={job.org} onChange={setItem("experience", index, "org")} />
            <Field label="Period" value={job.period} onChange={setItem("experience", index, "period")} />
            <Field
              label="Highlights, one per line"
              value={asLines(job.points)}
              onChange={(v) => setItem("experience", index, "points")(fromLines(v))}
              textarea
              rows={4}
            />
          </Card>
        ))}
        <button
          className="btn btn-quiet mt-6"
          onClick={addItem("experience", { id: String(Date.now()), role: "", org: "", period: "", points: [] })}
        >
          Add a role
        </button>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">Education</h2>
        {content.education.map((item, index) => (
          <Card key={index} title={item.qualification || "Untitled"} onRemove={removeItem("education", index)}>
            <Field label="Qualification" value={item.qualification} onChange={setItem("education", index, "qualification")} />
            <Field label="Institute" value={item.institute} onChange={setItem("education", index, "institute")} />
            <Field label="Period" value={item.period} onChange={setItem("education", index, "period")} />
            <Field label="Result" value={item.result} onChange={setItem("education", index, "result")} />
            <Field label="Note" value={item.note} onChange={setItem("education", index, "note")} textarea />
          </Card>
        ))}
        <button
          className="btn btn-quiet mt-6"
          onClick={addItem("education", { id: String(Date.now()), qualification: "", institute: "", period: "", result: "", note: "" })}
        >
          Add an entry
        </button>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">Skills</h2>
        {content.skills.map((group, index) => (
          <Card key={index} title={group.group || "Untitled group"} onRemove={removeItem("skills", index)}>
            <Field label="Group name" value={group.group} onChange={setItem("skills", index, "group")} />
            <Field
              label="Skills, one per line"
              value={asLines(group.items)}
              onChange={(v) => setItem("skills", index, "items")(fromLines(v))}
              textarea
              rows={4}
            />
          </Card>
        ))}
        <button className="btn btn-quiet mt-6" onClick={addItem("skills", { group: "", items: [] })}>
          Add a group
        </button>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="display text-2xl">Off the keyboard</h2>
        <Field
          label="Title"
          value={content.beyondWork?.title}
          onChange={(v) => setContent({ ...content, beyondWork: { ...content.beyondWork, title: v } })}
        />
        <Field
          label="Body"
          textarea
          rows={5}
          value={content.beyondWork?.body}
          onChange={(v) => setContent({ ...content, beyondWork: { ...content.beyondWork, body: v } })}
        />
      </section>

      <button className="btn mt-12" onClick={save} disabled={busy}>
        {busy ? "Saving" : "Save changes"}
      </button>
    </main>
  );
}
