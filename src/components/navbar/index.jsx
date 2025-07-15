export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFC847]/80 backdrop-blur text-[#222] shadow-md">
      <div className="max-w-6xl w-full mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-4xl font-bold">Petronellahoeve</div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium ml-auto">
          <li>
            <a href="#welcome" className="hover:underline hover:text-[#FF1D15]">
              Welkom
            </a>
          </li>
          <li>
            <a href="#omgeving" className="hover:underline hover:text-[#FF1D15]">
              Omgeving
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline hover:text-[#FF1D15]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
