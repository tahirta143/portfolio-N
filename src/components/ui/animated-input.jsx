"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedInput({
  label,
  id,
  type = "text",
  value = "",
  onChange,
  required = false,
  placeholder = "",
  icon: Icon,
  className,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const hasValue = value !== undefined && value !== null && String(value).length > 0;
  const isFloating = isFocused || hasValue;
  const showIcon = isFocused || hasValue;

  return (
    <div className={cn("relative w-full pt-4", className)}>
      <div
        className={cn(
          "relative flex items-center w-full border bg-white/80 dark:bg-black/80 backdrop-blur-2xl transition-all duration-300 rounded-2xl",
          isFocused
            ? "border-[#0A66C2] ring-2 ring-[#0A66C2]/40"
            : "border-[#0A66C2]/30 hover:border-[#0A66C2]"
        )}
      >
        <AnimatePresence>
          {Icon && showIcon && (
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6, x: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pl-4 pr-1 text-[#0A66C2] flex items-center justify-center shrink-0"
            >
              <Icon className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          aria-label={label || props["aria-label"]}
          placeholder={isFocused ? placeholder : ""}
          className="w-full h-12 px-4 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none font-sans tracking-wide"
          {...props}
        />

        {label && (
          <motion.label
            htmlFor={id}
            initial={false}
            animate={{
              y: isFloating ? -26 : 0,
              x: 0,
              scale: isFloating ? 0.82 : 1,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
            }
            className={cn(
              "absolute left-4 pointer-events-none font-sans uppercase tracking-widest text-xs font-bold transition-colors origin-left",
              isFloating
                ? "text-[#0A66C2] bg-white dark:bg-black px-1.5 rounded-md z-10"
                : "text-zinc-500 dark:text-zinc-400"
            )}
          >
            {label} {required && <span className="text-[#0A66C2]">*</span>}
          </motion.label>
        )}
      </div>
    </div>
  );
}

export function AnimatedTextarea({
  label,
  id,
  value = "",
  onChange,
  required = false,
  placeholder = "",
  icon: Icon,
  className,
  rows = 4,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const hasValue = value !== undefined && value !== null && String(value).length > 0;
  const isFloating = isFocused || hasValue;
  const showIcon = isFocused || hasValue;

  return (
    <div className={cn("relative w-full pt-4", className)}>
      <div
        className={cn(
          "relative flex w-full border bg-white/80 dark:bg-black/80 backdrop-blur-2xl transition-all duration-300 rounded-2xl",
          isFocused
            ? "border-[#0A66C2] ring-2 ring-[#0A66C2]/40"
            : "border-[#0A66C2]/30 hover:border-[#0A66C2]"
        )}
      >
        <AnimatePresence>
          {Icon && showIcon && (
            <motion.div
              aria-hidden="true"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.6, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6, x: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 pl-4 pr-1 text-[#0A66C2] shrink-0"
            >
              <Icon className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>

        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={rows}
          aria-label={label || props["aria-label"]}
          placeholder={isFocused ? placeholder : ""}
          className="w-full p-4 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none font-sans tracking-wide resize-y"
          {...props}
        />

        {label && (
          <motion.label
            htmlFor={id}
            initial={false}
            animate={{
              y: isFloating ? -26 : 4,
              x: 0,
              scale: isFloating ? 0.82 : 1,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
            }
            className={cn(
              "absolute left-4 top-4 pointer-events-none font-sans uppercase tracking-widest text-xs font-bold transition-colors origin-left",
              isFloating
                ? "text-[#0A66C2] bg-white dark:bg-black px-1.5 rounded-md z-10"
                : "text-zinc-500 dark:text-zinc-400"
            )}
          >
            {label} {required && <span className="text-[#0A66C2]">*</span>}
          </motion.label>
        )}
      </div>
    </div>
  );
}

export default AnimatedInput;
