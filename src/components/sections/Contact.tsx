"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";

const ease = [0.22, 1, 0.36, 1] as const;

const phone = "9985825548";
const email = "papakommanaboyina@gmail.com";
const formspreeEndpoint = "https://formspree.io/f/xbdbbnlr";

// Update these when ready
const githubUrl: string = "https://github.com/KommanaboyinaPapa";
const linkedInUrl: string = "#";

export function Contact() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | null
  >(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const emailIsValid = useMemo(() => {
    if (!fromEmail.trim()) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail.trim());
  }, [fromEmail]);

  const validate = () => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!fromEmail.trim()) next.email = "Email is required.";
    else if (!emailIsValid) next.email = "Please enter a valid email.";
    if (!message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", name.trim());
      fd.append("email", fromEmail.trim());
      fd.append("message", message.trim());

      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully." });
        setName("");
        setFromEmail("");
        setMessage("");
        setErrors({});
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { errors?: Array<{ message?: string }> }
        | null;
      setStatus({
        type: "error",
        message:
          data?.errors?.[0]?.message ??
          "Could not send your message. Please try again.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease }}
          className="relative overflow-hidden rounded-[2.75rem] border border-border bg-background/25 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-violet-400/10"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                CONTACT
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something cinematic.
              </h2>
              <p className="mt-6 text-pretty leading-7 text-muted-foreground">
                Reach out anytime — I&apos;m happy to discuss opportunities,
                collaborations, or freelance work.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[2rem] border border-border bg-background/20 p-5 backdrop-blur-xl">
                  <p className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground">
                    PHONE
                  </p>
                  <a
                    href={`tel:${phone}`}
                    className="mt-2 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-foreground/90"
                  >
                    {phone}
                  </a>
                </div>

                <div className="rounded-[2rem] border border-border bg-background/20 p-5 backdrop-blur-xl">
                  <p className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground">
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

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${phone}`}
                  className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-foreground px-5 text-sm font-semibold text-background shadow-[0_30px_90px_-70px_rgba(56,189,248,0.9)] transition hover:opacity-95"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/12 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">Call Me</span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-border bg-background/35 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-ring/60 hover:bg-muted"
                >
                  Email Me
                </a>

                <Link
                  href={githubUrl}
                  aria-disabled={githubUrl === "#"}
                  tabIndex={githubUrl === "#" ? -1 : undefined}
                  className={[
                    "inline-flex h-12 w-full items-center justify-center rounded-2xl border border-border bg-background/25 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-ring/60 hover:bg-muted",
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
                    "inline-flex h-12 w-full items-center justify-center rounded-2xl border border-border bg-background/25 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition hover:border-ring/60 hover:bg-muted",
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

            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground">
                SEND A MESSAGE
              </p>
              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={[
                      "h-12 w-full rounded-2xl border bg-background/35 px-4 text-sm text-foreground outline-none backdrop-blur-xl transition",
                      errors.name ? "border-red-400/60" : "border-border",
                      "focus:border-ring/60 focus:ring-2 focus:ring-ring/20",
                    ].join(" ")}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name ? (
                    <p className="text-xs text-red-300/90">{errors.name}</p>
                  ) : null}
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    className={[
                      "h-12 w-full rounded-2xl border bg-background/35 px-4 text-sm text-foreground outline-none backdrop-blur-xl transition",
                      errors.email ? "border-red-400/60" : "border-border",
                      "focus:border-ring/60 focus:ring-2 focus:ring-ring/20",
                    ].join(" ")}
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                  {errors.email ? (
                    <p className="text-xs text-red-300/90">{errors.email}</p>
                  ) : null}
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-medium tracking-[0.25em] text-muted-foreground"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className={[
                      "w-full resize-none rounded-2xl border bg-background/35 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-xl transition",
                      errors.message ? "border-red-400/60" : "border-border",
                      "focus:border-ring/60 focus:ring-2 focus:ring-ring/20",
                    ].join(" ")}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message ? (
                    <p className="text-xs text-red-300/90">{errors.message}</p>
                  ) : null}
                </div>

                {status ? (
                  <div
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm backdrop-blur",
                      status.type === "success"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        : "border-red-400/30 bg-red-400/10 text-red-200",
                    ].join(" ")}
                    role="status"
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className={[
                    "group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-foreground px-5 text-sm font-semibold text-background shadow-[0_30px_90px_-70px_rgba(56,189,248,0.9)] transition hover:opacity-95",
                    submitting ? "cursor-not-allowed opacity-80" : "",
                  ].join(" ")}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/12 to-violet-400/0 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative">
                    {submitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
