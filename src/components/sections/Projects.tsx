"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

type Project = {
  title: string;
  description: string;
  highlights?: string[];
  live?: string;
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "StackOverflow Clone",
    description:
      "A feature-rich Q&A platform clone with payments, multilingual support, and advanced authentication flows.",
    featured: true,
    live: "https://stackoverflow-clone-khaki-tau.vercel.app",
    github: "https://github.com/KommanaboyinaPapa/stackoverflow-clone",
    highlights: [
      "Social feed",
      "OTP",
      "Razorpay",
      "Rewards",
      "Multi-language",
      "Login history",
    ],
  },
  {
    title: "QuickBite Food Ordering Platform",
    description:
      "A modern food ordering platform focused on fast browsing, smooth checkout, and clean UX.",
    highlights: ["Menus", "Cart & checkout", "Order tracking", "Responsive UI"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function ExternalButton({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-95"
      : "border border-border bg-card text-foreground hover:bg-muted";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-sky-400/14 blur-3xl" />
        <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-violet-400/14 blur-3xl" />
      </div>

      <div className="relative grid gap-0 lg:grid-cols-12">
        {/* Visual block */}
        <div className="relative lg:col-span-5">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/15 via-transparent to-violet-400/15" />
          <div className="relative flex h-full min-h-[220px] flex-col justify-end p-6 sm:p-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground">
              FEATURED
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
            </div>
            <div className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </div>
            <div className="mt-2 text-sm leading-6 text-muted-foreground">
              Premium build • scalable UI • production-ready
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative lg:col-span-7">
          <div className="p-6 sm:p-8">
            <p className="text-pretty leading-7 text-muted-foreground">
              {project.description}
            </p>

            {project.highlights?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              {project.live ? (
                <ExternalButton href={project.live} variant="primary">
                  Live
                </ExternalButton>
              ) : null}
              {project.github ? (
                <ExternalButton href={project.github}>GitHub</ExternalButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-ring/60"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative">
        <p className="text-xs font-medium tracking-widest text-muted-foreground">
          PROJECT
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        {project.highlights?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.highlights.slice(0, 4).map((h) => (
              <span
                key={h}
                className="rounded-full border border-border/80 bg-background/35 px-3 py-1 text-xs text-muted-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-xs font-medium tracking-widest text-muted-foreground"
          >
            PROJECTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Selected work with clean UI and scale-first thinking.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.02 }}
            className="mt-5 text-pretty leading-7 text-muted-foreground"
          >
            Premium cards, subtle motion, and a featured spotlight for the best
            project.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-5">
          {featured ? <FeaturedProjectCard project={featured} /> : null}

          {rest.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((p, idx) => (
                <ProjectCard key={p.title} project={p} index={idx} />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

