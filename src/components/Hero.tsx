import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedinIn, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* Profile Image */}
          <img
            src="/nitesh.jpg"
            className="w-40 h-40 rounded-full shadow-lg mx-auto mb-6 object-cover border-4 border-gray-100"
            alt="Nitesh K Jain"
          />

          {/* Name */}
          <h1 className="text-5xl font-bold mb-3 tracking-tight">Nitesh K Jain</h1>
          <p className="text-gray-500 mb-10 text-lg">
            Software Engineer • Filmmaker • Problem Solver
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="https://drive.google.com/file/d/19ZpTWeLd93simqxuMuoQhGQK5q7hL6Bb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
            >
              <FaDownload className="inline-block mr-2" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/initeshjain"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-900 hover:text-white transition"
            >
              <FaLinkedinIn className="inline-block mr-2" /> Connect on LinkedIn
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-12 text-gray-600 text-2xl">
            <a href="https://github.com/initeshjain" target="_blank" rel="noopener noreferrer" className="hover:text-green-900"><FaGithub /></a>
            <a href="https://twitter.com/initeshjain" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><FaXTwitter /></a>
            <a href="https://instagram.com/initeshjain" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="mailto:nitesh.exe@gmail.com" className="hover:text-red-500"><FaEnvelope /></a>
          </div>

          {/* About */}
          <p className="text-gray-600 leading-relaxed text-lg">
            I’m a software engineer with 4+ years of experience building scalable systems, automating infrastructure, and creating tools that save time and money.
            At TCS, I enhanced Kroger’s microservices-based item curation system, led feature upgrades, and built monitoring solutions that improved operational visibility for 17+ applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
