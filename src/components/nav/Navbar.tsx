"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

type NavItem = { label: string; href: string };

export function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="#top"
              className="group inline-flex items-center gap-2"
              aria-label={siteConfig.name}
            >
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border bg-card">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400/30 via-violet-400/10 to-emerald-400/20 blur-[10px]" />
                <span className="relative text-sm font-semibold tracking-tight">
                  PK
                </span>
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground/90 transition-colors group-hover:text-foreground">
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-ring/60 hover:bg-muted"
              >
                Resume
              </Link>
            </nav>

            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400/15 via-transparent to-violet-400/15 opacity-0 transition-opacity hover:opacity-100" />
              <span className="relative flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded bg-foreground/80" />
                <span className="h-0.5 w-5 rounded bg-foreground/80" />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="absolute right-3 top-3 w-[min(92vw,420px)] overflow-hidden rounded-2xl border border-border bg-background/90 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="text-sm font-semibold tracking-tight">
                  Menu
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-lg leading-none text-muted-foreground">
                    ×
                  </span>
                </button>
              </div>

              <div className="px-2 py-2">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.04 * idx,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-foreground/90 hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <span className="text-muted-foreground">↗</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border p-4">
                <Link
                  href="/resume.pdf"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-95"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

