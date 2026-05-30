"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/10 via-violet-400/10 to-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] left-[-160px] h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-160px] h-[560px] w-[560px] rounded-full bg-violet-400/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.06 },
              },
            }}
            className="md:col-span-7 text-center md:text-left"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium tracking-widest text-muted-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:mx-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease }}
              className="mt-6 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl"
            >
              PAPA KOMMANABOYINA
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg md:mx-0"
            >
              Full Stack Developer | MERN Developer | AI &amp; DS Student
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:items-start md:justify-start"
            >
              <Link
                href="#projects"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-[0_20px_60px_-35px_rgba(56,189,248,0.6)] transition hover:opacity-95 sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">View Projects</span>
              </Link>

              <Link
                href="#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto"
              >
                Contact Me
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-background/50 px-6 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.9, ease }}
              className="mt-14 flex items-center justify-center md:justify-start"
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-5 flex items-center justify-center md:justify-end"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating glow ring */}
              <motion.div
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-sky-400/20 via-violet-400/20 to-emerald-400/20 blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              />

              <div className="relative rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 p-[2px] shadow-[0_20px_70px_-40px_rgba(56,189,248,0.8)]">
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-background sm:h-64 sm:w-64 md:h-80 md:w-80">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Papa Kommanaboyina profile photo"
                    fill
                    priority
                    sizes="(min-width: 768px) 320px, 256px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
