"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

type NavItem = { label: string; href: string };
const ease = [0.22, 1, 0.36, 1] as const;

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
  const [active, setActive] = useState<string>("#top");

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

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as Element[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];
        if (!visible?.target?.id) return;
        setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <Container className="py-4">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label={siteConfig.name}
            >
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/40 shadow-[0_10px_40px_-25px_rgba(56,189,248,0.6)] backdrop-blur-xl">
                <span className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-violet-400/10 to-emerald-400/15" />
                <span className="relative text-sm font-semibold tracking-tight">
                  PK
                </span>
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground/95">
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden items-center gap-3 md:flex">
              <div className="relative flex items-center gap-1 rounded-full border border-border bg-background/35 p-1 backdrop-blur-xl">
                {items.map((item) => {
                  const isActive = active === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="navActivePill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-sky-400/18 via-violet-400/12 to-emerald-400/12"
                          transition={{ duration: 0.35, ease }}
                        />
                      ) : null}
                      <span className={isActive ? "text-foreground" : ""}>
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <a
                href="/resume.pdf"
                download
                className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full border border-border bg-background/40 px-5 text-sm font-semibold text-foreground shadow-[0_20px_70px_-55px_rgba(56,189,248,0.8)] backdrop-blur-xl transition hover:border-ring/60"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/12 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Download Resume</span>
              </a>
            </nav>

            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/40 text-foreground backdrop-blur-xl md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/16 via-transparent to-violet-400/16 opacity-0 transition-opacity hover:opacity-100" />
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
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="absolute right-3 top-3 w-[min(92vw,460px)] overflow-hidden rounded-3xl border border-border bg-background/80 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="text-sm font-semibold tracking-tight">
                  Navigation
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background/40"
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
                      ease,
                      delay: 0.04 * idx,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                      <span className="text-muted-foreground">↗</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border p-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-95"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
