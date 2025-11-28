import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });

  return (
    <div className="flex flex-col gap-8">
      {/* <Card title="System">{JSON.stringify(data)}</Card> */}
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;
