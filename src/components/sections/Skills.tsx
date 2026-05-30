"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  { title: "Languages", items: ["JavaScript", "Java", "Python"] },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind"],
  },
  { title: "Backend", items: ["Node.js", "Express"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

const ease = [0.22, 1, 0.36, 1] as const;

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-ring/60 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted-foreground">
            {group.title.toUpperCase()}
          </p>
          <h3 className="mt-2 text-base font-semibold tracking-tight">
            {group.title}
          </h3>
        </div>

        <div className="mt-1 h-9 w-9 rounded-xl border border-border bg-background/30">
          <div className="h-full w-full rounded-xl bg-gradient-to-br from-sky-400/25 via-transparent to-violet-400/20 opacity-80" />
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium tracking-widest text-muted-foreground"
          >
            SKILLS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            A toolkit for building production-ready apps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.02 }}
            className="mt-5 text-pretty leading-7 text-muted-foreground"
          >
            Organized by category, with subtle motion and hover states for a
            premium dark UI.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, idx) => (
            <SkillCard key={group.title} group={group} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}

