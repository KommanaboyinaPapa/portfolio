"use client";

import { Container } from "@/components/layout/Container";

const email = "papakommanaboyina@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
      </Container>
    </footer>
  );
}

