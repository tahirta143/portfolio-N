"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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

  return <span ref={nodeRef}>0{suffix}</span>;
}

const metrics = [
  { label: "Years of Expertise", to: 3, suffix: "+", padZero: false, desc: "Hands-on GoHighLevel delivery, CRM strategy, funnels, and automation systems." },
  { label: "Happy Clients", to: 50, suffix: "+", padZero: false, desc: "Businesses and agencies served worldwide" },
  { label: "Funnels & Automations Built", to: 100, suffix: "+", padZero: false, desc: "Systems built to capture and convert leads" },
];

const topRatedStat = { label: "Top Rated", desc: "Upwork Freelancer" };

const highlights = [
  { title: "GoHighLevel CRM", desc: "Pipelines, opportunities & lead tracking" },
  { title: "Workflow Automation", desc: "Follow-ups, reminders & nurturing" },
  { title: "Sales Funnels", desc: "High-converting landing pages & forms" },
  { title: "AI Chat & Voice", desc: "24/7 lead qualification & booking" },
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
    isMobile ? ["0%", "0%"] : ["0%", "-50%"]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <section
      id="about"
      ref={targetRef}
      className="relative min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-300 md:h-[260vh]"
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
        <motion.div style={{ x }} className="flex w-full flex-col items-stretch md:h-full md:w-[200vw] md:flex-row md:items-center">

          {/* ── PANEL 1: Profile, Bio & Core Highlights ── */}
          <div className="w-full shrink-0 px-4 py-16 sm:px-6 md:flex md:h-full md:w-[100vw] md:flex-col md:justify-center md:px-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full space-y-6 md:pt-10">
              <div>
                <Badge variant="outline" className="mb-2.5 rounded-full">
                  03 // ABOUT ME
                </Badge>
                {/* Text Animation Mask Wipe */}
                <motion.h2
                  initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
                >
                  ABOUT ME
                </motion.h2>
                <div className="h-1 w-24 bg-[#0A66C2] mt-2.5 rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Card */}
                <div className="lg:col-span-5 relative group overflow-hidden border border-[#0A66C2]/40 bg-white/70 dark:bg-black/70 backdrop-blur-2xl rounded-[32px] shadow-xl">
                  <img
                    src="/boy.jpg"
                    alt="Ali Raza Amir Profile"
                    className="w-full h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <span>Scroll down to view Trust / Quick Stats</span>
                    <ArrowRight className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Trust / Quick Stats */}
          <div className="w-full shrink-0 border-[#0A66C2]/15 px-4 py-16 sm:px-6 md:flex md:h-full md:w-[100vw] md:flex-col md:justify-center md:border-l md:px-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full space-y-8 md:pt-10">
              <div>
                <Badge variant="outline" className="mb-3 rounded-full">
                  02 // TRUST / QUICK STATS
                </Badge>
                <motion.h2
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
                >
                  TRUST / QUICK STATS
                </motion.h2>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-1 font-light">
                  Measurable results built over 3+ years of GoHighLevel systems delivery.
                </p>
                <div className="h-1 w-24 bg-[#0A66C2] mt-3 rounded-full" />
              </div>

              {/* The 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {metrics.map((m, idx) => (
                  <GlowHoverCard
                    key={idx}
                    className="h-full"
                    contentClassName="p-5"
                  >
                    <div className="flex h-full flex-col justify-between gap-2">
                      <p className="text-3xl sm:text-4xl font-extrabold text-[#0A66C2] tracking-tight font-sans leading-none">
                        <AnimatedCounter to={m.to} suffix={m.suffix} isDecimal={m.isDecimal} padZero={m.padZero} />
                      </p>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                          {m.label}
                        </h4>
                        <p className="mt-1 text-[10px] text-zinc-500 font-sans font-light leading-snug">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </GlowHoverCard>
                ))}
                <GlowHoverCard className="h-full" contentClassName="p-5">
                  <div className="flex h-full flex-col justify-between gap-2">
                    <p className="text-3xl sm:text-4xl font-extrabold text-[#0A66C2] tracking-tight font-sans uppercase leading-none">
                      {topRatedStat.label}
                    </p>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-white">
                      {topRatedStat.desc}
                    </h4>
                  </div>
                </GlowHoverCard>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
