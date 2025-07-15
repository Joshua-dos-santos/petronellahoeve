import ImageCarousel from "../../components/image-carousel";
import Navbar from "../../components/navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F4F7FA] text-[#333] font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="relative h-[calc(100vh-4rem)] w-full">
          <ImageCarousel />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
              Petronellahoeve
            </h1>
            <p className="text-xl mt-4 text-white max-w-2xl drop-shadow">
              Rust, natuur en buitenleven in het mooie Bergeijk
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-[#565857] text-white text-center py-4 absolute bottom-0 w-full z-20">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust
          en natuur
        </p>
      </footer>
    </div>
  );
}
