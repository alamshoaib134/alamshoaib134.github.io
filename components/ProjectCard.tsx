"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Play, Star, GitFork } from "lucide-react";
import type { Project } from "@/data/projects";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface RepoStats {
  stars: number;
  forks: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [stats, setStats] = useState<RepoStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const repoName = project.github.split("/").pop();
        if (!repoName) return;
        
        const response = await fetch(
          `https://api.github.com/repos/alamshoaib134/${repoName}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setStats({
            stars: data.stargazers_count,
            forks: data.forks_count,
          });
        }
      } catch {
        // Silently fail - stats are optional
      }
    };

    fetchStats();
  }, [project.github]);

  return (
    <motion.div
      className="group relative bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] p-6 hover:border-[var(--accent)]/30 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-[var(--accent)]/10 rounded-xl group-hover:bg-[var(--accent)]/20 transition-colors">
          <Folder className="w-6 h-6 text-[var(--accent)]" />
        </div>
        <div className="flex items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-green-500 transition-colors"
              aria-label={`View live demo of ${project.name}`}
            >
              <Play size={20} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={20} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            aria-label={`Open ${project.name}`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {project.name}
        </a>
      </h3>
      <p className="text-[var(--muted)] mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>

      {/* GitHub Stats */}
      {stats && (stats.stars > 0 || stats.forks > 0) && (
        <div className="flex items-center gap-4 mb-4 text-sm text-[var(--muted)]">
          {stats.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" />
              {stats.stars}
            </span>
          )}
          {stats.forks > 0 && (
            <span className="flex items-center gap-1">
              <GitFork size={14} />
              {stats.forks}
            </span>
          )}
        </div>
      )}

      {/* Demo Badge */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full hover:bg-green-500/20 transition-colors"
        >
          <Play size={14} />
          Live Demo
        </a>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium bg-[var(--background)] border border-[var(--card-border)] rounded-full text-[var(--muted)] group-hover:border-[var(--accent)]/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
