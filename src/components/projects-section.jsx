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
    id: "real-estate-lead-funnel",
    title: "REAL ESTATE LEAD FUNNEL",
    subtitle: "Property Inquiry & Lead Qualification System",
    category: "Sales Funnels",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    description: "A targeted real estate funnel that captures property inquiries, qualifies buyers, and routes high-intent leads to the right sales representative automatically.",
    highlights: [
      "Property-specific landing page flows",
      "Buyer and seller qualification forms",
      "Automated agent lead assignment",
    ],
    tech: ["GHL Funnels", "Lead Qualification", "Forms", "Lead Routing"],
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
    id: "multi-location-crm-system",
    title: "MULTI-LOCATION CRM SYSTEM",
    subtitle: "Teams, Territories & Opportunity Management",
    category: "CRM & Pipelines",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    description: "A scalable CRM structure for multi-location teams with territory routing, shared visibility, custom opportunity stages, and location-level reporting.",
    highlights: [
      "Location-based pipeline organization",
      "Territory assignment and permissions",
      "Team activity and revenue visibility",
    ],
    tech: ["GHL CRM", "User Permissions", "Pipelines", "Reporting"],
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
    id: "client-onboarding-automation",
    title: "CLIENT ONBOARDING AUTOMATION",
    subtitle: "Signed Deal to Project Kickoff Workflow",
    category: "Automation & Workflows",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    description: "An onboarding workflow that starts when a deal closes, collects client information, creates internal tasks, and keeps every stakeholder informed through kickoff.",
    highlights: [
      "Automated intake and welcome sequence",
      "Internal task and notification creation",
      "Milestone-based client communication",
    ],
    tech: ["GHL Workflows", "Client Intake", "Tasks", "Email Automation"],
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
    id: "ai-lead-receptionist",
    title: "AI LEAD RECEPTIONIST",
    subtitle: "Instant Answers, Qualification & Call Routing",
    category: "AI Chat & Voice",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80",
    description: "An AI receptionist that handles common questions, qualifies inbound inquiries, captures details, and routes urgent opportunities to the right team member.",
    highlights: [
      "Knowledge-based lead conversations",
      "Intent detection and qualification",
      "Smart call and calendar routing",
    ],
    tech: ["AI Receptionist", "Voice AI", "Lead Qualification", "GHL"],
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
  {
    id: "website-membership-system",
    title: "CONVERSION WEBSITE & MEMBERSHIP HUB",
    subtitle: "Branded Website, Client Portal & Course Access",
    category: "Websites & Memberships",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
    description: "A polished GoHighLevel website and membership experience with branded pages, gated content, onboarding flows, and a clear path from visitor to paying client.",
    highlights: [
      "Responsive branded website structure",
      "Membership offers and protected content",
      "Client onboarding and access automation",
    ],
    tech: ["GHL Websites", "Memberships", "Client Portals", "Custom Pages"],
  },
  {
    id: "service-business-website",
    title: "SERVICE BUSINESS WEBSITE",
    subtitle: "Local Service Website with Lead Capture",
    category: "Websites & Memberships",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    description: "A conversion-focused website for a local service business with clear service pages, location targeting, trust signals, and enquiry forms connected to the CRM.",
    highlights: [
      "Service and location page architecture",
      "Mobile-first enquiry experience",
      "CRM-connected contact forms",
    ],
    tech: ["GHL Websites", "Landing Pages", "Forms", "Local SEO"],
  },
  {
    id: "reputation-review-system",
    title: "REPUTATION & REVIEW ENGINE",
    subtitle: "Automated Feedback Collection & Review Requests",
    category: "Reputation Management",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    description: "A reputation management workflow that requests feedback at the right moment, routes unhappy customers privately, and helps satisfied customers share public reviews.",
    highlights: [
      "Post-purchase review request workflows",
      "Private feedback and escalation routing",
      "Centralized reputation tracking",
    ],
    tech: ["Review Requests", "SMS Automation", "Reputation", "GHL Workflows"],
  },
  {
    id: "patient-feedback-system",
    title: "PATIENT FEEDBACK SYSTEM",
    subtitle: "Healthcare Feedback & Review Follow-Up",
    category: "Reputation Management",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    description: "A thoughtful feedback workflow for healthcare teams that gathers private patient feedback, identifies service issues, and invites satisfied patients to review the practice.",
    highlights: [
      "Post-visit feedback requests",
      "Private issue escalation paths",
      "Segmented review invitations",
    ],
    tech: ["Reputation", "SMS", "Survey Forms", "Workflows"],
  },
  {
    id: "appointment-booking-system",
    title: "APPOINTMENT BOOKING SYSTEM",
    subtitle: "Calendar, Reminder & No-Show Recovery Setup",
    category: "Appointments & Calendars",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80",
    description: "A complete booking system connecting calendars, qualification forms, reminders, confirmations, and no-show recovery into one reliable client scheduling journey.",
    highlights: [
      "Round-robin and team calendar setup",
      "Confirmation and reminder sequences",
      "No-show recovery automation",
    ],
    tech: ["Calendars", "Booking Forms", "SMS Reminders", "No-Show Recovery"],
  },
  {
    id: "consultation-booking-funnel",
    title: "CONSULTATION BOOKING FUNNEL",
    subtitle: "Qualified Calls for High-Ticket Services",
    category: "Appointments & Calendars",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    description: "A consultation funnel that combines pre-call qualification, calendar booking, reminders, and internal preparation so sales teams spend more time with the right prospects.",
    highlights: [
      "Pre-call qualification questionnaire",
      "Automated booking confirmation flow",
      "Sales team preparation notifications",
    ],
    tech: ["Calendars", "Qualification", "GHL Funnels", "Reminders"],
  },
  {
    id: "integration-reporting-system",
    title: "INTEGRATION & REPORTING DASHBOARD",
    subtitle: "Connected Data, Attribution & Performance Reporting",
    category: "Integrations & Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    description: "A connected reporting setup that brings lead, pipeline, campaign, and appointment data together so teams can see what is working and where revenue is coming from.",
    highlights: [
      "Third-party app and webhook connections",
      "Lead source and campaign attribution",
      "Custom performance reporting views",
    ],
    tech: ["Webhooks", "Zapier", "Attribution", "Reporting"],
  },
  {
    id: "lead-source-attribution-system",
    title: "LEAD SOURCE ATTRIBUTION SYSTEM",
    subtitle: "Campaign Tracking & Revenue Reporting Setup",
    category: "Integrations & Reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    description: "A campaign attribution setup that connects advertising sources to contacts, opportunities, and revenue for clearer marketing decisions and better reporting.",
    highlights: [
      "Campaign and source tracking structure",
      "CRM attribution field mapping",
      "Revenue-focused reporting dashboards",
    ],
    tech: ["Attribution", "UTM Tracking", "Webhooks", "Dashboards"],
  },
  {
    id: "saas-onboarding-system",
    title: "AGENCY SAAS ONBOARDING SYSTEM",
    subtitle: "Client Intake, Provisioning & Launch Automation",
    category: "Snapshots & Agency Setup",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    description: "An agency-ready onboarding system that turns a signed client into a provisioned, organized, and launch-ready GoHighLevel subaccount with fewer manual steps.",
    highlights: [
      "Automated client intake and kickoff forms",
      "Subaccount provisioning checklists",
      "Launch milestones and internal notifications",
    ],
    tech: ["SaaS Mode", "Onboarding", "Snapshots", "Internal Notifications"],
  },
];

const categories = ["All", "Sales Funnels", "CRM & Pipelines", "Automation & Workflows", "AI Chat & Voice", "Snapshots & Agency Setup", "Websites & Memberships", "Reputation Management", "Appointments & Calendars", "Integrations & Reporting"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const projectRows = [];
  for (let index = 0; index < filteredProjects.length; index += 10) {
    projectRows.push(filteredProjects.slice(index, index + 10));
  }

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
        <div className="space-y-3">
          {projectRows.map((row, index) => (
            <FadeUp key={row[0]?.id} delay={0.12 + index * 0.04}>
              <ElasticGallery items={row} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
