"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedInput, AnimatedTextarea } from "./ui/animated-input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Mail, MapPin, Phone, Send, CheckCircle2, User, AtSign, Tag, MessageSquare } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "./ui/motion";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#88a725]/20 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeUp className="mb-16">
          <Badge variant="outline" className="mb-3 rounded-full">
            07 // INITIATE COLLABORATION
          </Badge>
          <motion.h2
            initial={{ clipPath: "inset(0 0 100% 0)", y: 20 }}
            whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-zinc-950 dark:text-white"
          >
            GET IN TOUCH
          </motion.h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm mt-2 font-light max-w-lg">
            Have a high-impact project or lead frontend opportunity? Fill out the interactive form below.
          </p>
          <div className="h-1 w-24 bg-[#88a725] mt-4 rounded-full" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* iOS Direct Contact Details Card */}
          <SlideInLeft className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-white/75 dark:bg-black/75 border-[#88a725]/20 backdrop-blur-3xl rounded-[32px]">
              <h3 className="text-2xl font-bold uppercase text-zinc-950 dark:text-white mb-6">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#88a725]/20 rounded-2xl">
                  <Mail className="h-5 w-5 text-[#88a725] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#88a725] font-bold">Direct Email</p>
                    <a href="mailto:m.tahir@example.com" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:text-[#88a725] transition-colors">
                      m.tahir@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#88a725]/20 rounded-2xl">
                  <MapPin className="h-5 w-5 text-[#88a725] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#88a725] font-bold">Location</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                      San Francisco, CA / Remote Worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#88a725]/20 rounded-2xl">
                  <Phone className="h-5 w-5 text-[#88a725] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#88a725] font-bold">Availability</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#88a725] animate-pulse" />
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Q3/Q4 Project Inquiries Open</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </SlideInLeft>

          {/* Contact Form with SmoothUI Animated Inputs */}
          <SlideInRight delay={0.1} className="lg:col-span-7">
            <Card className="p-8 bg-white/75 dark:bg-black/75 border-[#88a725]/20 backdrop-blur-3xl rounded-[32px]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="h-16 w-16 bg-[#88a725] text-white flex items-center justify-center mx-auto rounded-full">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-zinc-950 dark:text-white">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm max-w-md mx-auto">
                      Thank you for reaching out. Your inquiry has been logged and I will respond within 24 hours.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="default"
                        className="rounded-full"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", subject: "", message: "" });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <AnimatedInput
                        id="contact-name"
                        label="Your Name"
                        icon={User}
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <AnimatedInput
                        id="contact-email"
                        label="Email Address"
                        type="email"
                        icon={AtSign}
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <AnimatedInput
                      id="contact-subject"
                      label="Subject Header"
                      icon={Tag}
                      required
                      placeholder="Project Scope / Hiring Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />

                    <AnimatedTextarea
                      id="contact-message"
                      label="Message Brief"
                      icon={MessageSquare}
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, tech stack, or objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full justify-center gap-3 text-sm rounded-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                          <span>Transmitting...</span>
                        </div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </Card>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
