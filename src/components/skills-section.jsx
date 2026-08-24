"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { GlowHoverCard } from "./ui/glow-hover-card";
import { Layers, Workflow, Kanban, Rocket, Bot, Link2 } from "lucide-react";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";

const highlights = [
  {
    icon: Layers,
    tag: "CORE SKILL",
    title: "GoHighLevel CRM",
    description: "Complete GHL setup, CRM configuration, contacts, custom fields, tags, opportunities, pipelines, calendars and account structure.",
    level: "3+ Years Experience",
  },
  {
    icon: Workflow,
    tag: "AUTOMATION",
    title: "Workflow Automation",
    description: "Automated lead nurturing, follow-ups, appointment reminders, reactivation, notifications and customer communication workflows.",
    level: "Advanced",
  },
  {
    icon: Kanban,
    tag: "CRM",
    title: "CRM & Pipeline Systems",
    description: "Structured pipelines, opportunity management, lead tracking, custom fields, tags and automated lead routing for organized sales processes.",
    level: "Advanced",
  },
  {
    icon: Rocket,
    tag: "FUNNELS",
    title: "Sales Funnels & Landing Pages",
    description: "Conversion-focused funnels, landing pages, forms, surveys and complete customer journeys designed to turn visitors into qualified leads.",
    level: "3+ Years Experience",
  },
  {
    icon: Bot,
    tag: "AI AUTOMATION",
    title: "AI Chat & Voice Agents",
    description: "AI-powered chat and voice systems that respond to leads, qualify prospects, answer questions and help book appointments 24/7.",
    level: "Hands-on",
  },
  {
    icon: Link2,
    tag: "INTEGRATIONS",
    title: "Integrations & Webhooks",
    description: "Connect GHL with Zapier, webhooks, payment gateways, calendars and third-party platforms to create seamless automated systems.",
    level: "Advanced",
  },
];

const tools = [
  "GoHighLevel", "WordPress", "Make", "N8N", "Zapier", "Webhooks", "Twilio",
  "LC Phone", "LC Email", "Stripe", "PayPal", "Google Calendar", "ClickFunnels",
  "HTML", "CSS", "JavaScript",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            05 // SKILLS &amp; TOOLKIT
          </Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            SKILLS &amp; TOOLKIT
          </motion.h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-base sm:text-sm mt-2 font-light max-w-xl">
            From CRM systems and sales funnels to AI automation and integrations, every skill is focused on building systems that capture, nurture, and convert more leads.
          </p>
          <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
        </FadeUp>

        {/* Highlights Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={motionItem}>
                <GlowHoverCard className="h-full rounded-[32px]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 border border-[#0A66C2] bg-[#0A66C2] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A66C2] px-2 py-0.5 border border-[#0A66C2]/40 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-base sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-[#0A66C2]/15">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                        {item.level}
                      </span>
                    </div>
                  </div>
                </GlowHoverCard>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Tools & Technologies */}
        <FadeUp delay={0.1} className="mt-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
            Tools &amp; Technologies
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs px-4 py-1.5">
                {tool}
              </Badge>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
