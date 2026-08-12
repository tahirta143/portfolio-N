"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export function HeroSection() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(136, 167, 37, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }
      particles.forEach((p, index) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.fillStyle = "rgba(136, 167, 37, 0.6)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x, dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(136, 167, 37, ${0.15 * (1 - dist / 140)})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => { window.removeEventListener("resize", handleResize); cancelAnimationFrame(animationFrameId); };
  }, [theme]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 26 } },
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-24 transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover grayscale opacity-15 dark:opacity-25 mix-blend-luminosity scale-105">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-23214-large.mp4" type="video/mp4" />
        </video>
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-2 transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center py-20">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#88a725] bg-[#88a725] text-white rounded-full">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold">Senior Frontend & Full-Stack Architect</span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white leading-none font-sans">
            Crafting Digital Products With{" "}
            <span className="underline decoration-[#88a725] underline-offset-8 text-[#88a725]">Precision & Motion</span>
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 font-sans tracking-wide leading-relaxed max-w-2xl font-light">
            Specialized in high-performance Next.js web applications, interactive UI systems, micro-frontend architecture, and smooth motion design.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#projects"><Button size="lg" className="gap-3"><span>View Selected Work</span><ArrowRight className="h-4 w-4" /></Button></a>
            <a href="#experience"><Button size="lg" variant="outline" className="gap-2"><Code2 className="h-4 w-4" /><span>Career History</span></Button></a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-widest text-[#88a725] font-bold">Scroll to explore</span>
          <div className="h-10 w-6 border-2 border-[#88a725] rounded-full flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="h-2 w-1.5 bg-[#88a725] rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
