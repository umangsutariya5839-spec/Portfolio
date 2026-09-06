import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const { password } = await request.json();
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return NextResponse.json({ error: "Set ADMIN_PASSWORD in your environment first." }, { status: 500 });
  }
  if (password !== expected) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  cookies().set("admin", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  cookies().delete("admin");
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const session = cookies().get("admin")?.value;
  return NextResponse.json({ signedIn: Boolean(session && session === process.env.ADMIN_PASSWORD) });
}
