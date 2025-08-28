// server component
"use client";
import RepoCard from "@/components/RepoCard";

type Repo = {
  id: string;
  name: string;
  url: string;
  description: string | null;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: { name: string; color?: string } | null;
  topics: string[];
  updatedAt: string;
};

export default function FeaturedProjects({ repos }: { repos: Repo[] }) {
  const featured = (repos || []).filter(r => r.topics?.includes("featured")).slice(0, 6);
  const list = featured.length ? featured : (repos || []).slice(0, 6);

  if (!list.length) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <a href="/projects" className="text-sm underline underline-offset-4">Browse all</a>
      </div>

      {/* Horizontal snap row */}
      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
           style={{ scrollbarWidth: "none" }}>
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {list.map((r) => (
          <div key={r.id} className="min-w-[320px] sm:min-w-[380px] snap-start">
            <RepoCard repo={r} />
          </div>
        ))}
      </div>
    </section>
  );
}