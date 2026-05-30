"use client";

import { useEffect, useState } from "react";
import { IntroLoader } from "@/components/loader/IntroLoader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Keep it short so it feels premium without slowing the site.
    const t = window.setTimeout(() => setShowLoader(false), 1700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <IntroLoader show={showLoader} />
      {children}
    </>
  );
}

