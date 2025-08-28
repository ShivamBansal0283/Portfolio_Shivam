"use client";
import { useMemo, useState } from "react";

type Repo = {
  id: string; name: string; url: string; description: string | null; homepageUrl: string | null;
  stargazerCount: number; forkCount: number; updatedAt: string;
  primaryLanguage?: { name: string; color?: string } | null; topics: string[];
};

export default function ProjectFilters({ repos, onChange }: { repos: Repo[]; onChange: (filtered: Repo[]) => void }) {
  const languages = useMemo(() => Array.from(new Set(repos.map(r => r.primaryLanguage?.name).filter(Boolean))) as string[], [repos]);
  const topics = useMemo(() => Array.from(new Set(repos.flatMap(r => r.topics))).slice(0, 20), [repos]);

  const [q, setQ] = useState("");
  const [lang, setLang] = useState("");
  const [topic, setTopic] = useState("");

  function apply() {
    let list = [...repos];
    if (q) list = list.filter(r => (r.name + " " + (r.description ?? "")).toLowerCase().includes(q.toLowerCase()));
    if (lang) list = list.filter(r => r.primaryLanguage?.name === lang);
    if (topic) list = list.filter(r => r.topics.includes(topic));
    onChange(list);
  }

  return (
    <div className="rounded-2xl border p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <input
        placeholder="Search projects..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && apply()}
        className="h-9 w-full rounded-xl border px-3 md:w-1/3"
      />
      <div className="flex flex-wrap gap-3">
        <select className="h-9 rounded-xl border px-3" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="">Language</option>
          {languages.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select className="h-9 rounded-xl border px-3" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Topic</option>
          {topics.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button className="h-9 rounded-xl border px-3" onClick={apply}>Apply</button>
        <button className="h-9 rounded-xl border px-3" onClick={() => { setQ(""); setLang(""); setTopic(""); onChange(repos); }}>Reset</button>
      </div>
    </div>
  );
}