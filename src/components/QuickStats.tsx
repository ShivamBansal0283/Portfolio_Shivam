// server component
type Repo = {
  stargazerCount: number;
  primaryLanguage?: { name: string } | null;
};
type Point = { date: string; count: number };

function topLanguage(repos: Repo[]) {
  const freq: Record<string, number> = {};
  repos.forEach(r => {
    const lang = r.primaryLanguage?.name;
    if (lang) freq[lang] = (freq[lang] || 0) + 1;
  });
  return Object.entries(freq).sort((a,b) => b[1]-a[1])[0]?.[0] ?? "—";
}

export default function QuickStats({ repos, series }: { repos: Repo[]; series: Point[] }) {
  const stars = repos.reduce((s, r) => s + (r.stargazerCount || 0), 0);
  const recent = series.slice(-30).reduce((s, p) => s + p.count, 0);
  const topLang = topLanguage(repos);

  const items = [
    { k: "Total Stars", v: stars },
    { k: "Commits (30d)", v: recent },
    { k: "Top Language", v: topLang },
  ];

  return (
    <section aria-label="Quick stats">
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.k} className="rounded-2xl border p-4">
            <div className="text-xs text-muted-foreground">{it.k}</div>
            <div className="mt-1 text-2xl font-semibold">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}