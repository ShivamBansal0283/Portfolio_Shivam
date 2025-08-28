




import Hero from "@/components/Hero";
import ActivityChart from "@/components/ActivityChart";
import RepoCard from "@/components/RepoCard";
import { fetchPinnedAndTaggedRepos, fetchContributionSeries } from "@/lib/github";

export const revalidate = 3600;

export default async function Page() {
  const [repos, series] = await Promise.all([
    fetchPinnedAndTaggedRepos("portfolio"),
    fetchContributionSeries(180),
  ]);

  return (
    <div className="space-y-10">
      <Hero />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <ActivityChart data={series} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {repos?.slice(0, 8).map((r: any) => <RepoCard key={r.id} repo={r} />)}
        </div>
      </section>
    </div>
  );
}


