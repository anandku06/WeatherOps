import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

function App() {

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn : () => getWeather({lat: 37.7749, long: -122.4194})
  })

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        WeatherOps
      </h1>
      <p>
        {JSON.stringify(data)}
      </p>
    </>
  )
}

export default App
