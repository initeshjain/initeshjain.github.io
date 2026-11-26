import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-3.5 py-1.5 text-xs uppercase font-mono font-bold tracking-wider rounded-md transition-all duration-150 text-center
   ${isActive
    ? "bg-[#12131C] text-white shadow-xs"
    : "text-[#575969] hover:text-[#12131C] hover:bg-black/5"}`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2DFD2] bg-transparent/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5 group">
          <span className="w-3 h-3 rounded-full bg-[#1E40AF] group-hover:scale-125 transition-transform" />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#12131C]">
              Nitesh K Jain
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#64748B] uppercase">
              Software &amp; AI Engineer
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-lg border border-[#E2DFD2] bg-white p-1 shadow-xs">
          <NavLink to="/" end className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Products &amp; Services
          </NavLink>
          <NavLink to="/blogs" className={linkClass}>
            Articles &amp; Notes
          </NavLink>
        </nav>

        {/* Desktop Quick Social Links */}
        <div className="hidden md:flex items-center gap-2 text-sm text-[#575969]">
          <a
            href="https://github.com/initeshjain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-black/5 hover:text-[#12131C] transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/initeshjain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-black/5 hover:text-[#12131C] transition-colors"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href="https://x.com/initeshjain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="p-2 rounded-md hover:bg-black/5 hover:text-[#12131C] transition-colors"
          >
            <FaXTwitter size={15} />
          </a>
          <a
            href="mailto:nitesh.exe@gmail.com"
            aria-label="Email"
            className="p-2 rounded-md hover:bg-black/5 hover:text-[#12131C] transition-colors"
          >
            <FaEnvelope size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="mailto:nitesh.exe@gmail.com"
            className="p-2 text-xs font-mono font-bold uppercase rounded-md bg-[#12131C] text-white"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#12131C] hover:bg-black/5 rounded-md"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2DFD2] bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1.5 font-mono text-xs font-bold uppercase">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-lg ${isActive ? "bg-[#12131C] text-white" : "text-[#575969] hover:bg-transparent"}`
              }
            >
              🛠️ Projects &amp; Overview
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-lg ${isActive ? "bg-[#12131C] text-white" : "text-[#575969] hover:bg-transparent"}`
              }
            >
              📦 Products, Services &amp; Gigs
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `p-3 rounded-lg ${isActive ? "bg-[#12131C] text-white" : "text-[#575969] hover:bg-transparent"}`
              }
            >
              ✍️ Articles &amp; Notes
            </NavLink>
          </div>

          <div className="pt-3 border-t border-[#F1F5F9] flex justify-around text-[#64748B]">
            <a href="https://github.com/initeshjain" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/initeshjain" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#0A66C2]">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://x.com/initeshjain" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-black">
              <FaXTwitter size={17} />
            </a>
            <a href="mailto:nitesh.exe@gmail.com" className="p-2 hover:text-[#EA4335]">
              <FaEnvelope size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
