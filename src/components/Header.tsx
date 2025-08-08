import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200
   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300
   ${isActive
        ? "bg-gray-900 text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100 hover:scale-105"}`;

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl justify-center p-3">
                <div className="inline-flex items-center gap-1 rounded-full border bg-white p-1 shadow-sm overflow-x-auto scrollbar-hide">
                    <NavLink to="/" end className={linkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/services" className={linkClass}>
                        Services
                    </NavLink>
                    <NavLink to="/blogs" className={linkClass}>
                        Blogs
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
