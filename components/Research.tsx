"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { publications } from "@/data/projects";
import { BookOpen, Github, Database, FileText, Sparkles, Layers, ListTodo } from "lucide-react";

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 bg-[var(--background)]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 rounded-full">
            Publications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-3 mb-4">
            Academic Research
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Peer-reviewed scientific contributions in Natural Language Processing, 
            information extraction, and Large Language Model (LLM) benchmarks.
          </p>
        </motion.div>

        {/* Publications Display (Highlighted) */}
        <div className="space-y-12">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="relative group bg-[var(--card-bg)] border-2 border-[var(--accent)]/30 rounded-3xl p-8 md:p-10 shadow-xl shadow-[var(--accent)]/5 hover:border-[var(--accent)] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Highlight ribbon / tag */}
              <div className="absolute top-0 right-0 bg-[var(--accent)] text-white px-6 py-2 rounded-bl-2xl text-sm font-semibold tracking-wide flex items-center gap-1.5 shadow-md">
                <Sparkles size={14} className="animate-pulse" />
                EMNLP 2024
              </div>

              {/* Header Info */}
              <div className="mb-6 max-w-[85%]">
                <span className="text-sm font-medium text-[var(--accent)] uppercase tracking-wide">
                  {pub.conference}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mt-2 leading-tight">
                  {pub.title}
                </h3>
              </div>

              {/* Authors List */}
              <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--muted)]">
                <span className="font-semibold">Authors:</span>
                {pub.authors.map((author, idx) => {
                  const isShoaib = author === "Shoaib Alam";
                  return (
                    <span key={author} className="flex items-center">
                      <span
                        className={
                          isShoaib
                            ? "text-[var(--accent)] font-bold underline decoration-wavy"
                            : "font-medium text-[var(--foreground)]"
                        }
                      >
                        {author}
                      </span>
                      {idx < pub.authors.length - 1 && <span className="ml-2">•</span>}
                    </span>
                  );
                })}
              </div>

              {/* Abstract */}
              <div className="mb-8 p-5 bg-[var(--background)] border border-[var(--card-border)] rounded-2xl">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-2 flex items-center gap-1.5">
                  <FileText size={16} className="text-[var(--accent)]" />
                  Abstract
                </h4>
                <p className="text-[var(--foreground)]/80 text-sm sm:text-base leading-relaxed">
                  {pub.abstract}
                </p>
              </div>

              {/* Metrics & Details Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Dataset Scale */}
                <div className="p-5 bg-[var(--section-alt)] border border-[var(--card-border)] rounded-2xl">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-3 flex items-center gap-1.5">
                    <Layers size={16} className="text-[var(--accent)]" />
                    Dataset Scale
                  </h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {pub.metrics.datasetScale}
                  </p>
                </div>

                {/* Task Configurations */}
                <div className="p-5 bg-[var(--section-alt)] border border-[var(--card-border)] rounded-2xl">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--muted)] mb-3 flex items-center gap-1.5">
                    <ListTodo size={16} className="text-[var(--accent)]" />
                    Core Task Configurations
                  </h4>
                  <ul className="space-y-2">
                    {pub.metrics.tasks.map((task) => {
                      const [title, desc] = task.split(" (");
                      return (
                        <li key={task} className="text-xs sm:text-sm text-[var(--muted)] flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1">•</span>
                          <div>
                            <span className="font-semibold text-[var(--foreground)]">{title}</span>
                            {desc && <span className="text-xs"> ({desc}</span>}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-[var(--card-border)]">
                <a
                  href={pub.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white rounded-xl hover:bg-[var(--accent-light)] transition-colors font-medium shadow-md shadow-[var(--accent)]/25 text-sm"
                >
                  <BookOpen size={16} />
                  Research Paper
                </a>
                <a
                  href={pub.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium text-sm"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
                {pub.dataset && (
                  <a
                    href={pub.dataset}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] rounded-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors font-medium text-sm"
                  >
                    <Database size={16} />
                    OSF Dataset
                  </a>
                )}
              </div>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
