"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { FadeUp } from "./ui/motion";
import { CircularTestimonials } from "./ui/circular-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "M Tahir transformed our monolithic legacy frontend into a blazing-fast Next.js architecture. His eye for subtle motion and nature-inspired green design elevated our brand instantly.",
    name: "Marcus Vance",
    designation: "VP of Engineering — Apex Tech Global",
    src:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Working with M Tahir was a masterclass in frontend quality. He delivered our component system ahead of schedule with zero lighthouse regression. Exceptional engineer.",
    name: "Elena Rostova",
    designation: "Director of Product — Quantum Interactive",
    src:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "The interactive project cards and Framer Motion micro-interactions M Tahir built set a new standard for our software showcase. Unmatched execution.",
    name: "David Chen",
    designation: "Founder & CEO — Cypher Labs",
    src:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            06 // CLIENT FEEDBACK
          </Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            TESTIMONIALS &amp; ENDORSEMENTS
          </motion.h2>
          <div className="h-1 w-24 bg-[#88a725] mx-auto mt-4 rounded-full" />
        </FadeUp>

        {/* Circular Testimonials Showcase */}
        <FadeUp delay={0.1}>
          <div className="relative p-6 md:p-12 bg-white/70 dark:bg-black/70 border border-[#88a725]/20 backdrop-blur-3xl rounded-[36px] shadow-2xl">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "inherit",
                designation: "#88a725",
                testimony: "inherit",
                arrowBackground: "#88a725",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#000000",
              }}
              fontSizes={{
                name: "24px",
                designation: "15px",
                quote: "18px",
              }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
