// import profile from "@/content/profile";

// export const metadata = { title: "Contact — Shivam Bansal" };

// export default function ContactPage() {
//   const gh = `https://github.com/${profile.socials.github}`;
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">Contact</h1>
//       <div className="rounded-2xl border p-6">
//         <p className="mb-2">Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
//         <p className="mb-2">GitHub: <a className="underline" target="_blank" href={gh}>{gh}</a></p>
//         {profile.socials.linkedin && (
//           <p className="mb-2">LinkedIn: <a className="underline" target="_blank" href={profile.socials.linkedin}>{profile.socials.linkedin}</a></p>
//         )}
//       </div>
//     </div>
//   );
// }





import ResumeButtons from "@/components/ResumeButtons";
import profile from "@/content/profile";
import { Mail, Github, Linkedin, Twitter, Instagram, MapPin, FileText } from "lucide-react";

export const metadata = { title: "Contact — Shivam Bansal" };

const socials = [
  {
    key: "github",
    label: "GitHub",
    href: `https://github.com/${profile.socials.github}`,
    Icon: Github,
  },
  profile.socials.linkedin && {
    key: "linkedin",
    label: "LinkedIn",
    href: profile.socials.linkedin,
    Icon: Linkedin,
  },
  profile.socials.twitter && {
    key: "twitter",
    label: "Twitter",
    href: profile.socials.twitter,
    Icon: Twitter,
  },
  profile.socials.instagram && {
    key: "instagram",
    label: "Instagram",
    href: profile.socials.instagram,
    Icon: Instagram,
  },
].filter(Boolean) as { key: string; label: string; href: string; Icon: any }[];

export default function ContactPage() {
  return (
    <div className="space-y-8">
      {/* Header / hero strip */}
      <section className="relative overflow-hidden rounded-3xl border px-6 py-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent" />
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s talk</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            I’m currently open to data / full-stack and Software Dev roles and interesting collabs.I also do Freelancing. The fastest way to reach me is email.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* Email primary CTA */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Mail size={16} /> {profile.email}
            </a>

            {/* Location (optional static) */}
            {profile.location && (
              <span className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm text-muted-foreground">
                <MapPin size={16} /> {profile.location}
              </span>
            )}

            {/* Resume */}
            <ResumeButtons />
          </div>
        </div>
      </section>

      {/* Two-column content */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Quick links / socials */}
        <div className="rounded-3xl border p-6">
          <h2 className="text-lg font-semibold">Find me online</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            I’m active on GitHub and fairly responsive on LinkedIn.
          </p>
          <div className="mt-4 grid gap-3">
            {socials.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between rounded-xl border px-4 py-3 hover:bg-accent"
              >
                <span className="inline-flex items-center gap-2">
                  <Icon size={16} />
                  <span>{label}</span>
                </span>
                <span className="text-xs text-muted-foreground group-hover:underline">{href}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Say hello card */}
        <div className="rounded-3xl border p-6">
          <h2 className="text-lg font-semibold">Say hello</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Prefer writing a quick note? Tap the button below to start an email.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Hello%20Shivam&body=Hi%20Shivam,%20I%20found%20your%20portfolio...`}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Mail size={16} /> Write an email
            </a>

            
          </div>

          {/* Tip block */}
          <div className="mt-6 rounded-2xl border bg-background/60 p-4">
            <p className="text-sm text-muted-foreground">
              Tip: include context (role, timeline, repository link) so I can respond faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}