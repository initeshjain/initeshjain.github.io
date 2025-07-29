import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm transition
   ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`;

export default function Header() {
    return (
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl justify-center p-3">
                <div className="inline-flex items-center gap-1 rounded-full border bg-white p-1 shadow-sm">
                    <NavLink to="/" end className={linkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/services" className={linkClass}>
                        Services
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
