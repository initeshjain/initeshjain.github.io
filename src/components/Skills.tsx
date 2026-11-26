import React from "react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGit,
  SiOpenai,
  SiLangchain,
  SiRedis,
  SiFastapi,
  SiKotlin
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaGolang } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";

interface SkillItem {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

const skillCategories = [
  {
    title: "🤖 Agentic AI & Runtimes",
    skills: [
      { name: "AWS Bedrock", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "LangChain", icon: <SiLangchain className="text-[#1C3C3C]" /> },
      { name: "LangGraph", icon: <SiLangchain className="text-[#1C3C3C]" /> },
      { name: "LangFuse", icon: <SiOpenai className="text-[#10A37F]" /> },
      { name: "OpenAI Realtime", icon: <SiOpenai className="text-[#10A37F]" /> },
      { name: "Multi-Agent Systems", icon: null }
    ]
  },
  {
    title: "⚙️ Core Languages & Microservices",
    skills: [
      { name: "Golang", icon: <FaGolang className="text-[#00ADD8]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "TypeScript", icon: <SiJavascript className="text-[#3178C6]" /> },
      { name: "Java / Spring Boot", icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "Node.js", icon: <IoLogoNodejs className="text-[#339933]" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> }
    ]
  },
  {
    title: "🗄️ Storage, Queues & Distributed State",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Apache Kafka", icon: <SiApachekafka className="text-[#231F20]" /> },
      { name: "Amazon Neptune", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Qdrant Vector DB", icon: null }
    ]
  },
  {
    title: "☁️ Cloud, Infrastructure & SRE",
    skills: [
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Azure", icon: <VscAzure className="text-[#0078D4]" /> },
      { name: "GitHub Actions CI/CD", icon: <SiGit className="text-[#F05032]" /> },
      { name: "Hawk Eye Telemetry", icon: null }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 border-b border-[#E2DFD2] bg-[#F6F4EE]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
            TOOLKIT // OPERATING CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
            Technical Stack &amp; Infrastructure
          </h2>
          <p className="text-[#575969] text-sm mt-1 max-w-xl">
            A battle-tested set of languages, frameworks, and cloud platforms proven across high-throughput production environments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#CBD5E1] bg-white p-6 shadow-xs"
            >
              <h3 className="font-display text-base font-bold text-[#12131C] mb-4 pb-2 border-b border-[#F1F5F9]">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 transition-all hover:bg-white hover:border-[#CBD5E1] hover:shadow-xs"
                  >
                    <span className="text-base shrink-0">
                      {s.icon || <span className="font-mono text-xs text-[#94A3B8]">#</span>}
                    </span>
                    <span className="font-mono text-xs font-medium text-[#334155] truncate">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
