import { weatherSchema } from "./schemas/weatherSchema";

const API_key = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather({ lat, long }: { lat: number; long: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&units=metric&appid=${API_key}`
  );

  const data = await res.json();
  return weatherSchema.parse(data);
}