import MapLocation from "../../components/map-location";

export default function Omgeving() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Omgeving van Minicamping Petronellahoeve
        </h1>

        <p className="mb-6 text-base leading-relaxed">
          Onze <strong>minicamping in Bergeijk</strong> ligt in een prachtige,
          groene omgeving. Perfect voor natuurliefhebbers, fietsers en
          wandelaars die willen genieten van rust, ruimte en het buitenleven.
        </p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Wandelen en fietsen</h2>
          <p className="text-base leading-relaxed mb-4">
            Direct vanaf de camping kun je aansluiten op diverse{" "}
            <strong>knooppuntroutes</strong>. Enkele populaire natuurgebieden in
            de omgeving zijn:
          </p>
          <ul className="space-y-3 pl-5 list-none">
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
        </section>

        <section className="my-8">
          <h2 className="text-lg font-semibold mb-3">Locatie op de kaart</h2>
          <MapLocation />
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Dichtbij het centrum</h2>
          <p className="text-base leading-relaxed mb-4">
            Het gezellige centrum van <strong>Bergeijk</strong> ligt op korte
            afstand. Hier vind je supermarkten, winkels, horeca, een dorpsplein
            en regelmatig evenementen of een markt. Ook is er werk te zien van
            ontwerper <strong>Gerrit Rietveld</strong>, waaronder een park en
            bushokjes.
          </p>

          <p className="text-base leading-relaxed">
            Leuke uitstapjes in de regio zijn onder andere{" "}
            <strong>Eersel</strong>, <strong>Valkenswaard</strong> en het
            Belgische <strong>Lommel</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
