import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "Sept 2025 - Present",
      title: "Software Engineer (Full Stack + AI) | PeerIslands.io",
      description: [
        "Building and extending a healthcare revenue collection platform using Golang, Python, ReactJS, MongoDB, and SQL Server, focused on AI-driven revenue optimization.",
        "Developed AI outreach agents using LangChain and LangGraph to generate optimal patient and insurance outreach strategies across IFU, EBO, and BD business units, automating compliance-aware recommendations.",
        "Architected two voice agents using OpenAI GPT-4 Realtime API with WebSockets — a patient outreach agent for dues discovery and a pharmacy medication agent automating patient data intake into systems like Outcomes.",
        "Building complex React + TypeScript UIs (campaigns, cohorts, dashboards, chatbot, and React Flow–based workflows).",
        "Integrated LangFuse for LLM observability and tracing; leveraging GPT-4, GPT-4o-Mini, and GPT-5 models across production features.",
        "Mentored interns on AI and full-stack development; actively contributing to PeerIslands' 25 AI POCs in 25 Days initiative.",
        "Tech: Golang, Python, ReactJS, LangChain, LangGraph, LangFuse, OpenAI GPT-4/5, MongoDB, SQL Server, WebSockets"
      ]
    },
    {
      period: "March 2023 - Sept 2025",
      title: "Software Engineer | Tata Consultancy Services (The Kroger Co.)",
      description: [
        "Optimized enterprise microservices using Java, Spring Boot, and Kafka, improving query speed by 40% for 10M+ daily transactions.",
        "Developed Hawk Eye (Golang + React.js), a monitoring system managing 17+ enterprise platforms, reducing operational inefficiencies by 30%.",
        "Engineered automated SSL certificate renewal for Kroger's critical PIM application, ensuring zero downtime and 100% security compliance.",
        "Built a Competency Management System using Golang, React, and PostgreSQL, improving employee skill tracking efficiency by 50%.",
        "Built rule-based data quality engines using Node.js for retail client data pipelines.",
        "Conducted code reviews, enforcing best practices and improving maintainability across teams."
      ]
    },
    {
      period: "Jan 2021 - July 2023",
      title: "DevOps Tech Lead | Tata Consultancy Services (The Kroger Co.)",
      description: [
        "Built fully automated CI/CD pipelines with GitHub Actions and JFrog Artifactory, reducing deployment failures by 80%.",
        "Led a 14-member DevOps team, increasing productivity by 40% and cutting critical incident response time by 35%.",
        "Engineered automated image tracking and alert system (Email, ServiceNow, Teams), saving $10K per quarter.",
        "Developed modular monitoring tools using PowerShell, Python, REST APIs, and SQL, saving 60+ hours/month of manual effort.",
        "Collaborated with cross-functional teams to architect and deploy scalable cloud-native solutions on AWS and Azure."
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4">
          <i className="fas fa-draw-polygon mr-3"></i>
          Experience
        </h1>
        <div className="resume-box p-8 mx-4">
          <ul className="space-y-0">
            {experiences.map((exp, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <span className="bg-warning text-white text-xs px-3 py-1 rounded-full font-semibold inline-block mb-3">
                  {exp.period}
                </span>
                <h5 className="text-lg font-bold mb-3">{exp.title}</h5>
                <div className="text-gray-700">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="mb-2">- {desc}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;