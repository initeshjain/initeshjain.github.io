import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 text-black py-6 mt-12 shadow-lg rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Indore, Madhya Pradesh, 453555
            </div>
            <div>
              <i className="fas fa-envelope mr-2"></i>
              <a href="mailto:nitesh.exe@gmail.com" className="text-black hover:text-warning transition-colors">
                nitesh.exe@gmail.com
              </a>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="text-black hover:text-warning transition-colors"
            aria-label="Scroll to top"
          >
            <i className="fas fa-angle-double-up text-3xl"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;