import { useContext } from "react"
import { LocationDataContext } from "../context/LocationDataContext"

const useLocationData = () => {
  const { locationData, addRecentLocation, setCurrentLocation } = useContext(LocationDataContext)

  return { locationData, addRecentLocation, setCurrentLocation }
}
export default useLocationData