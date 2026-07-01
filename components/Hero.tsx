"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, MapPin, Building2, Download } from "lucide-react";
import { socialLinks } from "@/data/projects";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--background)]"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--card-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--card-border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--accent-light)]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <motion.p
          className="text-[var(--accent)] font-medium mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Shoaib Alam
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-xl sm:text-2xl text-[var(--muted)] mb-6 flex items-center justify-center gap-2 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>AI Engineer</span>
          <span className="text-[var(--accent)]">@</span>
          <span className="flex items-center gap-1">
            <Building2 size={20} className="text-[var(--accent)]" />
            JPMC
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          NLP Researcher from{" "}
          <span className="text-[var(--accent)] font-medium">IIT Gandhinagar</span>. Pioneer of{" "}
          <span className="text-[var(--accent)] font-medium">Fiduciary-Grade Hybrid RAG</span> for{" "}
          <span className="text-[var(--accent)] font-medium">Institutional Finance</span> at JPMC.
        </motion.p>

        {/* Location */}
        <motion.p
          className="flex items-center justify-center gap-2 text-[var(--muted)] mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MapPin size={18} className="text-[var(--accent)]" />
          Bangalore, India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full hover:bg-[var(--accent)] transition-colors font-medium"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--card-border)] text-[var(--foreground)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--card-border)] text-[var(--foreground)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            <Twitter size={18} />
          </a>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1iDi6CSnsAykYviIjS-7nHFm77GMDUkfz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-light)] transition-colors font-medium shadow-lg shadow-[var(--accent)]/25"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
