import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet/TileLayer";

type Props = {};

export default function Map({}: Props) {
  return (
    <>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={5}
        style={{ width: "1000px", height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.7749, -122.4194]} />
      </MapContainer>
    </>
  );
}
