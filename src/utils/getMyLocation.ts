import { Location } from "../types"

const getMyLocation = async () => {
  const findLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            resolve({ lat, lon });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error('La geolocalización no está disponible en este navegador.'));
      }
    })
  }

  const data = await findLocation()
  return data
}

export default getMyLocation
