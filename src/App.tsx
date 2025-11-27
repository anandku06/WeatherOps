import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import DailyForecast from "./components/cards/DailyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 37.7749, long: -122.4194 }),
  });

  return (
    <div className="flex flex-col gap-8">
      {/* <Card title="System">{JSON.stringify(data)}</Card> */}
      {/* <Card title="Weather">{JSON.stringify(data?.weather)}</Card> */}
      <DailyForecast />
      {/* {JSON.stringify(data)} */}
    </div>
  );
}

export default App;
