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
  const serviceOptions = [
    "GoHighLevel Setup",
    "Sales Funnel",
    "CRM & Pipeline Automation",
    "Workflow Automation",
    "Landing Page / Website",
    "AI Chat & Voice Agent",
    "Calendar & Appointment System",
    "GHL Snapshot",
    "Integration / Webhook",
    "Email & SMS Automation",
    "A2P / 10DLC",
    "Reputation Management",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "923061758238";
    const whatsappMessage = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Service Needed: ${formData.service}`,
      `Project Details: ${formData.message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 border-t border-[#0A66C2]/20 relative transition-colors duration-300"
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
            Ready to automate your lead generation and sales process? Fill out the form below and let&apos;s build your system.
          </p>
          <div className="h-1 w-24 bg-[#0A66C2] mt-4 rounded-full" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* iOS Direct Contact Details Card */}
          <SlideInLeft className="lg:col-span-5 space-y-6">
            <Card className="p-8 bg-white/75 dark:bg-black/75 border-[#0A66C2]/20 backdrop-blur-3xl rounded-[32px]">
              <h3 className="text-2xl font-bold uppercase text-zinc-950 dark:text-white mb-6">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#0A66C2]/20 rounded-2xl">
                  <Phone className="h-5 w-5 text-[#0A66C2] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0A66C2] font-bold">WhatsApp / Phone</p>
                    <a href="tel:+923061758238" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:text-[#0A66C2] transition-colors">
                      +92 306 1758238
                    </a>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">Chat with me directly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#0A66C2]/20 rounded-2xl">
                  <Mail className="h-5 w-5 text-[#0A66C2] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0A66C2] font-bold">Email</p>
                    <a href="mailto:engineeralirazaamir@gmail.com" className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 hover:text-[#0A66C2] transition-colors">
                      engineeralirazaamir@gmail.com
                    </a>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">Send me your project details</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#0A66C2]/20 rounded-2xl">
                  <MapPin className="h-5 w-5 text-[#0A66C2] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0A66C2] font-bold">Location</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                      Muzaffargarh, Pakistan
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/60 dark:bg-black/60 border border-[#0A66C2]/20 rounded-2xl">
                  <Phone className="h-5 w-5 text-[#0A66C2] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#0A66C2] font-bold">Working Hours</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0A66C2] animate-pulse" />
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Available for Remote Projects</p>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">Flexible availability for international clients</p>
                  </div>
                </div>
              </div>
            </Card>
          </SlideInLeft>

          {/* Contact Form with SmoothUI Animated Inputs */}
          <SlideInRight delay={0.1} className="lg:col-span-7">
            <Card className="p-8 bg-white/75 dark:bg-black/75 border-[#0A66C2]/20 backdrop-blur-3xl rounded-[32px]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="h-16 w-16 bg-[#0A66C2] text-white flex items-center justify-center mx-auto rounded-full">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-zinc-950 dark:text-white">
                      WHATSAPP MESSAGE READY
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm max-w-md mx-auto">
                      WhatsApp opened with your details ready to send. Please tap send to start the conversation.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="default"
                        className="rounded-full"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", service: "", message: "" });
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
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <AnimatedInput
                        id="contact-email"
                        label="Email Address"
                        type="email"
                        icon={AtSign}
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="relative w-full pt-4">
                      <div className="relative flex items-center w-full border border-[#0A66C2]/30 hover:border-[#0A66C2] bg-white/80 dark:bg-black/80 backdrop-blur-2xl transition-all duration-300 rounded-2xl focus-within:border-[#0A66C2] focus-within:ring-2 focus-within:ring-[#0A66C2]/40">
                        <div className="pl-4 pr-1 text-[#0A66C2] flex items-center justify-center shrink-0">
                          <Tag className="h-4 w-4" />
                        </div>
                        <select
                          id="contact-service"
                          required
                          aria-label="Service You Need"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-12 px-3 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none font-sans tracking-wide appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Service You Need
                          </option>
                          {serviceOptions.map((option) => (
                            <option key={option} value={option} className="text-zinc-900 dark:text-zinc-100 bg-white dark:bg-black">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <AnimatedTextarea
                      id="contact-message"
                      label="Project Details"
                      icon={MessageSquare}
                      required
                      rows={5}
                      placeholder="Tell me about your business, what you need built or automated, your current setup, timeline, and any specific requirements..."
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
                          <span>Chat on WhatsApp Now</span>
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
