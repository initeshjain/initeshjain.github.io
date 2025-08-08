import React from "react";
import {
  SiPython,
  SiCplusplus,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiReactos,
  SiMongodb,
  SiPostgresql,
  SiNeo4J,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGit,
  SiIntellijidea,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiApachecassandra,
  SiJfrogpipelines,
  SiOpenai,
  SiHuggingface,
  SiLangchain
} from "react-icons/si";

import { TbBrandVscode, TbBrandPowershell, TbProtocol } from "react-icons/tb";
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FaGolang } from "react-icons/fa6";
import { SiWondersharefilmora } from "react-icons/si";
import { GiArchiveResearch, GiSkills } from "react-icons/gi";
import { IoLogoNodejs } from "react-icons/io5";

interface SkillProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillChip: React.FC<SkillProps> = ({ name, icon }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-sm hover:shadow-lg transition-all border border-white/20 hover:-translate-y-1">
    <div className="w-14 h-14 flex items-center justify-center text-3xl rounded-full">
      {icon || <span className="text-gray-400">🎯</span>}
    </div>
    <span className="text-xs font-medium  text-center">{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Python: <SiPython />,
    Java: <FaJava />,
    "C++": <SiCplusplus />,
    AWS: <FaAws />,
    Azure: <VscAzure />,
    Heroku: <SiHeroku />,
    Netlify: <SiNetlify />,
    Vercel: <SiVercel />,
    HTML5: <SiHtml5 />,
    "HTML5 & CSS3": (
      <>
        <SiHtml5 />
        <SiCss3 />
      </>
    ),
    Bootstrap: <SiBootstrap />,
    Javascript: <SiJavascript />,
    "React JS": <SiReact />,
    "Next JS": <SiNextdotjs />,
    "React Native": <SiReactos />,
    MongoDB: <SiMongodb />,
    PostgreSQL: <SiPostgresql />,
    Neo4J: <SiNeo4J />,
    Docker: <SiDocker />,
    "Docker & Kubernetes": (
      <>
        <SiDocker />
        <SiKubernetes />
      </>
    ),
    "Kafka & Rabbit MQ": <SiApachekafka />,
    Git: <SiGit />,
    "VSCode & IntelliJ IDE": (
      <>
        <TbBrandVscode />
        <SiIntellijidea />
      </>
    ),
    "Premiere Pro": <SiAdobepremierepro />,
    "Design (Posts. Book Cover etc.)": <SiAdobephotoshop />,
    Figma: <SiFigma />,
    Powershell: <TbBrandPowershell />,
    Golang: <FaGolang />,
    Filmora: <SiWondersharefilmora />,
    "Content Research": <GiArchiveResearch />,
    Cassandra: <SiApachecassandra />,
    "CI/CD (GitHub Actions, JFrog etc.)": <SiJfrogpipelines />,
    "OpenAI / GPT": <SiOpenai />,
    "Hugging Face": <SiHuggingface />,
    "LangChain": <SiLangchain />,
    MCP: <TbProtocol />,
    NodeJs: <IoLogoNodejs />
  };

  const skillCategories = [
    {
      title: "☁️ Cloud",
      skills: ["Vercel", "AWS", "Azure", "Heroku", "Netlify"]
    },
    {
      title: "⚙️ Programming & Backend",
      skills: ["NodeJs", "Golang", "Python", "Powershell", "Java"]
    },
    {
      title: "💻 Frontend / Web",
      skills: [
        "HTML5 & CSS3",
        "Bootstrap",
        "Javascript",
        "React JS",
        "Next JS",
        "React Native"
      ]
    },
    {
      title: "🤖 AI / LLM / MCP Tools",
      skills: ["OpenAI / GPT", "Hugging Face", "LangChain", "MCP"]
    },
    {
      title: "🎨 Other Tools",
      skills: [
        "Premiere Pro",
        "Filmora",
        "Design (Posts. Book Cover etc.)",
        "Content Research"
      ]
    },
    {
      title: "🗄 Databases",
      skills: ["PostgreSQL", "MongoDB", "Cassandra", "Neo4J"]
    },
    {
      title: "🛠 Developer Tools",
      skills: [
        "CI/CD (GitHub Actions, JFrog etc.)",
        "Git",
        "Docker & Kubernetes",
        "Kafka & Rabbit MQ",
        "VSCode & IntelliJ IDE"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4 flex items-center gap-2">
          <GiSkills /> My Tech Stack
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border transition-all bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col"
            >
              <h5 className="text-xl font-semibold mb-6">{category.title}</h5>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillChip
                    key={skillIndex}
                    name={skill}
                    icon={iconMap[skill] || null}
                  />
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
