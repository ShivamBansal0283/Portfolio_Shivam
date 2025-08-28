import skills from "@/content/skills.ts";

export default function SkillBadges() {
  const groups = Object.entries(skills as Record<string, string[]>);
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(([group, items]) => (
          <div key={group} className="rounded-2xl border p-4">
            <p className="mb-2 text-sm font-medium capitalize">{group}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}