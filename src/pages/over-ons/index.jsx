import { useEffect } from "react";
import ImageCarousel from "../../components/image-carousel";

export default function OverOns() {
  useEffect(() => {
    document.title = "Over Ons – Minicamping Petronella Hoeve";
    setCanonical("https://petronellahoeve.nl/over-ons");
  }, []);

  const galleryImages = [
    "/images/gallery1.webp",
    "/images/gallery2.webp",
    "/images/gallery3.webp",
    "/images/gallery4.webp",
    "/images/gallery5.webp",
    "/images/gallery6.webp",
    "/images/gallery7.webp",
    "/images/gallery8.webp",
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Over Minicamping Petronella Hoeve
        </h1>
        <p className="mb-6 text-base leading-relaxed">
          <strong>Minicamping De Petronella Hoeve</strong> is een sfeervolle
          boerderijcamping gelegen in het groene buitengebied van{" "}
          <strong>Bergeijk</strong>.
        </p>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">
            Sfeerimpressie van onze camping
          </h2>
          <ImageCarousel
            images={galleryImages}
            height="h-[400px]"
            autoplay={true}
            rounded={true}
            showArrows
          />
        </div>
        <h2 className="text-lg font-semibold mb-4">
          Voorzieningen op onze camping
        </h2>
        <ul className="mb-8 space-y-3 pl-5 list-none">
          {[
            "6 Ampère stroom",
            "Douches: €0.50",
            "Toiletten beschikbaar",
            "Gratis Wifi bij het sanitair",
            "Huisdieren zijn welkom voor een bedrag van €1.00",
            "Seizoenplaatsen beschikbaar",
            "Staplaatsen zonder vaste afmetingen",
          ].map((item, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 top-1 text-[#FFC847]">✔</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="bg-[#FFF2CC] border border-[#FFE08A] rounded-md p-4 text-sm leading-relaxed">
          Wij zijn trots aangesloten bij{" "}
          <a
            href="https://www.svr.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC847] underline hover:text-[#e6b73a]"
          >
            Stichting Vrije Recreatie (SVR)
          </a>
          . Geen lid? Geen probleem – neem gerust contact met ons op.
        </div>
      </div>
    </div>
  );
}

function setCanonical(url) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}
