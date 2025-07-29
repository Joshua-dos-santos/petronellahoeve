import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapLocation() {
  const position = [51.2977, 5.3778];

  return (
    <div
      className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md mb-8"
      aria-label="Locatie van Petronella Hoeve op de kaart"
    >
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> auteurs'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <strong>Petronella Hoeve</strong>
            <br />
            Burgemeester Aartslaan 45
            <br />
            Bergeijk
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
