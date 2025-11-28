import React from "react";
import Card from "./Card";
import { getWeather } from "../../api";
import { useSuspenseQuery } from "@tanstack/react-query";

type Props = {};

const HourlyForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });
  return (
    <Card title="Hourly Forecast (48 hours)" childrenClassName="flex gap-6">
        {data?.hourly.map((hour) => (
            <div className="flex flex-col gap-2">
                <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
            </div>
        ))}
    </Card>
  )
};

export default HourlyForecast;
