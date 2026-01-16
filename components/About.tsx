"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Brain, Code2, Zap } from "lucide-react";

const skills = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust ETL pipelines and data infrastructure for analytics and ML at scale.",
    technologies: ["Python", "SQL", "Spark", "Airflow"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing ML infrastructure, feature stores, and deploying models to production.",
    technologies: ["TensorFlow", "PyTorch", "MLflow", "LLMs"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Creating web applications and tools with modern frameworks and best practices.",
    technologies: ["TypeScript", "React", "Node.js", "Next.js"],
  },
  {
    icon: Zap,
    title: "Automation & Tools",
    description: "Building automation solutions, bots, and developer tools for productivity.",
    technologies: ["Selenium", "Chrome Extensions", "APIs"],
  },
];

const techIcons: Record<string, string> = {
  Python: "🐍",
  SQL: "🗃️",
  Spark: "⚡",
  TypeScript: "📘",
  Go: "🔷",
  React: "⚛️",
  Airflow: "🌀",
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[var(--section-alt)]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            I&apos;m a Data Engineer at Nike with an MTech from IIT Gandhinagar. I build 
            scalable data solutions and love creating side projects that solve real problems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent)]/10 rounded-xl">
                  <skill.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-[var(--muted)] mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-[var(--background)] border border-[var(--card-border)] rounded-full text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(techIcons).map(([tech, icon], index) => (
              <motion.div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-full hover:border-[var(--accent)] hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              >
                <span className="text-xl">{icon}</span>
                <span className="font-medium text-[var(--foreground)]">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
