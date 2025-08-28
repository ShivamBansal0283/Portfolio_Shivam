// app/api/github/activity/route.ts
import { NextResponse } from "next/server";
import { fetchContributionSeries } from "@/lib/github";

export const revalidate = 3600; // 1 hour

export async function GET() {
  try {
    const series = await fetchContributionSeries(180);
    return NextResponse.json({ ok: true, series });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
  }
}