import ImageCarousel from "../../components/image-carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F4F7FA] text-[#333] font-sans relative">
      <main className="flex-grow pt-16">
        <div className="relative h-full w-full">
          <ImageCarousel />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
              Petronellahoeve
            </h1>
            <p className="text-lg md:text-xl mt-3 text-white max-w-xl drop-shadow-sm">
              Rust, natuur en buitenleven in het mooie Bergeijk
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-[#565857] text-white text-center py-3 w-full z-20 absolute bottom-0 left-0">
        <p className="text-xs md:text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust
          en natuur
        </p>
      </footer>
    </div>
  );
}
