"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
              ABOUT
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for scale, designed for clarity.
            </h2>
            <p className="mt-6 text-pretty leading-7 text-muted-foreground">
              I am a B.Tech Artificial Intelligence and Data Science student at Seshadri Rao Gudlavalleru Engineering College with a CGPA of 9.07. I am currently learning and building projects in full-stack development using React.js, Next.js, Node.js, Express.js, MongoDB, and REST APIs. I enjoy creating practical projects that help me improve my skills and understand real-world software development.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { k: "Degree", v: "B.Tech (AI & DS)" },
                { k: "CGPA", v: "9.07" },
                { k: "Focus", v: "MERN + Scale" },
              ].map((i) => (
                <div
                  key={i.k}
                  className="rounded-3xl border border-border bg-background/30 p-5 backdrop-blur-xl"
                >
                  <p className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground">
                    {i.k.toUpperCase()}
                  </p>
                  <p className="mt-2 text-sm font-semibold tracking-tight">
                    {i.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Full Stack",
                "MERN",
                "Scalable Systems",
                "Clean UI",
                "Performance",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/25 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease, delay: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/25 p-6 backdrop-blur-xl sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10"
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-border bg-background/35 shadow-[0_30px_90px_-70px_rgba(56,189,248,0.9)]">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Papa Kommanaboyina profile photo"
                    fill
                    sizes="96px"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight">
                    Papa Kommanaboyina
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Building scalable web experiences with MERN &amp; modern
                    product thinking.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 grid gap-6">
                {[
                  {
                    title: "Education",
                    meta: "B.Tech · AI & DS · CGPA 9.07",
                    desc: "Strong fundamentals in data + systems, applied to web products.",
                  },
                  {
                    title: "Industry exposure",
                    meta: "Internships · Web Dev · AI/ML",
                    desc: "Hands-on shipping mindset: UI, APIs, and production discipline.",
                  },
                  {
                    title: "Focus area",
                    meta: "MERN · Next.js · Performance",
                    desc: "Building recruiter-grade interfaces with scalable architecture.",
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="relative pl-10">
                    {idx < 2 ? (
                      <div className="absolute left-[14px] top-10 h-[calc(100%-18px)] w-px bg-border/80" />
                    ) : null}
                    <div className="absolute left-[8px] top-5 h-4 w-4 rounded-full border border-border bg-background/40 shadow-[0_0_0_8px_rgba(255,255,255,0.02)]">
                      <div className="h-full w-full rounded-full bg-gradient-to-br from-sky-400/50 via-violet-400/20 to-emerald-400/40" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.6, ease, delay: idx * 0.05 }}
                      className="rounded-3xl border border-border bg-background/20 p-5 backdrop-blur-xl"
                    >
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold tracking-tight">
                          {item.title}
                        </p>
                        <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground">
                          {item.meta.toUpperCase()}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
