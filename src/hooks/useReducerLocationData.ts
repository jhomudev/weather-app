import { useReducer } from "react"
import locationDataReducer from "../reducers/locationDataReducer"
import { Location, LocationData, LocationFound } from "../types"
import { getDataLocalStorage } from "../utils/localStorageActions"

const locationDataInLocaStorage = getDataLocalStorage({
  nameItem: '__weatherapp_locationData__',
  needToParse: true
}) as LocationData

const defaultlocation: Location = {// default London coords
  lat: 51.50853,
  lon: -0.12574
}

const initialState: LocationData = {
  currentLocation: locationDataInLocaStorage?.currentLocation ?? defaultlocation,
  recentLocations: locationDataInLocaStorage?.recentLocations ?? []
}

const useReducerLocationData = () => {
  const [state, dispatch] = useReducer(locationDataReducer, initialState)

  function setCurrentLocation(currentLocation: Location) {
    dispatch({
      type: 'SET_CURRENT_LOCATION',
      payload: currentLocation
    })
  }

  function addRecentLocation(recentLocation: LocationFound) {
    dispatch({
      type: 'ADD_RECENT_LOCATION',
      payload: recentLocation
    })
  }

  return {
    locationData: state,
    setCurrentLocation,
    addRecentLocation
  }
}
export default useReducerLocationData