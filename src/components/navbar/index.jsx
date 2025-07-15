import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/omgeving", label: "Omgeving" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFC847]/60 backdrop-blur text-[#222] shadow-md">
      <div className="max-w-6xl w-full mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-4xl font-bold">
          <Link to="/">Petronellahoeve</Link>
        </div>
        <ul className="hidden md:flex space-x-4 text-sm font-medium ml-auto">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`px-3 py-1 rounded-md transition ${
                  location.pathname === to
                    ? "border border-transparent bg-[#FFC847] text-white"
                    : "border border-transparent hover:bg-[#FFC847] hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
