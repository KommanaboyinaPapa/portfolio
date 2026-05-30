"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

type ExperienceItem = {
  title: string;
  company?: string;
  subtitle?: string;
};

const items: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "Adverk",
  },
  {
    title: "AI and Machine Learning Intern",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative pl-10 sm:pl-12">
      {/* Line */}
      {!isLast ? (
        <div className="absolute left-[14px] top-10 h-[calc(100%-22px)] w-px bg-border/80 sm:left-[18px]" />
      ) : null}

      {/* Dot */}
      <motion.div
        className="absolute left-[9px] top-6 h-4 w-4 rounded-full border border-border bg-background shadow-[0_0_0_6px_rgba(255,255,255,0.02)] sm:left-[13px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease, delay: index * 0.05 }}
      >
        <div className="h-full w-full rounded-full bg-gradient-to-br from-sky-400/40 via-violet-400/15 to-emerald-400/30" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease, delay: index * 0.05 }}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-ring/60 sm:p-6"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-sky-400/12 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-violet-400/12 blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-2">
          <p className="text-xs font-medium tracking-widest text-muted-foreground">
            EXPERIENCE {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {item.title}
          </h3>
          {item.company ? (
            <p className="text-sm text-muted-foreground">{item.company}</p>
          ) : (
            <p className="text-sm text-muted-foreground">Internship</p>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {(item.title.includes("Web")
              ? ["MERN", "Frontend", "Backend"]
              : ["Machine Learning", "AI", "Data"]
            ).map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium tracking-widest text-muted-foreground"
          >
            EXPERIENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            A timeline of roles and learning.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.02 }}
            className="mt-5 text-pretty leading-7 text-muted-foreground"
          >
            Highlighted internships with a clean, animated vertical timeline.
          </motion.p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5">
          {items.map((item, idx) => (
            <TimelineItem
              key={`${item.title}-${idx}`}
              item={item}
              index={idx}
              isLast={idx === items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

