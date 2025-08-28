// components/RepoCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, ExternalLink } from "lucide-react";

export default function RepoCard({ repo }: { repo: any }) {
  const deploy = repo.homepageUrl;
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <a href={repo.url} target="_blank" rel="noreferrer" className="text-xl font-semibold hover:underline">
            {repo.name}
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Star size={16}/> {repo.stargazerCount}</span>
            <span className="inline-flex items-center gap-1"><GitFork size={16}/> {repo.forkCount}</span>
          </div>
        </div>
        {repo.description && <p className="text-sm text-muted-foreground">{repo.description}</p>}
        <div className="flex flex-wrap gap-2">
          {repo.primaryLanguage?.name && (<Badge variant="secondary">{repo.primaryLanguage.name}</Badge>)}
          {repo.topics?.slice(0, 3).map((t: string) => (<Badge key={t} variant="outline">{t}</Badge>))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Updated {new Date(repo.updatedAt).toLocaleDateString()}</span>
          {deploy && (
            <a className="text-sm inline-flex items-center gap-1 hover:underline" href={deploy} target="_blank" rel="noreferrer">
              Live <ExternalLink size={14}/>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}