"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "./icons";
import { Badge } from "./badge";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function ProjectAccordionCard({ project, isExpanded, onHover }) {
  return (
    <motion.div
      layout
      onMouseEnter={onHover}
      onClick={onHover}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "relative overflow-hidden rounded-[32px] border bg-white/80 dark:bg-black/80 backdrop-blur-2xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full min-h-[460px]",
        isExpanded
          ? "flex-[3.5] border-[#88a725] ring-1 ring-[#88a725]/30"
          : "flex-1 border-[#88a725]/20 hover:border-[#88a725] opacity-90 hover:opacity-100"
      )}
    >
      {/* Background Image Container */}
      <div className={cn("relative h-full transition-all duration-500 overflow-hidden", isExpanded ? "w-full md:w-1/2" : "w-full h-full")}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="default" className="bg-[#88a725] text-white border-[#88a725] hover:bg-black hover:border-black rounded-full px-3">
            {project.category}
          </Badge>
        </div>

        {/* Arrow Indicator Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full border border-[#88a725] bg-[#88a725] text-white flex items-center justify-center transition-all duration-300 hover:bg-black hover:border-black"
        >
          <ArrowUpRight className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-45")} />
        </motion.div>

        {/* Vertical title preview when compact */}
        {!isExpanded && (
          <div className="absolute bottom-6 left-6 right-6 hidden md:block">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-[#88a725] font-sans font-semibold tracking-wide mt-1 line-clamp-1">
              {project.subtitle}
            </p>
          </div>
        )}
      </div>

      {/* Expanded Content Panel */}
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white/80 dark:bg-black/80 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2 text-[10px] bg-[#88a725]/15 text-[#88a725] border-[#88a725]/30">
                  FEATURED SYSTEM SPEC
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-[#88a725] uppercase tracking-widest font-bold mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans font-light border-t border-[#88a725]/15 pt-3">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="space-y-1.5 pt-1">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                      <Check className="h-3.5 w-3.5 text-[#88a725] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-[#88a725] font-bold mb-2">Tech Architecture</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[11px] py-0.5 rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-6 border-t border-[#88a725]/15 mt-4">
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="default"
                  className="gap-2 text-xs rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, "_blank");
                  }}
                >
                  <span>Live Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, "_blank");
                  }}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Source Code</span>
                </Button>
              )}
            </div>
          </motion.div>
        ) : (
          <div className="p-4 md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-2xl">
            <h3 className="text-lg font-bold uppercase text-zinc-950 dark:text-white">
              {project.title}
            </h3>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
