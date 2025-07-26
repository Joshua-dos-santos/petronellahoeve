import { Link } from "react-router-dom";
import ImageCarousel from "../../components/image-carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#F4F7FA] text-[#333] font-sans relative">
      <main className="flex-grow pt-16">
        <div className="relative h-full w-full">
          <ImageCarousel
            images={[
              "/images/camping1.webp",
              "/images/camping2.webp",
              "/images/camping3.webp",
            ]}
            height="h-screen"
            autoplay={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-6 z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
              Petronellahoeve
            </h1>
            <p className="text-lg md:text-xl mt-3 text-white max-w-xl drop-shadow-sm">
              Rust, natuur en buitenleven in het mooie Bergeijk
            </p>
            <Link
              to="/over-ons"
              className="mt-6 inline-block bg-[#FFC847] hover:bg-[#e6b73a] text-black font-semibold px-6 py-2 rounded-full transition shadow-md"
            >
              Bekijk de camping
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-[#444] text-white text-center py-4 w-full z-20 absolute bottom-0 left-0 text-sm shadow-inner">
        <p>
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust
          en natuur
        </p>
      </footer>
    </div>
  );
}
