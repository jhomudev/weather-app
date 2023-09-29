import { useCallback, useContext } from "react"
import { WeatherDataContext } from "../context/WeatherDataContext"
import getCurrentWeatherData from "../services/getCurrentWeatherData"
import getForecastWeatherData from "../services/getForecastWeatherData"
import useUnitMeasure from "./useUnitMeasure"
import useLocationData from "./useLocationData"

const useWeatherData = () => {
  const { weatherData, setWeatherCurrentData, setWeatherForecastData } = useContext(WeatherDataContext)
  const { unitMeasure } = useUnitMeasure()
  const { locationData } = useLocationData()

  const getWeatherDataAll = useCallback(async () => {
    const weatherCurrentData = await getCurrentWeatherData({ ...locationData.currentLocation, unit: unitMeasure })
    const weatherForecastData = await getForecastWeatherData({ ...locationData.currentLocation, unit: unitMeasure })

    setWeatherCurrentData(weatherCurrentData)
    setWeatherForecastData(weatherForecastData)
  }, [locationData, unitMeasure])

  return { weatherData, getWeatherDataAll }
}
export default useWeatherData