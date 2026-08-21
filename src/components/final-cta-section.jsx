"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { FadeUp } from "./ui/motion";

const keywords = [
  "GOHIGHLEVEL",
  "CRM",
  "SALES FUNNELS",
  "WORKFLOW AUTOMATION",
  "AI AGENTS",
  "INTEGRATIONS",
];

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            Let&apos;s Turn Your Leads Into A System That Converts
          </motion.h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm md:text-base mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need funnels, CRM automation, workflows, AI agents, or a complete GoHighLevel setup, I&apos;ll build the system around your business — not the other way around.
          </p>
          <div className="h-1 w-24 bg-[#0A66C2] mt-6 mx-auto rounded-full" />
        </FadeUp>

        <FadeUp delay={0.1} className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a href="#contact">
            <Button size="lg" className="gap-3">
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="https://wa.me/923061758238" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </Button>
          </a>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {keywords.map((word, index) => (
            <React.Fragment key={word}>
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                {word}
              </span>
              {index < keywords.length - 1 && (
                <span className="text-[#0A66C2]">•</span>
              )}
            </React.Fragment>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
