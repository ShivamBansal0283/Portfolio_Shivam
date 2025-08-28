// "use client";
// import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle";

// export default function Header() {
//   return (
//     <header className="sticky top-4 z-40 mb-6">
//       <div className="flex items-center justify-between rounded-2xl border bg-background/60 px-4 py-3 shadow-sm backdrop-blur">
//         <Link href="/" className="font-semibold tracking-tight">Shivam Bansal</Link>
//         <nav className="hidden gap-6 md:flex text-sm text-muted-foreground">
//           <Link href="/projects" className="hover:text-foreground">Projects</Link>
//           <Link href="/about" className="hover:text-foreground">About</Link>
//           <Link href="/contact" className="hover:text-foreground">Contact</Link>
//           <a href="/ShivamBansal_resume.pdf" target="_blank" className="hover:text-foreground">Resume</a>
//         </nav>
//         <div className="flex items-center gap-3">
//           <ThemeToggle />
//           <a href="https://github.com/ShivamBansal0283" target="_blank" className="text-sm underline-offset-4 hover:underline">GitHub</a>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 mb-6">
      <div
        className={clsx(
          "flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur transition-all",
          "bg-background/60",
          scrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <Link href="/" className="font-semibold tracking-tight">
          Shivam Bansal
        </Link>

        <nav className="hidden gap-6 md:flex text-sm">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "relative hover:text-foreground text-muted-foreground",
                  active && "text-foreground"
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                )}
              </Link>
            );
          })}
          <a
            href="/ShivamBansal_resume.pdf"
            target="_blank"
            className="hover:text-foreground text-muted-foreground"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/ShivamBansal0283"
            target="_blank"
            className="text-sm underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}