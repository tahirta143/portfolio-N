"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-none border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 text-zinc-900 dark:text-zinc-100 backdrop-blur-md transition-all duration-300",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
