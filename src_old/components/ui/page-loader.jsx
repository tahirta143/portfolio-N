"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

export function PageLoader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Framer Motion animate — smooth linear interpolation every frame
    const controls = animate(0, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate(value) {
        setCount(Math.round(value));
      },
      onComplete() {
        setCount(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 700);
        }, 300);
      },
    });
    return () => controls.stop();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#88a725 1px, transparent 1px), linear-gradient(90deg, #88a725 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Radial glow behind counter */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
            className="absolute w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(136,167,37,0.22) 0%, transparent 70%)",
            }}
          />

          {/* Brand name - top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#88a725] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-semibold font-sans">
              M Tahir — Portfolio
            </span>
            <span className="h-2 w-2 rounded-full bg-[#88a725] animate-pulse" />
          </motion.div>

          {/* Main counter */}
          <div className="relative flex flex-col items-center gap-6 z-10">
            {/* Big number */}
            <div className="relative">
              {/* Shadow / echo digit behind */}
              <span
                className="absolute inset-0 text-[6rem] sm:text-[7rem] font-bold text-[#88a725]/10 leading-none font-sans select-none blur-sm"
                aria-hidden="true"
              >
                {count}
              </span>
              <motion.span
                className="relative text-[6rem] sm:text-[7rem] font-bold leading-none font-sans text-white tabular-nums"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {count}
              </motion.span>
            </div>

            {/* Percent label */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#88a725]/40" />
              <span className="text-[#88a725] text-xs font-bold uppercase tracking-[0.3em] font-sans">
                Loading
              </span>
              <div className="h-px w-12 bg-[#88a725]/40" />
            </div>

            {/* Progress bar */}
            <div className="w-64 sm:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#88a725] rounded-full origin-left"
                style={{ scaleX: count / 100 }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Segment ticks */}
            <div className="flex gap-1.5 mt-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-[3px] rounded-full transition-colors duration-150"
                  style={{
                    backgroundColor:
                      i < Math.floor(count / 5)
                        ? "#88a725"
                        : "rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom status text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute bottom-10 text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-sans"
          >
            Initializing experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
