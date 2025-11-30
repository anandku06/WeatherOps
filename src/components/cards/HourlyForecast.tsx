import React from "react";
import Card from "./Card";
import { getWeather } from "../../api";
import { useSuspenseQuery } from "@tanstack/react-query";
import WeatherIcons from "../WeatherIcons";

type Props = {};

const HourlyForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-6 overflow-x-auto"
    >
      {data?.hourly.map((hour) => (
        <div className="flex flex-col gap-2">
          <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
          <WeatherIcons src={hour?.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
};

export default HourlyForecast;
