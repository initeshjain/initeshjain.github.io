import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

const Announcement: React.FC = () => {
  return (
    <div className="sticky top-6 z-50 mx-auto max-w-3xl flex items-start sm:items-center justify-between 
                    bg-white/80 backdrop-blur border border-gray-200 
                    px-5 py-4 rounded-xl shadow-lg">
      <div className="flex items-start sm:items-center space-x-3 text-gray-800 text-sm sm:text-base leading-relaxed">
        <FaBullhorn className="text-yellow-600 mt-1 sm:mt-0 flex-shrink-0" />
        <span>
          Hey there 👋 — I’m currently <strong>open for freelance work</strong> as a Fullstack / Backend Engineer
          (<em>Golang, Node.js, Python, Next.js, React.js</em>) & DevOps Engineer.
          <br className="hidden sm:block" />
          Let’s talk via{' '}
          <a href="mailto:nitesh.exe@gmail.com" className="text-yellow-700 hover:text-yellow-900 underline">
            Email
          </a>{' '}
          or{' '}
          <a href="https://www.linkedin.com/in/initeshjain" className="text-yellow-700 hover:text-yellow-900 underline">
            LinkedIn
          </a>.
        </span>
      </div>
    </div>
  );
};

export default Announcement;
