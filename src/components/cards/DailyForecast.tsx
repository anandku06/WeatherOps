import React from "react";
import Card from "./Card";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";

type Props = {};

const WindForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });

  return (
    <>
      <Card title="Daily Forecast">
        <div className="flex flex-col gap-4">
          
        </div>
      </Card>
    </>
  );
};

export default WindForecast;
