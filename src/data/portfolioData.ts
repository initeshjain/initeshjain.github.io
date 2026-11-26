export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI & Agents" | "Systems & Cloud" | "Mobile & Apps" | "Open Tools";
  badges: string[];
  links: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "lumina",
    title: "Lumina",
    tagline: "Privacy-first Android Gallery",
    description: "A blazing-fast, privacy-first, gesture-driven Android gallery built 100% with Kotlin & Jetpack Compose. Zero analytics, local-first media indexing.",
    category: "Mobile & Apps",
    badges: ["Android", "Kotlin", "Jetpack Compose", "Local-First"],
    links: [
      { label: "Download APK ↗", url: "https://github.com/initeshjain/Lumina.apk/releases/download/v2.0.0/Lumina_v2.0.0.apk", primary: true },
      { label: "GitHub ↗", url: "https://github.com/initeshjain/Lumina.apk" }
    ],
    featured: true
  },
  {
    id: "super-memory",
    title: "Super Memory",
    tagline: "Conversational RAG Cognitive Recall",
    description: "An AI-powered cognitive memory assistant where users converse with unstructured notes and memories using LangChain, Qdrant vector database, and Next.js.",
    category: "AI & Agents",
    badges: ["AI / RAG", "LangChain", "Qdrant", "Next.js"],
    links: [
      { label: "Inspect Source ↗", url: "https://github.com/initeshjain/super-memory", primary: true }
    ],
    featured: true
  },
  {
    id: "chatpdf-rag",
    title: "ChatPDF-RAG",
    tagline: "Semantic PDF Intelligence Engine",
    description: "Document intelligence engine generating text embeddings to perform high-precision vector similarity search and grounded LLM answers over PDF documents.",
    category: "AI & Agents",
    badges: ["GenAI", "Embeddings", "Vector DB", "Docker"],
    links: [
      { label: "Inspect Source ↗", url: "https://github.com/initeshjain/ChatPDF-RAG", primary: true }
    ],
    featured: true
  },
  {
    id: "security-audit-agent",
    title: "Pre-Launch Security Audit Agent",
    tagline: "Autonomous Agent Skill",
    description: "Autonomous agent skill performing automated vulnerability scans, permission verification, and credential leak detection prior to production deployments.",
    category: "AI & Agents",
    badges: ["Agentic AI", "Security", "DevOps"],
    links: [
      { label: "Inspect Source ↗", url: "https://github.com/initeshjain/pre-launch-security-audit-agent-skill", primary: true }
    ],
    featured: true
  },
  {
    id: "shokunin",
    title: "The Shokunin",
    tagline: "Artisan Marketplace Platform",
    description: "A specialized multi-sided marketplace connecting traditional artisans and craftsmen directly with buyers. Features full buyer/seller journeys and Razorpay checkout.",
    category: "Systems & Cloud",
    badges: ["Next.js", "TypeScript", "Razorpay", "E-Commerce"],
    links: [
      { label: "Live Portal ↗", url: "https://artisan.noobgeek.in/", primary: true }
    ]
  },
  {
    id: "golang-ftp",
    title: "Go FTP Server",
    tagline: "Concurrent Systems Service",
    description: "A lightweight, concurrent FTP-like server built with Go and SQLite for structured file storage and low-overhead network transfers.",
    category: "Systems & Cloud",
    badges: ["Go", "SQLite", "Concurrency", "Systems"],
    links: [
      { label: "Inspect Source ↗", url: "https://github.com/initeshjain/golang-ftp-server", primary: true }
    ]
  },
  {
    id: "quick-pagination",
    title: "Quick React Pagination",
    tagline: "Lightweight NPM Package",
    description: "Zero-dependency, accessible, highly customizable pagination component for React applications published to the public NPM registry.",
    category: "Open Tools",
    badges: ["NPM Package", "React", "TypeScript"],
    links: [
      { label: "NPM Registry ↗", url: "https://www.npmjs.com/package/quick-react-pagination", primary: true },
      { label: "GitHub ↗", url: "https://github.com/initeshjain/quick-react-pagination" }
    ]
  },
  {
    id: "mango",
    title: "Mango",
    tagline: "Web-Based MongoDB Explorer",
    description: "Clean, responsive database explorer built with Next.js allowing engineers to query, inspect, and manage MongoDB instances from any device or mobile browser.",
    category: "Open Tools",
    badges: ["MongoDB", "Next.js", "Database Tool"],
    links: [
      { label: "Inspect Source ↗", url: "https://github.com/initeshjain/mango", primary: true }
    ]
  },
  {
    id: "codesher",
    title: "CodeSher",
    tagline: "Ephemeral Code & Snippet Sharer",
    description: "Privacy-centric snippet sharing utility with syntax highlighting, custom expiration dates, and vanity shortened URLs without database overhead.",
    category: "Open Tools",
    badges: ["TypeScript", "Next.js", "Web Utility"],
    links: [
      { label: "Live Demo ↗", url: "https://code.noobgeek.in", primary: true }
    ]
  },
  {
    id: "noobgeek",
    title: "noobgeek.in",
    tagline: "Developer Community & Knowledge Hub",
    description: "Technical blogging and collaborative Q&A platform built with Next.js, MongoDB, and Google SSO for developers to exchange systems insights.",
    category: "Open Tools",
    badges: ["Next.js", "MongoDB", "Auth", "Community"],
    links: [
      { label: "Visit Platform ↗", url: "https://www.noobgeek.in", primary: true }
    ]
  }
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  badge?: string;
  bullets: string[];
  tech: string[];
}

export const experiencesData: Experience[] = [
  {
    company: "Winter",
    role: "Polyglot AI Engineer",
    period: "Apr 2026 – Present",
    location: "Remote · India",
    badge: "CURRENT STATION",
    bullets: [
      "Automating Comprehensive Medication Reviews (CMR) in the healthcare sector using agentic AI architectures.",
      "Architecting an agentic orchestrator for collaborative multi-agent families to streamline clinical workflows.",
      "Leveraging AWS Bedrock, Amazon Neptune, S3, Aurora, and AWS Lambda for scalable LLM orchestration."
    ],
    tech: ["Python", "AWS Bedrock", "Amazon Neptune", "PostgreSQL", "Docker", "Lambda", "Multi-Agent"]
  },
  {
    company: "PeerIslands",
    role: "SWE & AI Engineer",
    period: "Sep 2025 – Apr 2026",
    location: "Remote · United States",
    bullets: [
      "Engineered healthcare revenue collection platform features driving revenue optimization across IFU, EBO, and BD business units.",
      "Architected 2 production voice agents using OpenAI GPT-4 Realtime API via WebSockets for dues discovery and pharmacy intake.",
      "Developed AI outreach agents with LangChain & LangGraph; integrated LangFuse for granular token-level observability across GPT-4 and GPT-5 models.",
      "Built React + TypeScript interfaces with React Flow visual workflows and interactive campaign cohorts."
    ],
    tech: ["Golang", "Python", "OpenAI Realtime", "LangChain", "LangGraph", "LangFuse", "WebSockets", "React Flow"]
  },
  {
    company: "Tata Consultancy Services (The Kroger Co.)",
    role: "Software Engineer — Item Flow Ecosystem",
    period: "Mar 2023 – Sep 2025",
    location: "Hybrid · Indore",
    bullets: [
      "Optimized enterprise microservices handling 10M+ daily transactions using Java, Spring Boot, and Kafka, improving query speed by 40%.",
      "Engineered 'Hawk Eye' monitoring hub (Go + React), unifying telemetry across 17+ enterprise platforms and slashing operational friction by 30%.",
      "Automated SSL certificate renewals with zero downtime for Kroger's critical PIM application.",
      "Developed Competency Management System using Go, React, and PostgreSQL, accelerating employee skill tracking by 50%."
    ],
    tech: ["Java", "Spring Boot", "Golang", "Kafka", "Neo4j", "PostgreSQL", "React"]
  },
  {
    company: "Tata Consultancy Services (The Kroger Co.)",
    role: "DevOps Engineer & Tech Lead",
    period: "Mar 2021 – Jul 2023",
    location: "Remote · Mumbai",
    bullets: [
      "Led a 14-member DevOps engineering team, boosting delivery velocity by 20% and reducing critical issue turnaround by 15%.",
      "Architected automated CI/CD pipelines with GitHub Actions and JFrog Artifactory, cutting deployment failure rates by 80%.",
      "Engineered image processing alert system across Teams, ServiceNow, and Email, saving $10,000 per quarter.",
      "Built modular automated monitoring utilities in PowerShell and Python, eliminating 60+ hours/month of manual intervention."
    ],
    tech: ["GitHub Actions", "JFrog", "Kubernetes", "Docker", "Azure", "AWS", "Python", "PowerShell"]
  }
];

export const metricsData = [
  { value: "10M+", label: "Daily Transactions", sub: "Microservices optimized @ Kroger", color: "#1D4ED8" },
  { value: "17+", label: "Platforms Monitored", sub: "Hawk Eye Go/React hub", color: "#047857" },
  { value: "-80%", label: "Deploy Failures", sub: "CI/CD automated pipelines", color: "#B45309" },
  { value: "14", label: "Engineers Led", sub: "DevOps Tech Lead team", color: "#6D28D9" }
];
