const API_key = import.meta.env.VITE_WEATHER_API_KEY

export async function getWeather({lat, long} : {lat: number, long: number}) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,alerts&appid=${API_key}`)

    return res.json()
}