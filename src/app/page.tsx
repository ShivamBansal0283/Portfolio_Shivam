// // app/page.tsx
// import RepoCard from "@/components/ui/RepoCard";
// import ActivityChart from "@/components/ui/ActivityChart";

// async function getData() {
//   const [reposRes, actRes] = await Promise.all([
//     fetch("/api/github/projects", { next: { revalidate: 3600 } }),
//     fetch("/api/github/activity", { next: { revalidate: 3600 } }),
//   ]);
//   const { repos } = await reposRes.json();
//   const { series } = await actRes.json();
//   return { repos, series };
// }

// export default async function Page() {
//   const { repos, series } = await getData();
//   return (
//     <div className="space-y-10">
//       <header className="space-y-2">
//         <h1 className="text-3xl font-bold">Hi, I'm GPTOT</h1>
//         <p className="text-muted-foreground">Data analyst & developer • I build with Next.js, Python, SQL.</p>
//       </header>

//       <section className="space-y-4">
//         <h2 className="text-xl font-semibold">Recent Activity</h2>
//         <ActivityChart data={series} />
//       </section>

//       <section className="space-y-4">
//         <h2 className="text-xl font-semibold">Projects</h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           {repos?.slice(0, 8).map((r: any) => (<RepoCard key={r.id} repo={r} />))}
//         </div>
//       </section>
//     </div>
//   );
// }

// app/page.tsx
import RepoCard from "@/components/RepoCard";          // <- no /ui
import ActivityChart from "@/components/ActivityChart"; // <- no /ui
import { fetchPinnedAndTaggedRepos, fetchContributionSeries } from "@/lib/github";

export const revalidate = 3600; // ISR: refresh hourly

export default async function Page() {
  const [repos, series] = await Promise.all([
    fetchPinnedAndTaggedRepos("portfolio"), // or any topic tag you want to filter by
    fetchContributionSeries(180),
  ]);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Hi, I'm Shivam</h1>
        <p className="text-muted-foreground">
          Final-year IT student • Data analyst & developer • Next.js, Python, SQL
        </p>
      </header>

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