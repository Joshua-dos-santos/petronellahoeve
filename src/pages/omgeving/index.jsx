import MapLocation from "../../components/map-location";

export default function Omgeving() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Omgeving
        </h1>

        <p className="mb-6 text-base leading-relaxed">
          Onze minicamping ligt net buiten het dorp <strong>Bergeijk</strong>,
          midden in het groen. De omgeving is ideaal voor liefhebbers van rust,
          natuur en het buitenleven.
        </p>

        <p className="mb-6 text-base leading-relaxed">
          Je kunt direct vanaf de camping aansluiten op verschillende{" "}
          <strong>knooppuntroutes</strong> voor wandelen en fietsen.
          Populaire gebieden zijn onder andere:
        </p>

        <ul className="mb-8 space-y-3 pl-5 list-none">
          {[
            "De Malpie",
            "De Maai",
            "De Plateaux-Hageven (NL-BE grens)",
            "Stroomgebied van de Keersop",
          ].map((item, index) => (
            <li key={index} className="relative pl-6">
              <span className="absolute left-0 top-1 text-[#FFC847]">•</span>
              {item}
            </li>
          ))}
        </ul>

        <MapLocation />

        <p className="mt-8 mb-6 text-base leading-relaxed">
          Het centrum van <strong>Bergeijk</strong> is dichtbij en biedt
          winkels, horeca, een dorpsplein en regelmatig evenementen of een
          markt. Ook vind je hier werk van ontwerper{" "}
          <strong>Gerrit Rietveld</strong>, zoals een park en bushokjes.
        </p>

        <p className="text-base leading-relaxed">
          Leuke uitstapjes in de buurt zijn onder andere:{" "}
          <strong>Eersel</strong>, <strong>Valkenswaard</strong> en het
          Belgische <strong>Lommel</strong>.
        </p>
      </div>
    </div>
  );
}
