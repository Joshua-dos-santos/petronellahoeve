import { Link, useLocation } from "react-router-dom";

const links = [
    { to: "/over-ons", label: "Over ons" },
  { to: "/omgeving", label: "Omgeving" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFC847]/70 backdrop-blur-md text-[#222] shadow-lg">
      <div className="max-w-6xl w-full mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <Link to="/" className="hover:opacity-90 transition">
            Petronellahoeve
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium ml-auto">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#FFC847] text-white shadow-sm"
                      : "text-[#333] hover:bg-[#FFC847]/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
