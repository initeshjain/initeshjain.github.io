import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Quick React Pagination - NPM Package",
      icon: "fas fa-code",
      description: "Quick React Pagination is a simple pagination component for React applications. It allows users to navigate through pages of content easily.",
      links: [
        { text: "NPM.Org", url: "https://www.npmjs.com/package/quick-react-pagination", type: "primary" },
        { text: "Source Code", url: "https://github.com/initeshjain/quick-react-pagination", type: "secondary", icon: "fab fa-github" }
      ]
    },
    {
      title: "Code Sharer - CodeSher",
      icon: "fas fa-code",
      description: "Utilizes Next.js 13, Tailwind, and TypeScript. Allows users to share code with set expiry dates, format by programming language, and generate shortened URLs for easy sharing, all without the need for a database.",
      links: [
        { text: "Live Preview", url: "https://code.noobgeek.in", type: "primary" }
      ]
    },
    {
      title: "Blog App - noobgeek.in",
      icon: "fas fa-blog",
      description: "Combines Next.js 12, MongoDB, and Google Single Sign-On technologies. Enables user registration and facilitates Q&A interactions in a blog-centric platform.",
      links: [
        { text: "Live Preview", url: "https://www.noobgeek.in", type: "primary" }
      ]
    },
    {
      title: "Terrorism Analysis With Insights",
      icon: "fas fa-bomb",
      description: "This is a real client project that is part of my internship at Forsk Technologies Pvt. Ltd. In this, I have built a dashboard featuring a map and a chart to plot terrorism events by region, country, state, city, etc.",
      links: [
        { text: "Live Preview", url: "https://terrorism-analysis.onrender.com", type: "primary" },
        { text: "Source Code", url: "https://github.com/initeshjain/Terrosism-Analysis", type: "secondary", icon: "fab fa-github" }
      ]
    },
    {
      title: "Password Generator in Python",
      icon: "fas fa-key",
      description: "By \"Random\" module in python, I built a GUI-based password generator in a combination with alphanumeric and special characters. The GUI part is built on Tkinter module in python.",
      links: [
        { text: "Source Code", url: "https://github.com/initeshjain/Password-Generator", type: "secondary", icon: "fab fa-github" }
      ]
    },
    {
      title: "File Cluster Cleaner",
      icon: "fas fa-folder-open",
      description: "Built a script that can sort files according to their file type or extension. This is a script that can be run on a computer and just need to be placed in the folder where the cluttered files are.",
      links: [
        { text: "Source Code", url: "https://github.com/initeshjain/File-Cluster-Cleaner-Script", type: "secondary", icon: "fab fa-github" }
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4">
          <i className="fas fa-tasks mr-3"></i>
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border-2 border-warning rounded-lg shadow-lg h-full flex flex-col">
              <div className="p-6 flex-grow">
                <h5 className="text-lg font-semibold mb-3">
                  <i className={`${project.icon} mr-2`}></i>
                  {project.title}
                </h5>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
              <div className="p-6 pt-0">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mr-2 mb-2 px-4 py-2 rounded text-sm font-medium transition-colors ${link.type === 'primary'
                        ? 'bg-warning text-black hover:bg-yellow-500'
                        : 'border border-black text-black hover:bg-black hover:text-white'
                      }`}
                  >
                    {link.icon && <i className={`${link.icon} mr-1`}></i>}
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