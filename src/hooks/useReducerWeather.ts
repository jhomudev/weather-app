import { useReducer } from "react"
import weatherReducer from "../reducers/weatherReducer"
import { WeatherCurrentData, WeatherData, WeatherForecastData } from "../types"

const initialState: WeatherData = {
  weatherCurrentData: {} as WeatherCurrentData,
  weatherForecastData: {} as WeatherForecastData
}
const useReducerWeather = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  const setWeatherCurrentData = (weatherCurrentData: WeatherCurrentData) => {
    dispatch({
      type: 'SET_CURRENT_WEATHER_DATA',
      payload: weatherCurrentData
    })
  }

  const setWeatherForecastData = (weatherForecastData: WeatherForecastData) => {
    dispatch({
      type: 'SET_FORECAST_WEATHER_DATA',
      payload: weatherForecastData
    })
  }

  return {
    weatherData: state,
    setWeatherCurrentData,
    setWeatherForecastData
  }
}
export default useReducerWeather