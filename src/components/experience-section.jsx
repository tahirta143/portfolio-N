"use client";

import React, { useState } from "react";
import { ScrollableCardStack } from "./ui/scrollable-card-stack";
import { Badge } from "./ui/badge";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";
import { motion } from "framer-motion";

const experiences = [
  {
    id: "exp-1",
    role: "Senior GoHighLevel Automation Specialist",
    company: "Senior Select LLC",
    location: "Remote",
    period: "Mar 2026 — Present",
    description: "Working on advanced GoHighLevel systems including CRM automation, workflows, funnels, lead management, and customer communication. Focused on building reliable automation processes that improve efficiency and support scalable business operations.",
    achievements: [
      "Built advanced CRM automation and lead management systems.",
      "Designed reliable workflow automation for scalable business operations.",
      "Managed customer communication and funnel systems end-to-end.",
    ],
    skills: ["GoHighLevel", "CRM Automation", "Workflows", "Funnels", "Lead Management", "Automation"],
  },
  {
    id: "exp-2",
    role: "GoHighLevel Automation & Funnel Specialist",
    company: "GrowthPath Automations",
    location: "Remote",
    period: "Feb 2026 — Present",
    description: "Develop and optimize GoHighLevel automation systems, sales funnels, CRM workflows, and lead-nurturing processes. Focused on connecting funnels, pipelines, communication, and appointment systems into streamlined customer journeys.",
    achievements: [
      "Connected funnels, pipelines and appointment systems into unified journeys.",
      "Optimized lead-nurturing processes to improve conversion rates.",
      "Built CRM workflows tailored to client business operations.",
    ],
    skills: ["GHL Automation", "CRM", "Funnels", "Lead Nurturing", "Workflows", "Integrations"],
  },
  {
    id: "exp-3",
    role: "GoHighLevel CRM & Pipeline Automation Specialist",
    company: "SmartPipeline Solution",
    location: "Remote",
    period: "May 2025 — Jan 2026 · 9 months",
    description: "Configured GoHighLevel CRM and pipeline systems to organize leads, opportunities, and customer communication. Built automated workflows, appointment systems, forms, surveys, and follow-up sequences for streamlined sales processes.",
    achievements: [
      "Organized leads and opportunities across structured CRM pipelines.",
      "Built appointment systems, forms and surveys for lead capture.",
      "Automated follow-up sequences to streamline the sales process.",
    ],
    skills: ["CRM", "Pipelines", "Workflows", "Lead Management", "Calendars", "Automation"],
  },
  {
    id: "exp-4",
    role: "GoHighLevel Sales Funnel & Automation Specialist",
    company: "ElevateFunnels Pro",
    location: "Remote",
    period: "Oct 2024 — Mar 2025 · 6 months",
    description: "Built conversion-focused GoHighLevel sales funnels, landing pages, CRM systems, and automated customer journeys. Developed workflows and follow-up systems designed to improve lead management and customer engagement.",
    achievements: [
      "Built conversion-focused funnels and landing pages for client campaigns.",
      "Developed automated customer journeys to boost engagement.",
      "Improved lead management through custom workflow systems.",
    ],
    skills: ["Sales Funnels", "GoHighLevel", "CRM", "Automation", "Landing Pages", "Workflows"],
  },
  {
    id: "exp-5",
    role: "GoHighLevel Funnel & Automation Specialist",
    company: "Automations Guru",
    location: "Remote",
    period: "Jan 2024 — Aug 2024 · 8 months",
    description: "Designed and implemented GoHighLevel workflows for lead generation and client engagement. Built custom forms and surveys, calendar booking systems, high-converting funnels, and third-party integrations to streamline business operations.",
    achievements: [
      "Designed lead generation workflows to grow client pipelines.",
      "Built calendar booking systems and high-converting funnels.",
      "Integrated third-party tools to streamline business operations.",
    ],
    skills: ["GoHighLevel", "Workflows", "Funnels", "Forms & Surveys", "Calendars", "Integrations"],
  },
];

export function ExperienceSection() {
  const [viewMode, setViewMode] = useState("stack");

  return (
    <section
      id="experience"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Badge variant="outline" className="mb-3 rounded-full">
              07 // EXPERIENCE
            </Badge>
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
            >
              EXPERIENCE THAT DRIVES GROWTH.
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-base sm:text-sm mt-2 font-light">
              From GoHighLevel funnels and CRM systems to workflow automation and integrations, every role has strengthened my ability to build automated systems that help businesses capture, nurture, and convert leads.
            </p>
            <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
          </div>

          <div className="ios-segmented-control flex items-center">
            <button
              onClick={() => setViewMode("stack")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full ${
                viewMode === "stack"
                  ? "bg-[#0A66C2] text-white shadow-sm"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
              }`}
            >
              Stacked View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full ${
                viewMode === "grid"
                  ? "bg-[#0A66C2] text-white shadow-sm"
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
                className="p-4 sm:p-8 border border-[#0A66C2]/20 bg-white/80 dark:bg-black/80 backdrop-blur-2xl space-y-3 sm:space-y-4 rounded-2xl sm:rounded-[32px]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#0A66C2]/10 pb-3 sm:pb-4">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold uppercase text-zinc-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase px-2.5 sm:px-3.5 py-0.5 sm:py-1 bg-[#0A66C2] text-white rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-base sm:text-sm text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-[#0A66C2]/10">
                  {exp.skills.map((s, idx) => (
                    <Badge key={idx} variant="secondary" className="text-[10px] sm:text-[11px]">
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
