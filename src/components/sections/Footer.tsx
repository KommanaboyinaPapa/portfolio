"use client";

import { Container } from "@/components/layout/Container";

const email = "papakommanaboyina@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-12">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/35 backdrop-blur-xl">
              <span className="bg-gradient-to-br from-sky-400/25 via-violet-400/10 to-emerald-400/15 bg-clip-text text-sm font-semibold tracking-tight text-transparent">
                PK
              </span>
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                PAPA • Developer
              </p>
              <p className="text-xs text-muted-foreground">
                Cinematic portfolio • recruiter-ready
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Papa Kommanaboyina
            </p>
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
            >
              Email: {email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
