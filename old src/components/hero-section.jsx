"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const lineVariants = {
    hidden: { clipPath: "inset(0 0 100% 0)", y: 35 },
    visible: {
      clipPath: "inset(0 0 0% 0)",
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-24 transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-100"
        >
          <source
            src="/hero_bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 z-1" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center py-20">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#0A66C2] bg-[#0A66C2] text-white rounded-full">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold">
                GoHighLevel Expert &amp; Automation Specialist
              </span>
            </div>
          </motion.div>

          {/* Headline with Mask Reveal Text Animations */}
          <div className="space-y-2">
            <motion.div variants={lineVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none font-sans">
                Turn More Leads Into
              </h1>
            </motion.div>

            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none font-sans">
                Customers{" "}
                <span className="underline decoration-[#0A66C2] underline-offset-8 text-[#0A66C2]">
                  Automatically
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Paragraph Text Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-base sm:text-xl text-zinc-200 font-sans tracking-wide leading-relaxed max-w-2xl font-light"
          >
            GoHighLevel sales funnels, CRM &amp; automation that work for you. I build complete systems that capture leads, nurture prospects, automate follow-ups, manage your pipeline, and drive conversions — all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a href="#contact">
              <Button size="lg" className="gap-3">
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.upwork.com/freelancers/~01afb52f207cc884c8?mp_source=share" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                <Code2 className="h-4 w-4" />
                <span>Hire me on Upwork</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-widest text-[#0A66C2] font-bold">
            Scroll to explore
          </span>
          <div className="h-10 w-6 border-2 border-[#0A66C2] rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="h-2 w-1.5 bg-[#0A66C2] rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
