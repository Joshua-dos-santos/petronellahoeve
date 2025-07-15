export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#333] pt-24 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-6 sm:p-10">
        <h1 className="text-4xl font-extrabold text-[#FFC847] mb-6 tracking-tight">
          Contact
        </h1>

        <p className="mb-6 text-base leading-relaxed">
          Je kunt ons bereiken via de volgende gegevens:
        </p>

        <div className="mb-6 space-y-1 text-base">
          <p><strong>Petronellahoeve</strong></p>
          <p>Burgemeester Aartslaan 45</p>
          <p>5571 TR Bergeijk</p>
          <p>Nederland</p>
        </div>

        <div className="mb-6 space-y-2 text-base">
          <p>
            <strong>Telefoon:</strong>{" "}
            <a href="tel:+31497571629" className="text-blue-600 underline hover:text-blue-800">
              +31 (0)497 571629
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/31628054966" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              +31 (0)6 28054966
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:petronellahoeve@hetnet.nl" className="text-blue-600 underline hover:text-blue-800">
              petronellahoeve@hetnet.nl
            </a>
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Geen lid van SVR? Geen probleem – neem gerust contact met ons op via
          mail, telefoon of WhatsApp voor informatie en reserveringen.
        </p>
      </div>
    </div>
  );
}
