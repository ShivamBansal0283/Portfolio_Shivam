// // components/RepoCard.tsx
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Star, GitFork, ExternalLink } from "lucide-react";

// export default function RepoCard({ repo }: { repo: any }) {
//   const deploy = repo.homepageUrl;
//   return (
//     <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
//       <CardContent className="p-5 space-y-3">
//         <div className="flex items-start justify-between gap-3">
//           <a href={repo.url} target="_blank" rel="noreferrer" className="text-xl font-semibold hover:underline">
//             {repo.name}
//           </a>
//           <div className="flex items-center gap-3 text-sm text-muted-foreground">
//             <span className="inline-flex items-center gap-1"><Star size={16}/> {repo.stargazerCount}</span>
//             <span className="inline-flex items-center gap-1"><GitFork size={16}/> {repo.forkCount}</span>
//           </div>
//         </div>
//         {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
//         <div className="flex flex-wrap gap-2">
//           {repo.primaryLanguage?.name && (<Badge variant="secondary">{repo.primaryLanguage.name}</Badge>)}
//           {repo.topics?.slice(0, 3).map((t: string) => (<Badge key={t} variant="outline">{t}</Badge>))}
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-xs text-muted-foreground">Updated {new Date(repo.updatedAt).toLocaleDateString()}</span>
//           {deploy && (
//             <a className="text-sm inline-flex items-center gap-1 hover:underline" href={deploy} target="_blank" rel="noreferrer">
//               Live <ExternalLink size={14}/>
//             </a>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }




"use client";

import { useRef } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, GitFork, ExternalLink } from "lucide-react";

const dateFmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

// ...



type Repo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: { name: string; color?: string } | null;
  topics: string[];
  updatedAt: string;
};

export default function RepoCard({ repo }: { repo: Repo }) {
  const ref = useRef<HTMLDivElement>(null);
  let raf = 0;

  function onMove(e: React.MouseEvent) {
    // Skip on touch pointers
    // @ts-ignore
    if (e.nativeEvent?.sourceCapabilities?.firesTouchEvents) return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      // spotlight gradient position
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);

      // gentle tilt (-8..+8 deg)
      const rx = ((y / rect.height) - 0.5) * -8;
      const ry = ((x / rect.width) - 0.5) * 8;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  const deploy = repo.homepageUrl;

  return (
    <Card
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group rounded-2xl border bg-background/70 shadow-md transition-transform will-change-transform"
      // soft, GPU-friendly spotlight
      style={{
        backgroundImage:
          "radial-gradient(320px 320px at var(--mx) var(--my), hsl(220 90% 60% / 0.14), transparent 60%)",
        transformStyle: "preserve-3d",
      }}
    >
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold hover:underline"
          >
            {repo.name}
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Star size={16} /> {repo.stargazerCount}
            </span>
            <span className="inline-flex items-center gap-1">
              <GitFork size={16} /> {repo.forkCount}
            </span>
          </div>
        </div>

        {repo.description && (
          <p className="text-sm text-muted-foreground">{repo.description}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {repo.primaryLanguage?.name && (
            <Badge variant="secondary">{repo.primaryLanguage.name}</Badge>
          )}
          {repo.topics?.slice(0, 3).map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          {/* <span className="text-xs text-muted-foreground">
            Updated {new Date(repo.updatedAt).toLocaleDateString()}
          </span> */}
          <span className="text-xs text-muted-foreground">
            Updated {dateFmt.format(new Date(repo.updatedAt))}
          </span>
          {deploy && (
            <a
              className="text-sm inline-flex items-center gap-1 hover:underline"
              href={deploy}
              target="_blank"
              rel="noreferrer"
            >
              Live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}