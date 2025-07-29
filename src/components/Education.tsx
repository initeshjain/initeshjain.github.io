import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      period: "2022 - 2024",
      title: "Masters of Cloud Application (MCA) - Chandigarh University, Mohali",
      description: "CGPA 8.80"
    },
    {
      period: "2017 - 2020",
      title: "Bachelor of Cloud Application (BCA) - Mandsaur University, Mandsaur",
      description: "CGPA 8.9 (Major: Cloud Computing)"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4">
          <i className="fas fa-university mr-3"></i>
          Education
        </h1>
        <div className="resume-box p-8 mx-4">
          <ul className="space-y-0">
            {education.map((edu, index) => (
              <li key={index} className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <span className="bg-warning text-white text-xs px-3 py-1 rounded-full font-semibold inline-block mb-3">
                  {edu.period}
                </span>
                <h5 className="text-lg font-bold mb-3">{edu.title}</h5>
                <p className="text-gray-700">{edu.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;