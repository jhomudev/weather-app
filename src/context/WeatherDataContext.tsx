import { ReactNode, createContext } from "react"
import { WeatherCurrentData, WeatherData, WeatherForecastData } from "../types"
import useReducerWeather from "../hooks/useReducerWeather"

type Context = {
  weatherData: WeatherData,
  setWeatherCurrentData: (weatherCurrentData: WeatherCurrentData) => void,
  setWeatherForecastData: (weatherForecastData: WeatherForecastData) => void
}

export const WeatherDataContext = createContext<Context>({} as Context)

const WeatherContextProvider = ({ children }: { children: ReactNode }) => {
  const { setWeatherCurrentData, weatherData, setWeatherForecastData } = useReducerWeather()

  return (
    <WeatherDataContext.Provider value={{
      weatherData,
      setWeatherCurrentData,
      setWeatherForecastData
    }}>
      {children}
    </WeatherDataContext.Provider>
  )
}
export default WeatherContextProvider