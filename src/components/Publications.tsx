import React from "react";

const Publications: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-10 flex items-center ml-4">
          <i className="fas fa-book mr-3 text-warning"></i>
          Publications
        </h1>

        {/* Card */}
        <div className="mx-4 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/3 flex justify-center items-center bg-gray-100 p-6">
              <img
                className="max-w-full h-auto rounded-lg shadow-md"
                src="/book.jpg"
                alt="Server Operating System Book"
              />
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <span className="bg-warning text-black text-xs px-3 py-1 rounded-full font-semibold inline-block mb-4">
                  25 July 2020
                </span>
                <h2 className="text-2xl font-bold mb-4 leading-snug">
                  Server Operating System - Practical Resolved Kindle Edition
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The book primarily focuses on practical content with minimal
                  theory. It serves as a collection of server operating system
                  notes taught in academics, written in English with simple,
                  layman-friendly terms for better understanding.
                  <br />
                  <br />
                  As the author and a cloud computing student, I documented my
                  academic learnings in this book. I believe you will find it
                  helpful and insightful.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://amzn.to/3v37FAm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-warning text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
