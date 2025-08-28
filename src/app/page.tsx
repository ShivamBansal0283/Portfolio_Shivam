
// import RepoCard from "@/components/RepoCard";
// import ActivityChart from "@/components/ActivityChart";
// import {
//   fetchPinnedAndTaggedRepos,
//   fetchContributionSeries,
// } from "@/lib/github";

// export const revalidate = 3600;

// export default async function Page() {
//   const [repos, series] = await Promise.all([
//     fetchPinnedAndTaggedRepos("portfolio"),
//     fetchContributionSeries(180),
//   ]);

//   return (
//     <div className="space-y-10">
//       <header className="space-y-2">
//         <h1 className="text-3xl font-bold">Hi, I'm Shivam</h1>
//         <p className="text-muted-foreground">
//           Final-year IT student • Data analyst & developer • Next.js, Python, SQL
//         </p>
//       </header>

//       <section className="space-y-4">
//         <h2 className="text-xl font-semibold">Recent Activity</h2>
//         <ActivityChart data={series} />
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-xl font-semibold">Projects</h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           {repos?.slice(0, 8).map((r: any) => (
//             <RepoCard key={r.id} repo={r} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }








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
