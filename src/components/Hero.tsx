import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <img
            src="/nitesh.jpg"
            className="w-48 h-48 rounded-full shadow-lg mx-auto mb-6 object-cover"
            alt="Nitesh K Jain"
          />
          <h1 className="text-4xl font-normal mb-6">Nitesh K Jain</h1>

          <div className="mb-8">
            <a
              href="https://drive.google.com/file/d/19ZpTWeLd93simqxuMuoQhGQK5q7hL6Bb/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warning text-black px-6 py-3 rounded shadow-md hover:bg-yellow-500 transition-colors m-2 inline-block"
            >
              <i className="fa fa-download mr-2"></i>
              Download Nitesh's Resume
            </a>

            <a
              href="https://www.linkedin.com/in/initeshjain"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-6 py-3 rounded shadow-md hover:bg-black hover:text-white transition-colors m-2 inline-block"
            >
              <i className="fab fa-linkedin-in mr-2"></i>
              Let's Connect on Linkedin
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.github.com/initeshjain">
              <i className="fab fa-github"></i>
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/initeshjain">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/initeshjain">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="social-icon" href="mailto:nitesh.exe@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="text-gray-600 text-base max-w-3xl mx-auto">
            <p>
              I'm a software engineer with over four years of experience building scalable systems, automating infrastructure, and delivering engineering solutions that create real business impact. At Tata Consultancy Services, I contributed to Kroger's digital platform by enhancing a microservices-based item curation system—leading feature upgrades and managing complex service migrations.

              I also built Hawk Eye, a monitoring hub developed with Go and React that unified observability across 17+ applications, significantly improving operational visibility and efficiency.

              Earlier, as a DevOps Tech Lead, I designed CI/CD pipelines using GitHub Actions and JFrog Artifactory, which boosted our release speed by 30%. I also created modular monitoring tools and an image tracking system that helped reduce operational costs by $15,000. Leading a team of 14 engineers, I improved delivery velocity by 20% and cut critical issue turnaround time by 15%.

              Proficient in Golang, Java, Python, JavaScript, and a wide range of cloud-native tools, I bridge backend, frontend, and DevOps disciplines into a unified engineering approach. I build systems that scale, tools that save time and money, and processes that evolve with the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;