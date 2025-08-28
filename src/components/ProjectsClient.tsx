"use client";

import { useMemo, useState } from "react";
import ProjectFilters from "../components/ProjectFilters";
import RepoCard from "../components/RepoCard";
import type { Repo } from "../lib/github";

export default function ProjectsClient({ repos }: { repos: Repo[] }) {
  const [filtered, setFiltered] = useState<Repo[]>(repos);
  const initial = useMemo(() => repos, [repos]);

  return (
    <div className="space-y-6">
      <ProjectFilters repos={initial} onChange={setFiltered} />
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((r) => <RepoCard key={r.id} repo={r} />)}
      </div>
    </div>
  );
}