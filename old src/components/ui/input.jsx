"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-none border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 px-4 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 focus-visible:border-zinc-950 dark:focus-visible:border-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-sans tracking-wide",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
