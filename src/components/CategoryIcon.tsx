import type { Category } from "../data/ServicesItems";

function Svg({ d, viewBox = "0 0 24 24" }: { d: string; viewBox?: string }) {
    return (
        <svg viewBox={viewBox} className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={d} />
        </svg>
    );
}

export default function CategoryIcon({ category }: { category: Category }) {
    switch (category) {
        case "Services": // wrench/gear
            return <Svg d="M11 3v2m0 14v2m8-8h2M3 11H1m14.95-6.95l1.414 1.414M6.636 17.364l-1.414 1.414M17.364 17.364l1.414 1.414M6.636 6.636L5.222 5.222M12 7a5 5 0 100 10 5 5 0 000-10z" />;
        case "Gigs": // briefcase
            return <Svg d="M9 6h6V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v2zM3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm7 4h4" />;
        case "Products": // package/box
            return <Svg d="M21 16V8l-9-5-9 5v8l9 5 9-5zM3 8l9 5 9-5M12 13v8" />;
        case "Notion Templates": // layout
            return <Svg d="M3 4h18v16H3zM8 4v16M3 9h18" />;
        case "Resume Templates": // file-text
            return <Svg d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12V8l-4-6zM14 2v6h6M8 13h8M8 17h8M8 9h4" />;
        default:
            return null;
    }
}

export const CategoryBgColor: Record<string, string> = {
    Services: "bg-green-50",
    Gigs: "bg-pink-50",
    "Notion Templates": "bg-yellow-50",
    Products: "bg-blue-50",
    "Resume Templates": "bg-orange-50"
};
