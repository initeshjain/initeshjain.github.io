import React, { useState } from "react";
import type { Project } from "../data/portfolioData";
import { projectsData } from "../data/portfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type CategoryFilter = "All" | "AI & Agents" | "Systems & Cloud" | "Mobile & Apps" | "Open Tools";

const categories: CategoryFilter[] = [
  "All",
  "AI & Agents",
  "Systems & Cloud",
  "Mobile & Apps",
  "Open Tools"
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("All");

  const filtered = activeTab === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="the-bench" className="py-12 sm:py-16 border-b border-[#E2DFD2] bg-[#F6F4EE]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header with Touch-Friendly Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
              FEATURED WORK // READY TO TEST
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
              Featured Projects &amp; Tools
            </h2>
            <p className="text-[#475569] text-sm sm:text-base mt-1 max-w-xl">
              Real apps you can download, test, or inspect the source code of. Built with privacy, speed, and real utility in mind.
            </p>
          </div>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white p-1.5 shadow-xs overflow-x-auto scrollbar-none max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                  activeTab === cat
                    ? "bg-[#12131C] text-white shadow-xs"
                    : "text-[#575969] hover:text-[#12131C] hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((project: Project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl border border-[#CBD5E1] bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#94A3B8]"
            >
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#12131C] group-hover:text-[#1E40AF] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs font-medium text-[#64748B] mb-2.5">
                  {project.tagline}
                </p>

                {/* Description in Clear, Simple English */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center gap-3">
                {project.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                      link.primary
                        ? "text-[#1E40AF] hover:text-[#1D4ED8] underline underline-offset-4 decoration-2"
                        : "text-[#64748B] hover:text-[#12131C]"
                    }`}
                  >
                    {link.label.includes("GitHub") ? <FaGithub size={12} /> : null}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Outro Card */}
          <div className="relative flex flex-col justify-between rounded-xl bg-[#12131C] p-6 text-white shadow-md transition-all duration-200 hover:-translate-y-1">
            <div className="space-y-3">
              <span className="inline-block rounded px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                114 PUBLIC REPOSITORIES
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-white">
                All Open Source Work
              </h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                Looking for code samples, algorithms, or utility scripts? You can browse all 114 open-source repositories directly on my GitHub.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://github.com/initeshjain?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FEF08A] hover:underline"
              >
                Browse on GitHub ↗ <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
