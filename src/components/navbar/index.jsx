import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const links = [
  { to: "/over-ons", label: "Over ons" },
  { to: "/omgeving", label: "Omgeving" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFC847]/70 backdrop-blur-md text-[#222] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <Link
            to="/"
            className="hover:opacity-90 transition"
            onClick={() => setMenuOpen(false)}
          >
            Petronellahoeve
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium ml-auto">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive(to)
                    ? "bg-[#FFC847] text-white shadow-sm"
                    : "text-[#333] hover:bg-[#FFC847]/80 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFC847]/95 text-[#222] px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-base font-medium">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full transition-all duration-150 ${
                    isActive(to)
                      ? "bg-[#FFC847] text-white shadow-sm"
                      : "hover:bg-[#FF1D15]/90 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
