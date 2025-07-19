export default function OverOns() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl h-5/6 bg-white shadow-md rounded-xl p-6 sm:p-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Over ons
        </h1>

        {/* Introduction */}
        <p className="mb-6 text-base leading-relaxed">
          <strong>Minicamping De Petronellahoeve</strong> is een klassieke
          boerderijcamping, gelegen in de bosrijke omgeving van Bergeijk. We
          beschikken over ongeveer 15 ruime staanplaatsen zonder vaste
          afmetingen – <em>voldoende ruimte en comfort staan centraal</em>.
        </p>

        {/* Amenities List */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Voorzieningen</h2>
          <ul className="space-y-3 pl-5 list-none">
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
        </div>

        {/* SVR Membership Info */}
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
