"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowHoverCard } from "./ui/glow-hover-card";
import { Badge } from "./ui/badge";
import { Code, Layout, Cpu, Zap, Shield, Sparkles, Check } from "lucide-react";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";

const services = [
  {
    icon: Layout,
    title: "Next.js Web Applications",
    description: "Architecting high-performance Server-Side Rendered (SSR) & Static Site Generated (SSG) web applications with zero-cls and ultra-fast page loads.",
    deliverables: ["App Router Architecture", "SEO & Meta Tag System", "Edge Functions & Middleware", "Full Analytics Integration"],
  },
  {
    icon: Code,
    title: "Design Systems & Component Kits",
    description: "Building production-grade, accessible React UI component libraries powered by Tailwind CSS, Radix primitives, and comprehensive Storybook specs.",
    deliverables: ["Atomic Component Architecture", "Strict Design Tokens", "WCAG AAA Accessibility", "Nature Color Branding Specs"],
  },
  {
    icon: Sparkles,
    title: "UI Motion & Micro-Interactions",
    description: "Crafting fluid, 60fps animations and scroll-driven transitions using Framer Motion that elevate user engagement without degrading performance.",
    deliverables: ["Scroll-Trigger Animations", "Physics Spring Transitions", "Accordion & Modal Motion", "Custom Cursor Spotlights"],
  },
  {
    icon: Cpu,
    title: "Frontend Performance Optimization",
    description: "Auditing and optimizing existing JavaScript bundles, reducing Core Web Vitals metrics, eliminating memory leaks, and streamlining DOM rendering.",
    deliverables: ["Lighthouse 95+ Audit", "Code-Splitting & Tree Shaking", "Image & Asset Pipeline", "Memory Leak Diagnostic"],
  },
  {
    icon: Zap,
    title: "API & Microservice Integration",
    description: "Connecting frontend interfaces with GraphQL, REST APIs, WebSockets, and headless CMS platforms for real-time data sync and reliability.",
    deliverables: ["GraphQL & React Query", "WebSocket Live Feeds", "Optimistic UI State", "Error Boundary Handling"],
  },
  {
    icon: Shield,
    title: "Code Review & Technical Leadership",
    description: "Providing architectural guidance, code reviews, frontend security assessments, and mentoring development teams on modern frontend best practices.",
    deliverables: ["Architecture Audit Reports", "CI/CD Pipeline Setup", "Developer Workflow Coaching", "Codebase Refactoring"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            04 // CORE CAPABILITIES
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white">
            SERVICES & EXPERTISE
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light max-w-xl">
            Hover over any card to experience the green spotlight glow effect.
          </p>
          <div className="h-1 w-24 bg-[#88a725] mt-4 rounded-full" />
        </FadeUp>

        {/* Services Grid with iOS GlowHoverCard Tiles */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={motionItem}>
                <GlowHoverCard className="h-full flex flex-col justify-between rounded-[32px]">
                  <div className="space-y-6">
                    <div className="h-12 w-12 border border-[#88a725] bg-[#88a725] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#88a725]/15">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-sans text-zinc-600 dark:text-zinc-400">
                          <Check className="h-3.5 w-3.5 text-[#88a725] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#88a725]/15 flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest">
                    <span>SERVICE SPEC 0{index + 1}</span>
                    <span className="text-[#88a725] font-bold group-hover:translate-x-1 transition-transform">Inquire →</span>
                  </div>
                </GlowHoverCard>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
