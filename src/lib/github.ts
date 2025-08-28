// // src/lib/github.ts
// import { graphql } from "@octokit/graphql";

// // IMPORTANT: These are evaluated on the server; keep this file server-only.
// const token = process.env.GITHUB_TOKEN as string | undefined;
// const username = process.env.GITHUB_USERNAME as string | undefined;

// if (!token) {
//   // Throwing early makes errors obvious in dev
//   throw new Error("GITHUB_TOKEN is not set in .env.local");
// }
// if (!username) {
//   throw new Error("GITHUB_USERNAME is not set in .env.local");
// }

// export const gh = graphql.defaults({
//   headers: { authorization: `token ${token}` },
// });

// export type Repo = {
//   id: string;
//   name: string;
//   description: string | null;
//   url: string;
//   homepageUrl: string | null;
//   stargazerCount: number;
//   forkCount: number;
//   primaryLanguage?: { name: string; color?: string } | null;
//   topics: string[];
//   updatedAt: string;
// };

// function mapRepo(r: any): Repo {
//   return {
//     id: r.id,
//     name: r.name,
//     description: r.description,
//     url: r.url,
//     homepageUrl: r.homepageUrl,
//     stargazerCount: r.stargazerCount,
//     forkCount: r.forkCount,
//     primaryLanguage: r.primaryLanguage,
//     topics: (r.repositoryTopics?.nodes ?? [])
//       .map((n: any) => n.topic?.name)
//       .filter(Boolean),
//     updatedAt: r.updatedAt,
//   };
// }

// export async function fetchPinnedAndTaggedRepos(tag = "portfolio") {
//   const q = `
//     query($login: String!) {
//       user(login: $login) {
//         pinnedItems(first: 6, types: REPOSITORY) {
//           nodes {
//             ... on Repository {
//               id name description url homepageUrl stargazerCount forkCount updatedAt
//               primaryLanguage { name color }
//               repositoryTopics(first: 10) { nodes { topic { name } } }
//             }
//           }
//         }
//         repositories(
//           first: 30,
//           orderBy: { field: UPDATED_AT, direction: DESC },
//           privacy: PUBLIC,
//           ownerAffiliations: OWNER
//         ) {
//           nodes {
//             id name description url homepageUrl stargazerCount forkCount updatedAt
//             primaryLanguage { name color }
//             repositoryTopics(first: 10) { nodes { topic { name } } }
//           }
//         }
//       }
//     }
//   `;

//   const data = await gh<{ user: any }>(q, { login: username! });

//   const fromPinned: Repo[] = (data.user?.pinnedItems?.nodes ?? []).map(mapRepo);
//   const fromAll: Repo[] = (data.user?.repositories?.nodes ?? []).map(mapRepo);

//   // Merge & de-dup (prefer pinned ordering)
//   const byId = new Map<string, Repo>();
//   [...fromPinned, ...fromAll].forEach((r) => byId.set(r.id, r));
//   let repos = [...byId.values()].sort((a, b) =>
//     a.updatedAt < b.updatedAt ? 1 : -1
//   );

//   // Optional filter by topic tag if you use it (uncomment to enforce)
//   // repos = repos.filter(r => r.topics.includes(tag));

//   return repos;
// }

// export type ActivityPoint = { date: string; count: number };

// export async function fetchContributionSeries(
//   days = 120
// ): Promise<ActivityPoint[]> {
//   const q = `
//     query($login: String!) {
//       user(login: $login) {
//         contributionsCollection {
//           contributionCalendar {
//             weeks { contributionDays { date contributionCount } }
//           }
//         }
//       }
//     }
//   `;
//   const data = await gh<{ user: any }>(q, { login: username! });

//   const daysArr: ActivityPoint[] =
//     (data.user?.contributionsCollection?.contributionCalendar?.weeks ?? [])
//       .flatMap((w: any) => w.contributionDays)
//       .map((d: any) => ({ date: d.date, count: d.contributionCount }));

//   return daysArr.slice(-days);
// }




























// src/lib/github.ts
import { graphql } from "@octokit/graphql";

// IMPORTANT: These are evaluated on the server; keep this file server-only.
const token = process.env.GITHUB_TOKEN as string | undefined;
const username = process.env.GITHUB_USERNAME as string | undefined;

if (!token) {
  // Throwing early makes errors obvious in dev
  throw new Error("GITHUB_TOKEN is not set in .env.local");
}
if (!username) {
  throw new Error("GITHUB_USERNAME is not set in .env.local");
}

export const gh = graphql.defaults({
  headers: { authorization: `token ${token}` },
});

export type Repo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: { name: string; color?: string } | null;
  topics: string[];
  updatedAt: string;
};

function mapRepo(r: any): Repo {
  return {
    id: r.id,
    name: r.name,
    description: r.description,
    url: r.url,
    homepageUrl: r.homepageUrl,
    stargazerCount: r.stargazerCount,
    forkCount: r.forkCount,
    primaryLanguage: r.primaryLanguage,
    topics: (r.repositoryTopics?.nodes ?? [])
      .map((n: any) => n.topic?.name)
      .filter(Boolean),
    updatedAt: r.updatedAt,
  };
}

export async function fetchPinnedAndTaggedRepos(tag = "portfolio") {
  const q = `
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id name description url homepageUrl stargazerCount forkCount updatedAt
              primaryLanguage { name color }
              repositoryTopics(first: 10) { nodes { topic { name } } }
            }
          }
        }
        repositories(
          first: 30,
          orderBy: { field: UPDATED_AT, direction: DESC },
          privacy: PUBLIC,
          ownerAffiliations: OWNER
        ) {
          nodes {
            id name description url homepageUrl stargazerCount forkCount updatedAt
            primaryLanguage { name color }
            repositoryTopics(first: 10) { nodes { topic { name } } }
          }
        }
      }
    }
  `;

  const data = await gh<{ user: any }>(q, { login: username! });

  const fromPinned: Repo[] = (data.user?.pinnedItems?.nodes ?? []).map(mapRepo);
  const fromAll: Repo[] = (data.user?.repositories?.nodes ?? []).map(mapRepo);

  // Merge & de-dup (prefer pinned ordering)
  const byId = new Map<string, Repo>();
  [...fromPinned, ...fromAll].forEach((r) => byId.set(r.id, r));
  let repos = [...byId.values()].sort((a, b) =>
    a.updatedAt < b.updatedAt ? 1 : -1
  );

  // Optional filter by topic tag if you use it (uncomment to enforce)
  // repos = repos.filter(r => r.topics.includes(tag));

  return repos;
}

export type ActivityPoint = { date: string; count: number };

export async function fetchContributionSeries(
  days = 120
): Promise<ActivityPoint[]> {
  const q = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks { contributionDays { date contributionCount } }
          }
        }
      }
    }
  `;
  const data = await gh<{ user: any }>(q, { login: username! });

  const daysArr: ActivityPoint[] =
    (data.user?.contributionsCollection?.contributionCalendar?.weeks ?? [])
      .flatMap((w: any) => w.contributionDays)
      .map((d: any) => ({ date: d.date, count: d.contributionCount }));

  return daysArr.slice(-days);
}