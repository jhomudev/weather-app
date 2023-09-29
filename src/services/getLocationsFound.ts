import { MY_API_KEY } from '../utils/contants'

const API_WEATHER_ENDPOINT = 'https://api.openweathermap.org/geo/1.0/direct'

const getLocationsFound = async ({ locationKeyword }: { locationKeyword: string }) => {
  try {
    const urlRequest = `${API_WEATHER_ENDPOINT}?q=${locationKeyword}&limit=7&appid=${MY_API_KEY}`
    const req = await fetch(urlRequest)
    const res = await req.json()
    return res
  } catch (error) {
    throw new Error('Ocurrio un error en la llamada a la API\n' + error)
  }
}
export default getLocationsFound