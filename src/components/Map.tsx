import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet";
import type { Coords } from "../types";

type Props = {
  coords: Coords;
  onMapClick: (newCoords: Coords) => void;
};

export default function Map({ coords, onMapClick }: Props) {
  const { lat, long } = coords;

  return (
    <>
      <MapContainer
        center={[lat, long]}
        zoom={5}
        style={{ width: "1000px", height: "500px" }}
      >
        <MapClick onMapClick={onMapClick} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]} />
      </MapContainer>
    </>
  );
}

function MapClick({ onMapClick }: { onMapClick: (newCoords: Coords) => void }) {
  const map = useMap();

  map.on("click", function (e) {
    const { lat, lng } = e.latlng;

    map.panTo([lat, lng]);
    onMapClick({ lat: lat, long: lng });
  });

  return null;
}
