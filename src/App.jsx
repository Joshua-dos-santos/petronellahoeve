import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
import Omgeving from "./pages/omgeving";
import Contact from "./pages/Contact";
import OverOns from "./pages/over-ons";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/omgeving" element={<Omgeving />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
