import Card from "./Card";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import WeatherIcons from "../WeatherIcons";

type Props = {};

const DailyForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });

  return (
    <>
      <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div key={day.dt} className="flex justify-between">
            <p className="w-9">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: "short",
              })}
            </p>
            <WeatherIcons src={day?.weather[0].icon} />
            <p>{Math.round(day.temp.day)}°C</p>
            <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
            <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
          </div>
        ))}
      </Card>
    </>
  );
};

export default DailyForecast;
