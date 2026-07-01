export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  paper?: string;
  featured?: boolean;
}

export interface Publication {
  title: string;
  conference: string;
  abstract: string;
  authors: string[];
  github: string;
  paper: string;
  dataset?: string;
  metrics: {
    datasetScale: string;
    tasks: string[];
  };
}

export const publications: Publication[] = [
  {
    title: "LEGOBench: Scientific Leaderboard Generation Benchmark",
    conference: "Findings of EMNLP 2024",
    abstract:
      "LEGOBench is a benchmark framework designed to evaluate systems that automatically generate scientific leaderboards. The research evaluates popular encoder-only scientific language models and decoder-only Large Language Models (LLMs) across multiple graph-based and language model-based configurations, revealing significant performance gaps in state-of-the-art systems.",
    authors: ["Shoaib Alam", "Shruti Singh", "Husain Malwat", "Mayank Singh"],
    github: "https://github.com/lingo-iitgn/LEGOBench",
    paper: "https://arxiv.org/abs/2401.06233",
    dataset: "https://osf.io/9v2py/",
    metrics: {
      datasetScale:
        "Curated using 22 years of preprint submission data from arXiv combined with over 11,000 machine learning leaderboards from the PapersWithCode portal.",
      tasks: [
        "Ranking Papers based on Content and Graph (RPG)",
        "Ranking Papers by Prompting Language Models (RPLM)",
        "Leaderboard Entries Generation by Prompting Language Models (LGPLM)",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    name: "git-secret-scanner",
    description:
      "A powerful security scanning tool that detects and prevents secret leaks in Git repositories. Helps maintain code security by identifying exposed credentials and sensitive data.",
    tech: ["TypeScript", "Node.js", "Security"],
    github: "https://github.com/alamshoaib134/git-secret-scanner",
    featured: true,
  },
  {
    name: "AI-Image-Search",
    description:
      "AI-powered image search application leveraging machine learning to find and retrieve images based on semantic understanding and visual similarity.",
    tech: ["Python", "AI/ML", "Computer Vision"],
    github: "https://github.com/alamshoaib134/AI-Image-Search",
    featured: true,
  },
  {
    name: "Table-Mapper-AI",
    description:
      "Intelligent table mapping tool that uses AI to automatically detect, extract, and transform tabular data from various document formats.",
    tech: ["Python", "AI/ML", "Data Processing"],
    github: "https://github.com/alamshoaib134/Table-Mapper-AI",
    featured: true,
  },
  {
    name: "HealthTracker",
    description:
      "A comprehensive health monitoring application that helps users track fitness metrics, nutrition, and wellness goals with intuitive visualizations.",
    tech: ["JavaScript", "Health Tech", "Web App"],
    github: "https://github.com/alamshoaib134/HealthTracker",
    featured: true,
  },
  {
    name: "Al-Quran",
    description:
      "A comprehensive tool for Quranic analysis and verse search featuring an intuitive web interface for searching verses and statistical analysis visualization.",
    tech: ["Python", "NLP", "Data Visualization"],
    github: "https://github.com/alamshoaib134/Al-Quran",
    featured: true,
  },
  {
    name: "face-recognition",
    description:
      "Machine learning-based face recognition system capable of detecting and recognizing faces in images and videos with high accuracy.",
    tech: ["Python", "ML", "OpenCV"],
    github: "https://github.com/alamshoaib134/face-recognition",
    featured: true,
  },
  {
    name: "chrome-extension",
    description:
      "Collection of Chrome extensions enhancing browsing experience with features including downloaders, glossary tools, and LLM integrations.",
    tech: ["JavaScript", "Chrome API", "Browser Extension"],
    github: "https://github.com/alamshoaib134/chrome-extension",
    featured: true,
  },
  {
    name: "Telegram-bot",
    description:
      "Automated Telegram bot providing various utility functions and integrations for enhanced messaging and task automation.",
    tech: ["Python", "Telegram API", "Automation"],
    github: "https://github.com/alamshoaib134/Telegram-bot",
    featured: true,
  },
  {
    name: "emoji-gravity",
    description:
      "Fun web application simulating emojis falling under gravity. Interactive canvas-based physics simulation with bouncing effects.",
    tech: ["JavaScript", "Canvas", "Physics"],
    github: "https://github.com/alamshoaib134/emoji-gravity",
    demo: "https://alamshoaib134.github.io/emoji-gravity",
  },
  {
    name: "auto-quora-answer-bot-using-llm",
    description:
      "Python script that automates Quora interactions using Selenium and OpenAI to generate and post intelligent responses.",
    tech: ["Python", "OpenAI", "Selenium"],
    github: "https://github.com/alamshoaib134/auto-quora-answer-bot-using-llm",
  },
  {
    name: "chat-with-CSV",
    description:
      "LLaMA-powered document chatbot enabling natural language queries and insights extraction from CSV documents.",
    tech: ["Python", "LLaMA", "NLP"],
    github: "https://github.com/alamshoaib134/chat-with-CSV",
  },
  {
    name: "nlp_pipeline",
    description:
      "End-to-end NLP pipeline demo showcasing Jenkins and Airflow integration for automated ML workflows.",
    tech: ["Python", "Jenkins", "Airflow"],
    github: "https://github.com/alamshoaib134/nlp_pipeline",
  },
];

export const socialLinks = {
  github: "https://github.com/alamshoaib134",
  linkedin: "https://linkedin.com/in/alamshoaib134",
  twitter: "https://x.com/alamshoaib134",
  email: "mailto:alamshoaib134@gmail.com",
};

export const techStack = [
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Go", icon: "go" },
  { name: "C++", icon: "cpp" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Machine Learning", icon: "ml" },
];
