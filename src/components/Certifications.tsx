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
      title: "Computer Vision - Object Detection with OpenCV and Python",
      icon: "fas fa-desktop",
      url: "https://www.coursera.org/verify/TEJ334BZJ5S6"
    },
    {
      title: "Data Management in the Cloud",
      icon: "fas fa-cloud",
      url: "https://www.coursera.org/verify/NBSXWFMXXKSZ"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 flex items-center">
          <i className="fas fa-certificate text-warning mr-3"></i>
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-5 flex items-start space-x-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-yellow-100 rounded-full">
                <i className={`${cert.icon} text-warning text-lg`}></i>
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">{cert.title}</h3>
                <p className="text-sm text-gray-500 mt-1">Click to view</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
