"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { ElasticGallery } from "./ui/elastic-gallery";
import { FadeUp } from "./ui/motion";
import { motion } from "framer-motion";

const projects = [
  {
    id: "sales-funnel-system",
    title: "HIGH-CONVERTING SALES FUNNEL",
    subtitle: "Lead Capture Funnel & Landing Page System",
    category: "Sales Funnels",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    description: "A complete GoHighLevel funnel system with landing pages, forms, and surveys built to turn visitors into qualified leads and guide them through a structured customer journey.",
    highlights: [
      "Conversion-focused landing page design",
      "Custom forms and multi-step surveys",
      "Automated lead routing into the CRM",
    ],
    tech: ["GoHighLevel", "Landing Pages", "Forms & Surveys", "Lead Capture"],
  },
  {
    id: "crm-pipeline-system",
    title: "CRM & PIPELINE SETUP",
    subtitle: "Organized Contact Management & Deal Tracking",
    category: "CRM & Pipelines",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    description: "A complete GHL CRM build-out with structured pipelines, opportunities, custom fields, tags, and lead tracking for organized, scalable contact management.",
    highlights: [
      "Custom pipelines and opportunity stages",
      "Tagging and custom field structure",
      "Automated lead routing and tracking",
    ],
    tech: ["GoHighLevel CRM", "Pipelines", "Custom Fields", "Lead Tracking"],
  },
  {
    id: "workflow-automation-system",
    title: "LEAD NURTURING AUTOMATION",
    subtitle: "Follow-Up & Reactivation Workflow System",
    category: "Automation & Workflows",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    description: "Smart GHL workflows automating lead nurturing, follow-ups, appointment reminders, reactivation campaigns, and customer notifications end-to-end.",
    highlights: [
      "Multi-step nurture and follow-up sequences",
      "Automated appointment reminders",
      "Re-engagement and reactivation campaigns",
    ],
    tech: ["GHL Workflows", "Email & SMS Automation", "Zapier", "Webhooks"],
  },
  {
    id: "ai-chat-voice-agent",
    title: "AI CHAT &amp; VOICE AGENT",
    subtitle: "24/7 Lead Qualification & Booking Assistant",
    category: "AI Chat & Voice",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    description: "AI-powered chat and voice systems that respond to leads, answer questions, qualify prospects, and help book appointments around the clock.",
    highlights: [
      "24/7 automated lead response",
      "AI-driven prospect qualification",
      "Direct calendar booking integration",
    ],
    tech: ["AI Chatbot", "Voice Agents", "GoHighLevel", "Calendar Integration"],
  },
  {
    id: "snapshot-subaccount-system",
    title: "GHL SNAPSHOT &amp; SUBACCOUNT DEPLOYMENT",
    subtitle: "Repeatable Agency-Ready System Setup",
    category: "Snapshots & Agency Setup",
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1400&q=80",
    description: "Structured GHL subaccounts and reusable snapshots built for faster account deployment, standardized systems, and repeatable agency workflows, including white-label and SaaS-ready setups.",
    highlights: [
      "Reusable snapshot creation and import/export",
      "Client-ready subaccount structure",
      "White-label and SaaS-ready configuration",
    ],
    tech: ["GHL Snapshots", "Subaccount Setup", "White-Label", "SaaS Configuration"],
  },
];

const categories = ["All", "Sales Funnels", "CRM & Pipelines", "Automation & Workflows", "AI Chat & Voice", "Snapshots & Agency Setup"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge variant="outline" className="mb-3 rounded-full">
              03 // WHAT I BUILD
            </Badge>
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
            >
              SYSTEMS &amp; SOLUTIONS I BUILD
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light">
              Hover any panel to expand — details, tech stack, and links reveal on focus.
            </p>
            <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-full ${
                  activeCategory === cat
                    ? "bg-[#0A66C2] text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Elastic Gallery */}
        <FadeUp delay={0.12}>
          <ElasticGallery items={filteredProjects} />
        </FadeUp>
      </div>
    </section>
  );
}
