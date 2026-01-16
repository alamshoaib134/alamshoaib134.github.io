"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Nike",
    role: "Software Engineer",
    period: "Present",
    location: "Bangalore, India",
    description:
      "Building innovative solutions for global e-commerce platform. Working on AI/ML integrations, automation tools, and full-stack development to enhance customer experience and internal tooling.",
    highlights: [
      "Developed security scanning tools for detecting secrets in repositories",
      "Built AI-powered search and data processing applications",
      "Created automation bots and browser extensions for productivity",
      "Implemented machine learning pipelines with Jenkins and Airflow",
    ],
    current: true,
  },
  {
    company: "Previous Experience",
    role: "Software Developer",
    period: "Earlier",
    location: "India",
    description:
      "Worked on various software development projects including web applications, data processing systems, and automation tools.",
    highlights: [
      "Full-stack web development with modern frameworks",
      "Data analysis and visualization projects",
      "API development and integration",
      "DevOps and CI/CD pipeline setup",
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-[var(--section-alt)]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            My professional journey in software engineering, building products that make a difference.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[var(--card-border)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              } pl-8 md:pl-0`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-4 border-[var(--accent)] bg-[var(--background)] ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:right-0 md:translate-x-1/2 md:-mr-2"
                    : "left-0 md:-translate-x-1/2 md:-ml-2"
                } -translate-x-1/2`}
              >
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="p-2 bg-[var(--accent)]/10 rounded-xl shrink-0">
                    <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--accent)] font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className={`flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-[var(--muted)] mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className={`text-sm text-[var(--muted)] flex items-start gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-[var(--accent)] mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
