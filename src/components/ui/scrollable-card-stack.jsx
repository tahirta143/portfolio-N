"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";
import { Badge } from "./badge";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * ScrollableCardStack — GSAP ScrollTrigger timeline scrubbed card stack.
 *
 * Direct GPU transform scrubbing via GSAP Timeline ensures 100% continuous,
 * frame-by-frame smooth animations when scrolling DOWN or UP.
 */
export function ScrollableCardStack({
  items = [],
  className,
  onCardChange,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const progressRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRefs = useRef([]);
  const touchStartY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  // Maps 0..1 progress to discrete card index
  const indexAtProgress = useCallback(
    (progress) => {
      if (!items || items.length === 0) return 0;
      if (progress <= 0) return 0;
      if (progress >= 1) return items.length - 1;
      const stepSize = 1 / items.length;
      const index = Math.floor(progress / stepSize);
      return Math.min(Math.max(index, 0), items.length - 1);
    },
    [items]
  );

  // Notify onCardChange callback when activeIndex changes
  useEffect(() => {
    if (onCardChange) {
      onCardChange(activeIndex);
    }
  }, [activeIndex, onCardChange]);

  // Setup GSAP Timeline scrubbed ScrollTrigger
  useEffect(() => {
    if (shouldReduceMotion || !items || items.length <= 1) return;
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const N = items.length;

      // Set initial transforms on all cards
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.set(el, {
          y: index * 24,
          scale: 1 - index * 0.04,
          opacity: index === 0 ? 1 : Math.max(0.2, 1 - index * 0.25),
          zIndex: N - index,
          transformOrigin: "center top",
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: desktop ? "top top" : "top 72%",
          end: desktop
            ? () => `+=${window.innerHeight * (N - 1) * 0.85}`
            : "bottom 40%",
          pin: desktop ? pin : false,
          pinSpacing: desktop,
          scrub: 0.6, // Smooth catch-up physics
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${Math.min(Math.max(self.progress, 0), 1)})`;
            }
            const progress = Math.min(Math.max(self.progress, 0), 1);
            const next = indexAtProgress(progress);
            setActiveIndex((current) => (current === next ? current : next));
          },
        },
      });

      // Construct timeline step transitions
      for (let step = 0; step < N - 1; step++) {
        const startTime = step;

        // Active card moves up off stack and fades out
        if (cardRefs.current[step]) {
          tl.to(
            cardRefs.current[step],
            {
              y: -180,
              scale: 0.95,
              opacity: 0,
              ease: "none",
            },
            startTime
          );
        }

        // Remaining cards move up 1 slot in stack
        for (let j = step + 1; j < N; j++) {
          const cardEl = cardRefs.current[j];
          if (!cardEl) continue;

          const targetOffset = j - (step + 1);
          const targetY = targetOffset * 24;
          const targetScale = 1 - targetOffset * 0.04;
          const targetOpacity = Math.max(0.2, 1 - targetOffset * 0.25);

          tl.to(
            cardEl,
            {
              y: targetY,
              scale: targetScale,
              opacity: targetOpacity,
              ease: "none",
            },
            startTime
          );
        }
      }

      triggerRef.current = tl.scrollTrigger;
    }, section);

    return () => {
      triggerRef.current = null;
      ctx.revert();
    };
  }, [shouldReduceMotion, items, indexAtProgress]);

  /** Programmatic navigation scrolling window to exact ratio position */
  const goToIndex = (index) => {
    const trigger = triggerRef.current;
    if (!trigger) {
      setActiveIndex(index);
      return;
    }
    const ratio = items.length > 1 ? index / (items.length - 1) : 0;
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * ratio,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      goToIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      goToIndex(activeIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToIndex(items.length - 1);
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY.current - touchEndY;

    if (Math.abs(diffY) > 30) {
      if (diffY > 0 && activeIndex < items.length - 1) {
        handleNext();
      } else if (diffY < 0 && activeIndex > 0) {
        handlePrev();
      }
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      aria-label="Scrollable card stack"
      className={cn("relative w-full border-t border-[#88a725]/10 bg-transparent select-none", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={pinRef}
        className="flex min-h-[100svh] flex-col justify-center px-4 py-12 lg:py-0 w-full"
      >
        <div className="mx-auto w-full max-w-5xl flex flex-col items-center">
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Card {activeIndex + 1} of {items.length} selected.
          </div>

          {/* Stack Container */}
          <div
            tabIndex={0}
            role="application"
            aria-label="Experience Cards Stack Container."
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-5xl min-h-[520px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#88a725] p-2 cursor-ns-resize"
          >
            <div className="relative w-full h-full min-h-[480px]">
              {items.map((item, index) => {
                const isTop = index === activeIndex;

                return (
                  <div
                    key={item.id || index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    role="region"
                    aria-label={`Experience Card ${index + 1}: ${item.role}`}
                    aria-hidden={!isTop}
                    onClick={() => {
                      if (index !== activeIndex) {
                        goToIndex(index);
                      }
                    }}
                    className={cn(
                      "absolute inset-x-0 top-0 p-8 md:p-12 rounded-[36px] border bg-white/90 dark:bg-black/90 backdrop-blur-3xl transition-colors duration-300 shadow-2xl will-change-transform",
                      isTop
                        ? "border-[#88a725] ring-2 ring-[#88a725]/30 pointer-events-auto"
                        : "border-[#88a725]/20 pointer-events-auto cursor-pointer opacity-60 hover:opacity-80"
                    )}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#88a725]/20 pb-6 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 border border-[#88a725] bg-[#88a725] text-white flex items-center justify-center rounded-full">
                            <Briefcase className="h-4 w-4" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-zinc-950 dark:text-white">
                            {item.role}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-sans mt-2">
                          <span className="font-bold text-zinc-900 dark:text-zinc-100">{item.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-[#88a725]" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#88a725] text-white text-xs font-bold uppercase tracking-widest rounded-full self-start sm:self-center shadow-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="text-zinc-700 dark:text-zinc-300 font-sans text-sm md:text-base leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <div className="space-y-3 mb-8">
                        {item.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs md:text-sm font-sans text-zinc-700 dark:text-zinc-300">
                            <ChevronRight className="h-4 w-4 text-[#88a725] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.skills && (
                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#88a725]/15">
                        {item.skills.map((s, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-full">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="absolute top-6 right-6 text-xs font-mono font-bold text-[#88a725] uppercase tracking-widest bg-[#88a725]/10 px-3 py-1 rounded-full border border-[#88a725]/30">
                      0{index + 1} / 0{items.length}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scrubbed Progress Bar */}
          <div className="w-full max-w-5xl mt-4 h-1 rounded-full bg-[#88a725]/15 overflow-hidden">
            <span
              ref={progressRef}
              aria-hidden
              className="block h-full origin-left scale-x-0 bg-[#88a725] transition-transform duration-75"
              style={shouldReduceMotion ? { transform: `scaleX(${(activeIndex + 1) / items.length})` } : undefined}
            />
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous card"
                className="p-3 border border-[#88a725] bg-[#88a725] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:border-black transition-all duration-300 cursor-pointer rounded-full shadow-md"
              >
                <ChevronUp className="h-5 w-5" />
              </motion.button>
              <span className="text-xs font-mono uppercase tracking-widest text-[#88a725] font-bold">
                0{activeIndex + 1} / 0{items.length}
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                disabled={activeIndex === items.length - 1}
                aria-label="Next card"
                className="p-3 border border-[#88a725] bg-[#88a725] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:border-black transition-all duration-300 cursor-pointer rounded-full shadow-md"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Tablist Indicator Dots */}
            <div role="tablist" aria-label="Experience card pagination" className="flex items-center gap-2">
              {items.map((_, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={isSelected}
                    aria-label={`Go to card ${idx + 1} of ${items.length}`}
                    onClick={() => goToIndex(idx)}
                    className={`h-2.5 transition-all duration-300 cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#88a725] ${
                      isSelected
                        ? "w-8 bg-[#88a725]"
                        : "w-2.5 bg-[#88a725]/30 hover:bg-black dark:hover:bg-white"
                    }`}
                  />
                );
              })}
            </div>

            <p className="text-xs uppercase tracking-widest text-[#88a725] font-bold">
              Scroll page to cycle through cards or use controls
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollableCardStack;


