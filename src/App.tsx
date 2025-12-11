import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeoCode } from "./api";

function App() {
  const [coordinates, setCoordinates] = useState<Coords>({
    lat: 37.7749,
    long: -122.4194,
  });

  const [location, setLocation] = useState<string>("Tokyo");
  const { data } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeoCode(location),
  });

  const onMapClick = (newCoords: Coords) => {
    setCoordinates(newCoords);
    setLocation("custom");
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: data?.[0].lat ?? 0, long: data?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown />
      <Map coords={coordinates} onMapClick={onMapClick} />
      <CurrentWeather coords={coordinates} />
      <HourlyForecast coords={coordinates} />
      <DailyForecast coords={coordinates} />
      <AdditionalInfo coords={coordinates} />
    </div>
  );
}

export default App;
