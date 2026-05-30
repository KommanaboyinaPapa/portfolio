"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

type Certificate = {
  title: string;
  issuer: string;
  tagline: string;
  gradient: string;
  glowFrom: string;
  glowTo: string;
  icon: React.ReactNode;
};

const certificates: Certificate[] = [
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    tagline: "AI fundamentals & responsible AI in CRM ecosystems",
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    glowFrom: "bg-sky-400/20",
    glowTo: "bg-indigo-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V12M3 7l9 5 9-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="8" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "NPTEL Certification",
    issuer: "IIT / NPTEL",
    tagline: "National programme on technology-enhanced learning",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    glowFrom: "bg-emerald-400/20",
    glowTo: "bg-cyan-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 19.5A2.5 2.5 0 016.5 17H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Internship Certificate",
    issuer: "Industry Experience",
    tagline: "Hands-on professional training & real-world projects",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
    glowFrom: "bg-violet-400/20",
    glowTo: "bg-fuchsia-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M12 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "ServiceNow Certified",
    issuer: "ServiceNow",
    tagline: "Cloud platform workflows & enterprise automation",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    glowFrom: "bg-amber-400/20",
    glowTo: "bg-rose-400/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 3a9 9 0 019 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function CertificateCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
      className="group relative"
    >
      {/* Animated border glow */}
      <div className="absolute -inset-px rounded-2xl opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`h-full w-full rounded-2xl bg-gradient-to-br ${cert.gradient} opacity-30`}
        />
      </div>

      {/* Card body */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-colors duration-300 hover:border-ring/60">
        {/* Hover glow orbs */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className={`absolute -left-20 -top-20 h-48 w-48 rounded-full ${cert.glowFrom} blur-3xl`}
          />
          <div
            className={`absolute -right-20 -bottom-20 h-48 w-48 rounded-full ${cert.glowTo} blur-3xl`}
          />
        </div>

        {/* Top row: icon + badge */}
        <div className="relative flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            {cert.icon}
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: index * 0.08 + 0.3 }}
            className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            <span className="text-[10px] font-medium tracking-wider text-emerald-400">
              VERIFIED
            </span>
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="relative mt-5 text-lg font-semibold tracking-tight transition-colors group-hover:text-white">
          {cert.title}
        </h3>

        {/* Issuer */}
        <p className="relative mt-1 text-xs font-medium tracking-wider text-muted-foreground/70">
          {cert.issuer}
        </p>

        {/* Divider with gradient */}
        <div className="relative mt-4 h-px w-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          <motion.div
            className={`absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r ${cert.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
            animate={{ x: ["-100%", "400%"] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>

        {/* Description */}
        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {cert.tagline}
        </p>

        {/* Bottom row */}
        <div className="relative mt-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/30 px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground/80">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-3 w-3 text-accent"
            >
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm11.78-1.72a.75.75 0 00-1.06-1.06L7.25 8.69 5.28 6.72a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-4z" />
            </svg>
            CREDENTIAL
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 py-16 sm:py-24">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
            CERTIFICATES
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Credentials that back the craft.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-4 text-pretty leading-7 text-muted-foreground"
          >
            Industry-recognized certifications validating expertise across AI,
            cloud platforms, and professional development.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, idx) => (
            <CertificateCard key={cert.title} cert={cert} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
