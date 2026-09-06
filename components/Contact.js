"use client";

import { useState } from "react";

const empty = { name: "", email: "", message: "" };

export default function Contact({ profile }) {
  const [form, setForm] = useState(empty);
  const [state, setState] = useState({ status: "idle", note: "" });

  const update = (key) => (event) => setForm({ ...form, [key]: event.target.value });

  async function send() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setState({ status: "error", note: "Fill in your name, email and message before sending." });
      return;
    }
    setState({ status: "sending", note: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "The message did not go through.");
      setForm(empty);
      setState({ status: "sent", note: "Message sent. I reply within a day or two." });
    } catch (error) {
      setState({ status: "error", note: error.message });
    }
  }

  return (
    <section id="contact" className="shell py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
        <h2 className="section-title">Contact</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-readable text-[1.1rem]">
              Hiring, or want to talk about a project? Send a message here, or reach me
              directly.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-sm text-pine/60">Email</dt>
                <dd>
                  <a className="link-quiet" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-pine/60">Phone</dt>
                <dd>
                  <a className="link-quiet" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                    {profile.phone}
                  </a>
                </dd>
              </div>
              {profile.github ? (
                <div>
                  <dt className="text-sm text-pine/60">GitHub</dt>
                  <dd>
                    <a className="link-quiet" href={profile.github} target="_blank" rel="noreferrer">
                      {profile.github.replace("https://", "")}
                    </a>
                  </dd>
                </div>
              ) : null}
              {profile.linkedin ? (
                <div>
                  <dt className="text-sm text-pine/60">LinkedIn</dt>
                  <dd>
                    <a className="link-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">
                      {profile.linkedin.replace("https://", "")}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="space-y-3">
            <label className="block">
              <span className="text-sm text-pine/70">Your name</span>
              <input className="field mt-1" value={form.name} onChange={update("name")} />
            </label>
            <label className="block">
              <span className="text-sm text-pine/70">Your email</span>
              <input
                type="email"
                className="field mt-1"
                value={form.email}
                onChange={update("email")}
              />
            </label>
            <label className="block">
              <span className="text-sm text-pine/70">Message</span>
              <textarea
                rows={5}
                className="field mt-1"
                value={form.message}
                onChange={update("message")}
              />
            </label>

            <button className="btn" onClick={send} disabled={state.status === "sending"}>
              {state.status === "sending" ? "Sending" : "Send message"}
            </button>

            {state.note ? (
              <p className={state.status === "error" ? "text-seam" : "text-turf"}>{state.note}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
