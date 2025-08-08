import React from "react";
import {
  FaCode,
  FaBlog,
  FaBomb,
  FaFolderOpen,
  FaServer,
  FaFilePdf,
  FaWallet,
  FaBrain,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss, SiTypescript, SiLangchain, SiPython, SiDocker, SiGo } from "react-icons/si";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Super Memory (AI-Driven Memory Chatbot)",
      icon: <FaBrain className="inline-block mr-2 text-indigo-500" />,
      description:
        "An AI-powered app where users save memories and converse with them via RAG architecture using embeddings, LangChain, Qdrant, and Next.js.",
      techStack: ["Next.js", "LangChain", "Qdrant", "OpenAI API", "TailwindCSS"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/super-memory",
          type: "secondary",
        },
      ],
    },
    {
      title: "Advanced Expense Tracker",
      icon: <FaWallet className="inline-block mr-2 text-green-500" />,
      description:
        "Collaborative expense and lend/borrow tracker built with Next.js, Prisma, and React — great for personal finance management.",
      techStack: ["Next.js", "Prisma", "TailwindCSS", "PostgreSQL"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/advance-expense-tracker",
          type: "secondary",
        },
      ],
    },
    {
      title: "ChatPDF-RAG Tool",
      icon: <FaFilePdf className="inline-block mr-2 text-red-500" />,
      description:
        "A RAG solution for querying PDF documents conversationally. Built with modern frontend/backend stack and deployable via Docker compose.",
      techStack: ["Next.js", "LangChain", "Pinecone", "Docker", "TailwindCSS"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/ChatPDF-RAG",
          type: "secondary",
        },
      ],
    },
    {
      title: "Quick React Pagination - NPM Package",
      icon: <FaCode className="inline-block mr-2 text-yellow-500" />,
      description:
        "A simple, reusable pagination component for React applications. Helps users navigate through pages of content easily.",
      techStack: ["React", "TypeScript", "NPM"],
      links: [
        {
          text: "NPM.Org",
          url: "https://www.npmjs.com/package/quick-react-pagination",
          type: "primary",
        },
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/quick-react-pagination",
          type: "secondary",
        },
      ],
    },
    {
      title: "Mango – MongoDB Explorer",
      icon: <SiMongodb className="inline-block mr-2 text-emerald-500" />,
      description:
        "A sleek, responsive MongoDB explorer built with Next.js. Lets you view, query, and manage your databases from mobile, tablet, or desktop — anywhere, anytime.",
      techStack: ["Next.js", "MongoDB", "TailwindCSS"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/mango",
          type: "secondary",
        },
      ],
    },
    {
      title: "Code Sharer - CodeSher",
      icon: <FaCode className="inline-block mr-2 text-blue-500" />,
      description:
        "Next.js 13, Tailwind, and TypeScript app to share code snippets with expiry dates, language formatting, and shortened URLs — all without a database.",
      techStack: ["Next.js", "TailwindCSS", "TypeScript"],
      links: [{ text: "Live Preview", url: "https://code.noobgeek.in", type: "primary" }],
    },
    {
      title: "Blog App - noobgeek.in",
      icon: <FaBlog className="inline-block mr-2 text-green-500" />,
      description:
        "Next.js 12, MongoDB, and Google SSO-based platform for blogs, Q&A, and user engagement.",
      techStack: ["Next.js", "MongoDB", "TailwindCSS", "Google SSO"],
      links: [{ text: "Live Preview", url: "https://www.noobgeek.in", type: "primary" }],
    },
    {
      title: "Terrorism Analysis With Insights",
      icon: <FaBomb className="inline-block mr-2 text-red-500" />,
      description:
        "A real client dashboard with maps and charts to analyze terrorism events by region, country, and city. Built during internship at Forsk Technologies.",
      techStack: ["Python", "Flask", "Plotly", "Pandas"],
      links: [
        {
          text: "Live Preview",
          url: "https://terrorism-analysis.onrender.com",
          type: "primary",
        },
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/Terrosism-Analysis",
          type: "secondary",
        },
      ],
    },
    {
      title: "Golang FTP-like Server",
      icon: <FaServer className="inline-block mr-2 text-blue-500" />,
      description:
        "An FTP-style backend service built with Go and SQLite—demonstrates systems programming and backend design.",
      techStack: ["Go", "SQLite"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/golang-ftp-server",
          type: "secondary",
        },
      ],
    },
    {
      title: "File Cluster Cleaner (Python)",
      icon: <FaFolderOpen className="inline-block mr-2 text-green-500" />,
      description:
        "Python script to automatically organize files by extension—makes desktop cleanup effortless.",
      techStack: ["Python"],
      links: [
        {
          text: "Source Code",
          url: "https://github.com/initeshjain/File-Cluster-Cleaner-Script",
          type: "secondary",
        },
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4 flex items-center gap-2">
          <span className="text-yellow-500 mr-3">📂</span> Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  {project.icon}
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="p-6 pt-0 space-x-2">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 py-2 rounded text-sm font-medium transition ${link.type === "primary"
                        ? "bg-yellow-400 text-black hover:bg-yellow-500"
                        : "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                      }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
