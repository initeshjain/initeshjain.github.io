import React, { useMemo, useState } from "react";
import type { Category, Item } from "../data/ServicesItems";
import { items as allItems } from "../data/ServicesItems";
import CategoryIcon, { CategoryBgColor } from "../components/CategoryIcon";
import ContactButton from "./ContactButton";

const CATEGORIES: Category[] = [
    "Services",
    "Gigs",
    "Products",
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
        <main className="mx-auto max-w-6xl p-6">
            <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-semibold">
                    Services
                    <span className="ml-2 text-sm text-gray-500">({filtered.length})</span>
                </h1>

                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <div className="inline-flex w-full overflow-x-auto no-scrollbar rounded-xl border bg-white p-1 shadow-sm sm:w-auto">
                        <Tab label="All" active={active === "All"} onClick={() => setActive("All")} />
                        {CATEGORIES.map(c => (
                            <Tab key={c} label={c} active={active === c} onClick={() => setActive(c)} />
                        ))}
                    </div>

                    <div className="relative w-full sm:w-60">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search…"
                            className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring"
                            aria-label="Search services"
                        />
                        {q && (
                            <button
                                onClick={() => setQ("")}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {filtered.length === 0 ? (
                <div className="flex flex-col items-center py-10 text-gray-500">
                    <span className="text-lg">No items found</span>
                    <span className="text-sm">Try adjusting your filters or search</span>
                </div>
            ) : (
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map(item => (
                        <li
                            key={item.id}
                            className={`group rounded-2xl border ${CategoryBgColor[item.category]} p-4 shadow-sm transition hover:shadow-lg hover:scale-[1.01]`}
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-gray-50 text-gray-900">
                                    {item.image ? (
                                        <img src={item.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                                    ) : (
                                        <CategoryIcon category={item.category} />
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xs uppercase tracking-wide text-gray-500">{item.category}</div>
                                    <h3 className="truncate text-lg font-semibold" title={item.title}>{item.title}</h3>
                                </div>
                            </div>

                            <p className="mt-1 line-clamp-3 text-sm text-gray-700" title={item.description}>
                                {item.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {(item.tags ?? []).map(tag => (
                                    <span key={tag} className="rounded-full border px-2 py-0.5 text-xs text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                {item.price ? <span className="text-sm font-medium">{item.price}</span> : <span />}
                                {/* <a
                                    href={item.link}
                                    className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Open
                                </a> */}
                                <ContactButton destination={item.link} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}

const Tab = React.memo(function Tab({
    label, active, onClick
}: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition ${active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
            aria-pressed={active}
        >
            {label}
        </button>
    );
});
