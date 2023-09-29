import { LocationData, Location, LocationFound } from "../types";

type ReducerAction =
  | { type: 'SET_CURRENT_LOCATION', payload: Location }
  | { type: 'ADD_RECENT_LOCATION', payload: LocationFound }

const locationDataReducer = (state: LocationData, action: ReducerAction): LocationData => {
  switch (action.type) {
    case 'SET_CURRENT_LOCATION': {
      const newLocation = action.payload
      const newLocationDataState = { ...state, currentLocation: newLocation }
      return newLocationDataState
    }
    case 'ADD_RECENT_LOCATION': {
      const newRecentLocation = action.payload
      const recentLocations = state.recentLocations
      recentLocations.splice(7)
      const newValueRecentLocations = [newRecentLocation, ...recentLocations]

      const newLocationDataState = { ...state, recentLocations: newValueRecentLocations }
      return newLocationDataState
    }
  }
}
export default locationDataReducer