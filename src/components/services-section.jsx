"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowHoverCard } from "./ui/glow-hover-card";
import { Badge } from "./ui/badge";
import { Rocket, Settings, Bot, CalendarClock, Globe, Link2, Check } from "lucide-react";
import { FadeUp, StaggerContainer, motionItem } from "./ui/motion";

const services = [
  {
    icon: Rocket,
    title: "GoHighLevel Sales Funnels",
    description: "High-converting funnels, landing pages, forms, surveys and complete customer journeys built to turn visitors into qualified leads.",
    deliverables: ["Landing Pages & Forms", "Surveys & Lead Capture", "Complete Customer Journeys", "Conversion-Focused Design"],
  },
  {
    icon: Settings,
    title: "CRM & Pipeline Setup",
    description: "Complete GHL CRM setup with pipelines, opportunities, custom fields, lead tracking and organized contact management.",
    deliverables: ["Pipelines & Opportunities", "Custom Fields & Tags", "Lead Tracking", "Organized Contact Management"],
  },
  {
    icon: Bot,
    title: "Automation & Workflows",
    description: "Smart GHL workflows for lead nurturing, follow-ups, appointment reminders, reactivation, notifications and customer communication.",
    deliverables: ["Lead Nurturing Sequences", "Appointment Reminders", "Reactivation Campaigns", "Automated Notifications"],
  },
  {
    icon: CalendarClock,
    title: "Calendar & Appointment Systems",
    description: "Set up booking calendars with confirmations, reminders, follow-ups, appointment routing and automated workflows.",
    deliverables: ["Booking Calendars", "Confirmations & Reminders", "Appointment Routing", "Automated Follow-Ups"],
  },
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    description: "Modern, responsive websites and landing pages built inside GoHighLevel with a strong focus on conversions and user experience.",
    deliverables: ["Responsive Design", "Conversion Optimization", "Fast Load Times", "Mobile-First Layouts"],
  },
  {
    icon: Link2,
    title: "GoHighLevel Integrations",
    description: "Connect GHL with third-party tools using Zapier, webhooks, payment gateways, calendars and other business platforms.",
    deliverables: ["Zapier / Make / N8N", "Webhooks & APIs", "Payment Gateway Setup", "Calendar Sync"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            04 // CORE CAPABILITIES
          </Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            SERVICES &amp; EXPERTISE
          </motion.h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light max-w-xl">
            From CRM systems and sales funnels to AI automation and integrations, every service is focused on building systems that capture, nurture, and convert more leads.
          </p>
          <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
        </FadeUp>

        {/* Services Grid with GlowHoverCard Tiles */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={motionItem}>
                <GlowHoverCard className="h-full flex flex-col justify-between rounded-[32px]">
                  <div className="space-y-6">
                    <div className="h-12 w-12 border border-[#0A66C2] bg-[#0A66C2] text-white flex items-center justify-center rounded-full group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm leading-relaxed font-light">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#0A66C2]/15">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-sans text-zinc-600 dark:text-zinc-400">
                          <Check className="h-3.5 w-3.5 text-[#0A66C2] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0A66C2]/15 flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest">
                    <span>SERVICE SPEC 0{index + 1}</span>
                    <span className="text-[#0A66C2] font-bold group-hover:translate-x-1 transition-transform">Inquire →</span>
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
