"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Sparkles, Code2, Cpu, ShieldCheck } from "lucide-react";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";

const highlights = [
  {
    icon: Code2,
    title: "GoHighLevel & CRM Platforms",
    description:
      "Deep expertise across GoHighLevel, ClickFunnels and WordPress — full account structure, subaccount setup, snapshot development and white-label / SaaS configuration.",
  },
  {
    icon: Cpu,
    title: "Automation Platforms",
    description:
      "Building reliable automations with Make, N8N, Zapier and Webhooks to connect GHL with third-party tools, payment gateways and business platforms.",
  },
  {
    icon: Sparkles,
    title: "Communication & Payments",
    description:
      "Configuring Twilio, LC Phone, LC Email, Google Calendar, Stripe and PayPal for seamless customer communication and checkout experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Deliverability & Tracking",
    description:
      "Optimizing email infrastructure with SPF, DKIM, DMARC and domain authentication, plus Google Analytics, Search Console and Facebook Pixel tracking setup.",
  },
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
            05 // TOOLS &amp; TECHNOLOGIES
          </Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            A TOOLKIT BUILT FOR AUTOMATED GROWTH
          </motion.h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light max-w-xl">
            From CRM systems and sales funnels to AI automation and integrations, every skill is focused on building systems that capture, nurture, and convert more leads.
          </p>
          <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
        </FadeUp>

        {/* Highlights Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={motionItem}>
                <div className="h-full p-8 bg-white/75 dark:bg-black/75 border border-[#0A66C2]/25 backdrop-blur-2xl rounded-[32px] space-y-4 hover:border-[#0A66C2] transition-all duration-300 group shadow-lg">
                  <div className="h-12 w-12 border border-[#0A66C2] bg-[#0A66C2] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-colors duration-300">
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
