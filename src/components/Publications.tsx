import React from "react";
import { FaAmazon } from "react-icons/fa";

const Publications: React.FC = () => {
  return (
    <section className="py-16 border-b border-[#E2DFD2] bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
            PUBLICATIONS // AUTHORED WORKS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
            Books &amp; Technical Writing
          </h2>
        </div>

        {/* Book Sheet Card */}
        <div className="rounded-xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Book Cover */}
            <div className="w-full md:w-56 shrink-0 rounded-lg overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F8FAFC]">
              <img
                src="/book.jpg"
                alt="Server Operating System Book Cover"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                  AMAZON KINDLE EBOOK
                </span>
                <span className="font-mono text-xs text-[#64748B]">
                  Published: August 1, 2020
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#12131C]">
                Server Operating System - Practical Resolved
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed">
                Practical, code-first breakdown of server operating systems designed to eliminate textbook fluff. Written in clear, accessible engineering language covering enterprise directory architectures, kernel processes, storage hierarchies, and real-world sysadmin operations.
              </p>

              <div className="pt-2">
                <a
                  href="https://amzn.to/3v37FAm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#12131C] px-5 py-2.5 font-mono text-xs uppercase font-bold tracking-wider text-white hover:bg-black transition-all shadow-xs"
                >
                  <FaAmazon size={13} /> View on Amazon ↗
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
