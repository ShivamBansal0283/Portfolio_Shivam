import skills from "../content/skills";

export default function SkillCloud() {
  const groups = Object.entries(skills as Record<string, string[]>);
  const all = groups.flatMap(([g, arr]) => arr.map(s => ({ g, s })));
  if (!all.length) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Tech I use</h2>
      <div className="flex flex-wrap gap-2">
        {all.map(({ s }, i) => (
          <span key={`${s}-${i}`} className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:bg-accent">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}