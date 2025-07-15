export default function OverOns() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">

        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-6 tracking-tight">
          Over ons
        </h1>

        <p className="mb-6 text-base leading-relaxed">
          Minicamping <strong>De Petronellahoeve</strong> is een klassieke
          boerderijcamping in de bosrijke omgeving van Bergeijk. We beschikken
          over ongeveer 15 ruime staanplaatsen zonder vaste afmetingen –{" "}
          <em>voldoende ruimte en comfort staan centraal</em>.
        </p>

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

        <p className="text-base leading-relaxed">
          We zijn aangesloten bij{" "}
          <strong className="text-[#FFC847]">SVR (Stichting Vrije Recreatie)</strong>.
          <br />
          Ben je geen lid? Neem gerust contact met ons op via mail, telefoon of
          WhatsApp – we helpen je graag verder!
        </p>
      </div>
    </div>
  );
}
