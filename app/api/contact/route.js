import { NextResponse } from "next/server";
import { saveMessage } from "@/lib/content";

export const dynamic = "force-dynamic";

const seen = new Map();

export async function POST(request) {
  const { name, email, message, company } = await request.json();

  // Honeypot: real people leave this hidden field empty.
  if (company) return NextResponse.json({ ok: true });

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email and message are all required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address does not look right." }, { status: 400 });
  }

  // Light rate limit: one message per email every 60 seconds.
  const now = Date.now();
  const last = seen.get(email);
  if (last && now - last < 60_000) {
    return NextResponse.json({ error: "You just sent a message. Try again in a minute." }, { status: 429 });
  }
  seen.set(email, now);

  try {
    const stored = await saveMessage({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    if (!stored) console.log("Contact message (no database configured):", { name, email, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "The message could not be saved. Email me instead." }, { status: 500 });
  }
}
