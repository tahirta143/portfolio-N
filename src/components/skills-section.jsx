"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Sparkles, Code2, Cpu, ShieldCheck } from "lucide-react";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";

const highlights = [
  {
    icon: Code2,
    title: "Next.js & SSR Architecture",
    description:
      "Expertise in Next.js App Router, Server Actions, Edge Runtime, ISR caching, and hybrid rendering strategies for sub-second page delivery.",
  },
  {
    icon: Cpu,
    title: "Design Systems & Token Standards",
    description:
      "Architecting modular, atomic design systems with Tailwind CSS, Framer Motion, and accessible WAI-ARIA primitives for scalable team workflows.",
  },
  {
    icon: Sparkles,
    title: "UI Motion & Micro-Interactions",
    description:
      "Crafting 60fps physics-based animations, scroll-driven transitions, and interactive canvas primitives that enchant users without layout shift.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Standards & Rigor",
    description:
      "Enforcing clean code practices, zero Lighthouse performance regression, automated CI/CD deployment pipelines, and thorough unit/E2E test suites.",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            05 // ENGINEERING STANDARDS
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white">
            CORE TECHNICAL HIGHLIGHTS
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light max-w-xl">
            Architectural principles and technical standards applied across every client project.
          </p>
          <div className="h-1 w-24 bg-[#88a725] mt-4 rounded-full" />
        </FadeUp>

        {/* Highlights Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={motionItem}>
                <div className="h-full p-8 bg-white/75 dark:bg-black/75 border border-[#88a725]/25 backdrop-blur-2xl rounded-[32px] space-y-4 hover:border-[#88a725] transition-all duration-300 group shadow-lg">
                  <div className="h-12 w-12 border border-[#88a725] bg-[#88a725] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
