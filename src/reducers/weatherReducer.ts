import { WeatherCurrentData, WeatherData, WeatherForecastData } from "../types"

type ReducerAction = |
{ type: 'SET_CURRENT_WEATHER_DATA', payload: WeatherCurrentData } |
{ type: 'SET_FORECAST_WEATHER_DATA', payload: WeatherForecastData }

const weatherReducer = (state: WeatherData, action: ReducerAction): WeatherData => {
  switch (action.type) {
    case 'SET_CURRENT_WEATHER_DATA': {
      const currentWeatherData = action.payload
      const newWeatherDataState = { ...state, weatherCurrentData: currentWeatherData }
      return newWeatherDataState
    }
    case 'SET_FORECAST_WEATHER_DATA': {
      const forecastWeatherData = action.payload
      const newWeatherDataState = { ...state, weatherForecastData: forecastWeatherData }
      return newWeatherDataState
    }
  }
}
export default weatherReducer