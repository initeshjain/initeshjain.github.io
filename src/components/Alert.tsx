import React from 'react';

const Alert: React.FC = () => {
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded text-center shadow-md" role="alert">
      <i className="fas fa-quote-left mr-2"></i>
      Open to work as a freelance Fullstack / Backend Engineer (Golang, NodeJs, Python, NextJs, ReactJs) & DevOps Engineer.
      {' '}
      <a href="mailto:nitesh.exe@gmail.com" className="text-yellow-600 hover:text-yellow-800 underline">
        Email
      </a>{' '}
      or Connect on{' '}
      <a href="https://www.linkedin.com/in/initeshjain" className="text-yellow-600 hover:text-yellow-800 underline">
        Linkedin
      </a>{' '}
      to discuss further.
      <i className="fas fa-quote-right ml-2"></i>
    </div>
  );
};

export default Alert;