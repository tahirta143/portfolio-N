"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Layers, Code2, Server, Wrench, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { GlowHoverCard } from "./ui/glow-hover-card";

function AnimatedCounter({ to, duration = 2.2, suffix = "", isDecimal = false, padZero = true }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (!nodeRef.current) return;
        let formatted;
        if (isDecimal) {
          formatted = value.toFixed(1);
        } else {
          const rounded = Math.round(value);
          formatted = padZero && rounded < 10 ? `0${rounded}` : rounded.toString();
        }
        nodeRef.current.textContent = `${formatted}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration, suffix, isDecimal, padZero]);

  return <span ref={nodeRef}>{isDecimal ? `0.0${suffix}` : padZero ? `00${suffix}` : `0${suffix}`}</span>;
}

const metrics = [
  { label: "Years Experience", to: 3, suffix: "+", padZero: true, desc: "Building GoHighLevel systems & automation" },
  { label: "Happy Clients", to: 50, suffix: "+", padZero: false, desc: "Businesses and agencies served worldwide" },
  { label: "Funnels & Automations", to: 100, suffix: "+", padZero: false, desc: "Systems built to capture and convert leads" },
  { label: "Upwork Rating", to: 100, suffix: "%", padZero: false, desc: "Top Rated Upwork Freelancer" },
];

const highlights = [
  { title: "GoHighLevel CRM", desc: "Pipelines, opportunities & lead tracking" },
  { title: "Workflow Automation", desc: "Follow-ups, reminders & nurturing" },
  { title: "Sales Funnels", desc: "High-converting landing pages & forms" },
  { title: "AI Chat & Voice", desc: "24/7 lead qualification & booking" },
];

const skillCategories = [
  {
    id: "frontend",
    title: "CRM & Funnels",
    icon: Code2,
    skills: [
      { name: "GoHighLevel CRM Setup", level: "98%", experience: "3+ yrs" },
      { name: "Sales Funnels & Landing Pages", level: "97%", experience: "3+ yrs" },
      { name: "CRM & Pipeline Systems", level: "97%", experience: "3+ yrs" },
      { name: "Forms & Surveys", level: "95%", experience: "3+ yrs" },
      { name: "Calendar & Appointment Systems", level: "96%", experience: "3+ yrs" },
      { name: "GHL Snapshot Development", level: "92%", experience: "2+ yrs" },
    ],
  },
  {
    id: "backend",
    title: "Automation & AI",
    icon: Server,
    skills: [
      { name: "Workflow Automation", level: "98%", experience: "3+ yrs" },
      { name: "AI Chat & Voice Agents", level: "90%", experience: "1+ yrs" },
      { name: "Email & SMS Automation", level: "95%", experience: "3+ yrs" },
      { name: "Review Request Automation", level: "93%", experience: "2+ yrs" },
      { name: "Reputation Management", level: "92%", experience: "2+ yrs" },
      { name: "A2P / 10DLC Setup", level: "88%", experience: "1+ yrs" },
    ],
  },
  {
    id: "devops",
    title: "Integrations & Tools",
    icon: Wrench,
    skills: [
      { name: "Zapier / Make / N8N", level: "94%", experience: "3+ yrs" },
      { name: "Webhooks & API Integrations", level: "92%", experience: "3+ yrs" },
      { name: "Stripe / PayPal Payments", level: "93%", experience: "2+ yrs" },
      { name: "Twilio / LC Phone / LC Email", level: "90%", experience: "2+ yrs" },
      { name: "Email Deliverability (SPF/DKIM/DMARC)", level: "90%", experience: "2+ yrs" },
      { name: "GHL White-Label & SaaS Setup", level: "88%", experience: "2+ yrs" },
    ],
  },
];

export function AboutSection() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-66.666%"]
  );
  const activeStep = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [1, 1, 2, 3]);
  const [currentPanel, setCurrentPanel] = useState(1);
  const [activeSkillTab, setActiveSkillTab] = useState("frontend");

  const currentSkillCategory = skillCategories.find((cat) => cat.id === activeSkillTab);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const unsubscribe = activeStep.on("change", (latest) => {
      setCurrentPanel(Math.round(latest));
    });
    return () => unsubscribe();
  }, [activeStep]);

  return (
    <section
      id="about"
      ref={targetRef}
      className="relative min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300 md:h-[380vh]"
    >
      {/* Sticky viewport frame */}
      <div className="border-t border-[#0A66C2]/20 md:sticky md:top-0 md:flex md:h-screen md:items-center md:overflow-hidden">
        
        {/* Progress Pill Bar */}
        {/* <div className="absolute top-6 left-6 md:left-12 z-20 flex items-center gap-3 bg-white/80 dark:bg-black/80 border border-[#0A66C2]/30 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">
          <Layers className="h-4 w-4 text-[#0A66C2]" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
            ABOUT // PANEL 0{currentPanel} OF 03
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentPanel === step ? "w-6 bg-[#0A66C2]" : "w-2 bg-[#0A66C2]/30"
                }`}
              />
            ))}
          </div>
        </div> */}

        {/* Horizontal moving track */}
        <motion.div style={{ x }} className="flex w-full flex-col items-stretch md:h-full md:w-[300vw] md:flex-row md:items-center">

          {/* ── PANEL 1: Profile, Bio & Core Highlights ── */}
          <div className="w-full shrink-0 px-4 py-16 sm:px-6 md:flex md:h-full md:w-[100vw] md:flex-col md:justify-center md:px-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full space-y-6 md:pt-10">
              <div>
                <Badge variant="outline" className="mb-2.5 rounded-full">
                  01 // ARCHITECTURE & VISION
                </Badge>
                {/* Text Animation Mask Wipe */}
                <motion.h2
                  initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
                >
                  ABOUT ME &amp; MY APPROACH
                </motion.h2>
                <div className="h-1 w-24 bg-[#0A66C2] mt-2.5 rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Card */}
                <div className="lg:col-span-5 relative group overflow-hidden border border-[#0A66C2]/40 bg-white/70 dark:bg-black/70 backdrop-blur-2xl rounded-[32px] shadow-xl">
                  <img
                    src="/boy.jpg"
                    alt="Ali Raza Amir Profile"
                    className="w-full h-[320px] md:h-[360px] object-cover grayscale contrast-125 transition-[filter,transform] duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/80 dark:bg-black/80 border border-[#0A66C2]/40 backdrop-blur-3xl rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest text-[#0A66C2] font-bold">STATUS</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-[#0A66C2] animate-pulse" />
                      <p className="text-xs font-semibold text-zinc-950 dark:text-white">Available for GoHighLevel Projects</p>
                    </div>
                  </div>
                </div>

                {/* Bio & Core Highlights Grid */}
                <div className="lg:col-span-7 space-y-4">
                  <motion.h3
                    initial={{ clipPath: "inset(0 0 100% 0)", y: 15 }}
                    whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl font-bold uppercase text-zinc-950 dark:text-white leading-tight"
                  >
                    BUILDING AUTOMATED SYSTEMS THAT TURN LEADS INTO GROWTH
                  </motion.h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-sans text-xs md:text-sm leading-relaxed font-light">
                    I&apos;m Ali Raza Amir, a Computer Engineer from UET Taxila and a GoHighLevel Expert specializing in sales funnels, CRM, websites, and business automation. I combine my technical background with hands-on freelancing experience to build systems that are practical, scalable, and focused on real business results. I help businesses and agencies replace scattered tools and repetitive manual tasks with connected systems that capture leads, manage opportunities, automate follow-ups, and keep the customer journey moving. My approach is simple: understand the business first, then build the technology around it. 📍 Pakistan 🌐 Working with clients worldwide.
                  </p>

                  {/* Core Technical Highlights Small Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {highlights.map((item, idx) => (
                      <GlowHoverCard
                        key={idx}
                        className="h-full"
                      >
                        <div className="flex items-start gap-2.5">
                          <Sparkles className="h-4 w-4 text-[#0A66C2] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-bold uppercase text-zinc-950 dark:text-white leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-[10px] text-zinc-500 font-sans leading-tight mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </GlowHoverCard>
                    ))}
                  </div>

                  {/* Footer hint */}
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0A66C2]">
                    <span>Scroll down to view Skills &amp; Tech Stack</span>
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 2: SKILLS & TECH STACK ── */}
          <div className="w-full shrink-0 border-[#0A66C2]/15 px-4 py-16 sm:px-6 md:flex md:h-full md:w-[100vw] md:flex-col md:justify-center md:border-l md:px-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full space-y-6 md:pt-10">
              <div>
                <Badge variant="outline" className="mb-3 rounded-full">
                  01 // TECHNICAL MATRIX
                </Badge>
                <motion.h2
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
                >
                  SKILLS &amp; TECH STACK
                </motion.h2>
                <div className="h-1 w-24 bg-[#0A66C2] mt-3 rounded-full" />
              </div>

              {/* Segmented Category Selection */}
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeSkillTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveSkillTab(cat.id)}
                      className={`flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer rounded-full ${
                        isActive
                          ? "bg-[#0A66C2] text-white shadow-sm"
                          : "bg-zinc-100 dark:bg-zinc-900 border border-[#0A66C2]/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{cat.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Skill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {currentSkillCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <GlowHoverCard className="h-full">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                            {skill.experience}
                          </span>
                          <span className="text-[10px] font-mono text-[#0A66C2] font-bold px-2 py-0.5 border border-[#0A66C2]/40 rounded-full">
                            {skill.level}
                          </span>
                        </div>
                        <h4 className="text-base font-bold uppercase text-zinc-950 dark:text-white">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-1.5 overflow-hidden rounded-full border border-[#0A66C2]/20">
                          <div
                            className="bg-[#0A66C2] h-full rounded-full"
                            style={{ width: skill.level }}
                          />
                        </div>
                      </div>
                    </GlowHoverCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── PANEL 3: Impact & Metric Counters ── */}
          <div className="w-full shrink-0 border-[#0A66C2]/15 px-4 py-16 sm:px-6 md:flex md:h-full md:w-[100vw] md:flex-col md:justify-center md:border-l md:px-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full space-y-8 md:pt-10">
              <div>
                <Badge variant="outline" className="mb-3 rounded-full">
                  01 // IMPACT & METRICS
                </Badge>
                <motion.h2
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
                >
                  PROVEN RECORD &amp; NUMBERS
                </motion.h2>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-1 font-light">
                  Measurable results built over 3+ years of GoHighLevel systems delivery.
                </p>
                <div className="h-1 w-24 bg-[#0A66C2] mt-3 rounded-full" />
              </div>

              {/* The 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, idx) => (
                  <GlowHoverCard
                    key={idx}
                    className="h-full"
                  >
                    <div className="space-y-3">
                      <p className="text-4xl sm:text-5xl font-extrabold text-[#0A66C2] tracking-tight font-sans">
                        <AnimatedCounter to={m.to} suffix={m.suffix} isDecimal={m.isDecimal} padZero={m.padZero} />
                      </p>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                        {m.label}
                      </h4>
                      <p className="text-[11px] text-zinc-500 font-sans font-light leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </GlowHoverCard>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
