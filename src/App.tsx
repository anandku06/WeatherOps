import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getGeoCode } from "./api";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import CurrentWeather from "./components/cards/CurrentWeather";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import Map from "./components/Map";
import type { Coords } from "./types";

function App() {
  const [coordinates, setCoordinates] = useState<Coords>({ lat: 0, long: 0 });

  const [location, setLocation] = useState<string>("Tokyo");
  const { data: geoCodeData } = useQuery({
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
      : { lat: geoCodeData?.[0].lat ?? 0, long: geoCodeData?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown location={location} setLocation={setLocation} />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
