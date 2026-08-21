"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { FadeUp } from "./ui/motion";
import { CircularTestimonials } from "./ui/circular-testimonials";
import { motion } from "framer-motion";

const testimonials = [
  ["When it comes to GoHighLevel, Ali is experienced and knowledgeable and a great teacher, often using screen sharing and online tools to help educate his clients as he completes the work.", "Daniel Burwen", "Go High Level Setup & Paid Ads Testing"],
  ["Excellent work. I highly recommend Ali Raza for anyone needing Go High Level setup and support.", "Melissa Maguire", "GHL Funnel & Email Automation Setup"],
  ["Amazing work completed on funnel and event registration page in Go High Level. Instructions and understanding of how it works has been complemented with the highest level of detail.", "Melissa Maguire", "GHL Funnel & Email Automation Setup"],
  ["Very good work. I'd definitely hire him again if needed.", "Joe Stewart", "Need An Experienced AI & Website Person With GHL Experience"],
  ["He is patient, friendly, knowledgeable - highly recommended.", "Daniel Burwen", "OpAjax Landing Pages in GHL"],
  ["This was a great option for creating a website and Ali was very easy to work with.", "Lindsey Robb", "Go High Level Sales Funnel Builder Needed"],
  ["Ali was super responsive and worked hard to complete the task given.", "Roland Ingrisano", "A2P, AI Voice Agent, Automations & Onboarding"],
  ["Working with Ali has been a game-changer for my business! He is incredibly thorough and lightning-fast when it comes to setting up automations in GoHighLevel. He is efficient, reliable, and truly knows GHL inside and out.", "Athena Payne", "GoHighLevel Workflow Setup Expert"],
  ["Ali was excellent. It was my first time working with him, and the amount of effort he put into one page was phenomenal.", "John Walker", "GoHighLevel Freelancer"],
  ["Ali is very good with GHL and works well with clearly defined tasks. Knows lots about the platform and can deliver results.", "Brandon Parker", "GoHighLevel Automation Specialist"],
  ["Great work. Prompt and communicated well.", "Brandon Parker", "GoHighLevel Automation Specialist"],
  ["I got a referral from another client that is working with Ali, and I see why Ali has been recommended. He is really good at what he does, and I highly recommend his services.", "Luis Mendez", "30 Minute Consultation"],
  ["Ali Raza is incredibly good with GoHighLevel.", "Durwin Babb", "GoHighLevel Consulting"],
  ["Great customer service and very detailed and professional.", "Craig Campbell", "A2P Compliant Forms"],
  ["I asked Ali to create a landing page. It was done quickly and efficiently and he was very responsive. Happy with the service and would recommend to others.", "Julia Bykhovskaia", "Landing Page Setup in GHL"],
  ["Amazing work. This is my second time using him to build a website and he delivered top quality. He went above and beyond.", "Craig Campbell", "REBRANDU Website Design"],
  ["Truly grateful for the patience, passion, and grace Ali was able to bring our organization while working together.", "Ollie", "Building a fully functional end-to-end website"],
].map(([quote, name, designation]) => ({ quote, name, designation, src: "/boy.jpg" }));

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
