import { WeatherStates } from './components/CardWeather'
import { responseFiveDaysItem, responseCurrentWeather, responseFiveDays, responseLocationsFoundItem } from './utils/responseApiBody'

export enum UnitMeasure {
  celcius = 'metric',
  fahrenheit = 'imperial',
  kelvin = '' // this is default unit in API
}

export type WeatherForecastDataItem = typeof responseFiveDaysItem

export type WeatherCurrentData = typeof responseCurrentWeather
export type WeatherForecastData = typeof responseFiveDays & {
  list: WeatherForecastDataItem[]
}

export type WeatherData = {
  weatherCurrentData: WeatherCurrentData,
  weatherForecastData: WeatherForecastData
}

export type Location = {
  lat: number,
  lon: number,
}

export type LocationFoundResponseApiItem = typeof responseLocationsFoundItem

export type LocationFound = {
  coords: Location,
  name: string,
  siglas: string
}

export type LocationData = {
  currentLocation: Location,
  recentLocations: LocationFound[]
}

