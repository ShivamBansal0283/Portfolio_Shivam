// app/api/github/projects/route.ts
import { NextResponse } from "next/server";
import { fetchPinnedAndTaggedRepos } from "@/lib/github";

export const revalidate = 3600; // 1 hour cache

export async function GET() {
  try {
    const repos = await fetchPinnedAndTaggedRepos("portfolio");
    return NextResponse.json({ ok: true, repos });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}