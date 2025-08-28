// // app/api/github/projects/route.ts
// import { NextResponse } from "next/server";
// import { fetchPinnedAndTaggedRepos } from "../../../../lib/github";
// export const runtime = "nodejs";
// // Disable caching for this route:
// export const dynamic = "force-dynamic";
// export const revalidate = 0; 

// export async function GET() {
//   try {
//     const repos = await fetchPinnedAndTaggedRepos("portfolio");
//     return NextResponse.json({ ok: true, repos });
//   } catch (e: any) {
//     return NextResponse.json({ ok: false, error: e?.message ?? "unknown" }, { status: 500 });
//   }
// }
// app/api/github/projects/route.ts
import { NextResponse } from "next/server";
import { fetchPinnedAndTaggedRepos } from "../../../../lib/github";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const repos = await fetchPinnedAndTaggedRepos("portfolio");

    // Prevent CDN/browser caching too
    return NextResponse.json(
      { ok: true, repos },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "unknown";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}