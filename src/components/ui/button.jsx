"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88a725] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-[#88a725] text-white border border-[#88a725]",
        destructive:
          "bg-red-600 text-white border border-red-600",
        outline:
          "border border-[#88a725] text-[#88a725] bg-transparent",
        secondary:
          "bg-white/80 dark:bg-black/80 text-zinc-900 dark:text-zinc-100 border border-[#88a725]/30 backdrop-blur-md",
        ghost:
          "text-zinc-900 dark:text-zinc-100",
        link:
          "text-[#88a725] underline-offset-4 hover:underline p-0 h-auto font-semibold overflow-visible",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-13 px-8 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, onClick, children, ...props }, ref) => {
    // For the "link" variant don't add the sliding overlay
    const isLink = variant === "link" || variant === "ghost";

    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {/* Left-to-right black fill overlay on hover */}
        {!isLink && (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
          />
        )}

        {/* Content sits above the overlay */}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
