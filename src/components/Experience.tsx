import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "March 2023 - Present",
      title: "Software Engineer | Tata Consulting Services - (The Kroger Co.)",
      description: [
        "Working on Curation of Item data (Spring boot, Java, Neo4J, Kafka).",
        "Designed, developed, and maintained microservices architecture for Items Curation using Java and Spring Boot, facilitating efficient data processing and retrieval within the item flow ecosystem.",
        "Engineered an automated utility for SSL certificate renewal, guaranteeing 100% on-time renewals for Kroger's critical Product Information Management (PIM) application, which prevented potential downtime and bolstered security.",
        "Developed the Hawk Eye application using Golang and ReactJs to manage 17+ systems, streamlining item flow and driving substantial operational efficiency and cost savings.",
        "Built a Competency Management system for TCS Kroger account using Golang, ReactJs, and PostgreSQL, improving employee skill tracking by 50% and significantly boosting team performance.",
        "Actively participated in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency."
      ]
    },
    {
      period: "Jan 2021 - July 2023",
      title: "DevOps Engineer and Tech Lead | Tata Consulting Services - (The Kroger Co.)",
      description: [
        "Built deployment pipelines with GitHub Actions and JFrog Artifactory, increasing deployment speed by 30%.",
        "Implemented RESTful APIs to enable seamless interaction between various components, ensuring smooth data exchange and interoperability.",
        "Leveraged Go Lang to optimize performance-critical modules, enhancing the scalability and responsiveness of the application.",
        "Developed modular monitoring tools using PowerShell, Python, REST APIs, and SQL, that automate alerts on threshold breaches, saving 60+ hours of manual work and reducing costs by $5,000.",
        "Built an images processing tracking system with automated alerts (Email, ServiceNow, Teams), saving $10,000 per quarter and speeding up time to market.",
        "Led a team of 14, increasing productivity by 20% and cutting critical issue response time by 15%.",
        "Led a POC for migrating TIBCO preprocessor systems from RHEL 6 to RHEL 8.",
        "Collaborated closely with cross-functional teams to analyse requirements, architect solutions, and deliver high-quality software products within strict timelines."
      ]
    },
    {
      period: "Sept-Oct 2020",
      title: "Data Analyst Intern - Forsk Technologies Pvt. Ltd., Jaipur",
      description: [
        "Worked as Data Science Intern and completed Analytic Project titled Terrorism Analysis using Python.",
        "Learned Pandas, Numpy, Dash Plotly."
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