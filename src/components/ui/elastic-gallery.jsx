"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function ElasticGallery({ items, onProjectClick }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? null);

  return (
    <div
      className="mx-auto flex h-[360px] w-full flex-col gap-2 md:h-[420px] md:flex-row md:gap-3"
      onMouseLeave={() => setActiveId(items?.[0]?.id ?? null)}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => {
              setActiveId(item.id);
              onProjectClick?.(item);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveId(item.id);
                onProjectClick?.(item);
              }
            }}
            role="button"
            tabIndex={0}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-[28px] border",
              "border-[#0A66C2]/20 bg-zinc-100 dark:bg-zinc-950",
              // Elastic accordion transition
              "transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
              isActive ? "flex-[5]" : "flex-[1]"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 85vw, 1400px"
                className={cn(
                  "object-cover transition-all duration-700",
                  isActive
                    ? "scale-100 brightness-50"
                    : "scale-110 brightness-[0.35] grayscale"
                )}
              />
            </div>

            {/* Blue accent line on active */}
            <div
              className={cn(
                "absolute top-0 left-0 h-[3px] bg-[#0A66C2] transition-all duration-700",
                isActive ? "w-full" : "w-0"
              )}
            />

            {/* ── ACTIVE CONTENT ── */}
            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-end p-5 md:p-8 transition-all duration-500",
                isActive
                  ? "opacity-100 translate-y-0 delay-200"
                  : "opacity-0 translate-y-6 pointer-events-none"
              )}
            >
              {/* Category badge */}
              <span className="self-start mb-3 rounded-full border border-[#0A66C2] bg-[#0A66C2] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-bold uppercase leading-tight text-white mb-2">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-base sm:text-xs text-zinc-300 font-sans mb-4 leading-relaxed line-clamp-2 max-w-xs">
                {item.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {item.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => e.stopPropagation()}
                  className="group flex items-center gap-1.5 rounded-full bg-[#0A66C2] hover:bg-black border border-[#0A66C2] hover:border-black px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300"
                >
                  <span>Book a Call</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="#services"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 rounded-full border border-white/30 hover:border-[#0A66C2] hover:bg-[#0A66C2] bg-white/10 backdrop-blur-sm px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300"
                >
                  <GitBranch className="h-3 w-3" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>

            {/* ── INACTIVE CONTENT: Vertical title ── */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-500",
                isActive
                  ? "opacity-0 scale-75 pointer-events-none"
                  : "opacity-100 delay-300"
              )}
            >
              {/* Desktop: vertical text */}
              <span className="hidden md:block whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-white [writing-mode:vertical-rl] rotate-180">
                {item.title}
              </span>
              {/* Mobile: short number */}
              <span className="block md:hidden text-xs font-bold text-white/70 uppercase tracking-widest">
                {item.id}
              </span>
            </div>

            {/* Bottom index number */}
            <div className="absolute top-4 right-4 text-[11px] font-mono font-bold text-white/30 uppercase tracking-widest">
              {String(items.indexOf(item) + 1).padStart(2, "0")}
            </div>
          </div>
        );
      })}
    </div>
  );
}
