"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#88a725] text-white border-[#88a725] hover:bg-black hover:border-black",
        secondary:
          "bg-white/80 dark:bg-black/80 text-zinc-900 dark:text-zinc-100 border-[#88a725]/30 hover:border-[#88a725] backdrop-blur-md",
        destructive:
          "bg-red-500 text-white border-red-500 hover:bg-black hover:border-black",
        outline:
          "border-[#88a725] text-[#88a725] bg-transparent hover:bg-black hover:text-white hover:border-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, children, ...props }) {
  return (
    <motion.div
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="inline-block"
    >
      <div className={cn(badgeVariants({ variant }), className)} {...props}>
        {children}
      </div>
    </motion.div>
  );
}

export { Badge, badgeVariants };
