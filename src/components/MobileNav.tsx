// src/components/MobileNav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { RESUME_FILE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger — hidden while menu is open to avoid overlapping hero */}
      <button
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border hover:bg-accent transition
        ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <Menu size={18} />
      </button>

      {/* Fullscreen overlay + drawer above everything */}
      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/35 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <nav
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-5/6 max-w-xs rounded-l-2xl border bg-background p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border hover:bg-accent"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-xl px-3 py-2 text-sm ${
                      active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}

              {/* Resume (opens new tab) */}
              <a
                href={RESUME_FILE}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
              >
                Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}