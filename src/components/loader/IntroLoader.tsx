"use client";

import { AnimatePresence, motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function IntroLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          aria-label="Intro loader"
        >
          {/* Premium animated glow */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease }}
            aria-hidden="true"
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-400/18 via-violet-400/14 to-emerald-400/14 blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
          </motion.div>

          <motion.div
            className="relative mx-auto flex max-w-[92vw] flex-col items-center text-center"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease }}
          >
            <motion.div
              className="mb-6 h-1 w-44 overflow-hidden rounded-full bg-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
            >
              <motion.div
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              />
            </motion.div>

            <div className="text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
              PAPA KOMMANABOYINA
            </div>
            <div className="mt-3 text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
              Full Stack Developer
            </div>

            <motion.div
              className="mt-8 text-xs font-medium tracking-widest text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
            >
              LOADING
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

