"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowHoverCard } from "./ui/glow-hover-card";
import { Badge } from "./ui/badge";
import { Rocket, Settings, Bot, CalendarClock, Globe, Link2, Check, MessageCircle, MailCheck, Star, RefreshCw, ShieldCheck, BarChart3, Headphones, CreditCard, Package, Building2, Send } from "lucide-react";
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
  {
    icon: Bot,
    title: "AI Chatbot & Voice Agents",
    description: "AI-powered chat and voice systems that answer questions, qualify prospects, respond to leads, and help book appointments 24/7.",
    deliverables: ["AI Lead Response", "Qualification Logic", "Voice Agent Setup", "Calendar Booking"],
  },
  {
    icon: Package,
    title: "GHL Snapshot Development",
    description: "Create, customize, import, and export GHL snapshots for faster account setup, repeatable systems, and agency deployment.",
    deliverables: ["Snapshot Creation", "Import / Export", "Faster Account Setup", "Agency Deployment"],
  },
  {
    icon: Building2,
    title: "GHL Subaccount Setup",
    description: "Structured GHL subaccounts with proper settings, CRM configuration, calendars, workflows, and client-ready organization.",
    deliverables: ["Subaccount Structure", "CRM Configuration", "Calendars & Workflows", "Client-Ready Setup"],
  },
  {
    icon: Send,
    title: "Email & SMS Automation",
    description: "Build automated email and SMS campaigns for lead nurturing, reminders, follow-ups, reactivation, and customer communication.",
    deliverables: ["Email Campaigns", "SMS Sequences", "Reminders & Follow-Ups", "Reactivation Campaigns"],
  },
  {
    icon: MessageCircle,
    title: "A2P / 10DLC Setup",
    description: "Configure GHL SMS compliance and A2P/10DLC registration so businesses can build reliable messaging systems for campaigns and follow-ups.",
    deliverables: ["Brand Registration", "Campaign Registration", "Messaging Compliance", "Deliverability Setup"],
  },
  {
    icon: Star,
    title: "Reputation Management",
    description: "Set up GoHighLevel reputation systems to help businesses collect, manage, and monitor customer reviews across their lead and customer journey.",
    deliverables: ["Review Collection", "Reputation Monitoring", "Feedback Management", "Customer Journey Tracking"],
  },
  {
    icon: RefreshCw,
    title: "Review Request Automation",
    description: "Build automated review-request workflows that send customers timely follow-ups after appointments, purchases, or completed services to encourage more reviews.",
    deliverables: ["Review Request Workflows", "Post-Service Follow-Up", "Timed Automations", "More Customer Reviews"],
  },
  {
    icon: MailCheck,
    title: "Email Deliverability & Setup",
    description: "Optimize GHL email infrastructure with domain authentication, DNS records, warm-up, and deliverability best practices to improve inbox placement.",
    deliverables: ["SPF / DKIM / DMARC", "Domain Authentication", "Email Warm-Up", "Inbox Placement"],
  },
  {
    icon: RefreshCw,
    title: "CRM & Website Migration",
    description: "Migrate websites, contacts, and CRM data into GoHighLevel while keeping the new system organized, functional, and ready for growth.",
    deliverables: ["Website Migration", "Contact Migration", "CRM Structure", "System Cleanup"],
  },
  {
    icon: ShieldCheck,
    title: "White-Label & SaaS Setup",
    description: "Set up branded GoHighLevel environments, custom domains, white-label branding, and SaaS-ready systems for agencies.",
    deliverables: ["Custom Domains", "White-Label Branding", "SaaS Configuration", "Agency Deployment"],
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    description: "Connect analytics and conversion tracking so teams can measure traffic, leads, campaigns, and the performance of their customer journeys.",
    deliverables: ["Google Analytics", "Search Console", "Facebook Pixel", "Conversion Tracking"],
  },
  {
    icon: Headphones,
    title: "GHL Technical Support",
    description: "Troubleshoot workflows, funnels, integrations, domains, calendars, and other GoHighLevel issues to keep systems running smoothly.",
    deliverables: ["Workflow Troubleshooting", "Funnel Fixes", "Domain Support", "System Reviews"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Connect payment systems with GHL to create smooth checkout experiences and automate payment-related customer workflows.",
    deliverables: ["Stripe Integration", "PayPal Integration", "Checkout Flows", "Payment Automations"],
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
