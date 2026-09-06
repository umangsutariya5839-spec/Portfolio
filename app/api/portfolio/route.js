import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getContent, saveContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request) {
  const session = cookies().get("admin")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Sign in first." }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body?.profile?.name) {
      return NextResponse.json({ error: "The content needs a profile with a name." }, { status: 400 });
    }
    await saveContent(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
