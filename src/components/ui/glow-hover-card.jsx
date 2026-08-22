"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowHoverCard({
  children,
  className,
  contentClassName,
  glowColor = "210 90% 55%",
}) {
  const cardRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (reducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.setProperty("--mouse-x", "-200px");
    cardRef.current.style.setProperty("--mouse-y", "-200px");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      className={cn(
        "group relative rounded-[32px] p-[1px]",
        "bg-transparent",
        "transition-transform duration-300",
        "hover:-translate-y-0.5",
        className
      )}
      style={{
        "--mouse-x": "-200px",
        "--mouse-y": "-200px",
        "--glow-color": glowColor,
      }}
    >
      {/* Cursor-following MASKED BORDER GLOW */}
      {!reducedMotion && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            rounded-[32px]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            will-change-[mask-image]
          "
          style={{
            background: `hsl(${glowColor})`,
            WebkitMaskImage: `
              radial-gradient(
                180px circle at var(--mouse-x) var(--mouse-y),
                black 0%,
                transparent 70%
              )
            `,
            maskImage: `
              radial-gradient(
                180px circle at var(--mouse-x) var(--mouse-y),
                black 0%,
                transparent 70%
              )
            `,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />
      )}

      {/* CARD SURFACE */}
      <div
        className={cn(
          "relative z-10 h-full overflow-hidden rounded-[31px] border border-[#0A66C2]/20 bg-white/75 p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-black/75",
          contentClassName
        )}
      >
        {/* Very subtle inner glow */}
        {!reducedMotion && (
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
            style={{
              background: `
                radial-gradient(
                  250px circle at var(--mouse-x) var(--mouse-y),
                  hsl(${glowColor} / 0.08),
                  transparent 70%
                )
              `,
            }}
          />
        )}

        {/* CONTENT */}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}