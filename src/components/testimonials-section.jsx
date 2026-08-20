"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { FadeUp } from "./ui/motion";
import { CircularTestimonials } from "./ui/circular-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Ali built out our entire GoHighLevel CRM and pipeline from scratch — leads stopped falling through the cracks and our follow-ups finally happen automatically.",
    name: "Hassan Raza",
    designation: "Business Owner — Lahore Home Services",
    src:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "The sales funnel and automation system Ali set up paid for itself within weeks. Communication was clear and the delivery was fast.",
    name: "Sarah Mitchell",
    designation: "Marketing Director — Mitchell Wellness Co.",
    src:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Top Rated on Upwork for a reason — Ali's workflow automation and appointment system saved our team hours every single week.",
    name: "Ayesha Khan",
    designation: "Agency Founder — Karachi Growth Studio",
    src:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Ali understood our process quickly and turned it into a clean CRM setup our whole team can actually use.",
    name: "Daniel Brooks",
    designation: "Operations Manager — Brooks Consulting",
    src:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Our booking flow feels effortless now. The reminders and follow-ups run in the background and our team stays focused.",
    name: "Usman Ahmed",
    designation: "Clinic Owner — Islamabad Health Group",
    src:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "The snapshot gave us a repeatable foundation for new accounts and made our agency onboarding much more organized.",
    name: "Emily Carter",
    designation: "Agency Director — Carter Growth Co.",
    src:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Ali connected the tools we were juggling and built a reporting view that finally made our lead sources easy to understand.",
    name: "Bilal Siddiqui",
    designation: "Founder — Siddiqui Consulting, Dubai",
    src:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "The new website and membership area gave our customers a much smoother first experience with the brand.",
    name: "Olivia Thompson",
    designation: "Program Manager — Thompson Education Brand",
    src:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "Our review requests are consistent, timely, and easy to track. It is a small system that has made a meaningful difference.",
    name: "Fatima Noor",
    designation: "Marketing Lead — Noor Dental Care, Rawalpindi",
    src:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    quote:
      "From the first call to launch, Ali kept the build practical and focused on the parts of our customer journey that needed attention most.",
    name: "James Wilson",
    designation: "Business Owner — Wilson Services Group, London",
    src:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300 overflow-hidden"
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
            REVIEWS &amp; ENDORSEMENTS
          </motion.h2>
          <div className="h-1 w-24 bg-[#0A66C2] mx-auto mt-4 rounded-full" />
        </FadeUp>

        {/* Circular Testimonials Showcase */}
        <FadeUp delay={0.1}>
          <div className="relative p-6 md:p-12 bg-white/70 dark:bg-black/70 border border-[#0A66C2]/20 backdrop-blur-3xl rounded-[36px] shadow-2xl">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "inherit",
                designation: "#0A66C2",
                testimony: "inherit",
                arrowBackground: "#0A66C2",
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
