import { fetchPinnedAndTaggedRepos } from "@/lib/github";
import ProjectsClient from "@/components/ProjectsClient";

export const revalidate = 1800; // 30 min

export default async function ProjectsPage() {
  const repos = await fetchPinnedAndTaggedRepos("portfolio");
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ProjectsClient repos={repos} />
    </div>
  );
}