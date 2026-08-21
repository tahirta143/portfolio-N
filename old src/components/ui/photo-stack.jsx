"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Layers } from "lucide-react";

export function PhotoStack({
  photos = [],
  onCycle,
  className,
  width = 320,
  height = 380,
  showCaption = true,
}) {
  const [deck, setDeck] = useState(photos);
  const shouldReduceMotion = useReducedMotion();

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 200], [-15, 15]);
  const opacity = useTransform(dragX, [-220, -100, 0, 100, 220], [0.4, 0.9, 1, 0.9, 0.4]);

  const cycleCard = () => {
    setDeck((prevDeck) => {
      if (prevDeck.length <= 1) return prevDeck;
      const newDeck = [...prevDeck.slice(1), prevDeck[0]];
      if (onCycle) onCycle(newDeck);
      return newDeck;
    });
  };

  const handleDragEnd = (event, info) => {
    const offset = Math.hypot(info.offset.x, info.offset.y);
    const velocity = Math.hypot(info.velocity.x, info.velocity.y);

    if (offset > 90 || velocity > 400) {
      cycleCard();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      cycleCard();
    }
  };

  if (!deck || deck.length === 0) return null;

  return (
    <div className={cn("relative flex flex-col items-center select-none", className)}>
      <div
        className="relative"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {deck.map((photo, index) => {
          const isTop = index === 0;
          const offsetY = index * 14;
          const scale = 1 - index * 0.05;
          const zIndex = deck.length - index;

          return (
            <motion.div
              key={photo.id || index}
              style={{
                zIndex,
                ...(isTop && !shouldReduceMotion ? { x: dragX, y: dragY, rotate, opacity } : {}),
              }}
              animate={{
                top: `${offsetY}px`,
                scale,
                transition: { type: "spring", stiffness: 320, damping: 25 },
              }}
              drag={isTop && !shouldReduceMotion}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.7}
              onDragEnd={isTop ? handleDragEnd : undefined}
              onClick={isTop ? cycleCard : undefined}
              onKeyDown={isTop ? handleKeyDown : undefined}
              tabIndex={isTop ? 0 : -1}
              role={isTop ? "button" : undefined}
              aria-label={isTop ? `Cycle photo: ${photo.name || photo.title || photo.alt || "Photo"}` : undefined}
              aria-hidden={!isTop}
              className={cn(
                "absolute inset-0 rounded-none border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100 transition-colors",
                isTop ? "border-zinc-950 dark:border-zinc-300 hover:border-zinc-700 dark:hover:border-zinc-100" : "pointer-events-none"
              )}
            >
              <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt || photo.name || photo.title || "Photo card"}
                  className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 hover:grayscale-0 hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {!isTop && (
                  <div
                    className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[1px]"
                    aria-hidden="true"
                  />
                )}

                {isTop && showCaption && (photo.name || photo.title || photo.role || photo.subtitle) && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/90 dark:bg-zinc-950/90 border-t border-zinc-200 dark:border-zinc-800 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold uppercase text-zinc-950 dark:text-white tracking-wider">
                        {photo.name || photo.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans tracking-wide mt-0.5">
                        {photo.role || photo.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-zinc-700 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-1">
                      <Layers className="h-3 w-3" />
                      <span>{deck.length} Photos</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-semibold">
        <span>Drag card or press Space to cycle stack</span>
        <ArrowRight className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-400" />
      </div>
    </div>
  );
}

export default PhotoStack;
