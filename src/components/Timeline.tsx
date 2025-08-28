import { Fragment } from "react";

type Item = { company?: string; role?: string; start: string; end: string; bullets?: string[]; skills?: string[]; school?: string; degree?: string; details?: string };

export default function Timeline({ items, title }: { items: Item[]; title: string }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ol className="relative border-s pl-6">
        {items.map((it, idx) => (
          <li key={idx} className="mb-8 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-background" />
            <h3 className="font-medium">{it.role || it.degree} {it.company ? `@ ${it.company}` : it.school ? `@ ${it.school}` : ""}</h3>
            <p className="text-xs text-muted-foreground">{it.start} — {it.end || "Present"}</p>
            {it.details && <p className="mt-1 text-sm text-muted-foreground">{it.details}</p>}
            {it.bullets && (
              <ul className="mt-2 list-disc pl-5 text-sm">
                {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
            {it.skills && it.skills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {it.skills.map((s, i) => <span key={i} className="rounded-full border px-2 py-0.5">{s}</span>)}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}