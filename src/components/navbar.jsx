"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-6 py-3 rounded-full transition-all duration-300 border backdrop-blur-3xl flex items-center justify-between ${scrolled
            ? "bg-white/80 dark:bg-black/80 border-[#0A66C2]/30 shadow-sm"
            : "bg-white/60 dark:bg-black/60 border-white/40 dark:border-white/10"
          }`}
      >
        {/* Avatar Badge */}
        <a href="#hero" className="flex items-center gap-2.5 group cursor-pointer">
          <motion.div
            whileTap={{ scale: 0.92 }}
            className="h-9 w-9 overflow-hidden border border-[#0A66C2] bg-[#0A66C2] rounded-full flex items-center justify-center transition-all duration-300"
          >
            <img src="/boy.jpg" alt="Ali Raza Amir" className="h-full w-full object-cover scale-[2.2] translate-y-[35%]" />
          </motion.div>
          <span className="text-lg font-bold tracking-widest uppercase text-zinc-950 dark:text-white group-hover:text-[#0A66C2] transition-colors">
            ALI RAZA AMIR <span className="text-xs text-[#0A66C2] font-semibold ml-1">/ GHL EXPERT</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-zinc-700 dark:text-zinc-300 hover:text-[#0A66C2] transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0A66C2] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls & iOS Segmented Theme Pill */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3.5 py-1.5 border border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-black hover:border-black rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 text-xs uppercase font-bold"
            aria-label="Toggle theme mode"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
            </motion.div>
            <span className="tracking-wider text-[11px]">{theme === "dark" ? "LIGHT" : "DARK"}</span>
          </button>

          <a href="#contact">
            <Button size="sm" variant="default" className="gap-1.5 text-xs">
              <span>Hire Me</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border border-[#0A66C2] bg-[#0A66C2] text-white hover:bg-black hover:border-black rounded-full"
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white bg-[#0A66C2] hover:bg-black border border-[#0A66C2] hover:border-black rounded-full focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/90 dark:bg-black/90 backdrop-blur-3xl border border-[#0A66C2]/20 rounded-3xl p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 hover:text-[#0A66C2] transition-colors py-2 border-b border-[#0A66C2]/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  onClick={toggleTheme}
                  className="w-full justify-center gap-2"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
