import ImageCarousel from "../../components/image-carousel";

export default function OverOns() {
  const galleryImages = [
    "/images/gallery1.webp",
    "/images/gallery2.webp",
    "/images/gallery3.webp",
    "/images/gallery4.webp",
    "/images/gallery5.webp",
    "/images/gallery6.webp",
    "/images/gallery7.webp",
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        {/* SEO-optimized heading */}
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Over Minicamping Petronellahoeve
        </h1>

        {/* Keyword-rich introduction */}
        <p className="mb-6 text-base leading-relaxed">
          <strong>Minicamping De Petronellahoeve</strong> is een sfeervolle
          boerderijcamping gelegen in het groene buitengebied van{" "}
          <strong>Bergeijk</strong>. Met circa 15 ruime staanplaatsen zonder
          vaste afmetingen bieden we een rustige, comfortabele kampeerervaring
          midden in de natuur.
        </p>

        {/* Image Carousel with descriptive alt text */}
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

        {/* Amenities section */}
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

        {/* SVR block with keyword context */}
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
          , een organisatie voor kamperen bij de boer. <br />
          Geen lid? Geen probleem – neem gerust contact met ons op via mail,
          telefoon of WhatsApp voor vragen of reserveringen.
        </div>
      </div>
    </div>
  );
}
