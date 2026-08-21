"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";
import { BackgroundSection } from "@/components/background-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollReset } from "@/components/scroll-reset";
import { PageLoader } from "@/components/ui/page-loader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      <ScrollReset />

      {/* Full-screen loader — renders on top of everything */}
      <PageLoader onComplete={() => setLoaded(true)} />

      {/* Page content — fades in after loader exits */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col font-sans overflow-x-clip transition-colors duration-300"
          >
            {/* Fixed Navbar */}
            <Navbar />

            {/* 1. Hero Section */}
            <HeroSection />

            {/* 2. About Section */}
            <AboutSection />

            {/* 3. Experience Section */}
            <ExperienceSection />

            {/* 4. Projects Section */}
            <ProjectsSection />

            {/* 5. Services Section */}
            <ServicesSection />

            <SkillsSection />

            <BackgroundSection />

            {/* 6. Testimonials Section */}
            <TestimonialsSection />

            {/* 7. Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
