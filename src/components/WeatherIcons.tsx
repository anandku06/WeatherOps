import React from "react";

type Props = {
  src: string;
};

const WeatherIcons = ({ src }: Props) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Weather Icon"
    />
  );
};

export default WeatherIcons;
