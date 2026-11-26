import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E2DFD2] bg-white py-12 mt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#F1F5F9] pb-8 mb-6">
          <div>
            <div className="font-display font-bold text-lg text-[#12131C]">
              Nitesh K Jain
            </div>
            <p className="font-mono text-xs text-[#64748B] mt-1">
              Polyglot AI Engineer @ Winter · Based in Indore, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#575969]">
            <a
              href="https://github.com/initeshjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#F1F5F9] hover:text-[#12131C] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/initeshjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#F1F5F9] hover:text-[#12131C] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://x.com/initeshjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#F1F5F9] hover:text-[#12131C] transition-colors"
              aria-label="X"
            >
              <FaXTwitter size={17} />
            </a>
            <a
              href="mailto:nitesh.exe@gmail.com"
              className="p-2 rounded-md hover:bg-[#F1F5F9] hover:text-[#12131C] transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={17} />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-1.5 font-mono text-xs font-bold text-[#1E293B] hover:bg-black hover:text-white transition-all ml-2"
            >
              Top <FaArrowUp size={10} />
            </button>
          </div>
        </div>

        {/* Candid Colophon Note (Crafted Workbench Style) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#8E90A0]">
          <p>
            Built by hand · Drafting Workbench aesthetic inspired by engineering atlases.
          </p>
          <p className="font-mono">
            © {new Date().getFullYear()} Nitesh K Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
