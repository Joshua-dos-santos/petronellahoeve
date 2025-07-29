import { useEffect } from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact – Minicamping Petronella Hoeve";
    setCanonical("https://petronellahoeve.nl/contact");
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-3xl h-4/5 bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Contact
        </h1>
        <p className="mb-6 text-base leading-relaxed">
          Heb je vragen? Neem gerust contact met ons op!
        </p>
        <div className="bg-[#FFF2CC] border border-[#FFE08A] p-4 rounded-md text-sm mb-10">
          Voor snelle vragen kun je ons bereiken via <strong>WhatsApp</strong>{" "}
          op{" "}
          <a
            href="https://wa.me/31628054966"
            className="text-blue-700 underline hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            +31 (0)6 28054966
          </a>
          .
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-3">Bezoekadres</h2>
            <address className="not-italic space-y-2 text-base leading-relaxed">
              <p>
                <FiMapPin className="inline-block mr-2 text-[#FFC847]" />
                <strong>Petronella Hoeve</strong>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps?q=Burgemeester+Aartslaan+45,+Bergeijk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Burgemeester Aartslaan 45
                  <br />
                  5571 TR Bergeijk, Nederland
                </a>
              </p>
            </address>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Contactgegevens</h2>
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                <FiPhone className="inline-block mr-2 text-[#FFC847]" />
                <strong>Telefoon:</strong>{" "}
                <a href="tel:+31497571629" className="text-blue-600 underline">
                  +31 (0)497 571629
                </a>
              </p>
              <p>
                <FiMessageSquare className="inline-block mr-2 text-[#FFC847]" />
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/31628054966"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  +31 (0)6 28054966
                </a>
              </p>
              <p>
                <FiMail className="inline-block mr-2 text-[#FFC847]" />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:petronellahoeve@hetnet.nl"
                  className="text-blue-600 underline"
                >
                  petronellahoeve@hetnet.nl
                </a>
              </p>
            </div>
          </div>
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
