"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Layers, Code2, Server, Wrench, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

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
  { label: "Years Experience", to: 8, suffix: "+", padZero: true, desc: "Architecting web systems & frontend products" },
  { label: "Projects Shipped", to: 45, suffix: "+", padZero: false, desc: "Production apps delivered to global clients" },
  { label: "Open Source Commits", to: 1.2, suffix: "k+", isDecimal: true, desc: "Contributions to developer tooling & libraries" },
  { label: "Client Satisfaction", to: 100, suffix: "%", padZero: false, desc: "Consistently exceeding performance benchmarks" },
];

const highlights = [
  { title: "Next.js Architecture", desc: "App Router, SSR & Edge Runtime" },
  { title: "Design Systems", desc: "Atomic tokens with Tailwind & Motion" },
  { title: "Motion & Physics", desc: "Micro-animations & 60fps UI" },
  { title: "Engineering Rigor", desc: "Clean code & CI/CD pipelines" },
];

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: Code2,
    skills: [
      { name: "Next.js (App Router)", level: "98%", experience: "6 yrs" },
      { name: "React 19 / JSX", level: "99%", experience: "8 yrs" },
      { name: "Tailwind CSS", level: "98%", experience: "5 yrs" },
      { name: "Framer Motion", level: "95%", experience: "4 yrs" },
      { name: "JavaScript (ES6+)", level: "99%", experience: "8 yrs" },
      { name: "HTML5 / CSS3", level: "100%", experience: "8 yrs" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Cloud API",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: "92%", experience: "6 yrs" },
      { name: "RESTful APIs", level: "96%", experience: "7 yrs" },
      { name: "GraphQL", level: "88%", experience: "4 yrs" },
      { name: "PostgreSQL / Prisma", level: "85%", experience: "4 yrs" },
      { name: "Redis", level: "82%", experience: "3 yrs" },
      { name: "Serverless Edge", level: "90%", experience: "3 yrs" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub Actions", level: "95%", experience: "8 yrs" },
      { name: "Docker", level: "85%", experience: "4 yrs" },
      { name: "Vercel / AWS", level: "92%", experience: "5 yrs" },
      { name: "Jest / Vitest", level: "90%", experience: "5 yrs" },
      { name: "Cypress / Playwright", level: "88%", experience: "4 yrs" },
      { name: "ESLint / Prettier", level: "98%", experience: "7 yrs" },
    ],
  },
];

export function AboutSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  const activeStep = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [1, 1, 2, 3]);
  const [currentPanel, setCurrentPanel] = useState(1);
  const [activeSkillTab, setActiveSkillTab] = useState("frontend");

  const currentSkillCategory = skillCategories.find((cat) => cat.id === activeSkillTab);

  useEffect(() => {
    const unsubscribe = activeStep.on("change", (latest) => {
      setCurrentPanel(Math.round(latest));
    });
    return () => unsubscribe();
  }, [activeStep]);

  return (
    <section id="about" ref={targetRef} className="relative h-[380vh] bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden border-t border-[#88a725]/20">
        
        {/* Progress Pill Bar */}
        <div className="absolute top-6 left-6 md:left-12 z-20 flex items-center gap-3 bg-white/80 dark:bg-black/80 border border-[#88a725]/30 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">
          <Layers className="h-4 w-4 text-[#88a725]" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
            ABOUT // PANEL 0{currentPanel} OF 03
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentPanel === step ? "w-6 bg-[#88a725]" : "w-2 bg-[#88a725]/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal moving track */}
        <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">

          {/* ── PANEL 1: Profile, Bio & Core Highlights ── */}
          <div className="w-[100vw] h-full flex flex-col justify-center px-6 md:px-16 shrink-0">
            <div className="max-w-6xl mx-auto w-full space-y-6 pt-10">
              <div>
                <Badge variant="outline" className="mb-2.5 rounded-full">
                  01 // ARCHITECTURE & VISION
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white">
                  ENGINEERING MEMOIR &amp; PHILOSOPHY
                </h2>
                <div className="h-1 w-24 bg-[#88a725] mt-2.5 rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Card */}
                <div className="lg:col-span-5 relative group overflow-hidden border border-[#88a725]/40 bg-white/70 dark:bg-black/70 backdrop-blur-2xl rounded-[32px] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Developer Profile"
                    className="w-full h-[320px] md:h-[360px] object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:contrast-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/80 dark:bg-black/80 border border-[#88a725]/40 backdrop-blur-3xl rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest text-[#88a725] font-bold">STATUS</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-[#88a725] animate-pulse" />
                      <p className="text-xs font-semibold text-zinc-950 dark:text-white">Available for Senior / Lead Frontend Projects</p>
                    </div>
                  </div>
                </div>

                {/* Bio & Core Highlights Grid */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-zinc-950 dark:text-white leading-tight">
                    BUILDING SCALABLE INTERFACES WITH UNCOMPROMISING MOTION QUALITY
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-sans text-xs md:text-sm leading-relaxed font-light">
                    Senior Frontend Engineer with 8+ years engineering high-throughput web applications, design systems, and rich interactive web experiences using React, Next.js, Framer Motion, and Tailwind CSS.
                  </p>

                  {/* Core Technical Highlights Small Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 bg-white/70 dark:bg-black/70 border border-[#88a725]/20 backdrop-blur-xl rounded-xl hover:border-[#88a725] transition-colors"
                      >
                        <Sparkles className="h-4 w-4 text-[#88a725] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold uppercase text-zinc-950 dark:text-white leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-zinc-500 font-sans leading-tight mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer hint */}
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#88a725]">
                    <span>Scroll down to view Skills &amp; Tech Stack</span>
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 2: SKILLS & TECH STACK (HORIZONTAL SCROLL) ── */}
          <div className="w-[100vw] h-full flex flex-col justify-center px-6 md:px-16 shrink-0 border-l border-[#88a725]/15">
            <div className="max-w-6xl mx-auto w-full space-y-6 pt-10">
              <div>
                <Badge variant="outline" className="mb-3 rounded-full">
                  01 // TECHNICAL MATRIX
                </Badge>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white">
                  SKILLS &amp; TECH STACK
                </h2>
                <div className="h-1 w-24 bg-[#88a725] mt-3 rounded-full" />
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
                          ? "bg-[#88a725] text-white shadow-sm"
                          : "bg-zinc-100 dark:bg-zinc-900 border border-[#88a725]/20 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white"
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
                    className="p-5 bg-white/80 dark:bg-black/80 border border-[#88a725]/25 backdrop-blur-2xl rounded-[22px] space-y-2 hover:border-[#88a725] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        {skill.experience}
                      </span>
                      <span className="text-[10px] font-mono text-[#88a725] font-bold px-2 py-0.5 border border-[#88a725]/40 rounded-full">
                        {skill.level}
                      </span>
                    </div>
                    <h4 className="text-base font-bold uppercase text-zinc-950 dark:text-white">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-zinc-100 dark:bg-zinc-900 h-1.5 overflow-hidden rounded-full border border-[#88a725]/20">
                      <div
                        className="bg-[#88a725] h-full rounded-full"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── PANEL 3 (FINAL PANEL): Impact & Metric Counters ── */}
          <div className="w-[100vw] h-full flex flex-col justify-center px-6 md:px-16 shrink-0 border-l border-[#88a725]/15">
            <div className="max-w-6xl mx-auto w-full space-y-8 pt-10">
              <div>
                <Badge variant="outline" className="mb-3 rounded-full">
                  01 // IMPACT & METRICS
                </Badge>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white">
                  PROVEN RECORD &amp; NUMBERS
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-1 font-light">
                  Measurable engineering metrics built over 8+ years of production delivery.
                </p>
                <div className="h-1 w-24 bg-[#88a725] mt-3 rounded-full" />
              </div>

              {/* The 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-8 bg-white/80 dark:bg-black/80 border border-[#88a725]/30 backdrop-blur-2xl rounded-[32px] space-y-3 shadow-lg hover:border-[#88a725] transition-all duration-300"
                  >
                    <p className="text-4xl sm:text-5xl font-extrabold text-[#88a725] tracking-tight font-sans">
                      <AnimatedCounter to={m.to} suffix={m.suffix} isDecimal={m.isDecimal} padZero={m.padZero} />
                    </p>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {m.label}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-sans font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
