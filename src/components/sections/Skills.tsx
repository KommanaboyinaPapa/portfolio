"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

type SkillGroup = {
  title: string;
  items: string[];
};

const groups: SkillGroup[] = [
  { title: "Languages", items: ["JavaScript", "Java", "Python"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

type SkillProgress = {
  name: string;
  percent: number;
};

const progressSkills: SkillProgress[] = [
  { name: "React.js", percent: 90 },
  { name: "Next.js", percent: 85 },
  { name: "Node.js", percent: 85 },
  { name: "Express.js", percent: 80 },
  { name: "MongoDB", percent: 80 },
  { name: "MySQL", percent: 75 },
  { name: "JavaScript", percent: 90 },
  { name: "Java", percent: 75 },
  { name: "Python", percent: 80 },
  { name: "Tailwind CSS", percent: 85 },
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
      className="group relative overflow-hidden rounded-[2rem] border border-border bg-background/25 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-colors hover:border-ring/60"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground">
            {group.title.toUpperCase()}
          </p>
          <h3 className="mt-3 text-base font-semibold tracking-tight">
            {group.title}
          </h3>
        </div>

        <div className="mt-1 h-10 w-10 overflow-hidden rounded-2xl border border-border bg-background/20">
          <div className="h-full w-full rounded-2xl bg-gradient-to-br from-sky-400/25 via-violet-400/10 to-emerald-400/18 opacity-80" />
        </div>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-background/20 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProgressRow({
  skill,
  index,
}: {
  skill: SkillProgress;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease, delay: index * 0.03 }}
      className="group rounded-[2rem] border border-border bg-background/25 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-colors hover:border-ring/60"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold tracking-tight">{skill.name}</p>
        <p className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground">
          {skill.percent}%
        </p>
      </div>

      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-background/40">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.percent}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease, delay: 0.05 }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 shadow-[0_0_22px_rgba(56,189,248,0.25)]"
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span className="opacity-70 transition-opacity group-hover:opacity-100">
          Beginner
        </span>
        <span className="opacity-70 transition-opacity group-hover:opacity-100">
          Advanced
        </span>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium tracking-[0.25em] text-muted-foreground"
          >
            SKILLS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            A recruiter-friendly view of my skill stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.02 }}
            className="mt-6 text-pretty leading-7 text-muted-foreground"
          >
            Premium glass cards, modern hierarchy, and progress that animates
            on view.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {groups.map((group, idx) => (
                <SkillCard key={group.title} group={group} index={idx} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease }}
              className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/25 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                  PROFICIENCY
                </p>
                <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Animated progress
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Bars animate as you scroll — clean, professional motion.
                </p>
              </div>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
                {progressSkills.map((s, idx) => (
                  <ProgressRow key={s.name} skill={s} index={idx} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
