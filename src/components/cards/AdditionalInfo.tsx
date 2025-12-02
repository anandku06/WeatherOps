import React from "react";
import Card from "./Card";
import { getWeather } from "../../api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { number } from "zod";

type Props = {};

const AdditionalInfo = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map(({ label, value }) => (
        <div key={value} className="flex justify-between">
          <span className="text-gray-500">{label}</span>
          <span>
            <FormatComponent value={value} num={data?.current[value]} />
          </span>
        </div>
      ))}
    </Card>
  );
};

function FormatComponent({ value, num }: { value: string; num: number }) {
  if (value === "sunset" || value === "sunrise") {
    return new Date(num * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return number;
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
  },
  {
    label: "UV Index",
    value: "uvi",
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
  },
  {
    label: "Sunset",
    value: "sunset",
  },
  {
    label: "Sunrise",
    value: "sunrise",
  },
] as const;

export default AdditionalInfo;
