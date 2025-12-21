import "leaflet/dist/leaflet.css";
import { useMap } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import type { Coords } from "../types";

const API_key = import.meta.env.VITE_WEATHER_API_KEY;

type Props = {
  coords: Coords;
  onMapClick: (newCoords: Coords) => void;
  mapType: string;
};

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, long } = coords;

  return (
    <>
      <MapContainer
        center={[lat, long]}
        zoom={5}
        style={{ width: "1000px", height: "500px" }}
      >
        <MapClick onMapClick={onMapClick} coords={coords} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_key}`}
        />
        <Marker position={[lat, long]} />
      </MapContainer>
    </>
  );
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (newCoords: Coords) => void;
  coords: Coords;
}) {
  const map = useMap();
  map.panTo([coords.lat, coords.long]);

  map.on("click", function (e) {
    const { lat, lng } = e.latlng;
    onMapClick({ lat: lat, long: lng });
  });

  return null;
}
