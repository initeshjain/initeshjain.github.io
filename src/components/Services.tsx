import React, { useMemo, useState } from "react";
import type { Category, Item } from "../data/ServicesItems";
import { items as allItems } from "../data/ServicesItems";
import { FaExternalLinkAlt, FaTag } from "react-icons/fa";

const CATEGORIES: (Category | "All")[] = [
  "All",
  "Products",
  "Services",
  "Gigs",
  "Notion Templates",
  "Resume Templates",
];

export default function Services() {
  const [active, setActive] = useState<Category | "All">("All");
  const [q, setQ] = useState("");

  const filtered: Item[] = useMemo(() => {
    const base = active === "All" ? allItems : allItems.filter(i => i.category === active);
    if (!q.trim()) return base;
    const t = q.toLowerCase();
    return base.filter(i =>
      i.title.toLowerCase().includes(t) ||
      i.description.toLowerCase().includes(t) ||
      (i.tags ?? []).some(tag => tag.toLowerCase().includes(t))
    );
  }, [active, q]);

  return (
    <div className="min-h-screen bg-[#F6F4EE] py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DFD2] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
              ENGINEERING STORE &amp; GIGS
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#12131C]">
              Products, Services &amp; Gigs
            </h1>
            <p className="text-[#575969] text-sm mt-1">
              Production templates, custom agent skills, microservices development, and technical consulting.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter products & services…"
              className="w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2 text-sm text-[#12131C] placeholder-[#94A3B8] outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF] shadow-xs"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#94A3B8] hover:text-[#12131C]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[#CBD5E1] bg-white p-1.5 shadow-xs mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-md px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-150 ${
                active === c
                  ? "bg-[#12131C] text-white shadow-xs"
                  : "text-[#575969] hover:text-[#12131C] hover:bg-black/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#CBD5E1] p-12 text-center text-[#64748B]">
            <p className="font-mono text-sm">No items found matching the selected query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-[#CBD5E1] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[#94A3B8]"
              >
                <div>
                  {/* Category and Price Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-[#EEF2FF] text-[#1E40AF] border border-[#C7D2FE]">
                      {item.category}
                    </span>
                    {item.price && (
                      <span className="font-mono text-xs font-bold text-[#059669]">
                        {item.price}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-[#12131C] group-hover:text-[#1E40AF] transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-6">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded bg-[#F8FAFC] px-2 py-0.5 text-[10px] font-mono text-[#64748B] border border-[#E2E8F0]"
                        >
                          <FaTag size={8} className="text-[#94A3B8]" />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dispatch / Buy CTA */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1E40AF] hover:text-[#1D4ED8] underline underline-offset-4 decoration-2"
                  >
                    Request / Dispatch ↗ <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
