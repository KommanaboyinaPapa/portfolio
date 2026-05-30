"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: [0.21, 1, 0.21, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

