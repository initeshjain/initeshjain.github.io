import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      icon: "fab fa-microsoft",
      url: "https://learn.microsoft.com/en-us/users/niteshkumarjain-6975/credentials/37313ea71a5b791f"
    },
    {
      title: "Go Language Professional Certification",
      icon: "fas fa-terminal",
      url: "https://www.vskills.in/certification/105191-go-language-professional-nitesh-kumar-jain"
    },
    {
      title: "Azure 900",
      icon: "fab fa-microsoft",
      url: "https://drive.google.com/file/d/1ocnuzTAHTVPcYy2juyfGppyeEi9saC3O/view"
    },
    {
      title: "AWS Cloud Practitioner",
      icon: "fab fa-aws",
      url: "https://drive.google.com/file/d/1tkxeXQCy5sgh2Gz5iq1QARe5xK1Ekj3c/view"
    },
    {
      title: "Machine Learning for All",
      icon: "fas fa-chalkboard-teacher",
      url: "https://www.coursera.org/verify/RJLJEB65AJG2"
    },
    {
      title: "Using Python to Access Web Data",
      icon: "fab fa-python",
      url: "https://www.coursera.org/verify/6VPSBTE9FQAM"
    },
    {
      title: "What is Data Science?",
      icon: "far fa-chart-bar",
      url: "https://www.coursera.org/verify/ZLZPWQ94YNF9"
    },
    {
      title: "AWS Fundamentals: Addressing Security Risk",
      icon: "fab fa-aws",
      url: "https://www.coursera.org/verify/7JVS35TCP44B"
    },
    {
      title: "Computer Vision - Object Detection with OpenCV and Python",
      icon: "fas fa-desktop",
      url: "https://www.coursera.org/verify/TEJ334BZJ5S6"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      icon: "fas fa-terminal",
      url: "https://www.coursera.org/verify/T4ZUS6R7AEXS"
    },
    {
      title: "Crash Course on Python",
      icon: "fab fa-python",
      url: "https://www.coursera.org/verify/5MX5VG2W7UMV"
    },
    {
      title: "Introduction to Data Science in Python",
      icon: "fas fa-database",
      url: "https://www.coursera.org/verify/TKUMLQJ3BPQJ"
    },
    {
      title: "Python for Data Science and AI",
      icon: "fas fa-robot",
      url: "https://www.coursera.org/verify/MDF9MDYVPM4D"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      icon: "fab fa-html5",
      url: "https://www.coursera.org/verify/VQCYNNJW6YRJ"
    },
    {
      title: "Data Management in the Cloud",
      icon: "fas fa-cloud",
      url: "https://www.coursera.org/verify/NBSXWFMXXKSZ"
    },
    {
      title: "AWS Fundamentals: Building Serverless Applications",
      icon: "fab fa-aws",
      url: "https://www.coursera.org/verify/ULSAFJRS2KWS"
    },
    {
      title: "AWS Fundamentals: Going Cloud-Native",
      icon: "fab fa-aws",
      url: "https://www.coursera.org/verify/Z8F7EDVWGT28"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-normal mb-8 ml-4">
            <i className="fas fa-certificate mr-3"></i>
            Certificates
          </h2>
          <div className="resume-box p-8 mx-4">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-4">
                      <i className={`${cert.icon} text-warning`}></i>
                    </div>
                    <span className="text-gray-800">{cert.title}</span>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warning hover:text-yellow-600 transition-colors"
                  >
                    <i className="fa fa-external-link-alt"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;