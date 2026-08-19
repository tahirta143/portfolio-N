"use client";

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { ElasticGallery } from "./ui/elastic-gallery";
import { FadeUp } from "./ui/motion";
import { motion } from "framer-motion";

const projects = [
  {
    id: "nexus-mesh",
    title: "NEXUS SYNAPSE",
    subtitle: "Real-time Distributed Infrastructure Monitor",
    category: "Full-Stack System",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    description: "Enterprise analytics dashboard monitoring distributed cloud nodes with low-latency WebSockets, sub-10ms rendering pipelines, and customizable SVG visualization panels.",
    highlights: [
      "Sub-10ms live telemetry streaming engine",
      "Dynamic customizable layout drag-and-drop system",
      "Strict monochrome aesthetic",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "WebSockets", "Node.js"],
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/example/nexus",
  },
  {
    id: "quantum-ui",
    title: "QUANTUM MOTION UI",
    subtitle: "High-Performance Animation Primitive Engine",
    category: "Open Source Library",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    description: "A lightweight, production-ready React motion component kit built with Framer Motion and Tailwind CSS. Features over 35+ accessible, physics-based micro-interaction primitives.",
    highlights: [
      "Zero layout shift design philosophy",
      "Tree-shakeable ESM package distribution",
      "Comprehensive Storybook interactive documentation",
    ],
    tech: ["React", "Framer Motion", "Tailwind CSS", "TypeScript", "Rollup"],
    liveUrl: "https://example.com/quantum",
    githubUrl: "https://github.com/example/quantum",
  },
  {
    id: "aegis-commerce",
    title: "AEGIS STORE",
    subtitle: "Headless E-Commerce & Next.js Storefront",
    category: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    description: "Ultra-fast headless commerce platform featuring instant page transitions, optimistic cart state management, automated tax calculations, and Stripe Payment Intent integration.",
    highlights: [
      "99/100 Google Lighthouse performance score",
      "Global CDN edge caching via Next.js ISR",
      "Custom monochrome product 3D canvas viewer",
    ],
    tech: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe", "GraphQL"],
    liveUrl: "https://example.com/aegis",
    githubUrl: "https://github.com/example/aegis",
  },
  {
    id: "synapse-ai",
    title: "CYPHER ASSISTANT",
    subtitle: "AI IDE Extension & Code Refactoring Suite",
    category: "Developer Tools",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    description: "AI-assisted developer tool providing contextual code explanations, automated unit test generation, and AST-based refactoring directly within the web workspace.",
    highlights: [
      "Local LLM fallback & streaming API responses",
      "AST parser for automated code structure analysis",
      "Keyboard-first shortcut navigation flow",
    ],
    tech: ["Next.js", "WebAssembly", "Tailwind CSS", "OpenAI API", "Monaco Editor"],
    liveUrl: "https://example.com/cypher",
    githubUrl: "https://github.com/example/cypher",
  },
  {
    id: "atlas-map",
    title: "ATLAS GEO PLATFORM",
    subtitle: "Real-Time Geospatial Data Visualization",
    category: "Data Visualization",
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1400&q=80",
    description: "Interactive 3D geospatial visualization platform rendering live satellite telemetry, urban mobility heatmaps, and climate model overlays at 60fps using WebGL and Deck.gl.",
    highlights: [
      "WebGL 3D tile rendering at 60fps",
      "Live satellite telemetry overlays",
      "Custom shader-based heatmaps",
    ],
    tech: ["React", "Deck.gl", "Mapbox GL", "WebGL", "Node.js"],
    liveUrl: "https://example.com/atlas",
    githubUrl: "https://github.com/example/atlas",
  },
];

const categories = ["All", "Full-Stack System", "Open Source Library", "E-Commerce Platform", "Developer Tools", "Data Visualization"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <Badge variant="outline" className="mb-3 rounded-full">
              03 // ELASTIC ACCORDION SHOWCASE
            </Badge>
            <motion.h2
              initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
              whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
            >
              PROJECT ARCHIVE &amp; CASE STUDIES
            </motion.h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light">
              Hover any panel to expand — details, tech stack, and links reveal on focus.
            </p>
            <div className="h-1 w-24 bg-[#88a725] mt-4 rounded-full" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-full ${
                  activeCategory === cat
                    ? "bg-[#88a725] text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Elastic Gallery */}
        <FadeUp delay={0.12}>
          <ElasticGallery items={filteredProjects} />
        </FadeUp>
      </div>
    </section>
  );
}
