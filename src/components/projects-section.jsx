"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { ElasticGallery } from "./ui/elastic-gallery";
import { FadeUp } from "./ui/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";

const projects = [
  { id: "a2p-assisted-living", title: "ASSISTED LIVING A2P 10DLC", category: "A2P", image: "/assets/A2P/Assisted Living — A2P 10DLC Approval.png", description: "A compliant A2P 10DLC registration system for assisted living businesses sending trusted messages and calls.", tech: ["A2P 10DLC", "Trust Center", "Messaging", "Voice"] },
  { id: "a2p-roofing", title: "ROOFING BUSINESS A2P 10DLC", category: "A2P", image: "/assets/A2P/Roofing Business — A2P 10DLC Approval.png", description: "A verified messaging setup helping roofing businesses improve SMS deliverability and customer trust.", tech: ["A2P 10DLC", "SMS", "SHAKEN/STIR", "Compliance"] },
  { id: "a2p-perk-practical", title: "PERK PRACTICAL A2P 10DLC", category: "A2P", image: "/assets/A2P/PERK Practical — A2P 10DLC.png", description: "A business messaging and voice registration system built for reliable communication and stronger connectivity.", tech: ["A2P 10DLC", "Voice", "Messaging", "Trust"] },
  { id: "automation-medspa", title: "MEDSPA WEIGHT LOSS & REJUVENATION", category: "Automation System", image: "/assets/Automation System/Medspa Weight Loss & Rejuvenation.png", description: "Lead capture, personalized follow-ups, appointment booking, and re-engagement automation for a medspa.", tech: ["GHL Workflows", "Lead Capture", "Follow-Up", "Appointments"] },
  { id: "automation-multichannel", title: "MULTI-CHANNEL RESPONSE AUTOMATION", category: "Automation System", image: "/assets/Automation System/Multi-Channel Response.png", description: "Smart conditional routing that responds across SMS, Messenger, Instagram, WhatsApp, and live chat.", tech: ["Multi-Channel", "Conditions", "Notifications", "GHL"] },
  { id: "automation-appointment", title: "APPOINTMENT CONFIRMATION AUTOMATION", category: "Automation System", image: "/assets/Automation System/Appointment Confirmation + Reminder.png", description: "Appointment confirmations, reminders, surveys, and review requests connected in one automated workflow.", tech: ["Appointments", "Reminders", "Surveys", "Reviews"] },
  { id: "automation-btc", title: "BTC REGISTRATION FOLLOW-UP", category: "Automation System", image: "/assets/Automation System/BTC Registration Follow-Up.png", description: "A timed nurture sequence that welcomes new registrations and keeps prospects engaged with smart reminders.", tech: ["Lead Nurture", "Email", "Delays", "GHL"] },
  { id: "automation-noshow", title: "NO-SHOW NURTURE", category: "Automation System", image: "/assets/Automation System/No-Show Nurture.png", description: "Automated no-show detection, SMS follow-up, and rebooking nurture to bring missed appointments back.", tech: ["No-Show Recovery", "SMS", "Nurture", "Bookings"] },
  { id: "automation-plumbing", title: "PLUMBING BUSINESS WORKFLOWS", category: "Automation System", image: "/assets/Automation System/Plumbing Business Automation Workflows.png", description: "A complete workflow library for plumbing lead capture, bookings, reminders, and customer follow-up.", tech: ["Lead Capture", "Plumbing", "Bookings", "Reporting"] },
  { id: "automation-ascend", title: "ASCEND EQUITY FUND WORKFLOWS", category: "Automation System", image: "/assets/Automation System/Ascend Equity Fund – Investor Automation System.png", description: "Seven connected investor workflows covering capture, qualification, appointments, nurturing, and conversion.", tech: ["Investor Leads", "Qualification", "Automation", "Email"] },
  { id: "automation-coaching", title: "COACHING BUSINESS AUTOMATION", category: "Automation System", image: "/assets/Automation System/Coaching Business Automation System.png", description: "Organized coaching workflows for enrollment, course access, reminders, re-engagement, and reviews.", tech: ["Coaching", "Enrollment", "Reminders", "Workflows"] },
  { id: "automation-roofing", title: "ROOFING BUSINESS AUTOMATION", category: "Automation System", image: "/assets/Automation System/Roofing Business Automation Workflow.png", description: "A roofing workflow that captures inspection leads, follows up quickly, books jobs, and nurtures customers.", tech: ["Roofing", "Lead Capture", "Follow-Up", "Bookings"] },
  { id: "automation-roofing-management", title: "ROOFING WORKFLOW MANAGEMENT", category: "Automation System", image: "/assets/Automation System/Roofing Workflow Management System.png", description: "A structured workflow management system for organizing campaigns, tracking performance, and managing roofing jobs.", tech: ["Workflow Management", "Folders", "Tracking", "GHL"] },
  { id: "automation-whatsapp", title: "MISSED CALL WHATSAPP-BACK", category: "Automation System", image: "/assets/Automation System/Missed Call WhatsApp-Back.png", description: "Instant WhatsApp and SMS follow-up for missed calls, with conditional routing and internal team alerts.", tech: ["WhatsApp", "SMS", "Call Routing", "Notifications"] },
  { id: "automation-ivr", title: "IVR WORKFLOW", category: "Automation System", image: "/assets/Automation System/IVR Workflow.png", description: "An automated IVR system that maps caller input, routes calls, records messages, and notifies the team.", tech: ["IVR", "Call Routing", "Voicemail", "Branching"] },
  { id: "website-ascend", title: "ASCEND EQUITY FUND", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Ascend Equity Fund.png", description: "An investor-focused GoHighLevel website with conversion paths, video content, and an investor application flow.", tech: ["GHL Website", "Investor Funnel", "Application", "Responsive"], url: "https://ascendequityfund.com/" },
  { id: "website-bid-like-a-pro", title: "BID LIKE A PRO WORKSHOP", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Bid Like a Pro.png", description: "A workshop landing page designed to promote registrations and capture construction and trade business leads.", tech: ["Landing Page", "Workshop", "Registration", "Lead Capture"], url: "https://go.thebidagency.com.au/bid-like-a-pro-workshop" },
  { id: "website-calibre", title: "CALIBRE CLEANING", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Calibre Cleaning – GoHighLevel Cleaning Website.png", description: "A lead generation website for a professional cleaning company with service messaging and estimate capture.", tech: ["GHL Website", "Cleaning", "Lead Generation", "Forms"], url: "https://sites.leadconnectorhq.com/preview/97o6PbffLbToQenX530g?notrack=true" },
  { id: "website-defense-attorney", title: "DEFENSE ATTORNEY", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Defense Attorney.png", description: "A trust-building legal landing page with case review booking, testimonials, FAQs, and consultation capture.", tech: ["Landing Page", "Legal", "Case Review", "Booking"], url: "https://sites.leadconnectorhq.com/preview/9liVwqtPOkT17XJk5Ca0#section-U675iR0Okz" },
  { id: "website-denver-patio", title: "DENVER PATIO MASTERS", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Denver Patio Masters.png", description: "A project estimate funnel helping homeowners explore patio options and submit qualified project inquiries.", tech: ["Lead Funnel", "Patio", "Estimator", "Forms"], url: "https://sites.leadconnectorhq.com/preview/UMmC4gomklqZetvg8grx?notrack=true" },
  { id: "website-exomind", title: "EXOMIND WELLNESS", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/ExoMind Wellness & Mental Health Website.png", description: "A mental wellness website combining education, trust signals, treatment benefits, and a consultation funnel.", tech: ["GHL Website", "Wellness", "Consultation", "Testimonials"], url: "https://sites.leadconnectorhq.com/preview/nbW8QQABRB6E3xRJk7wM?notrack=true" },
  { id: "website-limitless", title: "LIMITLESS INSURANCE AGENCY", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Limitless Insurance Agency.png", description: "An insurance lead generation website with quote capture, service sections, FAQs, and responsive design.", tech: ["Insurance", "Quote Form", "Lead Capture", "Responsive"], url: "https://sites.leadconnectorhq.com/preview/YnPn71I2lo5f1BQr0PfF" },
  { id: "website-perk-practical", title: "PERK PRACTICAL ROOFING", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Perk Practical.png", description: "A roofing website focused on high-quality lead generation, service positioning, and conversion-focused content.", tech: ["GHL Website", "Roofing", "Landing Page", "Conversion"], url: "https://sites.leadconnectorhq.com/preview/K9Bxqi5q892f731j9ym7" },
  { id: "website-senior-select", title: "SENIOR SELECT", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/Senior Select.png", description: "A certified living communities website designed to build trust and connect families with the right communities.", tech: ["GHL Website", "Senior Living", "Lead Generation", "Trust"], url: "https://seniorselectcertified.com/home" },
  { id: "website-stop-smoking", title: "THE NEW WAY STOP SMOKING", category: "GHL Sales Funnels and Websites", image: "/assets/GHL Sales Funnel and Websites/The New Way Stop Smoking.png", description: "A high-converting cessation program landing page with urgency, sign-up capture, and responsive mobile presentation.", tech: ["Landing Page", "Program Funnel", "Sign-Up", "Responsive"], url: "https://stopsmoking.thegreatestontheplanet.com/home-page" },
];

const categories = ["All", "A2P", "Automation System", "GHL Sales Funnels and Websites"];

const ROWS_PER_PAGE = 1; // how many rows are visible initially / added per click
const ITEMS_PER_ROW = 6;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleRows, setVisibleRows] = useState(ROWS_PER_PAGE);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Reset pagination whenever the category filter changes
  useEffect(() => {
    setVisibleRows(ROWS_PER_PAGE);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const projectRows = [];
  for (let index = 0; index < filteredProjects.length; index += ITEMS_PER_ROW) {
    projectRows.push(filteredProjects.slice(index, index + ITEMS_PER_ROW));
  }

  const visibleProjectRows = projectRows.slice(0, visibleRows);
  const hasMoreRows = visibleRows < projectRows.length;

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
              06 // PROJECTS
            </Badge>
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
            >
              PROJECTS
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light">
              Select any project to view the complete case details.
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
          {visibleProjectRows.map((row, index) => (
            <FadeUp key={row[0]?.id} delay={0.12 + index * 0.04}>
              <ElasticGallery items={row} onProjectClick={setSelectedProject} />
            </FadeUp>
          ))}
        </div>

        {/* Load More / Show Less controls */}
        {projectRows.length > ROWS_PER_PAGE && (
          <div className="mt-10 flex justify-center">
            {hasMoreRows ? (
              <button
                type="button"
                onClick={() => setVisibleRows((prev) => prev + ROWS_PER_PAGE)}
                className="group flex items-center gap-2 rounded-full border border-[#0A66C2] bg-[#0A66C2]/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#0A66C2] transition-all duration-300 hover:bg-[#0A66C2] hover:text-white cursor-pointer"
              >
                <span>More Projects</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleRows(ROWS_PER_PAGE)}
                className="group flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:border-[#0A66C2] hover:text-[#0A66C2] cursor-pointer"
              >
                <span>Show Less</span>
                <ChevronDown className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-[#0A66C2]/40 bg-white shadow-2xl dark:bg-zinc-950 md:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="relative min-h-[280px] bg-zinc-100 dark:bg-zinc-900 md:min-h-[620px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain p-3 md:p-6"
                priority
              />
            </div>

            <div className="relative flex flex-col p-6 md:p-10">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute right-4 top-4 rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="mb-4 self-start rounded-full bg-[#0A66C2] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {selectedProject.category}
              </span>
              <h3 id="project-dialog-title" className="pr-8 text-2xl font-bold uppercase leading-tight text-zinc-950 dark:text-white md:text-4xl">
                {selectedProject.title}
              </h3>
              <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {selectedProject.description}
              </p>

              <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
                  Project Details
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#0A66C2]/30 bg-[#0A66C2]/10 px-3 py-1.5 text-xs font-semibold text-[#0A66C2] dark:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.url && (
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-bold text-[#0A66C2] underline underline-offset-4 hover:text-black dark:hover:text-white">
                  Visit live project
                </a>
              )}

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="mt-auto flex items-center justify-center rounded-full bg-[#0A66C2] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black dark:hover:bg-white dark:hover:text-black"
              >
                Discuss a Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}