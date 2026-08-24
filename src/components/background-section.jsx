"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";
import { GraduationCap, Award, Compass, Workflow, Plug, FlaskConical, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlowHoverCard } from "./ui/glow-hover-card";

const certifications = [
  {
    title: "GHL Automation Expert — Smart Automation",
    description: "Certified in GoHighLevel automation, with a focus on building advanced workflows, CRM automation, lead nurturing systems, and automated customer journeys.",
  },
  {
    title: "GoHighLevel Sales Funnel Expert — OLAS Marketing",
    description: "Certified in building GoHighLevel sales funnels, landing pages, lead-generation systems, and automated follow-up processes designed to turn prospects into customers.",
  },
  {
    title: "GoHighLevel Automation & Sales Funnel Expert — Automation Guru",
    description: "Certified in GoHighLevel automation and sales funnel development, including workflows, CRM systems, lead nurturing, appointment automation, and conversion-focused customer journeys.",
  },
];

const process = [
  {
    number: "01",
    icon: Compass,
    stage: "Discovery & Strategy",
    title: "Business Discovery",
    description: "We start by understanding your business, offer, target audience, current tools, and goals. I identify where leads are coming from, how they are currently managed, and where automation can improve the process.",
    tags: ["Business & goal analysis", "Current system review", "Lead journey mapping"],
  },
  {
    number: "02",
    icon: Workflow,
    stage: "System Planning",
    title: "CRM & Sales Funnel Planning",
    description: "I map out the CRM structure, sales pipeline, funnel journey, calendars, communication channels, and automation requirements before development begins.",
    tags: ["CRM & pipeline structure", "Funnel & customer journey", "Automation planning"],
  },
  {
    number: "03",
    icon: Plug,
    stage: "Build & Automate",
    title: "GHL System Development",
    description: "I build the GoHighLevel system based on the approved structure — including funnels, landing pages, CRM, workflows, forms, surveys, calendars, and automated follow-ups.",
    tags: ["GHL workflows", "Funnels & landing pages", "CRM & pipeline setup"],
  },
  {
    number: "04",
    icon: ArrowRight,
    stage: "Integrate & Connect",
    title: "Integrations & Communication",
    description: "I connect the required tools and communication channels so the entire system works together seamlessly, from lead capture to appointment booking and follow-up.",
    tags: ["Email & SMS automation", "Webhooks & integrations", "Calendars & payment systems"],
  },
  {
    number: "05",
    icon: FlaskConical,
    stage: "Test & Optimize",
    title: "Testing & Optimization",
    description: "Before delivery, I test the complete customer journey and automation logic to make sure leads are captured, routed, followed up with, and tracked correctly.",
    tags: ["Workflow testing", "Lead journey testing", "Optimization & support"],
  },
];

export function BackgroundSection() {
  return (
    <section id="background" className="border-t border-[#0A66C2]/20 bg-white py-28 text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-zinc-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        

        {/* How I Work — now appears first */}
        <div className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">09 // HOW I WORK</Badge>
          <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white md:text-4xl">
            A process built for results.
          </h3>
          <p className="mb-6 max-w-2xl text-base sm:text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
            From understanding your business to building, testing, and optimizing your GoHighLevel system, I follow a structured process designed to create reliable automation and better customer journeys.
          </p>
          <StaggerContainer className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={motionItem} className="h-full">
                  <GlowHoverCard className="h-full min-h-[420px]">
                    <div className="flex h-full min-h-[356px] flex-col">
                      <div className="flex items-center justify-between">
                        <div className="h-12 w-12 border border-[#0A66C2] bg-[#0A66C2] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="font-mono text-xs text-[#0A66C2]">{step.number}</span>
                      </div>
                      <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#0A66C2]">{step.stage}</p>
                      <h3 className="mt-1 text-lg font-bold uppercase text-zinc-950 dark:text-white">{step.title}</h3>
                      <p className="mt-3 text-base sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">{step.description}</p>
                      <div className="mt-auto space-y-1.5 pt-5 border-t border-[#0A66C2]/15">
                        {step.tags.map((tag) => (
                          <div key={tag} className="flex items-center gap-2 text-xs font-sans text-zinc-600 dark:text-zinc-400">
                            <span className="h-1 w-1 rounded-full bg-[#0A66C2] shrink-0" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlowHoverCard>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
<FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">08 // EDUCATION &amp; PROFESSIONAL BACKGROUND</Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white md:text-5xl"
          >
            EDUCATION &amp; PROFESSIONAL BACKGROUND
          </motion.h2>
          <p className="mt-2 max-w-2xl text-base sm:text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
            A technical foundation for smarter automation.
          </p>
          <div className="mt-4 h-1 w-24 rounded-full bg-[#0A66C2]" />
        </FadeUp>
        {/* Education & Certifications — now appears second */}
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp>
            <GlowHoverCard className="h-full">
              <GraduationCap className="mb-5 h-8 w-8 text-[#0A66C2]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">Education</p>
              <h3 className="mt-2 text-xl font-bold uppercase text-zinc-950 dark:text-white">University of Engineering & Technology, Taxila</h3>
              <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Bachelor of Science in Computer Engineering</p>
              <p className="mt-1 text-xs text-zinc-500">2020 – 2024 · Taxila, Pakistan</p>
              <p className="mt-5 text-base sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Studied Computer Engineering with a focus on technical problem-solving, programming, computer systems, and engineering fundamentals. I now apply this technical foundation to building GoHighLevel CRM systems, automation workflows, funnels, integrations, and AI-powered business solutions.</p>
              <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-[#0A66C2]/15">
                {["Computer Engineering", "Programming", "Technical Problem Solving", "Computer Systems"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[11px]">{tag}</Badge>
                ))}
              </div>
            </GlowHoverCard>
          </FadeUp>

          <FadeUp>
            <GlowHoverCard className="h-full">
              <Award className="mb-5 h-8 w-8 text-[#0A66C2]" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">Certifications</p>
              <ul className="mt-4 space-y-5">
                {certifications.map((certification) => (
                  <li key={certification.title}>
                    <h4 className="text-sm font-bold uppercase text-zinc-950 dark:text-white leading-snug">{certification.title}</h4>
                    <p className="mt-1.5 text-base sm:text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">{certification.description}</p>
                  </li>
                ))}
              </ul>
            </GlowHoverCard>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}