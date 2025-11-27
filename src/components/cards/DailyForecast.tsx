import React from "react";
import Card from "./Card";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";

type Props = {};

const DailyForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });

  return (
    <>
      <Card title="Daily Forecast">
        <div className="flex flex-col gap-4">
          {data?.daily.map((day) => (
            <div key={day.dt} className="flex justify-between">
              <p className="w-9">
                {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                  weekday: "short",
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="Weather Icon"
              />
              <p>{Math.round(day.temp.day)}°C</p>
              <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
              <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default DailyForecast;
