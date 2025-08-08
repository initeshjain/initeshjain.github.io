import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-black py-6 mt-12 shadow-inner border-t border-gray-300 rounded-t-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="text-sm text-gray-700 space-y-2 text-center md:text-left">
            <div>
              <a
                href="https://www.google.com/maps?q=Indore,+Madhya+Pradesh,+453555"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors"
              >
                <i className="fas fa-map-marker-alt mr-2 text-yellow-500"></i>
                Indore, Madhya Pradesh, 453555
              </a>
            </div>
            <div>
              <i className="fas fa-envelope mr-2 text-yellow-500"></i>
              <a
                href="mailto:nitesh.exe@gmail.com"
                className="hover:text-yellow-500 transition-colors"
              >
                nitesh.exe@gmail.com
              </a>
            </div>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="text-gray-600 hover:text-yellow-500 transition-colors"
            aria-label="Scroll to top"
          >
            <i className="fas fa-angle-double-up text-3xl"></i>
          </button>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Nitesh Kumar Jain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
