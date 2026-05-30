"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-medium tracking-widest text-muted-foreground">
              ABOUT
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Building modern products with a focus on scale.
            </h2>
            <p className="mt-5 text-pretty leading-7 text-muted-foreground">
              B.Tech AI &amp; Data Science student with a CGPA of{" "}
              <span className="font-semibold text-foreground">8.98</span>.
              Passionate about MERN development and designing scalable systems.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10" />

              <div className="relative mb-6 flex items-center gap-4 rounded-2xl border border-border/70 bg-background/30 p-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-background/40">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Papa Kommanaboyina profile photo"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    Papa Kommanaboyina
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Full Stack Developer · MERN · AI &amp; DS
                  </p>
                </div>
              </div>

              <div className="relative grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    DEGREE
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    B.Tech (AI &amp; DS)
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    CGPA
                  </p>
                  <p className="mt-2 text-sm font-semibold">8.98</p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    FOCUS
                  </p>
                  <p className="mt-2 text-sm font-semibold">MERN &amp; Scale</p>
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {[
                  "Full Stack",
                  "MERN",
                  "Scalable Systems",
                  "Clean UI",
                  "Performance",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
