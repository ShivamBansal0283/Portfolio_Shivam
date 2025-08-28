// import { fetchPinnedAndTaggedRepos } from "../../lib/github";
// import ProjectsClient from "../../components/ProjectsClient";

// export const revalidate = 1800; // 30 min

// export default async function ProjectsPage() {
//   const repos = await fetchPinnedAndTaggedRepos("portfolio");
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">Projects</h1>
//       <ProjectsClient repos={repos} />
//     </div>
//   );
// }

// app/projects/page.tsx
import { unstable_noStore as noStore } from "next/cache";
import ProjectsClient from "../../components/ProjectsClient";
import { fetchPinnedAndTaggedRepos, type Repo } from "../../lib/github";

// Hard-disable all caching for this page's data
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default async function ProjectsPage() {
  noStore(); // extra guard against caching

  const repos: Repo[] = await fetchPinnedAndTaggedRepos("portfolio");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ProjectsClient repos={repos} />
    </div>
  );
}