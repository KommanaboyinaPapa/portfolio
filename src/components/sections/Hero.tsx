"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = useMemo(() => words[wordIndex] ?? "", [words, wordIndex]);

  useEffect(() => {
    const atFull = subIndex >= current.length;
    const atEmpty = subIndex <= 0;

    // Speed tuning: professional, not "gaming"
    const typeMs = deleting ? 28 : 44;
    const pauseMs = atFull ? 850 : atEmpty && deleting ? 220 : 0;

    const t = window.setTimeout(() => {
      if (!deleting && atFull) {
        setDeleting(true);
        return;
      }
      if (deleting && atEmpty) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      setSubIndex((v) => v + (deleting ? -1 : 1));
    }, typeMs + pauseMs);

    return () => window.clearTimeout(t);
  }, [current.length, deleting, subIndex, words.length]);

  return current.slice(0, subIndex);
}

export function Hero() {
  const typed = useTypewriter([
    "Full Stack Developer",
    "MERN Developer",
    "AI & DS Student",
  ]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      {/* Cinematic background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <motion.div
          className="absolute -left-40 top-[-140px] h-[520px] w-[520px] rounded-full bg-sky-400/14 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-220px] top-[120px] h-[640px] w-[640px] rounded-full bg-violet-400/14 blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, -14, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-320px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <Container className="flex min-h-[calc(100svh-96px)] items-center pb-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/35 px-4 py-2 text-xs font-medium tracking-widest text-muted-foreground backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_rgba(56,189,248,0.55)]" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                PAPA KOMMANABOYINA
              </span>
            </h1>

            <div className="mt-5 text-lg font-semibold tracking-tight text-foreground/90 sm:text-xl">
              <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                {typed}
              </span>
              <span className="ml-1 inline-block h-5 w-[2px] translate-y-[3px] bg-foreground/70 opacity-70" />
            </div>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Building scalable web experiences and solving real-world problems
              through modern development.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-foreground px-7 text-sm font-semibold text-background shadow-[0_30px_90px_-65px_rgba(56,189,248,0.9)] transition hover:opacity-95 sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/12 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">View Projects</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-background/35 px-7 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-ring/60 hover:bg-muted sm:w-auto"
              >
                Contact Me
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-background/20 px-7 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-ring/60 hover:bg-muted sm:w-auto"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease, delay: 0.05 }}
          >
            <motion.div
              className="relative mx-auto w-[min(520px,92vw)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Soft glow around image */}
              <div
                className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-sky-400/18 via-violet-400/12 to-emerald-400/12 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/25 shadow-[0_50px_130px_-90px_rgba(56,189,248,0.85)] backdrop-blur-xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Papa Kommanaboyina profile photo"
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 92vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Premium light sweep */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0"
                  animate={{ opacity: [0, 0.35, 0] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
