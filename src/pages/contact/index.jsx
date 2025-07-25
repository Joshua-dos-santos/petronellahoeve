import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-3xl h-4/5 bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-8 tracking-tight">
          Contact
        </h1>

        {/* SEO-optimized intro */}
        <p className="mb-6 text-base leading-relaxed">
          Heb je vragen over onze minicamping in Bergeijk, beschikbaarheid of
          tarieven? Neem gerust contact met ons op – we helpen je graag verder!
        </p>

        {/* Highlighted WhatsApp notice */}
        <div className="bg-[#FFF2CC] border border-[#FFE08A] p-4 rounded-md text-sm mb-10">
          Voor snelle vragen zijn we goed bereikbaar via{" "}
          <strong>WhatsApp</strong> op{" "}
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

        {/* 2-column grid for address and contact */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Address */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Bezoekadres</h2>
            <address className="not-italic space-y-2 text-base leading-relaxed">
              <p>
                <FiMapPin className="inline-block mr-2 text-[#FFC847]" />
                <strong>Petronellahoeve</strong>
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

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contactgegevens</h2>
            <div className="space-y-3 text-base leading-relaxed">
              <p>
                <FiPhone className="inline-block mr-2 text-[#FFC847]" />
                <strong>Telefoon:</strong>{" "}
                <a
                  href="tel:+31497571629"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  +31 (0)497 571629
                </a>
              </p>
              <p>
                <FiMessageSquare className="inline-block mr-2 text-[#FFC847]" />
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/31628054966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  +31 (0)6 28054966
                </a>
              </p>
              <p>
                <FiMail className="inline-block mr-2 text-[#FFC847]" />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:petronellahoeve@hetnet.nl"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  petronellahoeve@hetnet.nl
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Final note */}
        <p className="mt-10 text-base leading-relaxed">
          Geen lid van <strong>SVR</strong>? Geen probleem – neem gerust contact
          met ons op via mail, telefoon of WhatsApp voor informatie en
          reserveringen.
        </p>
      </div>
    </div>
  );
}
