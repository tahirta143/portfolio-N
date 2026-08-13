"use client";

import React, { useState } from "react";
import { ScrollableCardStack } from "./ui/scrollable-card-stack";
import { Badge } from "./ui/badge";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "exp-1",
    role: "Lead Frontend Architect",
    company: "Apex Digital Systems",
    location: "San Francisco, CA (Remote)",
    period: "2023 — Present",
    description: "Architected enterprise Next.js App Router applications, reduced bundle load times by 48%, and directed a team of 12 frontend engineers across 4 timezones.",
    achievements: [
      "Designed and deployed monolithic design system used by 50+ micro-frontend services.",
      "Implemented Framer Motion animations for high-frequency trading dashboards.",
      "Engineered automated CI/CD pipeline achieving 99.98% deployment uptime.",
    ],
    skills: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "TypeScript", "Jest"],
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Engineer",
    company: "Quantum Labs Interactive",
    location: "New York, NY",
    period: "2021 — 2023",
    description: "Spearheaded frontend development for real-time collaborative web applications, integrating WebSockets and canvas rendering engines.",
    achievements: [
      "Optimized rendering pipeline reducing layout shifts (CLS) to 0.001 across all web pages.",
      "Architected server-side streaming features utilizing Node.js and Redis pub/sub.",
      "Mentored junior developers and instituted code review standards.",
    ],
    skills: ["React", "Node.js", "GraphQL", "WebSockets", "Docker", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    role: "UI/UX Software Engineer",
    company: "Vanguard Tech Cloud",
    location: "Austin, TX",
    period: "2019 — 2021",
    description: "Developed customer-facing dashboard tools, custom analytics charts, and responsive UI components for cloud analytics platform.",
    achievements: [
      "Rebuilt core marketing engine resulting in 35% increase in user signups.",
      "Authored custom component library with full WCAG AAA accessibility compliance.",
    ],
    skills: ["JavaScript", "React", "CSS Modules", "Webpack", "REST APIs"],
  },
  {
    id: "exp-4",
    role: "Frontend Developer",
    company: "Hyperion Media Agency",
    location: "Remote",
    period: "2017 — 2019",
    description: "Built custom client websites, interactive web animations, and e-commerce solutions for global brands.",
    achievements: [
      "Delivered 25+ responsive websites under strict client deadlines.",
      "Pioneered SVG animation pipelines for high-conversion landing pages.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "GSAP", "WordPress"],
  },
];

export function ExperienceSection() {
  const [viewMode, setViewMode] = useState("stack");

  return (
    <section
      id="experience"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="outline" className="mb-3 rounded-full">
              02 // CAREER TIMELINE &amp; STACK
            </Badge>
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
            >
              PROFESSIONAL EXPERIENCE
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light">
              Interactive Scrollable Card Stack — snap-scroll or use keyboard arrow keys to navigate.
            </p>
            <div className="h-1 w-24 bg-[#88a725] mt-4 rounded-full" />
          </div>

          <div className="ios-segmented-control flex items-center">
            <button
              onClick={() => setViewMode("stack")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full ${
                viewMode === "stack"
                  ? "bg-[#88a725] text-white shadow-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              }`}
            >
              Stacked View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full ${
                viewMode === "grid"
                  ? "bg-[#88a725] text-white shadow-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              }`}
            >
              List View
            </button>
          </div>
        </FadeUp>

        {viewMode === "stack" ? (
          <ScrollableCardStack items={experiences} />
        ) : (
          <StaggerContainer className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={motionItem}
                className="p-8 border border-[#88a725]/20 bg-white/80 dark:bg-black/80 backdrop-blur-2xl space-y-4 rounded-[32px]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#88a725]/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-zinc-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase px-3.5 py-1 bg-[#88a725] text-white rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#88a725]/10">
                  {exp.skills.map((s, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[11px]">
                      {s}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
