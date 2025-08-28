// src/components/Achievements.tsx
import awards from "@/content/awards";

export default function Achievements() {
  if (!awards || awards.length === 0) return null;
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">Achievements</h2>
      <ul className="list-disc pl-5 text-sm">
        {awards.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </section>
  );
}