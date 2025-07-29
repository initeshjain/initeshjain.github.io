import React from 'react';

interface SkillProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage }) => (
  <div className="mb-3">
    <div className="bg-gray-200 rounded h-6 relative overflow-hidden">
      <div
        className="progress-bar h-full rounded transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-xs px-2">{name}</span>
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud",
      icon: "fas fa-cloud",
      skills: [
        { name: "Vercel", percentage: 95 },
        { name: "AWS", percentage: 60 },
        { name: "Azure", percentage: 75 },
        { name: "Heroku", percentage: 70 },
        { name: "Netlify", percentage: 69 }
      ]
    },
    {
      title: "Programming Lang. & Backend",
      icon: "fas fa-terminal",
      skills: [
        { name: "Java", percentage: 60 },
        { name: "Python", percentage: 80 },
        { name: "C++", percentage: 60 },
        { name: "Powershell", percentage: 85 },
        { name: "Golang", percentage: 70 }
      ]
    },
    {
      title: "Frontend / Web",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5 & CSS3", percentage: 85 },
        { name: "Bootstrap", percentage: 80 },
        { name: "Javascript", percentage: 70 },
        { name: "React JS", percentage: 72 },
        { name: "Next JS", percentage: 74 },
        { name: "React Native", percentage: 70 }
      ]
    },
    {
      title: "Other Tools & Skills",
      icon: "fas fa-photo-video",
      skills: [
        { name: "Premiere Pro", percentage: 75 },
        { name: "Filmore 9", percentage: 80 },
        { name: "Design (Posts. Book Cover etc.)", percentage: 85 },
        { name: "Content Research", percentage: 70 }
      ]
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "SQL / PostgreSQL", percentage: 75 },
        { name: "MongoDB", percentage: 80 },
        { name: "Yugabyte", percentage: 60 },
        { name: "Neo4J", percentage: 72 }
      ]
    },
    {
      title: "Developer Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "CI/CD (GitHub Actions etc.)", percentage: 90 },
        { name: "Git", percentage: 80 },
        { name: "Docker & Kubernetes", percentage: 70 },
        { name: "Kafka & Rabbit MQ", percentage: 69 },
        { name: "VSCode & IntelliJ IDE", percentage: 95 }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4">
          <i className="fas fa-hat-cowboy mr-3"></i>
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="resume-box p-6">
              <h5 className="text-lg mb-4 pt-2">
                <i className={`${category.icon} mr-2`}></i>
                {category.title}
              </h5>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;