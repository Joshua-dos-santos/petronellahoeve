import ImageCarousel from "../../components/image-carousel";

export default function OverOns() {
  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Over ons
        </h1>

        {/* Intro text */}
        <p className="mb-6 text-base leading-relaxed">
          <strong>Minicamping De Petronellahoeve</strong> is een klassieke
          boerderijcamping in de bosrijke omgeving van Bergeijk. We beschikken
          over ongeveer 15 ruime staanplaatsen zonder vaste afmetingen –{" "}
          <em>voldoende ruimte en comfort staan centraal</em>.
        </p>

        {/* ✅ Image Carousel */}
        <div className="mb-10">
          <ImageCarousel
            images={galleryImages}
            height="h-[400px]"
            autoplay={true}
            rounded={true}
            showArrows
          />
        </div>

        {/* Amenities */}
        <h2 className="text-lg font-semibold mb-4">Voorzieningen</h2>
        <ul className="mb-8 space-y-3 pl-5 list-none">
          {[
            "6 Ampère stroom",
            "Douches: €0.50",
            "Toiletten beschikbaar",
            "Gratis Wifi bij het sanitair",
            "Huisdieren welkom: €1.00",
            "Seizoenplaatsen beschikbaar",
            "Staplaatsen zonder vaste afmetingen",
          ].map((item, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 top-1 text-[#FFC847]">✔</span>
              {item}
            </li>
          ))}
        </ul>

        {/* SVR Info */}
        <div className="bg-[#FFF2CC] border border-[#FFE08A] rounded-md p-4 text-sm leading-relaxed">
          We zijn aangesloten bij{" "}
          <a
            href="https://www.svr.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC847] underline hover:text-[#e6b73a]"
          >
            SVR (Stichting Vrije Recreatie)
          </a>
          . <br />
          Geen lid? Geen probleem – neem gerust contact met ons op via mail,
          telefoon of WhatsApp. We vertellen je graag meer!
        </div>
      </div>
    </div>
  );
}
