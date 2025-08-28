import profile from "@/content/profile";

export const metadata = { title: "Contact — Shivam Bansal" };

export default function ContactPage() {
  const gh = `https://github.com/${profile.socials.github}`;
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="rounded-2xl border p-6">
        <p className="mb-2">Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p className="mb-2">GitHub: <a className="underline" target="_blank" href={gh}>{gh}</a></p>
        {profile.socials.linkedin && (
          <p className="mb-2">LinkedIn: <a className="underline" target="_blank" href={profile.socials.linkedin}>{profile.socials.linkedin}</a></p>
        )}
      </div>
    </div>
  );
}
