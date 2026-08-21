"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsappButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/923061758238"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-3 py-3 text-white shadow-2xl transition-all duration-300 hover:pr-5"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <FaWhatsapp className="h-6 w-6 relative z-10 shrink-0" />
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-wider"
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
