
"use client";
import ResumeButtons from "../components/ResumeButtons";
import { motion } from "framer-motion";
import profile from "../content/profile";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";


import { unstable_noStore as noStore } from "next/cache";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function Hero() {
  noStore();
  return (
    <section className="relative overflow-hidden rounded-3xl border p-8 md:p-12">
{/* <section className="relative overflow-hidden rounded-3xl border p-6 sm:p-8 md:p-12"> */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* Resume */}
          <ResumeButtons />

          {/* GitHub */}
          <a
            href={`https://github.com/${profile.socials.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
          >
            <Github size={16} /> GitHub
          </a>

          {/* LinkedIn */}
          {profile.socials.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          )}

          {/* Twitter */}
          {profile.socials.twitter && (
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Twitter size={16} /> Twitter
            </a>
          )}

          {/* Instagram */}
          {profile.socials.instagram && (
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Instagram size={16} /> Instagram
            </a>
          )}

          {/* Mail */}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              <Mail size={16} /> Mail
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}