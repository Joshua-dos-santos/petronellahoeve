export default function Omgeving() {
  return (
    <>
      <div className="min-h-screen p-10 pt-16">
        <h1 className="text-4xl font-bold">Omgeving</h1>
        <p className="mt-4">Info about the surrounding area...</p>
      </div>

      <footer className="bg-[#565857] text-white text-center py-4 absolute bottom-0 w-full z-20">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust
          en natuur
        </p>
      </footer>
    </>
  );
}
