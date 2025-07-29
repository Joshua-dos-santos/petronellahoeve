import { useEffect } from "react";
import MapLocation from "../../components/map-location";

export default function Omgeving() {
  useEffect(() => {
    document.title = "Omgeving – Minicamping Petronella Hoeve";
    setCanonical("https://petronellahoeve.nl/omgeving");
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Omgeving van Minicamping Petronella Hoeve
        </h1>
        <p className="mb-6 text-base leading-relaxed">
          Onze <strong>minicamping in Bergeijk</strong> ligt in een prachtige
          omgeving. Perfect voor natuurliefhebbers, fietsers en wandelaars.
        </p>
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Wandelen en fietsen</h2>
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
            Het centrum van Bergeijk ligt op korte afstand met winkels, horeca,
            en werk van Gerrit Rietveld.
          </p>
        </section>
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
