"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { socialLinks } from "@/data/projects";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold hover:text-[#3B82F6] transition-colors"
            >
              SA<span className="text-[#3B82F6]">.</span>
            </a>
            <p className="text-[#9CA3AF] mt-2 text-sm">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#9CA3AF] hover:text-white transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#9CA3AF] hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#9CA3AF] hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#9CA3AF] hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Copyright */}
        <div className="text-center text-[#9CA3AF] text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Shoaib Alam
          </p>
          <p className="mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
