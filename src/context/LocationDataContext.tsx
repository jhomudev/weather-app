import { ReactNode, createContext } from "react"
import { LocationData, Location, LocationFound } from "../types"
import useReducerLocationData from "../hooks/useReducerLocationData"

type Context = {
  locationData: LocationData,
  addRecentLocation: (recentLocation: LocationFound) => void,
  setCurrentLocation: (currentLocation: Location) => void
}

export const LocationDataContext = createContext<Context>({} as Context)

const LocationDataContextProvider = ({ children }: { children: ReactNode }) => {
  const { locationData, addRecentLocation, setCurrentLocation } = useReducerLocationData()

  return (
    <LocationDataContext.Provider value={{
      locationData,
      addRecentLocation,
      setCurrentLocation
    }}>
      {children}
    </LocationDataContext.Provider>
  )
}
export default LocationDataContextProvider