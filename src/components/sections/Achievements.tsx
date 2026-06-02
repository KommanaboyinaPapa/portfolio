"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { label: "Current CGPA", value: "9.07", icon: "🎓" },
  { label: "Completed Internships", value: "2", icon: "💼" },
  { label: "Core Projects", value: "6+", icon: "💻" },
];

const highlights = [
  "Pursuing B.Tech in Artificial Intelligence & Data Science at SRGEC with a CGPA of 9.07",
  "Building responsive, high-performance web applications using the MERN stack and Next.js",
  "Applying Machine Learning and AI fundamentals to solve practical data-driven problems",
  "Gained hands-on experience through web development and AI/ML internships",
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-accent"
            >
              <path
                d="M5 3h14a1 1 0 011 1v4.5a9.5 9.5 0 01-4.66 8.18L12 19l-3.34-2.32A9.5 9.5 0 014 8.5V4a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium tracking-[0.25em] text-accent"
          >
            ACHIEVEMENTS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Growth & Milestones.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-4 text-pretty leading-7 text-muted-foreground"
          >
            An honest overview of my academic foundation, project achievements, and practical skill development.
          </motion.p>
        </div>

        {/* Main achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="group relative mx-auto mt-12 max-w-5xl"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-3xl opacity-0 blur-sm transition-opacity duration-700 group-hover:opacity-100">
            <div className="h-full w-full rounded-3xl bg-gradient-to-r from-emerald-500/30 via-sky-500/20 to-violet-500/30" />
          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-colors duration-300 hover:border-ring/60">
            {/* Decorative corner gradients */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/12 blur-3xl" />
              <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-sky-400/12 blur-3xl" />
              <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-400/8 blur-3xl" />
            </div>

            {/* Top accent bar */}
            <div className="relative h-1 w-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 opacity-70" />
              <motion.div
                className="absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ["-100%", "500%"] }}
                transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </div>

            <div className="relative p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left content */}
                <div className="lg:col-span-7">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease, delay: 0.2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1.5"
                  >
                    <span className="text-sm">🎓</span>
                    <span className="text-[11px] font-semibold tracking-wider text-amber-400">
                      STUDENT HIGHLIGHT
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.15 }}
                    className="mt-5 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
                  >
                    <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                      Aspiring Full Stack Engineer
                    </span>
                    <br />
                    <span className="text-foreground">— AI &amp; DS Student</span>
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.2 }}
                    className="mt-4 max-w-lg text-pretty leading-7 text-muted-foreground"
                  >
                    Dedicated to combining full-stack web technologies with AI and data-driven solutions. Actively building projects, exploring new architectures, and preparing for opportunities.
                  </motion.p>

                  {/* Key highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.25 }}
                    className="mt-6 space-y-3"
                  >
                    {highlights.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          ease,
                          delay: 0.3 + i * 0.06,
                        }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right side: stats + tags */}
                <div className="lg:col-span-5">
                  {/* Stats grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.3 }}
                    className="grid grid-cols-3 gap-3"
                  >
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        className="flex flex-col items-center rounded-2xl border border-border bg-card/60 p-4 text-center backdrop-blur-sm transition-colors hover:border-ring/40"
                      >
                        <span className="text-xl">{stat.icon}</span>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            ease,
                            delay: 0.4 + i * 0.08,
                          }}
                          className="mt-2 text-2xl font-bold tracking-tight"
                        >
                          {stat.value}
                        </motion.span>
                        <span className="mt-1 text-[10px] font-medium leading-tight tracking-wider text-muted-foreground/70">
                          {stat.label.toUpperCase()}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Info card */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.35 }}
                    className="mt-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-sky-500/20">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 text-emerald-400"
                        >
                          <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-semibold">Student Profile</div>
                    </div>

                    <div className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground/70">
                          Status
                        </span>
                        <span className="font-medium text-foreground/90">
                          B.Tech Student
                        </span>
                      </div>
                      <div className="h-px w-full bg-border/60" />
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground/70">
                          Specialization
                        </span>
                        <span className="font-medium text-foreground/90">
                          AI &amp; Data Science
                        </span>
                      </div>
                      <div className="h-px w-full bg-border/60" />
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground/70">College</span>
                        <span className="font-medium text-foreground/90">
                          SRGEC
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease, delay: 0.4 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {[
                      "Problem Solving",
                      "Full Stack Dev",
                      "Data Science",
                      "AI & ML",
                      "React & Next.js",
                      "Continuous Learning",
                    ].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease,
                          delay: 0.45 + i * 0.04,
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        className="rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-ring/40 hover:text-foreground/90"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
