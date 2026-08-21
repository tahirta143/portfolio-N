"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Terminal,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { FadeUp } from "./ui/motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "WhatsApp", href: "https://wa.me/923061758238", icon: FaWhatsapp },
    { label: "Facebook", href: "https://www.facebook.com/share/17b1rDqfwe/", icon: FaFacebookF },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01afb52f207cc884c8?mp_source=share", icon: FaUpwork },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ali-raza-amir", icon: FaLinkedinIn },
  ];

  return (
    <footer className="bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#0A66C2]/15">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 border border-[#0A66C2] bg-[#0A66C2] text-white flex items-center justify-center rounded-full">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-widest uppercase text-zinc-950 dark:text-white">
                  ALI RAZA AMIR
                </span>
                <p className="text-[11px] text-[#0A66C2] font-sans font-semibold tracking-wider uppercase">
                  GoHighLevel Expert
                </p>
              </div>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed font-light">
              Building GoHighLevel sales funnels, CRM systems, and automation that turn more leads into customers — automatically.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A66C2]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors duration-200"
                  >
                    <ChevronRight className="h-3 w-3 text-[#0A66C2] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A66C2]" />
              Contact Us
            </h4>
            <div className="space-y-3 text-xs font-sans text-zinc-600 dark:text-zinc-400 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0A66C2] shrink-0 mt-0.5" />
                <span>
                  Muzaffargarh, Pakistan<br />
                  Available for remote work worldwide
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0A66C2] shrink-0" />
                <a
                  href="mailto:engineeralirazaamir@gmail.com"
                  className="hover:text-[#0A66C2] transition-colors"
                >
                  Email: engineeralirazaamir@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="h-4 w-4 text-[#0A66C2] shrink-0" />
                <a
                  href="tel:+923061758238"
                  className="hover:text-[#0A66C2] transition-colors"
                >
                  WhatsApp: +92 306 1758238
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us (Icon buttons with hover tooltips) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-950 dark:text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A66C2]" />
              Follow Us
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <div
                    key={social.label}
                    className="relative group/tooltip flex flex-col items-center"
                  >
                    {/* Tooltip Bubble */}
                    <span className="absolute -top-9 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-200 pointer-events-none px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-md shadow-lg whitespace-nowrap z-20">
                      {social.label}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-950 dark:bg-white rotate-45" />
                    </span>

                    {/* Icon Button */}
                    <motion.a
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="h-11 w-11 border border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-black hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <IconComponent className="h-4 w-4" />
                    </motion.a>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-sans text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} Ali Raza Amir. All rights reserved.</p>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 border border-[#0A66C2] bg-[#0A66C2] text-white rounded-full transition-all duration-300 cursor-pointer text-xs font-bold uppercase tracking-wider"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
            />
            <span className="relative z-10 inline-flex items-center gap-2">
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
