import ImageCarousel from "../../components/image-carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F7FA] text-[#333] font-sans">
      <main className="flex-grow">
        {/* Hero Section with Carousel Background */}
        <div className="relative h-[92.5vh] w-full">
          <ImageCarousel />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
              Petronellahoeve
            </h1>
            <p className="text-xl mt-4 text-white max-w-2xl drop-shadow">
              Rust, natuur en buitenleven in het mooie Bergeijk
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-[#565857] text-white text-center py-6">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust en natuur
        </p>
      </footer>
    </div>
  );
}
