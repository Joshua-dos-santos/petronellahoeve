import ImageCarousel from "../../components/image-carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F7FA] text-[#333] font-sans">
      {/* Main content container (flex-grow ensures footer is pushed down) */}
      <main className="flex-grow">
        <header className="bg-[#FFC847] text-[#222] p-12 text-center shadow-md">
          <h1 className="text-5xl font-extrabold tracking-tight">Petronellahoeve</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Rust, natuur en buitenleven in het mooie Bergeijk
          </p>
        </header>
        <ImageCarousel />

        <section className="px-6 py-12 max-w-4xl mx-auto text-lg leading-relaxed">
          <h2 className="text-3xl font-semibold mb-6 text-[#565857]">
            Welkom op onze minicamping
          </h2>
          <p className="mb-4">
            Onze minicamping ligt net buiten het dorp Bergeijk, midden in het groen.
            We zijn een echte boerencamping: kleinschalig, gemoedelijk en met alles wat je nodig hebt voor een prettig verblijf.
          </p>
          <p>
            De omgeving van Bergeijk is perfect om te wandelen en fietsen. Vanuit de camping kun je direct aansluiten op verschillende knooppuntroutes.
          </p>
        </section>

        <section className="bg-white px-6 py-10 max-w-4xl mx-auto rounded-2xl shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-[#FF1D15] mb-4">
            Ontdek de omgeving
          </h3>
          <ul className="list-disc list-inside space-y-2 text-base text-[#444]">
            <li>De Malpie</li>
            <li>De Maai</li>
            <li>De Plateaux-Hageven</li>
            <li>Stroomgebied van de Keersop</li>
            <li>Centrum van Bergeijk</li>
            <li>Gerrit Rietveld ontwerpen in de regio</li>
          </ul>
        </section>
      </main>

      {/* Footer pinned at the bottom */}
      <footer className="bg-[#565857] text-white text-center py-6">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust en natuur
        </p>
      </footer>
    </div>
  );
}
