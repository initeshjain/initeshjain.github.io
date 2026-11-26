import React from "react";
import type { Experience as ExpType } from "../data/portfolioData";
import { experiencesData } from "../data/portfolioData";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience: React.FC = () => {
  return (
    <section className="py-16 border-b border-[#E2DFD2] bg-[#F6F4EE]">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
            CAREER TIMELINE // PRODUCTION IMPACT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
            Experience &amp; Operational Record
          </h2>
          <p className="text-[#575969] text-sm mt-1 max-w-xl">
            5+ years building and scaling enterprise platforms, autonomous agent pipelines, and high-throughput systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiencesData.map((exp: ExpType, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-xs transition-all duration-200 hover:shadow-md hover:border-[#94A3B8]"
            >
              {/* Top Banner Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1F5F9] pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-bold text-[#12131C]">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="rounded px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-sm font-semibold text-[#1E40AF] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#64748B]">
                  <span className="inline-flex items-center gap-1.5">
                    <FaCalendarAlt size={11} className="text-[#94A3B8]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FaMapMarkerAlt size={11} className="text-[#94A3B8]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#475569] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1E40AF] shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[#F8FAFC]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#94A3B8] mr-1">
                  TOOLS //
                </span>
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md bg-[#F1F5F9] px-2.5 py-1 font-mono text-xs font-semibold text-[#334155] border border-[#E2E8F0]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
