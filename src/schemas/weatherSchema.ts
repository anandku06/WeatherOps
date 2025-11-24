import { z } from "zod";

const CoordSchema = z.object({
  lon: z.number(),
  lat: z.number(),
});

const WeatherItemSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const MainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  sea_level: z.number(),
  grnd_level: z.number(),
});

const WindSchema = z.object({
  speed: z.number(),
  deg: z.number(),
  // gust optional hota hai, is response me nahi tha
  gust: z.number().optional(),
});

const CloudsSchema = z.object({
  all: z.number(),
});

const SysSchema = z.object({
  type: z.number(),
  id: z.number(),
  country: z.string(),
  sunrise: z.number(),
  sunset: z.number(),
});

export const WeatherResponseSchema = z.object({
  coord: CoordSchema,
  weather: z.array(WeatherItemSchema),
  base: z.string(),
  main: MainSchema,
  visibility: z.number(),
  wind: WindSchema,
  clouds: CloudsSchema,
  dt: z.number(),
  sys: SysSchema,
  timezone: z.number(),
  id: z.number(),
  name: z.string(),
  cod: z.number(),
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;
