import React from "react";
import Card from "./Card";
import { getWeather } from "../../api";
import { useSuspenseQuery } from "@tanstack/react-query";
import WeatherIcons from "../WeatherIcons";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

const HourlyForecast = ({ coords }: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, long: coords.long }),
  });
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-6 overflow-x-auto"
    >
      {data?.hourly.map((hour) => (
        <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <WeatherIcons src={hour?.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
};

export default HourlyForecast;
