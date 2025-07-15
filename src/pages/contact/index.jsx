export default function Contact() {
  return (
    <>
      <div className="min-h-screen p-10 pt-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4">
          For inquiries, please reach out via email or phone.
        </p>
        <ul className="mt-4">
          <li>Email: test@test.nl </li>
          <li>Phone: 123-456-7890</li>
        </ul>
        <p className="mt-4">We look forward to hearing from you!</p>
      </div>

      <footer className="bg-[#565857] text-white text-center py-4 absolute bottom-0 w-full z-20">
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()} Petronellahoeve – Geniet van de rust
          en natuur
        </p>
      </footer>
    </>
  );
}
