"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-4 z-40 mb-6">
      <div className="flex items-center justify-between rounded-2xl border bg-background/60 px-4 py-3 shadow-sm backdrop-blur">
        <Link href="/" className="font-semibold tracking-tight">Shivam Bansal</Link>
        <nav className="hidden gap-6 md:flex text-sm text-muted-foreground">
          <Link href="/projects" className="hover:text-foreground">Projects</Link>
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
          <a href="/ShivamBansal_resume.pdf" target="_blank" className="hover:text-foreground">Resume</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="https://github.com/ShivamBansal0283" target="_blank" className="text-sm underline-offset-4 hover:underline">GitHub</a>
        </div>
      </div>
    </header>
  );
}