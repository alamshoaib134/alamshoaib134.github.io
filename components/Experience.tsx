"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: "Nike",
    role: "Data Engineer II",
    team: "Data and Artificial Intelligence",
    period: "Oct 2024 - Present",
    duration: "1 yr 4 mos",
    location: "Bengaluru, Karnataka, India",
    type: "Full-time · On-site",
    description:
      "Leading data engineering initiatives for Nike's AI and analytics platforms. Building scalable data pipelines and ML infrastructure to power data-driven decisions.",
    highlights: [
      "Architecting ETL pipelines for large-scale data processing",
      "Building AI/ML data infrastructure and feature stores",
      "Developing automation tools for data quality and monitoring",
      "Collaborating with data scientists on ML model deployment",
    ],
    current: true,
  },
  {
    company: "Nike",
    role: "Data Engineer I",
    team: "Data and Artificial Intelligence",
    period: "Jun 2023 - Oct 2024",
    duration: "1 yr 5 mos",
    location: "Bengaluru, Karnataka, India",
    type: "Full-time · On-site",
    description:
      "Built and maintained data pipelines supporting Nike's global e-commerce and analytics initiatives.",
    highlights: [
      "Developed ETL workflows using modern data stack tools",
      "Created data processing solutions for business intelligence",
      "Implemented data validation and quality frameworks",
      "Contributed to AI-powered search and recommendation systems",
    ],
    current: false,
  },
];

const education = [
  {
    institution: "Indian Institute of Technology Gandhinagar",
    degree: "Master of Technology (MTech)",
    field: "Computer Science",
    period: "Jul 2021 - Jul 2023",
    grade: "9.67 CGPA",
    highlights: [
      "Focus on Machine Learning and Data Science",
      "Research in NLP and Computer Vision",
    ],
  },
  {
    institution: "Bhilai Institute of Technology (BIT), Durg",
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science and Engineering",
    period: "2017 - 2021",
    grade: "9.5 CGPA",
    highlights: [
      "Strong foundation in algorithms and data structures",
      "Projects in web development and automation",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-[var(--section-alt)]" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
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
            2+ years at Nike, building data infrastructure and AI solutions at scale.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-[var(--card-border)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
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
                    <p className="text-sm text-[var(--muted)]">{exp.team}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className={`flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period} · {exp.duration}
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

        {/* Education Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:shadow-lg hover:border-[var(--accent)]/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent)]/10 rounded-xl shrink-0">
                  <GraduationCap className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--accent)] font-medium text-sm mb-1">
                    {edu.field}
                  </p>
                  <p className="text-[var(--muted)] text-sm mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-[var(--muted)] flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
