import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaDownload, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { metricsData } from "../data/portfolioData";
import { LiveTransitMap } from "./LiveTransitMap";

const Hero: React.FC = () => {
  // State for tactile hover tilt
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[#F6F4EE]/90">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Top Identification Pill with Active Status */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#CBD5E1] bg-white px-3 py-1 font-mono text-xs font-semibold tracking-wider text-[#1E40AF] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            NITESH K JAIN // WORKSHOP INDEX
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DFD2] bg-white px-3.5 py-1 font-mono text-xs font-medium text-[#047857] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            CURRENT STATION: WINTER.IO (HEALTHCARE AI)
          </div>
        </div>

        {/* Hero Narrative + Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-12">
          {/* Left Column: Restored Iconic Headline */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div>
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E40AF] mb-2">
                Apps, experiments &amp; open tools
              </p>
              {/* The iconic Dhananjay-style workshop headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#12131C] leading-[1.05]">
                A workshop of useful oddities<span className="text-[#E11D48]">.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl">
              Software engineer building autonomous <strong>AI voice agents</strong>, healthcare workflow automations, and <strong>high-throughput microservices</strong>. Systems with low latency, clear boundaries, and zero mystery behavior.
            </p>

            {/* Accessible CTAs */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              <a
                href="#the-bench"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#12131C] px-5 py-3 font-mono text-xs uppercase font-bold tracking-wider text-white hover:bg-black transition-all shadow-sm w-full sm:w-auto"
              >
                See the whole bench <FaArrowRight size={11} />
              </a>
              <a
                href="https://drive.google.com/file/d/1k92Xjq_AP23CQ3Uc-CGF4uJWajeTFg8I/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-5 py-3 font-mono text-xs uppercase font-bold tracking-wider text-[#12131C] hover:bg-black/5 transition-all shadow-xs w-full sm:w-auto"
              >
                <FaDownload size={11} /> Resume PDF ↗
              </a>
              <a
                href="https://github.com/initeshjain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 font-mono text-xs uppercase font-bold tracking-wider text-[#12131C] hover:bg-black/5 transition-all shadow-xs w-full sm:w-auto"
              >
                <FaGithub size={13} /> GitHub ↗
              </a>
            </div>
          </div>

          {/* Right Column: Spec Card WITH RESTORED HOVER TILT SPRING PHYSICS */}
          <div className="lg:col-span-4 mt-2 sm:mt-0">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered
                  ? "rotate(-3.5deg) translateY(-8px) scale(1.02)"
                  : "rotate(1.2deg) translateY(0) scale(1)",
                transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
              className="relative cursor-pointer rounded-2xl border border-[#CBD5E1] bg-white p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#94A3B8]"
            >
              {/* Yellow Masking Tape on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#FEF08A]/90 rounded-xs shadow-xs" />

              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 mb-4">
                <span className="font-mono text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                  ENGINEERING SPEC
                </span>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#EEF2FF] text-[#1E40AF]">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#334155]">
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#64748B]">ENGINEER:</span>
                  <span className="font-bold text-[#0F172A] text-right">Nitesh K Jain</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#64748B]">ROLE:</span>
                  <span className="font-semibold text-[#0F172A] text-right">Polyglot AI Engineer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#64748B]">STATION:</span>
                  <span className="font-semibold text-[#0F172A] text-right">Winter.io</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F8FAFC]">
                  <span className="text-[#64748B]">STACK:</span>
                  <span className="font-semibold text-[#0F172A] text-right">Go · Python · AWS · React</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">LOCATION:</span>
                  <span className="font-semibold text-[#0F172A]">Indore, India (Remote)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-dashed border-[#CBD5E1] flex items-center justify-between">
                <div className="flex gap-4 text-[#64748B]">
                  <a href="https://linkedin.com/in/initeshjain" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2]">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="https://x.com/initeshjain" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <FaXTwitter size={15} />
                  </a>
                </div>
                <span className="font-mono text-[10px] text-[#94A3B8]">PROD // 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Live Transit Signal Map Widget */}
        <div className="mb-10 sm:mb-12">
          <LiveTransitMap />
        </div>

        {/* Production Verified Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-2">
          {metricsData.map((m, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-[#CBD5E1] bg-white p-4 sm:p-5 shadow-xs transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="font-mono text-2xl sm:text-3xl font-extrabold tracking-tight mb-1"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="font-mono text-xs uppercase font-bold text-[#1E293B] tracking-wider mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#64748B] leading-snug">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
