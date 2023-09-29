import { Location, UnitMeasure } from '../types'
import { MY_API_KEY } from '../utils/contants'

const API_FD_WEATHER_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast'

type Props = Location & { unit: UnitMeasure }

export const getForecastWeatherData = async ({ lat, lon, unit }: Props) => {
  try {
    const unitPerReq = unit && `&units=${unit}`
    const urlRequest = `${API_FD_WEATHER_ENDPOINT}?lat=${lat}&lon=${lon}&appid=${MY_API_KEY}${unitPerReq}`
    const req = await fetch(urlRequest)
    const res = await req.json()
    return res
  } catch (error) {
    throw new Error('Ocurrio un error en la llamada a la API\n' + error)
  }
}

export default getForecastWeatherData
