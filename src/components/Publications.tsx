import React from 'react';

const Publications: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-normal mb-8 ml-4">
          <i className="fas fa-book mr-3"></i>
          Publications
        </h1>
        <div className="resume-box mx-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 p-6 flex justify-center">
              <img
                className="w-auto h-auto rounded shadow-lg"
                src="/book.jpg"
                alt="Server Operating System Book"
              />
            </div>
            <div className="md:w-3/4 p-6">
              <span className="bg-warning text-white text-xs px-3 py-1 rounded-full font-semibold inline-block mb-3">
                25 July 2020
              </span>
              <h5 className="text-xl font-bold mb-4">
                Server Operating System - Practical Resolved Kindle Edition
              </h5>
              <p className="text-gray-700 mb-4">
                The book primarily focused on practical content and less on theory. This book is the form of server
                operating system notes taught in academics. In this book I used the English language with a combination
                of laymen terms for better understanding.<br /><br />
                As the author of this book and also a cloud computing student, I wrote what I learned in my academics
                in this book. So I hope after purchasing you will find this book helpful.
              </p>
              <a
                href="https://amzn.to/3v37FAm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warning text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors inline-block"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;