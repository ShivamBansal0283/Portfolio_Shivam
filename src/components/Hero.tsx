"use client";
import { motion } from "framer-motion";
import profile from "@/content/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border p-8 md:p-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent" />
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">{profile.name}</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{profile.tagline}</p>
        <div className="mt-6 flex gap-3">
          <a href="/ShivamBansal_resume.pdf" className="rounded-xl border px-4 py-2 text-sm hover:bg-accent">Download Resume</a>
          <a href={`https://github.com/${profile.socials.github}`} className="rounded-xl border px-4 py-2 text-sm hover:bg-accent" target="_blank">GitHub</a>
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} className="rounded-xl border px-4 py-2 text-sm hover:bg-accent" target="_blank">LinkedIn</a>
          )}
        </div>
      </motion.div>
    </section>
  );
}