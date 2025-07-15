export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFC847]/60 backdrop-blur text-[#222] shadow-md">
      <div className="max-w-6xl w-full mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-4xl font-bold">Petronellahoeve</div>
        <ul className="hidden md:flex space-x-4 text-sm font-medium ml-auto">
          {[
            { href: "#welcome", label: "Welkom" },
            { href: "#omgeving", label: "Omgeving" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="px-3 py-1 border border-transparent rounded-md transition hover:border-[#FFC847] hover:bg-[#FFC847] hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
