"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { socialLinks } from "@/data/projects";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alamshoaib134@gmail.com",
    href: socialLinks.email,
    color: "bg-red-500/10 text-red-500 dark:text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@alamshoaib134",
    href: socialLinks.github,
    color: "bg-gray-900/10 dark:bg-gray-100/10 text-gray-900 dark:text-gray-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/alamshoaib134",
    href: socialLinks.linkedin,
    color: "bg-blue-600/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    value: "@alamshoaib134",
    href: socialLinks.twitter,
    color: "bg-sky-500/10 text-sky-500 dark:text-sky-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[var(--section-alt)]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== "Email" ? "_blank" : undefined}
              rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`p-3 rounded-xl ${method.color}`}>
                <method.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[var(--muted)] mb-0.5">{method.label}</p>
                <p className="font-medium text-[var(--foreground)] truncate group-hover:text-[var(--accent)] transition-colors">
                  {method.value}
                </p>
              </div>
              <Send className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--card-bg)] rounded-full border border-[var(--card-border)]">
            <MapPin className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[var(--muted)]">Based in</span>
            <span className="font-medium text-[var(--foreground)]">Bangalore, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
