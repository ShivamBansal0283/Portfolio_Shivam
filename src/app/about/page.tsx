// src/app/about/page.tsx
import profile from "@/content/profile";
import education from "@/content/education";
import experience from "@/content/experience";
import Timeline from "@/components/Timeline";
import SkillBadges from "@/components/SkillBadges";
import Achievements from "@/components/Achievements";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <Timeline items={experience} title="Experience" />
      <Timeline items={education} title="Education" />
      <SkillBadges />
      <Achievements />
    </div>
  );
}