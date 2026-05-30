"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const phone = "9985825548";
const email = "papakommanaboyina@gmail.com";

// Update these when ready
const githubUrl: string = "https://github.com/KommanaboyinaPapa";
const linkedInUrl: string = "#";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-widest text-muted-foreground">
              CONTACT
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something premium.
            </h2>
            <p className="mt-5 text-pretty leading-7 text-muted-foreground">
              Reach out anytime — I&apos;m happy to discuss opportunities,
              collaborations, or freelance work.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10"
                aria-hidden="true"
              />

              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    PHONE
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="mt-2 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-foreground/90"
                  >
                    {phone}
                  </a>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    EMAIL
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-2 inline-flex break-all text-sm font-semibold text-foreground transition-colors hover:text-foreground/90"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${phone}`}
                  className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-[0_20px_60px_-35px_rgba(56,189,248,0.55)] transition hover:opacity-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/12 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Call Me</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  Email Me
                </a>

                <Link
                  href={githubUrl}
                  aria-disabled={githubUrl === "#"}
                  tabIndex={githubUrl === "#" ? -1 : undefined}
                  className={[
                    "inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-background/50 px-5 text-sm font-semibold text-foreground transition hover:bg-muted",
                    githubUrl === "#" ? "cursor-not-allowed opacity-60" : "",
                  ].join(" ")}
                  onClick={(e) => {
                    if (githubUrl === "#") e.preventDefault();
                  }}
                >
                  GitHub
                </Link>

                <Link
                  href={linkedInUrl}
                  aria-disabled={linkedInUrl === "#"}
                  tabIndex={linkedInUrl === "#" ? -1 : undefined}
                  className={[
                    "inline-flex h-12 w-full items-center justify-center rounded-xl border border-border bg-background/50 px-5 text-sm font-semibold text-foreground transition hover:bg-muted",
                    linkedInUrl === "#" ? "cursor-not-allowed opacity-60" : "",
                  ].join(" ")}
                  onClick={(e) => {
                    if (linkedInUrl === "#") e.preventDefault();
                  }}
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
